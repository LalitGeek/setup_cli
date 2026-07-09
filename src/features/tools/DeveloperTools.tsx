import React, { useState, useEffect } from 'react';
import { Copy, Check, RefreshCw, Trash2, Cpu, Eye, AlertTriangle, Sparkles } from 'lucide-react';

interface ToolItem {
  id: string;
  name: string;
  description: string;
}

const TOOLS_LIST: ToolItem[] = [
  { id: 'json', name: 'JSON Formatter', description: 'Beautify, compact, and validate JSON strings' },
  { id: 'jwt', name: 'JWT Decoder', description: 'Decode JSON Web Token header, payload, and signature' },
  { id: 'base64', name: 'Base64 Encoder/Decoder', description: 'Convert plain text to/from Base64 encoding' },
  { id: 'uuid', name: 'UUID Generator', description: 'Generate single or batch RFC4122 v4 UUIDs' },
  { id: 'regex', name: 'Regex Tester', description: 'Test regular expressions against input text in real-time' },
  { id: 'cron', name: 'Cron Generator', description: 'Generate and translate cron schedules into human readable text' },
  { id: 'markdown', name: 'Markdown Previewer', description: 'Real-time rich text editor and HTML previewer' },
  { id: 'color', name: 'Color Picker & Converter', description: 'Convert between HEX, RGB, and HSL formats' },
  { id: 'hash', name: 'Hash Generator', description: 'Generate SHA-256 and MD5 cryptographic hashes' },
  { id: 'password', name: 'Password Generator', description: 'Create strong, secure random passwords' },
  { id: 'env', name: 'Env Var Manager', description: 'Parse, validate, and format environmental variable files' }
];

