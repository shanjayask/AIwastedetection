import React from 'react';
import { 
  Home, 
  Camera, 
  History, 
  BarChart3, 
  BookOpen, 
  Info,
  Sparkles,
  Leaf,
  Recycle,
  Trash2
} from 'lucide-react';

export type NavTab = 'dashboard' | 'classify' | 'history' | 'statistics' | 'guide' | 'about';

interface NavbarProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  historyCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onTabChange, historyCount }) => {
  const navItems = [
    { id: 'dashboard' as NavTab, label: 'Dashboard', icon: Home, badge: null },
    { id: 'classify' as NavTab, label: 'Classify Waste', icon: Camera, badge: 'AI' },
    { id: 'history' as NavTab, label: 'History', icon: History, badge: historyCount > 0 ? historyCount : null },
    { id: 'statistics' as NavTab, label: 'Statistics', icon: BarChart3, badge: null },
    { id: 'guide' as NavTab, label: 'Waste Guide', icon: BookOpen, badge: null },
    { id: 'about' as NavTab, label: 'About & Docs', icon: Info, badge: 'Viva' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Project Title */}
          <div 
            onClick={() => onTabChange('dashboard')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Recycle className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight">EcoClassifier</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  AI Mini-Project
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Intelligent Waste Classification System</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-800 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive 
                        ? 'bg-emerald-200/80 text-emerald-900' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onTabChange('classify')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-sm shadow-emerald-600/30 transition-all hover:shadow-md cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>Classify Now</span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Sub-Navigation */}
        <div className="md:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
                  isActive 
                    ? 'bg-emerald-100 text-emerald-900 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
