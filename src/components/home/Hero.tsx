'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
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

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slideImages = [
    '/assets/sliders/slider1.jpg',
    '/uploads/projects_images/project_688d08b6e73ee4.36242119.jpg',
    '/uploads/projects_images/project_688d0f1061e875.99060450.jpg'
  ];

  const totalSlides = dict.hero.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto slide advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  // Auto-scroll ONLY the tabs container horizontally, NEVER the window
  useEffect(() => {
    const container = tabsContainerRef.current;
    const activeTab = tabRefs.current[currentSlide];
    if (container && activeTab) {
      const targetScroll = activeTab.offsetLeft - (container.clientWidth / 2) + (activeTab.clientWidth / 2);
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

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

  const slideData = dict.hero.slides[currentSlide] || dict.hero.slides[0];
  const slideImage = slideImages[currentSlide] || slideImages[0];
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[100svh] sm:min-h-[700px] max-h-[1050px] flex flex-col justify-between pt-24 pb-4 sm:pt-28 sm:pb-8 engineering-canvas overflow-hidden bg-[#000000] select-none"
    >
      {/* Background Image Carousel with Smooth AnimatePresence */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideData.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slideImage}
              alt={slideData.title}
              fill
              priority
              className="object-cover object-center filter contrast-105 brightness-95"
            />
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
                key={slideData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-2.5 sm:space-y-4"
              >
                {/* Tag Pill */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-[#111111]/90 border border-[#1f1f1f] text-[11px] sm:text-xs font-sans text-[#3b76b3] shadow-sm w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b76b3] animate-pulse" />
                  <span className="font-semibold">{slideData.tag}</span>
                  <span className="text-stone-600">|</span>
                  <span className="text-stone-300 font-mono text-[10px] sm:text-xs">{slideData.metrics}</span>
                </div>

                {/* Headline */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-snug tracking-tight">
                  {slideData.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-base md:text-lg text-stone-200 font-sans leading-relaxed max-w-2xl font-normal line-clamp-2 sm:line-clamp-none">
                  {slideData.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2.5 sm:gap-4 items-center mt-4 sm:mt-6">
            <Link
              href={`/${lang}/rfq`}
              className="inline-flex items-center justify-center flex-1 sm:flex-initial px-4 sm:px-7 py-2.5 sm:py-3 bg-[#3b76b3] hover:bg-[#2a5b8c] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-[#3b76b3]/20 active:scale-[0.98] transition-all text-center gap-1.5"
            >
              <span>{dict.hero.ctaRfq}</span>
              <ArrowIcon className="w-3.5 h-3.5 text-white" />
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
              <div className="flex items-baseline gap-0.5">
                <span className="text-base font-bold text-white tracking-tight">
                  <AnimatedCounter target={dict.hero.stats.partners.num} />
                </span>
                <span className="text-[#3b76b3] font-bold text-xs">+</span>
                <span className="text-[10px] text-stone-300 font-sans font-medium">{dict.hero.stats.partners.label}</span>
              </div>

              <span className="text-stone-700">•</span>

              <div className="flex items-baseline gap-0.5">
                <span className="text-base font-bold text-white tracking-tight">
                  <AnimatedCounter target={dict.hero.stats.solutions.num} />
                </span>
                <span className="text-[#3b76b3] font-bold text-xs">+</span>
                <span className="text-[10px] text-stone-300 font-sans font-medium">{dict.hero.stats.solutions.label}</span>
              </div>

              <span className="text-stone-700">•</span>

              <div className="flex items-baseline gap-0.5">
                <span className="text-base font-bold text-white tracking-tight">
                  <AnimatedCounter target={dict.hero.stats.experience.num} />
                </span>
                <span className="text-[#3b76b3] font-bold text-xs">+</span>
                <span className="text-[10px] text-stone-300 font-sans font-medium">{dict.hero.stats.experience.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-Only Metrics Counter */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full mb-3">
        <div className="flex items-center justify-start gap-7 text-xs font-mono">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white tracking-tight">
              <AnimatedCounter target={dict.hero.stats.partners.num} />
            </span>
            <span className="text-[#3b76b3] font-bold text-sm">+</span>
            <span className="text-xs text-stone-300 font-sans font-medium">{dict.hero.stats.partners.label}</span>
          </div>

          <span className="text-stone-700">•</span>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white tracking-tight">
              <AnimatedCounter target={dict.hero.stats.solutions.num} />
            </span>
            <span className="text-[#3b76b3] font-bold text-sm">+</span>
            <span className="text-xs text-stone-300 font-sans font-medium">{dict.hero.stats.solutions.label}</span>
          </div>

          <span className="text-stone-700">•</span>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white tracking-tight">
              <AnimatedCounter target={dict.hero.stats.experience.num} />
            </span>
            <span className="text-[#3b76b3] font-bold text-sm">+</span>
            <span className="text-xs text-stone-300 font-sans font-medium">{dict.hero.stats.experience.label}</span>
          </div>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-20 w-full pt-3 sm:pt-4 border-t border-white/10">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Mobile Prev / Next Arrows */}
          <div className="flex sm:hidden items-center gap-1.5 flex-shrink-0">
            <button
              type="button"
              onClick={isRtl ? nextSlide : prevSlide}
              aria-label="Previous Slide"
              className="w-8 h-8 rounded-lg bg-black/80 border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={isRtl ? prevSlide : nextSlide}
              aria-label="Next Slide"
              className="w-8 h-8 rounded-lg bg-black/80 border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Switcher Tabs: Touch Scrollable on Mobile with Snap */}
          <div ref={tabsContainerRef} className="flex items-center gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-none touch-pan-x py-1 w-full max-w-full">
            {dict.hero.slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  ref={(el) => { tabRefs.current[idx] = el; }}
                  key={s.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`snap-center px-3 sm:px-3.5 py-1.5 sm:py-1.5 rounded-xl text-[11px] sm:text-xs font-sans transition-all whitespace-nowrap flex items-center gap-2 flex-shrink-0 active:scale-95 ${
                    isActive
                      ? 'bg-white text-black font-bold shadow-lg ring-1 ring-white/50'
                      : 'bg-black/70 text-stone-300 hover:text-white border border-white/15 hover:bg-black/90'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? 'bg-[#3b76b3]' : 'bg-stone-600'}`} />
                  <span>0{idx + 1}. {s.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Affiliation Info */}
          <div className="hidden lg:flex items-center gap-3 text-xs text-stone-300 font-sans flex-shrink-0">
            <span className="flex items-center gap-1.5 text-stone-200">
              <Shield className="w-3.5 h-3.5 text-[#3b76b3]" />
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
