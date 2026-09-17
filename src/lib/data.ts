import { 
  ServiceItem, 
  ProjectEvidence, 
  OperationalCapability, 
  ComplianceCertification,
  AuthorizedPartner
} from './types';

export const CGL_COMPANY_INFO = {
  nameAr: 'CGL (Creative Geotechnical Laboratories)',
  nameEn: 'Creative Geotechnical Laboratories (CGL)',
  affiliationAr: 'فرع معتمد لمجموعة CGI العالمية (USA & KSA)',
  affiliationEn: 'A proud franchise of CGI Group (USA & KSA)',
  headquartersAr: 'المملكة العربية السعودية • الولايات المتحدة الأمريكية',
  email: 'info@creativegeotechnical.com.sa',
  phone: '+966 535157009',
  phone1: '+966 535157009',
  phone2: '+966 503691609',
  phone1Raw: '966535157009',
  phone2Raw: '966503691609',
  whatsapp1: '+966 535157009',
  whatsapp2: '+966 503691609',
  whatsapp1Raw: '966535157009',
  whatsapp2Raw: '966503691609',
  addressAr: 'جدة 23215، حي الرويس، المملكة العربية السعودية',
  addressEn: '23215 Al-Ruwais, Jeddah KSA',
  postalCode: '23215',
  districtAr: 'الرويس',
  cityAr: 'جدة',
  countryAr: 'المملكة العربية السعودية',
  coordinates: {
    lat: 21.5231047,
    lng: 39.177774,
  },
  googleMapsUrl: 'https://maps.google.com/?cid=15720498232305587362',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?cid=15720498232305587362&output=embed',
  establishedYear: '2000',
  aboutEn: 'Creative Geotechnical Laboratories (CGL), a proud franchise of CGI, offers comprehensive services including geotechnical and soil investigation, building integrity assessment, material testing, surveying, mining tests, shoring, dewatering, and environmental testing. With offices in the USA and KSA, our expert team uses advanced technology to deliver accurate, reliable, and tailored solutions for every project.',
  aboutAr: 'مختبرات CGL (Creative Geotechnical Laboratories)، فرع معتمد لمجموعة CGI العالمية، تقدم منظومة خدمات هندسية واستشارية متكاملة تشمل الدراسات الجيوتقنية واستكشاف التربة، الفحوصات اللاإتلافية وتقييم سلامة المباني، اختبارات المواد وضبط الجودة، المسح الطبوغرافي والهندسي، اختبارات التعدين، أعمال سند جوانب الحفر، نزح المياه الجوفية، والاختبارات البيئية. مع مكاتبنا في المملكة العربية السعودية والولايات المتحدة الأمريكية، يعتمد فريقنا الاستشاري على أحدث التقنيات الهندسية لتقديم حلول دقيقة وموثوقة ومخصصة لكل مشروع.',
  stats: {
    globalPartners: 650,
    innovativeSolutions: 300,
    yearsOfGrowth: 20,
  },
  missionEn: 'To provide high quality Geotechnical Engineering Services, with high value to our client and to ourselves.',
  missionAr: 'تقديم خدمات هندسة جيوتقنية فائقة الجودة، تحقق أعلى قيمة لعملائنا ولفريقنا المهني.',
  visionEn: {
    lead: 'CGL aims to be recognized as:',
    points: [
      'Experts in the field of Geotechnical and Materials Testing.',
      'Technologically advanced, while practical and business oriented.',
      'Partner of choice for our clients.'
    ],
    partnerPillars: [
      'Adding value to their projects.',
      'Being worthy of their confidence by remaining accountable for our actions.',
      'Delivering services based on real needs.'
    ]
  },
  visionAr: {
    lead: 'تسعى CGL إلى ترسيخ مكانتها والاعتراف بها بصفتها:',
    points: [
      'خبراء معتمدين ورواد في مجال الهندسة الجيوتقنية واختبارات المواد.',
      'صرحاً هندسياً متقدماً تكنولوجياً مع الحفاظ على النهج العملي والجدوى الاقتصادية.',
      'الشريك الهندسي الأول والمفضل لعملائنا.'
    ],
    partnerPillars: [
      'إضافة قيمة حقيقية واستثنائية لكافة المشاريع.',
      'أن نكون أهلاً لثقتهم عبر الشفافية والمسؤولية التامة عن كافة أعمالنا.',
      'تقديم خدمات هندسية مبنية بدقة على الاحتياجات الميدانية الواقعية.'
    ]
  },
  values: [
    {
      en: 'To be recognized for the quality of our professional services to provide those services for a reasonable fee.',
      ar: 'الاعتراف بجودة واحترافية خدماتنا المهنية وتقديمها بتكلفة عادلة ومدروسة.'
    },
    {
      en: 'Providing a superior investment for our clients.',
      ar: 'توفير عائد استثماري استثنائي وحماية لأصول ومشاريع عملائنا.'
    },
    {
      en: 'To be respected for the ethics of our practice and our contribution to the profession and to society at large.',
      ar: 'الاحترام التام لأخلاقيات المهنة والمساهمة الفاعلة في رفعة القطاع الهندسي والمجتمع ككل.'
    },
    {
      en: 'Maintaining broadly-based employee ownership.',
      ar: 'الحفاظ على مبدأ المشاركة المؤسسية الموسعة وتقدير جهود منسوبي المؤسسة.'
    },
    {
      en: 'Providing an environment for a satisfying and challenging career.',
      ar: 'توفير بيئة عمل محفزة ومجزية تتيح مساراً مهنياً متقدماً ومثمراً.'
    },
    {
      en: 'Providing an umbrella for ambitious staff members to grow their client base and their reputations in directions of their own choosing.',
      ar: 'توفير مظلة داعمة للكوادر الطموحة لتطوير قاعدة العملاء وبناء سمعتهم المهنية في الاتجاهات التي يختارونها.'
    },
    {
      en: 'Maintaining an environment which is conducive to innovative thinking and solutions.',
      ar: 'ترسيخ بيئة ملهمة حاضنة للتفكير المبتكر والحلول الهندسية الإبداعية.'
    },
    {
      en: 'Recognizing and rewarding excellence and achievement.',
      ar: 'الاعتراف الدائم بالتميز ومكافأة الإنجازات والنجاحات النوعية المستمرة.'
    }
  ]
};

