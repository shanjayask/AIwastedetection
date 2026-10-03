export type WasteCategory = 'Organic' | 'Recyclable' | 'Non-Recyclable';

export interface ClassificationResult {
  id: string;
  timestamp: string;
  imageUrl: string;
  sourceName: string;
  item: string;
  category: WasteCategory;
  confidence: number;
  recommendation: string;
  materialComposition?: string;
  environmentalImpact?: string;
  recyclingTip?: string;
}

export interface WasteGuideItem {
  id: string;
  title: string;
  category: WasteCategory;
  binColor: string;
  examples: string[];
  handling: string;
  doList: string[];
  dontList: string[];
}

export interface VivaQuestion {
  id: number;
  question: string;
  answer: string;
  category: 'Concepts' | 'Technologies' | 'Methodology' | 'Impact';
}

export interface PresentationSlide {
  slideNumber: number;
  title: string;
  subtitle?: string;
  points: string[];
  keyHighlight?: string;
}
