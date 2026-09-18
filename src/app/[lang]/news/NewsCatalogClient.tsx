'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowUpLeft, ArrowUpRight, Star } from 'lucide-react';
import { NewsArticle } from '@/lib/types';
import { Locale, getDictionary } from '@/lib/i18n';

interface NewsCatalogClientProps {
  lang: Locale;
  initialNews: NewsArticle[];
}

export default function NewsCatalogClient({ lang, initialNews }: NewsCatalogClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    initialNews.forEach((n) => {
      const cat = isRtl ? n.categoryAr : n.categoryEn;
      if (cat) set.add(cat);
    });
    return Array.from(set);
  }, [initialNews, isRtl]);

  const filteredNews = useMemo(() => {
    return initialNews.filter((article) => {
      const title = (isRtl ? article.titleAr : article.titleEn) || '';
      const excerpt = (isRtl ? article.excerptAr : article.excerptEn) || '';
      const cat = (isRtl ? article.categoryAr : article.categoryEn) || '';

      const matchesSearch = 
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || cat === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [initialNews, searchQuery, selectedCategory, isRtl]);

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Bar */}
      <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-4 sm:p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full sm:max-w-md">
            <Search className={`w-4 h-4 text-stone-400 absolute ${isRtl ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 pointer-events-none`} />
            <input
              type="text"
              placeholder={isRtl ? 'البحث بالعنوان، الكلمات المفتاحية، أو كود البناء...' : 'Search articles by title, keywords, or codes...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full bg-[#111111] border border-[#1f1f1f] rounded-xl ${isRtl ? 'pr-9 pl-4' : 'pl-9 pr-4'} py-2.5 text-sm sm:text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-[#8bc34a] transition-colors`}
            />
          </div>

          {/* Results Counter */}
          <div className="text-xs font-mono text-stone-400 bg-[#111111] px-3.5 py-2 rounded-xl border border-[#1f1f1f] w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2">
            <span>{isRtl ? 'المقالات المتوفرة:' : 'Articles Found:'}</span>
            <span className="text-[#8bc34a] font-bold">
              {String(filteredNews.length).padStart(2, '0')} / {String(initialNews.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#8bc34a] text-black font-bold shadow-md'
                : 'bg-[#111111] text-stone-400 hover:text-white border border-[#1f1f1f]'
            }`}
          >
            {isRtl ? 'كافة التصنيفات' : 'All Categories'}
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#8bc34a] text-black font-bold shadow-md'
                  : 'bg-[#111111] text-stone-400 hover:text-white border border-[#1f1f1f]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      {filteredNews.length === 0 ? (
        <div className="py-20 text-center bg-[#0a0a0a] rounded-2xl border border-[#1f1f1f] p-8">
          <p className="text-stone-400 text-sm font-sans mb-3">
            {isRtl ? 'لا توجد أي مقالات أو أخبار مطابقة لمعايير البحث' : 'No news articles match your search criteria'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="text-xs text-[#8bc34a] hover:underline font-bold"
          >
            {isRtl ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredNews.map((article, index) => {
            const title = isRtl ? article.titleAr : article.titleEn;
            const excerpt = isRtl ? article.excerptAr : article.excerptEn;
            const category = isRtl ? article.categoryAr : article.categoryEn;
            const date = (isRtl ? article.dateAr : article.dateEn) || article.date;
            const readTime = isRtl
              ? (article.readTimeAr || `${article.readMinutes || 3} دقائق قراءة`)
              : (article.readTimeEn && !/[\u0600-\u06FF]/.test(article.readTimeEn)
                  ? article.readTimeEn
                  : `${article.readMinutes || 3} min read`);

            return (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
                className="group flex flex-col justify-between rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/80"
              >
                {/* Image */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#111111]">
                  <Image
                    src={article.image || '/assets/sliders/slider1.jpg'}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />

                  {/* Category Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-stone-200 font-semibold">
                      {category}
                    </span>
                  </div>

                  {article.featured && (
                    <div className="absolute top-3.5 left-3.5">
                      <span className="p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/50 text-amber-400 flex items-center justify-center backdrop-blur-md">
                        <Star className="w-3 h-3 fill-amber-400" />
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Meta Row */}
                    <div className="flex items-center gap-3 text-xs text-stone-400 mb-2.5 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-stone-500" />
                        <span>{date}</span>
                      </span>
                      <span className="text-stone-700">•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-500" />
                        <span>{readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-lg sm:text-xl text-white group-hover:text-[#8bc34a] transition-colors leading-snug mb-3">
                      <Link href={`/${lang}/news/${article.id}`}>
                        {title}
                      </Link>
                    </h3>

                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 font-sans">
                      {excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between">
                    <Link
                      href={`/${lang}/news/${article.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-stone-300 group-hover:text-[#8bc34a] transition-colors"
                    >
                      <span>{dict.news.readArticle}</span>
                      <ArrowIcon className="w-3.5 h-3.5 text-[#8bc34a]" />
                    </Link>

                    <span className="text-[10px] font-mono text-stone-500">CGL Insights</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </div>
  );
}
