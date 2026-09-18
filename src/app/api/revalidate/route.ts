import { revalidateTag, revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag') || 'site-data';

    revalidateTag(tag, 'max');
    revalidateTag('site-data', 'max');
    revalidatePath('/', 'layout');
    revalidatePath('/[lang]', 'layout');
    revalidatePath('/ar');
    revalidatePath('/en');

    return NextResponse.json({
      revalidated: true,
      tag,
      now: Date.now()
    });
  } catch (err: any) {
    return NextResponse.json({ revalidated: false, error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  return GET(request);
}
