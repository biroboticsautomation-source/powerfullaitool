import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, HelpCircle, BookOpen, Tag, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenCloudflareGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenCloudflareGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'AI Tools', target: 'marketplace' },
    { label: 'Categories', target: 'categories' },
    { label: 'Best Deals', target: 'deals' },
    { label: 'Courses', target: 'courses' },
    { label: 'How It Works', target: 'how-it-works' },
    { label: 'FAQ', target: 'faq' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-white/[0.02] backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            id="navbar-brand-logo"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-xs">TF</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-white uppercase font-['Outfit']">
                  TeachFlow <span className="text-cyan-400">AI</span>
                </span>
                <span className="px-1.5 py-0.2 text-[9px] font-bold tracking-wider uppercase bg-white/10 border border-white/10 text-cyan-300 rounded">
                  ₹99
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`nav-link-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenCloudflareGuide && (
              <button
                id="btn-cloudflare-deploy-guide"
                onClick={onOpenCloudflareGuide}
                title="Cloudflare Deployment Guide"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full hover:bg-amber-500/20 transition-all"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Cloudflare Ready</span>
              </button>
            )}

            <button
              id="btn-nav-explore-ai-tools"
              onClick={() => handleLinkClick('marketplace')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Explore AI Tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="btn-mobile-explore-tools"
              onClick={() => handleLinkClick('marketplace')}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-md shadow-cyan-500/30"
            >
              Explore AI
            </button>
            <button
              id="btn-toggle-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden mt-3 mx-4 p-4 rounded-2xl bg-[#050B1A]/95 backdrop-blur-xl border border-white/10 shadow-2xl space-y-3"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                id={`mobile-nav-link-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className="flex items-center justify-between p-2.5 text-xs font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3 h-3 text-slate-500" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              id="btn-mobile-drawer-explore"
              onClick={() => handleLinkClick('marketplace')}
              className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-center font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/30"
            >
              Explore AI Tools – ₹99
            </button>
            
            {onOpenCloudflareGuide && (
              <button
                id="btn-mobile-cloudflare-guide"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCloudflareGuide();
                }}
                className="w-full py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-center font-semibold text-xs"
              >
                Cloudflare Deploy Guide
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
