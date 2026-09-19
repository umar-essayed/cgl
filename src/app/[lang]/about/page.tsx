import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { 
  CGL_COMPANY_INFO, 
  CGL_PROFILE_PARTNERS_GRID 
} from '@/lib/data';
import { getDynamicSiteData } from '@/lib/dynamicData';
import { Locale, isValidLocale, getDictionary } from '@/lib/i18n';
import { 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  Globe, 
  Sparkles,
  Layers,
  Activity,
  Waves,
  Building,
  Check,
  Phone,
  FileDown
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isRtl = lang === 'ar';

  if (isRtl) {
    return {
      title: 'عن CGL | مسيرة الريادة الجيوتقنية والاعتماد الدولي',
      description: 'تعرف على مختبرات CGL، الامتياز المعتمد لمجموعة CGI العالمية، ورسالتنا الهندسية، معايير كود البناء السعودي، وشركاء نجاحنا.',
    };
  }

  return {
    title: 'About CGL | Geotechnical Heritage & Global Accreditation',
    description: 'Discover CGL Laboratories, an authorized franchise of CGI Group, our technical capabilities, Saudi Building Code compliance, and strategic partners.',
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const siteData = await getDynamicSiteData();
  const info = siteData.settings || CGL_COMPANY_INFO;
  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const capabilities = [
    {
      num: '01',
      icon: Layers,
      titleAr: 'استكشاف باطن الأرض والهندسة الجيوتقنية',
      titleEn: 'Subsurface Exploration & Geotechnical Engineering',
      descAr: 'حفر الجسات الآلية المستمرة لأعماق تصل إلى 80 متراً، استخراج العينات الصخرية والترابية (SPT & Shelby Tubes)، دراسات استقرار المنحدرات وهبوط المنشآت وتوصيات التأسيس وفق SBC 303.',
      descEn: 'Continuous rotary borehole drilling to 80m depths, undisturbed soil/rock sampling, slope stability analysis, and deep foundation engineering strictly compliant with SBC 303.',
      standards: 'SBC 303 • ASTM D1586 • ASTM D4220'
    },
    {
      num: '02',
      icon: Activity,
      titleAr: 'تقييم السلامة الإنشائية والفحوصات غير الإتلافية (NDT)',
      titleEn: 'Structural Integrity & Non-Destructive Testing',
      descAr: 'تشخيص الهياكل الخرسانية القائمة بالأمواج فوق الصوتية، المسح الراداري (GPR) للكشف عن حديد التسليح والفجوات، واختبارات التحميل الساكن والديناميكي للجسور والأسقف.',
      descEn: 'High-precision concrete diagnostic scanning via Ultrasonic Pulse Velocity, GPR rebar mapping, cavity detection, and static/dynamic load testing on critical structures.',
      standards: 'ACI 228.1R • ASTM C805 • BS 1881'
    },
    {
      num: '03',
      icon: Building,
      titleAr: 'أنظمة سند جوانب الحفر وتخفيض المياه الجوفية',
      titleEn: 'Shoring Systems & Groundwater Dewatering',
      descAr: 'تصميم جدران الخوازيق المتداخلة (Secant) والستائر اللوحية وجدران برلين ومسامير التربة باستخدام نمذجة DC PIT، بجانب شبكات الآبار العميقة والنزح السطحي.',
      descEn: 'Design and execution of secant pile walls, soldier beams, soil nailing, and tie-back anchors modeled with DC PIT, integrated with deep well dewatering networks.',
      standards: 'DIN 1054 • BS 8002 • SIA 267'
    },
    {
      num: '04',
      icon: Waves,
      titleAr: 'الجيوفيزياء المتقدمة وهندسة الهيدرولوجيا',
      titleEn: 'Advanced Geophysics & Hydrological Engineering',
      descAr: 'المسوحات الزلزالية الانكسارية (MASW) وكشف الكهوف برادار OKM GeoSeeker ثلاثي الأبعاد، ودراسات مخرات السيول وأنظمة مآخذ مياه البحر للمحطات والمنتجعات.',
      descEn: 'Multi-channel surface wave analysis (MASW), OKM GeoSeeker 3D subterranean resistivity scanning, watershed hydrological modeling, and seawater intake/outfall systems.',
      standards: 'ASTM D5777 • ERT / GPR Protocol'
    }
  ];

  const milestones = [
    {
      year: '2000',
      titleAr: 'الانطلاقة والامتياز الدولي',
      titleEn: 'Global Inception & CGI Franchise',
      textAr: 'تأسيس المعامل بنظام الامتياز الرسمي من CGI العالمية، ونقل أحدث بروتوكولات الفحص والتقييم من كاليفورنيا إلى المملكة.',
      textEn: 'Establishment under official CGI global franchise, transferring cutting-edge geotechnical assessment protocols from California to Saudi Arabia.'
    },
    {
      year: '2012',
      titleAr: 'توسيع البنية المخبرية والميدانية',
      titleEn: 'Laboratory & Field Expansion',
      textAr: 'افتتاح المختبرات المركزية المجهزة بماكينات الفحص الآلية المعتمدة لمواد البناء واستقدام أحدث أجهزة السيزموجراف والرادار.',
      textEn: 'Commissioning of advanced central laboratories with automated materials testing frames, deep seismographs, and ground penetrating radars.'
    },
    {
      year: '2019',
      titleAr: 'الاعتماد الكامل لكود البناء السعودي',
      titleEn: 'Full SBC Code Alignment',
      textAr: 'تطوير كافة آليات العمل لتطابق متطلبات كود البناء السعودي الإلزامي للمباني السكنية والتجارية والبنية التحتية.',
      textEn: 'Full structural adaptation and operational certification adhering to mandatory Saudi Building Code (SBC) standards across all sectors.'
    },
    {
      year: '2026',
      titleAr: 'الريادة الرقمية والمسح ثلاثي الأبعاد',
      titleEn: '3D Subsurface Innovation',
      textAr: 'دمج تقنيات الذكاء الجيوتقني والتمثيل ثلاثي الأبعاد للتكهفات والمياه الجوفية لخدمة كبرى مشاريع الرؤية في المملكة.',
      textEn: 'Pioneering AI-driven geotechnical modeling, 3D cavity mapping, and hydrogeological diagnostics for Saudi Vision mega-projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-stone-100 flex flex-col font-sans selection:bg-[#3b76b3] selection:text-white">
      <Navbar lang={lang} />

      {/* 1. Architectural Narrative Hero */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden min-h-[550px] sm:min-h-[640px] flex flex-col justify-between">
        {/* Background Image with Engineering Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/sliders/slider1.jpg"
            alt="CGL Geotechnical Site Operations"
            fill
            priority
            className="object-cover object-center filter contrast-110 brightness-[0.28] scale-105"
          />
          {/* Dual Vignette & Depth Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/85 to-[#030303]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#030303]/40 to-[#030303]/90" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3b76b3]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Top Metadata Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Link
                href={`/${lang}`}
                className="inline-flex items-center text-xs font-mono text-stone-400 hover:text-[#3b76b3] transition-colors gap-1.5"
              >
                <BackIcon className="w-3.5 h-3.5 text-[#3b76b3]" />
                <span>{dict.aboutPage.breadcrumbHome}</span>
              </Link>
              <span className="text-stone-600">/</span>
              <span className="text-xs font-mono text-stone-300">
                {isRtl ? 'ملف الشركة' : 'Company Profile'}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 text-stone-300">
                <Globe className="w-3.5 h-3.5 text-[#3b76b3]" />
                <span>USA • KSA</span>
              </span>
              <span className="text-stone-700">•</span>
              <span className="text-stone-400">
                {isRtl ? 'امتياز رسمي لـ CGI' : 'Official CGI Franchise'}
              </span>
            </div>
          </div>

          {/* Bold Editorial Headline */}
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#3b76b3]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isRtl ? 'المعامل الإبداعية للجيوتقنية CGL' : 'Creative Geotechnical Laboratories'}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.08]">
              {isRtl ? (
                <>
                  نبني الأمان من أعماق الأرض، <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-[#3b76b3]">
                    بدقة هندسية لا تقبل المساومة.
                  </span>
                </>
              ) : (
                <>
                  Engineering safety from the ground up, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-[#3b76b3]">
                    with uncompromised precision.
                  </span>
                </>
              )}
            </h1>

            <p className="text-lg sm:text-xl text-stone-300 font-sans leading-relaxed max-w-3xl font-light">
              {isRtl 
                ? 'تأسست CGL كامتياز فخور لمجموعة CGI بالولايات المتحدة الأمريكية، لتنقل أرقى بروتوكولات الفحص المخبري والاستكشاف الجيوتقني إلى مشاريع المملكة، موفرة أساسات صلبة ودراسات معتمدة تضمن ديمومة وسلامة المنشآت.'
                : 'Creative Geotechnical Laboratories (CGL) is a proud franchise of CGI, bringing trusted global standards to infrastructure in Saudi Arabia through rigorous subsurface investigations and materials testing.'}
            </p>
          </div>

        </div>
      </section>

      {/* 2. Editorial Narrative & Real Metrics (No rigid boxes) */}
      <section className="py-16 sm:py-24 border-t border-white/10 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Story Paragraphs */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#3b76b3] uppercase tracking-wider font-semibold">
                  {isRtl ? 'الهوية والرسالة الهندسية' : 'Our Engineering Identity'}
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
                  {isRtl ? 'حيث يلتقي عمق الخبرة العالمية بمتطلبات البيئة المحلية' : 'Where Global Precision Meets Local Ground Conditions'}
                </h2>
              </div>

              <div className="space-y-6 text-stone-300 font-sans leading-relaxed text-base sm:text-lg font-light">
                <p>
                  {isRtl 
                    ? 'في كل مشروع تشييد، تبدأ المعادلة من النقطة الأكثر حساسية: باطن الأرض. تعمل مختبرات CGL كذراع استشاري وتقني مستقل يزود المطورين والمقاولين بالحقائق الميدانية القاطعة عبر أسطول من الحفارات الهيدروليكية ومختبرات الفحص الكيميائي والميكانيكي.'
                    : 'On every construction site, success begins at the most critical juncture: the ground. CGL operates as an independent technical authority, providing developers and contractors with definitive subsurface intelligence through heavy drilling rigs and advanced materials testing.'}
                </p>

                <p>
                  {isRtl 
                    ? 'نمتلك مقرات رئيسية في كاليفورنيا بالولايات المتحدة والمملكة العربية السعودية (جدة، الرياض، والمنطقة الشرقية)، مما يمنحنا مرونة استثنائية لتوظيف أحدث الابتكارات الجيوفيزيائية مثل التصوير المقطعي ثلاثي الأبعاد وتقنيات NDT غير الإتلافية لدعم المشاريع الكبرى بما يتطابق بالكامل مع كود البناء السعودي (SBC).'
                    : 'With headquarters in California and key hubs across Saudi Arabia (Jeddah, Riyadh, Eastern Province), we seamlessly merge international engineering breakthroughs with local compliance, ensuring full adherence to Saudi Building Code mandates.'}
                </p>
              </div>

              {/* Styled Quote */}
              <div className={`p-6 rounded-2xl bg-white/[0.02] border ${isRtl ? 'border-r-4 border-r-[#3b76b3]' : 'border-l-4 border-l-[#3b76b3]'} border-white/10 space-y-2`}>
                <p className="text-base sm:text-lg font-display italic text-white leading-snug">
                  "{isRtl ? CGL_COMPANY_INFO.missionAr : CGL_COMPANY_INFO.missionEn}"
                </p>
                <span className="text-xs font-mono text-stone-400 block">
                  — {isRtl ? 'ميثاق الجودة في مختبرات CGL' : 'CGL Quality Charter'}
                </span>
              </div>
            </div>

            {/* Typographic Numbers Strip (Vertical Flow, No repetitive cards) */}
            <div className="lg:col-span-5 lg:ps-8 lg:border-s lg:border-white/10 space-y-10">
              <div className="space-y-2">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  {isRtl ? 'أثرنا في الميدان بالأرقام' : 'Our Measured Impact'}
                </span>
                <h3 className="text-xl font-display font-semibold text-white">
                  {isRtl ? 'سجل موثق من الإنجازات' : 'Documented Track Record'}
                </h3>
              </div>

              <div className="space-y-8 divide-y divide-white/10">
                <div className="pt-2">
                  <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                    650<span className="text-[#3b76b3]">+</span>
                  </div>
                  <div className="text-sm font-semibold text-stone-200 mt-1">
                    {isRtl ? 'عميل ومشروع منجز بالمملكة' : 'Delivered Projects & Clients'}
                  </div>
                  <p className="text-xs text-stone-400 mt-1 font-light">
                    {isRtl ? 'يشمل مشاريع الأبراج والقصور ومصانع التحلية ومجمعات الإسكان.' : 'Encompassing commercial towers, palaces, RO plants, and master-planned communities.'}
                  </p>
                </div>

                <div className="pt-6">
                  <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                    300<span className="text-[#3b76b3]">+</span>
                  </div>
                  <div className="text-sm font-semibold text-stone-200 mt-1">
                    {isRtl ? 'دراسة جيوتقنية وهيدرولوجية تخصصية' : 'Advanced Engineering Studies'}
                  </div>
                  <p className="text-xs text-stone-400 mt-1 font-light">
                    {isRtl ? 'حلول معتمدة لسند الحفر العميق والنزح الجوفي واستكشاف التكهفات.' : 'Certified deep shoring designs, dewatering networks, and cavity detection models.'}
                  </p>
                </div>

                <div className="pt-6">
                  <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                    30<span className="text-[#3b76b3]">+</span>
                  </div>
                  <div className="text-sm font-semibold text-stone-200 mt-1">
                    {isRtl ? 'عاماً من الخبرة الجيوتقنية المركزة' : 'Years of Field Mastery'}
                  </div>
                  <p className="text-xs text-stone-400 mt-1 font-light">
                    {isRtl ? 'تاريخ ممتد في التعامل مع أكثر تضاريس وتربات المنطقة تعقيداً.' : 'Continuous practice across Saudi complex coastal and geological terrains.'}
                  </p>
                </div>

                <div className="pt-6">
                  <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight flex items-baseline gap-2">
                    <span>2</span>
                    <span className="text-lg font-mono text-[#3b76b3] font-normal">HQs (USA • KSA)</span>
                  </div>
                  <div className="text-sm font-semibold text-stone-200 mt-1">
                    {isRtl ? 'حضور استراتيجي عابر للقارات' : 'Intercontinental Footprint'}
                  </div>
                  <p className="text-xs text-stone-400 mt-1 font-light">
                    {isRtl ? 'المقر الرئيسي بكاليفورنيا والمقر الإقليمي بجدة وفروع التغطية بالمملكة.' : 'California Headquarters and regional operation hubs across Saudi Arabia.'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Full-Bleed Architectural Image Showcase */}
      <section className="relative w-full h-[400px] sm:h-[520px] overflow-hidden">
        <Image
          src="/uploads/projects_images/project_688d08b6e73ee4.36242119.jpg"
          alt="CGL Drilling and Field Testing Rig"
          fill
          className="object-cover object-center filter contrast-110 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-black/40 to-black/60" />
        
        <div className="absolute bottom-8 sm:bottom-12 inset-x-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl p-6 sm:p-8 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/15 text-white">
            <div className="text-[11px] font-mono text-[#3b76b3] font-bold mb-1">
              FIELD CAPABILITIES • أسطول العمليات الميدانية
            </div>
            <div className="text-lg sm:text-xl font-display font-bold mb-2">
              {isRtl ? 'تجهيزات ميدانية مصممة لأقسى الظروف الجيولوجية' : 'Purpose-Built Rigs for Challenging Geological Terrains'}
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              {isRtl 
                ? 'حفارات آلية هيدروليكية، ماكينات ضغط وكسر معملية، ورادارات مسح أرضي متطورة تديرها كوادر هندسية مرخصة من الهيئة السعودية للمهندسين.'
                : 'Advanced hydraulic rotary drill rigs, automated compressive testing presses, and 3D radar systems operated by licensed geotechnical engineers.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Engineering Specializations (Editorial 2x2 with clear hierarchy, no repetitive cards) */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-mono text-[#3b76b3] uppercase tracking-wider font-semibold">
              CORE DISCIPLINES • التخصصات الهندسية المحورية
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {isRtl ? 'منظومة حلول جيوتقنية متكاملة' : 'Integrated Geotechnical & Testing Capabilities'}
            </h2>
            <p className="text-base text-stone-400 font-light">
              {isRtl 
                ? 'تغطي خدماتنا دورة حياة المشروع الإنشائي بالكامل من الاستكشاف المبدئي وحتى الفحص النهائي لسلامة الهيكل.'
                : 'Covering the full project lifecycle from preliminary subsurface exploration to structural health auditing.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.num} className="group flex flex-col justify-between space-y-6 pb-8 border-b border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl sm:text-4xl font-mono font-bold text-stone-700 group-hover:text-[#3b76b3] transition-colors">
                        {cap.num}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#3b76b3]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-stone-100 transition-colors">
                      {isRtl ? cap.titleAr : cap.titleEn}
                    </h3>

                    <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                      {isRtl ? cap.descAr : cap.descEn}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-stone-500">
                    <span>{cap.standards}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b76b3]/50" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Verified Success Partners (Real logos from CGL Profile) */}
      <section className="py-20 sm:py-28 bg-[#060606] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#3b76b3] uppercase tracking-wider font-semibold">
                TRUSTED BY INDUSTRY LEADERS • شركاء النجاح
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                {isRtl ? 'الشركاء والعملاء المعتمدون في سجل CGL' : 'Verified Strategic Partners & Clients'}
              </h2>
            </div>
            <p className="text-sm text-stone-400 font-light max-w-md">
              {isRtl 
                ? 'لوجوهات وشركاء حقيقيون من واقع بروفايل الشركة الرسمي، يمثلون كبرى مشاريع البنية التحتية والإنشاءات.'
                : 'Official partner logos extracted directly from the verified CGL corporate profile.'}
            </p>
          </div>

          {/* Clean Partner Logo Gallery with Crisp Presentation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {CGL_PROFILE_PARTNERS_GRID.map((partner) => (
              <div 
                key={partner.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#0a0a0a] hover:bg-[#121212] border border-white/[0.08] hover:border-[#3b76b3]/40 transition-all flex flex-col items-center justify-between min-h-[140px] group shadow-sm"
              >
                <div className="relative w-full h-14 flex items-center justify-center my-auto">
                  <Image
                    src={partner.logo}
                    alt={partner.nameEn}
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                  />
                </div>
                <div className="text-center w-full pt-2 border-t border-white/5 mt-2">
                  <span className="text-[11px] font-bold text-stone-200 block truncate">
                    {isRtl ? partner.nameAr : partner.nameEn}
                  </span>
                  <span className="text-[10px] text-stone-500 block truncate">
                    {isRtl ? partner.roleAr : partner.roleEn}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Chronological Growth & Roadmap (Minimalist timeline, no nested cards) */}
      <section className="py-20 sm:py-28 bg-[#030303] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-mono text-[#3b76b3] uppercase tracking-wider font-semibold">
              TRAJECTORY & GROWTH • مسيرة التطور
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {isRtl ? 'محطات شكلت ريادتنا في فحص التربة' : 'Milestones Shaping Our Technical Leadership'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative space-y-3 pt-6 border-t-2 border-stone-800 hover:border-[#3b76b3] transition-colors group">
                <div className="text-3xl sm:text-4xl font-mono font-bold text-white group-hover:text-[#3b76b3] transition-colors">
                  {m.year}
                </div>
                <h3 className="text-lg font-display font-bold text-stone-100">
                  {isRtl ? m.titleAr : m.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  {isRtl ? m.textAr : m.textEn}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Institutional Accreditations Trust Bar (Clean horizontal strip) */}
      <section className="py-12 bg-[#080808] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-stone-400">
            <div className="flex items-center gap-2 text-stone-200">
              <ShieldCheck className="w-4 h-4 text-[#3b76b3]" />
              <span className="font-bold">{isRtl ? 'الاعتمادات والمعايير المطبقة:' : 'Governing Standards & Accreditations:'}</span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-stone-300">
              <span className="hover:text-white transition-colors">Saudi Building Code (SBC 303/304/305)</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">ASTM International Standards</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">AASHTO Highway Standards</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">DIN 1054 / BS 8002 Shoring</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Saudi Council of Engineers (SCE)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Minimalist High-Contrast Action Banner */}
      <section className="py-16 sm:py-20 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0e0e0e] to-[#070707] border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-start max-w-2xl">
              <span className="text-xs font-mono text-[#3b76b3] font-bold uppercase tracking-wider block">
                {isRtl ? 'المقر الرئيسي: جدة • حي الرويس 23215' : 'Headquarters: 23215 Al-Ruwais, Jeddah KSA'}
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                {isRtl ? 'هل تخطط لمشروع يحتاج فحصاً جيوتقنياً معتمداً؟' : 'Planning a Project Requiring Accredited Geotechnical Testing?'}
              </h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                {isRtl 
                  ? 'مهندسونا الاستشاريون جاهزون لدراسة موقعك، تحديد عدد وأعماق الجسات المطلوبة، وتقديم عرض سعر مطابق لكود البناء السعودي.'
                  : 'Our consultant engineers are available to review site data, specify borehole depths, and provide SBC-compliant proposals.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href={`tel:${info.phone2}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-stone-200 border border-white/15 text-xs font-mono transition-all"
              >
                <Phone className="w-4 h-4 text-[#3b76b3]" />
                <span>{info.phone2}</span>
              </a>

              <Link
                href={`/${lang}/rfq`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#3b76b3] hover:bg-[#2a5b8c] text-white font-bold text-sm shadow-lg shadow-[#3b76b3]/20 transition-all"
              >
                <span>{dict.nav.rfq}</span>
                <ArrowIcon className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer lang={lang} companyInfo={info} />
    </div>
  );
}
