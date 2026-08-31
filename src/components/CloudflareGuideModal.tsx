import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, ShieldCheck, Terminal, Globe, UploadCloud, Copy, Check } from 'lucide-react';

interface CloudflareGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CloudflareGuideModal: React.FC<CloudflareGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      id="cloudflare-guide-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="cloudflare-guide-card"
        className="relative w-full max-w-3xl my-8 bg-[#050B1A]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pr-8">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 p-2.5 flex items-center justify-center text-amber-400 shrink-0">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">
              Cloudflare Pages Deployment Guide
            </h3>
            <p className="text-xs text-amber-300/90 font-medium">
              Fix the "TypeScript files were found" error & deploy in 2 easy steps
            </p>
          </div>
        </div>

        {/* Why the error happened explanation box */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2 text-xs">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Why you saw that upload error:</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Cloudflare's manual drag-and-drop file uploader expects <strong>compiled static files (HTML, CSS, JS)</strong>. When dragging the raw project folder containing <code className="bg-white/10 px-1 py-0.5 rounded text-amber-300">.ts</code> files directly, Cloudflare warns that it needs a build step first.
          </p>
        </div>

        {/* Recommended Method 1: Cloudflare Pages with Git (100% Automated) */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-[10px] font-black">
              1
            </span>
            <span>Recommended: Cloudflare Pages (Connect Git)</span>
          </h4>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-3 text-xs text-slate-300">
            <p>In Cloudflare Dashboard &rarr; <strong>Workers & Pages</strong> &rarr; <strong>Create application</strong> &rarr; <strong>Pages</strong> &rarr; <strong>Connect to Git</strong>.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Framework Preset:</span>
                <p className="text-cyan-400 font-mono font-bold mt-0.5">Vite</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Build Command:</span>
                <p className="text-cyan-400 font-mono font-bold mt-0.5">npm run build</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 sm:col-span-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Build Output Directory:</span>
                <p className="text-emerald-400 font-mono font-bold mt-0.5">dist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Method 2: Drag and drop the built `dist` folder */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-black">
              2
            </span>
            <span>Direct Upload: Drag ONLY the <code className="text-cyan-300">dist/</code> folder</span>
          </h4>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2 text-xs text-slate-300">
            <p>
              1. Run build in your terminal: <code className="bg-white/10 px-2 py-1 rounded text-cyan-300 font-mono">npm run build</code>
            </p>
            <p>
              2. Open Cloudflare &rarr; <strong>Workers & Pages</strong> &rarr; <strong>Pages</strong> &rarr; <strong>Upload Assets</strong>
            </p>
            <p>
              3. Drag and drop the generated <strong><code className="text-emerald-400 font-mono">dist</code></strong> folder (which contains <code className="text-slate-400 font-mono">index.html, assets/</code>).
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
          >
            Understood & Ready
          </button>
        </div>

      </div>
    </div>
  );
};
