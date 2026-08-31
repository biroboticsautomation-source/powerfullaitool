import React from 'react';
import { Sparkles, MousePointerClick, CreditCard, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { DEFAULT_PAYMENT_URL } from '../data/products';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Choose Your AI Tool',
      description: 'Explore our curated marketplace of AI prompts, digital workflow toolkits, or industrial automation courses.',
      icon: Sparkles,
      color: 'from-cyan-500 to-blue-500',
      borderGlow: 'border-cyan-500/40'
    },
    {
      stepNumber: '02',
      title: 'Click Buy Now',
      description: 'Select your preferred product or bundle and click any prominent "Buy Now – ₹99" button.',
      icon: MousePointerClick,
      color: 'from-blue-500 to-purple-500',
      borderGlow: 'border-blue-500/40'
    },
    {
      stepNumber: '03',
      title: 'Complete Secure Payment',
      description: 'Checkout securely via Razorpay in 30 seconds using UPI (GPay/PhonePe), Cards, or NetBanking.',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-500',
      borderGlow: 'border-purple-500/40'
    },
    {
      stepNumber: '04',
      title: 'Receive Your Product/Access',
      description: 'Get instant on-screen digital access links and email delivery with all templates, PDFs, and video vaults.',
      icon: Download,
      color: 'from-emerald-500 to-teal-500',
      borderGlow: 'border-emerald-500/40'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold backdrop-blur-md">
            4-Step Simple Process
          </div>

          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit']"
          >
            How It Works
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            From tool selection to instant digital delivery in less than 60 seconds.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stepNumber}
                id={`how-it-works-step-${item.stepNumber}`}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 relative border border-white/10 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Step Number Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-['Outfit'] text-slate-500">
                      {item.stepNumber}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 p-2 flex items-center justify-center text-cyan-400 shadow-md"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-['Outfit']">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Instant Access</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <a
            href={DEFAULT_PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
          >
            <span>Start Now – Just ₹99</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
