'use client';

import { useEffect } from 'react';

interface ThemeSyncProps {
  themeColor?: 'blue' | 'green';
}

export default function ThemeSync({ themeColor = 'blue' }: ThemeSyncProps) {
  useEffect(() => {
    if (themeColor === 'green') {
      document.documentElement.classList.add('theme-green');
      document.documentElement.classList.remove('theme-blue');
    } else {
      document.documentElement.classList.remove('theme-green');
      document.documentElement.classList.add('theme-blue');
    }
  }, [themeColor]);

  return null;
}
