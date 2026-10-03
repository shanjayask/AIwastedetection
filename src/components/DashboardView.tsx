import React from 'react';
import { 
  Leaf, 
  Recycle, 
  Trash2, 
  Upload, 
  Cpu, 
  Search, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Camera,
  Play
} from 'lucide-react';
import { SampleWasteItem, SAMPLE_WASTE_ITEMS } from '../data/sampleWaste';

interface DashboardViewProps {
  onNavigate: (tab: 'classify' | 'guide' | 'about') => void;
  onSelectSampleForClassification: (sample: SampleWasteItem) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ 
  onNavigate, 
  onSelectSampleForClassification 
}) => {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950 text-white p-8 sm:p-12 shadow-xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Based Waste Classification System</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
            Intelligent Image-Based Waste Classification
          </h1>

          <p className="text-emerald-100 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
            Empower municipal waste sorting and environmental sustainability. Upload or snap an image of domestic refuse to instantly detect items, classify into standardized categories, and obtain actionable disposal guidance.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('classify')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-400/25 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <Camera className="w-5 h-5 text-emerald-950" />
              <span>Launch AI Classifier</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer backdrop-blur-xs"
            >
              <span>View College Documentation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Waste Categories Overview */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Primary Waste Categories</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
              3 Standard Classes
            </span>
          </h2>
          <p className="text-slate-600 text-sm">
            The AI engine automatically identifies and maps waste into exactly one of these three classes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Organic Card */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-50/70 to-white border border-emerald-200/80 p-6 shadow-xs hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-md shadow-emerald-500/20">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🌱</span>
              <h3 className="text-xl font-bold text-emerald-950">Organic</h3>
            </div>
            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
              Biodegradable Waste
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Food scraps, fruit and vegetable peels, tea leaves, fallen leaves, garden clippings, and organic matter that breaks down naturally into compost.
            </p>
            <div className="pt-3 border-t border-emerald-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-800">Target: Green Bin (Compost)</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold">100% Biodegradable</span>
            </div>
          </div>

          {/* Recyclable Card */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50/70 to-white border border-blue-200/80 p-6 shadow-xs hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-md shadow-blue-600/20">
              <Recycle className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">♻️</span>
              <h3 className="text-xl font-bold text-blue-950">Recyclable</h3>
            </div>
            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
              Reprocessable Dry Materials
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Clean plastic bottles (PET #1, HDPE #2), aluminum beverage cans, tin food containers, cardboard boxes, paper, and clean glass jars.
            </p>
            <div className="pt-3 border-t border-blue-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-blue-800">Target: Blue Bin (Dry Waste)</span>
              <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 font-bold">Industrial Circularity</span>
            </div>
          </div>

          {/* Non-Recyclable Card */}
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-b from-rose-50/70 to-white border border-rose-200/80 p-6 shadow-xs hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-4 shadow-md shadow-rose-600/20">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🗑️</span>
              <h3 className="text-xl font-bold text-rose-950">Non-Recyclable</h3>
            </div>
            <p className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2">
              General / Residual Waste
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Used napkins, food-contaminated packaging, multi-layer foil chip wrappers, sachet pouches, greasy pizza boxes, ceramics, and mixed refuse.
            </p>
            <div className="pt-3 border-t border-rose-100 flex items-center justify-between text-xs">
              <span className="font-semibold text-rose-800">Target: Black Bin (Landfill)</span>
              <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 font-bold">Waste-to-Energy</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Flowchart */}
      <section className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>How It Works</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                AI Pipeline
              </span>
            </h2>
            <p className="text-slate-400 text-sm">
              End-to-end automated inference workflow from input image to actionable advice.
            </p>
          </div>
          <button
            onClick={() => onNavigate('about')}
            className="text-xs font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-4 self-start sm:self-auto cursor-pointer"
          >
            Read System Architecture &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Upload className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Step 1</div>
            <div className="font-bold text-sm text-white mb-1">Upload Image</div>
            <div className="text-xs text-slate-400">File upload, webcam snapshot, or demo sample</div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">Step 2</div>
            <div className="font-bold text-sm text-white mb-1">AI Image Analysis</div>
            <div className="text-xs text-slate-400">Gemini Vision feature & texture parsing</div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
              <Search className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Step 3</div>
            <div className="font-bold text-sm text-white mb-1">Waste Classification</div>
            <div className="text-xs text-slate-400">Categorized into Organic, Recyclable, or Non-Recyclable</div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Step 4</div>
            <div className="font-bold text-sm text-white mb-1">Confidence Score</div>
            <div className="text-xs text-slate-400">Statistical certainty percentage computed</div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-800/80 border border-slate-700">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">Step 5</div>
            <div className="font-bold text-sm text-white mb-1">Disposal Advice</div>
            <div className="text-xs text-slate-400">Bin allocation & actionable recycling tip</div>
          </div>
        </div>
      </section>

      {/* Quick Test Samples Gallery */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Quick Test Samples</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                Demo-Ready
              </span>
            </h2>
            <p className="text-slate-600 text-sm">
              Don&apos;t have an image ready? Click any standard test object to test classification instantly:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SAMPLE_WASTE_ITEMS.slice(0, 4).map((sample) => (
            <div
              key={sample.id}
              onClick={() => onSelectSampleForClassification(sample)}
              className="group cursor-pointer rounded-xl bg-white border border-slate-200 p-4 shadow-2xs hover:shadow-md hover:border-emerald-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-4/3 rounded-lg overflow-hidden bg-slate-100 mb-3 border border-slate-100 flex items-center justify-center">
                  <img 
                    src={sample.imageUrl} 
                    alt={sample.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                  />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                  {sample.name}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mb-2">
                  {sample.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  sample.expectedCategory === 'Organic' ? 'bg-emerald-100 text-emerald-800' :
                  sample.expectedCategory === 'Recyclable' ? 'bg-blue-100 text-blue-800' :
                  'bg-rose-100 text-rose-800'
                }`}>
                  {sample.expectedCategory}
                </span>
                <span className="text-xs text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  Test <Play className="w-2.5 h-2.5 fill-current" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
