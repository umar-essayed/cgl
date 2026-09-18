import React from 'react';
import { Locale, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import LangDirSync from '@/components/theme/LangDirSync';
import PageLoader from '@/components/common/PageLoader';

export function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const isRtl = lang === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col">
      <LangDirSync lang={lang} />
      <PageLoader color="#8bc34a" glowColor="rgba(139, 195, 74, 0.45)" />
      {children}
    </div>
  );
}
