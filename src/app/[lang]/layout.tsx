import React from 'react';
import { Locale, isValidLocale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import LangDirSync from '@/components/theme/LangDirSync';
import ThemeSync from '@/components/theme/ThemeSync';
import PageLoader from '@/components/common/PageLoader';
import { getDynamicSiteData } from '@/lib/dynamicData';

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
  const data = await getDynamicSiteData();
  const themeColor = ((data.settings as any)?.themeColor || 'blue') as 'blue' | 'green';
  const loaderColor = themeColor === 'green' ? '#16a34a' : '#3b76b3';
  const loaderGlow = themeColor === 'green' ? 'rgba(22, 163, 74, 0.45)' : 'rgba(59, 118, 179, 0.45)';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col">
      <LangDirSync lang={lang} />
      <ThemeSync themeColor={themeColor} />
      <PageLoader color={loaderColor} glowColor={loaderGlow} />
      {children}
    </div>
  );
}
