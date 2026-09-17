'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, FileText } from 'lucide-react';
import { CGL_STANDARDS_COMPLIANCE } from '@/lib/data';

export default function CertificationsEvidenceSection() {
  return (
    <section id="compliance" className="min-h-screen py-20 sm:py-28 flex flex-col justify-center engineering-canvas border-b border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 space-x-reverse px-3 py-1 rounded-full bg-[#181b22] border border-[#3b76b3]/30 text-xs font-sans text-[#508ecb] mb-3">
            <span className="w-2 h-2 bg-[#3b76b3] rounded-full animate-pulse" />
            <span className="font-semibold">سجل الامتثال والاعتماد الهندسي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3">
            سجل الامتثال للمعايير والمواصفات القياسية
          </h2>
          <p className="text-stone-300 text-xs sm:text-base font-sans leading-relaxed">
            جدول مرجعي يوضح أطر المعايير الفنية المعتمدة لضمان قبول واعتماد كافة التقارير لدى المكاتب الاستشارية والجهات الإشرافية.
          </p>
        </div>

        {/* Desktop Table View (Hidden on mobile / shown on md+) */}
        <div className="hidden md:block engineering-card rounded-xl overflow-hidden shadow-2xl mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-sm">
              <thead className="bg-black/60 text-stone-300 font-mono text-xs uppercase tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-5">المعيار / الكود المعتمد</th>
                  <th className="p-5">الجهة المرجعية</th>
                  <th className="p-5">نطاق التطبيق الملزم</th>
                  <th className="p-5">حالة الامتثال</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans text-stone-300">
                {CGL_STANDARDS_COMPLIANCE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-5 font-bold font-display text-base text-white">
                      {item.name}
                    </td>
                    <td className="p-5 font-mono text-xs text-[#508ecb]">
                      {item.issuingOrg}
                    </td>
                    <td className="p-5 text-sm text-stone-300 leading-relaxed max-w-md">
                      {item.verifiedScopeAr}
                    </td>
                    <td className="p-5 font-mono text-xs">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-950/80 text-blue-400 border border-blue-700/60 text-xs font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 ml-1.5 text-blue-400" />
                        ساري وممتثل رسمياً
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Responsive Cards View (Shown only on mobile / hidden on md+) */}
        <div className="md:hidden space-y-4 mb-8">
          {CGL_STANDARDS_COMPLIANCE.map((item, idx) => (
            <div key={idx} className="engineering-card p-5 rounded-xl space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-bold text-base text-white">
                  {item.name}
                </h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-700/60 text-[10px] font-mono whitespace-nowrap">
                  <CheckCircle2 className="w-3 h-3 ml-1 text-blue-400" />
                  ممتثل
                </span>
              </div>
              <div className="text-xs font-mono text-[#508ecb]">
                الجهة: {item.issuingOrg}
              </div>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                {item.verifiedScopeAr}
              </p>
            </div>
          ))}
        </div>

        {/* Data Integrity Transparency Note */}
        <div className="p-4 sm:p-5 engineering-card rounded-xl flex items-start space-x-3 space-x-reverse text-xs text-stone-300 font-sans">
          <Lock className="w-4 h-4 text-[#3b76b3] ml-2.5 mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-white font-bold">سياسة تدقيق وسلامة البيانات:</strong> تلتزم CGL بعدم إدراج أي ادعاءات أو شهادات غير مدققة. تتوفر نسخ تقارير المعايرة الدورية للمعدات وسجلات ضبط الجودة للمشاريع عند طلب المكاتب الاستشارية وجهات الإشراف.
          </p>
        </div>
      </div>
    </section>
  );
}
