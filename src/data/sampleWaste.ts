export interface SampleWasteItem {
  id: string;
  name: string;
  expectedCategory: 'Organic' | 'Recyclable' | 'Non-Recyclable';
  description: string;
  imageUrl: string;
  defaultItem: string;
  defaultConfidence: number;
  defaultRecommendation: string;
  materialComposition: string;
  environmentalImpact: string;
}

// Generate realistic, recognizable SVG data URLs for sample waste items
const createSvgDataUrl = (bg: string, icon: string, title: string, subtitle: string): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg}" stop-opacity="0.9" />
        <stop offset="100%" stop-color="${bg}" stop-opacity="1" />
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity="0.2"/>
      </filter>
    </defs>
    <rect width="600" height="450" fill="#f8fafc" />
    <rect x="20" y="20" width="560" height="410" rx="20" fill="url(#grad)" filter="url(#shadow)" />
    <rect x="40" y="40" width="520" height="370" rx="16" fill="#ffffff" fill-opacity="0.92" />
    
    <!-- Central visual illustration badge -->
    <circle cx="300" cy="180" r="85" fill="${bg}" fill-opacity="0.18" />
    <text x="300" y="205" font-family="system-ui, -apple-system, sans-serif" font-size="80" text-anchor="middle">${icon}</text>
    
    <text x="300" y="300" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="#0f172a" text-anchor="middle">${title}</text>
    <text x="300" y="335" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#64748b" text-anchor="middle">${subtitle}</text>
    
    <rect x="200" y="360" width="200" height="30" rx="15" fill="${bg}" fill-opacity="0.2" />
    <text x="300" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#334155" text-anchor="middle">Standard Test Sample</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const SAMPLE_WASTE_ITEMS: SampleWasteItem[] = [
  {
    id: 'plastic-bottle',
    name: 'Plastic Water Bottle',
    expectedCategory: 'Recyclable',
    description: 'Clear PET #1 plastic beverage bottle with cap',
    imageUrl: createSvgDataUrl('#3b82f6', '🧴', 'Plastic Water Bottle', 'Clear PET Plastic (500ml)'),
    defaultItem: 'PET Plastic Water Bottle',
    defaultConfidence: 96.8,
    defaultRecommendation: 'Empty remaining liquid, rinse clean, crush to save space, and place into the blue recycling bin. Screw cap back on.',
    materialComposition: 'Polyethylene Terephthalate (PETE #1) body with Polypropylene (PP #5) cap',
    environmentalImpact: 'Takes ~450 years to decompose in landfill. Highly recyclable into new bottles or polyester textiles.',
  },
  {
    id: 'banana-peel',
    name: 'Banana Peel',
    expectedCategory: 'Organic',
    description: 'Fresh organic fruit skin with potassium-rich biomass',
    imageUrl: createSvgDataUrl('#10b981', '🍌', 'Banana Peel', 'Fresh Organic Fruit Waste'),
    defaultItem: 'Banana Peel',
    defaultConfidence: 98.4,
    defaultRecommendation: 'Deposit in the green organic compost bin. Breaks down quickly into rich organic fertilizer for gardens.',
    materialComposition: 'Cellulose, hemicellulose, lignin, potassium, moisture (100% biodegradable)',
    environmentalImpact: 'Decomposes naturally in 2 to 4 weeks in compost, generating zero landfill methane if composted properly.',
  },
  {
    id: 'chip-packet',
    name: 'Potato Chip Wrapper',
    expectedCategory: 'Non-Recyclable',
    description: 'Multi-layered metalized polymer packaging bag',
    imageUrl: createSvgDataUrl('#ef4444', '🍟', 'Potato Chip Bag', 'Multi-Layer Foil & Plastic'),
    defaultItem: 'Potato Chip Packet',
    defaultConfidence: 94.2,
    defaultRecommendation: 'Dispose of in the black residual / non-recyclable bin. Multi-layer foil-plastic film cannot be mechanically recycled in municipal streams.',
    materialComposition: 'Biaxially Oriented Polypropylene (BOPP) laminated with vaporized aluminum layer',
    environmentalImpact: 'Takes over 80 years to decompose and cannot be separated for conventional recycling.',
  },
  {
    id: 'aluminum-can',
    name: 'Aluminum Soda Can',
    expectedCategory: 'Recyclable',
    description: 'Crushed carbonated soda container made of pure aluminum',
    imageUrl: createSvgDataUrl('#3b82f6', '🥤', 'Aluminum Beverage Can', 'Pure Aluminum Metal (330ml)'),
    defaultItem: 'Aluminum Soda Can',
    defaultConfidence: 97.9,
    defaultRecommendation: 'Rinse out sweet residue to deter pests, crush lightly, and place in the metal/dry recycling stream.',
    materialComposition: '100% Infinitely Recyclable Aluminum Alloy',
    environmentalImpact: 'Recycling aluminum consumes 95% less energy than producing new metal from bauxite ore.',
  },
  {
    id: 'cardboard-box',
    name: 'Corrugated Cardboard Box',
    expectedCategory: 'Recyclable',
    description: 'Clean shipping parcel box made of corrugated fiberboard',
    imageUrl: createSvgDataUrl('#3b82f6', '📦', 'Cardboard Delivery Box', 'Corrugated Paperboard'),
    defaultItem: 'Corrugated Cardboard Packaging Box',
    defaultConfidence: 95.6,
    defaultRecommendation: 'Remove plastic shipping tape, flatten the box completely to optimize bin capacity, and place into paper recycling.',
    materialComposition: 'Unbleached kraft paper pulp and fluted corrugation',
    environmentalImpact: 'Can be recycled 5 to 7 times into new packaging cartons or paper bags.',
  },
  {
    id: 'used-tissue',
    name: 'Used Greasy Tissue',
    expectedCategory: 'Non-Recyclable',
    description: 'Contaminated paper napkin soiled with food oils and moisture',
    imageUrl: createSvgDataUrl('#ef4444', '🧻', 'Used Food Tissue', 'Grease & Food Soiled Paper'),
    defaultItem: 'Used Food Soiled Napkin',
    defaultConfidence: 93.7,
    defaultRecommendation: 'Dispose of in general non-recyclable waste. Grease and food residue clog recycling paper pulpers.',
    materialComposition: 'Low-grade short cellulose paper fibers contaminated with lipids',
    environmentalImpact: 'Cannot be recycled due to food grease contamination; suitable for commercial compost or municipal waste.',
  },
  {
    id: 'apple-core',
    name: 'Apple Core & Seeds',
    expectedCategory: 'Organic',
    description: 'Biodegradable fruit core after consumption',
    imageUrl: createSvgDataUrl('#10b981', '🍎', 'Apple Core', 'Fruit Biomass with Seeds'),
    defaultItem: 'Apple Core',
    defaultConfidence: 97.1,
    defaultRecommendation: 'Place into home compost or green organics bin. Adds vital moisture and carbon to compost systems.',
    materialComposition: 'Natural plant fiber, water, sugars, and organic matter',
    environmentalImpact: 'Decomposes completely within 1 to 2 months under standard composting conditions.',
  },
  {
    id: 'glass-bottle',
    name: 'Glass Beverage Jar',
    expectedCategory: 'Recyclable',
    description: 'Clean transparent soda/sauce glass container',
    imageUrl: createSvgDataUrl('#3b82f6', '🫙', 'Glass Container', 'Clear Soda-Lime Glass'),
    defaultItem: 'Clear Glass Bottle',
    defaultConfidence: 96.4,
    defaultRecommendation: 'Rinse out contents thoroughly, remove metal or plastic lids, and place in glass recycling receptacle.',
    materialComposition: 'Soda-lime silica glass',
    environmentalImpact: '100% infinitely recyclable without any degradation in purity or mechanical quality.',
  },
];
