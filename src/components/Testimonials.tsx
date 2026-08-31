import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold backdrop-blur-md">
            Learner & Creator Feedback
          </div>

          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit']"
          >
            What Our Community Says
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Real experiences from developers, creators, and engineers who accelerated their skills with TeachFlow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-white/[0.08] transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400">{t.date}</span>
                </div>

                {/* Comment */}
                <p className="mt-4 text-xs text-slate-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* User Profile */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-cyan-500/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white font-['Outfit'] flex items-center gap-1">
                      <span>{t.name}</span>
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                    </h4>
                    <p className="text-[10px] text-slate-400">{t.role}</p>
                  </div>
                </div>

                <div className="mt-3 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[10px] text-cyan-300 font-medium truncate">
                  Bought: {t.purchasedProduct}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          Note: Testimonial cards are editable placeholders representing verified student feedback and prompt usability surveys.
        </p>

      </div>
    </section>
  );
};
