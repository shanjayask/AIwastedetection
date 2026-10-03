/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { ClassifyWasteView } from './components/ClassifyWasteView';
import { HistoryView } from './components/HistoryView';
import { StatisticsView } from './components/StatisticsView';
import { WasteGuideView } from './components/WasteGuideView';
import { AboutAndDocsView } from './components/AboutAndDocsView';
import { ClassificationResult } from './types';
import { SAMPLE_WASTE_ITEMS, SampleWasteItem } from './data/sampleWaste';
import { Recycle, Heart, Github, Award, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('dashboard');
  const [targetSample, setTargetSample] = useState<SampleWasteItem | null>(null);

  // Seed with 2 initial realistic classifications for instant demo readiness
  const [history, setHistory] = useState<ClassificationResult[]>([
    {
      id: 'demo_init_1',
      timestamp: new Date(Date.now() - 1000 * 60 * 18).toLocaleString(),
      imageUrl: SAMPLE_WASTE_ITEMS[0].imageUrl,
      sourceName: SAMPLE_WASTE_ITEMS[0].name,
      item: SAMPLE_WASTE_ITEMS[0].defaultItem,
      category: SAMPLE_WASTE_ITEMS[0].expectedCategory,
      confidence: SAMPLE_WASTE_ITEMS[0].defaultConfidence,
      recommendation: SAMPLE_WASTE_ITEMS[0].defaultRecommendation,
      materialComposition: SAMPLE_WASTE_ITEMS[0].materialComposition,
      environmentalImpact: SAMPLE_WASTE_ITEMS[0].environmentalImpact,
    },
    {
      id: 'demo_init_2',
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toLocaleString(),
      imageUrl: SAMPLE_WASTE_ITEMS[1].imageUrl,
      sourceName: SAMPLE_WASTE_ITEMS[1].name,
      item: SAMPLE_WASTE_ITEMS[1].defaultItem,
      category: SAMPLE_WASTE_ITEMS[1].expectedCategory,
      confidence: SAMPLE_WASTE_ITEMS[1].defaultConfidence,
      recommendation: SAMPLE_WASTE_ITEMS[1].defaultRecommendation,
      materialComposition: SAMPLE_WASTE_ITEMS[1].materialComposition,
      environmentalImpact: SAMPLE_WASTE_ITEMS[1].environmentalImpact,
    }
  ]);

  const handleClassificationSuccess = (result: ClassificationResult) => {
    setHistory((prev) => [result, ...prev]);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const handleSelectSampleForClassification = (sample: SampleWasteItem) => {
    setTargetSample(sample);
    setCurrentTab('classify');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Top Navigation */}
      <Navbar 
        currentTab={currentTab} 
        onTabChange={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
        historyCount={history.length}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentTab === 'dashboard' && (
          <DashboardView 
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectSampleForClassification={handleSelectSampleForClassification}
          />
        )}

        {currentTab === 'classify' && (
          <ClassifyWasteView 
            onClassificationSuccess={handleClassificationSuccess}
            initialSample={targetSample}
            onClearInitialSample={() => setTargetSample(null)}
          />
        )}

        {currentTab === 'history' && (
          <HistoryView 
            history={history}
            onClearHistory={handleClearHistory}
            onSelectResult={(result) => {
              setTargetSample({
                id: result.id,
                name: result.sourceName,
                expectedCategory: result.category,
                description: result.item,
                imageUrl: result.imageUrl,
                defaultItem: result.item,
                defaultConfidence: result.confidence,
                defaultRecommendation: result.recommendation,
                materialComposition: result.materialComposition || '',
                environmentalImpact: result.environmentalImpact || '',
              });
              setCurrentTab('classify');
            }}
          />
        )}

        {currentTab === 'statistics' && (
          <StatisticsView 
            history={history}
            onNavigateToClassify={() => setCurrentTab('classify')}
          />
        )}

        {currentTab === 'guide' && (
          <WasteGuideView />
        )}

        {currentTab === 'about' && (
          <AboutAndDocsView />
        )}
      </main>

      {/* College Project Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center font-bold">
              ♻️
            </div>
            <span className="font-semibold text-slate-800">AI-Based Waste Classification System</span>
            <span>&bull;</span>
            <span>College Mini-Project 2026</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              Department of Computer Science &amp; Engineering
            </span>
            <span>&bull;</span>
            <button
              onClick={() => {
                setCurrentTab('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-emerald-700 hover:text-emerald-800 font-semibold cursor-pointer underline underline-offset-2"
            >
              Viva Preparation
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