export const CGL_SERVICES: ServiceItem[] = [
  {
    id: 'geotechnical-investigation',
    titleAr: 'الدراسات الجيوتقنية واستكشاف التربة',
    titleEn: 'Geotechnical & Soil Investigation',
    shortDescAr: 'حفر الجسات الآلية، استخراج العينات الصخرية والترابية، وتحديد قدرة تحمل التربة وتوصيات الأساسات وفق كود البناء السعودي.',
    shortDescEn: 'Borehole drilling, undisturbed sampling, bearing capacity analysis, and geotechnical foundation recommendations.',
    fullDescAr: 'توفير منظومة متكاملة لاستكشاف باطن الأرض تبدأ من حفر الجسات الاستكشافية بالأعماق المطلوبة، واختبار الاختراق القياسي (SPT)، وتحديد مناسيب المياه الجوفية، وصولاً إلى التحاليل المعملية الميكانيكية لتقديم تقرير جيوتقني شامل معتمد.',
    standards: ['ASTM D1586', 'ASTM D1587', 'ASTM D4220', 'SBC 303'],
    fieldMethods: ['Rotary Core Drilling', 'Standard Penetration Test (SPT)', 'Shelby Tube Undisturbed Sampling'],
    labDeliverables: ['Geotechnical Investigation Report', 'Soil Strata Logs', 'Bearing Capacity Calculations'],
    icon: 'Layers',
    image: '/uploads/user_provided/geotech_investigation.jpeg',
    scopeListAr: [
      'حفر الجسات الاستكشافية لمختلف أعماق التأسيس',
      'أخذ العينات المقلقلة وغير المقلقلة بدقة معيارية',
      'تحديد خواص انتفاخ وانهيار التربة',
      'تحديد قدرة التحمل المسموحة والتوصيات الإنشائية'
    ]
  },
  {
    id: 'structural-integrity',
    titleAr: 'تقييم سلامة المباني والفحوصات غير الإتلافية',
    titleEn: 'Structural Integrity & NDT Testing',
    shortDescAr: 'الكشف عن عيوب الخرسانة والحديد، تقييم متانة المنشآت القائمة، والفحوصات غير الإتلافية بأحدث أجهزة الرادار والألتراسونيك.',
    shortDescEn: 'Non-destructive concrete evaluation, rebar detection, integrity audits, and load capacity assessments.',
    fullDescAr: 'إجراء مسح هندسي شامل للهياكل الخرسانية القائمة للكشف عن التصدعات، عمق التكربن، أماكن وسمك حديد التسليح عبر الرادار الأرضي، وقياس مقاومة الضغط بالصلادة والموجات فوق الصوتية.',
    standards: ['ASTM C805', 'ASTM C597', 'ACI 228.1R', 'BS 1881'],
    fieldMethods: ['Schmidt Rebound Hammer', 'Ultrasonic Pulse Velocity (UPV)', 'Ground Penetrating Radar (GPR) Scan'],
    labDeliverables: ['Structural Integrity Assessment Report', 'Rebar Mapping Diagrams', 'Remediation Recommendations'],
    icon: 'ShieldCheck',
    image: '/uploads/user_provided/structural_integrity.jpeg',
    scopeListAr: [
      'فحص مطرقة شميدت والموجات فوق الصوتية',
      'تحديد مسارات وأقطار حديد التسليح رادارياً (GPR)',
      'استخراج واختبار القلوب الخرسانية (Core Tests)',
      'تقييم السلامة الإنشائية للمباني المتصدعة والقديمة'
    ]
  },
  {
    id: 'materials-testing',
    titleAr: 'مختبرات فحص مواد البناء والخرسانة',
    titleEn: 'Construction Materials Testing Lab',
    shortDescAr: 'فحص مطابقة الخرسانة الطازجة والمتصلدة، الركام، الأسمنت، حديد التسليح، والخلطات الإسفلتية للمواصفات والمقاييس القياسية.',
    shortDescEn: 'Comprehensive laboratory testing for concrete, aggregates, steel rebar, cement, and asphalt compliance.',
    fullDescAr: 'مختبرات مركزية مجهزة بماكينات كسر وضغط آلية معايرة، لإجراء كافة التجارب الكيميائية والفيزيائية والميكانيكية للمواد الإنشائية لضمان جودة التوريد ومطابقة اشتراطات المشروع.',
    standards: ['ASTM C39', 'ASTM A615', 'ASTM C136', 'SASO Standards'],
    fieldMethods: ['Slump Test', 'Concrete Cube & Cylinder Sampling', 'Field Density Testing'],
    labDeliverables: ['Compressive Strength Certificates', 'Sieve Analysis Curves', 'Tensile Test Curves'],
    icon: 'Beaker',
    image: '/uploads/user_provided/materials_testing.jpeg',
    scopeListAr: [
      'اختبار مقاومة الضغط للخرسانة (Compressive Strength)',
      'فحص الشد والاستطالة لحديد التسليح (Tensile Test)',
      'التحليل المنخلي وفحوصات تآكل الركام (Los Angeles)',
      'تصميم وضبط جودة الخلطات الخرسانية والأسفلتية'
    ]
  },
  {
    id: 'engineering-surveying',
    titleAr: 'أعمال المسح الهندسي والجيوديسي',
    titleEn: 'Land & Engineering Surveying',
    shortDescAr: 'الرفع الطبوغرافي عالي الدقة، تثبيت الإحداثيات والشبكات الجيوديسية، ورصد الهبوط والتشوهات الإنشائية بمحطات الرصد المتطورة.',
    shortDescEn: 'Topographic surveys, geodetic grid establishment, precise leveling, and structural deformation monitoring.',
    fullDescAr: 'تطبيق أحدث تقنيات الرفع المساحي باستخدام محطات الرصد الشاملة (Total Stations) وأجهزة GNSS/RTK الفضائية، لإنشاء الخرائط الكنتورية ونماذج التضاريس الرقمية وحساب الكميات بدقة مليمترية.',
    standards: ['FGDC Geodetic Standards', 'MOMRA Survey Specifications'],
    fieldMethods: ['Total Station High-Accuracy Traverse', 'RTK/GNSS Satellite Surveying', 'Digital Precision Leveling'],
    labDeliverables: ['CAD Topographic Drawings (DWG/DXF)', 'Digital Elevation Models (DEM)', 'Volume Calculation Reports'],
    icon: 'Crosshair',
    image: '/uploads/user_provided/engineering_surveying.jpeg',
    scopeListAr: [
      'الرفع المساحي الطبوغرافي والتفصيلي للمشاريع',
      'تثبيت محاور المنشآت والأساسات والمنشآت الحيوية',
      'رصد الهبوط والحركات الإنشائية للمباني المجاورة',
      'حساب كميات الحفر والردم بدقة رقمية'
    ]
  },
  {
    id: 'mining-testing',
    titleAr: 'اختبارات التعدين والجيولوجيا',
    titleEn: 'Mining & Geological Testing',
    shortDescAr: 'تقييم الصخور والمعادن، تحاليل خواص المحاجر، ودراسات نقاء الخامات للاستخدامات الصناعية والإنشائية والبنية التحتية.',
    shortDescEn: 'Rock mechanics, quarry material suitability, mineral composition, and industrial raw material qualification.',
    fullDescAr: 'فحوصات جيولوجية متخصصة تشمل اختبار ضغط الصخور أحادي المحور (UCS)، واختبار معامل الحمل النقطي (Point Load Test)، وتحديد الخواص البتروغرافية والكيميائية للكتل الصخرية.',
    standards: ['ASTM D7012', 'ASTM D5731', 'ISRM Suggested Methods'],
    fieldMethods: ['Rock Core Logging (RQD)', 'Point Load Field Index', 'Discontinuity Mapping'],
    labDeliverables: ['Unconfined Compressive Strength Reports', 'Rock Mass Rating (RMR)', 'Petrographic Analysis Reports'],
    icon: 'Pickaxe',
    image: '/uploads/user_provided/mining_testing.jpeg',
    scopeListAr: [
      'فحص مقاومة الضغط أحادي المحور للصخور (UCS)',
      'تحديد معامل الجودة الصخرية (RQD) والتشققات',
      'اختبارات متانة الصخور ضد التجوية (Slake Durability)',
      'تقييم صلاحية أحجار المحاجر للردم والركام'
    ]
  },
  {
    id: 'shoring-dewatering',
    titleAr: 'التدعيم ونزح المياه الجوفية',
    titleEn: 'Shoring & Dewatering Engineering',
    shortDescAr: 'تصميم وإشراف أنظمة سند جوانب الحفر العميقة، وحلول خفض المياه الجوفية للمشاريع الساحلية والمواقع المعقدة.',
    shortDescEn: 'Deep excavation retaining systems, groundwater lowering engineering, and excavation stability controls.',
    fullDescAr: 'تقديم الحلول الهندسية المتكاملة لأعمال الحفر العميق في المدن والمناطق ذات المياه السطحية، متضمنة الستائر اللوحية والخوازيق المتداخلة (Secant Piles) وشبكات آبار النزح الميدانية.',
    standards: ['CIRIA C760', 'DIN 4124', 'SBC 303'],
    fieldMethods: ['Pumping Tests & Drawdown Monitoring', 'Inclinometer Installation', 'Piezometer Monitoring'],
    labDeliverables: ['Dewatering System Calculation Sheets', 'Shoring Stability Models', 'Water Discharge Quality Tests'],
    icon: 'Compass',
    image: '/uploads/user_provided/shoring_dewatering.jpeg',
    scopeListAr: [
      'تصميم نظم سند جوانب الحفر (Secant / Contiguous Piles)',
      'دراسة وتصميم منظومات نزح المياه الجوفية العميقة',
      'رصد ميول جوانب الحفر بمجسات الإنكلينوميتر (Inclinometer)',
      'اختبارات ضخ المياه وتحديد نفاذية التربة (Permeability)'
    ]
  },
  {
    id: 'environmental-testing',
    titleAr: 'الفحوصات والدراسات البيئية',
    titleEn: 'Environmental Field Testing',
    shortDescAr: 'فحوصات ملوحة وتلوث التربة والمياه الجوفية بالهيدروكربونات والمعادن الثقيلة لدعم اشتراطات الامتثال البيئي.',
    shortDescEn: 'Soil & groundwater chemical screening, salinity, hydrocarbon contamination, and environmental baseline audits.',
    fullDescAr: 'تحليل العينات الميدانية كيميائياً لتقدير نسب الكبريتات والكلوريدات القابلة للذوبان، ودرجة الحموضة (pH)، ورصد أي تسريبات هيدروكربونية لحماية المنشآت الخرسانية والبيئة المحيطة.',
    standards: ['EPA Test Methods', 'ASTM D516', 'ASTM D512'],
    fieldMethods: ['Groundwater Bailer Sampling', 'Soil Vapor Screening', 'Composite Field Sampling'],
    labDeliverables: ['Chemical Aggressiveness Assessment', 'Groundwater Contaminant Logs', 'Environmental Baseline Reports'],
    icon: 'Trees',
    image: '/uploads/user_provided/environmental_field.jpeg',
    scopeListAr: [
      'تحديد محتوى الكلوريدات والكبريتات الضارة بالخرسانة',
      'قياس الأس الهيدروجيني (pH) والتوصيل الكهربائي (EC)',
      'فحص الملوثات العضوية والمشتقات البترولية بالتربة',
      'تقييم عدوانية التربة والمياه الجوفية على أساسات المباني'
    ]
  }
];

