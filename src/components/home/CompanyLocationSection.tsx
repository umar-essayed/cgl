'use client';

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Navigation, ExternalLink, MessageCircle } from 'lucide-react';
import { CGL_COMPANY_INFO } from '@/lib/data';

// Dynamically import DarkLocationMap without SSR
const DarkLocationMap = dynamic(() => import('@/components/map/DarkLocationMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#000000] flex items-center justify-center text-stone-500 text-xs font-mono">
      جاري تحميل خريطة المقر...
    </div>
  ),
});

export default function CompanyLocationSection() {
  return (
    <section id="location" className="py-10 sm:py-16 bg-[#000000] border-b border-[#1f1f1f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Minimal Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6">
          <div>
            <span className="text-xs font-mono text-[#8bc34a] block mb-0.5">
              المقر الرئيسي والاعتماد
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
              موقع الشركة • جدة 23215، حي الرويس
            </h2>
          </div>

          <a
            href={CGL_COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 space-x-reverse px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 w-fit"
          >
            <Navigation className="w-4 h-4 ml-1" />
            <span>فتح في خرائط Google</span>
            <ExternalLink className="w-3.5 h-3.5 mr-1 opacity-75" />
          </a>
        </div>

        {/* The 100% Dark Custom Styled Map Box with Isolated Stacking Context */}
        <div className="relative isolate z-10 w-full h-[320px] sm:h-[440px] md:h-[480px] rounded-2xl overflow-hidden border border-[#1f1f1f] shadow-2xl bg-[#000000]">
          
          {/* Custom Dark Tile Map Matching Website Palette */}
          <DarkLocationMap />

          {/* Floating Brand Pin Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 pointer-events-auto">
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-[#0a0a0a]/95 border border-[#1f1f1f] shadow-2xl backdrop-blur-md flex items-center space-x-2.5 space-x-reverse max-w-[270px] sm:max-w-sm">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#8bc34a]/15 border border-[#8bc34a] flex items-center justify-center flex-shrink-0 p-1">
                <Image
                  src="/assets/cgl-logo1.png"
                  alt="CGL"
                  width={36}
                  height={24}
                  className="h-4 sm:h-5 w-auto object-contain"
                />
              </div>
              <div className="text-right min-w-0">
                <span className="text-xs font-bold text-white block truncate">
                  CGL Laboratories
                </span>
                <span className="text-[10px] sm:text-[11px] text-stone-300 font-mono block">
                  23215 Al-Ruwais, Jeddah KSA
                </span>
                <div className="flex items-center gap-2 mt-0.5 text-[10px] sm:text-[11px] font-mono text-[#82B74B]">
                  <a 
                    href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline inline-flex items-center"
                    dir="ltr"
                  >
                    <MessageCircle className="w-3 h-3 mr-1 text-[#25D366]" />
                    <span>{CGL_COMPANY_INFO.phone1}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
