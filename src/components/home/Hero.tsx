'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import { CGL_COMPANY_INFO } from '@/lib/data';
import { Locale, getDictionary } from '@/lib/i18n';

interface HeroProps {
  lang?: Locale;
}

function AnimatedCounter({ target, duration = 2200 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return <>{count.toLocaleString('en-US')}</>;
}

export default function Hero({ lang = 'ar' }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';

  const slideImages = [
    '/assets/sliders/slider1.jpg',
    '/uploads/projects_images/project_688d08b6e73ee4.36242119.jpg',
    '/uploads/projects_images/project_688d0f1061e875.99060450.jpg'
  ];

  // Auto slide advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % dict.hero.slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [dict.hero.slides.length]);

  const slideData = dict.hero.slides[currentSlide] || dict.hero.slides[0];
  const slideImage = slideImages[currentSlide] || slideImages[0];
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[100dvh] sm:min-h-[700px] max-h-[1050px] flex flex-col justify-between pt-20 pb-3 sm:pt-28 sm:pb-8 engineering-canvas overflow-hidden bg-[#f8fafc] dark:bg-black transition-colors">
      {/* Background Image Carousel with Smooth AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideData.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slideImage}
              alt={slideData.title}
              fill
              priority
              className="object-cover object-center filter contrast-105 opacity-100 dark:opacity-65 transition-opacity"
            />
          </motion.div>
        </AnimatePresence>

        {/* Minimal Subtle Scrim (Almost nonexistent in light mode, preserving raw photography) */}
        <div className={`absolute inset-0 ${
          isRtl
            ? 'bg-gradient-to-l from-white/35 via-white/15 to-transparent dark:from-[#000000]/95 dark:via-black/75 dark:to-black/30'
            : 'bg-gradient-to-r from-white/35 via-white/15 to-transparent dark:from-[#000000]/95 dark:via-black/75 dark:to-black/30'
        } transition-colors duration-300`} />

        {/* Minimal Bottom Fade into Next Section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc]/30 via-transparent to-transparent dark:from-[#000000] dark:via-black/40 dark:to-transparent transition-colors duration-300" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full my-auto">
        <div className="max-w-4xl">
          {/* Stable Content Box */}
          <div className="min-h-[160px] sm:min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-2 sm:space-y-4"
              >
                {/* Tag Pill */}
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/90 dark:bg-[#111111]/90 border border-slate-200 dark:border-[#1f1f1f] text-[10px] sm:text-xs font-sans text-[#689f38] dark:text-[#8bc34a] shadow-sm w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8bc34a] animate-pulse" />
                  <span className="font-semibold">{slideData.tag}</span>
                  <span className="text-slate-300 dark:text-stone-600">|</span>
                  <span className="text-slate-600 dark:text-stone-300 font-mono text-[10px] sm:text-xs">{slideData.metrics}</span>
                </div>

                {/* Headline */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-950 dark:text-white leading-snug tracking-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] dark:drop-shadow-none">
                  {slideData.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-base md:text-lg text-slate-900 dark:text-stone-200 font-sans leading-relaxed max-w-2xl font-normal drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-none line-clamp-2 sm:line-clamp-none">
                  {slideData.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2 sm:gap-4 items-center mt-3 sm:mt-6">
            <Link
              href={`/${lang}/rfq`}
              className="inline-flex items-center justify-center flex-1 sm:flex-initial px-3 sm:px-7 py-2.5 sm:py-3 bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-[#8bc34a]/20 active:scale-[0.98] transition-all text-center gap-1.5"
            >
              <span>{dict.hero.ctaRfq}</span>
              <ArrowIcon className="w-3.5 h-3.5 text-black" />
            </Link>

            <a
              href={`/${lang}#services`}
              className="inline-flex items-center justify-center flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-3 bg-white/90 hover:bg-white dark:bg-black/60 dark:hover:bg-black/80 backdrop-blur-md text-slate-900 dark:text-white font-medium text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-white/20 shadow-sm transition-all text-center"
            >
              <span>{dict.hero.ctaServices}</span>
            </a>
          </div>

          {/* Mobile-Only Raised Analytics Counter */}
          <div className="sm:hidden mt-3.5 pt-3 border-t border-slate-200 dark:border-white/10 w-full">
            <div className="flex items-center justify-between gap-1 text-xs font-mono">
              <div className="flex items-baseline gap-0.5">
                <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  <AnimatedCounter target={dict.hero.stats.partners.num} />
                </span>
                <span className="text-[#8bc34a] font-bold text-xs">+</span>
                <span className="text-[10px] text-slate-600 dark:text-stone-300 font-sans font-medium">{dict.hero.stats.partners.label}</span>
              </div>

              <span className="text-slate-300 dark:text-stone-700">•</span>

              <div className="flex items-baseline gap-0.5">
                <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  <AnimatedCounter target={dict.hero.stats.solutions.num} />
                </span>
                <span className="text-[#8bc34a] font-bold text-xs">+</span>
                <span className="text-[10px] text-slate-600 dark:text-stone-300 font-sans font-medium">{dict.hero.stats.solutions.label}</span>
              </div>

              <span className="text-slate-300 dark:text-stone-700">•</span>

              <div className="flex items-baseline gap-0.5">
                <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  <AnimatedCounter target={dict.hero.stats.experience.num} />
                </span>
                <span className="text-[#8bc34a] font-bold text-xs">+</span>
                <span className="text-[10px] text-slate-600 dark:text-stone-300 font-sans font-medium">{dict.hero.stats.experience.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-Only Metrics Counter */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full mb-3">
        <div className="flex items-center justify-start gap-7 text-xs font-mono">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              <AnimatedCounter target={dict.hero.stats.partners.num} />
            </span>
            <span className="text-[#8bc34a] font-bold text-sm">+</span>
            <span className="text-xs text-slate-600 dark:text-stone-300 font-sans font-medium">{dict.hero.stats.partners.label}</span>
          </div>

          <span className="text-slate-300 dark:text-stone-700">•</span>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              <AnimatedCounter target={dict.hero.stats.solutions.num} />
            </span>
            <span className="text-[#8bc34a] font-bold text-sm">+</span>
            <span className="text-xs text-slate-600 dark:text-stone-300 font-sans font-medium">{dict.hero.stats.solutions.label}</span>
          </div>

          <span className="text-slate-300 dark:text-stone-700">•</span>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              <AnimatedCounter target={dict.hero.stats.experience.num} />
            </span>
            <span className="text-[#8bc34a] font-bold text-sm">+</span>
            <span className="text-xs text-slate-600 dark:text-stone-300 font-sans font-medium">{dict.hero.stats.experience.label}</span>
          </div>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full pt-2.5 sm:pt-4 border-t border-slate-200 dark:border-white/10">
        <div className="flex items-center justify-between gap-4">
          {/* Slide Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
            {dict.hero.slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-sans transition-all whitespace-nowrap flex items-center gap-1.5 flex-shrink-0 ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-black font-bold shadow-md'
                      : 'bg-white/90 text-slate-700 hover:text-slate-900 border border-slate-200 dark:bg-black/60 dark:text-stone-300 dark:hover:text-white dark:border-white/15'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#8bc34a]' : 'bg-slate-300 dark:bg-stone-600'}`} />
                  <span>0{idx + 1}. {s.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Affiliation Info */}
          <div className="hidden md:flex items-center gap-3 text-xs text-slate-600 dark:text-stone-300 font-sans">
            <span className="flex items-center gap-1.5 text-slate-700 dark:text-stone-200">
              <Shield className="w-3.5 h-3.5 text-[#689f38] dark:text-[#8bc34a]" />
              {isRtl ? CGL_COMPANY_INFO.affiliationAr : CGL_COMPANY_INFO.affiliationEn}
            </span>
            <span className="text-slate-300 dark:text-stone-600">•</span>
            <span>{dict.hero.sbcCompliance}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
