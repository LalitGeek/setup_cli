import React, { useState, useRef, useEffect } from 'react';
import { History, Trash2, Terminal as TermIcon, Award, Activity, BarChart2 } from 'lucide-react';

export interface HistoryItem {
  id: string;
  action: string;
  detail: string;
  timestamp: Date;
}

interface HistoryPanelProps {
  history: HistoryItem[];
  onClearHistory: () => void;
  onAddHistory: (action: string, detail: string) => void;
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({
  history,
  onClearHistory,
  onAddHistory
}) => {
  // Terminal emulator states
  const [terminalInput, setTerminalInput] = useState<string>('');
  const [terminalLines, setTerminalLines] = useState<string[]>([
    'Setup CLI Local Shell [Version 1.0.0]',
    '(c) 2026 Setup CLI Corporation. All rights reserved.',
    '',
    'Type "help" to view available commands, "clear" to empty history.',
    ''
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLines]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLines = [...terminalLines, `setup_cli@user:~$ ${terminalInput}`];
    
    if (cmd === 'clear') {
      setTerminalLines([]);
      setTerminalInput('');
      return;
    }

    if (cmd === 'help') {
      newLines.push(
        'Available terminal commands:',
        '  help              Display this guide',
        '  clear             Clear the terminal logs',
        '  whoami            Show details of current user session',
        '  date              Show local system timestamp',
        '  react             Quickly check React setup requirements',
        '  docker            Quickly check Docker commands status',
        '  favorites         Count your pinned commands collection'
      );
    } else if (cmd === 'whoami') {
      newLines.push('developer_agent // workspace: /home/kali/Desktop/Desktop_folders/github/setup_cli');
    } else if (cmd === 'date') {
      newLines.push(new Date().toString());
    } else if (cmd === 'react') {
      newLines.push(
        'Checking React prerequisites...',
        '  ✔ node: v20.11.0 (Installed)',
        '  ✔ npm: v10.2.4 (Installed)',
        '  To create app: npm create vite@latest my-app -- --template react-ts'
      );
    } else if (cmd === 'docker') {
      newLines.push(
        'Docker status: running',
        '  Containers active: 4',
        '  Images: 12',
        '  Try running "docker ps" or "docker compose up -d" in your local shell.'
      );
    } else if (cmd === 'favorites') {
      newLines.push('Analyzing vault databases...', 'Total favorites pinned: 3 items synced.');
    } else {
      newLines.push(`bash: command not found: ${cmd}. Type "help" for a list of commands.`);
    }

    newLines.push('');
    setTerminalLines(newLines);
    setTerminalInput('');

    if (onAddHistory) {
      onAddHistory('Terminal command executed', cmd);
    }
  };

  // Calculate statistics from the history logs
  const totalCopies = history.filter(h => h.action.toLowerCase().includes('copied') || h.action.toLowerCase().includes('copy')).length;
  const totalConversations = history.filter(h => h.action.toLowerCase().includes('conversation') || h.action.toLowerCase().includes('chat')).length;
  const totalScripts = history.filter(h => h.action.toLowerCase().includes('download')).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full overflow-hidden">
      
      {/* Left 2 Columns: History list & Stats */}
      <div className="lg:col-span-2 flex flex-col bg-gray-950/20 rounded-xl border border-white/5 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-purple-950/10 to-transparent">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <History className="w-5 h-5 text-purple-400" />
              <span>Activity History & Analytics</span>
            </h2>
            <p className="text-xs text-gray-400 mt-1">Audit log of your copied commands, searches, and configurations</p>
          </div>

          {history.length > 0 && (
            <button
              onClick={onClearHistory}
              className="text-red-400 hover:text-red-300 hover:bg-red-950/30 border border-red-900/30 px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Activity</span>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {/* Analytics widgets */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-900/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Commands Copied</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-white font-mono">{totalCopies}</span>
                <Activity className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <div className="bg-gray-900/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">AI Conversations</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-white font-mono">{totalConversations}</span>
                <Award className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <div className="bg-gray-900/40 border border-white/5 rounded-xl p-4 flex flex-col justify-between">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Scripts Downloaded</span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-white font-mono">{totalScripts}</span>
                <BarChart2 className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Log list */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">Audit Logs</span>
            {history.length === 0 ? (
              <div className="text-center py-10 border border-dashed border-white/5 rounded-xl">
                <p className="text-xs text-gray-500 italic">No activity recorded. Try copying commands or typing queries.</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {history.map((log) => (
                  <div key={log.id} className="bg-gray-900/25 border border-white/5 rounded-lg px-4 py-2.5 flex items-center justify-between hover:bg-gray-900/50 transition text-xs">
                    <div className="flex items-center space-x-3.5">
                      <span className="bg-purple-950 border border-purple-800 text-purple-300 font-semibold px-2 py-0.5 rounded-[5px] text-[9px] uppercase tracking-wider">
                        {log.action}
                      </span>
                      <span className="text-gray-300 font-mono">{log.detail}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">
                      {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Column: Terminal Emulator */}
      <div className="flex flex-col bg-black/60 rounded-xl border border-white/10 overflow-hidden font-mono shadow-2xl relative">
        <div className="flex justify-between items-center bg-gray-950 border-b border-white/10 px-4 py-2.5">
          <div className="flex items-center space-x-1.5">
            <TermIcon className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold text-gray-300">Interactive Web Shell</span>
          </div>
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-1 text-xs text-purple-200/90 leading-relaxed text-left">
          {terminalLines.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {line}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        <form onSubmit={handleTerminalSubmit} className="bg-gray-950 p-2 border-t border-white/5 flex items-center">
          <span className="text-xs text-purple-400 font-semibold mr-1.5">setup_cli@user:~$</span>
          <input
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            className="flex-1 bg-transparent text-xs text-white border-0 focus:ring-0 focus:outline-none"
            placeholder="type help..."
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};
