import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        id="floating-whatsapp-btn"
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-400/60 hover:scale-105 active:scale-95 transition-all duration-300"
        title="Chat with TeachFlow AI Support on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-black text-black" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        </div>
        <span className="hidden sm:inline font-bold tracking-wide">WhatsApp Support</span>
      </a>
    </div>
  );
};
