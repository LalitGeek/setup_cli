import React, { useState, useEffect } from 'react';
import {
  Sparkles, Cpu, Search, Menu, X
} from 'lucide-react';

// Import components
import { ChatInterface } from './features/chat/ChatInterface';
import { CommandLibraryView } from './features/commands/CommandLibraryView';
import { DeveloperTools } from './features/tools/DeveloperTools';
import { SearchModal } from './features/search/SearchModal';

// Import command data
import { commandsData } from './features/commands/commandsData';
import type { TechnologyGuide } from './features/commands/commandsData';

// Types for navigation
type ViewType = 'chat' | 'library' | 'tools';

// Custom Brand SVG Icon Logo for Setup CLI
const LogoIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="app-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d946ef" />
        <stop offset="50%" stop-color="#8b5cf6" />
        <stop offset="100%" stop-color="#3b82f6" />
      </linearGradient>
      <linearGradient id="app-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e879f9" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#60a5fa" stop-opacity="0.05" />
      </linearGradient>
    </defs>
    <polygon 
      points="50,8 88,28 88,72 50,92 12,72 12,28" 
      fill="url(#app-glow-grad)" 
      stroke="url(#app-logo-grad)" 
      stroke-width="5" 
      stroke-linejoin="round" 
    />
    <path 
      d="M 32,34 L 52,50 L 32,66" 
      stroke="#ffffff" 
      stroke-width="8" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
    />
    <line 
      x1="60" 
      y1="66" 
      x2="74" 
      y2="66" 
      stroke="url(#app-logo-grad)" 
      stroke-width="8" 
      stroke-linecap="round" 
    />
  </svg>
);

export const App: React.FC = () => {
  // Navigation & Core States
  const [activeView, setActiveView] = useState<ViewType>('chat');
  const [selectedTechId, setSelectedTechId] = useState<string>('react');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // Enforce Dark Mode
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    root.style.backgroundColor = '#0b0c10';
  }, []);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + K -> Search Modal
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
      // Ctrl + / -> Focus Chat & Navigate to chat
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        setActiveView('chat');
      }
      // Esc -> close modals
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Group command guide items by Category for sidebar render
  const categoriesMap = Object.values(commandsData).reduce((acc, guide) => {
    if (!acc[guide.category]) acc[guide.category] = [];
    acc[guide.category].push(guide);
    return acc;
  }, {} as Record<string, TechnologyGuide[]>);

  const activeGuide = commandsData[selectedTechId];

  // Helper to select library guide and close mobile sidebar
  const handleSelectTech = (id: string) => {
    setSelectedTechId(id);
    setActiveView('library');
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden text-sm select-none transition-colors duration-200 bg-[#0b0c10] text-[#f3f4f6]">

      {/* Mobile Header Bar (Only visible on mobile screens) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 border-b px-4 flex items-center justify-between z-30 bg-[#0f111a] border-white/5">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-1.5 rounded-lg transition-colors cursor-pointer hover:bg-white/5 text-gray-400 hover:text-white"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2">
          <LogoIcon className="w-7 h-7" />
          <span className="font-bold tracking-tight text-white bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Setup CLI
          </span>
        </div>

        {/* Empty placeholder for flex alignment layout balance */}
        <div className="w-8" />
      </div>

      {/* Sidebar Backdrop (Mobile overlay close trigger) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        />
      )}

      {/* Sidebar Layout */}
      <aside className={`fixed md:relative inset-y-0 left-0 w-64 border-r flex flex-col transition-transform duration-300 z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } bg-[#0f111a] border-white/5`}>

        {/* Brand Header */}
        <div className="p-4.5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <LogoIcon className="w-8 h-8 filter drop-shadow-[0_4px_10px_rgba(139,92,246,0.15)]" />
            <span className="font-extrabold tracking-tight text-white bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Setup CLI
            </span>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sidebar Search Trigger */}
        <div className="p-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg border text-left transition duration-150 cursor-pointer bg-gray-950/60 border-white/5 text-gray-500 hover:border-purple-500/40 hover:text-gray-400"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="text-xs flex-1">Search Guides...</span>
            <span className="text-[9px] bg-gray-800 border border-white/5 text-gray-500 px-1 py-0.5 rounded font-mono">
              Ctrl K
            </span>
          </button>
        </div>

        {/* View Selection Controls */}
        <div className="px-3 pb-3 border-b border-white/5 space-y-1">
          <button
            onClick={() => {
              setActiveView('chat');
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center space-x-2.5 ${
              activeView === 'chat'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/10'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Assistant</span>
          </button>

          <button
            onClick={() => {
              setActiveView('tools');
              setSidebarOpen(false);
            }}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center space-x-2.5 ${
              activeView === 'tools'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/10'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Developer Utilities</span>
          </button>
        </div>

        {/* Categorized Command Library list */}
        <div className="flex-1 overflow-y-auto p-3.5 space-y-4">
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block px-2.5">Command Libraries</span>

          <div className="space-y-4">
            {Object.entries(categoriesMap).map(([category, items]) => (
              <div key={category} className="space-y-1">
                <span className="text-[10px] text-gray-400 font-semibold block px-2.5 uppercase tracking-wide">
                  {category}
                </span>
                <div className="space-y-0.5">
                  {items.map((tech) => (
                    <button
                      key={tech.id}
                      onClick={() => handleSelectTech(tech.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition ${
                        activeView === 'library' && selectedTechId === tech.id
                          ? 'bg-purple-950/40 text-purple-400 font-bold border-l-2 border-purple-500'
                          : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                      }`}
                    >
                      {tech.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="hidden md:flex p-3 border-t border-white/5 items-center justify-between bg-black/10">
          <span className="text-[10px] text-gray-500 font-mono">Local Mode</span>
          <span className="text-[10px] text-purple-400 font-semibold tracking-wider uppercase bg-purple-950/40 border border-purple-900 px-2 py-0.5 rounded-md">v1.0.0</span>
        </div>
      </aside>

      {/* Main Workspace Frame */}
      <main className="flex-1 h-full overflow-hidden flex flex-col pt-14 md:pt-0">
        <div className="flex-1 h-full overflow-hidden p-3 md:p-5">
          {activeView === 'chat' && (
            <ChatInterface />
          )}

          {activeView === 'library' && activeGuide && (
            <CommandLibraryView
              guide={activeGuide}
            />
          )}

          {activeView === 'tools' && (
            <DeveloperTools />
          )}
        </div>
      </main>

      {/* Global search launcher overlay */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectTechnology={handleSelectTech}
      />
    </div>
  );
};

export default App;
