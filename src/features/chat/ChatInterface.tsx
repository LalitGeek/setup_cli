import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, Check, Copy, Download, Paperclip, Sparkles, User, 
  Trash2, ArrowRight, FileCode, Code, Layers, Globe
} from 'lucide-react';
import { streamAIResponse } from '../../services/aiService';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

const STARTER_GROUPS = [
  {
    category: 'Frontend & App Scaffolds',
    icon: <Code className="w-4 h-4 text-purple-400" />,
    items: [
      { label: 'Vite React App', description: 'Setup React + TypeScript + Vite boilerplate', query: 'Install React using Vite and TypeScript' },
      { label: 'Next.js Project', description: 'Scaffold Next.js with Tailwind & App router', query: 'Create Next.js app with TypeScript, Tailwind CSS, and App router' }
    ]
  },
  {
    category: 'Backend & Server Configs',
    icon: <Layers className="w-4 h-4 text-emerald-400" />,
    items: [
      { label: 'Django API Server', description: 'Setup Python virtualenv and start Django project', query: 'Setup Django project and create an application app' },
      { label: 'Express.js Scaffold', description: 'Scaffold Express server and routing structure', query: 'Scaffold Express.js application boilerplate with npm' }
    ]
  },
  {
    category: 'DevOps & Local Proxy',
    icon: <Globe className="w-4 h-4 text-blue-400" />,
    items: [
      { label: 'Docker Compose', description: 'Cheat sheet for container builds and networking', query: 'Docker cheat sheet and commands for containers' },
      { label: 'Nginx Reverse Proxy', description: 'Configure Nginx as a reverse proxy for Node.js app', query: 'Configure Nginx as a reverse proxy for Node.js' }
    ]
  }
];

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `### Welcome to Setup CLI!
I am your local development assistant. Ask me anything about commands, deployment configurations, environment variables, or package setup.`,
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle auto-growing textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 180)}px`;
    }
  }, [inputValue]);

  const handleSendMessage = (text: string) => {
    if (!text.trim() && attachedFiles.length === 0) return;

    const cleanText = text.trim() || `Analyze the following attached files: ${attachedFiles.join(', ')}`;
    
    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: cleanText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setAttachedFiles([]);
    setIsTyping(true);

    // Trigger AI response streaming
    const aiMsgId = (Date.now() + 1).toString();
    const newAiMsg: Message = {
      id: aiMsgId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isStreaming: true
    };

    setMessages(prev => [...prev, newAiMsg]);

    streamAIResponse(
      cleanText,
      (streamedText) => {
        setMessages(prev =>
          prev.map(m => (m.id === aiMsgId ? { ...m, content: streamedText } : m))
        );
      },
      () => {
        setMessages(prev =>
          prev.map(m => (m.id === aiMsgId ? { ...m, isStreaming: false } : m))
        );
        setIsTyping(false);
      }
    );
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleDownloadCode = (code: string, filename: string = 'command.sh') => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: `### Welcome to Setup CLI!
I am your local development assistant. Ask me anything about commands, deployment configurations, environment variables, or package setup.`,
        timestamp: new Date()
      }
    ]);
  };

  // Custom Markdown & Syntax Highlighting renderer
  const renderMessageContent = (msg: Message) => {
    const parts = msg.content.split(/(```[\s\S]*?```)/g);
    
    return (
      <div className="space-y-4 leading-relaxed text-sm md:text-base text-gray-300">
        {parts.map((part, index) => {
          if (part.startsWith('```')) {
            const match = part.match(/```(\w*)\n([\s\S]*?)```/);
            const language = match ? match[1] : 'bash';
            const code = match ? match[2].trim() : part.slice(3, -3).trim();
            const blockId = `${msg.id}-code-${index}`;
            const codeLines = code.split('\n');

            return (
              <div key={index} className="my-4 overflow-hidden rounded-xl border border-white/10 bg-gray-950/80 shadow-2xl flex flex-col">
                {/* Header Toolbar */}
                <div className="flex justify-between items-center bg-gray-900/60 px-4 py-2 text-[10px] md:text-xs font-mono text-gray-400 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                    <span className="ml-2 uppercase text-purple-400 font-bold font-mono tracking-wider">{language || 'code'}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleDownloadCode(code, `setup_cli_${language || 'script'}.sh`)}
                      className="hover:text-purple-300 transition flex items-center space-x-1 cursor-pointer"
                      title="Download script"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                    <button
                      onClick={() => handleCopyCode(code, blockId)}
                      className="hover:text-purple-300 transition flex items-center space-x-1 cursor-pointer"
                      title="Copy code"
                    >
                      {copiedCodeId === blockId ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                {/* Code body with side line-numbers */}
                <div className="flex font-mono text-xs md:text-sm overflow-x-auto bg-black/40">
                  <div className="select-none text-right text-gray-600 px-3 py-3 border-r border-white/5 bg-gray-950/20 text-[10px] md:text-xs font-semibold leading-relaxed">
                    {codeLines.map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  <pre className="p-3 text-green-400/90 overflow-x-auto flex-1 leading-relaxed text-left">
                    <code>{code}</code>
                  </pre>
                </div>
              </div>
            );
          } else {
            // Render text lines with premium inline formatting
            return (
              <div key={index} className="markdown-text space-y-2 text-left">
                {part.split('\n').map((line, lIdx) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={lIdx} className="text-xl md:text-2xl font-extrabold text-white mt-4 mb-2 tracking-tight">{line.replace('# ', '')}</h1>;
                  }
                  if (line.startsWith('## ')) {
                    return <h2 key={lIdx} className="text-lg md:text-xl font-bold text-white mt-3.5 mb-2 tracking-tight">{line.replace('## ', '')}</h2>;
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={lIdx} className="text-md md:text-lg font-bold text-white mt-2.5 mb-1.5">{line.replace('### ', '')}</h3>;
                  }
                  if (line.startsWith('* ') || line.startsWith('- ')) {
                    // Inline bold tags parsing inside bullets
                    const content = line.substring(2);
                    return (
                      <div key={lIdx} className="flex items-start space-x-2 my-1 text-gray-300 pl-1.5">
                        <span className="text-purple-400 mt-1.5 text-xs">•</span>
                        <span className="flex-1" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(content) }} />
                      </div>
                    );
                  }
                  if (line.trim() === '') {
                    return <div key={lIdx} className="h-2" />;
                  }
                  return <p key={lIdx} className="my-1.5 text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(line) }} />;
                })}
              </div>
            );
          }
        })}
      </div>
    );
  };

  // Helper to parse bold (**word**) and code (`code`) inline syntax
  const parseInlineMarkdown = (text: string): string => {
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    
    // Bold matching
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
    
    // Inline code tag matching
    html = html.replace(/`(.*?)`/g, '<code class="bg-gray-950 border border-white/10 text-purple-300 text-[11px] px-1.5 py-0.5 rounded font-mono font-bold">$1</code>');
    
    return html;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setAttachedFiles(prev => [...prev, ...files.map(f => f.name)]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setAttachedFiles(prev => [...prev, ...files.map(f => f.name)]);
    }
  };

  const hasChatStarted = messages.length > 1;

  return (
    <div 
      className={`flex flex-col h-full overflow-hidden relative transition-all duration-300 bg-gray-950/20 border border-white/5 rounded-2xl ${
        isDragOver ? 'bg-purple-950/20 border-2 border-dashed border-purple-500' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Drag & Drop Alert Overlay */}
      {isDragOver && (
        <div className="absolute inset-0 bg-black/75 backdrop-blur-md flex flex-col items-center justify-center pointer-events-none z-50">
          <div className="w-20 h-20 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center animate-pulse">
            <Paperclip className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-lg font-extrabold text-white mt-4 tracking-tight">Drop files to upload config</h3>
          <p className="text-xs text-gray-400 mt-1 max-w-sm text-center">We will analyze package.json, Dockerfile, scripts or logs instantly.</p>
        </div>
      )}

      {/* Top Utility Header Bar */}
      <div className="flex justify-between items-center px-6 py-3.5 border-b border-white/5 bg-black/10 backdrop-blur-xs flex-shrink-0">
        <div className="flex items-center space-x-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-semibold text-gray-400">AI Assistant Online</span>
          <span className="text-[9px] bg-purple-950/50 border border-purple-800/40 text-purple-300 px-2 py-0.5 rounded font-semibold font-mono uppercase tracking-wider">Local</span>
        </div>
        {hasChatStarted && (
          <button
            onClick={handleClearHistory}
            className="flex items-center space-x-1.5 text-xs text-gray-500 hover:text-red-400 transition cursor-pointer p-1 rounded hover:bg-white/5"
            title="Clear conversation history"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Reset Chat</span>
          </button>
        )}
      </div>

      {/* Messages Scroll Feed or Custom Welcome Slate */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-6">
        {!hasChatStarted ? (
          // Gorgeous UX empty state Dashboard
          <div className="max-w-3xl mx-auto py-8 md:py-12 flex flex-col items-center justify-center text-center space-y-8">
            
            {/* Glowing Icon Header */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse"></div>
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 border border-purple-400/30 flex items-center justify-center shadow-xl shadow-purple-950/20">
                <Sparkles className="w-8 h-8 text-white animate-spin-slow" />
              </div>
            </div>

            {/* Typography Section */}
            <div className="space-y-3.5 max-w-xl">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                How can I help you <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">build today?</span>
              </h1>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Your elite setup companion. Ask about configurations, packages, commands, or upload files directly to debug logs.
              </p>
            </div>

            {/* Quick Starter Cards Grouped */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-4">
              {STARTER_GROUPS.map((group, gIdx) => (
                <div key={gIdx} className="space-y-2.5">
                  <div className="flex items-center space-x-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider pl-1">
                    {group.icon}
                    <span>{group.category}</span>
                  </div>
                  <div className="space-y-2">
                    {group.items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(item.query)}
                        className="w-full p-3.5 bg-gray-900/40 hover:bg-purple-950/15 border border-white/5 hover:border-purple-500/25 rounded-xl text-left transition duration-200 group cursor-pointer flex flex-col justify-between hover:shadow-lg shadow-purple-950/10"
                      >
                        <span className="text-xs font-bold text-white group-hover:text-purple-300 transition block">
                          {item.label}
                        </span>
                        <span className="text-[10px] text-gray-500 mt-1 block leading-normal group-hover:text-gray-400 transition">
                          {item.description}
                        </span>
                        <div className="flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Standard Message List
          <div className="space-y-6 max-w-4xl mx-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`flex space-x-3.5 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  
                  {/* Profile Avatar with subtle glow */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 shadow-md ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-tr from-purple-600 to-pink-600 text-white border border-purple-500/20' 
                      : 'bg-gray-900 text-purple-400 border border-white/10'
                  }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-purple-400" />}
                  </div>

                  {/* Message Bubble container */}
                  <div className={`px-4.5 py-3.5 rounded-2xl border ${
                    msg.role === 'user'
                      ? 'bg-purple-950/20 border-purple-800/35 text-purple-100'
                      : 'bg-gray-900/30 border-white/5 text-gray-300 shadow-xl shadow-black/20'
                  }`}>
                    {renderMessageContent(msg)}
                    <span className="text-[9px] text-gray-500 block mt-2.5 text-right font-mono select-none">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing / Streaming State Indicator */}
            {isTyping && (
              <div className="flex justify-start items-center space-x-3.5 animate-pulse pl-2">
                <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center border border-white/5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
                <div className="bg-gray-900/30 border border-white/5 py-3 px-5 rounded-2xl flex items-center space-x-1.5 shadow-xl">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Floating Cockpit Input Container */}
      <div className="p-4 md:p-6 bg-gray-950/50 border-t border-white/5 backdrop-blur-md flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          {/* File Upload pills list */}
          {attachedFiles.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3 animate-fade-in pl-1">
              {attachedFiles.map((fn, idx) => (
                <div key={idx} className="bg-purple-950/45 border border-purple-900 text-purple-300 px-2.5 py-1 rounded-lg text-[10px] flex items-center space-x-1.5">
                  <FileCode className="w-3.5 h-3.5" />
                  <span>{fn}</span>
                  <button
                    onClick={() => setAttachedFiles(prev => prev.filter((_, i) => i !== idx))}
                    className="hover:text-red-400 transition text-[9px] font-bold cursor-pointer"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Glowing Textarea Cockpit box */}
          <div className="bg-gray-900/80 border border-white/10 rounded-2xl p-2 focus-within:border-purple-500/50 focus-within:ring-2 focus-within:ring-purple-500/10 shadow-2xl transition-all flex flex-col">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }
              }}
              placeholder="Ask setup directions, debug terminal error files..."
              rows={1}
              className="w-full bg-transparent border-0 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-0 resize-none px-3 pt-2 pb-1 min-h-[36px] max-h-[180px] leading-relaxed"
            />

            {/* Input Action Footer Bar */}
            <div className="flex justify-between items-center pt-2 border-t border-white/5 mt-1 px-2.5">
              <div className="flex items-center space-x-1.5">
                <input 
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  multiple
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-gray-400 hover:text-purple-400 p-1.5 rounded-lg hover:bg-white/5 transition cursor-pointer flex items-center space-x-1"
                  title="Attach configs, logs, scripts"
                >
                  <Paperclip className="w-4 h-4" />
                  <span className="text-[10px] hidden md:inline">Attach Files</span>
                </button>
              </div>

              {/* Status information and Send Action button */}
              <div className="flex items-center space-x-3">
                <span className="hidden sm:flex items-center space-x-1 text-[9px] text-gray-500 font-mono">
                  <span className="bg-gray-800 border border-white/5 px-1 py-0.5 rounded text-[8px]">Shift+Enter</span>
                  <span>for new line</span>
                </span>

                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() && attachedFiles.length === 0}
                  className="bg-purple-600 hover:bg-purple-500 disabled:bg-gray-800 disabled:opacity-40 text-white p-2 rounded-xl transition cursor-pointer flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
