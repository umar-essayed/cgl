'use client';

import { useEffect } from 'react';
import { Locale } from '@/lib/i18n';

export default function LangDirSync({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  return null;
}
