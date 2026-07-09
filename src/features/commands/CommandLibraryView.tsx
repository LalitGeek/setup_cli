import React, { useState } from 'react';
import { BookOpen, Folder, Play, Check, Copy, Download, Link2, AlertTriangle, Lightbulb, Search } from 'lucide-react';
import type { TechnologyGuide, CommandSection } from './commandsData';

interface CommandLibraryViewProps {
  guide: TechnologyGuide;
}

const getTechTheme = (techId: string) => {
  const themes: Record<string, { badge: string; text: string; bg: string; border: string }> = {
    react: {
      badge: 'bg-cyan-950/40 border-cyan-800 text-cyan-300',
      text: 'text-cyan-400',
      bg: 'from-cyan-950/25 via-transparent to-transparent',
      border: 'border-cyan-500/20'
    },
    nextjs: {
      badge: 'bg-zinc-800/40 border-zinc-700 text-zinc-300',
      text: 'text-white',
      bg: 'from-zinc-900/30 via-transparent to-transparent',
      border: 'border-zinc-500/20'
    },
    vue: {
      badge: 'bg-emerald-950/40 border-emerald-800 text-emerald-300',
      text: 'text-emerald-400',
      bg: 'from-emerald-950/20 via-transparent to-transparent',
      border: 'border-emerald-500/20'
    },
    nuxt: {
      badge: 'bg-teal-950/40 border-teal-800 text-teal-300',
      text: 'text-teal-400',
      bg: 'from-teal-950/20 via-transparent to-transparent',
      border: 'border-teal-500/20'
    },
    angular: {
      badge: 'bg-rose-950/40 border-rose-800 text-rose-300',
      text: 'text-rose-400',
      bg: 'from-rose-950/20 via-transparent to-transparent',
      border: 'border-rose-500/20'
    },
    svelte: {
      badge: 'bg-orange-950/40 border-orange-800 text-orange-300',
      text: 'text-orange-400',
      bg: 'from-orange-950/20 via-transparent to-transparent',
      border: 'border-orange-500/20'
    },
    solid: {
      badge: 'bg-sky-950/40 border-sky-800 text-sky-300',
      text: 'text-sky-400',
      bg: 'from-sky-950/20 via-transparent to-transparent',
      border: 'border-sky-500/20'
    },
    tailwind: {
      badge: 'bg-cyan-950/40 border-cyan-800 text-cyan-300',
      text: 'text-cyan-400',
      bg: 'from-cyan-950/20 via-transparent to-transparent',
      border: 'border-cyan-500/20'
    },
    django: {
      badge: 'bg-emerald-950/40 border-emerald-800 text-emerald-300',
      text: 'text-emerald-400',
      bg: 'from-emerald-950/25 via-transparent to-transparent',
      border: 'border-emerald-500/20'
    },
    docker: {
      badge: 'bg-blue-950/40 border-blue-800 text-blue-300',
      text: 'text-blue-400',
      bg: 'from-blue-950/25 via-transparent to-transparent',
      border: 'border-blue-500/20'
    },
    nginx: {
      badge: 'bg-green-950/40 border-green-800 text-green-300',
      text: 'text-green-400',
      bg: 'from-green-950/25 via-transparent to-transparent',
      border: 'border-green-500/20'
    },
    git: {
      badge: 'bg-orange-950/40 border-orange-800 text-orange-300',
      text: 'text-orange-400',
      bg: 'from-orange-950/25 via-transparent to-transparent',
      border: 'border-orange-500/20'
    },
    linux: {
      badge: 'bg-amber-950/40 border-amber-800 text-amber-300',
      text: 'text-amber-400',
      bg: 'from-amber-950/20 via-transparent to-transparent',
      border: 'border-amber-500/20'
    },
    arch: {
      badge: 'bg-sky-950/40 border-sky-800 text-sky-300',
      text: 'text-sky-400',
      bg: 'from-sky-950/20 via-transparent to-transparent',
      border: 'border-sky-500/20'
    }
  };
  return themes[techId] || {
    badge: 'bg-purple-950/40 border-purple-800 text-purple-300',
    text: 'text-purple-400',
    bg: 'from-purple-950/25 via-transparent to-transparent',
    border: 'border-purple-500/20'
  };
};

