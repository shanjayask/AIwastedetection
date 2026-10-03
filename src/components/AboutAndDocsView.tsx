import React, { useState } from 'react';
import { 
  Info, 
  Presentation, 
  HelpCircle, 
  FileText, 
  Code, 
  ChevronLeft, 
  ChevronRight, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal,
  FolderGit2
} from 'lucide-react';
import { VIVA_QUESTIONS, PRESENTATION_SLIDES } from '../data/collegeData';

export const AboutAndDocsView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'docs' | 'presentation' | 'viva' | 'python'>('docs');
  
  // Presentation Slider State
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Viva Accordion State
  const [expandedVivaId, setExpandedVivaId] = useState<number | null>(1);
  const [vivaSearch, setVivaSearch] = useState<string>('');

  // Python Code View State
  const [activePythonFile, setActivePythonFile] = useState<'app.py' | 'requirements.txt' | 'README.md' | '.env'>('app.py');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];

  const handleNextSlide = () => {
    if (currentSlideIndex < PRESENTATION_SLIDES.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const filteredViva = VIVA_QUESTIONS.filter(q => 
    q.question.toLowerCase().includes(vivaSearch.toLowerCase()) ||
    q.answer.toLowerCase().includes(vivaSearch.toLowerCase()) ||
    q.category.toLowerCase().includes(vivaSearch.toLowerCase())
  );

  const getPythonFileContent = (file: string) => {
    if (file === 'requirements.txt') {
      return `streamlit>=1.35.0
google-genai>=0.1.1
google-generativeai>=0.8.0
pillow>=10.3.0
pandas>=2.2.0
python-dotenv>=1.0.1`;
    }
    if (file === '.env') {
      return `# AI-Based Waste Classification System Environment Configuration
# Replace with your Google Gemini API Key from https://aistudio.google.com/app/apikey
GEMINI_API_KEY=YOUR_API_KEY_HERE`;
    }
    if (file === 'README.md') {
      return `# AI-Based Waste Classification System (College Mini-Project)
Windows + VS Code Quick Start:
1. python -m venv venv
2. .\\venv\\Scripts\\Activate.ps1
3. pip install -r requirements.txt
4. streamlit run app.py`;
    }
    return `# app.py - Main Streamlit Application
import streamlit as st
import pandas as pd
from PIL import Image
import os
from dotenv import load_dotenv

load_dotenv()
st.set_page_config(page_title="AI Waste Classification System", page_icon="♻️", layout="wide")

# Categories: Organic, Recyclable, Non-Recyclable
# Powered by Google Gemini Vision API
# (See app.py in root or AI-Waste-Classification/ folder)`;
  };

  const copyPythonCode = () => {
    navigator.clipboard.writeText(getPythonFileContent(activePythonFile));
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>ℹ️ College Mini-Project Portal</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
            Submission Ready
          </span>
        </h1>
        <p className="text-slate-600 text-sm mt-1">
          Complete formal documentation, 10-slide seminar presentation, 18 viva questions &amp; answers, and Windows setup instructions.
        </p>
      </div>

      {/* Sub Tabs Navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto gap-2">
        <button
          onClick={() => setActiveSubTab('docs')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'docs'
              ? 'border-emerald-600 text-emerald-800'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>College Documentation</span>
        </button>

        <button
          onClick={() => setActiveSubTab('presentation')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'presentation'
              ? 'border-emerald-600 text-emerald-800'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Presentation className="w-4 h-4" />
          <span>10-Slide Presentation (PPT)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('viva')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'viva'
              ? 'border-emerald-600 text-emerald-800'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Viva Q&amp;A (18 Questions)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('python')}
          className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
            activeSubTab === 'python'
              ? 'border-emerald-600 text-emerald-800'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Windows + VS Code Setup</span>
        </button>
      </div>

      {/* ========================================= */}
      {/* TAB 1: FORMAL COLLEGE DOCUMENTATION */}
      {/* ========================================= */}
      {activeSubTab === 'docs' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
          {/* Abstract */}
          <section className="space-y-2">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Section 1
            </div>
            <h2 className="text-xl font-bold text-slate-900">Abstract (185 Words)</h2>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              Rapid urban development, population growth, and escalating consumer consumption patterns have exacerbated the global solid waste management crisis. Ineffective segregation at the source of generation is the primary bottleneck leading to landfill overfill, resource wastage, and soil and groundwater pollution. 
              This project presents the design and implementation of an automated <strong>AI-Based Waste Classification System</strong> utilizing modern computer vision and multimodal foundation models. The system enables users to upload digital images or capture live photos of domestic waste items and automatically categorizes them into three mutually exclusive classes: <strong>Organic</strong>, <strong>Recyclable</strong>, and <strong>Non-Recyclable</strong>. 
              Powered by the Google Gemini Vision foundation model via API integration and an intuitive Python Streamlit interface, the application evaluates visual characteristics, computes confidence metrics, and delivers context-aware, actionable disposal recommendations. Additionally, the platform provides session-based history logging, statistical analytics, and an educational segregation guide. 
              By eliminating the necessity for costly hardware prototypes and prolonged neural network training regimes, this software solution achieves high diagnostic precision and rapid turnaround, serving as a scalable pedagogical and practical prototype for modern waste segregation.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="space-y-2">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Section 2
            </div>
            <h2 className="text-xl font-bold text-slate-900">Problem Statement (130 Words)</h2>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
              Municipal Solid Waste (MSW) sorting remains predominantly manual in most developing and developed nations. Manual sorting is labor-intensive, hygienically hazardous, and severely prone to human error, resulting in cross-contamination that degrades otherwise recyclable materials. 
              Furthermore, urban citizens frequently lack precise understanding regarding the recyclability of specific items, such as multi-layer plastics, composite packaging, or grease-stained paper. While hardware-based automated sorting solutions exist, their prohibitive capital cost and installation complexity prevent widespread deployment at community and residential levels. 
              Therefore, there is an urgent demand for a lightweight, software-only, easily accessible Artificial Intelligence tool that empowers everyday individuals, educational institutions, and facilities managers to accurately identify waste types, observe classification confidence, and receive immediate disposal guidance.
            </p>
          </section>

          {/* Objectives */}
          <section className="space-y-3">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Section 3
            </div>
            <h2 className="text-xl font-bold text-slate-900">Project Objectives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Accurate Classification:</strong> Classify waste images into exactly Organic, Recyclable, or Non-Recyclable.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero Hardware Dependency:</strong> Pure software solution executable on standard PCs without robotics.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Actionable Guidance:</strong> Provide practical disposal and cleaning instructions for identified objects.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Transparent Confidence:</strong> Output mathematical probability percentages for transparent AI decisions.</span>
              </div>
            </div>
          </section>

          {/* Modules */}
          <section className="space-y-3">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Section 4
            </div>
            <h2 className="text-xl font-bold text-slate-900">System Modules (6 Modules)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-sm text-slate-900 mb-1">1. Image Upload Module</h3>
                <p className="text-xs text-slate-600">Handles JPG, PNG, WEBP, and live camera feed with dimension validation.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-sm text-slate-900 mb-1">2. Preprocessing Module</h3>
                <p className="text-xs text-slate-600">Uses Pillow (PIL) for RGB normalization and byte stream transmission formatting.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-sm text-slate-900 mb-1">3. AI Classification Module</h3>
                <p className="text-xs text-slate-600">Calls Google Gemini Vision API with structured prompts and strict schema output.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-sm text-slate-900 mb-1">4. Result Display Module</h3>
                <p className="text-xs text-slate-600">Renders distinct visual card aesthetics, confidence gauges, and item labels.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-sm text-slate-900 mb-1">5. Recommendation Module</h3>
                <p className="text-xs text-slate-600">Generates location-aware eco disposal steps (cleaning, bin colors, composting).</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="font-bold text-sm text-slate-900 mb-1">6. History &amp; Statistics Module</h3>
                <p className="text-xs text-slate-600">Maintains session logs, interactive charts, and CSV data export capabilities.</p>
              </div>
            </div>
          </section>

          {/* Software & Hardware Specs */}
          <section className="space-y-3">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Section 5
            </div>
            <h2 className="text-xl font-bold text-slate-900">System Requirements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-sm text-slate-900">Software Requirements:</h3>
                <p>• OS: Windows 10 / 11, macOS, or Linux</p>
                <p>• Language: Python 3.10+ (or Node.js v20+ for web)</p>
                <p>• IDE: Visual Studio Code</p>
                <p>• Packages: Streamlit, google-genai, Pillow, Pandas, python-dotenv</p>
                <p>• Connectivity: Broadband internet for Gemini API calls</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-sm text-slate-900">Hardware Requirements:</h3>
                <p>• Device: Standard Personal Computer / Laptop</p>
                <p>• Processor: Intel Core i3 / AMD Ryzen 3 or higher</p>
                <p>• Memory (RAM): Minimum 4 GB (8 GB recommended)</p>
                <p>• Storage: Minimum 500 MB free hard drive space</p>
                <p>• Camera: Integrated laptop webcam or USB camera (optional)</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ========================================= */}
      {/* TAB 2: INTERACTIVE 10-SLIDE PPT VIEWER */}
      {/* ========================================= */}
      {activeSubTab === 'presentation' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-600">
              Slide <span className="font-bold text-slate-900">{currentSlide.slideNumber}</span> of {PRESENTATION_SLIDES.length}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevSlide}
                disabled={currentSlideIndex === 0}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slide Deck Screen */}
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white p-8 sm:p-14 shadow-xl border border-slate-800 min-h-[380px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  College Seminar Presentation
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-semibold">
                  Slide {currentSlide.slideNumber}/10
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                {currentSlide.title}
              </h2>
              {currentSlide.subtitle && (
                <p className="text-base text-emerald-300 font-medium mb-6">
                  {currentSlide.subtitle}
                </p>
              )}

              <ul className="space-y-3 max-w-3xl">
                {currentSlide.points.map((pt, i) => (
                  <li key={i} className="text-sm sm:text-base text-slate-200 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {currentSlide.keyHighlight && (
              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-300 font-semibold">
                <span>Key Takeaway: {currentSlide.keyHighlight}</span>
                <span className="text-slate-400">AI Waste Classifier 2026</span>
              </div>
            )}
          </div>

          {/* Slide Thumbnail Strip */}
          <div className="flex items-center gap-2 overflow-x-auto py-2">
            {PRESENTATION_SLIDES.map((slide, idx) => (
              <button
                key={slide.slideNumber}
                type="button"
                onClick={() => setCurrentSlideIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  currentSlideIndex === idx
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Slide {slide.slideNumber}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ========================================= */}
      {/* TAB 3: VIVA VOCE QUESTIONS & ANSWERS */}
      {/* ========================================= */}
      {activeSubTab === 'viva' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search viva questions (e.g., confidence, CNN, Streamlit)..."
                value={vivaSearch}
                onChange={(e) => setVivaSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white"
              />
            </div>
            <div className="text-xs text-slate-500">
              Showing {filteredViva.length} of {VIVA_QUESTIONS.length} Questions
            </div>
          </div>

          <div className="space-y-3">
            {filteredViva.map((q) => {
              const isExpanded = expandedVivaId === q.id;
              return (
                <div 
                  key={q.id}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedVivaId(isExpanded ? null : q.id)}
                    className="w-full text-left p-4.5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                        Q{q.id}
                      </span>
                      <span className="font-bold text-slate-900 text-sm">{q.question}</span>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 shrink-0">
                      {q.category}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="p-4.5 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/60 whitespace-pre-line">
                      <strong className="text-emerald-900 font-bold block mb-1">Examiner Expected Answer:</strong>
                      {q.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================= */}
      {/* TAB 4: PYTHON STREAMLIT & WINDOWS SETUP */}
      {/* ========================================= */}
      {activeSubTab === 'python' && (
        <div className="space-y-8">
          {/* Windows + VS Code Terminal Quick Guide */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
              <Terminal className="w-5 h-5" />
              <span>Windows 10 / 11 + VS Code Quick Start (Under 3 Minutes)</span>
            </div>

            <p className="text-xs text-slate-300">
              Run these exact commands in your VS Code terminal (press <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">Ctrl + `</kbd>):
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500"># Step 1: Create virtual environment</span>
                <div className="text-emerald-400 select-all">python -m venv venv</div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500"># Step 2: Activate virtual environment (PowerShell)</span>
                <div className="text-emerald-400 select-all">.\venv\Scripts\Activate.ps1</div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500"># Step 3: Install all required libraries</span>
                <div className="text-emerald-400 select-all">pip install -r requirements.txt</div>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500"># Step 4: Run the Streamlit web application</span>
                <div className="text-emerald-400 select-all">streamlit run app.py</div>
              </div>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {(['app.py', 'requirements.txt', 'README.md', '.env'] as const).map((file) => (
                  <button
                    key={file}
                    type="button"
                    onClick={() => setActivePythonFile(file)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      activePythonFile === file
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-200/60'
                    }`}
                  >
                    {file}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={copyPythonCode}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied!' : 'Copy File Content'}</span>
              </button>
            </div>

            <div className="p-4 bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto max-h-96">
              <pre>{getPythonFileContent(activePythonFile)}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
