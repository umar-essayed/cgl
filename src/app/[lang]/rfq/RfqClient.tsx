'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Layers, 
  Beaker, 
  ShieldCheck, 
  Crosshair, 
  Waves, 
  Mountain,
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { CGL_COMPANY_INFO } from '@/lib/data';
import { Locale, getDictionary } from '@/lib/i18n';

interface RfqClientProps {
  lang: Locale;
}

export default function RfqClient({ lang }: RfqClientProps) {
  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const services = [
    {
      id: 'geotech',
      title: isRtl ? 'فحص واستكشاف التربة والأساسات' : 'Geotechnical & Soil Investigation',
      desc: isRtl ? 'حفر الجسات الحقلية، اختبارات SPT، وتحديد قدرة تحمل التربة وتوصيات التأسيس.' : 'Deep borehole drilling, SPT tests, bearing capacity evaluation, and foundation design.',
      icon: Layers,
    },
    {
      id: 'materials',
      title: isRtl ? 'فحص وضبط جودة المواد والخرسانة' : 'Materials & Concrete Quality Control',
      desc: isRtl ? 'اختبارات كسر مكعبات الخرسانة، فحص الركام، واختبارات صلب التسليح.' : 'Concrete cube compressive strength, aggregate sieving, and rebar tensile testing.',
      icon: Beaker,
    },
    {
      id: 'ndt',
      title: isRtl ? 'تقييم سلامة المنشآت والفحوصات اللاإتلافية' : 'Structural Auditing & NDT Testing',
      desc: isRtl ? 'مسح الرادار الأرضي GPR، الموجات فوق الصوتية، وتقييم شروخ وتصدعات المباني.' : 'Ground penetrating radar (GPR), ultrasonic pulse velocity (UPV), and crack auditing.',
      icon: ShieldCheck,
    },
    {
      id: 'survey',
      title: isRtl ? 'المسح الطبوغرافي والرصد الجيوديسي' : 'Topographic & Geodetic Surveying',
      desc: isRtl ? 'الرفع المساحي الرقمي، أجهزة GNSS/Total Station، وتثبيت المحاور ورصد الهبوط.' : 'Digital topographic layout, GNSS/Total station reality capture, and deformation monitoring.',
      icon: Crosshair,
    },
    {
      id: 'shoring',
      title: isRtl ? 'هندسة سند الحفر ونزح المياه الجوفية' : 'Shoring & Dewatering Engineering',
      desc: isRtl ? 'تصميم وإشراف نظم سند الحفر العميق، دراسات خفض منسوب المياه وتصاميم الخوازيق.' : 'Deep excavation retention design, groundwater drawdown modeling, and secant pile analysis.',
      icon: Waves,
    },
    {
      id: 'mining',
      title: isRtl ? 'اختبارات التعدين والجيولوجيا والبيئة' : 'Mining & Geological Exploration',
      desc: isRtl ? 'اختبارات ضغط الصخور، تقييم المحاجر والمناجم، وتحليل ملوحة وتلوث التربة.' : 'Rock mechanics, quarry evaluation, core classification, and environmental salinity testing.',
      icon: Mountain,
    },
  ];

  const sectors = isRtl
    ? ['أبراج وناطحات سحاب', 'مباني سكنية وتجارية', 'مشاريع بنية تحتية وطرق', 'منشآت صناعية ومستودعات', 'محاجر ومشاريع تعدين', 'مشاريع حكومية واستراتيجية']
    : ['Towers & High-Rises', 'Residential & Commercial Buildings', 'Infrastructure & Highways', 'Industrial & Warehousing', 'Quarries & Mining Operations', 'Governmental & Strategic Projects'];

  const cities = isRtl
    ? ['جدة', 'الرياض', 'مكة المكرمة', 'المنطقة الشرقية / الدمام', 'نيوم / تبوك', 'مدينة أخرى']
    : ['Jeddah', 'Riyadh', 'Makkah', 'Eastern Province / Dammam', 'NEOM / Tabuk', 'Other City'];

  const sampleRanges = isRtl
    ? ['1 - 3 جسات', '4 - 8 جسات', 'أكثر من 8 جسات', 'غير محدد (يحتاج استشارة)']
    : ['1 - 3 Boreholes', '4 - 8 Boreholes', 'More than 8 Boreholes', 'Unspecified (Needs Consultation)'];

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [selectedSector, setSelectedSector] = useState(sectors[0]);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedSamples, setSelectedSamples] = useState(sampleRanges[0]);

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 800));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const activeServiceObj = services.find((s) => s.id === selectedService) || services[0];

  return (
    <div className="min-h-screen bg-[#000000] text-stone-100 flex flex-col font-sans">
      <Navbar lang={lang} />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#1f1f1f] text-xs font-sans text-[#3b76b3] mb-3 shadow-sm">
              <span className="w-2 h-2 bg-[#3b76b3] rounded-full animate-pulse" />
              <span>{dict.rfq.badge}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight mb-2">
              {dict.rfq.title}
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 font-sans">
              {dict.rfq.subtitle}
            </p>
          </div>

          {!isSuccess ? (
            <div className="bg-[#0a0a0a] rounded-2xl border border-[#1f1f1f] p-6 sm:p-10 shadow-xl">
              
              {/* 3-Step Progress Indicator */}
              <div className="relative mb-10">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#1f1f1f] -translate-y-1/2 z-0" />
                <div className="relative z-10 flex justify-between">
                  {[1, 2, 3].map((step) => {
                    const isPassed = currentStep > step;
                    const isCurrent = currentStep === step;
                    return (
                      <div key={step} className="flex flex-col items-center">
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-bold transition-all ${
                            isCurrent
                              ? 'bg-[#3b76b3] text-white ring-4 ring-[#3b76b3]/20 shadow-md'
                              : isPassed
                              ? 'bg-[#3b76b3]/20 text-[#3b76b3] border border-[#3b76b3]'
                              : 'bg-[#111111] text-stone-500 border border-[#222222]'
                          }`}
                        >
                          {isPassed ? <Check className="w-4 h-4" /> : `0${step}`}
                        </div>
                        <span className={`text-[10px] sm:text-xs font-sans mt-2 ${isCurrent ? 'text-white font-bold' : 'text-stone-400'}`}>
                          {step === 1 && (isRtl ? 'الخدمة' : 'Service')}
                          {step === 2 && (isRtl ? 'الموقع والنطاق' : 'Scope')}
                          {step === 3 && (isRtl ? 'بيانات التواصل' : 'Contact')}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 1 */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-white mb-3">
                      {isRtl ? '1. اختر نوع الفحص أو الخدمة الهندسية المطلوبة' : '1. Select Required Engineering Service'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((srv) => {
                        const isSelected = selectedService === srv.id;
                        const IconComponent = srv.icon;
                        return (
                          <div
                            key={srv.id}
                            onClick={() => setSelectedService(srv.id)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-[#3b76b3]/10 border-[#3b76b3] shadow-sm'
                                : 'bg-[#111111] border-[#1f1f1f] hover:border-stone-700'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#3b76b3] text-white' : 'bg-white/5 text-stone-400'}`}>
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <div className="min-w-0">
                                <h4 className={`text-sm font-bold leading-snug ${isSelected ? 'text-white' : 'text-stone-200'}`}>
                                  {srv.title}
                                </h4>
                                <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                                  {srv.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-3">
                      {isRtl ? '2. قطاع ونوع المشروع' : '2. Project Sector / Classification'}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {sectors.map((sec, sIdx) => {
                        const isSelected = selectedSector === sec;
                        return (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={() => setSelectedSector(sec)}
                            className={`p-3 rounded-lg text-xs font-medium border text-center transition-all ${
                              isSelected
                                ? 'bg-[#3b76b3]/15 border-[#3b76b3] text-[#3b76b3] font-bold'
                                : 'bg-[#111111] border-[#1f1f1f] text-stone-300 hover:bg-white/5'
                            }`}
                          >
                            {sec}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#3b76b3] hover:bg-[#2a5b8c] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <span>{isRtl ? 'التالي: الموقع والنطاق' : 'Next: Location & Scope'}</span>
                      <NextIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                      {isRtl ? '1. موقع المشروع الجغرافي / المدينة' : '1. Project Location / City'}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {cities.map((city, cIdx) => {
                        const isSelected = selectedCity === city;
                        return (
                          <button
                            key={cIdx}
                            type="button"
                            onClick={() => setSelectedCity(city)}
                            className={`p-3 rounded-lg text-xs font-medium border text-center transition-all ${
                              isSelected
                                ? 'bg-[#3b76b3]/15 border-[#3b76b3] text-[#3b76b3] font-bold'
                                : 'bg-[#111111] border-[#1f1f1f] text-stone-300 hover:bg-white/5'
                            }`}
                          >
                            {city}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-3">
                      {isRtl ? '2. حجم العمل التقديري أو عدد الجسات' : '2. Estimated Scope or Boreholes'}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {sampleRanges.map((range, rIdx) => {
                        const isSelected = selectedSamples === range;
                        return (
                          <button
                            key={rIdx}
                            type="button"
                            onClick={() => setSelectedSamples(range)}
                            className={`p-3 rounded-lg text-xs font-medium border text-center transition-all ${
                              isSelected
                                ? 'bg-[#3b76b3]/15 border-[#3b76b3] text-[#3b76b3] font-bold'
                                : 'bg-[#111111] border-[#1f1f1f] text-stone-300 hover:bg-white/5'
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-300 mb-2">
                      {dict.rfq.form.notes}
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder={dict.rfq.form.notesPlaceholder}
                      className="w-full p-3 rounded-xl bg-[#111111] border border-[#222222] text-white text-xs focus:outline-none focus:border-[#3b76b3]"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#111111] text-stone-300 font-medium text-xs border border-[#1f1f1f]"
                    >
                      <BackIcon className="w-4 h-4" />
                      <span>{isRtl ? 'السابق' : 'Back'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#3b76b3] hover:bg-[#2a5b8c] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                    >
                      <span>{isRtl ? 'التالي: بيانات التواصل' : 'Next: Contact Details'}</span>
                      <NextIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-stone-300 mb-1.5">
                        {dict.rfq.form.fullName} *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder={dict.rfq.form.fullNamePlaceholder}
                        className="w-full p-3 rounded-xl bg-[#111111] border border-[#222222] text-white text-xs focus:outline-none focus:border-[#3b76b3]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-stone-300 mb-1.5">
                        {dict.rfq.form.company}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={dict.rfq.form.companyPlaceholder}
                        className="w-full p-3 rounded-xl bg-[#111111] border border-[#222222] text-white text-xs focus:outline-none focus:border-[#3b76b3]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-stone-300 mb-1.5">
                        {dict.rfq.form.phone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={dict.rfq.form.phonePlaceholder}
                        className="w-full p-3 rounded-xl bg-[#111111] border border-[#222222] text-white text-xs focus:outline-none focus:border-[#3b76b3]"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-stone-300 mb-1.5">
                        {dict.rfq.form.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={dict.rfq.form.emailPlaceholder}
                        className="w-full p-3 rounded-xl bg-[#111111] border border-[#222222] text-white text-xs focus:outline-none focus:border-[#3b76b3]"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Order Summary Box */}
                  <div className="p-4 rounded-xl bg-[#111111] border border-[#1f1f1f] text-xs font-mono space-y-1 text-stone-400">
                    <div className="text-white font-bold mb-1">
                      {isRtl ? 'ملخص نطاق الطلب الهندسي:' : 'Engineering Scope Summary:'}
                    </div>
                    <div>• {isRtl ? 'الخدمة:' : 'Service:'} {activeServiceObj.title}</div>
                    <div>• {isRtl ? 'القطاع:' : 'Sector:'} {selectedSector}</div>
                    <div>• {isRtl ? 'المدينة:' : 'City:'} {selectedCity} ({selectedSamples})</div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#111111] text-stone-300 font-medium text-xs border border-[#1f1f1f]"
                    >
                      <BackIcon className="w-4 h-4" />
                      <span>{isRtl ? 'السابق' : 'Back'}</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#3b76b3] hover:bg-[#2a5b8c] text-white font-bold text-xs sm:text-sm shadow-md transition-all disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? dict.rfq.form.submitting : dict.rfq.form.submitBtn}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          ) : (
            <div className="bg-[#0a0a0a] rounded-2xl border border-[#1f1f1f] p-8 sm:p-12 text-center shadow-xl space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#3b76b3]/20 text-[#3b76b3] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">
                  {dict.rfq.form.successTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                  {dict.rfq.form.successDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}?text=${encodeURIComponent(
                    `مرحباً، أرسلت للتو طلب تسعير فني لمشروع (${activeServiceObj.title}) في ${selectedCity}. الاسم: ${formData.fullName}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs sm:text-sm shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isRtl ? 'متابعة سريعة عبر واتساب' : 'Quick Follow-up via WhatsApp'}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setCurrentStep(1);
                  }}
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-[#111111] text-stone-300 font-medium text-xs sm:text-sm border border-[#1f1f1f]"
                >
                  <span>{dict.rfq.form.newRequestBtn}</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
