export type BreedCategory = 'Cattle' | 'Buffalo';

export interface PhysicalTraits {
  horns: string;
  ears: string;
  coatColor: string;
  humpAndDewlap: string;
  sizeAndBuild: string;
  faceProfile: string;
}

export interface GenomicMarkers {
  csn2Allele: 'A2/A2 (Homozygous)' | 'A2 Predominant';
  karyotype: string; // e.g. '2n = 60' or '2n = 50'
  fatRegulatorGene: string; // e.g. 'DGAT1 K232A'
  thermalGene: string; // e.g. 'HSP70 / HSF1 high expression'
  ncbiLocusLink?: string;
  uniprotAccession?: string;
}

export interface ProductivityMetrics {
  primaryUtility: 'Milch (Dairy)' | 'Draught (Work)' | 'Dual-Purpose';
  averageYield: string;
  fatPercentage: string;
  weightMaleKg: number | string;
  weightFemaleKg: number | string;
  hardiness: 'Exceptional' | 'High' | 'Moderate';
  heatTolerance: string;
}

export interface CandidateBreed {
  breedName: string;
  vernacularName?: string;
  category: BreedCategory;
  confidence: number; // 0 to 100
  keyDifferentiatingFeature: string;
}

export interface BreedInfo {
  id: string;
  name: string;
  vernacularName: string;
  scientificName: 'Bos indicus' | 'Bubalus bubalis';
  category: BreedCategory;
  stateOfOrigin: string;
  homeTract: string;
  nbagrCode: string;
  nbagrStatus: 'Registered Indigenous' | 'Endangered / Rare' | 'Conservation Priority' | 'Common / Abundant';
  description: string;
  genomics: GenomicMarkers;
  physicalTraits: PhysicalTraits;
  productivity: ProductivityMetrics;
  historicalSignificance: string;
  pastoralCommunities: string[];
  careRecommendations: string[];
  imageUrl: string;
  tags: string[];
}

export interface ClassificationResult {
  predictedBreed: string;
  vernacularName: string;
  category: BreedCategory;
  scientificName: string;
  confidence: number;
  stateOfOrigin: string;
  homeTract: string;
  nbagrCode: string;
  utility: string;
  summary: string;
  detectedVisualFeatures: string[];
  genomics: GenomicMarkers;
  physicalTraits: PhysicalTraits;
  productivity: ProductivityMetrics;
  nbagrStatus: string;
  conservationStatus: string;
  historicalSignificance: string;
  traditionalCommunities: string[];
  careRecommendations: string[];
  topCandidates: CandidateBreed[];
  isIndigenouslyRegistered: boolean;
  distinguishingNotice?: string;
  nonBovineWarning?: string;
  aiModelInfo?: {
    modelName: string;
    modelType: 'On-Device MobileNet v2' | 'Cloud Gemini Vision' | 'Pre-Trained Deep Learning Vision';
    inferenceTimeMs: number;
    topRawPredictions: { className: string; probability: number }[];
    tensorResolution?: string;
  };
}

export interface ScanHistoryItem {
  id: string;
  timestamp: number;
  imagePreviewUrl: string;
  result: ClassificationResult;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  collegeName?: string;
  role: 'student' | 'researcher';
  createdAt: string;
}
