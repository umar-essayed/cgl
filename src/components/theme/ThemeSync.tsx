'use client';

import React, { useEffect } from 'react';

interface ThemeSyncProps {
  themeColor?: 'blue' | 'green';
  themeMode?: 'dark' | 'light';
}

export default function ThemeSync({ themeColor = 'blue', themeMode }: ThemeSyncProps) {
  useEffect(() => {
    // 1. Theme Color Sync in DOM
    const root = document.documentElement;
    if (themeColor === 'green') {
      root.classList.add('theme-green');
      root.classList.remove('theme-blue');
      root.setAttribute('data-theme-color', 'green');
    } else {
      root.classList.remove('theme-green');
      root.classList.add('theme-blue');
      root.setAttribute('data-theme-color', 'blue');
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
      root.classList.add('theme-light');
      root.classList.remove('dark');
    } else {
      root.classList.remove('theme-light');
      root.classList.add('dark');
    }
  }, [themeColor, themeMode]);

  return (
    <>
      {/* 0ms Immediate Synchronous Execution Script */}
      <script
        id="cgl-theme-script"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var tc = '${themeColor}';
                var root = document.documentElement;
                if (tc === 'green') {
                  root.classList.add('theme-green');
                  root.classList.remove('theme-blue');
                  root.setAttribute('data-theme-color', 'green');
                } else {
                  root.classList.remove('theme-green');
                  root.classList.add('theme-blue');
                  root.setAttribute('data-theme-color', 'blue');
                }
              } catch(e) {}
            })();
          `,
        }}
      />

      {/* Dynamic Green Theme Injection: Active ONLY when themeColor === 'green' */}
      {themeColor === 'green' && (
        <style
          id="cgl-dynamic-green-engine"
          dangerouslySetInnerHTML={{
            __html: `
              /* High-Priority Instant Dynamic Green Engine */
              html.theme-green ::selection,
              [data-theme-color="green"] ::selection {
                background-color: #16a34a !important;
                color: #ffffff !important;
              }

              html.theme-green ::-webkit-scrollbar-thumb:hover,
              [data-theme-color="green"] ::-webkit-scrollbar-thumb:hover {
                background-color: #16a34a !important;
              }

              /* All Backgrounds containing CGL Blue class */
              html.theme-green [class*="bg-"][class*="3b76b3"],
              [data-theme-color="green"] [class*="bg-"][class*="3b76b3"] {
                background-color: #16a34a !important;
              }

              /* All Texts containing CGL Blue class */
              html.theme-green [class*="text-"][class*="3b76b3"],
              [data-theme-color="green"] [class*="text-"][class*="3b76b3"] {
                color: #22c55e !important;
              }

              html.theme-green [class*="text-"][class*="508ecb"],
              [data-theme-color="green"] [class*="text-"][class*="508ecb"] {
                color: #4ade80 !important;
              }

              /* All Borders containing CGL Blue class */
              html.theme-green [class*="border-"][class*="3b76b3"],
              [data-theme-color="green"] [class*="border-"][class*="3b76b3"] {
                border-color: #16a34a !important;
              }

              /* Rings and Shadows */
              html.theme-green [class*="ring-"][class*="3b76b3"],
              [data-theme-color="green"] [class*="ring-"][class*="3b76b3"] {
                --tw-ring-color: #16a34a !important;
              }

              html.theme-green [class*="shadow-"][class*="3b76b3"],
              [data-theme-color="green"] [class*="shadow-"][class*="3b76b3"] {
                --tw-shadow-color: rgba(22, 163, 74, 0.4) !important;
              }

              /* Gradients */
              html.theme-green [class*="from-"][class*="3b76b3"],
              [data-theme-color="green"] [class*="from-"][class*="3b76b3"] {
                --tw-gradient-from: #16a34a var(--tw-gradient-from-position) !important;
                --tw-gradient-to: rgb(22 163 74 / 0) var(--tw-gradient-to-position) !important;
                --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
              }

              html.theme-green [class*="to-"][class*="3b76b3"],
              [data-theme-color="green"] [class*="to-"][class*="3b76b3"] {
                --tw-gradient-to: #16a34a var(--tw-gradient-to-position) !important;
              }

              /* Hovers */
              html.theme-green [class*="hover:bg-"][class*="2a5b8c"]:hover,
              html.theme-green [class*="hover:bg-"][class*="3b76b3"]:hover,
              [data-theme-color="green"] [class*="hover:bg-"][class*="2a5b8c"]:hover,
              [data-theme-color="green"] [class*="hover:bg-"][class*="3b76b3"]:hover {
                background-color: #15803d !important;
              }

              html.theme-green [class*="hover:text-"][class*="3b76b3"]:hover,
              [data-theme-color="green"] [class*="hover:text-"][class*="3b76b3"]:hover {
                color: #22c55e !important;
              }

              html.theme-green [class*="hover:border-"][class*="3b76b3"]:hover,
              [data-theme-color="green"] [class*="hover:border-"][class*="3b76b3"]:hover {
                border-color: #22c55e !important;
              }
            `,
          }}
        />
      )}
    </>
  );
}