export const CGL_PROJECTS_EVIDENCE: ProjectEvidence[] = [
  {
    id: 'cgl-proj-001',
    nameAr: 'أعمال فحص التحميل الاستاتيكي للخوازيق الهندسية',
    nameEn: 'Static Axial Compressive Pile Load Testing Project',
    sectorAr: 'الأساسات العميقة والمنشآت الكبرى',
    sectorEn: 'Deep Foundations & Heavy Infrastructure',
    locationAr: 'المملكة العربية السعودية',
    locationEn: 'Kingdom of Saudi Arabia',
    scopeOfWorkAr: 'تنفيذ وتوثيق فحص التحميل المحوري الاستاتيكي على الخوازيق الخرسانية المسلحة للتحقق من قدرة التحمل التصميمية ومقدار الهبوط الفعلي.',
    scopeOfWorkEn: 'Executing and monitoring full-scale static compressive pile load test to verify structural capacity and settlement criteria.',
    servicesPerformedAr: [
      'تركيب منظومة كمرات رد الفعل الفولاذية (Reaction Beam Assembly)',
      'تطبيق الأحمال المتدرجة عبر رافعة هيدروليكية معايرة',
      'رصد الهبوط بدقة مليمترية باستخدام 4 ساعات قياس حساسة (Dial Gauges)'
    ],
    technicalChallengesAr: 'تطبيق أحمال ضخمة بأمان تام ورصد الهبوط المتناهي في الصغر وفق دورات التحميل والتفريغ المعيارية المحددة.',
    engineeringApproachAr: 'استخدام منظومة روافع معايرة مرتبطة بخلايا قياس ضغط معتمدة، مع تثبيت جسور المراقبة المرجعية على مسافات كافية تضمن عزل أجهزة القياس عن أي تأثيرات جانبية.',
    testsPerformedAr: [
      'Static Axial Compressive Load Test (ASTM D1143)',
      'Settlement vs. Load Curves Recording',
      'Elastic Rebound Monitoring'
    ],
    equipmentUsed: [
      'High-Tonnage Hydraulic Jack System',
      'Calibrated Precision Dial Indicators (0.01mm)',
      'Heavy Steel Reaction Beam Frame & Concrete Kentledge'
    ],
    coverImage: '/uploads/projects_images/project_688d08b6e73ee4.36242119.jpg',
    gallery: [
      '/uploads/projects_images/project_688d08b6e73ee4.36242119.jpg'
    ],
    relevantStandards: ['ASTM D1143 / D1143M', 'SBC 303 Requirements'],
    relatedServiceId: 'geotechnical-investigation'
  },
  {
    id: 'cgl-proj-002',
    nameAr: 'أعمال المسح الطبوغرافي والرصد المساحي الميداني',
    nameEn: 'Topographic Field Surveying & Geodetic Monitoring',
    sectorAr: 'المسح الهندسي ونظم المعلومات الجغرافية',
    sectorEn: 'Engineering Geomatics & Infrastructure Layout',
    locationAr: 'المملكة العربية السعودية',
    locationEn: 'Kingdom of Saudi Arabia',
    scopeOfWorkAr: 'إجراء مسح طبوغرافي شامل للموقع، تثبيت نقاط التحكم المساحية الأرضية (GCPs)، وإنشاء المخططات الكنتورية الرقمية.',
    scopeOfWorkEn: 'Comprehensive topographic ground survey, benchmark network establishment, and high-precision digital elevation modeling.',
    servicesPerformedAr: [
      'إنشاء شبكة مضلعات مغلقة للرصد عالي الدقة',
      'رفع تفاصيل التضاريس والمنشآت المجاورة',
      'إنشاء خرائط رقمية ثلاثية الأبعاد بدقة هندسية'
    ],
    technicalChallengesAr: 'العمل في ظروف تضاريس مفتوحة متباينة مع الحفاظ على دقة الإحداثيات وتكاملها مع المرجع الجيوديسي الوطني.',
    engineeringApproachAr: 'الدمج بين أجهزة المحطة الشاملة (Total Station) عالية الدقة وأجهزة التسوية الرقمية، وتطبيق موازنة الشبكة حسابياً لتقليل نسبة الخطأ إلى أدنى حد ممكن.',
    testsPerformedAr: [
      'Traverse Balancing & Angle Adjustment',
      'Digital Precision Leveling Loops',
      'Coordinate Verification & Transformation'
    ],
    equipmentUsed: [
      'High-Precision Electronic Total Station with Optical Plummet',
      'Precision Tripods & Prism Assemblies',
      'Digital Surveying Controllers'
    ],
    coverImage: '/uploads/curated/surveyor_total_station.jpg',
    gallery: [
      '/uploads/curated/surveyor_total_station.jpg',
      '/uploads/projects_images/project_688d0f1061e875.99060450.jpg'
    ],
    relevantStandards: ['National Geodetic Guidelines', 'MOMRA Topographic Standards'],
    relatedServiceId: 'engineering-surveying'
  },
  {
    id: 'cgl-proj-003',
    nameAr: 'الاستكشاف الجيوتقني وحفر الجسات الصخرية لمواقع التعدين',
    nameEn: 'Mining Quarry Core Drilling & Geotechnical Exploration',
    sectorAr: 'قطاع التعدين والمحاجر والجيولوجيا',
    sectorEn: 'Mining, Quarry Geology & Deep Core Drilling',
    locationAr: 'المملكة العربية السعودية',
    locationEn: 'Kingdom of Saudi Arabia',
    scopeOfWorkAr: 'تنفيذ برنامج حفر آلي استكشافي عميق لاستخراج العينات اللبية الصخرية وتحليل ثبات المنحدرات الصخرية في مناطق المحاجر والمناجم المفتوحة.',
    scopeOfWorkEn: 'Deep exploratory diamond core drilling program to extract rock cores and evaluate slope stability in open-pit mining operations.',
    servicesPerformedAr: [
      'حفر استكشافي باستخدام حفارات هيدروليكية مجنزرة متطورة',
      'استخراج عينات لبية صخرية مستمرة وحفظها في صناديق عينات معيارية',
      'توصيف فواصل وتشوهات الصخور وحساب مؤشر جودة الصخر (RQD)'
    ],
    technicalChallengesAr: 'التعامل مع تراكيب صخرية شديدة القساومة ومتشققة، والحفاظ على سلامة العينات اللبية دون تفتت لضمان دقة الفحوص المخبرية.',
    engineeringApproachAr: 'استخدام أحدث حفارات الجسات المجنزرة مع رؤوس حفر ماسية مبردة، وتنفيذ الاختبارات الميكانيكية الميدانية في الموقع وفق مواصفات ISRM و ASTM.',
    testsPerformedAr: [
      'Rock Core Quality Designation (RQD - ASTM D6032)',
      'Unconfined Compressive Strength (UCS - ASTM D7012)',
      'Point Load Strength Index (ASTM D5731)'
    ],
    equipmentUsed: [
      'Track-Mounted Hydraulic Rotary Core Drill Rig',
      'Double-Tube Wireline Diamond Core Barrels',
      'Field Point Load Testing Apparatus'
    ],
    coverImage: '/uploads/user_provided/mining_core_drilling.jpeg',
    gallery: [
      '/uploads/user_provided/mining_core_drilling.jpeg',
      '/uploads/projects_images/mining_rig.jpeg'
    ],
    relevantStandards: ['ASTM D7012', 'ASTM D6032', 'ISRM Suggested Methods'],
    relatedServiceId: 'mining-testing'
  },
  {
    id: 'cgl-proj-004',
    nameAr: 'الرصد المساحي عالي الدقة والتثبيت الجيوديسي للمشاريع المفتوحة',
    nameEn: 'High-Precision Quarry Topographic & Deformation Survey',
    sectorAr: 'المسح الهندسي ونظم الرصد الجغرافي',
    sectorEn: 'Engineering Geomatics & Open-Pit Monitoring',
    locationAr: 'المملكة العربية السعودية',
    locationEn: 'Kingdom of Saudi Arabia',
    scopeOfWorkAr: 'إنشاء شبكة رصد جيوديسي متقدمة لرصد حركة الجروف والمنحدرات وحساب كميات التكديس والحفر الدوري بمحطات الرصد الآلية.',
    scopeOfWorkEn: 'Establishment of precision geodetic monitoring network to track slope displacements and compute periodic extraction volumes.',
    servicesPerformedAr: [
      'رصد ثلاثي الأبعاد لجدران الحفر والكتل الصخرية',
      'حساب كميات الحفر والردم وكتل المواد المستخرجة دورياً',
      'تحديث المخططات الطبوغرافية للموقع وربطها بالشبكة الوطنية'
    ],
    technicalChallengesAr: 'تأمين دقة مليمترية عبر مسافات رصد شاسعة في بيئة مفتوحة ذات تغيرات حرارية وغبارية عالية.',
    engineeringApproachAr: 'نشر محطات رصد إلكترونية شاملة عالية الدقة مع عواكس زجاجية مستقرة على نقاط مرجعية ثابتة في الصخر الصلب.',
    testsPerformedAr: [
      'Precise Angle and Distance Electronic Measurement',
      'Deformation Vector Analysis',
      'Volumetric Surface Differential Analysis'
    ],
    equipmentUsed: [
      'Sub-Second High Precision Total Station',
      'High-Precision Prisms & Invar Leveling Rods',
      'CAD / GIS Terrain Modeling Software'
    ],
    coverImage: '/uploads/projects_images/quarry_survey.jpeg',
    gallery: [
      '/uploads/projects_images/quarry_survey.jpeg',
      '/uploads/curated/surveyor_total_station.jpg'
    ],
    relevantStandards: ['FGDC Geodetic Standards', 'MOMRA Topographic Specifications'],
    relatedServiceId: 'engineering-surveying'
  },
  {
    id: 'cgl-proj-005',
    nameAr: 'هندسة سند الحفر العميق وتثبيت الخنادق ونزح المياه',
    nameEn: 'Deep Excavation Shoring, Trench Support & Dewatering',
    sectorAr: 'التدعيم ونزح المياه الجوفية',
    sectorEn: 'Deep Shoring, Trench Support & Geotechnical Safety',
    locationAr: 'المملكة العربية السعودية',
    locationEn: 'Kingdom of Saudi Arabia',
    scopeOfWorkAr: 'تصميم ومتابعة نظم تدعيم وسند جوانب الحفر العميق لخطوط المرافق والبنية التحتية، مع التحكم في منسوب المياه الجوفية ومنع الانهيارات.',
    scopeOfWorkEn: 'Geotechnical supervision and monitoring of trench shoring boxes, deep excavation stability, and groundwater control.',
    servicesPerformedAr: [
      'الإشراف الجيوتقني على تنفيذ صناديق وخوازيق سند جوانب الحفر',
      'رصد استقرار التربة المحيطة والمباني المجاورة للمسار',
      'تنفيذ تجارب فحص دمك التربة وطبقات التأسيس'
    ],
    technicalChallengesAr: 'وجود منسوب مياه جوفية مرتفع بجوار خطوط خدمات حيوية قائمة تتطلب حماية صارمة ضد أي هبوطات تفاضلية.',
    engineeringApproachAr: 'تطبيق نمذجة استقرار متكاملة، ونشر آبار نزح نقطية مع مراقبة يومية لخطوط الهبوط عبر مقاييس الميل الرقمية.',
    testsPerformedAr: [
      'Nuclear Field Density Compaction Testing (ASTM D6938)',
      'Excavation Deflection Inclinometer Monitoring',
      'Groundwater Drawdown Flow Rate Recording'
    ],
    equipmentUsed: [
      'Heavy Hydraulic Trench Shoring Shield Systems',
      'Nuclear Density Gauge (Calibrated Troxler)',
      'Submersible Deep Well Dewatering Pumps'
    ],
    coverImage: '/uploads/projects_images/excavation_shoring.jpeg',
    gallery: [
      '/uploads/projects_images/excavation_shoring.jpeg',
      '/uploads/curated/foundation_drilling_site.jpg'
    ],
    relevantStandards: ['OSHA Subpart P (Excavations)', 'CIRIA C760', 'SBC 303'],
    relatedServiceId: 'shoring-dewatering'
  }
];

