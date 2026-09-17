'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpLeft, ArrowUpRight, ChevronDown, Check } from 'lucide-react';
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

  const categories: { id: EquipmentCategory; label: string }[] = [
    { id: 'all', label: dict.equipment.filterAll },
    { id: 'drilling', label: dict.equipment.filterDrilling },
    { id: 'ndt', label: dict.equipment.filterNdt },
    { id: 'materials', label: dict.equipment.filterMaterials },
    { id: 'surveying', label: dict.equipment.filterSurveying },
  ];

  const filteredEquipment = selectedCategory === 'all'
    ? CGL_EQUIPMENT_FLEET
    : CGL_EQUIPMENT_FLEET.filter((item) => item.category === selectedCategory);

  const displayedEquipment = showAll ? filteredEquipment : filteredEquipment.slice(0, 3);

  return (
    <section id="equipment" className="py-16 sm:py-24 bg-black border-b border-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-mono text-[#8bc34a] mb-2 tracking-wider">
            {dict.equipment.badge}
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {dict.equipment.title}
            </h2>
            <p className="text-stone-400 text-sm max-w-xl leading-relaxed">
              {dict.equipment.subtitle}
            </p>
          </div>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-[#1a1a1a]">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-stone-400 hover:text-white hover:bg-[#141414]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Mobile: Horizontal scroll slider | Desktop: Exact same 3-column grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0">
          {displayedEquipment.map((item) => {
            const name = isRtl ? item.nameAr : item.nameEn;
            const categoryName = isRtl ? item.categoryNameAr : item.categoryNameEn;
            const specs = isRtl ? item.specsAr : item.specsEn;

            return (
              <div
                key={item.id}
                className="w-[82vw] sm:w-[320px] md:w-auto flex-shrink-0 md:flex-shrink snap-center sm:snap-start bg-[#0c0c0c] border border-[#1e1e1e] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-stone-600 transition-colors group"
              >
                {/* Clean Image (No floating stickers or fake overlays) */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#141414]">
                  <Image
                    src={item.image}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-xs font-mono text-[#8bc34a] block mb-2">
                      {categoryName}
                    </span>

                    <h3 className="font-display font-semibold text-lg text-white leading-snug mb-4 group-hover:text-[#8bc34a] transition-colors">
                      {name}
                    </h3>

                    {/* Clean Specs List */}
                    <div className="space-y-2 mb-6 pt-2 border-t border-[#1a1a1a]">
                      {specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {((isRtl ? item.standardsAr : item.standardsEn) || item.standards).slice(0, 2).map((std, stIdx) => (
                        <span
                          key={stIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161616] text-stone-400 border border-[#222222]"
                        >
                          {std}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/${lang}/rfq`}
                      className="inline-flex items-center text-xs font-semibold text-stone-200 hover:text-[#8bc34a] transition-colors gap-1"
                    >
                      <span>{dict.equipment.requestRfq}</span>
                      <ArrowIcon className="w-3.5 h-3.5 text-[#8bc34a]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Expand/Collapse Button if more items */}
        {filteredEquipment.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#262626] hover:border-stone-500 bg-[#111111] text-stone-300 hover:text-white text-xs sm:text-sm font-medium transition-all"
            >
              <span>
                {showAll
                  ? (isRtl ? 'عرض أقل' : 'Show Less')
                  : (isRtl ? `عرض كل المعدات (${filteredEquipment.length})` : `View All (${filteredEquipment.length})`)
                }
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
