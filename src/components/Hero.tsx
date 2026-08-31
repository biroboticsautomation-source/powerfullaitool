import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Bot,
  Layers,
  Cpu,
  CheckCircle,
  TrendingUp,
  Download,
  Flame,
  Award
} from 'lucide-react';
import { DEFAULT_PAYMENT_URL } from '../data/products';

interface HeroProps {
  onExploreTools: () => void;
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreTools, onGetStarted }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center justify-center bg-[#050B1A]"
    >
      {/* Background Neon Glow Orbs and Neural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, CTAs, and Trust Elements */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Announcement Badge */}
            <div className="inline-block px-3.5 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[11px] uppercase tracking-widest text-cyan-400 font-semibold shadow-sm">
              Simple • Affordable • Digital • Easy Access
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1
                id="hero-main-headline"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.1]"
              >
                Powerful AI Tools.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Just ₹99.
                </span>
              </h1>

              {/* Subheadline */}
              <p
                id="hero-subheadline"
                className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0"
              >
                Discover powerful AI tools and digital resources designed to help you create faster, work smarter and grow your career or business.
              </p>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="btn-hero-explore-primary"
                onClick={onExploreTools}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl shadow-xl hover:bg-cyan-50 transition-all flex items-center justify-center gap-3 cursor-pointer hover:shadow-cyan-500/20 active:scale-95"
              >
                <span>Explore AI Tools</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>

              <button
                id="btn-hero-get-started"
                onClick={onGetStarted}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Get Started</span>
              </button>
            </div>

            {/* Small Trust Message */}
            <div
              id="hero-trust-message"
              className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-cyan-300/80 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Simple</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Affordable</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Digital</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Easy Access</span>
              </div>
            </div>

            {/* Micro Stats Bar */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">₹99</p>
                <p className="text-[11px] text-slate-400">Flat Digital Rate</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-['Outfit']">100%</p>
                <p className="text-[11px] text-slate-400">Instant Download</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-extrabold text-purple-400 font-['Outfit']">50+</p>
                <p className="text-[11px] text-slate-400">Tools & Courses</p>
              </div>
            </div>

          </div>

          {/* Right Column: Futuristic AI & Robotics Illustration Interface */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer Glowing Border Frame */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-b from-cyan-500/20 via-purple-600/20 to-transparent shadow-[0_0_50px_rgba(6,182,212,0.15)]">
                
                {/* Main Glassmorphism Digital Terminal */}
                <div className="rounded-[22px] bg-white/5 backdrop-blur-2xl p-6 border border-white/10 space-y-5 overflow-hidden relative shadow-2xl">
                  
                  {/* Top Holographic Interface Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>TEACHFLOW AI ENGINE</span>
                    </div>
                  </div>

                  {/* Futuristic Central AI Graphic Graphic Mockup */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-5 border border-white/10 overflow-hidden group">
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
                    <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/30 flex items-center justify-center">
                          <Bot className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-cyan-300 font-mono tracking-wider">AI AUTOMATION STACK</p>
                          <h4 className="text-lg font-bold text-white font-['Outfit']">Digital Toolkit Vault</h4>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-black font-mono">
                        ₹99 ONLY
                      </span>
                    </div>

                    {/* Interactive Mock Data Flow Lines */}
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between text-slate-300 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                        <span className="flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                          <span>AI Writing & Prompts</span>
                        </span>
                        <span className="text-emerald-400 font-bold">Ready</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                        <span className="flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-purple-400" />
                          <span>Robotics & Industrial PLC</span>
                        </span>
                        <span className="text-emerald-400 font-bold">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5">
                        <span className="flex items-center gap-2">
                          <Download className="w-3.5 h-3.5 text-blue-400" />
                          <span>Instant Digital Delivery</span>
                        </span>
                        <span className="text-cyan-400 font-bold">24/7</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Action Badge on Terminal */}
                  <a
                    href={DEFAULT_PAYMENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-center font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 active:scale-98 transition-all"
                  >
                    Quick Checkout – ₹99 Only
                  </a>

                  <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>256-Bit SSL Razorpay Encrypted Gateway</span>
                  </p>

                </div>
              </div>

              {/* Floating Orbiting Mini Cards */}
              <div className="hidden sm:flex absolute -top-5 -left-6 items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl text-xs font-semibold text-white animate-bounce duration-1000">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>ChatGPT + Midjourney Kits</span>
              </div>

              <div className="hidden sm:flex absolute -bottom-5 -right-6 items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-xl text-xs font-semibold text-white">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Industrial PLC & Robotics ₹99</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
