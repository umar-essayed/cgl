'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowUpLeft, 
  ArrowUpRight, 
  Sparkles 
} from 'lucide-react';
import { CGL_LATEST_NEWS } from '@/lib/data';
import { Locale, getDictionary } from '@/lib/i18n';

interface NewsSectionProps {
  lang?: Locale;
}

export default function NewsSection({ lang = 'ar' }: NewsSectionProps) {
  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="news" className="py-20 sm:py-28 bg-black border-b border-[#1f1f1f] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#1f1f1f]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#1f1f1f] text-xs font-sans text-[#8bc34a] mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8bc34a] animate-pulse" />
              <span>{dict.news.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {dict.news.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 font-sans mt-2 max-w-2xl leading-relaxed">
              {dict.news.subtitle}
            </p>
          </div>

          <div className="text-xs font-mono text-stone-400 bg-[#111111] px-3.5 py-1.5 rounded-xl border border-[#1f1f1f] self-start sm:self-auto shadow-sm">
            <span>{isRtl ? 'المقالات والتقارير: ' : 'Technical Stories: '}</span>
            <span className="text-[#8bc34a] font-bold">0{CGL_LATEST_NEWS.length}</span>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CGL_LATEST_NEWS.map((article, idx) => {
            const title = isRtl ? article.titleAr : article.titleEn;
            const excerpt = isRtl ? article.excerptAr : article.excerptEn;
            const category = isRtl ? article.categoryAr : article.categoryEn;
            const readTime = isRtl ? article.readTimeAr : article.readTimeEn;

            return (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/80"
              >
                {/* News Image with Seamless Dark Vignette */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#111111]">
                  <Image
                    src={article.image}
                    alt={title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

                  {/* Category & Featured Badge */}
                  <div className="absolute top-3.5 right-3.5 left-3.5 z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#8bc34a] font-medium shadow-md">
                      {category}
                    </span>

                    {article.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#8bc34a] text-black text-[10px] font-bold font-sans shadow-md">
                        <Sparkles className="w-3 h-3" />
                        <span>{dict.news.featuredBadge}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* News Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Meta: Date & Read Time */}
                    <div className="flex items-center gap-4 text-xs font-mono text-stone-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#8bc34a]" />
                        <span>{article.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        <span>{readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#8bc34a] transition-colors leading-snug mb-3">
                      {title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed line-clamp-3 mb-4">
                      {excerpt}
                    </p>
                  </div>

                  {/* Read More Footer */}
                  <div className="pt-4 border-t border-[#1f1f1f] mt-auto flex items-center justify-between">
                    <Link
                      href={`/${lang}/rfq`}
                      className="inline-flex items-center text-xs font-bold text-white group-hover:text-[#8bc34a] transition-colors gap-1.5"
                    >
                      <span>{dict.news.readArticle}</span>
                      <ArrowIcon className="w-4 h-4 text-[#8bc34a] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
