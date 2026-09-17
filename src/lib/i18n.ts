export type Locale = 'ar' | 'en';

export const defaultLocale: Locale = 'ar';
export const locales: Locale[] = ['ar', 'en'];

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

export const dictionaries = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    nav: {
      home: 'الرئيسية',
      about: 'عن المؤسسة',
      services: 'خدماتنا الهندسية',
      projects: 'دراسات المشاريع',
      equipment: 'المعدات والتجهيزات',
      news: 'آخر الأخبار',
      rfq: 'طلب عرض سعر',
      contact: 'تواصل معنا',
      callNow: 'اتصل بنا',
      whatsapp: 'واتساب',
      switchLang: 'English',
      switchLangTarget: 'en',
      themeLight: 'الوضع الفاتح',
      themeDark: 'الوضع الداكن',
    },
    hero: {
      affiliation: 'فرع معتمد لمجموعة CGI العالمية (USA & KSA)',
      ctaRfq: 'طلب عرض سعر فوري',
      ctaServices: 'استعراض الخدمات الهندسية',
      liveConsultation: 'استشارة هندسية مباشرة',
      sbcCompliance: 'معايير كود البناء السعودي SBC 303 • SBC 304',
      slides: [
        {
          id: 1,
          tag: 'الدراسات الجيوتقنية واستكشاف التربة',
          title: 'الدقة الهندسية في فحص التربة التي ترتكز عليها كبرى مشاريع المملكة',
          subtitle: 'حفر الجسات الآلية، استخراج العينات الصخرية، وتحديد قدرة تحمل التربة وتوصيات الأساسات وفق كود البناء السعودي.',
          metrics: 'أعماق حفر +50 متراً'
        },
        {
          id: 2,
          tag: 'اختبارات التحميل الاستاتيكي',
          title: 'تأكيد سلامة الأساسات العميقة بروافع تتجاوز 1000 طن',
          subtitle: 'منظومة هيدروليكية وخلايا ضغط معايرة لحساب الهبوط بدقة مليمترية وفق ASTM D1143.',
          metrics: 'أحمال فحص +1000 طن'
        },
        {
          id: 3,
          tag: 'المسح الطبوغرافي والجيوديسي',
          title: 'رصد مساحي رقمي دقيق ونمذجة ثلاثية الأبعاد للمواقع',
          subtitle: 'أحدث محطات الرصد الشاملة وأجهزة GNSS لتثبيت محاور المنشآت وحساب الكميات بدقة قطعية.',
          metrics: 'دقة رصد ثانية واحدة'
        }
      ],
      stats: {
        partners: { num: 650, label: 'شريك استراتيجي', sub: 'حول العالم والمملكة' },
        solutions: { num: 300, label: 'حلول هندسية مبتكرة', sub: 'لأعقد التحديات الإنشائية' },
        experience: { num: 20, label: 'عاماً من الخبرة والنمو', sub: 'مسيرة متواصلة منذ عام 2000' },
        branches: { num: 2, label: 'فرعان دوليان', sub: 'المملكة العربية السعودية وأمريكا' }
      }
    },
    services: {
      badge: 'القدرات التشغيلية والمخبرية',
      title: 'منظومة الخدمات الهندسية والمخبرية المعتمدة',
      subtitle: 'تغطية شاملة لكافة مراحل المشروع من استكشاف الموقع وفحص التربة وحتى ضبط الجودة واعتماد المواد وفق أعلى المعايير.',
      standardsBadge: 'المعايير المعتمدة:',
      viewDetails: 'تفاصيل الخدمة',
      requestPricing: 'طلب تسعير',
      viewAll: 'استعراض كافة الخدمات المتخصصة',
    },
    partners: {
      badge: 'شركاء النجاح والاعتماد',
      title: 'ثقة كبرى جهات التطوير والمقاولات الاستراتيجية',
      subtitle: 'شراكات هندسية رائدة مع نخبة من أضخم مطوري ومقاولي البنية التحتية في المملكة.',
    },
    projects: {
      badge: 'سجل الإنجاز والاعتماد',
      title: 'دراسات المشاريع المنفذة',
      subtitle: 'نماذج واقعية لأعمال استكشاف التربة، اختبارات الخوازيق، والمسح الجيوديسي في أضخم مشاريع المملكة.',
      detailsBtn: 'تفاصيل المشروع',
      allProjects: 'استعراض كافة دراسات المشاريع',
    },
    equipment: {
      badge: 'الأسطول الميداني والتقنيات',
      title: 'أسطول المعدات الهندسية والتجهيزات المخبرية',
      subtitle: 'نمتلك منظومة متكاملة من حفارات الجسات الدوارة، أجهزة الفحوصات غير الإتلافية، وماكينات اختبار المواد المعايرة دورياً.',
      filterAll: 'كافة التجهيزات',
      filterDrilling: 'حفر الجسات والتربة',
      filterNdt: 'الفحوصات غير الإتلافية والرادارات',
      filterMaterials: 'مختبر فحص المواد',
      filterSurveying: 'المسح الهندسي والجيوديسي',
      specifications: 'المواصفات والقدرات التشغيلية:',
      standardsLabel: 'المعايير القياسية:',
      requestRfq: 'طلب استشارة بهذا النطاق',
    },
    news: {
      badge: 'النشرة الفنية والتحديثات',
      title: 'آخر الأخبار والرؤى الهندسية',
      subtitle: 'مواكبة مستمرة لأحدث تحديثات كود البناء السعودي، توسعات الأسطول، والمشاريع الاستراتيجية بالمملكة.',
      readArticle: 'قراءة التفاصيل',
      featuredBadge: 'خبر مميز',
      exploreAll: 'استعراض كافة المقالات والأخبار',
    },
    location: {
      badge: 'المقر الميداني والمختبر',
      title: 'الموقع الجغرافي ومركز العمليات',
      subtitle: 'مختبراتنا في جدة مجهزة بأحدث المعدات المعايرة لخدمة كافة مشاريع المنطقة الغربية والمملكة.',
      openInMaps: 'فتح في خرائط Google',
      addressLabel: 'العنوان الرسمي:',
      directCall: 'الاتصال المباشر:',
    },
    rfq: {
      badge: 'الاستجابة الهندسية السريعة',
      title: 'طلب عرض سعر واستشارة جيوتقنية',
      subtitle: 'فريقنا الاستشاري على أتم الجاهزية لدراسة متطلبات مشروعك وتقديم عروض أسعار تفصيلية وجداول زمنية دقيقة.',
      form: {
        fullName: 'الاسم الكريم / ممثل الجهة',
        fullNamePlaceholder: 'م. أحمد الحربي',
        company: 'اسم الشركة أو الجهة المالكة',
        companyPlaceholder: 'شركة التطوير العقاري...',
        phone: 'رقم الهاتف / الجوال',
        phonePlaceholder: '+966 5X XXX XXXX',
        email: 'البريد الإلكتروني المهني',
        emailPlaceholder: 'name@company.com',
        serviceType: 'نوع الخدمة الهندسية المطلوبة',
        selectServicePlaceholder: 'اختر الخدمة المطلوبة...',
        projectLocation: 'موقع المشروع / المدينة',
        projectLocationPlaceholder: 'جدة - أبحر الشمالية',
        notes: 'تفاصيل ونطاق العمل المطلوب',
        notesPlaceholder: 'يرجى توضيح عدد الجسات المطلوبة، مساحة الأرض، أو تفاصيل الفحوصات...',
        submitBtn: 'إرسال طلب التسعير الهندسي',
        submitting: 'جاري الإرسال والتحقق...',
        successTitle: 'تم استلام طلبكم بنجاح!',
        successDesc: 'شكراً لتواصلكم مع CGL. سيقوم فريقنا الهندسي بالاطلاع على تفاصيل المشروع والتواصل معكم خلال 24 ساعة.',
        newRequestBtn: 'إرسال طلب آخر',
      }
    },
    aboutPage: {
      breadcrumbHome: 'العودة إلى الرئيسية',
      affiliation: 'فرع معتمد لمجموعة CGI العالمية (USA & KSA)',
      heroTitle: 'الريادة الجيوتقنية والمعايير العالمية',
      heroSubtitle: 'منظومة متكاملة لاستكشاف التربة، اختبارات المواد، تقييم سلامة المباني والمسح الهندسي وفق كود البناء السعودي والمعايير الدولية.',
      identityBadge: 'الهوية المؤسسية',
      identityTitle: 'Creative Geotechnical Laboratories (CGL)',
      stats: {
        partners: 'شركاء استراتيجيون',
        partnersSub: 'حول العالم والمملكة',
        solutions: 'حلول هندسية مبتكرة',
        solutionsSub: 'لأعقد التحديات الإنشائية',
        experience: 'عاماً من الخبرة والنمو',
        experienceSub: 'مسيرة متواصلة منذ عام 2000',
        branches: 'السعودية وأمريكا',
        branchesSub: 'امتياز CGI العالمي'
      },
      roadmapBadge: 'تاريخ وتطور المؤسسة',
      roadmapTitle: 'مسار التقدم والريادة الهندسية',
      roadmapSub: 'محطات النجاح والتوسع المؤسسي',
      roadmapStage: 'المرحلة',
      roadmapSteps: [
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
      ],
      missionBadge: 'الغاية الهندسية',
      missionTitle: 'رسالتنا المؤسسية',
      missionPillars: [
        'تطبيق أدق معايير الفحص المخبري والحقلي المعتمدة عالمياً ومحلياً.',
        'تقديم حلول هندسية واضحة ومجدية اقتصادياً لكل مشروع.',
        'المسؤولية الكاملة والشفافية في كافة التقارير الفنية الصادرة.'
      ],
      visionBadge: 'الريادة المستقبلية',
      visionTitle: 'رؤيتنا الاستراتيجية',
      valuesBadge: 'المبادئ المهنية',
      valuesTitle: 'ميثاق القيم الهندسية',
      valuesSubtitle: 'المعايير والقيم الراسخة التي تحكم كافة عملياتنا الهندسية والمخبرية',
    },
    projectDetailPage: {
      backBtn: 'العودة إلى دراسات المشاريع',
      sbcBadge: 'معتمد وفق كود البناء السعودي SBC',
      overviewTitle: 'نظرة عامة ونطاق العمل الهندسي',
      approachTitle: 'المنهجية الفنية والمعالجة الهندسية',
      challengesTitle: 'التحديات الجيوتقنية التي تمت معالجتها',
      testsTitle: 'الفحوصات والاختبارات المنفذة',
      equipmentTitle: 'المعدات والأجهزة المتخصصة المستخدمة',
      standardsTitle: 'المعايير والمواصفات المطبقة',
      sidebarTitle: 'طلب استشارة لمشروع مماثل',
      sidebarDesc: 'فريقنا الاستشاري على أتم الجاهزية لتقديم الدعم الفني وتوصيات التأسيس لمشروعك.',
      sidebarCta: 'طلب تسعير للمشروع',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة',
      quickLinks: 'روابط الموقع',
      servicesTitle: 'خدماتنا التخصصية',
      contactTitle: 'بيانات التواصل المباشر',
      sbcNotice: 'جميع الفحوصات والاختبارات متوافقة مع متطلبات كود البناء السعودي SBC 303 & SBC 304 والمعايير الدولية ASTM/ACI.',
      headquarters: 'المركز الرئيسي:',
      jeddahAddress: 'جدة 23215، حي الرويس، المملكة العربية السعودية',
    }
  },
  en: {
    dir: 'ltr',
    lang: 'en',
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      equipment: 'Equipment & Fleet',
      news: 'Latest News',
      rfq: 'Request RFQ',
      contact: 'Contact Us',
      callNow: 'Call Us',
      whatsapp: 'WhatsApp',
      switchLang: 'العربية',
      switchLangTarget: 'ar',
      themeLight: 'Light Mode',
      themeDark: 'Dark Mode',
    },
    hero: {
      affiliation: 'A proud franchise of CGI Group (USA & KSA)',
      ctaRfq: 'Request Instant Proposal',
      ctaServices: 'Explore Engineering Services',
      liveConsultation: 'Direct Advisory',
      sbcCompliance: 'Saudi Building Code Standards SBC 303 • SBC 304',
      slides: [
        {
          id: 1,
          tag: 'Geotechnical & Soil Investigation',
          title: 'The Engineering Precision Anchoring the Kingdom’s Mega Projects',
          subtitle: 'Automated deep drilling, soil bearing capacity evaluation, and foundation recommendations compliant with SBC.',
          metrics: 'Drilling Depths +50m'
        },
        {
          id: 2,
          tag: 'Static Pile Load Testing',
          title: 'Deep Foundation Verification with Test Loads Exceeding 1,000 Tons',
          subtitle: 'Calibrated hydraulic systems and load cells for millimeter settlement analysis per ASTM D1143.',
          metrics: 'Test Loads +1,000 Tons'
        },
        {
          id: 3,
          tag: 'Topographic & Geodetic Survey',
          title: 'High-Precision Digital Surveying & 3D Reality Capture',
          subtitle: 'Advanced electronic total stations and GNSS receivers for axis layout and volume calculations.',
          metrics: '1-Arcsecond Accuracy'
        }
      ],
      stats: {
        partners: { num: 650, label: 'Strategic Partners', sub: 'Global & Across KSA' },
        solutions: { num: 300, label: 'Innovative Solutions', sub: 'For Complex Subsurface Challenges' },
        experience: { num: 20, label: 'Years of Growth', sub: 'Continuous Heritage Since 2000' },
        branches: { num: 2, label: 'International Branches', sub: 'Kingdom of Saudi Arabia & USA' }
      }
    },
    services: {
      badge: 'Operational & Testing Capabilities',
      title: 'Certified Engineering & Laboratory Services',
      subtitle: 'Comprehensive lifecycle coverage from pre-design subsurface exploration to construction quality assurance and materials testing.',
      standardsBadge: 'Applicable Standards:',
      viewDetails: 'Service Details',
      requestPricing: 'Request Pricing',
      viewAll: 'Explore All Specialized Services',
    },
    partners: {
      badge: 'Strategic Clients & Partners',
      title: 'Trusted by Leading Developers & Tier-1 Contractors',
      subtitle: 'Long-standing engineering partnerships with the Kingdom’s premier infrastructure and real estate leaders.',
    },
    projects: {
      badge: 'Track Record & Case Studies',
      title: 'Featured Project Case Studies',
      subtitle: 'Real-world geotechnical exploration, pile load verification, and geodetic surveying in landmark Saudi projects.',
      detailsBtn: 'Project Details',
      allProjects: 'View All Project Studies',
    },
    equipment: {
      badge: 'Technical Fleet & Field Rigs',
      title: 'Engineering Equipment & Laboratory Fleet',
      subtitle: 'Equipped with heavy rotary core rigs, non-destructive testing systems, and calibrated central compression presses.',
      filterAll: 'All Equipment',
      filterDrilling: 'Drilling & Geotechnical',
      filterNdt: 'NDT & Structural Radar',
      filterMaterials: 'Materials Testing Lab',
      filterSurveying: 'Geodetic & Surveying',
      specifications: 'Operational Specifications:',
      standardsLabel: 'Compliant Standards:',
      requestRfq: 'Request Scope Proposal',
    },
    news: {
      badge: 'Technical News & Insights',
      title: 'Latest Engineering News & Updates',
      subtitle: 'Continuous updates on Saudi Building Code compliance, fleet expansion, and nationwide development milestones.',
      readArticle: 'Read Full Story',
      featuredBadge: 'Featured',
      exploreAll: 'Explore All Articles & Updates',
    },
    location: {
      badge: 'Field Headquarters & Testing Lab',
      title: 'Geographic Location & Operational Hub',
      subtitle: 'Our Jeddah facility is equipped with state-of-the-art calibrated instrumentation serving projects across KSA.',
      openInMaps: 'Open in Google Maps',
      addressLabel: 'Official Address:',
      directCall: 'Direct Hotline:',
    },
    rfq: {
      badge: 'Rapid Technical Response',
      title: 'Request a Proposal & Technical Advisory',
      subtitle: 'Our technical advisory team is prepared to evaluate your project specifications and deliver detailed engineering costings.',
      form: {
        fullName: 'Full Name / Representative',
        fullNamePlaceholder: 'Eng. Fahad Al-Otaibi',
        company: 'Company / Organization Name',
        companyPlaceholder: 'Development / Contracting Co.',
        phone: 'Phone / Mobile Number',
        phonePlaceholder: '+966 5X XXX XXXX',
        email: 'Professional Email',
        emailPlaceholder: 'name@company.com',
        serviceType: 'Required Engineering Service',
        selectServicePlaceholder: 'Select required service...',
        projectLocation: 'Project Location / City',
        projectLocationPlaceholder: 'Jeddah - North Obhur',
        notes: 'Project Scope & Requirements',
        notesPlaceholder: 'Please describe the number of boreholes, site area, or testing specifications...',
        submitBtn: 'Submit Proposal Request',
        submitting: 'Submitting & Verifying...',
        successTitle: 'Request Received Successfully!',
        successDesc: 'Thank you for reaching out to CGL. Our engineering team will review your project details and contact you within 24 hours.',
        newRequestBtn: 'Submit Another Request',
      }
    },
    aboutPage: {
      breadcrumbHome: 'Back to Home',
      affiliation: 'A proud franchise of CGI Group (USA & KSA)',
      heroTitle: 'Geotechnical Leadership & Global Standards',
      heroSubtitle: 'An integrated ecosystem for soil exploration, materials testing, structural auditing, and surveying under the Saudi Building Code and international ASTM standards.',
      identityBadge: 'Corporate Identity',
      identityTitle: 'Creative Geotechnical Laboratories (CGL)',
      stats: {
        partners: 'Strategic Partners',
        partnersSub: 'Global & Across KSA',
        solutions: 'Innovative Solutions',
        solutionsSub: 'For Complex Subsurface Challenges',
        experience: 'Years of Growth',
        experienceSub: 'Continuous Heritage Since 2000',
        branches: 'KSA & USA',
        branchesSub: 'CGI Global Franchise'
      },
      roadmapBadge: 'Corporate Evolution',
      roadmapTitle: 'Milestones of Growth & Engineering Leadership',
      roadmapSub: 'Institutional Development & Fleet Expansion',
      roadmapStage: 'Stage',
      roadmapSteps: [
        {
          year: '2000',
          title: 'Establishment & Launch',
          desc: 'Founded in Jeddah as an authorized franchise of CGI Group, providing certified soil investigation and construction materials testing.'
        },
        {
          year: '2010',
          title: 'Technological & Field Expansion',
          desc: 'Introduced automated drilling rigs, ground-penetrating radar (GPR), and expanded our non-destructive testing (NDT) fleet.'
        },
        {
          year: '2018',
          title: 'Building Code Compliance & Landmark Projects',
          desc: 'Full alignment with Saudi Building Code requirements (SBC 303/304) and participation in vital national infrastructure.'
        },
        {
          year: '2024+',
          title: 'Vision 2030 Mega Developments',
          desc: 'Certified geotechnical partner for major giga-project developers and Tier-1 contractors shaping the Kingdom’s future.'
        }
      ],
      missionBadge: 'Engineering Purpose',
      missionTitle: 'Corporate Mission',
      missionPillars: [
        'Upholding the highest international and Saudi testing standards.',
        'Delivering clear, economically sound engineering solutions for every project.',
        'Total accountability, impartiality, and transparency in all published technical reports.'
      ],
      visionBadge: 'Future Leadership',
      visionTitle: 'Strategic Vision',
      valuesBadge: 'Professional Principles',
      valuesTitle: 'Charter of Engineering Values',
      valuesSubtitle: 'Core values governing every field, laboratory, and advisory operation',
    },
    projectDetailPage: {
      backBtn: 'Back to Case Studies',
      sbcBadge: 'Compliant with Saudi Building Code SBC',
      overviewTitle: 'Project Overview & Scope of Work',
      approachTitle: 'Engineering Methodology & Execution',
      challengesTitle: 'Geotechnical Challenges Solved',
      testsTitle: 'Tests & Laboratory Procedures Performed',
      equipmentTitle: 'Specialized Equipment & Fleet Deployed',
      standardsTitle: 'Governing Standards & Codes',
      sidebarTitle: 'Need a Similar Technical Study?',
      sidebarDesc: 'Our geotechnical consultants are prepared to provide foundation recommendations and soil testing for your project.',
      sidebarCta: 'Request Project Proposal',
    },
    footer: {
      rights: 'All rights reserved',
      quickLinks: 'Navigation',
      servicesTitle: 'Specialized Services',
      contactTitle: 'Direct Contact',
      sbcNotice: 'All field and laboratory testing strictly complies with the Saudi Building Code (SBC 303 / SBC 304) and ASTM / ACI standards.',
      headquarters: 'Headquarters:',
      jeddahAddress: '23215 Al-Ruwais, Jeddah, Kingdom of Saudi Arabia',
    }
  }
};

export function getDictionary(lang: Locale) {
  return dictionaries[lang] || dictionaries.ar;
}
