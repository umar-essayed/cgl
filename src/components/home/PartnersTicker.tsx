'use client';

import React from 'react';
import Image from 'next/image';
import { CGL_AUTHORIZED_PARTNERS } from '@/lib/data';
import { Locale } from '@/lib/i18n';
import { AuthorizedPartner } from '@/lib/types';

interface PartnersTickerProps {
  lang?: Locale;
  partners?: AuthorizedPartner[];
}

export default function PartnersTicker({ 
  lang = 'ar',
  partners = CGL_AUTHORIZED_PARTNERS 
}: PartnersTickerProps) {
  const currentPartners = partners && partners.length > 0 ? partners : CGL_AUTHORIZED_PARTNERS;
  const isRtl = lang === 'ar';

  return (
    <section id="partners" className="py-10 sm:py-12 bg-[#000000] border-b border-[#1f1f1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-6 text-center">
        <p className="text-xs sm:text-sm font-sans font-medium text-stone-400">
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
          <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
            {currentPartners.map((partner, index) => {
              const name = isRtl ? partner.nameAr : partner.nameEn;
              return (
                <div
                  key={`t1-${partner.id}-${index}`}
                  className="h-16 sm:h-20 w-44 sm:w-52 flex-shrink-0 flex items-center justify-center p-3 rounded-xl bg-[#0a0a0a] hover:bg-[#121212] border border-[#1f1f1f] hover:border-[#3b76b3]/40 transition-all duration-300 group shadow-sm"
                  title={`${name} • ${partner.sectorAr || ''}`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-contain p-1 group-hover:scale-105 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Track 2 */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6" aria-hidden="true">
            {currentPartners.map((partner, index) => {
              const name = isRtl ? partner.nameAr : partner.nameEn;
              return (
                <div
                  key={`t2-${partner.id}-${index}`}
                  className="h-16 sm:h-20 w-44 sm:w-52 flex-shrink-0 flex items-center justify-center p-3 rounded-xl bg-[#0a0a0a] hover:bg-[#121212] border border-[#1f1f1f] hover:border-[#3b76b3]/40 transition-all duration-300 group shadow-sm"
                  title={`${name} • ${partner.sectorAr || ''}`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-contain p-1 group-hover:scale-105 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
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
