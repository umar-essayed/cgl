'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { CGL_COMPANY_INFO } from '@/lib/data';

const heroSlides = [
  {
    id: 1,
    image: '/assets/sliders/slider1.jpg',
    tag: 'استكشاف التربة والأساسات',
    title: 'الدقة الجيوتقنية التي تبنى عليها أضخم مشاريع المملكة',
    subtitle: 'حفر الجسات الآلية وتحديد قدرة تحمل التربة وتوصيات الأساسات وفق كود البناء السعودي.',
    metrics: 'أعماق حفر +50 متراً'
  },
  {
    id: 2,
    image: '/uploads/projects_images/project_688d08b6e73ee4.36242119.jpg',
    tag: 'اختبارات التحميل الاستاتيكي',
    title: 'تأكيد سلامة الأساسات العميقة بروافع تتجاوز 1000 طن',
    subtitle: 'منظومة هيدروليكية وخلايا ضغط معايرة لحساب الهبوط بدقة مليمترية وفق ASTM D1143.',
    metrics: 'أحمال فحص +1000 طن'
  },
  {
    id: 3,
    image: '/uploads/projects_images/project_688d0f1061e875.99060450.jpg',
    tag: 'المسح الطبوغرافي والجيوديسي',
    title: 'رصد مساحي رقمي دقيق ونمذجة ثلاثية الأبعاد للمواقع',
    subtitle: 'أحدث محطات الرصد الشاملة وأجهزة GNSS لتثبيت محاور المنشآت وحساب الكميات بدقة قطعية.',
    metrics: 'دقة رصد ثانية واحدة'
  }
];

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

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[100dvh] sm:min-h-[700px] max-h-[1050px] flex flex-col justify-between pt-20 pb-3 sm:pt-28 sm:pb-8 engineering-canvas overflow-hidden">
      {/* Background Image Carousel with Smooth AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover object-center filter contrast-105 brightness-95"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dual Vignette: Soft bottom transition and subtle top header shade for crystal-clear navbar integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/70" />
        <div className="absolute inset-0 bg-[#000000]/30" />
      </div>

      {/* Main Content Area - Locked Height Container to Eliminate Layout Shift */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full my-auto">
        <div className="max-w-4xl">
          {/* Stable Content Box with Responsive Min-Height */}
          <div className="min-h-[160px] sm:min-h-[280px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-2 sm:space-y-4"
              >
                {/* Tag Pill */}
                <div className="inline-flex items-center space-x-2 space-x-reverse px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#111111]/90 border border-[#1f1f1f] text-[10px] sm:text-xs font-sans text-[#8bc34a] shadow-sm w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8bc34a] animate-pulse" />
                  <span className="font-semibold">{slide.tag}</span>
                  <span className="text-stone-600">|</span>
                  <span className="text-stone-300 font-mono text-[10px] sm:text-xs">{slide.metrics}</span>
                </div>

                {/* Responsive Headline (El Messiri) */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-snug tracking-tight">
                  {slide.title}
                </h1>

                {/* Responsive Subtitle (Cairo) */}
                <p className="text-xs sm:text-base md:text-lg text-stone-300 font-sans leading-relaxed max-w-2xl font-normal line-clamp-2 sm:line-clamp-none">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action Buttons - Compact side-by-side on mobile, expansive on desktop */}
          <div className="flex flex-row gap-2 sm:gap-4 items-center mt-3 sm:mt-6">
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center flex-1 sm:flex-initial px-3 sm:px-7 py-2.5 sm:py-3 bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-[#8bc34a]/20 active:scale-[0.98] transition-all text-center"
            >
              <span>طلب تسعير واستشارة</span>
              <ArrowLeft className="w-3.5 h-3.5 mr-1 text-black" />
            </Link>

            <a
              href="#services"
              className="inline-flex items-center justify-center flex-1 sm:flex-initial px-3 sm:px-5 py-2.5 sm:py-3 bg-[#111111]/90 hover:bg-[#1a1a1a] text-stone-200 hover:text-white font-medium text-xs sm:text-sm rounded-xl border border-[#1f1f1f] transition-all text-center"
            >
              <span>الركائز الهندسية</span>
            </a>
          </div>

          {/* Mobile-Only Raised Analytics Counter (Immediately visible on page load on mobile) */}
          <div className="sm:hidden mt-3.5 pt-3 border-t border-white/10 w-full">
            <div className="flex items-center justify-between gap-1 text-xs font-mono">
              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold text-white tracking-tight">
                  <AnimatedCounter target={650} />
                </span>
                <span className="text-[#8bc34a] font-bold text-xs">+</span>
                <span className="text-[10px] text-stone-300 font-sans font-medium mr-0.5">Global Partners</span>
              </div>

              <span className="text-stone-700">•</span>

              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold text-white tracking-tight">
                  <AnimatedCounter target={300} />
                </span>
                <span className="text-[#8bc34a] font-bold text-xs">+</span>
                <span className="text-[10px] text-stone-300 font-sans font-medium mr-0.5">Solutions</span>
              </div>

              <span className="text-stone-700">•</span>

              <div className="flex items-baseline gap-1">
                <span className="text-base font-bold text-white tracking-tight">
                  <AnimatedCounter target={20} />
                </span>
                <span className="text-[#8bc34a] font-bold text-xs">+</span>
                <span className="text-[10px] text-stone-300 font-sans font-medium mr-0.5">Years Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-Only Metrics Counter (100% Preserved & Untouched on Computer Screens) */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full mb-3">
        <div className="flex items-center justify-start gap-7 text-xs font-mono">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white tracking-tight">
              <AnimatedCounter target={650} />
            </span>
            <span className="text-[#8bc34a] font-bold text-sm">+</span>
            <span className="text-xs text-stone-300 font-sans font-medium mr-1">Global Partners</span>
          </div>

          <span className="text-stone-700">•</span>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white tracking-tight">
              <AnimatedCounter target={300} />
            </span>
            <span className="text-[#8bc34a] font-bold text-sm">+</span>
            <span className="text-xs text-stone-300 font-sans font-medium mr-1">Innovative Solutions</span>
          </div>

          <span className="text-stone-700">•</span>

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-white tracking-tight">
              <AnimatedCounter target={20} />
            </span>
            <span className="text-[#8bc34a] font-bold text-sm">+</span>
            <span className="text-xs text-stone-300 font-sans font-medium mr-1">Years of Growth</span>
          </div>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full pt-2.5 sm:pt-4 border-t border-[#1f1f1f]">
        <div className="flex items-center justify-between gap-4">
          {/* Slide Switcher Tabs */}
          <div className="flex items-center space-x-2 space-x-reverse overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
            {heroSlides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-sans transition-all whitespace-nowrap flex items-center space-x-1.5 space-x-reverse flex-shrink-0 ${
                    isActive
                      ? 'bg-white text-black font-bold shadow-md'
                      : 'bg-[#111111]/80 text-stone-400 hover:text-white border border-[#1f1f1f]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#8bc34a]' : 'bg-stone-600'}`} />
                  <span>0{idx + 1}. {s.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Affiliation Info */}
          <div className="hidden md:flex items-center space-x-3 space-x-reverse text-xs text-stone-400 font-sans">
            <span className="flex items-center text-stone-300">
              <Shield className="w-3.5 h-3.5 ml-1.5 text-[#82B74B]" />
              {CGL_COMPANY_INFO.affiliationAr}
            </span>
            <span className="text-stone-600">•</span>
            <span>معايير كود البناء السعودي SBC 303 • SBC 304</span>
          </div>
        </div>
      </div>
    </section>
  );
}
