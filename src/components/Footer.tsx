import React, { useState } from 'react';
import { Sparkles, Mail, Phone, Instagram, Youtube, MessageCircle, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activePolicyModal, setActivePolicyModal] = useState<'terms' | 'privacy' | 'refund' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#050B1A]/80 backdrop-blur-2xl border-t border-white/10 pt-16 pb-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg text-white tracking-tight font-['Outfit']">
                  TeachFlow
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-black bg-cyan-500 text-slate-950 rounded">
                  AI
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              India's modern digital marketplace and education platform for curated AI software starter packs, prompt engineering vaults, productivity systems, and industrial automation engineering courses at just ₹99.
            </p>

            {/* Editable Contact Info */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cyan-300 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                  WhatsApp Support Available
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={CONTACT_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-red-400 hover:border-red-500/40 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-cyan-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('marketplace')} className="hover:text-cyan-400 transition-colors">
                  AI Tools (₹99)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                  Automation Courses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-cyan-400 transition-colors">
                  Categories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('deals')} className="hover:text-cyan-400 transition-colors">
                  Best Deals
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Academy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
              Resources & Courses
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                  PLC Programming
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                  Robot Teaching
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-cyan-400 transition-colors">
                  Pharma Automation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="hover:text-cyan-400 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-cyan-400 transition-colors">
                  FAQ & Answers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActivePolicyModal('terms')} className="hover:text-cyan-400 transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('privacy')} className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setActivePolicyModal('refund')} className="hover:text-cyan-400 transition-colors">
                  Refund Policy
                </button>
              </li>
              <li>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Razorpay Verified</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="py-6 border-b border-white/5 text-[11px] text-slate-400 leading-relaxed space-y-1.5">
          <p>
            <strong className="text-slate-300">Disclaimer & Trademark Notice:</strong> TeachFlow AI provides independently curated digital starter guides, prompt engineering databases, Notion templates, and educational training courses. Product trademarks such as ChatGPT, Claude, Gemini, Midjourney, Canva, Runway, ElevenLabs, Notion, and GitHub Copilot are the property of their respective trademark holders. Mention of third-party products does not imply official endorsement, sponsorship, or licensing. TeachFlow AI does not sell cracked, pirated, or unauthorized software.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © {new Date().getFullYear()} TeachFlow AI (biroboticsautomation@gmail.com). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Policy Modals */}
      {activePolicyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#050B1A]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 text-left space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                {activePolicyModal === 'terms' && 'Terms & Conditions'}
                {activePolicyModal === 'privacy' && 'Privacy Policy'}
                {activePolicyModal === 'refund' && 'Refund Policy'}
              </h3>
              <button
                onClick={() => setActivePolicyModal(null)}
                className="p-1.5 rounded-lg bg-white/10 text-slate-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
              {activePolicyModal === 'terms' && (
                <>
                  <p>
                    Welcome to TeachFlow AI. By purchasing any digital toolkit, prompt bundle, or educational course on our website, you agree to the following terms:
                  </p>
                  <p>
                    <strong>1. License & Usage:</strong> All digital resources and prompts provided are for your personal and commercial workflow use. You may not resell, redistribute, or publicly republish the raw bundle files.
                  </p>
                  <p>
                    <strong>2. Pricing & Delivery:</strong> The standard rate for digital toolkits is ₹99. Digital delivery is initiated immediately upon successful Razorpay payment.
                  </p>
                  <p>
                    <strong>3. Content Authenticity:</strong> All educational course materials and prompt workflows are authored and curated legitimately.
                  </p>
                </>
              )}

              {activePolicyModal === 'privacy' && (
                <>
                  <p>
                    TeachFlow AI respects your privacy. We collect minimal information (such as name, email address, and transaction identifier) solely to deliver digital downloads and provide customer support.
                  </p>
                  <p>
                    <strong>Payment Data Security:</strong> We do not store credit/debit card numbers or bank credentials on our servers. All payments are encrypted and processed by Razorpay with bank-grade 256-bit SSL security.
                  </p>
                  <p>
                    <strong>Communication:</strong> We do not sell or trade your email address with third parties.
                  </p>
                </>
              )}

              {activePolicyModal === 'refund' && (
                <>
                  <p>
                    <strong>Digital Delivery Refund Policy:</strong> Because all TeachFlow AI products (prompt packs, Notion templates, automation guides, and course resources) are delivered instantly as digital downloads, sales are generally non-refundable once files are accessed.
                  </p>
                  <p>
                    <strong>Exception Guarantee:</strong> If you encounter a corrupted file link or download issue that our support team (biroboticsautomation@gmail.com) is unable to resolve within 48 hours, a full 100% refund of ₹99 will be issued to your original payment method without hassle.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-white/10 text-right">
              <button
                onClick={() => setActivePolicyModal(null)}
                className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
