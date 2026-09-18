import { NextResponse } from 'next/server';
import { getDynamicSiteData } from '@/lib/dynamicData';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const data = await getDynamicSiteData();
    return NextResponse.json({
      success: true,
      data
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