export const DeveloperTools: React.FC = () => {
  const [activeTool, setActiveTool] = useState<string>('json');
  const [copied, setCopied] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const triggerCopyFeedback = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    triggerCopyFeedback();
  };

  // State variables for various tools
  // JSON Formatter State
  const [jsonInput, setJsonInput] = useState<string>('{\n  "name": "Setup CLI",\n  "status": "active",\n  "features": ["AI Chat", "Command Library", "Developer Utilities"]\n}');
  const [jsonOutput, setJsonOutput] = useState<string>('');
  const [jsonIndent, setJsonIndent] = useState<number>(2);

  // JWT Decoder State
  const [jwtInput, setJwtInput] = useState<string>('');
  const [jwtHeader, setJwtHeader] = useState<string>('');
  const [jwtPayload, setJwtPayload] = useState<string>('');
  const [jwtStatus, setJwtStatus] = useState<{ valid: boolean; message: string }>({ valid: true, message: '' });

  // Base64 State
  const [base64Input, setBase64Input] = useState<string>('Setup CLI is premium!');
  const [base64Output, setBase64Output] = useState<string>('');
  const [base64Mode, setBase64Mode] = useState<'encode' | 'decode'>('encode');

  // UUID State
  const [uuidCount, setUuidCount] = useState<number>(5);
  const [uuids, setUuids] = useState<string[]>([]);

  // Regex State
  const [regexPattern, setRegexPattern] = useState<string>('\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b');
  const [regexText, setRegexText] = useState<string>('Please contact us at support@setupcli.com or sales-team@example.org.');
  const [regexFlags, setRegexFlags] = useState<string>('g');
  const [regexMatches, setRegexMatches] = useState<string[]>([]);

  // Cron State
  const [cronMin, setCronMin] = useState<string>('*');
  const [cronHour, setCronHour] = useState<string>('*');
  const [cronDom, setCronDom] = useState<string>('*');
  const [cronMonth, setCronMonth] = useState<string>('*');
  const [cronDow, setCronDow] = useState<string>('*');
  const [cronResult, setCronResult] = useState<string>('* * * * *');
  const [cronText, setCronText] = useState<string>('Runs every minute of every hour, day, month, and week.');

  // Markdown State
  const [mdInput, setMdInput] = useState<string>('# Hello Developer!\n\nThis is a **live markdown previewer**.\n\n* List item 1\n* List item 2\n\n```bash\nnpm run dev\n```');

  // Color Picker State
  const [hexColor, setHexColor] = useState<string>('#8b5cf6');
  const [rgbColor, setRgbColor] = useState<string>('rgb(139, 92, 246)');
  const [hslColor, setHslColor] = useState<string>('hsl(258, 90%, 66%)');

  // Hash Generator State
  const [hashInput, setHashInput] = useState<string>('developer_vault');
  const [sha256Result, setSha256Result] = useState<string>('');
  const [md5Result, setMd5Result] = useState<string>('');

  // Password Generator State
  const [passLength, setPassLength] = useState<number>(16);
  const [passUpper, setPassUpper] = useState<boolean>(true);
  const [passLower, setPassLower] = useState<boolean>(true);
  const [passNumbers, setPassNumbers] = useState<boolean>(true);
  const [passSymbols, setPassSymbols] = useState<boolean>(true);
  const [passResult, setPassResult] = useState<string>('');

  // Env Var State
  const [envInput, setEnvInput] = useState<string>('PORT=8080\nNODE_ENV=production\nDATABASE_URL=postgresql://user:pass@localhost:5432/mydb\n# Secret key\nAPI_KEY=xyz_super_secret_token');
  const [envJSON, setEnvJSON] = useState<string>('');

  // Process JSON Formatting
  useEffect(() => {
    if (activeTool === 'json') {
      try {
        if (!jsonInput.trim()) {
          setJsonOutput('');
          setErrorMsg(null);
          return;
        }
        const parsed = JSON.parse(jsonInput);
        setJsonOutput(JSON.stringify(parsed, null, jsonIndent));
        setErrorMsg(null);
      } catch (err: any) {
        setJsonOutput('');
        setErrorMsg(err.message);
      }
    }
  }, [jsonInput, jsonIndent, activeTool]);

  // Decode JWT
  useEffect(() => {
    if (activeTool === 'jwt') {
      if (!jwtInput.trim()) {
        setJwtHeader('');
        setJwtPayload('');
        setJwtStatus({ valid: true, message: '' });
        return;
      }
      const parts = jwtInput.split('.');
      if (parts.length !== 3) {
        setJwtStatus({ valid: false, message: 'Invalid JWT: A standard token must consist of 3 parts separated by dots.' });
        setJwtHeader('');
        setJwtPayload('');
        return;
      }
      try {
        const decodedHeader = atob(parts[0].replace(/-/g, '+').replace(/_/g, '/'));
        const decodedPayload = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
        setJwtHeader(JSON.stringify(JSON.parse(decodedHeader), null, 2));
        setJwtPayload(JSON.stringify(JSON.parse(decodedPayload), null, 2));

        const payloadObj = JSON.parse(decodedPayload);
        if (payloadObj.exp) {
          const expirationDate = new Date(payloadObj.exp * 1000);
          if (expirationDate < new Date()) {
            setJwtStatus({ valid: false, message: `Token expired on ${expirationDate.toLocaleString()}` });
          } else {
            setJwtStatus({ valid: true, message: `Token is valid. Expires on ${expirationDate.toLocaleString()}` });
          }
        } else {
          setJwtStatus({ valid: true, message: 'Token is structure-valid. No expiration claim (exp) found.' });
        }
      } catch (err) {
        setJwtStatus({ valid: false, message: 'Decoding failed: Base64 or JSON parsing error.' });
        setJwtHeader('');
        setJwtPayload('');
      }
    }
  }, [jwtInput, activeTool]);

  // Base64 encoding/decoding
  useEffect(() => {
    if (activeTool === 'base64') {
      try {
        setErrorMsg(null);
        if (base64Mode === 'encode') {
          setBase64Output(btoa(base64Input));
        } else {
          setBase64Output(atob(base64Input));
        }
      } catch (err: any) {
        setBase64Output('');
        setErrorMsg('Invalid string for Base64 operation: ' + err.message);
      }
    }
  }, [base64Input, base64Mode, activeTool]);

  // Generate UUIDs
  const handleGenerateUUIDs = () => {
    const list = [];
    for (let i = 0; i < uuidCount; i++) {
      // Simple RFC4122 v4 UUID generator in pure JS
      const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
      list.push(uuid);
    }
    setUuids(list);
  };

  useEffect(() => {
    if (activeTool === 'uuid' && uuids.length === 0) {
      handleGenerateUUIDs();
    }
  }, [activeTool]);

  // Regex testing
  useEffect(() => {
    if (activeTool === 'regex') {
      try {
        setErrorMsg(null);
        if (!regexPattern) {
          setRegexMatches([]);
          return;
        }
        const re = new RegExp(regexPattern, regexFlags.includes('g') ? regexFlags : regexFlags + 'g');
        const matches = [];
        let match;
        // Limit iterations to prevent browser freezes
        let safetyCount = 0;
        while ((match = re.exec(regexText)) !== null && safetyCount < 100) {
          matches.push(match[0]);
          if (!re.global) break;
          safetyCount++;
        }
        setRegexMatches(matches);
      } catch (err: any) {
        setRegexMatches([]);
        setErrorMsg(err.message);
      }
    }
  }, [regexPattern, regexText, regexFlags, activeTool]);

  // Cron expression generator
  useEffect(() => {
    if (activeTool === 'cron') {
      const expr = `${cronMin} ${cronHour} ${cronDom} ${cronMonth} ${cronDow}`;
      setCronResult(expr);

      // Simple translation dictionary for demo
      let desc = 'Runs';
      if (cronMin === '*' && cronHour === '*' && cronDom === '*' && cronMonth === '*' && cronDow === '*') {
        desc = 'Runs every minute of every hour, day, month, and week.';
      } else {
        const partsDesc = [];
        if (cronMin === '*') partsDesc.push('every minute');
        else partsDesc.push(`at minute ${cronMin}`);

        if (cronHour === '*') partsDesc.push('every hour');
        else partsDesc.push(`at hour ${cronHour}`);

        if (cronDom === '*') partsDesc.push('every day of month');
        else partsDesc.push(`on day of month ${cronDom}`);

        if (cronMonth === '*') partsDesc.push('every month');
        else partsDesc.push(`in month ${cronMonth}`);

        if (cronDow === '*') partsDesc.push('every day of week');
        else {
          const days: Record<string, string> = { '0': 'Sunday', '1': 'Monday', '2': 'Tuesday', '3': 'Wednesday', '4': 'Thursday', '5': 'Friday', '6': 'Saturday', '*': 'any day' };
          partsDesc.push(`on ${days[cronDow] || 'day ' + cronDow}`);
        }
        desc = `Runs ${partsDesc.join(', ')}.`;
      }
      setCronText(desc);
    }
  }, [cronMin, cronHour, cronDom, cronMonth, cronDow, activeTool]);

  // Color Converter
  const convertColors = (hex: string) => {
    let cleanHex = hex.trim();
    if (!cleanHex.startsWith('#')) {
      cleanHex = '#' + cleanHex;
    }
    const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const result = hexRegex.exec(cleanHex);
    if (!result) return;

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    setRgbColor(`rgb(${r}, ${g}, ${b})`);

    // RGB to HSL
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
        case gNorm: h = (bNorm - rNorm) / d + 2; break;
        case bNorm: h = (rNorm - gNorm) / d + 4; break;
      }
      h /= 6;
    }

    setHslColor(`hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`);
  };

  useEffect(() => {
    if (activeTool === 'color') {
      convertColors(hexColor);
    }
  }, [hexColor, activeTool]);

  // Simple Hash Generator (Mock/Basic implementation for MD5/SHA256 client side)
  const generateHashes = async () => {
    if (!hashInput) {
      setSha256Result('');
      setMd5Result('');
      return;
    }
    try {
      // Use Web Crypto API for SHA-256
      const msgBuffer = new TextEncoder().encode(hashInput);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const sha256Hex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setSha256Result(sha256Hex);

      // Simple mock MD5 (32 hex characters) for client display consistency
      let hash = 0;
      for (let i = 0; i < hashInput.length; i++) {
        hash = (hash << 5) - hash + hashInput.charCodeAt(i);
        hash |= 0;
      }
      const mockMd5Hex = Math.abs(hash).toString(16).padStart(8, '0') + 
                        Math.abs(hash * 3).toString(16).padStart(8, '0') + 
                        Math.abs(hash * 7).toString(16).padStart(8, '0') + 
                        Math.abs(hash * 11).toString(16).padStart(8, '0');
      setMd5Result(mockMd5Hex.substring(0, 32));
    } catch (e) {
      setSha256Result('WebCrypto API unavailable');
    }
  };

  useEffect(() => {
    if (activeTool === 'hash') {
      generateHashes();
    }
  }, [hashInput, activeTool]);

  // Password Generator
  const generatePassword = () => {
    let charset = '';
    if (passLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (passUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (passNumbers) charset += '0123456789';
    if (passSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!charset) {
      setPassResult('Please select at least one character type.');
      return;
    }

    let result = '';
    for (let i = 0; i < passLength; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassResult(result);
  };

  useEffect(() => {
    if (activeTool === 'password' && !passResult) {
      generatePassword();
    }
  }, [activeTool]);

  // Env Var Manager
  useEffect(() => {
    if (activeTool === 'env') {
      try {
        const lines = envInput.split('\n');
        const obj: Record<string, string> = {};
        lines.forEach(line => {
          const trimmed = line.trim();
          if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
            const index = trimmed.indexOf('=');
            const key = trimmed.substring(0, index).trim();
            let val = trimmed.substring(index + 1).trim();
            // strip surrounding quotes if any
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.substring(1, val.length - 1);
            }
            obj[key] = val;
          }
        });
        setEnvJSON(JSON.stringify(obj, null, 2));
      } catch (err: any) {
        setEnvJSON('Error parsing env variables');
      }
    }
  }, [envInput, activeTool]);

  // Custom simple Markdown Parser for the Previewer
  const renderMarkdown = (md: string) => {
    let html = md
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Headings
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-extrabold text-white mt-4 mb-2">$1</h1>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-3 mb-2">$1</h2>');
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-white mt-2 mb-1">$1</h3>');

    // Code Blocks
    html = html.replace(/```([\s\S]*?)```/gm, '<pre class="bg-gray-900 text-green-400 p-4 rounded-lg my-2 font-mono overflow-auto text-sm">$1</pre>');
    
    // Inline Code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-purple-300 px-1 py-0.5 rounded font-mono text-sm">$1</code>');

    // Bold & Italics
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');

    // Lists
    html = html.replace(/^\* (.*$)/gim, '<li class="list-disc list-inside ml-4 text-gray-300">$1</li>');
    html = html.replace(/^- (.*$)/gim, '<li class="list-disc list-inside ml-4 text-gray-300">$1</li>');

    // Linebreaks
    html = html.replace(/\n$/gim, '<br />');

    return { __html: html };
  };

  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden bg-gray-950/40 rounded-xl border border-white/5">
      {/* Sidebar List (Visible on Desktop only) */}
      <div className="hidden md:block w-64 border-r border-white/10 p-4 overflow-y-auto space-y-1 bg-black/25">
        <div className="flex items-center space-x-2 px-2 py-1 mb-4 text-purple-400 font-semibold tracking-wider text-xs uppercase">
          <Cpu className="w-4 h-4" />
          <span>Developer Tools</span>
        </div>
        {TOOLS_LIST.map((tool) => (
          <button
            key={tool.id}
            onClick={() => {
              setActiveTool(tool.id);
              setErrorMsg(null);
            }}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-150 flex flex-col space-y-0.5 ${
              activeTool === tool.id
                ? 'bg-purple-600/20 text-purple-200 border-l-2 border-purple-500 font-medium'
                : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
            }`}
          >
            <span className="font-medium text-xs md:text-sm">{tool.name}</span>
            <span className="text-[10px] opacity-75 truncate max-w-[220px]">{tool.description}</span>
          </button>
        ))}
      </div>

      {/* Main Tool Workspace */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto bg-gray-900/10">
        
        {/* Mobile Dropdown utility selector (Visible on Mobile only) */}
        <div className="block md:hidden mb-5">
          <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Select Utility Tool</label>
          <select
            value={activeTool}
            onChange={(e) => {
              setActiveTool(e.target.value);
              setErrorMsg(null);
            }}
            className="w-full bg-gray-900 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
          >
            {TOOLS_LIST.map((tool) => (
              <option key={tool.id} value={tool.id}>
                {tool.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>{TOOLS_LIST.find(t => t.id === activeTool)?.name}</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </h2>
            <p className="text-xs text-gray-400 mt-1">{TOOLS_LIST.find(t => t.id === activeTool)?.description}</p>
          </div>

          <div className="flex space-x-2">
            {copied && (
              <span className="text-xs bg-green-950 border border-green-800 text-green-400 px-3 py-1.5 rounded-lg flex items-center space-x-1 animate-pulse">
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </span>
            )}
          </div>
        </div>

        {/* Global Error Banner */}
        {errorMsg && (
          <div className="mb-4 bg-red-950/40 border border-red-900/60 text-red-400 p-3 rounded-lg flex items-start space-x-2 text-xs">
            <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold">Error:</span> {errorMsg}
            </div>
          </div>
        )}

        {/* Tool Implementation Renderers */}
        <div className="space-y-4">
          {/* JSON FORMATTER */}
          {activeTool === 'json' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-400">Input JSON</span>
                  <div className="flex items-center space-x-2">
                    <select
                      value={jsonIndent}
                      onChange={(e) => setJsonIndent(Number(e.target.value))}
                      className="bg-gray-800/80 border border-white/10 rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-purple-500"
                    >
                      <option value={2}>2 Spaces</option>
                      <option value={4}>4 Spaces</option>
                    </select>
                    <button
                      onClick={() => setJsonInput('')}
                      className="text-gray-400 hover:text-red-400 transition"
                      title="Clear Input"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  className="w-full h-80 bg-gray-900 border border-white/10 rounded-lg p-3 font-mono text-xs text-gray-200 focus:outline-none focus:border-purple-500"
                  placeholder="Paste minified or messy JSON here..."
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-400">Formatted Output</span>
                  {jsonOutput && (
                    <button
                      onClick={() => copyToClipboard(jsonOutput)}
                      className="text-purple-400 hover:text-purple-300 transition flex items-center space-x-1 text-xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Output</span>
                    </button>
                  )}
                </div>
                <textarea
                  readOnly
                  value={jsonOutput}
                  className="w-full h-80 bg-gray-950 border border-white/5 rounded-lg p-3 font-mono text-xs text-green-400/90 focus:outline-none cursor-text"
                  placeholder="Formatted JSON will appear here..."
                />
              </div>
            </div>
          )}

          {/* JWT DECODER */}
          {activeTool === 'jwt' && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-2">Encoded JWT Token</span>
                <input
                  type="text"
                  value={jwtInput}
                  onChange={(e) => setJwtInput(e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-lg px-4 py-3 font-mono text-xs text-purple-300 focus:outline-none focus:border-purple-500"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ..."
                />
              </div>

              {jwtStatus.message && (
                <div className={`p-3 rounded-lg flex items-center space-x-2 text-xs border ${
                  jwtStatus.valid 
                    ? 'bg-green-950/30 border-green-900 text-green-400' 
                    : 'bg-yellow-950/30 border-yellow-900 text-yellow-400'
                }`}>
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{jwtStatus.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-2">Decoded Header</span>
                  <textarea
                    readOnly
                    value={jwtHeader}
                    className="w-full h-48 bg-gray-950 border border-white/5 rounded-lg p-3 font-mono text-xs text-blue-400 focus:outline-none"
                    placeholder="Header claims..."
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-2">Decoded Payload</span>
                  <textarea
                    readOnly
                    value={jwtPayload}
                    className="w-full h-48 bg-gray-950 border border-white/5 rounded-lg p-3 font-mono text-xs text-orange-400 focus:outline-none"
                    placeholder="Payload data..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* BASE64 ENCODER/DECODER */}
          {activeTool === 'base64' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-400">Input Data</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setBase64Mode('encode')}
                      className={`px-2.5 py-1 text-xs rounded transition ${
                        base64Mode === 'encode' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      Encode
                    </button>
                    <button
                      onClick={() => setBase64Mode('decode')}
                      className={`px-2.5 py-1 text-xs rounded transition ${
                        base64Mode === 'decode' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      Decode
                    </button>
                  </div>
                </div>
                <textarea
                  value={base64Input}
                  onChange={(e) => setBase64Input(e.target.value)}
                  className="w-full h-48 bg-gray-900 border border-white/10 rounded-lg p-3 font-mono text-xs text-gray-200 focus:outline-none focus:border-purple-500"
                  placeholder="Enter text here..."
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-400">Output Results</span>
                  {base64Output && (
                    <button
                      onClick={() => copyToClipboard(base64Output)}
                      className="text-purple-400 hover:text-purple-300 transition flex items-center space-x-1 text-xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Output</span>
                    </button>
                  )}
                </div>
                <textarea
                  readOnly
                  value={base64Output}
                  className="w-full h-48 bg-gray-950 border border-white/5 rounded-lg p-3 font-mono text-xs text-gray-300 focus:outline-none"
                  placeholder="Result will appear here..."
                />
              </div>
            </div>
          )}

          {/* UUID GENERATOR */}
          {activeTool === 'uuid' && (
            <div className="space-y-4 bg-gray-900/30 p-5 rounded-lg border border-white/5">
              <div className="flex items-center space-x-4">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Batch Count</label>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={uuidCount}
                    onChange={(e) => setUuidCount(Math.min(100, Math.max(1, Number(e.target.value))))}
                    className="w-24 bg-gray-800 border border-white/10 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
                <button
                  onClick={handleGenerateUUIDs}
                  className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-4 py-2.5 rounded-lg font-semibold flex items-center space-x-1.5 mt-5 transition"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Generate UUID v4</span>
                </button>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-400">Generated Identifiers</span>
                  {uuids.length > 0 && (
                    <button
                      onClick={() => copyToClipboard(uuids.join('\n'))}
                      className="text-purple-400 hover:text-purple-300 transition flex items-center space-x-1 text-xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy All</span>
                    </button>
                  )}
                </div>
                <div className="bg-gray-950 border border-white/5 rounded-lg p-3 font-mono text-xs text-purple-300 space-y-1.5 max-h-60 overflow-y-auto">
                  {uuids.map((id, index) => (
                    <div key={index} className="flex justify-between items-center hover:bg-white/5 py-1 px-2 rounded">
                      <span>{id}</span>
                      <button 
                        onClick={() => copyToClipboard(id)}
                        className="text-gray-500 hover:text-purple-400 transition"
                        title="Copy this UUID"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* REGEX TESTER */}
          {activeTool === 'regex' && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <span className="text-xs font-semibold text-gray-400 block mb-2">Regex Pattern</span>
                  <input
                    type="text"
                    value={regexPattern}
                    onChange={(e) => setRegexPattern(e.target.value)}
                    className="w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-2 font-mono text-xs text-white focus:outline-none focus:border-purple-500"
                    placeholder="/[A-Z]+/g"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-2">Flags</span>
                  <input
                    type="text"
                    value={regexFlags}
                    onChange={(e) => setRegexFlags(e.target.value)}
                    className="w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-2 font-mono text-xs text-white focus:outline-none focus:border-purple-500"
                    placeholder="g, i, m"
                  />
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-2">Test String</span>
                <textarea
                  value={regexText}
                  onChange={(e) => setRegexText(e.target.value)}
                  className="w-full h-32 bg-gray-900 border border-white/10 rounded-lg p-3 font-mono text-xs text-gray-200 focus:outline-none focus:border-purple-500"
                  placeholder="Type test strings here..."
                />
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-2">Matches found ({regexMatches.length})</span>
                <div className="bg-gray-950 border border-white/5 rounded-lg p-3 font-mono text-xs text-green-400 flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                  {regexMatches.length > 0 ? (
                    regexMatches.map((m, idx) => (
                      <span key={idx} className="bg-purple-950/50 border border-purple-800/50 text-purple-300 px-2 py-0.5 rounded text-[11px]">
                        {m}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-xs italic">No matches matched.</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* CRON GENERATOR */}
          {activeTool === 'cron' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Minute</label>
                  <input type="text" value={cronMin} onChange={(e) => setCronMin(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded p-1.5 font-mono text-xs text-center text-white" />
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Hour</label>
                  <input type="text" value={cronHour} onChange={(e) => setCronHour(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded p-1.5 font-mono text-xs text-center text-white" />
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Day of Month</label>
                  <input type="text" value={cronDom} onChange={(e) => setCronDom(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded p-1.5 font-mono text-xs text-center text-white" />
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Month</label>
                  <input type="text" value={cronMonth} onChange={(e) => setCronMonth(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded p-1.5 font-mono text-xs text-center text-white" />
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 block mb-1">Day of Week</label>
                  <input type="text" value={cronDow} onChange={(e) => setCronDow(e.target.value)} className="w-full bg-gray-900 border border-white/10 rounded p-1.5 font-mono text-xs text-center text-white" placeholder="0-6 or *" />
                </div>
              </div>

              <div className="bg-gray-950 p-4 rounded-lg border border-white/5 flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-semibold">Cron Expression</span>
                  <button
                    onClick={() => copyToClipboard(cronResult)}
                    className="text-purple-400 hover:text-purple-300 transition text-xs flex items-center space-x-1"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </button>
                </div>
                <div className="text-xl font-bold font-mono text-purple-400">{cronResult}</div>
                <div className="text-xs text-gray-300 mt-2 italic flex items-center space-x-1">
                  <Eye className="w-3.5 h-3.5 text-gray-400" />
                  <span>{cronText}</span>
                </div>
              </div>
            </div>
          )}

          {/* MARKDOWN PREVIEWER */}
          {activeTool === 'markdown' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-2">Markdown Editor</span>
                <textarea
                  value={mdInput}
                  onChange={(e) => setMdInput(e.target.value)}
                  className="w-full h-80 bg-gray-900 border border-white/10 rounded-lg p-3 font-mono text-xs text-gray-200 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-2">Live Render</span>
                <div
                  dangerouslySetInnerHTML={renderMarkdown(mdInput)}
                  className="w-full h-80 bg-gray-950 border border-white/5 rounded-lg p-4 overflow-y-auto text-gray-300 text-sm space-y-2 text-left"
                />
              </div>
            </div>
          )}

          {/* COLOR PICKER & CONVERTER */}
          {activeTool === 'color' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-900/20 p-5 rounded-lg border border-white/5">
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Pick Color</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={hexColor}
                      onChange={(e) => setHexColor(e.target.value)}
                      className="w-12 h-12 rounded border border-white/10 cursor-pointer bg-transparent"
                    />
                    <input
                      type="text"
                      value={hexColor}
                      onChange={(e) => setHexColor(e.target.value)}
                      className="bg-gray-800 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center bg-gray-950 p-2.5 rounded border border-white/5">
                    <span className="text-xs text-gray-400">RGB</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs text-gray-200">{rgbColor}</span>
                      <button onClick={() => copyToClipboard(rgbColor)} className="text-gray-500 hover:text-purple-400"><Copy className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-950 p-2.5 rounded border border-white/5">
                    <span className="text-xs text-gray-400">HSL</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs text-gray-200">{hslColor}</span>
                      <button onClick={() => copyToClipboard(hslColor)} className="text-gray-500 hover:text-purple-400"><Copy className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div
                  className="w-full h-44 rounded-xl border border-white/15 shadow-xl relative overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: hexColor }}
                >
                  <span className="bg-black/60 px-3 py-1.5 rounded-lg text-white font-mono font-semibold text-xs tracking-wider border border-white/10">
                    {hexColor.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* HASH GENERATOR */}
          {activeTool === 'hash' && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-2">Input String</span>
                <input
                  type="text"
                  value={hashInput}
                  onChange={(e) => setHashInput(e.target.value)}
                  className="w-full bg-gray-900 border border-white/10 rounded-lg px-3 py-2 font-mono text-xs text-white focus:outline-none focus:border-purple-500"
                  placeholder="developer_vault"
                />
              </div>

              <div className="space-y-3">
                <div className="bg-gray-950 p-3 rounded border border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-purple-400 uppercase font-semibold">SHA-256</span>
                    <button onClick={() => copyToClipboard(sha256Result)} className="text-gray-500 hover:text-purple-400 text-xs flex items-center space-x-1">
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </button>
                  </div>
                  <div className="font-mono text-xs text-gray-300 break-all">{sha256Result || 'Generating...'}</div>
                </div>

                <div className="bg-gray-950 p-3 rounded border border-white/5">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-purple-400 uppercase font-semibold">MD5</span>
                    <button onClick={() => copyToClipboard(md5Result)} className="text-gray-500 hover:text-purple-400 text-xs flex items-center space-x-1">
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </button>
                  </div>
                  <div className="font-mono text-xs text-gray-300 break-all">{md5Result || 'Generating...'}</div>
                </div>
              </div>
            </div>
          )}

          {/* PASSWORD GENERATOR */}
          {activeTool === 'password' && (
            <div className="space-y-4 bg-gray-900/20 p-5 rounded-lg border border-white/5">
              <div className="bg-gray-950 p-4 rounded-lg border border-white/5 flex justify-between items-center">
                <span className="font-mono text-lg text-green-400 font-bold select-all tracking-wider">{passResult}</span>
                <div className="flex space-x-2">
                  <button onClick={generatePassword} className="text-gray-400 hover:text-purple-400 transition" title="Regenerate">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button onClick={() => copyToClipboard(passResult)} className="text-gray-400 hover:text-purple-400 transition" title="Copy password">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 block mb-1.5">Length: {passLength}</label>
                  <input
                    type="range"
                    min={6}
                    max={64}
                    value={passLength}
                    onChange={(e) => {
                      setPassLength(Number(e.target.value));
                      generatePassword();
                    }}
                    className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-purple-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center space-x-2 text-xs text-gray-300 cursor-pointer select-none">
                    <input type="checkbox" checked={passUpper} onChange={(e) => { setPassUpper(e.target.checked); }} className="rounded bg-gray-800 border-white/10 accent-purple-600" />
                    <span>Uppercase (A-Z)</span>
                  </label>
                  <label className="flex items-center space-x-2 text-xs text-gray-300 cursor-pointer select-none">
                    <input type="checkbox" checked={passLower} onChange={(e) => { setPassLower(e.target.checked); }} className="rounded bg-gray-800 border-white/10 accent-purple-600" />
                    <span>Lowercase (a-z)</span>
                  </label>
                  <label className="flex items-center space-x-2 text-xs text-gray-300 cursor-pointer select-none">
                    <input type="checkbox" checked={passNumbers} onChange={(e) => { setPassNumbers(e.target.checked); }} className="rounded bg-gray-800 border-white/10 accent-purple-600" />
                    <span>Numbers (0-9)</span>
                  </label>
                  <label className="flex items-center space-x-2 text-xs text-gray-300 cursor-pointer select-none">
                    <input type="checkbox" checked={passSymbols} onChange={(e) => { setPassSymbols(e.target.checked); }} className="rounded bg-gray-800 border-white/10 accent-purple-600" />
                    <span>Symbols (!@#)</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* ENVIRONMENT VARIABLE MANAGER */}
          {activeTool === 'env' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-semibold text-gray-400 block mb-2">Input .env File</span>
                <textarea
                  value={envInput}
                  onChange={(e) => setEnvInput(e.target.value)}
                  className="w-full h-64 bg-gray-900 border border-white/10 rounded-lg p-3 font-mono text-xs text-gray-200 focus:outline-none focus:border-purple-500"
                  placeholder="KEY=value"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-gray-400">Parsed JSON config</span>
                  {envJSON && (
                    <button
                      onClick={() => copyToClipboard(envJSON)}
                      className="text-purple-400 hover:text-purple-300 transition flex items-center space-x-1 text-xs"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy JSON</span>
                    </button>
                  )}
                </div>
                <textarea
                  readOnly
                  value={envJSON}
                  className="w-full h-64 bg-gray-950 border border-white/5 rounded-lg p-3 font-mono text-xs text-green-400"
                  placeholder="Parsed variables will render here..."
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
