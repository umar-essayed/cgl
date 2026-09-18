import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowLeft, MapPin, CheckCircle2, ShieldAlert, Cpu, Award, ArrowUpLeft, ArrowUpRight, FileText, Check } from 'lucide-react';
import { CGL_PROJECTS_EVIDENCE, CGL_COMPANY_INFO } from '@/lib/data';
import { Locale, isValidLocale, locales, getDictionary } from '@/lib/i18n';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { getDynamicProject } from '@/lib/dynamicData';

interface ProjectPageProps {
  params: Promise<{ lang: string; id: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const paths: { lang: string; id: string }[] = [];
  for (const lang of locales) {
    for (const project of CGL_PROJECTS_EVIDENCE) {
      paths.push({ lang, id: project.id });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { lang, id } = await params;
  const project = await getDynamicProject(id);
  if (!project) return { title: 'Project Not Found | CGL' };

  const isRtl = lang === 'ar';
  return {
    title: `${isRtl ? project.nameAr : project.nameEn} | CGL`,
    description: isRtl ? project.scopeOfWorkAr : project.scopeOfWorkEn,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { lang, id } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const project = await getDynamicProject(id);

  if (!project) {
    notFound();
  }

  const dict = getDictionary(lang);
  const isRtl = lang === 'ar';
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  const name = isRtl ? project.nameAr : project.nameEn;
  const subName = isRtl ? project.nameEn : project.nameAr;
  const sector = isRtl ? project.sectorAr : project.sectorEn;
  const location = isRtl ? project.locationAr : project.locationEn;
  const scope = isRtl ? project.scopeOfWorkAr : project.scopeOfWorkEn;
  const approach = isRtl ? project.engineeringApproachAr : project.engineeringApproachAr;
  const challenges = isRtl ? project.technicalChallengesAr : project.technicalChallengesAr;

  return (
    <div className="min-h-screen bg-[#000000] text-stone-100 flex flex-col font-sans">
      <Navbar lang={lang} />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs & Back Link */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href={`/${lang}/projects`}
              className="inline-flex items-center text-xs sm:text-sm font-medium text-stone-400 hover:text-[#8bc34a] transition-colors group gap-2"
            >
              <BackIcon className="w-4 h-4 text-[#8bc34a] group-hover:-translate-x-0.5 transition-transform" />
              <span>{dict.projectDetailPage.backBtn}</span>
            </Link>

            <span className="text-xs font-mono text-stone-400 bg-white/5 px-2.5 py-1 rounded border border-white/10">
              ID: {project.id}
            </span>
          </div>

          {/* Project Header Dossier */}
          <div className="mb-10 pb-8 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b22] border border-[#82B74B]/30 text-xs font-sans text-[#97C369] mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8bc34a] animate-pulse" />
              <span>{sector}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              {name}
            </h1>
            <p className="text-sm sm:text-base font-mono text-stone-400 mb-6">
              {subName}
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-4 h-4 text-[#8bc34a]" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Award className="w-4 h-4 text-[#3B76B3]" />
                <span>{dict.projectDetailPage.sbcBadge}</span>
              </div>
            </div>
          </div>

          {/* Gallery Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            {/* Primary Cover Image */}
            <div className="lg:col-span-8 relative h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <Image
                src={project.coverImage}
                alt={name}
                fill
                priority
                className="object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Side Gallery & Quick Specs */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              {(project.gallery || []).slice(1, 2).map((img, idx) => (
                <div key={idx} className="relative h-44 sm:h-52 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black">
                  <Image
                    src={img}
                    alt={`${name} - preview ${idx + 1}`}
                    fill
                    className="object-cover object-center filter contrast-105"
                  />
                </div>
              ))}

              {/* Standards Reference Card */}
              <div className="p-5 rounded-xl bg-[#0a0a0a] border border-white/10 flex-grow flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8bc34a] mb-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{dict.projectDetailPage.standardsTitle}</span>
                  </div>
                  <div className="space-y-1.5">
                    {(project.relevantStandards || []).map((std, sIdx) => (
                      <div key={sIdx} className="text-xs font-mono text-stone-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#8bc34a] flex-shrink-0" />
                        <span>{std}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <Link
                    href={`/${lang}/rfq`}
                    className="flex items-center justify-between text-xs font-bold text-[#8bc34a] hover:underline"
                  >
                    <span>{dict.projectDetailPage.sidebarCta}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Scope & Narrative Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* Main Narrative (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Scope of Work */}
              <section className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-sm">
                <h2 className="text-lg sm:text-xl font-display font-bold text-white mb-4">
                  {dict.projectDetailPage.overviewTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  {scope}
                </p>
              </section>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5">
                  <span className="text-xs font-mono text-stone-400 block mb-2">
                    {dict.projectDetailPage.testsTitle}:
                  </span>
                  {(project.servicesPerformedAr || []).map((srv: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                      <Check className="w-4 h-4 text-[#8bc34a] flex-shrink-0 mt-0.5" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>

              {/* Engineering Approach */}
              <section className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-sm">
                <h2 className="text-lg sm:text-xl font-display font-bold text-white mb-3">
                  {dict.projectDetailPage.approachTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  {approach}
                </p>
              </section>

              {/* Technical Challenges */}
              <section className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="w-4 h-4 text-[#D4A359]" />
                  <h2 className="text-lg sm:text-xl font-display font-bold text-white">
                    {dict.projectDetailPage.challengesTitle}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  {challenges}
                </p>
              </section>
            </div>

            {/* Side Rig & Tests Dossier (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Equipment Used */}
              <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8bc34a] mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>{dict.projectDetailPage.equipmentTitle}</span>
                </div>
                <div className="space-y-2">
                  {(project.equipmentUsed || []).map((eq, eIdx) => (
                    <div key={eIdx} className="text-xs text-stone-300 font-sans bg-white/5 p-2.5 rounded-lg border border-white/5">
                      {eq}
                    </div>
                  ))}
                </div>
              </div>

              {/* RFQ Callout Box */}
              <div className="p-6 rounded-2xl bg-[#0a0a0a] text-white border border-[#1f1f1f] shadow-xl text-center">
                <div className="w-12 h-12 rounded-full bg-[#8bc34a]/20 text-[#8bc34a] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white font-display mb-2">
                  {dict.projectDetailPage.sidebarTitle}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-6">
                  {dict.projectDetailPage.sidebarDesc}
                </p>
                <Link
                  href={`/${lang}/rfq`}
                  className="inline-flex items-center justify-center w-full py-3 bg-[#8bc34a] hover:bg-[#7cb342] text-black font-bold text-xs rounded-xl shadow-lg transition-all"
                >
                  <span>{dict.projectDetailPage.sidebarCta}</span>
                  <ArrowIcon className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
