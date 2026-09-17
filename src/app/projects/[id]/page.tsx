import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin, CheckCircle2, ShieldAlert, Cpu, Award, ArrowUpLeft, FileText, Check } from 'lucide-react';
import { CGL_PROJECTS_EVIDENCE, CGL_COMPANY_INFO } from '@/lib/data';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return CGL_PROJECTS_EVIDENCE.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = CGL_PROJECTS_EVIDENCE.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#000000] text-stone-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-20 engineering-canvas">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Back Link */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-stone-400 hover:text-[#82B74B] transition-colors group"
            >
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#82B74B]" />
              <span>العودة إلى دراسات المشاريع</span>
            </Link>

            <span className="text-xs font-mono text-stone-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
              ID: {project.id}
            </span>
          </div>

          {/* Project Header Dossier */}
          <div className="mb-10 pb-8 border-b border-white/10">
            <div className="inline-flex items-center space-x-2 space-x-reverse px-3 py-1 rounded-full bg-[#181b22] border border-[#82B74B]/30 text-xs font-sans text-[#97C369] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#82B74B] animate-pulse" />
              <span>{project.sectorAr}</span>
              <span className="text-stone-600">|</span>
              <span className="text-stone-400 font-mono text-[11px]">{project.sectorEn}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              {project.nameAr}
            </h1>
            <p className="text-sm sm:text-base font-mono text-stone-400 mb-6">
              {project.nameEn}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center space-x-1.5 space-x-reverse bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-4 h-4 text-[#82B74B] ml-1.5" />
                <span>{project.locationAr}</span>
              </div>
              <div className="flex items-center space-x-1.5 space-x-reverse bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Award className="w-4 h-4 text-[#3B76B3] ml-1.5" />
                <span>معتمد وفق كود البناء السعودي SBC</span>
              </div>
            </div>
          </div>

          {/* Gallery Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {/* Primary Cover Image */}
            <div className="lg:col-span-8 relative h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-stone-900">
              <Image
                src={project.coverImage}
                alt={project.nameAr}
                fill
                priority
                className="object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Side Gallery & Quick Specs */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              {project.gallery.slice(1, 2).map((img, idx) => (
                <div key={idx} className="relative h-44 sm:h-52 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-stone-900">
                  <Image
                    src={img}
                    alt={`${project.nameAr} - صورة إضافية`}
                    fill
                    className="object-cover object-center filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              ))}

              {/* Standards Plaque */}
              <div className="p-5 rounded-xl bg-[#15181f] border border-white/10 flex-grow flex flex-col justify-center">
                <span className="text-xs font-mono text-[#82B74B] block mb-2 font-semibold">
                  المعايير والأكواد المرجعية المعتمدة:
                </span>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.relevantStandards.map((std, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-xs text-stone-200"
                    >
                      {std}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  تخضع جميع القراءات والتحليلات لمعايير التحقق المزدوج والتوقيع من مهندس جيوتقني معتمد.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Engineering Dossier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content Columns */}
            <div className="lg:col-span-8 space-y-8">
              {/* Scope of Work */}
              <section className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f]">
                <div className="flex items-center space-x-2 space-x-reverse mb-4">
                  <FileText className="w-5 h-5 text-[#8bc34a] ml-2" />
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    نطاق العمل الفني والمخرجات
                  </h2>
                </div>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.scopeOfWorkAr}
                </p>

                <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
                  الإجراءات الميدانية المنفذة:
                </h3>
                <ul className="space-y-2.5">
                  {project.servicesPerformedAr.map((srv, idx) => (
                    <li key={idx} className="flex items-start text-sm text-stone-200">
                      <Check className="w-4 h-4 text-[#8bc34a] ml-2.5 mt-0.5 flex-shrink-0" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Technical Challenges & Engineering Approach */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f]">
                  <div className="flex items-center space-x-2 space-x-reverse mb-3">
                    <ShieldAlert className="w-4 h-4 text-[#A94845] ml-2" />
                    <h3 className="font-display font-bold text-white text-base">
                      التحديات الهندسية الميدانية
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {project.technicalChallengesAr}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f]">
                  <div className="flex items-center space-x-2 space-x-reverse mb-3">
                    <Cpu className="w-4 h-4 text-[#3B76B3] ml-2" />
                    <h3 className="font-display font-bold text-white text-base">
                      المنهجية والحلول الهندسية
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {project.engineeringApproachAr}
                  </p>
                </div>
              </div>

              {/* Tests & Laboratory Verification */}
              <section className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f]">
                <h2 className="text-lg sm:text-xl font-display font-bold text-white mb-4">
                  الفحوصات والتجارب المنفذة في هذا المشروع
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.testsPerformedAr.map((test, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#111111] border border-[#1f1f1f] flex items-center space-x-2 space-x-reverse"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#8bc34a] ml-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-mono text-stone-200">{test}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Specifications */}
            <div className="lg:col-span-4 space-y-6">
              {/* Equipment Deployed */}
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f]">
                <h3 className="font-display font-bold text-white text-base mb-4 flex items-center">
                  <Cpu className="w-4 h-4 text-[#8bc34a] ml-2" />
                  <span>المعدات والمنظومات المعايرة المستخدمة</span>
                </h3>
                <ul className="space-y-3">
                  {project.equipmentUsed.map((equip, idx) => (
                    <li key={idx} className="p-3 rounded-lg bg-[#111111] border border-[#1f1f1f] text-xs text-stone-300 font-mono">
                      {equip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RFQ CTA Card */}
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] shadow-xl text-center">
                <div className="w-12 h-12 rounded-full bg-[#8bc34a]/20 text-[#8bc34a] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  هل تحتاج دراسة مشابهة لمشروعك؟
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-6">
                  نوفر استشارات ودراسات فنية متخصصة معتمدة لكافة مشاريع البنية التحتية والمنشآت الكبرى.
                </p>
                <Link
                  href="/rfq"
                  className="inline-flex items-center justify-center w-full py-3 bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-sm rounded-lg transition-all shadow-md shadow-[#8bc34a]/20"
                >
                  <span>طلب عرض سعر أو استشارة فنية</span>
                  <ArrowUpLeft className="w-4 h-4 mr-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
