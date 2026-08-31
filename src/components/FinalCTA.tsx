import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { DEFAULT_PAYMENT_URL } from '../data/products';

interface FinalCTAProps {
  onExploreTools: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreTools }) => {
  return (
    <section id="final-cta" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl p-10 sm:p-16 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl text-center space-y-6 overflow-hidden">
          
          {/* Badge */}
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold backdrop-blur-md">
            Instant Digital Access • ₹99 Only
          </div>

          {/* Main Heading */}
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-['Outfit'] max-w-4xl mx-auto leading-tight"
          >
            Your Next AI Tool Is Just{' '}
            <span className="text-cyan-400">
              ₹99 Away
            </span>
          </h2>

          {/* Subheading */}
          <p
            id="final-cta-subheading"
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Explore useful AI tools and digital resources from TeachFlow.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="btn-final-explore-tools"
              onClick={onExploreTools}
              className="w-full sm:w-auto px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore AI Tools</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={DEFAULT_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Direct Checkout (₹99)</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Razorpay Verified</span>
            </span>
            <span>•</span>
            <span>Instant Email & Drive Link Delivery</span>
            <span>•</span>
            <span>Lifetime Template Updates</span>
          </div>

        </div>

      </div>
    </section>
  );
};
