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
  Building,
  Building2,
  Construction,
  Factory,
  Landmark,
  Pickaxe,
  Home
} from 'lucide-react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { CGL_COMPANY_INFO } from '@/lib/data';

const services = [
  {
    id: 'geotech',
    title: 'فحص واستكشاف التربة والأساسات',
    desc: 'حفر الجسات الحقلية، اختبارات الاختراق القياسي SPT، وتحديد قدرة تحمل التربة والتوصيات.',
    icon: Layers,
  },
  {
    id: 'materials',
    title: 'فحص وضبط جودة المواد والخرسانة',
    desc: 'اختبارات كسر واختبار الخرسانة واختبارات الحصى والخلطات الأسمنتية المعتمدة.',
    icon: Beaker,
  },
  {
    id: 'ndt',
    title: 'تقييم سلامة المنشآت والفحوصات اللاإتلافية',
    desc: 'مسح شبكات حديد التسليح، الرادار الأرضي GPR، واختبار الألتراسونيك وتقييم التصدعات.',
    icon: ShieldCheck,
  },
  {
    id: 'survey',
    title: 'المسح الطبوغرافي والرصد الجيوديسي',
    desc: 'الرفع المساحي، أجهزة GPS/GNSS، تثبيت المحاور ورصد هبوط وميول المباني.',
    icon: Crosshair,
  },
  {
    id: 'shoring',
    title: 'هندسة سند الحفر ونزح المياه الجوفية',
    desc: 'تصميم وإشراف نظم سند الحفر العميق، دراسات خفض المياه وتصاميم الخوازيق.',
    icon: Waves,
  },
  {
    id: 'mining',
    title: 'اختبارات التعدين والجيولوجيا والبيئة',
    desc: 'اختبارات ضغط الصخور، تقييم المقالع والمناجم، وتحليل ملوحة وتلوث التربة.',
    icon: Mountain,
  },
];

const sectors = [
  { id: 'towers', label: 'أبراج وناطحات سحاب' },
  { id: 'residential', label: 'مباني سكنية وتجارية' },
  { id: 'infrastructure', label: 'مشاريع بنية تحتية وطرق' },
  { id: 'industrial', label: 'منشآت صناعية ومستودعات' },
  { id: 'mining_quarries', label: 'محافر ومشاريع تعدين' },
  { id: 'governmental', label: 'مشاريع حكومية واستراتيجية' },
];

const cities = [
  'جدة',
  'الرياض',
  'مكة المكرمة',
  'المنطقة الشرقية / الدمام',
  'نيوم / الشمال',
  'مدينة أخرى',
];

const sampleRanges = [
  '1 - 3 جسات',
  '4 - 8 جسات',
  'أكثر من 8 جسات',
  'غير محدد (يحتاج استشارة)',
];

