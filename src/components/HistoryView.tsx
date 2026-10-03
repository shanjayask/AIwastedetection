import React, { useState } from 'react';
import { 
  History, 
  Trash2, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  ExternalLink,
  Leaf,
  Recycle
} from 'lucide-react';
import { ClassificationResult, WasteCategory } from '../types';

interface HistoryViewProps {
  history: ClassificationResult[];
  onClearHistory: () => void;
  onSelectResult: (result: ClassificationResult) => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  history,
  onClearHistory,
  onSelectResult
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<'All' | WasteCategory>('All');

  // Filter history
  const filtered = history.filter((item) => {
    const matchesSearch = 
      item.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sourceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.recommendation.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const exportCsv = () => {
    if (history.length === 0) return;
    const headers = ['Timestamp', 'Source Image', 'Detected Item', 'Category', 'Confidence (%)', 'Recommendation'];
    const rows = history.map(item => [
      `"${item.timestamp}"`,
      `"${item.sourceName.replace(/"/g, '""')}"`,
      `"${item.item.replace(/"/g, '""')}"`,
      `"${item.category}"`,
      item.confidence.toFixed(1),
      `"${item.recommendation.replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `waste_classification_history_${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>📜 Classification History</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
              {history.length} Logged
            </span>
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Session history of analyzed waste images with item detection and category confidence.
          </p>
        </div>

        {history.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={exportCsv}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-2xs transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onClearHistory}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 transition-all cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          </div>
        )}
      </div>

      {history.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/50 p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mx-auto text-3xl">
            📜
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">No Classification History Yet</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              Analyze some waste items in the &ldquo;Classify Waste&rdquo; tab to view prediction logs, confidence records, and exportable reports here.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Controls: Search & Category Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by item, filename, or recommendation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
              />
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              {(['All', 'Organic', 'Recyclable', 'Non-Recyclable'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    categoryFilter === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat === 'All' ? 'All Categories' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tabular History View */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th scope="col" className="px-4 py-3.5">Preview</th>
                    <th scope="col" className="px-4 py-3.5">Detected Item</th>
                    <th scope="col" className="px-4 py-3.5">Category</th>
                    <th scope="col" className="px-4 py-3.5">Confidence</th>
                    <th scope="col" className="px-4 py-3.5">Date & Time</th>
                    <th scope="col" className="px-4 py-3.5">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-slate-400 text-sm">
                        No history records matching your search criteria.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((item) => (
                      <tr 
                        key={item.id}
                        className="hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                            <img 
                              src={item.imageUrl} 
                              alt={item.item} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="font-bold text-slate-900">{item.item}</div>
                          <div className="text-xs text-slate-400 truncate max-w-[140px]">{item.sourceName}</div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                            item.category === 'Organic'
                              ? 'bg-emerald-100 text-emerald-800'
                              : item.category === 'Recyclable'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}>
                            <span>{item.category === 'Organic' ? '🌱' : item.category === 'Recyclable' ? '♻️' : '🗑️'}</span>
                            <span>{item.category}</span>
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="font-semibold text-slate-900">{item.confidence.toFixed(1)}%</div>
                          <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
                            <div 
                              className={`h-full rounded-full ${
                                item.category === 'Organic' ? 'bg-emerald-500' :
                                item.category === 'Recyclable' ? 'bg-blue-600' : 'bg-rose-500'
                              }`} 
                              style={{ width: `${item.confidence}%` }}
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-xs text-slate-500">
                          {item.timestamp}
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-600 max-w-xs truncate">
                          {item.recommendation}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
