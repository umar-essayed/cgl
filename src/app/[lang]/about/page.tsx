import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { CGL_COMPANY_INFO } from '@/lib/data';
import { Locale, isValidLocale, getDictionary } from '@/lib/i18n';
import { 
  ArrowRight, 
  ArrowLeft,
  Target, 
  Compass, 
  ShieldCheck, 
  TrendingUp, 
  Scale, 
  Users, 
  Briefcase, 
  Award, 
  Lightbulb, 
  Trophy,
  CheckCircle2,
  Milestone
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
      title: 'عن CGL | مسيرة الريادة، الرؤية والقيم الهندسية',
      description: 'تعرف على مختبرات CGL، فرع معتمد لمجموعة CGI العالمية، ورسالتنا ورؤيتنا وميثاق قيمنا في الهندسة الجيوتقنية وفحص المواد.',
    };
  }

  return {
    title: 'About CGL | Engineering Heritage, Vision & Values',
    description: 'Learn about CGL Laboratories, an authorized franchise of CGI Group, our technical mission, strategic vision, and values in geotechnical engineering.',
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

  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const valuesList = [
    {
      icon: Scale,
      title: isRtl ? 'جودة مهنية بتكلفة عادلة' : 'Professional Quality & Fair Pricing',
      desc: isRtl 
        ? 'تقديم أعلى معايير الجودة الهندسية والفحص المخبري المعتمد بأسعار مدروسة وتنافسية.'
        : 'Delivering highest engineering standards and accredited testing at optimized, fair costs.'
    },
    {
      icon: TrendingUp,
      title: isRtl ? 'عائد استثماري متفوق' : 'Superior Return on Investment',
      desc: isRtl
        ? 'حماية أصول ومشاريع عملائنا بتقديم توصيات تأسيس دقيقة تقلل التكاليف غير الضرورية.'
        : 'Protecting client assets through precise foundation engineering that eliminates redundant costs.'
    },
    {
      icon: ShieldCheck,
      title: isRtl ? 'الالتزام بأخلاقيات المهنة' : 'Uncompromising Professional Ethics',
      desc: isRtl
        ? 'تطبيق أقصى درجات النزاهة والحيادية في الفحوصات والمسؤولية الكاملة عن كافة التقارير.'
        : 'Upholding absolute integrity, technical impartiality, and full accountability for all issued reports.'
    },
    {
      icon: Users,
      title: isRtl ? 'المشاركة المؤسسية الموسعة' : 'Broad Institutional Ownership',
      desc: isRtl
        ? 'ترسيخ مبدأ الملكية والتقدير المتبادل والشراكة المؤسسية لفريق العمل والخبراء.'
        : 'Fostering ownership, mutual respect, and collaborative growth across our multidisciplinary teams.'
    },
    {
      icon: Briefcase,
      title: isRtl ? 'بيئة عمل محفزة ومجزية' : 'Stimulating & Rewarding Workplace',
      desc: isRtl
        ? 'توفير بيئة تشغيلية آمنة ومريحة تتيح مساراً وظيفياً متقدماً وتحديات مهنية مثمرة.'
        : 'Providing safe, modern operational environments enabling progressive technical career paths.'
    },
    {
      icon: Award,
      title: isRtl ? 'تمكين الكوادر الطموحة' : 'Empowering Engineering Talent',
      desc: isRtl
        ? 'مظلة داعمة للمهندسين لتوسيع قاعدة خبراتهم وبناء سمعتهم المهنية في الميدان والمختبر.'
        : 'Providing an empowering platform for engineers to broaden their field and laboratory expertise.'
    },
    {
      icon: Lightbulb,
      title: isRtl ? 'التفكير الهندسي المبتكر' : 'Innovative Engineering Thinking',
      desc: isRtl
        ? 'تبني أحدث الحلول الرقمية والتقنيات غير الإتلافية لمعالجة التحديات الجيوتقنية المعقدة.'
        : 'Adopting digital innovations and NDT methods to solve complex subsurface engineering challenges.'
    },
    {
      icon: Trophy,
      title: isRtl ? 'مكافأة التميز والإنجاز' : 'Rewarding Excellence & Impact',
      desc: isRtl
        ? 'الاعتراف الدائم بالنجاحات النوعية ومكافأة الأداء الاستثنائي في كافة المراحل التشغيلية.'
        : 'Continually recognizing qualitative breakthroughs and exceptional operational performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-stone-100 flex flex-col font-sans selection:bg-[#8bc34a] selection:text-black transition-colors">
      <Navbar lang={lang} />

      {/* 1. Cinematic Hero Header */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-slate-200 dark:border-[#1f1f1f] overflow-hidden bg-slate-50 dark:bg-black transition-colors">
        <div className="absolute inset-0 z-0">
          <Image
            src="/uploads/projects_images/project_688d0f1061e875.99060450.jpg"
            alt="CGL Field Operations"
            fill
            priority
            className="object-cover object-center filter contrast-105 opacity-100 dark:opacity-50 dark:brightness-40 transition-opacity"
          />
          {/* Minimal Subtle Scrim (Almost nonexistent in light mode) */}
          <div className={`absolute inset-0 ${
            isRtl 
              ? 'bg-gradient-to-l from-white/35 via-white/15 to-transparent dark:from-black/95 dark:via-black/75 dark:to-black/30' 
              : 'bg-gradient-to-r from-white/35 via-white/15 to-transparent dark:from-black/95 dark:via-black/75 dark:to-black/30'
          } transition-colors duration-300`} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/30 via-transparent to-transparent dark:from-black dark:via-black/40 dark:to-transparent transition-colors duration-300" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center text-xs sm:text-sm font-medium text-slate-600 hover:text-[#689f38] dark:text-stone-300 dark:hover:text-[#8bc34a] transition-colors group gap-2"
            >
              <BackIcon className="w-4 h-4 text-[#8bc34a] group-hover:-translate-x-0.5 transition-transform" />
              <span>{dict.aboutPage.breadcrumbHome}</span>
            </Link>
          </div>

          {/* Title & Subtitle */}
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-mono text-[#689f38] dark:text-[#8bc34a] font-bold mb-3">
              {dict.aboutPage.affiliation}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-950 dark:text-white tracking-tight leading-tight mb-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] dark:drop-shadow-none">
              {dict.aboutPage.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-900 dark:text-stone-200 font-sans leading-relaxed drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] dark:drop-shadow-none">
              {dict.aboutPage.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 w-full">
        
        {/* 2. Intro & Stats Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text & 4 Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#689f38] dark:text-[#8bc34a] font-bold block mb-2">
                {dict.aboutPage.identityBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white leading-snug">
                {dict.aboutPage.identityTitle}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 dark:text-stone-200 leading-relaxed font-sans font-medium">
              {isRtl ? CGL_COMPANY_INFO.aboutAr : CGL_COMPANY_INFO.aboutEn}
            </p>

            {/* 4 Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#1f1f1f] shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                  650<span className="text-[#8bc34a]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-stone-200 mt-1">
                  {dict.aboutPage.stats.partners}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-stone-400">
                  {dict.aboutPage.stats.partnersSub}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#1f1f1f] shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                  300<span className="text-[#8bc34a]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-stone-200 mt-1">
                  {dict.aboutPage.stats.solutions}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-stone-400">
                  {dict.aboutPage.stats.solutionsSub}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#1f1f1f] shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                  20<span className="text-[#8bc34a]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-stone-200 mt-1">
                  {dict.aboutPage.stats.experience}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-stone-400">
                  {dict.aboutPage.stats.experienceSub}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#1f1f1f] shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                  {isRtl ? 'فرعان' : '2 Branches'}<span className="text-[#8bc34a] ml-1">🇸🇦🇺🇸</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-stone-200 mt-1">
                  {dict.aboutPage.stats.branches}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-stone-400">
                  {dict.aboutPage.stats.branchesSub}
                </div>
              </div>
            </div>
          </div>

          {/* High-Quality Engineering Image */}
          <div className="lg:col-span-5 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 dark:border-[#1f1f1f] shadow-xl bg-slate-100 dark:bg-[#0a0a0a]">
            <Image
              src="/uploads/user_provided/materials_testing.jpeg"
              alt="Engineering Team at CGL"
              fill
              className="object-cover object-center filter contrast-105"
            />
          </div>

        </section>

        {/* 3. Progress Roadmap Section */}
        <section className="p-6 sm:p-10 rounded-2xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#1f1f1f] shadow-sm transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10 pb-4 border-b border-slate-200 dark:border-[#1f1f1f]">
            <div>
              <span className="text-xs font-mono text-[#689f38] dark:text-[#8bc34a] font-bold block mb-1">
                {dict.aboutPage.roadmapBadge}
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                {dict.aboutPage.roadmapTitle}
              </h2>
            </div>
            <div className="inline-flex items-center text-xs font-mono text-slate-500 dark:text-stone-400 gap-1.5">
              <Milestone className="w-4 h-4 text-[#8bc34a]" />
              <span>{dict.aboutPage.roadmapSub}</span>
            </div>
          </div>

          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {dict.aboutPage.roadmapSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-between p-5 rounded-xl bg-white dark:bg-[#111111] border border-slate-200 dark:border-[#1f1f1f] hover:border-[#8bc34a]/60 dark:hover:border-[#8bc34a]/40 shadow-sm transition-all group"
              >
                <div>
                  <div className="mb-3">
                    <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white group-hover:text-[#689f38] dark:group-hover:text-[#8bc34a] transition-colors">
                      {step.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-stone-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-[#1f1f1f] flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-stone-500">
                  <span>{dict.aboutPage.roadmapStage} 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#8bc34a]/40 group-hover:bg-[#8bc34a] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Vision & Mission Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* OUR MISSION */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#1f1f1f] flex flex-col justify-between hover:border-[#8bc34a]/60 dark:hover:border-[#8bc34a]/40 transition-all relative overflow-hidden shadow-sm">
            <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} w-28 h-1 bg-[#8bc34a]`} />
            
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#111111] border border-slate-200 dark:border-[#1f1f1f] flex items-center justify-center text-[#8bc34a] flex-shrink-0 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#689f38] dark:text-[#8bc34a] font-bold">{dict.aboutPage.missionBadge}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">{dict.aboutPage.missionTitle}</h3>
                </div>
              </div>

              <blockquote className={`text-lg sm:text-xl font-medium text-slate-900 dark:text-white leading-relaxed mb-6 ${isRtl ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-[#8bc34a] bg-white/80 dark:bg-[#111111]/50 p-4 rounded-xl shadow-sm`}>
                "{isRtl ? CGL_COMPANY_INFO.missionAr : CGL_COMPANY_INFO.missionEn}"
              </blockquote>

              <div className="space-y-3 pt-2">
                {dict.aboutPage.missionPillars.map((pillar, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OUR VISION */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#1f1f1f] flex flex-col justify-between hover:border-[#8bc34a]/60 dark:hover:border-[#8bc34a]/40 transition-all relative overflow-hidden shadow-sm">
            <div className={`absolute top-0 ${isRtl ? 'right-0' : 'left-0'} w-28 h-1 bg-[#8bc34a]`} />
            
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#111111] border border-slate-200 dark:border-[#1f1f1f] flex items-center justify-center text-[#8bc34a] flex-shrink-0 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#689f38] dark:text-[#8bc34a] font-bold">{dict.aboutPage.visionBadge}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">{dict.aboutPage.visionTitle}</h3>
                </div>
              </div>

              <div className={`text-base sm:text-lg font-medium text-slate-900 dark:text-white leading-relaxed mb-6 ${isRtl ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-[#8bc34a] bg-white/80 dark:bg-[#111111]/50 p-4 rounded-xl shadow-sm`}>
                {isRtl ? CGL_COMPANY_INFO.visionAr.lead : CGL_COMPANY_INFO.visionEn.lead}
              </div>

              <div className="space-y-3 pt-2">
                {(isRtl ? CGL_COMPANY_INFO.visionAr.points : CGL_COMPANY_INFO.visionEn.points).map((point, ptIdx) => (
                  <div key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* 5. Values Grid (4x2 Clean Layout) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#689f38] dark:text-[#8bc34a] font-bold block mb-2">
              {dict.aboutPage.valuesBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
              {dict.aboutPage.valuesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-400 font-sans mt-2">
              {dict.aboutPage.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {valuesList.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 dark:bg-[#0a0a0a] border border-slate-200 dark:border-[#1f1f1f] hover:border-[#8bc34a]/60 dark:hover:border-[#8bc34a]/40 shadow-sm transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#111111] border border-slate-200 dark:border-[#1f1f1f] flex items-center justify-center text-[#8bc34a] mb-4 group-hover:scale-105 transition-transform shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display mb-1.5 group-hover:text-[#689f38] dark:group-hover:text-[#8bc34a] transition-colors">
                      {val.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-stone-400 leading-relaxed font-sans">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-[#1f1f1f] text-[10px] font-mono text-slate-400 dark:text-stone-600">
                    0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Bottom Direct CTA Banner */}
        <section className="p-8 sm:p-12 rounded-2xl bg-slate-900 dark:bg-[#0a0a0a] text-white border border-slate-800 dark:border-[#1f1f1f] relative overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-3xl font-display font-bold text-white mb-2">
                {isRtl ? 'هل لديك مشروع يحتاج استشارة أو فحص جيوتقني؟' : 'Have a Project Requiring Soil Testing or Advisory?'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-sans max-w-xl">
                {isRtl 
                  ? 'فريقنا الاستشاري متواجد لدراسة متطلبات التربة وتقديم خطة فحص معتمدة لكود البناء السعودي.'
                  : 'Our advisory team is ready to review site conditions and deliver compliant investigation plans.'}
              </p>
            </div>

            <Link
              href={`/${lang}/rfq`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-sm shadow-lg transition-all flex-shrink-0"
            >
              <span>{dict.nav.rfq}</span>
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer lang={lang} />
    </div>
  );
}
