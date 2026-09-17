'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';
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
    <section id="news" className="py-16 sm:py-24 bg-[#080808] border-b border-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Header */}
        <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm font-mono text-[#3b76b3] mb-2 tracking-wider">
              {dict.news.badge}
            </p>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              {dict.news.title}
            </h2>
          </div>
          <p className="text-stone-400 text-sm max-w-lg leading-relaxed">
            {dict.news.subtitle}
          </p>
        </div>

        {/* Mobile: Horizontal scroll slider | Desktop: Exact same 3-column grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0">
          {CGL_LATEST_NEWS.map((article) => {
            const title = isRtl ? article.titleAr : article.titleEn;
            const excerpt = isRtl ? article.excerptAr : article.excerptEn;
            const category = isRtl ? article.categoryAr : article.categoryEn;
            const date = (isRtl ? article.dateAr : article.dateEn) || article.date;

            return (
              <article
                key={article.id}
                className="w-[82vw] sm:w-[320px] md:w-auto flex-shrink-0 md:flex-shrink snap-center sm:snap-start group flex flex-col justify-between"
              >
                <div>
                  {/* Clean Image */}
                  <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-[#141414] border border-[#1e1e1e] mb-4">
                    <Image
                      src={article.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Category & Date */}
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-400 mb-2">
                    <span className="text-[#3b76b3]">{category}</span>
                    <span>•</span>
                    <span>{date}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-[#3b76b3] transition-colors leading-snug mb-3">
                    {title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-stone-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="pt-2">
                  <Link
                    href={`/${lang}/rfq`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-stone-300 group-hover:text-[#3b76b3] transition-colors"
                  >
                    <span>{dict.news.readArticle}</span>
                    <ArrowIcon className="w-3.5 h-3.5 text-[#3b76b3]" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
