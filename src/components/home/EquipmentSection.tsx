'use client';

import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';
import { CGL_EQUIPMENT_FLEET } from '@/lib/data';
import { Locale, getDictionary } from '@/lib/i18n';
import { EquipmentCategory } from '@/lib/types';

interface EquipmentSectionProps {
  lang?: Locale;
}

export default function EquipmentSection({ lang = 'ar' }: EquipmentSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<EquipmentCategory>('all');
  const [showAll, setShowAll] = useState(false);
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

  const displayedEquipment = showAll ? filteredEquipment : filteredEquipment.slice(0, 3);

  return (
    <section id="equipment" className="py-20 sm:py-28 bg-black border-b border-[#1f1f1f] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Grid Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#8bc34a]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#1f1f1f]">
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

          <div className="text-xs font-mono text-stone-400 bg-[#111111] px-4 py-2 rounded-xl border border-[#1f1f1f] self-start md:self-auto flex items-center gap-2">
            <span>{isRtl ? 'المعدات المعروضة: ' : 'Showing: '}</span>
            <span className="text-[#8bc34a] font-bold">0{displayedEquipment.length} / 0{filteredEquipment.length}</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setShowAll(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#8bc34a] text-black font-bold border-[#8bc34a] shadow-lg shadow-[#8bc34a]/20 scale-100'
                    : 'bg-[#111111] text-stone-300 border-[#1f1f1f] hover:bg-[#1a1a1a] hover:text-white hover:border-stone-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-[#8bc34a]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Equipment Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {displayedEquipment.map((item, idx) => {
              const name = isRtl ? item.nameAr : item.nameEn;
              const categoryName = isRtl ? item.categoryNameAr : item.categoryNameEn;
              const specs = isRtl ? item.specsAr : item.specsEn;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/80"
                >
                  {/* Photo Header with Seamless Dark Vignette */}
                  <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#111111]">
                    <Image
                      src={item.image}
                      alt={name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

                    {/* Equipment Code Badge */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#8bc34a] font-bold shadow-md">
                        {item.code}
                      </span>
                    </div>

                    {/* Category Overlay Tag */}
                    <div className="absolute bottom-3 right-4 left-4 z-10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-stone-300 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10">
                        {categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#8bc34a] transition-colors leading-snug mb-3">
                        {name}
                      </h3>

                      {/* Specifications List */}
                      <div className="space-y-2 mb-4 pt-1">
                        <span className="text-[11px] font-mono text-stone-400 block mb-1">
                          {dict.equipment.specifications}
                        </span>
                        {specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-stone-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Standards & Action Button */}
                    <div className="pt-4 border-t border-[#1f1f1f] mt-auto flex items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {item.standards.map((std, stIdx) => (
                          <span
                            key={stIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111111] text-stone-300 border border-[#1f1f1f]"
                          >
                            {std}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/${lang}/rfq`}
                        className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#8bc34a] transition-colors gap-1 flex-shrink-0"
                      >
                        <span>{dict.equipment.requestRfq}</span>
                        <ArrowIcon className="w-3.5 h-3.5 text-[#8bc34a]" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Button if more than 3 items exist */}
        {filteredEquipment.length > 3 && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#161616] border border-[#222222] hover:border-[#8bc34a]/40 text-stone-200 hover:text-white font-sans text-xs sm:text-sm font-semibold transition-all shadow-sm group active:scale-95"
            >
              <span>
                {showAll
                  ? (isRtl ? 'طي قائمة المعدات (عرض 3 فقط)' : 'Collapse Equipment (Show 3 only)')
                  : (isRtl ? `عرض كافة تجهيزات الأسطول (${filteredEquipment.length} معدات)` : `View All Fleet Equipment (${filteredEquipment.length} units)`)
                }
              </span>
              <ChevronIcon className={`w-4 h-4 text-[#8bc34a] transition-transform duration-300 ${showAll ? '-rotate-90' : 'rotate-0'}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
