'use client';

import React, { useEffect } from 'react';

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
      document.documentElement.setAttribute('data-theme-color', 'green');
    } else {
      document.documentElement.classList.remove('theme-green');
      document.documentElement.classList.add('theme-blue');
      document.documentElement.setAttribute('data-theme-color', 'blue');
    }

    // 2. Theme Mode Sync (Light / Dark)
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

  return (
    <script
      id="cgl-theme-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var tc = '${themeColor}';
            if (tc === 'green') {
              document.documentElement.classList.add('theme-green');
              document.documentElement.classList.remove('theme-blue');
              document.documentElement.setAttribute('data-theme-color', 'green');
            } else {
              document.documentElement.classList.remove('theme-green');
              document.documentElement.classList.add('theme-blue');
              document.documentElement.setAttribute('data-theme-color', 'blue');
            }
          })();
        `,
      }}
    />
  );
}
