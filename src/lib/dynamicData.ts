import { getAdminFirestore } from '@/lib/firebaseAdmin';
import { 
  CGL_PROJECTS_EVIDENCE, 
  CGL_EQUIPMENT_FLEET, 
  CGL_LATEST_NEWS, 
  CGL_AUTHORIZED_PARTNERS, 
  CGL_COMPANY_INFO,
  CGL_SERVICES
} from '@/lib/data';
import { ProjectEvidence, EquipmentItem, NewsArticle, AuthorizedPartner, HeroSlide, ServiceItem } from '@/lib/types';

export const DEFAULT_HERO_SLIDES: HeroSlide[] = [
  {
    id: 'hero-slide-1',
    order: 1,
    isActive: true,
    type: 'image',
    mediaUrl: '/assets/sliders/slider1.jpg',
    tagAr: 'الدراسات الجيوتقنية واستكشاف التربة',
    tagEn: 'Geotechnical & Soil Investigation',
    titleAr: 'الدقة الهندسية في فحص التربة التي ترتكز عليها كبرى مشاريع المملكة',
    titleEn: 'The Engineering Precision Anchoring the Kingdom’s Mega Projects',
    subtitleAr: 'حفر الجسات الآلية، استخراج العينات الصخرية، وتحديد قدرة تحمل التربة وتوصيات الأساسات وفق كود البناء السعودي.',
    subtitleEn: 'Automated deep drilling, soil bearing capacity evaluation, and foundation recommendations compliant with SBC.',
    metricsAr: 'أعماق حفر تتجاوز 50 متراً',
    metricsEn: 'Drilling Depths +50m',
    duration: 6
  },
  {
    id: 'hero-slide-2',
    order: 2,
    isActive: true,
    type: 'image',
    mediaUrl: '/uploads/projects_images/project_688d08b6e73ee4.36242119.jpg',
    tagAr: 'اختبارات التحميل الاستاتيكي',
    tagEn: 'Static Pile Load Testing',
    titleAr: 'تأكيد سلامة الأساسات العميقة بروافع تتجاوز 1000 طن',
    titleEn: 'Deep Foundation Verification with Test Loads Exceeding 1,000 Tons',
    subtitleAr: 'منظومة هيدروليكية وخلايا ضغط معايرة لحساب الهبوط بدقة مليمترية وفق المعايير القياسية المعتمدة.',
    subtitleEn: 'Calibrated hydraulic systems and load cells for millimeter settlement analysis per ASTM D1143.',
    metricsAr: 'أحمال فحص تتجاوز 1000 طن',
    metricsEn: 'Test Loads +1,000 Tons',
    duration: 6
  },
  {
    id: 'hero-slide-3',
    order: 3,
    isActive: true,
    type: 'image',
    mediaUrl: '/uploads/projects_images/project_688d0f1061e875.99060450.jpg',
    tagAr: 'المسح الطبوغرافي والجيوديسي',
    tagEn: 'Topographic & Geodetic Survey',
    titleAr: 'رصد مساحي رقمي دقيق ونمذجة ثلاثية الأبعاد للمواقع',
    titleEn: 'High-Precision Digital Surveying & 3D Reality Capture',
    subtitleAr: 'أحدث محطات الرصد الشاملة وتقنيات المسح الفضائي لتثبيت محاور المنشآت وحساب الكميات بدقة قطعية.',
    subtitleEn: 'Advanced electronic total stations and GNSS receivers for axis layout and volume calculations.',
    metricsAr: 'دقة رصد ثانية واحدة',
    metricsEn: '1-Arcsecond Accuracy',
    duration: 6
  }
];

export interface DynamicSiteData {
  projects: ProjectEvidence[];
  equipment: EquipmentItem[];
  news: NewsArticle[];
  partners: AuthorizedPartner[];
  services: ServiceItem[];
  heroSlides: HeroSlide[];
  settings: typeof CGL_COMPANY_INFO;
}

/**
 * Fetch fresh dynamic site data directly from Firestore
 */
