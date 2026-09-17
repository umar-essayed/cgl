# CGL | Creative Geotechnical Laboratories
### مختبرات الهندسة الجيوتقنية وفحص المواد • فرع معتمد لمجموعة CGI العالمية (USA & KSA)

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Saudi Building Code](https://img.shields.io/badge/SBC-303%20%7C%20304-8bc34a?style=for-the-badge)](https://sbc.gov.sa/)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Production%20Live-black?style=for-the-badge&logo=vercel)](https://cgl-sable.vercel.app)

---

## 🌐 المنصة الرقمية الرسمية (Live Production)
- **الرابط الرئيسي:** [https://cgl-sable.vercel.app](https://cgl-sable.vercel.app)
- **عن المؤسسة والمسيرة:** [https://cgl-sable.vercel.app/about](https://cgl-sable.vercel.app/about)
- **طلب عرض سعر وخدمات هندسية (RFQ):** [https://cgl-sable.vercel.app/rfq](https://cgl-sable.vercel.app/rfq)

---

## 🏗️ نظرة عامة (Overview)
مختبرات **CGL (Creative Geotechnical Laboratories)** هي مؤسسة استشارية وهندسية رائدة وفرع معتمد لمجموعة **CGI العالمية (USA & KSA)**. تُقدم حلولاً هندسية ومخبرية متكاملة لاستكشاف التربة، فحص الأساسات، مراقبة واختبار جودة مواد البناء، تقييم سلامة المنشآت، والمسح الطبوغرافي الرقمي وفق أعلى معايير كود البناء السعودي (SBC 303 & SBC 304) والمواصفات الدولية (ASTM, ACI, AASHTO).

---

## ⚙️ مجالات التخصص والخدمات (Core Services)

1. **استكشاف التربة والأساسات (Geotechnical Investigation)**:
   - حفر الجسات الآلية بعينات صخرية وترابية.
   - تحديد معامل النفاذية وقدرة التحمل المسموحة والتوصيات التأسيسية.
2. **اختبارات التحميل الاستاتيكي والديناميكي (Static & Dynamic Pile Load Tests)**:
   - اختبارات الأحمال على الخوازيق حتى +1000 طن باستخدام منظومات هيدروليكية دقيقة وفق ASTM D1143.
3. **المسح الطبوغرافي والرصد الجيوديسي (Topographic Surveying)**:
   - مسح شامل ورصد رقمي ونمذجة ثلاثية الأبعاد باستخدام محطات الرصد المتكاملة وأجهزة GNSS.
4. **فحوصات تقييم سلامة المباني اللاإتلافية (Building Integrity & NDT)**:
   - الموجات فوق الصوتية (UPV)، مطرقة شميدت، والكشف الراداري (GPR) لتحديد مواقع وتآكل حديد التسليح.
5. **مختبرات فحص مواد البناء والخرسانة (Materials Testing)**:
   - اختبارات كسر مكعبات الخرسانة، فحص الركام، واختبارات الشد لصلب التسليح.
6. **التدعيم ونزح المياه الجوفية (Shoring & Dewatering)**:
   - تصميم وتنفيذ جدران التدعيم، الستائر المعدنية، وشبكات خفض منسوب المياه الجوفية.
7. **اختبارات التعدين والجيولوجيا (Mining & Geological Exploration)**:
   - التحليل البتروغرافي، تصنيف الكتل الصخرية (RMR/Q-System)، وحفر استكشاف المعادن.

---

## 💻 البنية البرمجية والتقنيات (Tech Stack)

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack Engine, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing across models and schemas)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) مع تصميم هندسي معاصر (Dark Architectural Theme)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) لانتقالات سلسة وتفاعلية
- **Icons**: [Lucide React](https://lucide.dev/)
- **Maps**: [Leaflet](https://leafletjs.com/) مع مظهر داكن مخصص ومتوافق بالكامل مع الهوية
- **SEO & Social**: بطاقات Open Graph (OG) مخصصة بدقة 1200×630، وتوافق كامل مع تويتر وواتساب ولينكد إن

---

## 📂 هيكل المشروع (Project Structure)

```text
cgl/
├── public/
│   ├── assets/              # الشعارات والأيقونات والوسائط الثابتة
│   ├── uploads/             # صور المشاريع والخدمات الميدانية المعتمدة
│   ├── og-image.jpg         # صورة المشاركة الرسمية OpenGraph (1200x630)
│   └── favicon.ico          # أيقونات المتصفح
├── src/
│   ├── app/
│   │   ├── layout.tsx       # الترويسة العامة وميتا تاجز SEO & OG
│   │   ├── page.tsx         # الصفحة الرئيسية التفاعلية
│   │   ├── about/           # صفحة من نحن، الرؤية والرسالة ومسار التقدم
│   │   ├── projects/[id]/   # صفحات تفاصيل ودراسات المشاريع المنفذة
│   │   └── rfq/             # نموذج طلب عرض السعر الهندسي التفاعلي
│   ├── components/
│   │   ├── home/            # مكونات الصفحة الرئيسية (الهيرو، الخدمات، الشركاء، الخ)
│   │   ├── navbar/          # شريط التنقل المتجاوب
│   │   ├── footer/          # التذييل المؤسسي والاعتمادات
│   │   └── map/             # خريطة الموقع الجغرافي الداكنة
│   └── lib/
│       ├── data.ts          # قواعد بيانات الخدمات والمشاريع والاعتمادات
│       └── types.ts         # الواجهات والأنماط البرمجية (TypeScript Interfaces)
├── .vercelignore            # قواعد الاستبعاد المخصصة لنشر Vercel السريع
├── next.config.mjs          # إعدادات Next.js وتحسين الصور
└── tailwind.config.ts       # نظام الألوان والخطوط والأبعاد
```

---

## 🚀 التشغيل والتطوير المحلي (Local Development)

1. **تثبيت الحزم البرمجية:**
   ```bash
   npm install
   ```

2. **بدء بيئة التطوير:**
   ```bash
   npm run dev
   ```
   افتح المتصفح على [http://localhost:3000](http://localhost:3000).

3. **بناء النسخة الإنتاجية وفحص الأخطاء:**
   ```bash
   npm run build
   ```

4. **تشغيل النسخة الجاهزة للإنتاج:**
   ```bash
   npm run start
   ```

---

## 📜 الترخيص وحقوق الملكية
جميع الحقوق محفوظة © لمختبرات **CGL (Creative Geotechnical Laboratories)** ومجموعة **CGI العالمية**.
