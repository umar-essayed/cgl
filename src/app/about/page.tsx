import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { CGL_COMPANY_INFO } from '@/lib/data';
import { 
  ArrowRight, 
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
  ArrowLeft,
  PhoneCall,
  CheckCircle2,
  Building2,
  MapPin,
  Calendar,
  Sparkles,
  Milestone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'عن CGL | مسيرة الريادة، الرؤية والقيم الهندسية',
  description: 'تعرف على مختبرات CGL، فرع معتمد لمجموعة CGI العالمية، ورسالتنا ورؤيتنا وميثاق قيمنا في الهندسة الجيوتقنية وفحص المواد.',
};

export default function AboutPage() {
  const roadmapSteps = [
    {
      year: '2000',
      title: 'التأسيس والانطلاق',
      desc: 'تأسيس المختبر في جدة واعتماده كفرع لمجموعة CGI العالمية لتقديم خدمات فحص التربة والمواد الإنشائية.'
    },
    {
      year: '2010',
      title: 'التوسع التكنولوجي والميداني',
      desc: 'إدخال أحدث حفارات الجسات الآلية وأجهزة الرادار الأرضي (GPR) وتوسيع أسطول الفحوصات اللاإتلافية.'
    },
    {
      year: '2018',
      title: 'كود البناء والمشاريع الحيوية',
      desc: 'الامتثال الكامل لاشتراطات كود البناء السعودي (SBC 303/304) والمشاركة في أضخم مشاريع البنية التحتية بالمملكة.'
    },
    {
      year: '2024+',
      title: 'مشاريع رؤية 2030 المستقبلية',
      desc: 'شريك جيوتقني معتمد لكبرى جهات التطوير العقاري والمقاولات الاستراتيجية لتنفيذ المشاريع التنموية الكبرى.'
    }
  ];

  const valuesList = [
    {
      icon: Scale,
      title: 'جودة مهنية بتكلفة عادلة',
      desc: 'تقديم أعلى معايير الجودة الهندسية والفحص المخبري المعتمد بأسعار مدروسة وتنافسية.'
    },
    {
      icon: TrendingUp,
      title: 'عائد استثماري متفوق',
      desc: 'حماية أصول ومشاريع عملائنا بتقديم توصيات تأسيس دقيقة تقلل التكاليف غير الضرورية.'
    },
    {
      icon: ShieldCheck,
      title: 'الالتزام بأخلاقيات المهنة',
      desc: 'تطبيق أقصى درجات النزاهة والحيادية في الفحوصات والمسؤولية الكاملة عن كافة التقارير.'
    },
    {
      icon: Users,
      title: 'المشاركة المؤسسية الموسعة',
      desc: 'ترسيخ مبدأ الملكية والتقدير المتبادل والشراكة المؤسسية لفريق العمل والخبراء.'
    },
    {
      icon: Briefcase,
      title: 'بيئة عمل محفزة ومجزية',
      desc: 'توفير بيئة تشغيلية آمنة ومريحة تتيح مساراً وظيفياً متقدماً وتحديات مهنية مثمرة.'
    },
    {
      icon: Award,
      title: 'تمكين الكوادر الطموحة',
      desc: 'مظلة داعمة للمهندسين لتوسيع قاعدة خبراتهم وبناء سمعتهم المهنية في الميدان والمختبر.'
    },
    {
      icon: Lightbulb,
      title: 'التفكير الهندسي المبتكر',
      desc: 'تبني أحدث الحلول الرقمية والتقنيات غير الإتلافية لمعالجة التحديات الجيوتقنية المعقدة.'
    },
    {
      icon: Trophy,
      title: 'مكافأة التميز والإنجاز',
      desc: 'الاعتراف الدائم بالنجاحات النوعية ومكافأة الأداء الاستثنائي في كافة المراحل التشغيلية.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-stone-100 flex flex-col font-sans selection:bg-[#8bc34a] selection:text-black">
      <Navbar />

      {/* 1. Cinematic Hero Header with Real Field Photograph */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#1f1f1f] overflow-hidden">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/uploads/projects_images/project_688d0f1061e875.99060450.jpg"
            alt="أعمال المسح والرصد الميداني - مختبرات CGL"
            fill
            priority
            className="object-cover object-center filter contrast-110 brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-[#000000]/95" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-stone-400 hover:text-[#8bc34a] transition-colors group"
            >
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#8bc34a]" />
              <span>العودة إلى الرئيسية</span>
            </Link>
          </div>

          {/* Title & Subtitle */}
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-mono text-[#8bc34a] mb-3">
              {CGL_COMPANY_INFO.affiliationAr}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight mb-4">
              الريادة الجيوتقنية والمعايير العالمية
            </h1>

            <p className="text-base sm:text-lg text-stone-300 font-sans leading-relaxed">
              منظومة متكاملة لاستكشاف التربة، اختبارات المواد، تقييم سلامة المباني والمسح الهندسي وفق كود البناء السعودي والمعايير الدولية.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 w-full">
        
        {/* 2. Intro & Stats Section (Text & 4 Stats on Right, High-Res Image on Left) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column (7 cols): Narrative & 4 Stats Cards Below */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#8bc34a] font-bold block mb-2">
                الهوية المؤسسية
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                Creative Geotechnical Laboratories (CGL)
              </h2>
            </div>

            <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-sans font-medium">
              {CGL_COMPANY_INFO.aboutAr}
            </p>

            {/* 4 Stats Cards Grid Directly Below Intro Text */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/30 transition-all">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  650<span className="text-[#8bc34a]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-stone-200 mt-1">شركاء استراتيجيون</div>
                <div className="text-[11px] text-stone-400">حول العالم والمملكة</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/30 transition-all">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  300<span className="text-[#8bc34a]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-stone-200 mt-1">حلول هندسية مبتكرة</div>
                <div className="text-[11px] text-stone-400">لأعقد التحديات الإنشائية</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/30 transition-all">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  20<span className="text-[#8bc34a]">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-stone-200 mt-1">عاماً من الخبرة والنمو</div>
                <div className="text-[11px] text-stone-400">مسيرة متواصلة منذ عام 2000</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/30 transition-all">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  فرعان<span className="text-[#8bc34a] ml-1">🇸🇦🇺🇸</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-stone-200 mt-1">السعودية وأمريكا</div>
                <div className="text-[11px] text-stone-400">امتياز CGI العالمي</div>
              </div>
            </div>
          </div>

          {/* Left Column (5 cols): High-Quality Engineering Image */}
          <div className="lg:col-span-5 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#1f1f1f] shadow-2xl bg-[#0a0a0a]">
            <Image
              src="/uploads/user_provided/materials_testing.jpeg"
              alt="فريق المهندسين في موقع الفحص الميداني"
              fill
              className="object-cover object-center filter contrast-105"
            />
          </div>

        </section>

        {/* 3. Progress Roadmap Section (مسار التقدم والنمو المؤسسي) */}
        <section className="p-6 sm:p-10 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10 pb-4 border-b border-[#1f1f1f]">
            <div>
              <span className="text-xs font-mono text-[#8bc34a] font-bold block mb-1">
                تاريخ وتطور المؤسسة
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                مسار التقدم والريادة الهندسية
              </h2>
            </div>
            <div className="inline-flex items-center text-xs font-mono text-stone-400 gap-1.5">
              <Milestone className="w-4 h-4 text-[#8bc34a]" />
              <span>محطات النجاح والتوسع المؤسسي</span>
            </div>
          </div>

          {/* Roadmap Grid with Connected Progressive Line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {roadmapSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-between p-5 rounded-xl bg-[#111111] border border-[#1f1f1f] hover:border-[#8bc34a]/40 transition-all group"
              >
                {/* Step Marker */}
                <div>
                  <div className="mb-3">
                    <span className="text-xl font-bold font-mono text-white group-hover:text-[#8bc34a] transition-colors">
                      {step.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-display mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-stone-400 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

                {/* Step Number Tracker */}
                <div className="pt-4 mt-4 border-t border-[#1f1f1f] flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span>المرحلة 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-[#8bc34a]/40 group-hover:bg-[#8bc34a] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Vision & Mission Section (High Contrast, Wide & Comfortable) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* OUR MISSION */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col justify-between hover:border-[#8bc34a]/40 transition-all relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-28 h-1 bg-[#8bc34a]" />
            
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#111111] border border-[#1f1f1f] flex items-center justify-center text-[#8bc34a] flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8bc34a] font-bold">الغاية الهندسية</span>
                  <h3 className="text-xl font-bold text-white font-display">رسالتنا المؤسسية</h3>
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-white leading-relaxed mb-6 border-r-4 border-[#8bc34a] pr-4 bg-[#111111]/50 p-4 rounded-l-xl">
                "{CGL_COMPANY_INFO.missionAr}"
              </blockquote>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                  <span>تطبيق أدق معايير الفحص المخبري والحقلي المعتمدة عالمياً ومحلياً.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                  <span>تقديم حلول هندسية واضحة ومجدية اقتصادياً لكل مشروع.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                  <CheckCircle2 className="w-4 h-4 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                  <span>المسؤولية الكاملة والشفافية في كافة التقارير الفنية الصادرة.</span>
                </div>
              </div>
            </div>
          </div>

          {/* OUR VISION */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col justify-between hover:border-[#8bc34a]/40 transition-all relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-28 h-1 bg-[#8bc34a]" />

            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#111111] border border-[#1f1f1f] flex items-center justify-center text-[#8bc34a] flex-shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#8bc34a] font-bold">الرؤية المستقبلية</span>
                  <h3 className="text-xl font-bold text-white font-display">رؤيتنا الاستراتيجية</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base font-medium text-stone-200 mb-6 leading-relaxed">
                {CGL_COMPANY_INFO.visionAr.lead}
              </p>

              {/* Strategic Pillars */}
              <div className="space-y-3 mb-6">
                {CGL_COMPANY_INFO.visionAr.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* 3 Partnership Pillars */}
              <div className="pt-4 border-t border-[#1f1f1f]">
                <span className="text-xs font-mono text-[#8bc34a] font-bold block mb-2">
                  ركائز الشراكة مع العملاء (Partner of Choice):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {CGL_COMPANY_INFO.visionAr.partnerPillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="p-2.5 rounded-lg bg-[#111111] border border-[#1f1f1f] text-[11px] text-stone-300 leading-snug">
                      <span className="text-[#8bc34a] font-bold block mb-1">0{pIdx + 1}.</span>
                      {pillar}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* 5. Values Section (Grid 4x2 of Clean Arabic Cards, Exclusive Icon & 1-Line Description) */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-[#1f1f1f]">
            <div>
              <span className="text-xs font-mono text-[#8bc34a] font-bold block mb-1">
                المعايير المهنية الثمانية
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                قيمنا المؤسسية والهندسية
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-400 bg-white/5 px-3 py-1.5 rounded border border-white/10 w-fit">
              8 مبادئ حاكمة لأعمالنا
            </span>
          </div>

          {/* 4x2 Grid of Clean Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {valuesList.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#8bc34a]/40 hover:bg-[#111111] transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    {/* Exclusive Icon & Index */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#1f1f1f] flex items-center justify-center text-[#8bc34a] group-hover:border-[#8bc34a]/30 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-stone-500 font-bold">0{idx + 1}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-[#8bc34a] transition-colors">
                      {val.title}
                    </h3>

                    {/* Clean 1-Line Description */}
                    <p className="text-xs text-stone-400 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Action Call Footer */}
        <section className="p-8 sm:p-10 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-right">
            <h3 className="text-xl font-bold text-white font-display">جاهزون لدراسة مشروعك الهندسي</h3>
            <p className="text-stone-400 text-xs sm:text-sm">
              تواصل مع مهندسينا لتحديد نوعية الفحوصات والجسات المطلوبة بدقة لموقعك.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/rfq"
              className="inline-flex items-center px-6 py-3 bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-[#8bc34a]/20"
            >
              <span>طلب تسعير أو استشارة</span>
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Link>

            <a
              href={`https://wa.me/${CGL_COMPANY_INFO.whatsapp1Raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-[#111111] hover:bg-[#1a1a1a] text-stone-200 hover:text-white text-xs sm:text-sm font-medium rounded-xl border border-[#1f1f1f] transition-all"
            >
              <PhoneCall className="w-4 h-4 ml-2 text-[#8bc34a]" />
              <span>محادثة المهندس المباشرة</span>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
