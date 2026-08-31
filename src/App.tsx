import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marketplace } from './components/Marketplace';
import { BestDeals } from './components/BestDeals';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SkillUpgrade } from './components/SkillUpgrade';
import { CoursesSection } from './components/CoursesSection';
import { CustomerTrust } from './components/CustomerTrust';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CloudflareGuideModal } from './components/CloudflareGuideModal';
import { PRODUCTS, COURSES } from './data/products';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCloudflareGuide, setShowCloudflareGuide] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (sectionId === 'categories') {
      const el = document.getElementById('categories-tabs') || document.getElementById('marketplace');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    if (sectionId === 'contact') {
      const el = document.getElementById('main-footer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050B1A] text-slate-200 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      
      {/* Frosted Glass Ambient Lighting Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-purple-900/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[15%] w-[30%] h-[30%] bg-blue-900/15 rounded-full blur-[130px]" />
      </div>
      
      {/* Top Fixed Navbar */}
      <Navbar
        onNavigate={scrollToSection}
        onOpenCloudflareGuide={() => setShowCloudflareGuide(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero
          onExploreTools={() => scrollToSection('marketplace')}
          onGetStarted={() => scrollToSection('marketplace')}
        />

        {/* AI Tools Marketplace */}
        <Marketplace
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Best Deals Section */}
        <BestDeals
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* How It Works (4 Steps) */}
        <HowItWorks />

        {/* Why Choose TeachFlow (6 Feature Cards) */}
        <WhyChooseUs />

        {/* Career & Productivity Skill Upgrade */}
        <SkillUpgrade
          onExploreTools={() => scrollToSection('marketplace')}
        />

        {/* TeachFlow Educational Courses (PLC, Robotics, Industrial Automation) */}
        <CoursesSection
          courses={COURSES}
        />

        {/* Customer Trust (4 Pillars) */}
        <CustomerTrust />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Final CTA */}
        <FinalCTA
          onExploreTools={() => scrollToSection('marketplace')}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Support Button */}
      <FloatingWhatsApp />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Cloudflare Pages Deployment Guide Modal */}
      <CloudflareGuideModal
        isOpen={showCloudflareGuide}
        onClose={() => setShowCloudflareGuide(false)}
      />

    </div>
  );
}
