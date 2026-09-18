import { NextResponse } from 'next/server';
import { getAdminFirestore } from '@/lib/firebaseAdmin';

// Query proposal status by refNumber or ID
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const ref = searchParams.get('ref');
    const id = searchParams.get('id');

    if (!ref && !id) {
      return NextResponse.json({ success: false, message: 'Reference number or ID required' }, { status: 400 });
    }

    const db = getAdminFirestore();
    if (!db) {
      return NextResponse.json({ success: false, message: 'Database unavailable' }, { status: 503 });
    }

    let docData: any = null;

    if (id) {
      const doc = await db.collection('rfq_requests').doc(id).get();
      if (doc.exists) {
        docData = { id: doc.id, ...doc.data() };
      }
    } else if (ref) {
      const snapshot = await db.collection('rfq_requests').where('refNumber', '==', ref.trim()).limit(1).get();
      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        docData = { id: doc.id, ...doc.data() };
      }
    }

    if (!docData) {
      return NextResponse.json({ success: false, message: 'Proposal not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: {
        id: docData.id,
        refNumber: docData.refNumber,
        fullName: docData.fullName,
        projectType: docData.projectType,
        location: docData.location,
        selectedServices: docData.selectedServices,
        status: docData.status || 'new',
        createdAt: docData.createdAt
      }
    });
  } catch (error: any) {
    console.error('Error fetching RFQ:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Submit proposal request
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.fullName || !body.phone) {
      return NextResponse.json(
        { success: false, message: 'الاسم ورقم الهاتف مطلوبان' }, 
        { status: 400 }
      );
    }

    const db = getAdminFirestore();
    if (!db) {
      return NextResponse.json(
        { success: false, message: 'تعذر الاتصال بقاعدة البيانات' }, 
        { status: 500 }
      );
    }

    const docRef = db.collection('rfq_requests').doc();
    
    // Generate clean human-readable reference number (e.g. CGL-RFQ-2026-84192)
    const year = new Date().getFullYear();
    const randomSeq = Math.floor(10000 + Math.random() * 90000);
    const refNumber = `CGL-RFQ-${year}-${randomSeq}`;

    const rfqData = {
      id: docRef.id,
      refNumber,
      fullName: body.fullName.trim(),
      companyName: (body.companyName || body.company || '').trim(),
      phone: body.phone.trim(),
      email: (body.email || '').trim(),
      projectType: body.projectType || '',
      location: body.location || '',
      selectedServices: Array.isArray(body.selectedServices) ? body.selectedServices : [body.selectedServices].filter(Boolean),
      estimatedAreaDepth: body.estimatedAreaDepth || '',
      notes: (body.notes || '').trim(),
      lang: body.lang || 'ar',
      status: 'new', // new | reviewed | contacted | closed
      createdAt: new Date().toISOString()
    };

    await docRef.set(rfqData);

    return NextResponse.json({ 
      success: true, 
      id: docRef.id, 
      refNumber, 
      data: rfqData 
    });
  } catch (error: any) {
    console.error('Error saving RFQ to Firestore:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
