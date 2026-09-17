'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { CGL_COMPANY_INFO } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#000000] text-stone-300 font-sans border-t border-[#1f1f1f] pt-10 pb-8 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Clean Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 border-b border-[#1f1f1f] text-center md:text-right">
          
          {/* 1. Identity */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/assets/cgl-logo1.png"
                alt="CGL Labs"
                width={140}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-stone-400 text-xs leading-relaxed font-mono">
              CGL - Creative Geotechnical Laboratories • فرع معتمد لمجموعة CGI العالمية (السعودية والولايات المتحدة).
            </p>
          </div>

          {/* 2. Quick Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-stone-300 font-medium">
            <Link href="/" className="hover:text-[#8bc34a] transition-colors">الرئيسية</Link>
            <Link href="/about" className="hover:text-[#8bc34a] transition-colors">عن CGL</Link>
            <a href="#services" className="hover:text-[#8bc34a] transition-colors">الخدمات الهندسية</a>
            <a href="#projects" className="hover:text-[#8bc34a] transition-colors">المشاريع المنفذة</a>
            <Link href="/rfq" className="hover:text-[#8bc34a] transition-colors text-[#8bc34a] font-bold">طلب تسعير فني</Link>
          </div>

          {/* 3. Direct Contact */}
          <div className="flex flex-col items-center md:items-end space-y-2 text-stone-400 font-mono text-xs">
            <div className="flex items-center space-x-2 space-x-reverse" dir="ltr">
              <a
                href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#82B74B] transition-colors font-bold"
              >
                {CGL_COMPANY_INFO.phone1}
              </a>
              <span className="text-stone-700">|</span>
              <a
                href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp2Raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#82B74B] transition-colors font-bold"
              >
                {CGL_COMPANY_INFO.phone2}
              </a>
              <Phone className="w-3.5 h-3.5 text-[#82B74B] ml-1" />
            </div>

            <a
              href={`mailto:${CGL_COMPANY_INFO.email}`}
              className="inline-flex items-center space-x-2 space-x-reverse text-stone-300 hover:text-white transition-colors"
              dir="ltr"
            >
              <span>{CGL_COMPANY_INFO.email}</span>
              <Mail className="w-3.5 h-3.5 text-[#3B76B3] ml-1.5" />
            </a>

            <a
              href={CGL_COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 space-x-reverse text-stone-300 hover:text-[#82B74B] transition-colors font-sans text-xs"
            >
              <MapPin className="w-3.5 h-3.5 text-[#A94845] ml-1 flex-shrink-0" />
              <span>{CGL_COMPANY_INFO.addressEn} (جدة 23215، الرويس)</span>
            </a>
          </div>

        </div>

        {/* Accreditations Strip & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          {/* Subtle Accreditations Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-stone-400">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">كود البناء السعودي SBC 303 • SBC 304</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">ASTM International</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">American Concrete Institute (ACI)</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5">ISO/IEC 17025 Ready</span>
          </div>

          {/* Copyright & Up Button */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <span>© {currentYear} CGL Labs. جميع الحقوق محفوظة.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
              aria-label="للأعلى"
              title="للأعلى"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

