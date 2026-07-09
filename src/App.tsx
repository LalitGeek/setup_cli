import React, { useState, useEffect } from 'react';
import {
  Terminal, Sparkles, Cpu, Search, Moon, Sun, Menu, X
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

export const App: React.FC = () => {
  // Navigation & Core States
  const [activeView, setActiveView] = useState<ViewType>('chat');
  const [selectedTechId, setSelectedTechId] = useState<string>('react');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Theme Sync
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#0b0c10';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#f9fafb';
    }
  }, [theme]);

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
    <div className={`flex h-screen overflow-hidden text-sm select-none transition-colors duration-200 ${theme === 'dark' ? 'bg-[#0b0c10] text-[#f3f4f6]' : 'bg-[#f3f4f6] text-[#1f2937]'
      }`}>

      {/* Mobile Header Bar (Only visible on mobile screens) */}
      <div className={`md:hidden fixed top-0 left-0 right-0 h-14 border-b px-4 flex items-center justify-between z-30 ${theme === 'dark' ? 'bg-[#0f111a] border-white/5' : 'bg-white border-gray-200'
        }`}>
        <button
          onClick={() => setSidebarOpen(true)}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'hover:bg-white/5 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'
            }`}
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold tracking-tight text-white bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Setup CLI
          </span>
        </div>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'hover:bg-white/5 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
            }`}
        >
          {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
        </button>
      </div>

      {/* Sidebar Backdrop (Mobile overlay close trigger) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        />
      )}

      {/* Sidebar Layout */}
      <aside className={`fixed md:relative inset-y-0 left-0 w-64 border-r flex flex-col transition-transform duration-300 z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } ${theme === 'dark' ? 'bg-[#0f111a] border-white/5' : 'bg-white border-gray-200'
        }`}>

        {/* Brand Header */}
        <div className="p-4.5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Terminal className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-extrabold tracking-tight text-white bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Setup CLI
            </span>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className={`md:hidden p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sidebar Search Trigger */}
        <div className="p-3">
          <button
            onClick={() => setSearchOpen(true)}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg border text-left transition duration-150 cursor-pointer ${theme === 'dark'
              ? 'bg-gray-950/60 border-white/5 text-gray-500 hover:border-purple-500/40 hover:text-gray-400'
              : 'bg-gray-50 border-gray-200 text-gray-400 hover:border-purple-400/50 hover:text-gray-600'
              }`}
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
            className={`w-full text-left px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center space-x-2.5 ${activeView === 'chat'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/10'
              : theme === 'dark' ? 'text-gray-400 hover:bg-white/5 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-black'
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
            className={`w-full text-left px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center space-x-2.5 ${activeView === 'tools'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/10'
              : theme === 'dark' ? 'text-gray-400 hover:bg-white/5 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-black'
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
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition ${activeView === 'library' && selectedTechId === tech.id
                        ? 'bg-purple-950/40 text-purple-400 font-bold border-l-2 border-purple-500'
                        : theme === 'dark' ? 'text-gray-400 hover:bg-white/5 hover:text-gray-200' : 'text-gray-600 hover:bg-gray-100 hover:text-black'
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

        {/* Sidebar Footer - Theme Toggle (Hidden on mobile as it is inside the header) */}
        <div className="hidden md:flex p-3 border-t border-white/5 items-center justify-between bg-black/10">
          <span className="text-[10px] text-gray-500 font-mono">Local Mode</span>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'hover:bg-white/5 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-600 hover:text-black'
              }`}
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>
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
