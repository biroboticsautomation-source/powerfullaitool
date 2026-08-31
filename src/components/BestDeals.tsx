import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles, ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface BestDealsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const BestDeals: React.FC<BestDealsProps> = ({ products, onSelectProduct }) => {
  // Live Countdown timer simulation (resets every 24h for urgency)
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dealProducts = products.filter((p) => p.isBestDeal);

  const handleBuyNow = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="deals" className="py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Urgency Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold backdrop-blur-md">
              Limited Digital Offer
            </div>

            <h2
              id="best-deals-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit']"
            >
              AI Tools at Just ₹99
            </h2>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Get instant lifetime digital access to our most sought-after AI tool packs and workflow master suites.
            </p>
          </div>

          {/* Flash Timer Badge */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-3 px-5 shadow-lg">
            <Clock className="w-5 h-5 text-cyan-400 animate-pulse" />
            <div>
              <p className="text-[10px] text-cyan-300 uppercase tracking-widest font-bold">
                Special Offer Ends In
              </p>
              <div className="flex items-center gap-1.5 font-mono text-lg font-extrabold text-white">
                <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-cyan-400">:</span>
                <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-cyan-400">:</span>
                <span className="bg-white/10 px-2 py-0.5 rounded border border-white/10">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Best Deals Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => (
            <div
              key={product.id}
              id={`deal-card-${product.id}`}
              onClick={() => onSelectProduct(product)}
              className="relative rounded-2xl p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.08] shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Top Animated Deal Ribbon */}
              <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-[10px] font-black uppercase tracking-wider">
                ₹99 Only
              </div>

              <div>
                {/* Icon & Category */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 p-2.5 flex items-center justify-center text-cyan-400">
                    <DynamicIcon name={product.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-['Outfit']">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-400 line-clamp-2">
                  {product.tagline}
                </p>

                {/* Key Points */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-white/10">
                  {product.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-cyan-400 font-bold uppercase">
                      Limited Digital Offer
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-white font-['Outfit']">₹99</span>
                      <span className="text-[10px] text-slate-400">/ lifetime pack</span>
                    </div>
                  </div>
                </div>

                <button
                  id={`btn-deal-buy-${product.id}`}
                  onClick={(e) => handleBuyNow(e, product.paymentUrl)}
                  className="block w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-center text-xs font-black rounded-lg transition-all shadow-md active:scale-95"
                >
                  Buy Now – ₹99
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
