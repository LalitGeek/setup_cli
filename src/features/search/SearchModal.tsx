import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, Copy, Check } from 'lucide-react';
import { commandsData } from '../commands/commandsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTechnology: (id: string) => void;
}

interface SearchResultItem {
  type: 'tech' | 'command' | 'error';
  title: string;
  subtitle: string;
  content: string;
  techId: string;
}

const POPULAR_SEARCHES = [
  'React Setup',
  'Docker Compose',
  'Nginx Reverse Proxy',
  'PostgreSQL CLI connection',
  'Git Undo Commit'
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectTechnology
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>(['Vite React', 'Django settings.py', 'docker build']);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Click outside to close modal
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Handle Search Filtering
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const matches: SearchResultItem[] = [];

    Object.values(commandsData).forEach((tech) => {
      // Match tech name
      if (tech.name.toLowerCase().includes(query) || tech.category.toLowerCase().includes(query)) {
        matches.push({
          type: 'tech',
          title: tech.name,
          subtitle: `Category: ${tech.category} — Open setup library`,
          content: tech.overview,
          techId: tech.id
        });
      }

      // Match command code/titles
      tech.installation.concat(tech.projectCreation).concat(tech.run).concat(tech.build).forEach((sec) => {
        if (sec.list) {
          sec.list.forEach((item) => {
            const [cmd, desc, example] = item.split('|');
            if (cmd.toLowerCase().includes(query) || desc.toLowerCase().includes(query) || (example && example.toLowerCase().includes(query))) {
              matches.push({
                type: 'command',
                title: `${tech.name}: ${cmd}`,
                subtitle: desc,
                content: example || cmd,
                techId: tech.id
              });
            }
          });
        } else {
          if (sec.title.toLowerCase().includes(query) || (sec.code && sec.code.toLowerCase().includes(query))) {
            matches.push({
              type: 'command',
              title: `${tech.name}: ${sec.title}`,
              subtitle: 'CLI Command Snippet',
              content: sec.code || '',
              techId: tech.id
            });
          }
        }
      });

      // Match common errors
      tech.commonErrors.forEach((err) => {
        if (err.error.toLowerCase().includes(query) || err.solution.toLowerCase().includes(query)) {
          matches.push({
            type: 'error',
            title: `${tech.name} Error: ${err.error.slice(0, 45)}...`,
            subtitle: 'Troubleshooting & Solution',
            content: err.solution,
            techId: tech.id
          });
        }
      });
    });

    setResults(matches.slice(0, 8)); // Limit to top 8 matches for UX
  }, [searchQuery]);

  const handleCopy = (e: React.MouseEvent, content: string, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    // Removed audit logging
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleResultClick = (item: SearchResultItem) => {
    // Add to recents
    if (!recentSearches.includes(searchQuery)) {
      setRecentSearches(prev => [searchQuery, ...prev.slice(0, 4)]);
    }

    if (item.type === 'tech') {
      onSelectTechnology(item.techId);
    } else {
      // Let's ask AI about this command or show in library
      onSelectTechnology(item.techId);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-start justify-center pt-20 px-4">
      <div
        ref={modalRef}
        className="w-full max-w-2xl bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
      >
        {/* Search Input Head */}
        <div className="flex items-center px-4 py-3 bg-gray-950/80 border-b border-white/5">
          <Search className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by framework, command, error log, or library..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-0 text-sm text-white placeholder-gray-500 focus:ring-0 focus:outline-none py-1"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-gray-500 hover:text-gray-300 p-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <span className="text-[10px] bg-gray-800 border border-white/5 text-gray-400 px-2 py-0.5 rounded font-mono ml-2">
            ESC
          </span>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {searchQuery.trim() === '' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Popular Searches */}
              <div className="space-y-2">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Popular Commands</span>
                <div className="space-y-1">
                  {POPULAR_SEARCHES.map((term, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(term)}
                      className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-gray-300 hover:bg-white/5 hover:text-white transition flex items-center"
                    >
                      <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent searches */}
              <div className="space-y-2">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Recent Searches</span>
                {recentSearches.length > 0 ? (
                  <div className="space-y-1">
                    {recentSearches.map((term, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSearchQuery(term)}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:bg-white/5 hover:text-gray-200 transition flex items-center"
                      >
                        <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
                        <span>{term}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <span className="text-[10px] text-gray-600 italic px-3">No recent searches</span>
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10">
              <span className="text-xs text-gray-500 italic block">No matching results found for "{searchQuery}"</span>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-2">Search Results ({results.length})</span>
              {results.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleResultClick(item)}
                  className="bg-gray-800/40 hover:bg-gray-800/80 border border-white/5 rounded-xl p-3 flex justify-between items-center transition cursor-pointer group"
                >
                  <div className="flex-1 min-w-0 pr-4 text-left">
                    <div className="flex items-center space-x-2">
                      <span className={`w-2 h-2 rounded-full ${
                        item.type === 'tech' ? 'bg-purple-500' : item.type === 'command' ? 'bg-green-500' : 'bg-red-500'
                      }`}></span>
                      <span className="text-xs font-bold text-gray-200 truncate">{item.title}</span>
                      <span className="text-[9px] bg-black/45 border border-white/5 px-2 py-0.5 rounded text-gray-500 uppercase tracking-wide">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-[10px] text-purple-400/90 block mt-0.5">{item.subtitle}</span>
                    <span className="text-xs text-gray-400 mt-1 block truncate max-w-lg font-mono">
                      {item.content.replace(/\n/g, ' ')}
                    </span>
                  </div>

                  {item.type !== 'tech' && (
                    <button
                      onClick={(e) => handleCopy(e, item.content, `search-${idx}`)}
                      className="opacity-0 group-hover:opacity-100 bg-gray-900 border border-white/10 hover:border-purple-500 p-2 rounded-lg transition"
                      title="Copy command code"
                    >
                      {copiedId === `search-${idx}` ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-gray-400 hover:text-purple-400" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-950/80 px-4 py-2 border-t border-white/5 text-[10px] text-gray-500 flex justify-between items-center font-mono">
          <span>Navigate with Arrow keys and Enter</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
