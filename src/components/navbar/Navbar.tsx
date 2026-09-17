'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  ArrowUpLeft,
  ArrowUpRight,
  MessageCircle,
} from 'lucide-react';
import { CGL_COMPANY_INFO } from '@/lib/data';
import { Locale, getDictionary } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  lang?: Locale;
}

export default function Navbar({ lang = 'ar' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.services, href: `/${lang}#services` },
    { label: dict.nav.projects, href: `/${lang}#projects` },
    { label: dict.nav.contact, href: `/${lang}#location` },
  ];

  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] md:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      <header className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        (isScrolled || mobileMenuOpen) 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl py-2.5 shadow-2xl border-b border-[#1f1f1f]' 
          : 'bg-transparent py-2.5 sm:py-3.5 border-b border-transparent'
      }`}>
        {/* Straight Green Accent Edge Line */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8bc34a] shadow-[0_1px_8px_rgba(139,195,74,0.45)] pointer-events-none" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href={`/${lang}`} 
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
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-stone-300 hover:text-[#8bc34a] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* WhatsApp Hotline */}
            <a
              href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white font-mono text-xs transition-colors border border-[#1f1f1f]"
              dir="ltr"
              title={dict.nav.whatsapp}
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>{CGL_COMPANY_INFO.phone1}</span>
            </a>

            {/* Language Switcher */}
            <LanguageSwitcher currentLang={lang} />

            {/* RFQ CTA Button */}
            <Link
              href={`/${lang}/rfq`}
              className="inline-flex items-center gap-1 px-4 py-2 bg-[#8bc34a] hover:bg-[#7cb342] text-black text-xs font-bold rounded-lg transition-all shadow-md shadow-[#8bc34a]/20 active:scale-95"
            >
              <span>{dict.nav.rfq}</span>
              <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Actions Bar */}
          <div className="sm:hidden flex items-center gap-1.5">
            <LanguageSwitcher currentLang={lang} />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white border border-[#1f1f1f] rounded-lg bg-[#111111]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-[#1f1f1f] px-5 py-5 space-y-4 shadow-2xl backdrop-blur-xl">
            <nav className="space-y-1 border-b border-[#1f1f1f] pb-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-medium text-stone-200 hover:text-[#8bc34a] py-2 px-2 rounded-lg hover:bg-white/5 transition-colors"
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
                <span className="text-[#25D366] font-sans font-medium flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  {dict.nav.whatsapp}
                </span>
              </a>
            </div>

            <Link
              href={`/${lang}/rfq`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-2.5 bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold rounded-lg text-xs shadow mt-2 transition-colors"
            >
              <span>{dict.nav.rfq}</span>
              <ArrowIcon className="w-4 h-4 mr-1" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
