import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Leaf, 
  Recycle, 
  Trash2, 
  Check, 
  X, 
  AlertTriangle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { WASTE_GUIDE_ITEMS } from '../data/collegeData';
import { WasteCategory } from '../types';

export const WasteGuideView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | WasteCategory>('All');

  const filteredItems = WASTE_GUIDE_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.examples.some(ex => ex.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.handling.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>📚 Waste Segregation Guide</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
            Educational Reference
          </span>
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Detailed breakdown of waste categories, accepted items, handling instructions, and sorting Do&apos;s &amp; Don&apos;ts.
        </p>
      </div>

      {/* Municipal Warning Banner */}
      <div className="rounded-2xl bg-amber-50 border border-amber-200/80 p-5 flex items-start gap-3.5 shadow-xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-900 space-y-1">
          <div className="font-bold">Important Regional Notice:</div>
          <p className="leading-relaxed">
            Recycling rules and capabilities vary significantly by municipal corporation, county, and country. Always verify and follow your local waste-management authority&apos;s specific guidelines.
          </p>
        </div>
      </div>

      {/* Search and Category Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search items (e.g., banana, cardboard, plastic bottle, napkin)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
          />
        </div>

        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {(['All', 'Organic', 'Recyclable', 'Non-Recyclable'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat === 'All' ? 'All Classes' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Guide Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const isOrganic = item.category === 'Organic';
          const isRecyclable = item.category === 'Recyclable';

          const borderClass = isOrganic 
            ? 'border-emerald-200' 
            : isRecyclable 
            ? 'border-blue-200' 
            : 'border-rose-200';

          const headerClass = isOrganic 
            ? 'bg-emerald-50 text-emerald-950' 
            : isRecyclable 
            ? 'bg-blue-50 text-blue-950' 
            : 'bg-rose-50 text-rose-950';

          const icon = isOrganic ? '🌱' : isRecyclable ? '♻️' : '🗑️';

          return (
            <div 
              key={item.id}
              className={`rounded-2xl border ${borderClass} bg-white shadow-xs overflow-hidden flex flex-col justify-between`}
            >
              <div>
                {/* Header */}
                <div className={`p-5 ${headerClass} border-b border-slate-100 flex items-start justify-between gap-3`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <div>
                      <h3 className="font-bold text-base leading-snug">{item.title}</h3>
                      <span className="text-xs font-semibold opacity-80">{item.binColor}</span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-5">
                  {/* Handling Description */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Disposal Handling
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {item.handling}
                    </p>
                  </div>

                  {/* Common Examples */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Common Domestic Examples
                    </h4>
                    <ul className="space-y-1.5">
                      {item.examples.map((ex, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">•</span>
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Do's & Don'ts */}
                  <div className="pt-2 border-t border-slate-100 space-y-3">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1 mb-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Best Practices (Do&apos;s)</span>
                      </div>
                      <ul className="space-y-1">
                        {item.doList.map((d, idx) => (
                          <li key={idx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                            <span className="text-emerald-500 shrink-0">✓</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1 mb-1.5">
                        <X className="w-3.5 h-3.5 text-rose-600" />
                        <span>Avoid (Don&apos;ts)</span>
                      </div>
                      <ul className="space-y-1">
                        {item.dontList.map((d, idx) => (
                          <li key={idx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                            <span className="text-rose-500 shrink-0">✗</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom footer badge */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 font-semibold flex items-center justify-between">
                <span>Standard Class</span>
                <span className="font-bold text-slate-700">{item.category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
