'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Locale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLang: Locale;
  className?: string;
}

export default function LanguageSwitcher({ currentLang, className = '' }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const targetLang: Locale = currentLang === 'ar' ? 'en' : 'ar';
  const label = currentLang === 'ar' ? 'English' : 'العربية';

  const handleSwitch = () => {
    if (!pathname) {
      router.push(`/${targetLang}`);
      return;
    }

    // Replace the language segment in current URL
    // e.g., /ar/about -> /en/about
    // /ar -> /en
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${targetLang}`);
    } else if (segments[0] === 'ar' || segments[0] === 'en') {
      segments[0] = targetLang;
      router.push('/' + segments.join('/'));
    } else {
      router.push(`/${targetLang}/${segments.join('/')}`);
    }
  };

  return (
    <button
      onClick={handleSwitch}
      aria-label={`Switch to ${label}`}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 border ${
        'bg-[#111111] hover:bg-[#1a1a1a] border-[#222222] text-stone-200 hover:text-white dark:bg-[#111111] dark:hover:bg-[#1a1a1a] dark:border-[#222222] dark:text-stone-200 dark:hover:text-white'
      } bg-white hover:bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-[#8bc34a]" />
      <span>{label}</span>
    </button>
  );
}
