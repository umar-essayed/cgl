'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpLeft, ChevronLeft } from 'lucide-react';
import { CGL_PROJECTS_EVIDENCE } from '@/lib/data';

export default function ProjectsEvidenceSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? CGL_PROJECTS_EVIDENCE : CGL_PROJECTS_EVIDENCE.slice(0, 3);

  return (
    <section id="projects" className="py-14 sm:py-24 engineering-canvas border-b border-[#1f1f1f] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-[#1f1f1f]">
          <div>
            <div className="inline-flex items-center space-x-2 space-x-reverse px-3 py-1 rounded-full bg-[#111111] border border-[#1f1f1f] text-xs font-sans text-[#8bc34a] mb-2.5">
              <span className="w-2 h-2 bg-[#8bc34a] rounded-full animate-pulse" />
              <span className="font-semibold">سجل العمليات الميدانية</span>
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              دراسات المشاريع المنفذة
            </h2>
          </div>

          <div className="flex-shrink-0 text-xs font-mono text-stone-400 bg-[#111111] px-3.5 py-1.5 rounded-xl border border-[#1f1f1f] self-start sm:self-auto">
            <span>المشاريع: </span>
            <span className="text-[#8bc34a] font-bold">0{visibleProjects.length} من 0{CGL_PROJECTS_EVIDENCE.length}</span>
          </div>
        </div>

        {/* Streamlined Cards Grid - 3 cards by default */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/80"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#111111]">
                <Image
                  src={project.coverImage}
                  alt={project.nameAr}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-2.5 font-mono">
                    <span className="text-[#8bc34a] font-medium">{project.sectorAr}</span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <MapPin className="w-3.5 h-3.5 text-[#8bc34a]" />
                      {project.locationAr}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#8bc34a] transition-colors line-clamp-2 leading-snug mb-2">
                    {project.nameAr}
                  </h3>
                  <p className="text-xs text-stone-400 font-sans line-clamp-2 leading-relaxed mb-4">
                    {project.scopeOfWorkAr}
                  </p>
                </div>

                {/* Standards & Direct Link */}
                <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.relevantStandards.slice(0, 1).map((std, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111111] text-stone-300 border border-[#1f1f1f]"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#8bc34a] transition-colors"
                  >
                    <span>تفاصيل المشروع</span>
                    <ArrowUpLeft className="w-4 h-4 mr-1 text-[#8bc34a] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="inline-flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-full bg-[#111111] hover:bg-[#1a1a1a] border border-[#1f1f1f] text-stone-200 hover:text-white font-sans text-xs sm:text-sm font-semibold transition-all shadow-md group hover:border-[#8bc34a]/40"
          >
            <span>
              {showAllProjects 
                ? 'طي قائمة المشاريع' 
                : `عرض كافة المشاريع المنفذة (${CGL_PROJECTS_EVIDENCE.length} مشاريع)`
              }
            </span>
            <ChevronLeft className={`w-4 h-4 text-[#8bc34a] transition-transform duration-300 ${showAllProjects ? '-rotate-90' : 'rotate-0'}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
