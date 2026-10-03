import React from 'react';
import { 
  BarChart3, 
  Leaf, 
  Recycle, 
  Trash2, 
  Zap, 
  TrendingUp, 
  Award,
  Globe,
  PieChart
} from 'lucide-react';
import { ClassificationResult } from '../types';

interface StatisticsViewProps {
  history: ClassificationResult[];
  onNavigateToClassify: () => void;
}

export const StatisticsView: React.FC<StatisticsViewProps> = ({
  history,
  onNavigateToClassify
}) => {
  const total = history.length;
  const organicCount = history.filter(h => h.category === 'Organic').length;
  const recyclableCount = history.filter(h => h.category === 'Recyclable').length;
  const nonRecyclableCount = history.filter(h => h.category === 'Non-Recyclable').length;

  const avgConfidence = total > 0 
    ? history.reduce((acc, curr) => acc + curr.confidence, 0) / total 
    : 0;

  const organicPct = total > 0 ? (organicCount / total) * 100 : 0;
  const recyclablePct = total > 0 ? (recyclableCount / total) * 100 : 0;
  const nonRecyclablePct = total > 0 ? (nonRecyclableCount / total) * 100 : 0;

  const maxCount = Math.max(organicCount, recyclableCount, nonRecyclableCount, 1);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>📊 Classification Statistics</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
            Real-Time Analytics
          </span>
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Visual insights into classified waste items, category distributions, and ecological impact metrics.
        </p>
      </div>

      {total === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/50 p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mx-auto text-3xl">
            📊
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">No Statistical Data Recorded Yet</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              Classify some items in the &ldquo;Classify Waste&rdquo; tab to populate charts, ratios, and category distributions!
            </p>
          </div>
          <button
            onClick={onNavigateToClassify}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
          >
            Start Classifying Now &rarr;
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Key Metric Counters */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Total Analyzed
              </div>
              <div className="text-3xl font-extrabold text-slate-900">{total}</div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>Images processed</span>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1">
                <span>🌱 Organic</span>
              </div>
              <div className="text-3xl font-extrabold text-emerald-950">{organicCount}</div>
              <div className="text-xs text-emerald-700 mt-1 font-medium">
                {organicPct.toFixed(1)}% of total
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-5 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1">
                <span>♻️ Recyclable</span>
              </div>
              <div className="text-3xl font-extrabold text-blue-950">{recyclableCount}</div>
              <div className="text-xs text-blue-700 mt-1 font-medium">
                {recyclablePct.toFixed(1)}% of total
              </div>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-5 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-1 flex items-center gap-1">
                <span>🗑️ Non-Recyclable</span>
              </div>
              <div className="text-3xl font-extrabold text-rose-950">{nonRecyclableCount}</div>
              <div className="text-xs text-rose-700 mt-1 font-medium">
                {nonRecyclablePct.toFixed(1)}% of total
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1 rounded-2xl border border-indigo-200 bg-indigo-50/40 p-5 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1 flex items-center gap-1">
                <span>⚡ Avg Confidence</span>
              </div>
              <div className="text-3xl font-extrabold text-indigo-950">
                {avgConfidence.toFixed(1)}%
              </div>
              <div className="text-xs text-indigo-700 mt-1 font-medium">
                High diagnostic fidelity
              </div>
            </div>
          </div>

          {/* Visual Distribution Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Category Distribution (Bar Chart)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Comparative volume of classified waste objects across the 3 categories.
                  </p>
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-slate-100 text-slate-600">
                  {total} Records
                </span>
              </div>

              {/* Responsive Bar Chart */}
              <div className="space-y-5 pt-2">
                {/* Organic Bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-emerald-950">
                      <span>🌱</span>
                      <span>Organic Waste</span>
                    </span>
                    <span className="text-slate-600">
                      {organicCount} items ({organicPct.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-6 w-full bg-slate-100 rounded-xl overflow-hidden p-0.5 border border-slate-200">
                    <div 
                      className="h-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700 flex items-center justify-end pr-2 text-[10px] text-white font-bold"
                      style={{ width: `${Math.max(6, (organicCount / maxCount) * 100)}%` }}
                    >
                      {organicCount > 0 && `${organicCount}`}
                    </div>
                  </div>
                </div>

                {/* Recyclable Bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-blue-950">
                      <span>♻️</span>
                      <span>Recyclable Materials</span>
                    </span>
                    <span className="text-slate-600">
                      {recyclableCount} items ({recyclablePct.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-6 w-full bg-slate-100 rounded-xl overflow-hidden p-0.5 border border-slate-200">
                    <div 
                      className="h-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-700 flex items-center justify-end pr-2 text-[10px] text-white font-bold"
                      style={{ width: `${Math.max(6, (recyclableCount / maxCount) * 100)}%` }}
                    >
                      {recyclableCount > 0 && `${recyclableCount}`}
                    </div>
                  </div>
                </div>

                {/* Non-Recyclable Bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-rose-950">
                      <span>🗑️</span>
                      <span>Non-Recyclable Refuse</span>
                    </span>
                    <span className="text-slate-600">
                      {nonRecyclableCount} items ({nonRecyclablePct.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="h-6 w-full bg-slate-100 rounded-xl overflow-hidden p-0.5 border border-slate-200">
                    <div 
                      className="h-full rounded-lg bg-gradient-to-r from-rose-500 to-red-600 transition-all duration-700 flex items-center justify-end pr-2 text-[10px] text-white font-bold"
                      style={{ width: `${Math.max(6, (nonRecyclableCount / maxCount) * 100)}%` }}
                    >
                      {nonRecyclableCount > 0 && `${nonRecyclableCount}`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ratio Strip */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 mb-2">Category Ratio Composition</div>
                <div className="h-3 w-full rounded-full overflow-hidden flex">
                  <div style={{ width: `${organicPct}%` }} className="bg-emerald-500" title={`Organic: ${organicPct.toFixed(1)}%`} />
                  <div style={{ width: `${recyclablePct}%` }} className="bg-blue-600" title={`Recyclable: ${recyclablePct.toFixed(1)}%`} />
                  <div style={{ width: `${nonRecyclablePct}%` }} className="bg-rose-500" title={`Non-Recyclable: ${nonRecyclablePct.toFixed(1)}%`} />
                </div>
              </div>
            </div>

            {/* Environmental Impact Estimation Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <Globe className="w-5 h-5" />
                <h3 className="font-bold text-sm uppercase tracking-wider">
                  Environmental Impact Meter
                </h3>
              </div>

              <p className="text-xs text-emerald-100 leading-relaxed">
                By classifying waste before binning, you actively prevent cross-contamination and divert materials away from overflowing municipal landfills.
              </p>

              <div className="space-y-3 pt-2 border-t border-emerald-800/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-200">Diverted from Landfill</span>
                  <span className="font-bold text-white">{organicCount + recyclableCount} items ({((organicCount + recyclableCount) / total * 100).toFixed(0)}%)</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-200">Potential Compost Material</span>
                  <span className="font-bold text-emerald-300">~{(organicCount * 0.15).toFixed(2)} kg</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-200">Recoverable Packaging</span>
                  <span className="font-bold text-blue-300">{recyclableCount} units</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-emerald-300/80 italic">
                *Estimates based on average domestic item weights and EPA waste reduction metrics.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