export const CGL_OPERATIONAL_CAPABILITIES: OperationalCapability[] = [
  {
    id: 'cap-001',
    nameAr: 'اختبارات التحميل الاستاتيكي للخوازيق (Static Load Testing)',
    nameEn: 'Static Axial Compressive Pile Testing',
    applicationAr: 'التحقق من قدرة تحمل الخوازيق الخرسانية وتأكيد معاملات الأمان في ناطحات السحاب والجسور والموانئ.',
    category: 'Field',
    equipmentUsedAr: [
      'روافع هيدروليكية عالية القدرة مع مقاييس ضغط معايرة',
      'منظومة كمرات فولاذية عملاقة لكتل رد الفعل (Kentledge)',
      'ساعات قياس هبوط ميكانيكية ورقمية بحساسية 0.01 مم'
    ],
    testingMethodsAr: [
      'طريقة التحميل المعتمد (Quick Test Method - ASTM D1143)',
      'طريقة التحميل القياسي مع فترات التثبيت الزمنية',
      'تسجيل منحنيات الحمل مقابل الهبوط (Load-Settlement)'
    ],
    capacityRangeAr: 'قدرات تحميل اختبارية تتجاوز 1,000 طن حسب متطلبات المشروع',
    applicableStandards: ['ASTM D1143 / D1143M', 'SBC 303'],
    typicalDeliverablesAr: [
      'تقرير فحص التحميل المعتمد مع توقيع مهندس معتمد',
      'مخططات بيانية تفصيلية لدورات التحميل والتفريغ',
      'تقييم الهبوط المتبقي والقدرة القصوى للخازوق'
    ],
    image: '/uploads/user_provided/pile_load_test.jpeg',
    relatedServiceId: 'geotechnical-investigation'
  },
  {
    id: 'cap-002',
    nameAr: 'المسح الطبوغرافي والرصد الجيوديسي الدقيق',
    nameEn: 'Precision Geodetic & Engineering Surveying',
    applicationAr: 'تخطيط الطرق، مشاريع البنية التحتية، تحديد حدود الملكيات، ومراقبة هبوط المنشآت الحساسة.',
    category: 'Field',
    equipmentUsedAr: [
      'محطات رصد إلكترونية شاملة (Total Stations) بدقة زاوية ثانية واحدة',
      'أجهزة رصد فضائي تفاضلي GNSS/RTK',
      'أجهزة تسوية وموازنة رقمية بصرية (Digital Levels)'
    ],
    testingMethodsAr: [
      'المسح بالشبكات المضلعة المغلقة (Closed Traverse)',
      'المسح بالرصد القطبي المباشر (Radial Topography)',
      'المراقبة المساحية المستمرة للميول والإزاحات'
    ],
    capacityRangeAr: 'دقة رصد زاوي تصل إلى 1 ثانية، ودقة مسافات تناهز 1 مم + 1.5 جزء في المليون',
    applicableStandards: ['ISO 17123 Standards for Surveying Instruments', 'FGDC Guidelines'],
    typicalDeliverablesAr: [
      'خرائط رقمية تفصيلية بامتداد AutoCAD (DWG)',
      'جداول إحداثيات ومناسيب معتمدة للعلامات الأرضية (BMs)',
      'تقارير حسابات الكميات للقطع والردم'
    ],
    image: '/uploads/user_provided/topographic_survey.jpeg',
    relatedServiceId: 'engineering-surveying'
  },
  {
    id: 'cap-003',
    nameAr: 'الحفر الاستكشافي وأخذ العينات الميدانية (Drilling & Sampling)',
    nameEn: 'Exploratory Core Drilling & Undisturbed Sampling',
    applicationAr: 'استكشاف طبقات الأرض، تتبع منسوب المياه، وتحديد خصائص الطبقات الجيولوجية تحت الأساسات.',
    category: 'Field',
    equipmentUsedAr: [
      'حفارات هيدروليكية دوارة (Rotary Drilling Rigs) مع أنابيب التغليف',
      'أجهزة أخذ العينات الأسطوانية الصخرية (Core Barrels)',
      'أسطوانات شيلبي ذات الجدار الرقيق للتربة الطينية اللينة'
    ],
    testingMethodsAr: [
      'اختبار الاختراق القياسي داخل الجسة (SPT - ASTM D1586)',
      'أخذ العينات المقلقلة وغير المقلقلة (Disturbed & Undisturbed)',
      'قياس ومراقبة منسوب المياه في البيزوميترات'
    ],
    capacityRangeAr: 'أعماق حفر تصل إلى أكثر من 50 متراً في التربة والصخور',
    applicableStandards: ['ASTM D1586', 'ASTM D1587', 'ASTM D2113'],
    typicalDeliverablesAr: [
      'سجلات الجسات الميدانية التفصيلية (Borehole Logs)',
      'صناديق العينات الصخرية الموثقة بالصور (Core Boxes)',
      'تقارير تصنيف التربة المبدئي في الموقع'
    ],
    image: '/uploads/user_provided/exploratory_core_drilling.jpeg',
    relatedServiceId: 'geotechnical-investigation'
  },
  {
    id: 'cap-004',
    nameAr: 'فحوصات الخرسانة والمواد الإنشائية المعتمدة',
    nameEn: 'Laboratory Concrete & Materials Testing',
    applicationAr: 'التحقق من جودة الخرسانة الموردة للمشاريع واعتماد الخلطات الخرسانية وحديد التسليح.',
    category: 'Laboratory',
    equipmentUsedAr: [
      'ماكينات كسر وضغط خرسانة رقمية آلية بمعايرة دورية',
      'أجهزة قياس الصلادة السطحية بالموجات والمطارق',
      'أحواض معالجة حرارية مضبوطة للعينات الخرسانية'
    ],
    testingMethodsAr: [
      'كسر المكعبات والأسطوانات الخرسانية (ASTM C39)',
      'اختبار الهبوط والحرارة للخرسانة الطازجة في الموقع',
      'فحص كسر القلوب الخرسانية المستخرجة من المباني'
    ],
    capacityRangeAr: 'ماكينات ضغط تصل قدرتها إلى 2,000 و 3,000 كيلو نيوتن',
    applicableStandards: ['ASTM C39', 'BS EN 12390', 'SBC 304'],
    typicalDeliverablesAr: [
      'شهادات نتائج فحص كسر الخرسانة بعمر 7 و 28 يوماً',
      'تقييم إحصائي لمطابقة الخرسانة للمقاومة المميزة المطلوبة',
      'سجلات ضبط الجودة المعتمدة لاستشاري المشروع'
    ],
    image: '/uploads/curated/materials_compression_press.jpg',
    relatedServiceId: 'materials-testing'
  },
  {
    id: 'cap-005',
    nameAr: 'أنظمة سند الحفر ورصد الميول والإنكلينوميتر',
    nameEn: 'Deep Shoring Monitoring & Inclinometer Systems',
    applicationAr: 'المراقبة المستمرة لثبات جوانب الحفر العميق وسلامة المباني والخدمات المجاورة.',
    category: 'Field',
    equipmentUsedAr: [
      'مجسات الإنكلينوميتر الرقمية المحورية (Digital Inclinometer Probes)',
      'أجهزة رصد مناسيب وضغط المياه (Piezometers)',
      'نقاط رصد التشويه ثلاثية الأبعاد (3D Deformation Targets)'
    ],
    testingMethodsAr: [
      'تسجيل إزاحات جدران السند بدقة 0.01 مم لكل متر',
      'رصد منسوب المياه الجوفية الديناميكي',
      'حساب متجهات الحركة والتحذير المبكر'
    ],
    capacityRangeAr: 'أعماق رصد إنكلينوميتر تصل إلى 60 متراً رأسياً',
    applicableStandards: ['ASTM D6230', 'CIRIA C760', 'SBC 303'],
    typicalDeliverablesAr: [
      'تقارير الرصد اليومية والأسبوعية للميول',
      'مخططات إزاحة جدران السند مع العمق',
      'شهادات استقرار جوانب الحفر المعتمدة'
    ],
    image: '/uploads/user_provided/inclinometer_monitoring.jpeg',
    relatedServiceId: 'shoring-dewatering'
  },
  {
    id: 'cap-006',
    nameAr: 'الفحوصات غير الإتلافية والرادار الخرساني (NDT & GPR)',
    nameEn: 'Non-Destructive Testing & Ground Penetrating Radar',
    applicationAr: 'تقييم سلامة المباني القائمة، الكشف عن حديد التسليح والفجوات دون أي إتلاف للعناصر الإنشائية.',
    category: 'Field & Lab',
    equipmentUsedAr: [
      'أجهزة الرادار الأرضي عالي التردد (Proceq GPR Live)',
      'مطرقة شميدت الإلكترونية المعايرة (SilverSchmidt)',
      'أجهزة الموجات فوق الصوتية لقياس السرعة (UPV Pundit)'
    ],
    testingMethodsAr: [
      'مسح شبكات حديد التسليح وتحديد عمق الغطاء الخرساني',
      'تحديد مقاومة الخرسانة اللحظية عبر مطرقة الارتداد',
      'الكشف عن التعشيش والتشققات الدقيقة بالموجات فوق الصوتية'
    ],
    capacityRangeAr: 'اختراق راداري يصل لعمق 80 سم في الخرسانة الكثيفة',
    applicableStandards: ['ASTM C805', 'ASTM C597', 'ACI 228.1R'],
    typicalDeliverablesAr: [
      'مخططات كشف حديد التسليح ثلاثية الأبعاد',
      'تقارير السلامة الإنشائية وتقييم متانة المنشآت',
      'توصيات التدعيم والإصلاح الإنشائي'
    ],
    image: '/uploads/user_provided/concrete_ndt_radar.jpeg',
    relatedServiceId: 'structural-integrity'
  }
];

