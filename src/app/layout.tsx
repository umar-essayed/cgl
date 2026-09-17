import type { Metadata } from 'next';
import { Cairo, El_Messiri } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const elMessiri = El_Messiri({
  subsets: ['arabic', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-el-messiri',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cgl-sable.vercel.app'),
  title: {
    default: 'CGL | مختبرات الهندسة الجيوتقنية وفحص المواد',
    template: '%s | CGL',
  },
  description: 'Creative Geotechnical Laboratories (CGL) - فرع معتمد لمجموعة CGI العالمية (USA & KSA). فحص التربة والأساسات، اختبارات المواد، تقييم سلامة المباني، والمسح الطبوغرافي وفق كود البناء السعودي SBC 303/304.',
  keywords: [
    'CGL',
    'Creative Geotechnical Laboratories',
    'فحص التربة',
    'مختبرات جيوتقنية',
    'كود البناء السعودي',
    'SBC 303',
    'SBC 304',
    'جسات التربة',
    'اختبارات الخرسانة والمواد',
    'تقييم سلامة المباني',
    'المسح الطبوغرافي',
    'جدة',
    'السعودية',
  ],
  authors: [{ name: 'CGL Engineering Team' }],
  creator: 'Creative Geotechnical Laboratories (CGL)',
  publisher: 'CGL',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://cgl-sable.vercel.app',
    siteName: 'Creative Geotechnical Laboratories (CGL)',
    title: 'CGL | مختبرات الهندسة الجيوتقنية وفحص المواد',
    description: 'شريكك الجيوتقني المعتمد لمجموعة CGI العالمية. استكشاف التربة، اختبارات المواد الإنشائية، وتقييم سلامة المباني وفق معايير كود البناء السعودي.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مختبرات CGL الجيوتقنية وفحص المواد - فرع CGI العالمي',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CGL | مختبرات الهندسة الجيوتقنية وفحص المواد',
    description: 'فرع معتمد لمجموعة CGI العالمية. فحص التربة والأساسات واختبارات المواد والمسح الهندسي وفق كود البناء السعودي.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/cgl-logo1.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${elMessiri.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('cgl-theme');
                var isDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-[#000000] text-slate-900 dark:text-stone-100 font-sans min-h-screen flex flex-col selection:bg-[#8bc34a] selection:text-black transition-colors">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
