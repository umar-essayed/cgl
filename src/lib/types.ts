export type ServiceId = 
  | 'geotechnical-investigation'
  | 'structural-integrity'
  | 'materials-testing'
  | 'engineering-surveying'
  | 'mining-testing'
  | 'shoring-dewatering'
  | 'environmental-testing';

export interface ServiceItem {
  id: ServiceId;
  titleAr: string;
  titleEn: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  standards: string[];
  fieldMethods: string[];
  labDeliverables: string[];
  icon: string;
  image?: string;
  scopeListAr: string[];
}

export interface TechnicalMetric {
  labelAr: string;
  labelEn: string;
  value: string;
  unit?: string;
  isDocumented: boolean;
}

export interface ProjectEvidence {
  id: string;
  nameAr: string;
  nameEn: string;
  sectorAr: string;
  sectorEn: string;
  locationAr: string;
  locationEn: string;
  client?: string; // Only displayed if officially authorized
  scopeOfWorkAr: string;
  scopeOfWorkEn: string;
  servicesPerformedAr: string[];
  technicalChallengesAr: string;
  engineeringApproachAr: string;
  testsPerformedAr: string[];
  equipmentUsed: string[];
  technicalMetrics?: TechnicalMetric[];
  coverImage: string;
  gallery: string[];
  relevantStandards: string[];
  relatedServiceId: ServiceId;
}

export interface OperationalCapability {
  id: string;
  nameAr: string;
  nameEn: string;
  applicationAr: string;
  category: 'Field' | 'Laboratory' | 'Field & Lab';
  equipmentUsedAr: string[];
  testingMethodsAr: string[];
  capacityRangeAr?: string;
  applicableStandards: string[];
  typicalDeliverablesAr: string[];
  image: string;
  relatedServiceId: ServiceId;
}

export interface ComplianceCertification {
  id: string;
  name: string;
  issuingOrg: string;
  certificateNumber?: string;
  verifiedScopeAr: string;
  issueDate?: string;
  expiryDate?: string;
  applicableFacilityAr: string;
  officialPdfUrl?: string;
  verificationLink?: string;
  isVerified: boolean;
}

export interface RfqFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  selectedServices: string[];
  estimatedAreaDepth?: string;
  notes?: string;
}

export interface AuthorizedPartner {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'contractor' | 'development' | 'technical';
  sectorAr: string;
  collaborationScopeAr: string;
  badge: string;
  logo: string;
}
