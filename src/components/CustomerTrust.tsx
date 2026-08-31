import React from 'react';
import { ShieldCheck, Zap, DownloadCloud, Headphones, Lock, CheckCircle, Award } from 'lucide-react';

export const CustomerTrust: React.FC = () => {
  const trustPillars = [
    {
      title: 'Secure Checkout',
      subtitle: '256-Bit Encryption',
      description: 'Processed via Razorpay gateway supporting all major UPI, Cards, and NetBanking methods.',
      icon: Lock,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Easy Purchase',
      subtitle: 'Instant 1-Click Flow',
      description: 'Zero complicated registrations. Direct access upon successful payment confirmation.',
      icon: Zap,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      title: 'Digital Access',
      subtitle: 'Instant Delivery',
      description: 'Immediate download links, Notion template duplication links, and video vaults in your inbox.',
      icon: DownloadCloud,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Customer Support',
      subtitle: 'Direct Help',
      description: 'Dedicated email and WhatsApp support for any inquiries, access assistance, or troubleshooting.',
      icon: Headphones,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="trust-section" className="py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit']"
          >
            Simple. Affordable. Powerful.
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Trusted by creators, students, and engineers across India for transparent, top-tier digital tools.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 p-2.5 flex items-center justify-center text-cyan-400 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="inline-block mt-4 text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-base font-bold text-white font-['Outfit'] mt-1">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Safe</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
