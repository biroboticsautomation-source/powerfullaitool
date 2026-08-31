import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/products';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold backdrop-blur-md">
            Got Questions?
          </div>

          <h2
            id="faq-main-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit']"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Everything you need to know about TeachFlow AI tools, ₹99 pricing, payment, and delivery.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-14 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                id={`faq-item-${index}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden backdrop-blur-xl ${
                  isOpen
                    ? 'bg-white/[0.08] border-cyan-500/50 shadow-lg shadow-cyan-500/5'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  id={`btn-faq-toggle-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="text-base font-bold text-white font-['Outfit']">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Support CTA in FAQ */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div>
            <h4 className="text-base font-bold text-white font-['Outfit']">
              Still have questions or need assistance?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Our support team is active on WhatsApp and email: {CONTACT_INFO.email}
            </p>
          </div>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
