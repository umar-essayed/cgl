import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect to default locale (/ar) if missing
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname === '/' ? '' : pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip internal Next.js paths, public assets, and metadata files
    '/((?!api|_next/static|_next/image|assets|uploads|favicon.ico|icon.png|apple-icon.png|opengraph-image.png|twitter-image.png|og-image.jpg|.*\\..*).*)',
  ],
};