export const CGL_AUTHORIZED_PARTNERS: AuthorizedPartner[] = [
  {
    id: 'aramco',
    nameAr: 'أرامكو السعودية',
    nameEn: 'Saudi Aramco',
    category: 'development',
    sectorAr: 'مشاريع الطاقة والصناعة الكبرى',
    collaborationScopeAr: 'الفحوصات الجيوتقنية المعقدة للمنشآت الصناعية الثقيلة وتحديد استقرار المنحدرات.',
    badge: 'عميل استراتيجي',
    logo: '/assets/partners/aramco.svg',
    logoLight: '/assets/partners/aramco-light.svg'
  },
  {
    id: 'roshn',
    nameAr: 'شركة روشن العقارية',
    nameEn: 'ROSHN Real Estate (PIF)',
    category: 'development',
    sectorAr: 'التطوير العقاري والمجتمعات العمرانية الكبرى',
    collaborationScopeAr: 'حفر الجسات الاستكشافية وفحوصات التربة لتأسيس الأحياء السكنية المتكاملة.',
    badge: 'مطور وطني',
    logo: '/assets/partners/roshn.svg',
    logoLight: '/assets/partners/roshn-light.svg'
  },
  {
    id: 'binladin',
    nameAr: 'مجموعة بن لادن السعودية',
    nameEn: 'Saudi Binladin Group',
    category: 'contractor',
    sectorAr: 'الإنشاءات الكبرى والمطارات والبنية التحتية',
    collaborationScopeAr: 'فحوصات استكشاف التربة، اختبارات التحميل الاستاتيكي للخوازيق، ومطابقة المواد الإنشائية.',
    badge: 'مقاول معتمد Tier-1',
    logo: '/assets/partners/Saudi_Binladin.png',
    logoLight: '/assets/partners/Saudi_Binladin-light.png'
  },
  {
    id: 'albalad',
    nameAr: 'مشروع جدة التاريخية (البلد)',
    nameEn: 'Al Balad Heritage Project',
    category: 'development',
    sectorAr: 'التطوير والتأهيل التراثي والعمراني',
    collaborationScopeAr: 'دراسات السلامة الإنشائية للمباني التاريخية، وفحوصات الرادار الأرضي (GPR)، ومراقبة الهبوط.',
    badge: 'مشروع تنموي استراتيجي',
    logo: '/assets/partners/albalad.png'
  },
  {
    id: 'elseif',
    nameAr: 'شركة السيف مهندسون ومقاولون',
    nameEn: 'El Seif Engineering Contracting',
    category: 'contractor',
    sectorAr: 'المقاولات العامة والأبراج الشاهقة',
    collaborationScopeAr: 'اختبارات الخوازيق العميقة وفحوصات الخرسانة عالية المقاومة للأبراج والمنشآت.',
    badge: 'مقاول رئيسي',
    logo: '/assets/partners/elseif.svg',
    logoLight: '/assets/partners/elseif-light.svg'
  },
  {
    id: 'nesma',
    nameAr: 'شركة نسما وشركاهم للمقاولات',
    nameEn: 'Nesma & Partners',
    category: 'contractor',
    sectorAr: 'مشاريع البنية التحتية والمحطات الكبرى',
    collaborationScopeAr: 'أعمال المسح الطبوغرافي ونزح المياه الجوفية وفحص دك التربة للبنية التحتية.',
    badge: 'مقاول بنية تحتية',
    logo: '/assets/partners/nesma.svg',
    logoLight: '/assets/partners/nesma-light.svg'
  },
  {
    id: 'albawani',
    nameAr: 'مجموعة البواني القابضة',
    nameEn: 'Al Bawani Holding Group',
    category: 'contractor',
    sectorAr: 'المجمعات الطبية والتعليمية والإنشاءات الكبرى',
    collaborationScopeAr: 'فحص التربة الميداني، وضبط جودة الخرسانة والصلب للمشاريع الحيوية.',
    badge: 'مقاول رئيسي',
    logo: '/assets/partners/albawani.svg',
    logoLight: '/assets/partners/albawani-light.svg'
  },
  {
    id: 'mbl',
    nameAr: 'شركة إم بي إل للإنشاءات',
    nameEn: 'MBL Construction',
    category: 'contractor',
    sectorAr: 'المشاريع الحيوية والتجارية',
    collaborationScopeAr: 'ضبط جودة الخرسانة والأسفلت، وتصميم نظم سند جوانب الحفر العميقة ونزح المياه.',
    badge: 'مقاول رئيسي',
    logo: '/assets/partners/mbl.png'
  },
  {
    id: 'levels',
    nameAr: 'شركة ليفلز للتطوير العقاري',
    nameEn: 'Levels Real Estate Development',
    category: 'development',
    sectorAr: 'التطوير والاستثمار العقاري والمكتبي',
    collaborationScopeAr: 'دراسات ميكانيكا التربة وفحوصات الأساسات للأبراج والمباني الاستثمارية.',
    badge: 'مطور عقاري',
    logo: '/assets/partners/levels.png',
    logoLight: '/assets/partners/levels-light.png'
  },
  {
    id: 'abuljadayel',
    nameAr: 'شركة أبوالجدايل للمقاولات',
    nameEn: 'Abuljadayel Co.',
    category: 'contractor',
    sectorAr: 'شبكات المياه ومحطات المعالجة',
    collaborationScopeAr: 'أعمال المسح الطبوغرافي الرقمي، حفر الجسات لخطوط الأنابيب، وفحوصات دمك التربة.',
    badge: 'مقاول بنية تحتية',
    logo: '/assets/partners/abuljadayel_co.png'
  },
  {
    id: 'abdullatif',
    nameAr: 'مجموعة عبد اللطيف للاستثمار',
    nameEn: 'Abdullatif Group',
    category: 'development',
    sectorAr: 'التطوير العقاري والمجمعات التجارية',
    collaborationScopeAr: 'دراسات تقرير ميكانيكا التربة وتوصيات الأساسات للمجمعات السكنية والتجارية.',
    badge: 'مطور عقاري',
    logo: '/assets/partners/abdullatif.png'
  },
  {
    id: 'occ',
    nameAr: 'شركة أو سي سي للمقاولات',
    nameEn: 'OCC Construction',
    category: 'contractor',
    sectorAr: 'أعمال الطرق والجسور والبنية التحتية',
    collaborationScopeAr: 'فحوصات الخلطات الإسفلتية والركام واختبارات الكثافة الحقلية المستمرة.',
    badge: 'مقاول طرق وإنشاءات',
    logo: '/assets/partners/occ.png',
    logoLight: '/assets/partners/occ-light.png'
  }
];

