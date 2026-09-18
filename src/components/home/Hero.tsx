'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import { CGL_COMPANY_INFO } from '@/lib/data';
import { Locale, getDictionary } from '@/lib/i18n';
import { HeroSlide } from '@/lib/types';

interface HeroProps {
  lang?: Locale;
  slides?: HeroSlide[];
  stats?: {
    globalPartners?: number;
    innovativeSolutions?: number;
    yearsOfGrowth?: number;
  };
}

function AnimatedCounter({ target, duration = 2200 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
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

export default function Hero({ lang = 'ar', slides, stats }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';

  const partnersCount = stats?.globalPartners ?? dict.hero.stats.partners.num;
  const solutionsCount = stats?.innovativeSolutions ?? dict.hero.stats.solutions.num;
  const experienceCount = stats?.yearsOfGrowth ?? dict.hero.stats.experience.num;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const fallbackImages = [
    '/assets/sliders/slider1.jpg',
    '/uploads/projects_images/project_688d08b6e73ee4.36242119.jpg',
    '/uploads/projects_images/project_688d0f1061e875.99060450.jpg'
  ];

  // Normalized dynamic slides (accepts arbitrary count, image or video, custom duration)
  const normalizedSlides = useMemo(() => {
    if (slides && slides.length > 0) {
      return slides.map((s, idx) => ({
        id: s.id || `slide-${idx}`,
        tag: (isRtl ? s.tagAr : s.tagEn) || (isRtl ? 'دراسات جيوتقنية' : 'Geotechnical'),
        title: (isRtl ? s.titleAr : s.titleEn) || '',
        subtitle: (isRtl ? s.subtitleAr : s.subtitleEn) || '',
        metrics: (isRtl ? s.metricsAr : s.metricsEn) || '',
        mediaUrl: s.mediaUrl || fallbackImages[idx % fallbackImages.length],
        type: s.type || ((s.mediaUrl?.endsWith('.mp4') || s.mediaUrl?.endsWith('.webm')) ? 'video' : 'image'),
        duration: s.duration || 6,
      }));
    }

    // Default dictionary slides fallback
    return dict.hero.slides.map((s, idx) => ({
      id: `dict-${s.id || idx}`,
      tag: s.tag,
      title: s.title,
      subtitle: s.subtitle,
      metrics: s.metrics,
      mediaUrl: fallbackImages[idx % fallbackImages.length],
      type: 'image' as const,
      duration: 6,
    }));
  }, [slides, isRtl, dict.hero.slides]);

  const totalSlides = normalizedSlides.length;
  const activeSlide = normalizedSlides[currentSlide] || normalizedSlides[0];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Keep current slide within bounds if slides count changes dynamically
  useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  // Dynamic per-slide timer based on each slide's individual duration
  useEffect(() => {
    if (totalSlides <= 1) return;
    const slideDuration = Number(activeSlide.duration) > 0 ? Number(activeSlide.duration) : 6;
    const durationMs = slideDuration * 1000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, durationMs);

    return () => clearTimeout(timer);
  }, [currentSlide, activeSlide.id, activeSlide.duration, totalSlides]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left
        if (isRtl) {
          prevSlide();
        } else {
          nextSlide();
        }
      } else {
        // Swiped right
        if (isRtl) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[100svh] sm:min-h-[700px] max-h-[1050px] flex flex-col justify-between pt-24 pb-4 sm:pt-28 sm:pb-8 engineering-canvas overflow-hidden bg-[#000000] select-none"
    >
      {/* Background Image/Video Carousel with Smooth AnimatePresence */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id + activeSlide.mediaUrl}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {activeSlide.type === 'video' ? (
              <video
                key={activeSlide.mediaUrl}
                src={activeSlide.mediaUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
              />
            ) : (
              <Image
                src={activeSlide.mediaUrl}
                alt={activeSlide.title}
                fill
                priority
                className="object-cover object-center filter contrast-105 brightness-95"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Dual Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[#000000]/30 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full my-auto">
        <div className="max-w-4xl">
          {/* Content Box */}
          <div className="min-h-[170px] sm:min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-2.5 sm:space-y-4"
              >
                {/* Tag Pill */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-[#111111]/90 border border-[#1f1f1f] text-[11px] sm:text-xs font-sans text-[#8bc34a] shadow-sm w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8bc34a] animate-pulse" />
                  <span className="font-semibold">{activeSlide.tag}</span>
                  {activeSlide.metrics && (
                    <>
                      <span className="text-stone-600">|</span>
                      <span className="text-stone-300 font-mono text-[10px] sm:text-xs">{activeSlide.metrics}</span>
                    </>
                  )}
                </div>

                {/* Headline */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-snug tracking-tight">
                  {activeSlide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-base md:text-lg text-stone-200 font-sans leading-relaxed max-w-2xl font-normal line-clamp-2 sm:line-clamp-none">
                  {activeSlide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2.5 sm:gap-4 items-center mt-4 sm:mt-6">
            <Link
              href={`/${lang}/rfq`}
              className="inline-flex items-center justify-center flex-1 sm:flex-initial px-4 sm:px-7 py-2.5 sm:py-3 bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-[#8bc34a]/20 active:scale-[0.98] transition-all text-center gap-1.5"
            >
              <span>{dict.hero.ctaRfq}</span>
              <ArrowIcon className="w-3.5 h-3.5 text-black" />
            </Link>

            <a
              href={`/${lang}#services`}
              className="inline-flex items-center justify-center flex-1 sm:flex-initial px-4 sm:px-5 py-2.5 sm:py-3 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white font-medium text-xs sm:text-sm rounded-xl border border-white/20 transition-all text-center"
            >
              <span>{dict.hero.ctaServices}</span>
            </a>
          </div>

          {/* Mobile-Only Analytics Counter */}
          <div className="sm:hidden mt-4 pt-3 border-t border-white/10 w-full">
            <div className="flex items-center justify-between gap-1 text-xs font-mono">
              <div className="flex items-baseline gap-1">
                <div className="flex items-baseline gap-0.5">
                  {isRtl ? (
                    <>
                      <span className="text-[#8bc34a] font-bold text-base">+</span>
                      <span className="text-base font-bold text-white tracking-tight">
                        <AnimatedCounter target={partnersCount} />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-base font-bold text-white tracking-tight">
                        <AnimatedCounter target={partnersCount} />
                      </span>
                      <span className="text-[#8bc34a] font-bold text-base">+</span>
                    </>
                  )}
                </div>
                <span className="text-[10px] text-stone-300 font-sans font-medium">{dict.hero.stats.partners.label}</span>
              </div>

              <span className="text-stone-700">•</span>

              <div className="flex items-baseline gap-1">
                <div className="flex items-baseline gap-0.5">
                  {isRtl ? (
                    <>
                      <span className="text-[#8bc34a] font-bold text-base">+</span>
                      <span className="text-base font-bold text-white tracking-tight">
                        <AnimatedCounter target={solutionsCount} />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-base font-bold text-white tracking-tight">
                        <AnimatedCounter target={solutionsCount} />
                      </span>
                      <span className="text-[#8bc34a] font-bold text-base">+</span>
                    </>
                  )}
                </div>
                <span className="text-[10px] text-stone-300 font-sans font-medium">{dict.hero.stats.solutions.label}</span>
              </div>

              <span className="text-stone-700">•</span>

              <div className="flex items-baseline gap-1">
                <div className="flex items-baseline gap-0.5">
                  {isRtl ? (
                    <>
                      <span className="text-[#8bc34a] font-bold text-base">+</span>
                      <span className="text-base font-bold text-white tracking-tight">
                        <AnimatedCounter target={experienceCount} />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-base font-bold text-white tracking-tight">
                        <AnimatedCounter target={experienceCount} />
                      </span>
                      <span className="text-[#8bc34a] font-bold text-base">+</span>
                    </>
                  )}
                </div>
                <span className="text-[10px] text-stone-300 font-sans font-medium">{dict.hero.stats.experience.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-Only Metrics Counter */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full mb-3">
        <div className="flex items-center justify-start gap-7 text-xs font-mono">
          <div className="flex items-baseline gap-1.5">
            <div className="flex items-baseline gap-0.5">
              {isRtl ? (
                <>
                  <span className="text-[#8bc34a] font-bold text-xl">+</span>
                  <span className="text-xl font-bold text-white tracking-tight">
                    <AnimatedCounter target={partnersCount} />
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xl font-bold text-white tracking-tight">
                    <AnimatedCounter target={partnersCount} />
                  </span>
                  <span className="text-[#8bc34a] font-bold text-xl">+</span>
                </>
              )}
            </div>
            <span className="text-xs text-stone-300 font-sans font-medium">{dict.hero.stats.partners.label}</span>
          </div>

          <span className="text-stone-700">•</span>

          <div className="flex items-baseline gap-1.5">
            <div className="flex items-baseline gap-0.5">
              {isRtl ? (
                <>
                  <span className="text-[#8bc34a] font-bold text-xl">+</span>
                  <span className="text-xl font-bold text-white tracking-tight">
                    <AnimatedCounter target={solutionsCount} />
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xl font-bold text-white tracking-tight">
                    <AnimatedCounter target={solutionsCount} />
                  </span>
                  <span className="text-[#8bc34a] font-bold text-xl">+</span>
                </>
              )}
            </div>
            <span className="text-xs text-stone-300 font-sans font-medium">{dict.hero.stats.solutions.label}</span>
          </div>

          <span className="text-stone-700">•</span>

          <div className="flex items-baseline gap-1.5">
            <div className="flex items-baseline gap-0.5">
              {isRtl ? (
                <>
                  <span className="text-[#8bc34a] font-bold text-xl">+</span>
                  <span className="text-xl font-bold text-white tracking-tight">
                    <AnimatedCounter target={experienceCount} />
                  </span>
                </>
              ) : (
                <>
                  <span className="text-xl font-bold text-white tracking-tight">
                    <AnimatedCounter target={experienceCount} />
                  </span>
                  <span className="text-[#8bc34a] font-bold text-xl">+</span>
                </>
              )}
            </div>
            <span className="text-xs text-stone-300 font-sans font-medium">{dict.hero.stats.experience.label}</span>
          </div>
        </div>
      </div>

      {/* Bottom Controls Bar (Dynamic Tabs: Scrollable on mobile, flex on desktop) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-20 w-full pt-3 sm:pt-4 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Slide Switcher Tabs: Strictly NO SCROLL on mobile, fits 100% width evenly */}
          <div className="w-full sm:w-auto">
            <div className="flex items-center gap-1.5 sm:gap-2 w-full">
              {normalizedSlides.map((s, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative overflow-hidden flex-1 sm:flex-initial min-w-0 px-2.5 py-2 sm:px-4 sm:py-2 rounded-xl text-[10px] sm:text-xs font-sans transition-all flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 active:scale-95 backdrop-blur-md ${
                      isActive
                        ? 'bg-black/80 text-white font-bold border border-[#8bc34a]/70 shadow-lg shadow-[#8bc34a]/15 ring-1 ring-[#8bc34a]/30'
                        : 'bg-black/40 text-stone-400 hover:text-white border border-white/10 hover:bg-black/60 hover:border-white/20'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        key={`prog-${s.id}-${currentSlide}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: Number(s.duration) > 0 ? Number(s.duration) : 6, ease: 'linear' }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8bc34a]"
                      />
                    )}
                    <div className="flex items-center gap-1.5 flex-shrink-0 relative z-10">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? 'bg-[#8bc34a] shadow-[0_0_8px_#8bc34a]' : 'bg-stone-600'}`} />
                      <span className={`font-mono font-bold text-[10px] sm:text-xs ${isActive ? 'text-[#8bc34a]' : 'text-stone-500'}`}>0{idx + 1}.</span>
                    </div>
                    <span className={`text-[10px] sm:text-xs truncate relative z-10 ${isActive ? 'text-white' : 'text-stone-300'}`}>{s.tag}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Affiliation Info */}
          <div className="hidden lg:flex items-center gap-3 text-xs text-stone-300 font-sans flex-shrink-0">
            <span className="flex items-center gap-1.5 text-stone-200">
              <Shield className="w-3.5 h-3.5 text-[#8bc34a]" />
              {isRtl ? CGL_COMPANY_INFO.affiliationAr : CGL_COMPANY_INFO.affiliationEn}
            </span>
            <span className="text-stone-600">•</span>
            <span>{dict.hero.sbcCompliance}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