export async function getDynamicSiteData(): Promise<DynamicSiteData> {
  try {
    const db = getAdminFirestore();
    if (!db) {
      return {
        projects: CGL_PROJECTS_EVIDENCE,
        equipment: CGL_EQUIPMENT_FLEET,
        news: CGL_LATEST_NEWS,
        partners: CGL_AUTHORIZED_PARTNERS,
        services: CGL_SERVICES,
        heroSlides: DEFAULT_HERO_SLIDES,
        settings: CGL_COMPANY_INFO
      };
    }

    const [projectsSnap, equipmentSnap, newsSnap, partnersSnap, servicesSnap, heroSlidesSnap, settingsDoc] = await Promise.all([
      db.collection('projects').get().catch(() => null),
      db.collection('equipment').get().catch(() => null),
      db.collection('news').get().catch(() => null),
      db.collection('partners').get().catch(() => null),
      db.collection('services').get().catch(() => null),
      db.collection('hero_slides').get().catch(() => null),
      db.collection('settings').doc('company_info').get().catch(() => null)
    ]);

    const projects: ProjectEvidence[] = projectsSnap && !projectsSnap.empty 
      ? (projectsSnap.docs.map(d => ({ id: d.id, ...d.data() })) as any)
      : CGL_PROJECTS_EVIDENCE;

    const equipment: EquipmentItem[] = equipmentSnap && !equipmentSnap.empty
      ? (equipmentSnap.docs.map(d => ({ id: d.id, ...d.data() })) as any)
      : CGL_EQUIPMENT_FLEET;

    const news: NewsArticle[] = newsSnap && !newsSnap.empty
      ? (newsSnap.docs.map(d => ({ id: d.id, ...d.data() })) as any)
      : CGL_LATEST_NEWS;

    const partners: AuthorizedPartner[] = partnersSnap && !partnersSnap.empty
      ? (partnersSnap.docs.map(d => ({ id: d.id, ...d.data() })) as any)
      : CGL_AUTHORIZED_PARTNERS;

    const services: ServiceItem[] = servicesSnap && !servicesSnap.empty
      ? (servicesSnap.docs.map(d => ({ id: d.id, ...d.data() })) as any)
      : CGL_SERVICES;

    // Filter active slides strictly, and sort by order ascending
    let heroSlides: HeroSlide[] = [];
    if (heroSlidesSnap && !heroSlidesSnap.empty) {
      heroSlides = heroSlidesSnap.docs
        .map(d => {
          const data = d.data();
          return {
            id: d.id,
            ...data,
            order: Number(data.order) || 1,
            duration: Number(data.duration) > 0 ? Number(data.duration) : 6,
            isActive: data.isActive !== false && data.isActive !== 'false',
            type: data.type === 'video' ? 'video' : 'image',
          } as HeroSlide;
        })
        .filter(s => s.isActive)
        .sort((a, b) => a.order - b.order);
    }

    if (heroSlides.length === 0) {
      heroSlides = DEFAULT_HERO_SLIDES;
    }

    const settingsData = settingsDoc?.exists ? settingsDoc.data() : null;
    const settings = settingsData ? { ...CGL_COMPANY_INFO, ...settingsData } : CGL_COMPANY_INFO;

    return {
      projects,
      equipment,
      news,
      partners,
      services,
      heroSlides,
      settings
    };
  } catch (e) {
    console.error('Error fetching dynamic site data from Firestore:', e);
    return {
      projects: CGL_PROJECTS_EVIDENCE,
      equipment: CGL_EQUIPMENT_FLEET,
      news: CGL_LATEST_NEWS,
      partners: CGL_AUTHORIZED_PARTNERS,
      services: CGL_SERVICES,
      heroSlides: DEFAULT_HERO_SLIDES,
      settings: CGL_COMPANY_INFO
    };
  }
}

/**
 * Fetch a single service by ID
 */
export async function getDynamicService(id: string): Promise<ServiceItem | undefined> {
  const data = await getDynamicSiteData();
  const found = data.services.find(s => s.id === id);
  if (found) return found;
  return CGL_SERVICES.find(s => s.id === id);
}

/**
 * Fetch a single project by ID
 */
export async function getDynamicProject(id: string): Promise<ProjectEvidence | undefined> {
  const data = await getDynamicSiteData();
  const found = data.projects.find(p => p.id === id);
  if (found) return found;

  try {
    const db = getAdminFirestore();
    if (db) {
      const doc = await db.collection('projects').doc(id).get();
      if (doc.exists) {
        return { id: doc.id, ...doc.data() } as any;
      }
    }
  } catch (e) {
    console.error('Error fetching single project:', e);
  }

  return CGL_PROJECTS_EVIDENCE.find(p => p.id === id);
}

/**
 * Fetch a single news article by ID
 */
export async function getDynamicNewsArticle(id: string): Promise<NewsArticle | undefined> {
  const data = await getDynamicSiteData();
  const found = data.news.find(n => n.id === id);
  if (found) return found;

  try {
    const db = getAdminFirestore();
    if (db) {
      const doc = await db.collection('news').doc(id).get();
      if (doc.exists) {
        return { id: doc.id, ...doc.data() } as any;
      }
    }
  } catch (e) {
    console.error('Error fetching single news article:', e);
  }

  return CGL_LATEST_NEWS.find(n => n.id === id);
}
