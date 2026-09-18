'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpLeft, ArrowUpRight, Search, ChevronRight, Filter } from 'lucide-react';
import { ProjectEvidence } from '@/lib/types';
import { Locale, getDictionary } from '@/lib/i18n';

interface ProjectsCatalogClientProps {
  lang: Locale;
  initialProjects: ProjectEvidence[];
}

export default function ProjectsCatalogClient({ lang, initialProjects }: ProjectsCatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');

  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  // Extract unique sectors
  const sectors = useMemo(() => {
    const set = new Set<string>();
    initialProjects.forEach((p) => {
      const s = isRtl ? p.sectorAr : p.sectorEn;
      if (s) set.add(s);
    });
    return Array.from(set);
  }, [initialProjects, isRtl]);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const name = (isRtl ? project.nameAr : project.nameEn) || '';
      const sector = (isRtl ? project.sectorAr : project.sectorEn) || '';
      const location = (isRtl ? project.locationAr : project.locationEn) || '';
      const scope = (isRtl ? project.scopeOfWorkAr : project.scopeOfWorkEn) || '';

      const matchesSearch = 
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scope.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSector = selectedSector === 'all' || sector === selectedSector;

      return matchesSearch && matchesSector;
    });
  }, [initialProjects, searchQuery, selectedSector, isRtl]);

  return (
    <div className="space-y-8">
      {/* Search and Sector Filter Controls */}
      <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full sm:max-w-md">
            <Search className={`w-4 h-4 text-stone-400 absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 pointer-events-none`} />
            <input
              type="text"
              placeholder={isRtl ? 'البحث باسم المشروع، الموقع، أو نوع الاختبارات...' : 'Search by project name, location, or test type...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-[#111111] border border-[#1f1f1f] rounded-xl ${isRtl ? 'pr-9 pl-4' : 'pl-9 pr-4'} py-2.5 text-sm sm:text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-[#8bc34a] transition-colors`}
            />
          </div>

          {/* Results Count Badge */}
          <div className="text-xs font-mono text-stone-400 bg-[#111111] px-3.5 py-2 rounded-xl border border-[#1f1f1f] w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2">
            <span>{isRtl ? 'المشاريع المطابقة:' : 'Matching Projects:'}</span>
            <span className="text-[#8bc34a] font-bold">
              {String(filteredProjects.length).padStart(2, '0')} / {String(initialProjects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Sector Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedSector('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedSector === 'all'
                ? 'bg-[#8bc34a] text-black font-bold shadow-md'
                : 'bg-[#111111] text-stone-400 hover:text-white border border-[#1f1f1f]'
            }`}
          >
            {isRtl ? 'كافة القطاعات' : 'All Sectors'}
          </button>

          {sectors.map((sec) => (
            <button
              key={sec}
              type="button"
              onClick={() => setSelectedSector(sec)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedSector === sec
                  ? 'bg-[#8bc34a] text-black font-bold shadow-md'
                  : 'bg-[#111111] text-stone-400 hover:text-white border border-[#1f1f1f]'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center bg-[#0a0a0a] rounded-2xl border border-[#1f1f1f] p-8">
          <p className="text-stone-400 text-sm font-sans mb-3">
            {isRtl ? 'لم يتم العثور على أي دراسات مشاريع مطابقة للبحث المحدد' : 'No engineering project case studies match your search criteria'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedSector('all'); }}
            className="text-xs text-[#8bc34a] hover:underline font-bold"
          >
            {isRtl ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const name = isRtl ? project.nameAr : project.nameEn;
            const sector = isRtl ? project.sectorAr : project.sectorEn;
            const location = isRtl ? project.locationAr : project.locationEn;
            const scope = isRtl ? project.scopeOfWorkAr : project.scopeOfWorkEn;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
                className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/80"
              >
                {/* Card Image */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#111111]">
                  <Image
                    src={project.coverImage || '/assets/sliders/slider1.jpg'}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-400 mb-2.5 font-mono">
                      <span className="text-[#8bc34a] font-medium">{sector}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#8bc34a]" />
                        {location}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#8bc34a] transition-colors line-clamp-2 leading-snug mb-2">
                      {name}
                    </h3>
                    <p className="text-xs text-stone-400 font-sans line-clamp-2 leading-relaxed mb-4">
                      {scope}
                    </p>
                  </div>

                  {/* Standards & Link */}
                  <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between">
                    <div className="text-[11px] font-mono text-stone-500">
                      {project.relevantStandards && project.relevantStandards[0] ? (
                        <span className="bg-[#141414] px-2 py-0.5 rounded border border-[#1f1f1f]">
                          {project.relevantStandards[0]}
                        </span>
                      ) : (
                        <span>SBC Standard</span>
                      )}
                    </div>

                    <Link
                      href={`/${lang}/projects/${project.id}`}
                      className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#8bc34a] transition-colors gap-1"
                    >
                      <span>{dict.projects.detailsBtn}</span>
                      <ArrowIcon className="w-4 h-4 text-[#8bc34a] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
