'use client';

import React from 'react';
import Image from 'next/image';
import { CGL_AUTHORIZED_PARTNERS } from '@/lib/data';
import { Locale, getDictionary } from '@/lib/i18n';

interface PartnersTickerProps {
  lang?: Locale;
}

export default function PartnersTicker({ lang = 'ar' }: PartnersTickerProps) {
  const partners = CGL_AUTHORIZED_PARTNERS;
  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';

  return (
    <section id="partners" className="py-10 sm:py-12 bg-white dark:bg-[#000000] border-b border-slate-200 dark:border-[#1f1f1f] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-6 text-center">
        <p className="text-xs sm:text-sm font-sans font-medium text-slate-600 dark:text-stone-400">
          {isRtl
            ? 'معتمدون لدى كبرى جهات التطوير العقاري والمقاولات والجهات الاستشارية بالمملكة'
            : 'Certified and trusted by leading real estate developers and Tier-1 contractors across Saudi Arabia'}
        </p>
      </div>

      {/* Infinite Seamless Scrolling Ribbon with Mask */}
      <div 
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        dir="ltr"
      >
        <div className="flex w-max animate-marquee-seamless items-center cursor-pointer select-none">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-8 pr-4 sm:pr-8">
            {partners.map((partner, index) => {
              const name = isRtl ? partner.nameAr : partner.nameEn;
              return (
                <div
                  key={`t1-${partner.id}-${index}`}
                  className="h-16 sm:h-20 w-44 sm:w-52 flex-shrink-0 flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-[#8bc34a]/60 dark:bg-[#0a0a0a] dark:hover:bg-[#111111] dark:border-[#1f1f1f] dark:hover:border-[#8bc34a]/40 transition-all duration-300 group shadow-sm"
                  title={`${name} • ${partner.sectorAr}`}
                >
                  <div className="relative w-full h-9 sm:h-11">
                    <Image
                      src={partner.logo}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Track 2 */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-8 pr-4 sm:pr-8" aria-hidden="true">
            {partners.map((partner, index) => {
              const name = isRtl ? partner.nameAr : partner.nameEn;
              return (
                <div
                  key={`t2-${partner.id}-${index}`}
                  className="h-16 sm:h-20 w-44 sm:w-52 flex-shrink-0 flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-[#8bc34a]/60 dark:bg-[#0a0a0a] dark:hover:bg-[#111111] dark:border-[#1f1f1f] dark:hover:border-[#8bc34a]/40 transition-all duration-300 group shadow-sm"
                  title={`${name} • ${partner.sectorAr}`}
                >
                  <div className="relative w-full h-9 sm:h-11">
                    <Image
                      src={partner.logo}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
