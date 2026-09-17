'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpLeft, ShieldCheck, Layers, Beaker, Crosshair, Pickaxe, Compass, Trees, ChevronLeft } from 'lucide-react';
import { CGL_SERVICES } from '@/lib/data';

// Map icons to services
const serviceIconMap: Record<string, React.ReactNode> = {
  'geotechnical-investigation': <Layers className="w-5 h-5 text-[#82B74B]" />,
  'structural-integrity': <ShieldCheck className="w-5 h-5 text-[#3B76B3]" />,
  'materials-testing': <Beaker className="w-5 h-5 text-[#D4A359]" />,
  'engineering-surveying': <Crosshair className="w-5 h-5 text-[#82B74B]" />,
  'mining-testing': <Pickaxe className="w-5 h-5 text-[#A94845]" />,
  'shoring-dewatering': <Compass className="w-5 h-5 text-[#3B76B3]" />,
  'environmental-testing': <Trees className="w-5 h-5 text-[#82B74B]" />,
};

// Color accents for the 7 pillars matching CGL Logo brand identity
const serviceColorMap: Record<string, { border: string; badge: string; glow: string }> = {
  'geotechnical-investigation': {
    border: 'group-hover:border-[#82B74B]/50',
    badge: 'bg-[#82B74B]/15 text-[#97C369] border-[#82B74B]/30',
    glow: 'from-[#82B74B]/15',
  },
  'structural-integrity': {
    border: 'group-hover:border-[#3B76B3]/50',
    badge: 'bg-[#3B76B3]/15 text-[#508ECB] border-[#3B76B3]/30',
    glow: 'from-[#3B76B3]/15',
  },
  'materials-testing': {
    border: 'group-hover:border-[#D4A359]/50',
    badge: 'bg-[#D4A359]/15 text-[#E5BF7D] border-[#D4A359]/30',
    glow: 'from-[#D4A359]/15',
  },
  'engineering-surveying': {
    border: 'group-hover:border-[#82B74B]/50',
    badge: 'bg-[#82B74B]/15 text-[#97C369] border-[#82B74B]/30',
    glow: 'from-[#82B74B]/15',
  },
  'mining-testing': {
    border: 'group-hover:border-[#A94845]/50',
    badge: 'bg-[#A94845]/15 text-[#C45B58] border-[#A94845]/30',
    glow: 'from-[#A94845]/15',
  },
  'shoring-dewatering': {
    border: 'group-hover:border-[#3B76B3]/50',
    badge: 'bg-[#3B76B3]/15 text-[#508ECB] border-[#3B76B3]/30',
    glow: 'from-[#3B76B3]/15',
  },
  'environmental-testing': {
    border: 'group-hover:border-[#82B74B]/50',
    badge: 'bg-[#82B74B]/15 text-[#97C369] border-[#82B74B]/30',
    glow: 'from-[#82B74B]/15',
  },
};

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

  // Staggered distribution of the 7 services:
  // Col 1: 0 (Geotechnical), 3 (Surveying)
  // Col 2: 1 (Structural NDT), 4 (Mining), 6 (Environmental)
  // Col 3: 2 (Materials Lab), 5 (Shoring Dewatering)
  const col1 = [CGL_SERVICES[0], CGL_SERVICES[3]];
  const col2 = [CGL_SERVICES[1], CGL_SERVICES[4], CGL_SERVICES[6]];
  const col3 = [CGL_SERVICES[2], CGL_SERVICES[5]];

  const renderCard = (service: typeof CGL_SERVICES[0], index: number, isTall = false) => {
    const styling = serviceColorMap[service.id] || serviceColorMap['geotechnical-investigation'];
    const icon = serviceIconMap[service.id];
    const imageSrc = service.image || '/assets/sliders/slider1.jpg';
    const originalIndex = CGL_SERVICES.findIndex(s => s.id === service.id);

    // Visibility rules:
    // If !showAll:
    // - On mobile (<md): show first 3 (originalIndex < 3). Items >= 3 hidden on mobile.
    // - On desktop (md+): show first 6 (originalIndex < 6). Item 7 (originalIndex === 6) hidden unless showAll.
    const isHiddenOnMobile = !showAll && originalIndex >= 3;
    const isHiddenOnDesktop = !showAll && originalIndex >= 6;

    if (isHiddenOnDesktop && isHiddenOnMobile) {
      return null;
    }

    return (
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className={`${isHiddenOnMobile ? 'hidden md:flex' : 'flex'} ${isHiddenOnDesktop ? 'md:hidden' : ''} group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] ${styling.border} transition-all duration-300 hover:shadow-2xl hover:shadow-black/80 flex-col justify-between`}
      >
        {/* Ambient Top Glow */}
        <div className={`absolute top-0 right-0 left-0 h-32 bg-gradient-to-b ${styling.glow} to-transparent opacity-20 pointer-events-none`} />

        {/* Photography Header / Banner */}
        <div className={`relative w-full overflow-hidden ${isTall ? 'h-52 sm:h-60' : 'h-40 sm:h-44'}`}>
          <Image
            src={imageSrc}
            alt={service.titleAr}
            fill
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
          />
          {/* Subtle Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between relative z-10">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#8bc34a]">
                0{originalIndex + 1}
              </span>
              <div className="text-stone-400">
                {icon}
              </div>
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-stone-100 transition-colors mb-1.5 leading-snug">
              {service.titleAr}
            </h3>
            <p className="text-[11px] sm:text-xs font-mono text-stone-400 mb-3 tracking-wide">
              {service.titleEn}
            </p>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed line-clamp-3 mb-4">
              {service.shortDescAr}
            </p>
          </div>

          {/* Footer: Standards & Link */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {service.standards.slice(0, 2).map((std, sIdx) => (
                <span 
                  key={sIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-stone-300 border border-white/10"
                >
                  {std}
                </span>
              ))}
            </div>

            <Link
              href="/rfq"
              className="inline-flex items-center text-xs font-medium text-stone-300 group-hover:text-white transition-colors"
              title="طلب استشارة أو فحص لهذا النطاق"
            >
              <span className="ml-1">طلب فحص</span>
              <ArrowUpLeft className="w-3.5 h-3.5 text-[#82B74B] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-20 sm:py-28 engineering-canvas-secondary border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Clean, Concise Section Header (No Essay Descriptions) */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-3 py-1 rounded-full bg-[#181b22] border border-[#82B74B]/30 text-xs font-sans text-[#97C369] mb-3">
            <span className="w-2 h-2 bg-[#82B74B] rounded-full animate-pulse" />
            <span className="font-semibold">المجالات المعتمدة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
            الخدمات الهندسية والمخبرية
          </h2>
        </div>

        {/* Mobile View: Clean Sequential List (< md) */}
        <div className="flex md:hidden flex-col gap-4">
          {(showAll ? CGL_SERVICES : CGL_SERVICES.slice(0, 3)).map((service, idx) => {
            const styling = serviceColorMap[service.id] || serviceColorMap['geotechnical-investigation'];
            const icon = serviceIconMap[service.id];
            const imageSrc = service.image || '/assets/sliders/slider1.jpg';
            return (
              <div
                key={service.id}
                className={`rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] ${styling.border} flex flex-col shadow-md`}
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={service.titleAr}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                </div>

                <div className="p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#8bc34a]">
                      0{idx + 1}
                    </span>
                    <div className="text-stone-400">
                      {icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-1">
                    {service.titleAr}
                  </h3>
                  <p className="text-xs text-stone-300 font-sans leading-relaxed line-clamp-2 mb-3">
                    {service.shortDescAr}
                  </p>
                  <div className="pt-2.5 border-t border-[#1f1f1f] flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-stone-400 border border-[#1f1f1f]">
                      {service.standards[0]}
                    </span>
                    <Link
                      href="/rfq"
                      className="inline-flex items-center text-xs font-bold text-[#8bc34a]"
                    >
                      <span>طلب تسعير</span>
                      <ArrowUpLeft className="w-3.5 h-3.5 mr-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop View: Staggered Architectural Mosaic (md+) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
          {/* Column 1 */}
          <div className="space-y-6 sm:space-y-7 flex flex-col">
            {col1.map((service, idx) => renderCard(service, idx, idx === 0))}
          </div>

          {/* Column 2 - Staggered offset downward */}
          <div className="space-y-6 sm:space-y-7 flex flex-col lg:pt-8">
            {col2.map((service, idx) => renderCard(service, idx + 2, idx === 1))}
          </div>

          {/* Column 3 - Staggered offset further downward */}
          <div className="space-y-6 sm:space-y-7 flex flex-col lg:pt-14 md:col-span-2 lg:col-span-1">
            {col3.map((service, idx) => renderCard(service, idx + 5, idx === 0))}
          </div>
        </div>

        {/* Show All Toggle Button (Responsive: 3 on mobile, 6 on desktop by default) */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-full bg-[#111111] hover:bg-[#1a1a1a] border border-[#1f1f1f] text-stone-200 hover:text-white font-sans text-xs sm:text-sm font-semibold transition-all shadow-md group hover:border-[#8bc34a]/40"
          >
            <span>
              {showAll 
                ? 'طي قائمة الخدمات' 
                : 'عرض كافة الخدمات الهندسية (7 خدمات)'
              }
            </span>
            <ChevronLeft className={`w-4 h-4 text-[#8bc34a] transition-transform duration-300 ${showAll ? '-rotate-90' : 'rotate-0'}`} />
          </button>
        </div>


      </div>
    </section>
  );
}
