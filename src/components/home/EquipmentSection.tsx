'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Layers, 
  Activity, 
  Beaker, 
  Crosshair, 
  ArrowUpLeft, 
  ArrowUpRight, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { CGL_EQUIPMENT_FLEET } from '@/lib/data';
import { Locale, getDictionary } from '@/lib/i18n';
import { EquipmentCategory } from '@/lib/types';

interface EquipmentSectionProps {
  lang?: Locale;
}

export default function EquipmentSection({ lang = 'ar' }: EquipmentSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory>('all');
  const [activeId, setActiveId] = useState<string>(CGL_EQUIPMENT_FLEET[0].id);

  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  const categories: { id: EquipmentCategory; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: dict.equipment.filterAll, icon: Wrench },
    { id: 'drilling', label: dict.equipment.filterDrilling, icon: Layers },
    { id: 'ndt', label: dict.equipment.filterNdt, icon: Activity },
    { id: 'materials', label: dict.equipment.filterMaterials, icon: Beaker },
    { id: 'surveying', label: dict.equipment.filterSurveying, icon: Crosshair },
  ];

  const filteredEquipment = selectedCategory === 'all'
    ? CGL_EQUIPMENT_FLEET
    : CGL_EQUIPMENT_FLEET.filter((item) => item.category === selectedCategory);

  // Keep active item valid if category changes
  useEffect(() => {
    const exists = filteredEquipment.some((item) => item.id === activeId);
    if (!exists && filteredEquipment.length > 0) {
      setActiveId(filteredEquipment[0].id);
    }
  }, [selectedCategory, filteredEquipment, activeId]);

  const activeIndex = filteredEquipment.findIndex((item) => item.id === activeId);
  const currentItem = filteredEquipment[activeIndex >= 0 ? activeIndex : 0] || CGL_EQUIPMENT_FLEET[0];

  const handlePrev = () => {
    const prevIdx = activeIndex <= 0 ? filteredEquipment.length - 1 : activeIndex - 1;
    setActiveId(filteredEquipment[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = activeIndex >= filteredEquipment.length - 1 ? 0 : activeIndex + 1;
    setActiveId(filteredEquipment[nextIdx].id);
  };

  return (
    <section id="equipment" className="py-20 sm:py-28 bg-black border-b border-[#1f1f1f] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8bc34a]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#1f1f1f]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#1f1f1f] text-xs font-sans text-[#8bc34a] mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8bc34a] animate-pulse" />
              <span>{dict.equipment.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {dict.equipment.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-sans mt-2 leading-relaxed">
              {dict.equipment.subtitle}
            </p>
          </div>

          {/* Quick Counter & Nav Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="text-xs font-mono text-stone-300 bg-[#111111] px-3.5 py-2 rounded-xl border border-[#1f1f1f] flex items-center gap-2">
              <span className="text-stone-500">{dict.equipment.specifications ? (isRtl ? 'المعدة:' : 'Unit:') : 'Unit:'}</span>
              <span className="text-[#8bc34a] font-bold">
                {String((activeIndex >= 0 ? activeIndex : 0) + 1).padStart(2, '0')} / {String(filteredEquipment.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous equipment"
                className="w-9 h-9 rounded-xl bg-[#111111] border border-[#1f1f1f] hover:border-[#8bc34a]/50 text-stone-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next equipment"
                className="w-9 h-9 rounded-xl bg-[#111111] border border-[#1f1f1f] hover:border-[#8bc34a]/50 text-stone-300 hover:text-white flex items-center justify-center transition-all active:scale-95"
              >
                <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#8bc34a] text-black font-bold border-[#8bc34a] shadow-lg shadow-[#8bc34a]/20 scale-100'
                    : 'bg-[#111111] text-stone-300 border-[#1f1f1f] hover:bg-[#161616] hover:text-white hover:border-stone-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-[#8bc34a]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* The Interactive Equipment Stage: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left / Selector List (Takes 4 cols on Desktop) */}
          <div className="lg:col-span-5 space-y-3 order-2 lg:order-1">
            <span className="text-[11px] font-mono text-stone-400 block px-1">
              {isRtl ? 'اختر المعدة لمعاينة التجهيزات:' : 'Select unit for live specifications:'}
            </span>

            <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
              {filteredEquipment.map((item, idx) => {
                const isCurrent = item.id === currentItem.id;
                const name = isRtl ? item.nameAr : item.nameEn;
                const catName = isRtl ? item.categoryNameAr : item.categoryNameEn;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-start p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 group relative overflow-hidden ${
                      isCurrent
                        ? 'bg-gradient-to-r from-[#111111] to-[#161616] border-[#8bc34a] shadow-lg shadow-[#8bc34a]/10'
                        : 'bg-[#0b0b0b] border-[#1c1c1c] hover:border-stone-700 hover:bg-[#121212]'
                    }`}
                  >
                    {/* Active Accent Glow Indicator */}
                    {isCurrent && (
                      <div className="absolute top-0 bottom-0 right-0 w-1 bg-[#8bc34a]" />
                    )}

                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors ${
                        isCurrent
                          ? 'bg-[#8bc34a]/15 text-[#8bc34a] border-[#8bc34a]/40'
                          : 'bg-[#141414] text-stone-400 border-[#222222] group-hover:text-white'
                      }`}>
                        <Cpu className="w-4 h-4" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            isCurrent
                              ? 'bg-[#8bc34a] text-black'
                              : 'bg-[#181818] text-stone-400 border border-[#242424]'
                          }`}>
                            {item.code}
                          </span>
                          <span className="text-[11px] font-sans text-stone-400 truncate">
                            {catName}
                          </span>
                        </div>
                        <h4 className={`text-xs sm:text-sm font-display font-bold leading-tight truncate transition-colors ${
                          isCurrent ? 'text-white' : 'text-stone-300 group-hover:text-white'
                        }`}>
                          {name}
                        </h4>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <span className={`text-xs font-mono font-bold transition-colors ${
                        isCurrent ? 'text-[#8bc34a]' : 'text-stone-500 group-hover:text-stone-400'
                      }`}>
                        0{idx + 1}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right / The Inspection Cockpit Showcase (Takes 7 cols on Desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-[#0b0b0b] border border-[#222222] rounded-3xl p-5 sm:p-7 relative overflow-hidden shadow-2xl"
              >
                {/* Visual Technical Background Grid Line */}
                <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#8bc34a]/60 to-transparent" />

                {/* Top Cockpit Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-[#8bc34a]/15 text-[#8bc34a] border border-[#8bc34a]/30 font-mono text-xs font-bold">
                      {currentItem.code}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {isRtl ? currentItem.categoryNameAr : currentItem.categoryNameEn}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-stone-300 bg-[#141414] px-2.5 py-1 rounded-full border border-[#222222]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8bc34a]" />
                    <span>{isRtl ? 'معايرة وفحص معتمد' : 'Calibrated & Certified'}</span>
                  </div>
                </div>

                {/* Machine Showcase Hero Image */}
                <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#111111] mb-6 border border-[#1f1f1f] group">
                  <Image
                    src={currentItem.image}
                    alt={isRtl ? currentItem.nameAr : currentItem.nameEn}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Image Overlay Title */}
                  <div className="absolute bottom-4 right-4 left-4 z-10">
                    <h3 className="text-base sm:text-xl font-display font-bold text-white leading-snug drop-shadow-md">
                      {isRtl ? currentItem.nameAr : currentItem.nameEn}
                    </h3>
                  </div>
                </div>

                {/* Operational Specifications Dashboard */}
                <div className="space-y-3 mb-6">
                  <span className="text-[11px] font-mono text-stone-400 block uppercase tracking-wider">
                    {dict.equipment.specifications}
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {(isRtl ? currentItem.specsAr : currentItem.specsEn).map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[#121212] border border-[#1e1e1e] p-3 rounded-xl flex items-start gap-2.5 hover:border-[#8bc34a]/30 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-stone-200 leading-relaxed font-sans">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Standards & RFQ Action */}
                <div className="pt-4 border-t border-[#1f1f1f] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-stone-400 ml-1">
                      {dict.equipment.standardsLabel}
                    </span>
                    {currentItem.standards.map((std, stIdx) => (
                      <span
                        key={stIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161616] text-stone-300 border border-[#242424]"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/${lang}/rfq`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#8bc34a] hover:bg-[#9ccc65] text-black font-sans text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#8bc34a]/20 active:scale-95 flex-shrink-0"
                  >
                    <span>{dict.equipment.requestRfq}</span>
                    <ArrowIcon className="w-4 h-4 text-black" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
