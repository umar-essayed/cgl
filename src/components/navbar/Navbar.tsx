'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ArrowUpLeft, 
  MessageCircle,
  Phone
} from 'lucide-react';
import { CGL_COMPANY_INFO } from '@/lib/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'عن CGL', href: '/about' },
    { label: 'الخدمات الهندسية', href: '/#services' },
    { label: 'دراسات المشاريع', href: '/#projects' },
    { label: 'المقر والموقع', href: '/#location' },
  ];

  return (
    <>
      {/* Mobile Backdrop to prevent any interference with Hero */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9998] md:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        (isScrolled || mobileMenuOpen) 
          ? 'bg-[#0a0a0a] backdrop-blur-xl py-2.5 shadow-2xl border-b border-[#1f1f1f]' 
          : 'bg-transparent py-2.5 sm:py-3.5'
      }`}>
      {/* Sleek Straight Green Accent Edge Line (خط مستقيم رفيع باللون الأخضر الفسفوري) */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8bc34a] shadow-[0_1px_8px_rgba(139,195,74,0.45)] pointer-events-none" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo - Completely Clean, Free & Sized Proportional */}
        <Link 
          href="/" 
          className="flex items-center group py-0.5"
          aria-label="CGL - Creative Geotechnical Laboratories"
        >
          <Image 
            src="/assets/cgl-logo1.png" 
            alt="CGL Labs" 
            width={160} 
            height={48} 
            className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-200 group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 space-x-reverse">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-stone-300 hover:text-[#82B74B] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Quick Actions (Slim & Compact) */}
        <div className="hidden sm:flex items-center space-x-3 space-x-reverse">
          {/* Quick WhatsApp Line */}
          <a
            href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 space-x-reverse px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white font-mono text-xs transition-colors"
            dir="ltr"
            title="محادثة واتساب مباشرة"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] mr-1" />
            <span>{CGL_COMPANY_INFO.phone1}</span>
          </a>

          {/* Compact RFQ Button */}
          <Link
            href="/rfq"
            className="inline-flex items-center space-x-1 space-x-reverse px-4 py-2 bg-[#8bc34a] hover:bg-[#7cb342] text-black text-xs font-bold rounded-lg transition-all shadow-md shadow-[#8bc34a]/20 active:scale-95"
          >
            <span>طلب تسعير</span>
            <ArrowUpLeft className="w-3.5 h-3.5 mr-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2 space-x-reverse">
          <a
            href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#25D366]/15 text-[#25D366]"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white border border-[#1f1f1f] rounded-lg bg-[#111111]"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-b border-[#1f1f1f] px-5 py-5 space-y-3 shadow-2xl backdrop-blur-xl">
          <nav className="space-y-1 border-b border-[#1f1f1f] pb-3">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-stone-200 hover:text-[#8bc34a] py-2 px-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-1 space-y-2 text-xs font-mono">
            <a
              href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-[#111111] border border-[#1f1f1f] text-stone-200"
            >
              <span dir="ltr">{CGL_COMPANY_INFO.phone1}</span>
              <span className="text-[#25D366] font-sans flex items-center">
                <MessageCircle className="w-3.5 h-3.5 ml-1" />
                واتساب
              </span>
            </a>

            <a
              href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp2Raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg bg-[#111111] border border-[#1f1f1f] text-stone-200"
            >
              <span dir="ltr">{CGL_COMPANY_INFO.phone2}</span>
              <span className="text-[#25D366] font-sans flex items-center">
                <MessageCircle className="w-3.5 h-3.5 ml-1" />
                واتساب
              </span>
            </a>
          </div>

          <Link
            href="/rfq"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full py-2.5 bg-[#8bc34a] text-black font-bold rounded-lg text-xs shadow mt-2"
          >
            <span>طلب تسعير فني (RFQ)</span>
            <ArrowUpLeft className="w-4 h-4 mr-1" />
          </Link>
        </div>
      )}
    </header>
    </>
  );
}
