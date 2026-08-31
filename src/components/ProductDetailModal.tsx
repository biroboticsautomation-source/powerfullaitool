import React, { useEffect } from 'react';
import { X, CheckCircle, Zap, ShieldCheck, ArrowRight, Sparkles, HelpCircle, Users, Check } from 'lucide-react';
import { Product } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleBuyNow = () => {
    window.open(product.paymentUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="product-detail-modal-card"
        className="relative w-full max-w-3xl my-8 bg-[#050B1A]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          id="btn-close-product-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header: Icon, Name, Category, Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pr-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 p-2.5 flex items-center justify-center text-cyan-400 shadow-lg">
              <DynamicIcon name={product.iconName} className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold">
                    {product.badge}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mt-1">
                {product.name}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">{product.tagline}</p>
            </div>
          </div>

          <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-extrabold flex items-center gap-1 shadow-sm">
            <Zap className="w-3.5 h-3.5 fill-cyan-400" />
            <span>₹99 Only</span>
          </div>
        </div>

        {/* Overview Description */}
        <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            Product Overview:
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Key Features & Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Features */}
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Key Deliverables / Features:</span>
            </h4>
            <div className="space-y-1.5">
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Core Benefits:</span>
            </h4>
            <div className="space-y-1.5">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Who It Is For & How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>Who It Is For:</span>
            </h4>
            <ul className="space-y-1 text-xs text-slate-300">
              {product.whoItIsFor.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>How It Works:</span>
            </h4>
            <ol className="space-y-1 text-xs text-slate-300">
              {product.howItWorks.map((step, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="font-bold text-cyan-400">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* Modal FAQ */}
        {product.faq && product.faq.length > 0 && (
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>Product FAQ:</span>
            </h4>
            <div className="space-y-2">
              {product.faq.map((item, idx) => (
                <div key={idx} className="text-xs">
                  <p className="font-bold text-slate-200">Q: {item.question}</p>
                  <p className="text-slate-400 mt-0.5">A: {item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Modal CTA Bar: Price ₹99 and Buy Now – ₹99 button */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400">Total Price:</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-black text-white font-['Outfit']">₹99</span>
              <span className="text-xs text-cyan-400 font-semibold">One-time payment</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Back to Catalog
            </button>

            <button
              id={`modal-buy-now-btn-${product.id}`}
              onClick={handleBuyNow}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <span>Buy Now – ₹99</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