export const CommandLibraryView: React.FC<CommandLibraryViewProps> = ({
  guide
}) => {
  const theme = getTechTheme(guide.id);
  const [activeTab, setActiveTab] = useState<'setup' | 'structure' | 'prod' | 'errors'>('setup');
  const [copiedSectionIdx, setCopiedSectionIdx] = useState<string | null>(null);
  
  // Custom Linux State Hooks (declared unconditionally at start)
  const [linuxSearch, setLinuxSearch] = useState('');
  const [selectedLinuxCat, setSelectedLinuxCat] = useState('All');
  const [linuxCopiedCmd, setLinuxCopiedCmd] = useState<string | null>(null);

  const handleCopyLinuxCmd = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setLinuxCopiedCmd(cmd);
    setTimeout(() => setLinuxCopiedCmd(null), 1500);
  };

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSectionIdx(id);
    setTimeout(() => setCopiedSectionIdx(null), 2000);
  };

  if (guide.id === 'linux') {
    const filteredCategories = guide.run.map(category => {
      if (!category.list) return null;
      
      const matchesSearch = category.list.filter(item => {
        const [cmd, desc] = item.split('|');
        const query = linuxSearch.toLowerCase();
        return cmd.toLowerCase().includes(query) || desc.toLowerCase().includes(query);
      });

      if (matchesSearch.length === 0) return null;

      // Filter by selected category tab if not 'All'
      if (selectedLinuxCat !== 'All' && category.title !== selectedLinuxCat) return null;

      return {
        ...category,
        list: matchesSearch
      };
    }).filter(Boolean) as CommandSection[];

    return (
      <div className="flex flex-col h-full bg-[#0b0c10]/40 rounded-xl border border-white/5 overflow-hidden">
        {/* Linux Banner / Header */}
        <div className={`p-4 md:p-6 bg-gradient-to-r ${theme.bg} border-b border-white/10`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className={`text-[10px] border px-2.5 py-1 rounded-md font-semibold tracking-wider uppercase ${theme.badge}`}>
                {guide.category}
              </span>
              <h1 className="text-xl md:text-3xl font-extrabold text-white mt-2.5 tracking-tight flex items-center space-x-2">
                <span>🐧 Linux Commands Directory</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-400 mt-2 max-w-3xl leading-relaxed">
                {guide.overview}
              </p>
            </div>
            
            {/* Search Input in header */}
            <div className="relative w-full md:w-80 flex-shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search commands, e.g. ls, grep, ufw..."
                value={linuxSearch}
                onChange={(e) => setLinuxSearch(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition"
              />
            </div>
          </div>
        </div>

        {/* Content Area with side categories list */}
        <div className="flex-1 flex overflow-hidden">
          {/* Side Categories list - Sticky scroll */}
          <div className="hidden lg:block w-64 border-r border-white/5 bg-black/20 overflow-y-auto p-4 space-y-1.5 flex-shrink-0">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block px-2 mb-2">
              Categories
            </span>
            <button
              onClick={() => setSelectedLinuxCat('All')}
              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition flex items-center justify-between ${
                selectedLinuxCat === 'All'
                  ? 'bg-purple-950/40 text-purple-400 font-bold border-l-2 border-purple-500'
                  : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
              }`}
            >
              <span>All Categories</span>
              <span className="text-[10px] bg-gray-900 border border-white/5 text-gray-500 px-1.5 py-0.2 rounded-full font-mono">
                {guide.run.reduce((acc, cat) => acc + (cat.list?.length || 0), 0)}
              </span>
            </button>
            {guide.run.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedLinuxCat(cat.title)}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition flex items-center justify-between ${
                  selectedLinuxCat === cat.title
                    ? 'bg-purple-950/40 text-purple-400 font-bold border-l-2 border-purple-500'
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <span className="truncate pr-2">{cat.title.replace(/^[^\s]+\s+/, '')}</span>
                <span className="text-[10px] bg-gray-900 border border-white/5 text-gray-500 px-1.5 py-0.2 rounded-full font-mono flex-shrink-0">
                  {cat.list?.length || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Main Grid View */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
            {/* Mobile Categories Dropdown selector (Only on small viewports) */}
            <div className="lg:hidden w-full mb-2 bg-black/40 border border-white/5 p-3 rounded-xl flex items-center justify-between">
              <span className="text-xs text-gray-400 font-semibold">Category:</span>
              <select
                value={selectedLinuxCat}
                onChange={(e) => setSelectedLinuxCat(e.target.value)}
                className="bg-gray-900 border border-white/10 rounded-lg text-xs text-white px-2.5 py-1.5 focus:outline-none focus:border-purple-500/50"
              >
                <option value="All">All Categories</option>
                {guide.run.map((cat, idx) => (
                  <option key={idx} value={cat.title}>
                    {cat.title.replace(/^[^\s]+\s+/, '')}
                  </option>
                ))}
              </select>
            </div>

            {filteredCategories.length === 0 ? (
              <div className="h-60 flex flex-col items-center justify-center text-center p-6 border border-dashed border-white/5 rounded-xl">
                <Search className="w-8 h-8 text-gray-600 mb-2" />
                <h4 className="text-sm font-semibold text-gray-400">No commands found</h4>
                <p className="text-xs text-gray-600 mt-1 max-w-sm">
                  We couldn't find any commands matching "{linuxSearch}". Check your spelling or try another keyword.
                </p>
              </div>
            ) : (
              filteredCategories.map((cat, catIdx) => (
                <div key={catIdx} className="space-y-3">
                  <div className="border-b border-white/5 pb-2">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2">
                      <span>{cat.title}</span>
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{cat.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5">
                    {cat.list?.map((item, itemIdx) => {
                      const [cmd, desc, example] = item.split('|');
                      const targetCopy = example || cmd;
                      const isCopied = linuxCopiedCmd === targetCopy;
                      return (
                        <div
                          key={itemIdx}
                          onClick={() => handleCopyLinuxCmd(targetCopy)}
                          className="bg-gray-900/40 border border-white/5 p-4 rounded-xl hover:border-purple-500/30 hover:bg-purple-950/5 transition cursor-pointer group flex flex-col justify-between space-y-3 relative"
                          title="Click to copy usage example"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <code className="font-mono text-purple-300 text-xs md:text-sm font-extrabold">
                                {cmd}
                              </code>
                              <span className="text-[9px] uppercase text-gray-500 font-mono tracking-wider font-bold bg-white/5 border border-white/5 px-1.5 py-0.5 rounded">
                                command
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed mt-2">
                              {desc}
                            </p>
                          </div>
                          
                          {/* Usage Example Code Block */}
                          <div className="bg-black/40 border border-white/5 rounded-lg px-2.5 py-1.5 flex items-center justify-between group/code select-all">
                            <code className="font-mono text-green-400 text-[10px] md:text-xs truncate mr-2">
                              {targetCopy}
                            </code>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCopyLinuxCmd(targetCopy);
                              }}
                              className="p-1 rounded text-gray-500 hover:text-white hover:bg-white/5 transition flex-shrink-0"
                              title="Copy Example Usage"
                            >
                              {isCopied ? (
                                <Check className="w-3.5 h-3.5 text-green-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5 opacity-40 group-hover/code:opacity-100 transition" />
                              )}
                            </button>
                          </div>

                          {isCopied && (
                            <span className="absolute top-1 right-8 text-[9px] font-bold text-green-400 bg-green-950/60 border border-green-900 px-1.5 py-0.5 rounded">
                              Copied!
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }

  const handleDownload = (code: string, filename: string) => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    // Removed audit logging
  };

  const renderCodeBlock = (section: CommandSection, idx: string) => {
    if (!section.code) return null;
    return (
      <div key={idx} className="bg-gray-950 border border-white/5 rounded-xl overflow-hidden my-3">
        <div className="flex justify-between items-center bg-gray-900 px-4 py-2 text-[10px] font-mono text-gray-400 border-b border-white/5">
          <span>{section.title}</span>
          <div className="flex space-x-3">
            <button 
              onClick={() => handleDownload(section.code || '', `setup_${guide.id}_${idx}.sh`)}
              className="hover:text-purple-300 transition flex items-center space-x-1"
            >
              <Download className="w-3 h-3" />
              <span>Download</span>
            </button>
            <button 
              onClick={() => handleCopy(section.code || '', idx)}
              className="hover:text-purple-300 transition flex items-center space-x-1"
            >
              {copiedSectionIdx === idx ? (
                <>
                  <Check className="w-3 h-3 text-green-400" />
                  <span className="text-green-400 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
        <pre className="p-4 font-mono text-xs text-green-400 overflow-x-auto">
          <code>{section.code}</code>
        </pre>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-gray-950/20 rounded-xl border border-white/5 overflow-hidden">
      {/* Header Info */}
      <div className={`p-4 md:p-6 bg-gradient-to-r ${theme.bg} border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4`}>
        <div>
          <span className={`text-[10px] border px-2.5 py-1 rounded-md font-semibold tracking-wider uppercase ${theme.badge}`}>
            {guide.category}
          </span>
          <h1 className="text-xl md:text-3xl font-extrabold text-white mt-2.5 tracking-tight flex items-center space-x-2">
            <span>{guide.name} Setup Library</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400 mt-2 max-w-2xl leading-relaxed">{guide.overview}</p>
        </div>

        {/* Quick run details */}
        {guide.requirements.length > 0 && (
          <div className="hidden md:flex bg-black/40 border border-white/5 rounded-xl p-3 flex-col space-y-1 w-full md:w-auto">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">System Prerequisites</span>
            <div className="flex flex-col space-y-1">
              {guide.requirements.map((req, rIdx) => (
                <div key={rIdx} className="flex items-center justify-between space-x-3 text-xs">
                  <span className="text-gray-400">{req.title}</span>
                  <code className="bg-gray-800 text-purple-300 px-1.5 py-0.5 rounded font-mono text-[10px]">{req.code}</code>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tabs Selector */}
      <div className="flex border-b border-white/5 bg-black/15 px-4">
        <button
          onClick={() => setActiveTab('setup')}
          className={`px-4 py-3 text-xs md:text-sm font-semibold transition border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'setup' ? 'border-purple-500 text-purple-400 bg-white/5' : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Overview & Setup</span>
        </button>

        {guide.folderStructure && (
          <button
            onClick={() => setActiveTab('structure')}
            className={`px-4 py-3 text-xs md:text-sm font-semibold transition border-b-2 flex items-center space-x-1.5 ${
              activeTab === 'structure' ? 'border-purple-500 text-purple-400 bg-white/5' : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Folder className="w-3.5 h-3.5" />
            <span>Folder Structure</span>
          </button>
        )}

        <button
          onClick={() => setActiveTab('prod')}
          className={`px-4 py-3 text-xs md:text-sm font-semibold transition border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'prod' ? 'border-purple-500 text-purple-400 bg-white/5' : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          <Play className="w-3.5 h-3.5" />
          <span>Production & Build</span>
        </button>

        <button
          onClick={() => setActiveTab('errors')}
          className={`px-4 py-3 text-xs md:text-sm font-semibold transition border-b-2 flex items-center space-x-1.5 ${
            activeTab === 'errors' ? 'border-purple-500 text-purple-400 bg-white/5' : 'border-transparent text-gray-400 hover:text-gray-200'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Troubleshooting</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-900/10">
        {activeTab === 'setup' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Setup flow */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  <span>Installation</span>
                </h3>
                {guide.installation.map((sec, sIdx) => (
                  <div key={sIdx}>
                    <p className="text-xs text-gray-400 my-1">{sec.description}</p>
                    {renderCodeBlock(sec, `install-${sIdx}`)}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  <span>Project Creation</span>
                </h3>
                {guide.projectCreation.map((sec, sIdx) => (
                  <div key={sIdx}>
                    <p className="text-xs text-gray-400 my-1">{sec.description}</p>
                    {renderCodeBlock(sec, `project-${sIdx}`)}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  <span>Running Development Local Server</span>
                </h3>
                {guide.run.map((sec, sIdx) => (
                  <div key={sIdx}>
                    <p className="text-xs text-gray-400 my-1">{sec.description}</p>
                    {renderCodeBlock(sec, `run-${sIdx}`)}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar quick ref */}
            <div className="space-y-6">
              {guide.usefulLinks && guide.usefulLinks.length > 0 && (
                <div className="bg-gray-900/50 border border-white/5 rounded-xl p-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                    <Link2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>Documentation Links</span>
                  </h4>
                  <div className="space-y-2">
                    {guide.usefulLinks.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple-400 hover:text-purple-300 flex items-center space-x-1.5 transition break-all"
                      >
                        <span className="w-1 h-1 bg-purple-500 rounded-full flex-shrink-0"></span>
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-gray-900/50 border border-white/5 rounded-xl p-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Quick Best Practice</span>
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed italic">
                  "{guide.bestPractices[0] || 'Store configurations in environmental variables instead of source files.'}"
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'structure' && guide.folderStructure && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <span>Standard Directory Layout</span>
            </h3>
            <p className="text-xs text-gray-400 mb-3">Below is the recommended scaffold structure for your project layout:</p>
            <div className="bg-gray-950 border border-white/5 rounded-xl p-5 font-mono text-xs md:text-sm text-green-400 overflow-x-auto whitespace-pre">
              {guide.folderStructure}
            </div>
          </div>
        )}

        {activeTab === 'prod' && (
          <div className="space-y-6 max-w-4xl">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                <span>Production Compilation / Build</span>
              </h3>
              {guide.build.map((sec, sIdx) => (
                <div key={sIdx} className="mb-4">
                  <p className="text-xs text-gray-400 my-1">{sec.description}</p>
                  {renderCodeBlock(sec, `build-${sIdx}`)}
                </div>
              ))}
            </div>

            {guide.production && guide.production.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Build Optimizations</h3>
                <div className="space-y-3">
                  {guide.production.map((sec, sIdx) => (
                    <div key={sIdx} className="bg-gray-900/40 border border-white/5 p-4 rounded-xl">
                      <span className="text-xs font-semibold text-purple-400 block mb-1">{sec.title}</span>
                      <p className="text-xs text-gray-300 leading-relaxed">{sec.description}</p>
                      {sec.code && renderCodeBlock(sec, `prod-${sIdx}`)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {guide.deployment && guide.deployment.length > 0 && (
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Cloud / Hosting Deployment</h3>
                <div className="space-y-3">
                  {guide.deployment.map((sec, sIdx) => (
                    <div key={sIdx} className="bg-gray-900/40 border border-white/5 p-4 rounded-xl">
                      <span className="text-xs font-semibold text-purple-400 block mb-1">{sec.title}</span>
                      <p className="text-xs text-gray-300 leading-relaxed">{sec.description}</p>
                      {sec.code && renderCodeBlock(sec, `deploy-${sIdx}`)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'errors' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                <span>Common Errors & Fixes</span>
              </h3>
              <div className="space-y-3">
                {guide.commonErrors.map((err, eIdx) => (
                  <div key={eIdx} className="bg-red-950/20 border border-red-900/30 p-4 rounded-xl">
                    <div className="flex items-start space-x-2 text-red-400">
                      <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="text-xs font-bold font-mono">{err.error}</span>
                    </div>
                    <div className="mt-2.5 text-xs text-gray-300 pl-6 border-l border-red-900/40">
                      <span className="font-semibold block mb-0.5 text-gray-400">Solution:</span>
                      {err.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                <span>Core Best Practices</span>
              </h3>
              <div className="bg-purple-950/10 border border-purple-900/20 p-5 rounded-xl space-y-3">
                {guide.bestPractices.map((bp, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-2.5 text-xs">
                    <span className="bg-purple-900/60 text-purple-300 font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px]">
                      {bIdx + 1}
                    </span>
                    <span className="text-gray-300 leading-relaxed">{bp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
