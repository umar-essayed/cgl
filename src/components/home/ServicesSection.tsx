'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpLeft, ArrowUpRight, ShieldCheck, Layers, Beaker, Crosshair, Pickaxe, Compass, Trees, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { CGL_SERVICES } from '@/lib/data';
import { ServiceItem } from '@/lib/types';
import { Locale, getDictionary } from '@/lib/i18n';

interface ServicesSectionProps {
  lang?: Locale;
  services?: ServiceItem[];
}

const serviceIconMap: Record<string, React.ReactNode> = {
  'geotechnical-investigation': <Layers className="w-5 h-5 text-[#3b76b3]" />,
  'structural-integrity': <ShieldCheck className="w-5 h-5 text-[#3b76b3]" />,
  'materials-testing': <Beaker className="w-5 h-5 text-[#D4A359]" />,
  'engineering-surveying': <Crosshair className="w-5 h-5 text-[#3b76b3]" />,
  'mining-testing': <Pickaxe className="w-5 h-5 text-[#A94845]" />,
  'shoring-dewatering': <Compass className="w-5 h-5 text-[#3b76b3]" />,
  'environmental-testing': <Trees className="w-5 h-5 text-[#3b76b3]" />,
};

const serviceColorMap: Record<string, { border: string; glow: string }> = {
  'geotechnical-investigation': {
    border: 'hover:border-[#3b76b3]/60 dark:hover:border-[#3b76b3]/50',
    glow: 'from-[#3b76b3]/15',
  },
  'structural-integrity': {
    border: 'hover:border-[#3b76b3]/60 dark:hover:border-[#3b76b3]/50',
    glow: 'from-[#3b76b3]/15',
  },
  'materials-testing': {
    border: 'hover:border-[#D4A359]/60 dark:hover:border-[#D4A359]/50',
    glow: 'from-[#D4A359]/15',
  },
  'engineering-surveying': {
    border: 'hover:border-[#3b76b3]/60 dark:hover:border-[#3b76b3]/50',
    glow: 'from-[#3b76b3]/15',
  },
  'mining-testing': {
    border: 'hover:border-[#A94845]/60 dark:hover:border-[#A94845]/50',
    glow: 'from-[#A94845]/15',
  },
  'shoring-dewatering': {
    border: 'hover:border-[#3b76b3]/60 dark:hover:border-[#3b76b3]/50',
    glow: 'from-[#3b76b3]/15',
  },
  'environmental-testing': {
    border: 'hover:border-[#3b76b3]/60 dark:hover:border-[#3b76b3]/50',
    glow: 'from-[#3b76b3]/15',
  },
};

export default function ServicesSection({ lang = 'ar', services }: ServicesSectionProps) {
  const BATCH_SIZE = 6;
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  const servicesList = services && services.length > 0 ? services : CGL_SERVICES;
  const visibleServices = servicesList.slice(0, visibleCount);
  const hasMore = visibleCount < servicesList.length;
  const remainingCount = servicesList.length - visibleCount;
  const progressPercent = Math.min(100, Math.round((visibleServices.length / servicesList.length) * 100));

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#000000] border-b border-[#1f1f1f] relative overflow-hidden">
      {/* Background Geotechnical Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#3b76b3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#3b76b3]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#3b76b3] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b76b3] animate-pulse" />
              <span>{dict.services.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              {dict.services.title}
            </h2>
          </div>
          <p className="text-stone-300 font-sans text-xs sm:text-sm max-w-xl leading-relaxed">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {visibleServices.map((service, index) => {
            const styling = serviceColorMap[service.id] || serviceColorMap['geotechnical-investigation'];
            const icon = serviceIconMap[service.id] || <Layers className="w-5 h-5 text-[#3b76b3]" />;
            const imageSrc = service.image || '/assets/sliders/slider1.jpg';
            const originalIndex = servicesList.findIndex(s => s.id === service.id);
            const title = isRtl ? service.titleAr : service.titleEn;
            const desc = isRtl ? service.shortDescAr : service.shortDescEn;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] ${styling.border} transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/80 flex flex-col justify-between`}
              >
                {/* Ambient Top Glow */}
                <div className={`absolute top-0 right-0 left-0 h-32 bg-gradient-to-b ${styling.glow} to-transparent opacity-20 pointer-events-none`} />

                {/* Photography Banner */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between relative z-10">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#3b76b3]">
                        {originalIndex < 9 ? `0${originalIndex + 1}` : originalIndex + 1}
                      </span>
                      <div className="text-stone-400 group-hover:text-white transition-colors">
                        {icon}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#3b76b3] transition-colors mb-2 leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed line-clamp-3 mb-4">
                      {desc}
                    </p>
                  </div>

                  {/* Footer: Standards & Link */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {(service.standards || []).slice(0, 2).map((std, sIdx) => (
                        <span 
                          key={sIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-stone-300 border border-white/10"
                        >
                          {std}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/${lang}/rfq`}
                      className="inline-flex items-center text-xs font-bold text-[#3b76b3] hover:text-white transition-colors gap-1 group/link"
                    >
                      <span>{dict.services.requestPricing}</span>
                      <ArrowIcon className="w-3.5 h-3.5 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progressive Pagination Controls */}
        {servicesList.length > BATCH_SIZE && (
          <div className="mt-12 sm:mt-16 flex flex-col items-center gap-4">
            {/* Progress counter and bar */}
            <div className="w-full max-w-md text-center space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                <span>
                  {isRtl ? 'عرض' : 'Showing'}{' '}
                  <strong className="text-white font-bold">{visibleServices.length}</strong>{' '}
                  {isRtl ? 'من أصل' : 'of'}{' '}
                  <strong className="text-white font-bold">{servicesList.length}</strong>{' '}
                  {isRtl ? 'خدمة هندسية' : 'services'}
                </span>
                <span>{progressPercent}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#3b76b3] rounded-full"
                  initial={false}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {hasMore ? (
                <>
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, servicesList.length))}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3b76b3] hover:bg-[#2a5b8c] text-white font-sans text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#3b76b3]/20 active:scale-95"
                  >
                    <span>
                      {isRtl 
                        ? `تحميل باقي الخدمات (${remainingCount} متبقية)` 
                        : `Load More Services (${remainingCount} remaining)`
                      }
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setVisibleCount(servicesList.length)}
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 hover:text-white font-sans text-xs sm:text-sm font-medium transition-all"
                  >
                    <span>{isRtl ? 'عرض الكل' : 'Show All'}</span>
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setVisibleCount(BATCH_SIZE)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-stone-400 hover:text-white font-sans text-xs transition-all"
                >
                  <ChevronUp className="w-4 h-4" />
                  <span>{isRtl ? 'طي القائمة (عرض 6 فقط)' : 'Collapse List (Show 6)'}</span>
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
