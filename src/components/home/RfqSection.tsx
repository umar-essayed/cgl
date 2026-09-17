'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { CGL_COMPANY_INFO } from '@/lib/data';

export default function RfqSection() {
  const whatsappMsg = encodeURIComponent(
    'السلام عليكم، أود الاستفسار وطلب تسعير فني لمشروع هندسي من مختبرات CGL.'
  );

  return (
    <section id="rfq" className="py-16 sm:py-24 bg-[#000000] border-b border-[#1f1f1f] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-16 border-y border-[#1f1f1f] py-12 sm:py-16">
          
          {/* Right: Technical Authority Callout */}
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 space-x-reverse text-xs font-mono text-[#8bc34a] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#8bc34a]" />
              <span>منظومة إعداد كراسات وعروض الأسعار الفنية</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
              جاهز لإطلاق التحريات الجيوتقنية لمشروعك؟
            </h2>
            
            <p className="text-stone-300 text-xs sm:text-sm lg:text-base font-sans leading-relaxed mb-6">
              بوابتنا المخصصة تتيح للمطورين والاستشاريين تحديد نطاق الحفر والاستكشاف المخبري بخطوات معيارية، ليتولى الفريق الهندسي إعداد العرض المطابق لاشتراطات كود البناء السعودي.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-400">
              <span className="flex items-center">
                <ShieldCheck className="w-4 h-4 text-[#8bc34a] ml-1.5 flex-shrink-0" />
                <span>معايير SBC 303 • SBC 304</span>
              </span>
              <span className="text-stone-700">•</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 text-[#8bc34a] ml-1.5 flex-shrink-0" />
                <span>دراسة المتطلبات خلال ساعات العمل</span>
              </span>
            </div>
          </div>

          {/* Left: Engineering Action Block */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:w-auto w-full flex-shrink-0">
            <Link
              href="/rfq"
              className="inline-flex items-center justify-center space-x-2 space-x-reverse px-8 py-4 rounded-xl bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:shadow-[#8bc34a]/20 active:scale-[0.99]"
            >
              <span>بدء تخصيص ونطاق التسعير الفني</span>
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>

            <a
              href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 space-x-reverse px-8 py-4 rounded-xl bg-[#111111] hover:bg-[#1a1a1a] border border-[#1f1f1f] hover:border-[#25D366]/40 text-stone-200 hover:text-white font-bold text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] ml-2" />
              <span>محادثة المهندس المناوب (WhatsApp)</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
