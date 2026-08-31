import React from 'react';
import { Tag, CheckCircle2, DownloadCloud, ShieldCheck, Grid, Headphones, Sparkles, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/products';
import { DynamicIcon } from './DynamicIcon';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold backdrop-blur-md">
            The TeachFlow Advantage
          </div>

          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit']"
          >
            Why Choose TeachFlow
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Engineered for high speed, maximum affordability, and verified digital quality.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`why-choose-${item.id}`}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.08] shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 p-2.5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <DynamicIcon name={item.iconName} className="w-6 h-6" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white font-['Outfit'] flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>{item.title}</span>
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>TeachFlow Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