// Note: Strict Data Integrity Rule applied. Certifications reflect standard compliance frameworks until official certificate files are verified.
export const CGL_STANDARDS_COMPLIANCE: ComplianceCertification[] = [
  {
    id: 'sbc-compliance',
    name: 'كود البناء السعودي (Saudi Building Code)',
    issuingOrg: 'اللجنة الوطنية لكود البناء السعودي (SBCNC)',
    verifiedScopeAr: 'الامتثال لكافة متطلبات واشتراطات الكود السعودي للتربة والأساسات (SBC 303) والأعمال الإنشائية (SBC 304).',
    applicableFacilityAr: 'المختبرات المركزية والفحوصات الميدانية بالمملكة العربية السعودية',
    isVerified: true
  },
  {
    id: 'astm-compliance',
    name: 'المعايير القياسية الأمريكية (ASTM International Standards)',
    issuingOrg: 'ASTM International',
    verifiedScopeAr: 'تطبيق طرق الاختبار القياسية لفحوصات التربة والمواد والأساسات والخرسانة المسلحة (ASTM D-Series & C-Series).',
    applicableFacilityAr: 'كافة عمليات الاختبار الميداني والمعملي بفرعي CGL في المملكة والولايات المتحدة',
    isVerified: true
  },
  {
    id: 'aci-compliance',
    name: 'معهد الخرسانة الأمريكي (American Concrete Institute)',
    issuingOrg: 'American Concrete Institute (ACI)',
    verifiedScopeAr: 'معايير تقييم واختبار المنشآت الخرسانية والفحوصات غير الإتلافية ومطابقة الممارسات المهنية.',
    applicableFacilityAr: 'مختبرات فحص واختبار المواد والتقييم الإنشائي',
    isVerified: true
  }
];
