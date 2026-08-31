import React from 'react';
import { Sparkles, ArrowRight, Zap, TrendingUp, Code, PenTool, Image, Briefcase, Cpu, CheckCircle } from 'lucide-react';

interface SkillUpgradeProps {
  onExploreTools: () => void;
}

export const SkillUpgrade: React.FC<SkillUpgradeProps> = ({ onExploreTools }) => {
  const skillDomains = [
    {
      title: 'Productivity & Workflows',
      metric: '3x Faster Output',
      description: 'Automate daily email drafting, meeting notes, database querying, and document summaries.',
      icon: Zap,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Content Creation & Copywriting',
      metric: 'Zero Writer’s Block',
      description: 'Generate high-ranking SEO blogs, social carousels, and converting email sequences in minutes.',
      icon: PenTool,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Design & Visual Assets',
      metric: 'Studio Quality Art',
      description: 'Create photorealistic stock renders, custom product mockups, and UI concepts with Midjourney & Canva AI.',
      icon: Image,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Coding & Architecture',
      metric: '50% Less Debugging',
      description: 'Speed up full-stack development with AI autocomplete, automated unit test generation, and refactoring.',
      icon: Code,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Marketing & Ad Growth',
      metric: 'Higher ROAS',
      description: 'Generate 100s of high-CTR ad headlines, video hooks, and high-conversion landing page copy.',
      icon: TrendingUp,
      color: 'from-rose-500 to-red-500'
    },
    {
      title: 'Industrial Automation',
      metric: 'Industry 4.0 Ready',
      description: 'Master PLC programming, robot teaching, and smart factory telemetry at just ₹99 flat.',
      icon: Cpu,
      color: 'from-blue-600 to-indigo-600'
    }
  ];

  return (
    <section id="career-skills" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Container */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold backdrop-blur-md mb-4">
              Career Acceleration
            </div>

            <h2
              id="skills-upgrade-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit'] leading-tight"
            >
              Upgrade Your Skills with AI
            </h2>

            <p
              id="skills-upgrade-text"
              className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
            >
              Learn how modern AI tools can help you improve productivity, content creation, automation, marketing, design, coding and business workflows.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                id="btn-upgrade-explore-tools"
                onClick={onExploreTools}
                className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl shadow-xl hover:bg-cyan-50 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Explore AI Tools</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>
              
              <span className="text-xs font-semibold text-slate-400">
                ⚡ Instant access • Flat ₹99 per kit
              </span>
            </div>
          </div>

          {/* Skill Domains Matrix */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillDomains.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.06] transition-all duration-300 group shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 p-2 flex items-center justify-center text-cyan-400 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono font-bold">
                      {domain.metric}
                    </span>
                  </div>

                  <h4 className="mt-3 text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-['Outfit']">
                    {domain.title}
                  </h4>

                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
