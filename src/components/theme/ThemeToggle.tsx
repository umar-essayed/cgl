'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        aria-label="تبديل المظهر / Toggle theme"
        className={`w-9 h-9 rounded-lg flex items-center justify-center border border-[#1f1f1f] bg-[#0a0a0a] text-stone-400 ${className}`}
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'تفعيل الوضع الفاتح / Switch to light mode' : 'تفعيل الوضع الداكن / Switch to dark mode'}
      title={isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
      className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 border ${
        isDark
          ? 'bg-[#111111] hover:bg-[#1a1a1a] border-[#222222] text-[#8bc34a] hover:border-[#8bc34a]/40 shadow-sm'
          : 'bg-white hover:bg-slate-100 border-slate-200 text-amber-600 hover:border-slate-300 shadow-sm'
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
