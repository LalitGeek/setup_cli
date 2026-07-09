import React, { useState, useRef, useEffect } from 'react';
import { Send, Check, Copy, Download, Paperclip, Sparkles, User } from 'lucide-react';
import { streamAIResponse } from '../../services/aiService';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

const STARTER_CARDS = [
  { label: 'Install React', query: 'Install React using Vite and TypeScript' },
  { label: 'Setup Django', query: 'Setup Django project and create an application app' },
  { label: 'Docker Commands', query: 'Docker cheat sheet and commands for containers' },
  { label: 'Git Cheat Sheet', query: 'Git commands cheat sheet for initial setup and branches' },
  { label: 'Configure Nginx', query: 'Configure Nginx as a reverse proxy for Node.js' }
];

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `### Welcome to DevCommand AI!

I am your local development assistant. Ask me anything about commands, deployment configurations, environment variables, or package setup.

**Try asking me:**
* "Setup React with Vite"
* "How do I configure Nginx for a reverse proxy?"
* "Common Git branches commands"
`,
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Removed initialPrompt effect

  const handleSendMessage = (text: string) => {
    if (!text.trim() && attachedFiles.length === 0) return;

    const cleanText = text.trim() || `Uploaded files: ${attachedFiles.join(', ')}`;
    
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

    // Removed audit logging

    // Trigger AI response streaming
    let aiMsgId = (Date.now() + 1).toString();
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
    // Removed audit logging
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
    // Removed audit logging
  };

  // Simple custom Markdown / code block segmenter
  const renderMessageContent = (msg: Message) => {
    const parts = msg.content.split(/(```[\s\S]*?```)/g);
    
    return (
      <div className="space-y-3 leading-relaxed text-sm md:text-base text-gray-300">
        {parts.map((part, index) => {
          if (part.startsWith('```')) {
            // It's a code block
            const match = part.match(/```(\w*)\n([\s\S]*?)```/);
            const language = match ? match[1] : 'bash';
            const code = match ? match[2].trim() : part.slice(3, -3).trim();
            const blockId = `${msg.id}-code-${index}`;

            return (
              <div key={index} className="my-3 overflow-hidden rounded-xl border border-white/10 bg-gray-950/70">
                {/* Header */}
                <div className="flex justify-between items-center bg-gray-900 px-4 py-2 text-xs font-mono text-gray-400 border-b border-white/5">
                  <span className="uppercase text-purple-400 font-semibold">{language || 'code'}</span>
                  <div className="flex items-center space-x-3.5">
                    <button
                      onClick={() => handleDownloadCode(code, `devcommand_${language || 'script'}.sh`)}
                      className="hover:text-purple-300 transition flex items-center space-x-1"
                      title="Download script"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                    <button
                      onClick={() => handleCopyCode(code, blockId)}
                      className="hover:text-purple-300 transition flex items-center space-x-1"
                      title="Copy code"
                    >
                      {copiedCodeId === blockId ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400">Copied!</span>
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
                {/* Code body */}
                <pre className="p-4 font-mono text-xs md:text-sm text-green-400 overflow-x-auto whitespace-pre">
                  <code>{code}</code>
                </pre>
              </div>
            );
          } else {
            // Render plain text with basic linebreaks and lists support
            return (
              <div key={index} className="markdown-text whitespace-pre-line text-left">
                {part.split('\n').map((line, lIdx) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={lIdx} className="text-2xl font-bold text-white mt-4 mb-2">{line.replace('# ', '')}</h1>;
                  }
                  if (line.startsWith('## ')) {
                    return <h2 key={lIdx} className="text-xl font-bold text-white mt-3 mb-2">{line.replace('## ', '')}</h2>;
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={lIdx} className="text-lg font-semibold text-white mt-2 mb-1">{line.replace('### ', '')}</h3>;
                  }
                  if (line.startsWith('* ') || line.startsWith('- ')) {
                    return (
                      <div key={lIdx} className="flex items-start space-x-2 my-1 text-gray-300 pl-2">
                        <span className="text-purple-400 mt-1.5">•</span>
                        <span>{line.substring(2)}</span>
                      </div>
                    );
                  }
                  return <p key={lIdx} className="my-1 text-gray-300">{line}</p>;
                })}
              </div>
            );
          }
        })}
      </div>
    );
  };

  // Drag and Drop files handling
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

  return (
    <div 
      className={`flex flex-col h-full overflow-hidden relative transition-all duration-200 ${
        isDragOver ? 'bg-purple-950/20 border-2 border-dashed border-purple-500 rounded-xl' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragOver && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-none z-50">
          <Paperclip className="w-12 h-12 text-purple-400 animate-bounce" />
          <h3 className="text-lg font-bold text-white mt-4">Drop files here to analyze configuration</h3>
          <p className="text-xs text-gray-400 mt-1">Accepts logs, Dockerfiles, package.json, yaml configs</p>
        </div>
      )}

      {/* Messages Viewport */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div className={`flex space-x-3.5 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {/* Profile Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                msg.role === 'user' 
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-900/30' 
                  : 'bg-gray-800 text-purple-400 border border-white/5'
              }`}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-purple-400" />}
              </div>

              {/* Message Bubble */}
              <div className={`px-4.5 py-3 rounded-2xl border ${
                msg.role === 'user'
                  ? 'bg-purple-950/30 border-purple-800/40 text-purple-100 shadow-md'
                  : 'bg-gray-900/40 border-white/5 text-gray-300'
              }`}>
                {renderMessageContent(msg)}
                <span className="text-[9px] text-gray-500 block mt-2 text-right">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Typing/Streaming Indicator */}
        {isTyping && (
          <div className="flex justify-start items-center space-x-3.5 animate-pulse pl-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center border border-white/5">
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <div className="bg-gray-900/40 border border-white/5 py-3 px-5 rounded-2xl flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 bg-purple-500 rounded-full typing-dot"></span>
              <span className="w-2.5 h-2.5 bg-purple-500 rounded-full typing-dot"></span>
              <span className="w-2.5 h-2.5 bg-purple-500 rounded-full typing-dot"></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Starting Cards - displayed when message list is just the default greeting */}
      {messages.length === 1 && !isTyping && (
        <div className="px-4 md:px-8 py-3 bg-black/10 border-t border-white/5">
          <p className="text-xs text-gray-400 font-semibold mb-2">Suggested Quick Actions:</p>
          <div className="flex flex-wrap gap-2">
            {STARTER_CARDS.map((card, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(card.query)}
                className="bg-gray-900/60 hover:bg-purple-900/20 border border-white/5 hover:border-purple-500/30 text-xs px-3.5 py-2 rounded-xl transition duration-150 text-gray-300 font-medium cursor-pointer"
              >
                {card.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Prompt Box */}
      <div className="p-4 md:p-6 bg-gray-950/60 border-t border-white/5 backdrop-blur-md">
        {attachedFiles.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {attachedFiles.map((fn, idx) => (
              <div key={idx} className="bg-purple-950/40 border border-purple-900 text-purple-300 px-2.5 py-1 rounded-md text-[10px] flex items-center space-x-1.5">
                <span>{fn}</span>
                <button
                  onClick={() => setAttachedFiles(prev => prev.filter((_, i) => i !== idx))}
                  className="hover:text-red-400 transition text-[9px] font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center bg-gray-900 border border-white/10 rounded-xl px-4 py-2.5 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all shadow-inner">
          <input 
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            multiple
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-gray-400 hover:text-purple-400 p-1.5 transition mr-2"
            title="Attach logs or files"
          >
            <Paperclip className="w-4.5 h-4.5" />
          </button>

          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(inputValue);
              }
            }}
            placeholder="Ask anything or setup a command... (Ctrl + / to focus)"
            className="flex-1 bg-transparent border-0 text-sm text-white placeholder-gray-500 focus:outline-none resize-none h-9 py-1.5"
          />

          <button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim() && attachedFiles.length === 0}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-40 disabled:hover:bg-purple-600 text-white p-2.5 rounded-lg transition ml-3"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex justify-between items-center text-[10px] text-gray-500 mt-2.5 px-1.5">
          <span>Supports multi-line commands via Shift + Enter</span>
          <span className="flex items-center space-x-1">
            <span className="bg-gray-800 px-1 py-0.5 rounded text-[8px] border border-white/5">Enter</span>
            <span>to send</span>
          </span>
        </div>
      </div>
    </div>
  );
};
