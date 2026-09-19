'use client';

import { useEffect } from 'react';

interface ThemeSyncProps {
  themeColor?: 'blue' | 'green';
  themeMode?: 'dark' | 'light';
}

export default function ThemeSync({ themeColor = 'blue', themeMode }: ThemeSyncProps) {
  useEffect(() => {
    // 1. Theme Color Sync
    if (themeColor === 'green') {
      document.documentElement.classList.add('theme-green');
      document.documentElement.classList.remove('theme-blue');
    } else {
      document.documentElement.classList.remove('theme-green');
      document.documentElement.classList.add('theme-blue');
    }

    // 2. Theme Mode Sync (Light / Dark)
    // Default is strictly Dark mode unless explicitly set to 'light' in localStorage or settings
    let preferredMode = 'dark';
    try {
      const storedMode = localStorage.getItem('cgl_theme_mode');
      if (storedMode === 'light' || themeMode === 'light') {
        preferredMode = 'light';
      }
    } catch {
      // Ignored
    }

    if (preferredMode === 'light') {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('theme-light');
      document.documentElement.classList.add('dark');
    }
  }, [themeColor, themeMode]);

  return null;
}