export default function RfqPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [selectedSector, setSelectedSector] = useState(sectors[0].label);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedSamples, setSelectedSamples] = useState(sampleRanges[0]);

  // Form Contact Fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Submit states
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const currentServiceObj = services.find((s) => s.id === selectedService) || services[0];

  const handleNext = (targetStep: number) => {
    setErrorMessage('');
    setCurrentStep(targetStep);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setErrorMessage('يرجى كتابة اسم المسؤول ورقم الجوال للمتابعة.');
      return;
    }

    const generatedRef = `CGL-RFQ-${Math.floor(10000 + Math.random() * 90000)}`;
    setRefId(generatedRef);
    setSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `السلام عليكم ورحمة الله، أود تقديم طلب تسعير رسمي لمشروع.\n\n` +
    `📌 الرقم المرجعي: ${refId || 'CGL-RFQ'}\n` +
    `🔬 نوع الخدمة: ${currentServiceObj.title}\n` +
    `🏗 قطاع المنشأة: ${selectedSector}\n` +
    `📍 المدينة: ${selectedCity}\n` +
    `📊 حجم العمل: ${selectedSamples}\n\n` +
    `👤 المسؤول: ${fullName}\n` +
    `📱 رقم التواصل: ${phone}\n` +
    `${company ? `🏢 الشركة / الاستشاري: ${company}\n` : ''}` +
    `${email ? `✉️ البريد: ${email}\n` : ''}` +
    `${notes ? `📝 ملاحظات خاصة: ${notes}\n` : ''}`
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white selection:bg-[#8bc34a] selection:text-[#000000]">
      <Navbar />

      <main className="flex-grow pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 flex justify-center items-center">
        <div className="w-full max-w-[960px] bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl p-5 sm:p-10 shadow-2xl transition-all">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-9">
            <h1 className="text-xl sm:text-3xl font-bold text-white mb-2 leading-tight">
              منظومة تقديم عروض الأسعار والدراسات الفنية
            </h1>
            <p className="text-xs sm:text-sm text-[#888888] max-w-xl mx-auto">
              اختر الخدمة الهندسية وحدد نطاق مشروعك عبر 3 خطوات مبسطة لتصلك دراسة تسعيرية متكاملة
            </p>
          </div>

          {!submitted ? (
            <>
              {/* Stepper */}
              <div className="relative flex justify-between items-center max-w-[500px] mx-auto mb-8 sm:mb-10 px-2">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#1f1f1f] -translate-y-1/2 z-0" />

                {/* Step 1 */}
                <div className="relative z-10 bg-[#0a0a0a] px-2.5 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      currentStep === 1 || currentStep > 1
                        ? 'bg-[#8bc34a] border border-[#8bc34a] text-black shadow-[0_0_10px_rgba(139,195,74,0.3)]'
                        : 'bg-[#111111] border border-[#1f1f1f] text-[#888888]'
                    }`}
                  >
                    1
                  </div>
                  <span
                    className={`text-xs ${
                      currentStep === 1 ? 'text-[#8bc34a] font-bold' : 'text-[#888888]'
                    }`}
                  >
                    نوع الخدمة
                  </span>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 bg-[#0a0a0a] px-2.5 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      currentStep >= 2
                        ? 'bg-[#8bc34a] border border-[#8bc34a] text-black shadow-[0_0_10px_rgba(139,195,74,0.3)]'
                        : 'bg-[#111111] border border-[#1f1f1f] text-[#888888]'
                    }`}
                  >
                    2
                  </div>
                  <span
                    className={`text-xs ${
                      currentStep === 2 ? 'text-[#8bc34a] font-bold' : 'text-[#888888]'
                    }`}
                  >
                    نطاق المشروع
                  </span>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 bg-[#0a0a0a] px-2.5 flex flex-col items-center gap-1.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      currentStep === 3
                        ? 'bg-[#8bc34a] border border-[#8bc34a] text-black shadow-[0_0_10px_rgba(139,195,74,0.3)]'
                        : 'bg-[#111111] border border-[#1f1f1f] text-[#888888]'
                    }`}
                  >
                    3
                  </div>
                  <span
                    className={`text-xs ${
                      currentStep === 3 ? 'text-[#8bc34a] font-bold' : 'text-[#888888]'
                    }`}
                  >
                    بيانات التواصل
                  </span>
                </div>
              </div>

              {/* Step 1: Choose Service */}
              {currentStep === 1 && (
                <div className="animate-fadeIn">
                  <div className="text-base sm:text-lg font-bold text-white pb-3 mb-6 border-b border-[#1f1f1f]">
                    اختر المجال أو الخدمة الهندسية الأساسية
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {services.map((svc) => {
                      const isSelected = selectedService === svc.id;
                      const Icon = svc.icon;

                      return (
                        <div
                          key={svc.id}
                          onClick={() => setSelectedService(svc.id)}
                          className={`relative p-5 rounded-lg border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#8bc34a]/[0.03] border-[#8bc34a]'
                              : 'bg-[#111111] border-[#1f1f1f] hover:border-[#333333] hover:bg-[#121212]'
                          }`}
                        >
                          {/* Check mark top left */}
                          <div
                            className={`absolute top-3.5 left-3.5 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] transition-all ${
                              isSelected
                                ? 'bg-[#8bc34a] border-[#8bc34a] text-black'
                                : 'border-[#1f1f1f] text-transparent'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>

                          {/* Icon */}
                          <div className="text-[#8bc34a] mb-3">
                            <Icon className="w-5 h-5" />
                          </div>

                          {/* Title */}
                          <h3 className="text-[15px] font-bold text-white mb-1.5">
                            {svc.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-[#888888] leading-relaxed">
                            {svc.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Actions Row */}
                  <div className="flex justify-end items-center pt-5 border-t border-[#1f1f1f]">
                    <button
                      type="button"
                      onClick={() => handleNext(2)}
                      className="px-6 sm:px-7 py-3 rounded-md bg-[#8bc34a] hover:bg-[#7cb342] text-black text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors active:scale-95"
                    >
                      <span>المتابعة إلى نطاق وموقع المشروع</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Project Scope */}
              {currentStep === 2 && (
                <div className="animate-fadeIn">
                  <div className="text-base sm:text-lg font-bold text-white pb-3 mb-6 border-b border-[#1f1f1f]">
                    طبيعة المشروع وموقع التنفيذ
                  </div>

                  <div className="space-y-6 mb-8">
                    {/* Facility Sector Toggles */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-white mb-2.5">
                        قطاع ونوع المنشأة
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                        {sectors.map((s) => {
                          const isSelected = selectedSector === s.label;
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => setSelectedSector(s.label)}
                              className={`p-3 rounded-md text-xs sm:text-[13px] text-center border transition-all ${
                                isSelected
                                  ? 'border-[#8bc34a] text-[#8bc34a] bg-[#8bc34a]/[0.05] font-bold'
                                  : 'bg-[#111111] border-[#1f1f1f] text-[#888888] hover:border-[#333333] hover:text-white'
                              }`}
                            >
                              {s.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* City & Sample Count Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* City Select */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-xs sm:text-sm font-medium text-white">
                          المدينة أو المنطقة بالمملكة
                        </label>
                        <select
                          id="city"
                          value={selectedCity}
                          onChange={(e) => setSelectedCity(e.target.value)}
                          className="bg-[#111111] border border-[#1f1f1f] focus:border-[#8bc34a] rounded-md px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors"
                        >
                          {cities.map((city) => (
                            <option key={city} value={city} className="bg-[#111111] text-white">
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Samples Select */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="samples" className="text-xs sm:text-sm font-medium text-white">
                          عدد الجسات / العينات التقديري
                        </label>
                        <select
                          id="samples"
                          value={selectedSamples}
                          onChange={(e) => setSelectedSamples(e.target.value)}
                          className="bg-[#111111] border border-[#1f1f1f] focus:border-[#8bc34a] rounded-md px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors"
                        >
                          {sampleRanges.map((range) => (
                            <option key={range} value={range} className="bg-[#111111] text-white">
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex justify-between items-center pt-5 border-t border-[#1f1f1f]">
                    <button
                      type="button"
                      onClick={() => handleNext(1)}
                      className="px-5 sm:px-6 py-3 rounded-md bg-transparent border border-[#1f1f1f] hover:bg-[#111111] text-[#888888] hover:text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors active:scale-95"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>رجوع</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleNext(3)}
                      className="px-6 sm:px-7 py-3 rounded-md bg-[#8bc34a] hover:bg-[#7cb342] text-black text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors active:scale-95"
                    >
                      <span>المتابعة إلى بيانات الاتصال</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmit} className="animate-fadeIn">
                  <div className="text-base sm:text-lg font-bold text-white pb-3 mb-6 border-b border-[#1f1f1f]">
                    بيانات التواصل وإصدار عرض السعر
                  </div>

                  {errorMessage && (
                    <div className="p-3 mb-5 rounded-md bg-red-950/70 border border-red-800 text-red-200 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="fullname" className="text-xs sm:text-sm font-medium text-white">
                        اسم المسؤول أو المهندس *
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="مثال: م. سلطان الغامدي"
                        className="bg-[#111111] border border-[#1f1f1f] focus:border-[#8bc34a] rounded-md px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-white">
                        رقم الجوال أو الواتساب *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="05X XXX XXXX"
                        dir="ltr"
                        className="bg-[#111111] border border-[#1f1f1f] focus:border-[#8bc34a] rounded-md px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors text-right"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-xs sm:text-sm font-medium text-white">
                        اسم الشركة / المطور / الاستشاري
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="مثال: شركة التطوير العقاري"
                        className="bg-[#111111] border border-[#1f1f1f] focus:border-[#8bc34a] rounded-md px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs sm:text-sm font-medium text-white">
                        البريد الإلكتروني (اختياري)
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="engineer@company.com"
                        className="bg-[#111111] border border-[#1f1f1f] focus:border-[#8bc34a] rounded-md px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Notes */}
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label htmlFor="notes" className="text-xs sm:text-sm font-medium text-white">
                        ملاحظات إضافية أو اشتراطات خاصة للتسعير
                      </label>
                      <textarea
                        id="notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="أدخل أي متطلبات خاصة بموعد التنفيذ أو كراسة الشروط..."
                        className="bg-[#111111] border border-[#1f1f1f] focus:border-[#8bc34a] rounded-md px-4 py-3 text-white text-xs sm:text-sm outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex justify-between items-center pt-5 border-t border-[#1f1f1f]">
                    <button
                      type="button"
                      onClick={() => handleNext(2)}
                      className="px-5 sm:px-6 py-3 rounded-md bg-transparent border border-[#1f1f1f] hover:bg-[#111111] text-[#888888] hover:text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors active:scale-95"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>رجوع</span>
                    </button>

                    <button
                      type="submit"
                      className="px-6 sm:px-7 py-3 rounded-md bg-[#8bc34a] hover:bg-[#7cb342] text-black text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors active:scale-95 shadow-md shadow-[#8bc34a]/20"
                    >
                      <Send className="w-4 h-4 ml-1" />
                      <span>إرسال طلب التسعير الرسمي المعتمد</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Clean Animated Success Screen */
            <div className="flex flex-col items-center justify-center py-10 sm:py-16 text-center">
              
              {/* Animated Checkmark Icon */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6 animate-pop-scale">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-[#8bc34a]/20 blur-xl" />

                <svg
                  className="w-full h-full relative z-10"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    stroke="#8bc34a"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="animate-stroke-circle"
                  />
                  <path
                    d="M30 52 L44 66 L70 36"
                    stroke="#8bc34a"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-stroke-check"
                  />
                </svg>
              </div>

              {/* Title & Reference */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                تم الإرسال
              </h2>
              <p className="text-xs sm:text-sm text-[#888888] font-mono mb-8">
                الرقم المرجعي: {refId}
              </p>

              {/* Harmonious Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mx-auto">
                <a
                  href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 h-12 inline-flex items-center justify-center px-5 rounded-lg bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-[#8bc34a]/20 active:scale-[0.98] gap-2.5"
                >
                  <MessageCircle className="w-4 h-4 text-black flex-shrink-0" />
                  <span>تواصل واتساب مع المهندس</span>
                </a>

                <Link
                  href="/"
                  className="w-full sm:flex-1 h-12 inline-flex items-center justify-center px-5 rounded-lg bg-[#141414] hover:bg-[#1c1c1c] border border-[#2a2a2a] hover:border-[#3a3a3a] text-stone-200 hover:text-white font-bold text-sm transition-all active:scale-[0.98] gap-2.5"
                >
                  <Home className="w-4 h-4 text-stone-400 flex-shrink-0" />
                  <span>العودة للرئيسية</span>
                </Link>
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
