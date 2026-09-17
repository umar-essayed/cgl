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
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Newspaper
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
  const InlineArrow = isRtl ? ArrowLeft : ArrowRight;

  const featuredArticle = CGL_LATEST_NEWS.find((n) => n.featured) || CGL_LATEST_NEWS[0];
  const otherArticles = CGL_LATEST_NEWS.filter((n) => n.id !== featuredArticle.id);

  const featTitle = isRtl ? featuredArticle.titleAr : featuredArticle.titleEn;
  const featExcerpt = isRtl ? featuredArticle.excerptAr : featuredArticle.excerptEn;
  const featCategory = isRtl ? featuredArticle.categoryAr : featuredArticle.categoryEn;
  const featReadTime = isRtl ? featuredArticle.readTimeAr : featuredArticle.readTimeEn;

  return (
    <section id="news" className="py-20 sm:py-28 bg-[#050505] border-b border-[#1f1f1f] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-[#8bc34a]/5 blur-[120px] rounded-full pointer-events-none" />

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

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <Link
              href={`/${lang}/rfq`}
              className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-stone-300 hover:text-[#8bc34a] transition-colors group"
            >
              <span>{dict.news.exploreAll}</span>
              <InlineArrow className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Editorial Bento / Asymmetric Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Featured Headline Story (Takes 7 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-[#0b0b0b] rounded-3xl border border-[#222222] hover:border-[#8bc34a]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-2xl"
          >
            {/* Cinematic Hero Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#141414]">
              <Image
                src={featuredArticle.image}
                alt={featTitle}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/40 to-transparent" />

              {/* Floating Highlight Badges */}
              <div className="absolute top-4 right-4 left-4 z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#8bc34a] text-black text-xs font-bold font-sans shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{dict.news.featuredBadge}</span>
                </span>

                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-stone-200 shadow-md">
                  {featCategory}
                </span>
              </div>
            </div>

            {/* Featured Story Body */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
              <div>
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs font-mono text-stone-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8bc34a]" />
                    <span>{featuredArticle.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>{featReadTime}</span>
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#8bc34a] transition-colors leading-snug mb-3">
                  {featTitle}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed mb-6">
                  {featExcerpt}
                </p>
              </div>

              {/* Read Action Bar */}
              <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between">
                <Link
                  href={`/${lang}/rfq`}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-white group-hover:text-[#8bc34a] transition-colors gap-2"
                >
                  <span>{dict.news.readArticle}</span>
                  <ArrowIcon className="w-4 h-4 text-[#8bc34a] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <span className="text-[11px] font-mono text-stone-500">
                  CGL Engineering Journal
                </span>
              </div>
            </div>
          </motion.div>

          {/* Secondary Editorial Digest Stack (Takes 5 cols on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 justify-between">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono text-stone-400 flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-[#8bc34a]" />
                <span>{isRtl ? 'الموجز والتحديثات الأخيرة' : 'Editorial Digest & Updates'}</span>
              </span>
              <span className="text-xs font-mono text-[#8bc34a] font-bold">
                0{otherArticles.length} {isRtl ? 'تقارير' : 'reports'}
              </span>
            </div>

            {otherArticles.map((article, idx) => {
              const title = isRtl ? article.titleAr : article.titleEn;
              const excerpt = isRtl ? article.excerptAr : article.excerptEn;
              const category = isRtl ? article.categoryAr : article.categoryEn;
              const readTime = isRtl ? article.readTimeAr : article.readTimeEn;

              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.35, delay: idx * 0.1 }}
                  className="bg-[#0b0b0b] rounded-2xl border border-[#1e1e1e] hover:border-[#8bc34a]/40 p-4 sm:p-5 transition-all duration-200 flex flex-col sm:flex-row gap-4 group hover:bg-[#111111]"
                >
                  {/* Compact Preview Thumbnail */}
                  <div className="relative w-full sm:w-32 h-36 sm:h-auto rounded-xl overflow-hidden bg-[#161616] flex-shrink-0 border border-[#242424]">
                    <Image
                      src={article.image}
                      alt={title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                  </div>

                  {/* Digest Content */}
                  <div className="flex flex-col justify-between flex-grow min-w-0">
                    <div>
                      {/* Meta Pill & Date */}
                      <div className="flex items-center gap-2 mb-2 text-[11px] font-mono text-stone-400">
                        <span className="text-[#8bc34a] font-medium">{category}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>

                      {/* Headline */}
                      <h4 className="font-display font-bold text-sm sm:text-base text-stone-200 group-hover:text-white group-hover:text-[#8bc34a] transition-colors leading-snug mb-2 line-clamp-2">
                        {title}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-xs text-stone-400 font-sans line-clamp-2 leading-relaxed mb-3">
                        {excerpt}
                      </p>
                    </div>

                    {/* Footer link */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#1a1a1a]">
                      <span className="text-[11px] font-mono text-stone-400">
                        {readTime}
                      </span>

                      <Link
                        href={`/${lang}/rfq`}
                        className="inline-flex items-center text-xs font-bold text-stone-300 group-hover:text-[#8bc34a] transition-colors gap-1"
                      >
                        <span>{dict.news.readArticle}</span>
                        <ArrowIcon className="w-3.5 h-3.5 text-[#8bc34a]" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
