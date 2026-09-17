'use client';

import React from 'react';
import Image from 'next/image';
import { CGL_AUTHORIZED_PARTNERS } from '@/lib/data';

export default function PartnersTicker() {
  const partners = CGL_AUTHORIZED_PARTNERS;

  return (
    <section id="partners" className="py-10 sm:py-12 bg-[#000000] border-b border-[#1f1f1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-6 text-center">
        <p className="text-xs sm:text-sm font-sans font-medium text-stone-400">
          معتمدون لدى كبرى جهات التطوير العقاري والمقاولات والجهات الاستشارية بالمملكة
        </p>
      </div>

      {/* Infinite Seamless Scrolling Ribbon with Mask - Outer dir=ltr guarantees absolute left-origin coordinate system */}
      <div 
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        dir="ltr"
      >
        <div className="flex w-max animate-marquee-seamless items-center cursor-pointer select-none">
          {/* Track 1: Original Set */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-8 pr-4 sm:pr-8">
            {partners.map((partner, index) => (
              <div
                key={`t1-${partner.id}-${index}`}
                className="h-16 sm:h-20 w-44 sm:w-52 flex-shrink-0 flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0a0a0a] hover:bg-[#111111] border border-[#1f1f1f] hover:border-[#8bc34a]/40 transition-all duration-300 group shadow-sm"
                title={`${partner.nameAr} • ${partner.sectorAr}`}
              >
                <div className="relative w-full h-9 sm:h-11">
                  <Image
                    src={partner.logo}
                    alt={partner.nameAr}
                    fill
                    sizes="(max-width: 768px) 176px, 208px"
                    className="object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Track 2: Identical Twin Set for 100% Seamless Closed Loop */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-8 pr-4 sm:pr-8" aria-hidden="true">
            {partners.map((partner, index) => (
              <div
                key={`t2-${partner.id}-${index}`}
                className="h-16 sm:h-20 w-44 sm:w-52 flex-shrink-0 flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0a0a0a] hover:bg-[#111111] border border-[#1f1f1f] hover:border-[#8bc34a]/40 transition-all duration-300 group shadow-sm"
                title={`${partner.nameAr} • ${partner.sectorAr}`}
              >
                <div className="relative w-full h-9 sm:h-11">
                  <Image
                    src={partner.logo}
                    alt={partner.nameAr}
                    fill
                    sizes="(max-width: 768px) 176px, 208px"
                    className="object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
