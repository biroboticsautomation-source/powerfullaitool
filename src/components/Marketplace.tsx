import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, ArrowRight, ExternalLink, Check, Eye, Zap, Flame, Shield } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { CATEGORIES } from '../data/products';
import { DynamicIcon } from './DynamicIcon';

interface MarketplaceProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ products, onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Tools');
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'name'>('popular');

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All Tools' || product.category === selectedCategory;
        const matchesSearch =
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.features.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') {
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        }
        if (sortBy === 'newest') {
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        }
        return a.name.localeCompare(b.name);
      });
  }, [products, searchTerm, selectedCategory, sortBy]);

  const handleBuyNow = (e: React.MouseEvent, paymentUrl: string) => {
    e.stopPropagation();
    window.open(paymentUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="marketplace" className="py-24 relative bg-transparent">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold backdrop-blur-md">
            AI Tools Marketplace
          </div>

          <h2
            id="marketplace-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight"
          >
            Featured AI Tools
          </h2>

          <p
            id="marketplace-subheading"
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            Premium tools to supercharge your workflow at flat ₹99.
          </p>
        </div>

        {/* Search, Categories, and Sort Controls */}
        <div id="marketplace-controls" className="mt-12 space-y-6">
          
          {/* Top Search Bar & Sort Dropdown */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                id="search-ai-tools-input"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search AI tools (ChatGPT, Midjourney, Video, Coding, Prompts)..."
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm sm:text-base shadow-inner backdrop-blur-md transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-300 hover:text-white bg-white/10 px-2.5 py-1 rounded-lg border border-white/10"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-semibold text-slate-400 whitespace-nowrap flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sort by:</span>
              </span>
              <select
                id="sort-products-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full md:w-auto px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-slate-200 text-sm font-medium focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 backdrop-blur-md"
              >
                <option value="popular" className="bg-[#050B1A]">Most Popular</option>
                <option value="newest" className="bg-[#050B1A]">Newest Additions</option>
                <option value="name" className="bg-[#050B1A]">Alphabetical (A-Z)</option>
              </select>
            </div>

          </div>

          {/* Category Tabs / Pills */}
          <div id="categories-tabs" className="overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-2 min-w-max">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    id={`category-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                        : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Results Counter & Reset Filter */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
          <p>
            Showing <span className="text-white font-bold">{filteredProducts.length}</span> tools in{' '}
            <span className="text-cyan-400 font-semibold">{selectedCategory}</span>
          </p>
          {(searchTerm || selectedCategory !== 'All Tools') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Tools');
              }}
              className="text-cyan-400 hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              onClick={() => onSelectProduct(product)}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 relative cursor-pointer hover:border-cyan-500/50 hover:bg-white/[0.08] shadow-lg"
            >
              {/* Top Row: Icon, Category Badge & Deal Pill */}
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 p-2.5 flex items-center justify-center text-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-300"
                  >
                    <DynamicIcon name={product.iconName} className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div className="flex flex-col items-end gap-1.5">
                    {/* Attractive ₹99 Only Badge */}
                    <div className="bg-cyan-500/20 text-cyan-400 text-[10px] font-black px-2.5 py-0.5 rounded border border-cyan-500/40">
                      ₹99 Only
                    </div>

                    {product.badge && (
                      <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold uppercase tracking-wider">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Category tag */}
                <div className="mt-4">
                  <span className="text-[10px] font-semibold text-cyan-400/90 tracking-widest uppercase">
                    {product.category}
                  </span>
                </div>

                {/* Product Name & Tagline */}
                <h3 className="mt-1 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-['Outfit']">
                  {product.name}
                </h3>

                <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Deliverables */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-white/10">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action Section: Strict Price ₹99 & Buy Now CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">Access:</span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black text-white font-['Outfit']">₹99</span>
                      <span className="text-[10px] text-cyan-400 font-semibold">One-time</span>
                    </div>
                  </div>

                  <button
                    id={`btn-view-details-${product.id}`}
                    onClick={() => onSelectProduct(product)}
                    className="text-xs font-semibold text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>

                {/* Buy Now Button */}
                <button
                  id={`btn-buy-now-${product.id}`}
                  onClick={(e) => handleBuyNow(e, product.paymentUrl)}
                  className="block w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-center text-xs font-black rounded-lg transition-all shadow-md cursor-pointer active:scale-95"
                >
                  Buy Now – ₹99
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
            <Search className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white">No tools found</h4>
            <p className="text-sm text-slate-400 mt-1">
              Try searching with another keyword or pick a different category.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Tools');
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold text-xs"
            >
              Show All AI Tools
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
