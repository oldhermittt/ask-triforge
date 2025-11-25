'use client';

import { useState } from 'react';
import {
  Activity,
  Send,
  Cpu,
  AlertCircle,
  Zap,
  Terminal,
  CheckCircle2,
  ChevronRight,
  Loader2,
  ArrowRight,
} from 'lucide-react';

export default function AskTriforge() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Quick prompts
  const suggestions = [
    'How should I fuel for a 3h30 bike in a 70.3?',
    'Explain the physiological difference between VO2 max and LT2.',
    'Draft a pacing strategy for a hilly Olympic distance course.',
    "What are the biomechanical causes of runner's knee?",
  ];

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      // NOTE: This fetch requires the /api/ask/route.ts file to be set up
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'System encountered an unknown error.');
      } else {
        setAnswer(data.answer);
      }
    } catch (e) {
      // Fallback for demo when API is not yet fully configured
      setTimeout(() => {
        setAnswer(
          `### ⚡ Triforge Core - Debug Mode\n\n**Status:** Awaiting API Handshake.\n**Action:** No active connection to AI inference engine.\n**Note:** Ensure \`/api/ask/route.ts\` is configured correctly.`
        );
        setLoading(false);
      }, 1500);
    } finally {
      // setLoading(false);
    }
  };

  const fillSuggestion = (text: string) => {
    setQuestion(text);
  };

  return (
    <main className="min-h-screen text-zinc-50 selection:bg-emerald-500/30 selection:text-emerald-200 relative overflow-hidden font-mono">
      {/* 🚀 Dynamic Mesh Gradient Background (Z-INDEX 0) - Opacity CORRECTLY INCREASED */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-black z-0">
        {/* Layer 1: Large, subtle green glow (opacity increased to 75) */}
        <div className="absolute inset-0 bg-gradient-radial from-emerald-900/10 to-transparent blur-3xl opacity-75 animate-mesh-glow-1"></div>
        {/* Layer 2: Medium, shifting teal glow (opacity increased to 75) */}
        <div className="absolute top-1/4 left-1/4 w-3/5 h-3/5 bg-gradient-radial from-teal-800/10 to-transparent blur-3xl opacity-75 animate-mesh-glow-2"></div>
        {/* Layer 3: Smaller, brighter lime accent (opacity increased to 75) */}
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-radial from-lime-700/8 to-transparent blur-3xl opacity-75 animate-mesh-glow-3"></div>
      </div>

      {/* 🟢 Z-INDEX 10: Subtle overall backdrop blur */}
      <div className="fixed inset-0 backdrop-blur-md pointer-events-none z-10" />

      {/* 🟢 Z-INDEX 15: Grid Layer for static lines - Opacity adjusted for subtlety */}
      <div
        className="fixed inset-0 opacity-[0.06] z-[15]" // Opacity set to 6%
        style={{
          backgroundImage:
            'linear-gradient(to right, #1D9A1D 1px, transparent 1px), linear-gradient(to bottom, #1D9A1D 1px, transparent 1px)',
          backgroundSize: '25px 25px',
          backgroundColor: 'transparent',
        }}
      />

      {/* 🟢 Z-INDEX 20: Noise Overlay */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-[0.02] pointer-events-none z-20" />

      {/* 🟢 Z-INDEX 30: Main Content Container */}
      <div className="relative max-w-4xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center z-30 animate-in fade-in duration-1000">
        {/* Header Section */}
        <div className="mb-12 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-emerald-900/50 text-xs text-emerald-400 mb-4 shadow-lg shadow-emerald-900/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            TRIFORGE COACH • PRO MODE ACTIVE
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            Ask
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
              Triforge
            </span>
          </h1>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm md:text-base font-sans">
            AI-powered endurance analysis. Optimize your physiology, fueling,
            and pacing with precision.
          </p>
        </div>

        {/* Main Interface Container */}
        <div className="w-full bg-black/80 border border-zinc-800/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/80 overflow-hidden relative">
          {/* subtle scanline/noise texture overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

          {/* Input Area */}
          <div className="p-6 border-b border-emerald-900/50 relative group">
            {/* Input glow container */}
            <div
              className="absolute inset-0 m-[-2px] rounded-xl z-0 pointer-events-none 
                          bg-gradient-to-br from-emerald-600/10 via-transparent to-transparent opacity-0 
                          group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 animate-glow-light"
              style={{
                maskImage: 'linear-gradient(black, black)',
                WebkitMaskImage: 'linear-gradient(black, black)',
              }}
            >
              <div className="absolute inset-0 rounded-xl border border-emerald-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
            </div>

            <label className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-3 uppercase tracking-wider">
              <ChevronRight className="w-3 h-3 animate-pulse" />
              COMMAND INPUT
            </label>
            <div className="relative">
              <textarea
                className="w-full min-h-[120px] p-4 pr-12 rounded-lg bg-black/90 border border-zinc-700 text-emerald-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 transition-all resize-none text-base leading-relaxed shadow-inner font-mono"
                placeholder="Enter training parameters or physiological query..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleAsk();
                  }
                }}
              />
              <div className="absolute bottom-3 right-3">
                <button
                  onClick={handleAsk}
                  disabled={loading || !question.trim()}
                  className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-zinc-950 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/40 active:scale-95"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Structured Suggestion Cards (Solaax Style) */}
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => fillSuggestion(s)}
                  className="group flex flex-col items-start p-3 md:p-4 rounded-lg bg-black/70 border border-zinc-700/80 hover:border-emerald-500/50 hover:bg-black/90 transition-all shadow-md hover:shadow-emerald-900/40 active:scale-[0.98] focus:ring-2 focus:ring-emerald-500/50 focus:outline-none"
                >
                  <div className="flex items-center justify-between w-full mb-1.5 md:mb-2">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 group-hover:text-emerald-300 transition-colors" />
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <p className="text-left text-sm font-bold text-zinc-200 group-hover:text-white transition-colors font-sans">
                    {s.split(' ').slice(0, 5).join(' ')}...
                  </p>
                  <p className="text-left text-xs text-zinc-400 mt-1 font-mono tracking-tighter uppercase">
                    Load Command
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Output Area */}
          <div className="min-h-[250px] bg-black/90 p-6 md:p-8 relative text-sm">
            {!loading && !answer && !error && (
              <div className="flex flex-col items-center justify-center h-full text-zinc-700 py-10 opacity-70">
                <Cpu className="w-12 h-12 mb-4 stroke-1 opacity-50" />
                <p className="text-xs tracking-widest text-emerald-700/60">
                  AWAITING COMMAND
                </p>
              </div>
            )}

            {loading && (
              <div className="flex flex-col items-center justify-center py-12 space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-emerald-900/30 rounded-full animate-spin-slow" />
                  <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-emerald-500/80 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
                </div>
                <p className="text-emerald-500/90 text-xs animate-pulse tracking-widest">
                  PROCESSING endurance_data...
                </p>
              </div>
            )}

            {error && (
              <div className="p-4 rounded-lg bg-red-950/30 border border-red-900/50 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-red-500 font-bold">PROTOCOL FAILURE</h3>
                  <p className="text-red-400/70 mt-1 font-sans">{error}</p>
                </div>
              </div>
            )}

            {answer && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-emerald-900/30">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-wider font-bold">
                    <Terminal className="w-4 h-4" />
                    SYSTEM RESPONSE
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>

                {/* Tailwind Typography styles applied here by the .prose class */}
                <div className="prose prose-invert prose-p:text-zinc-300 prose-headings:text-emerald-100 prose-strong:text-emerald-400 prose-ul:text-zinc-400 max-w-none leading-relaxed whitespace-pre-wrap font-mono">
                  {answer}
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest">
                  <span>Triforge Core v2.3.0</span>
                  <span>Secure Connection • Operational</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex gap-6 text-xs text-zinc-500 font-mono uppercase tracking-widest">
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Log Data
          </a>
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Preferences
          </a>
          <a href="#" className="hover:text-emerald-400 transition-colors">
            Help Link
          </a>
        </div>
      </div>
    </main>
  );
}
