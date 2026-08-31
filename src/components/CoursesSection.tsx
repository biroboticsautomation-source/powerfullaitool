import React, { useState } from 'react';
import { Sparkles, BookOpen, Clock, Layers, CheckCircle2, ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';
import { Course } from '../types';
import { DynamicIcon } from './DynamicIcon';

interface CoursesSectionProps {
  courses: Course[];
  onSelectCourse?: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ courses, onSelectCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleBuyNow = (e: React.MouseEvent, paymentUrl: string) => {
    e.stopPropagation();
    window.open(paymentUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="courses" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 font-semibold backdrop-blur-md">
            Industrial Automation Academy
          </div>

          <h2
            id="courses-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-['Outfit']"
          >
            TeachFlow Educational Courses
          </h2>

          <p className="text-sm sm:text-base text-slate-400">
            Professional industry-standard automation, robotics, and PLC training designed by experienced automation engineers.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              id={`course-card-${course.id}`}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden cursor-pointer hover:border-cyan-500/50 hover:bg-white/[0.08] shadow-lg"
              onClick={() => setSelectedCourse(course)}
            >
              <div>
                {/* Top Badge & Level */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 p-2.5 flex items-center justify-center text-cyan-400 shadow-md">
                    <DynamicIcon name={course.iconName} className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase">
                      {course.level}
                    </span>
                    <span className="bg-cyan-500/20 text-cyan-400 text-[10px] font-black px-2.5 py-0.5 rounded border border-cyan-500/40">
                      ₹99 Only
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-widest">
                    {course.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-['Outfit'] mt-0.5">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    {course.subtitle}
                  </p>
                </div>

                <p className="mt-3 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Metadata (Duration & Modules) */}
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-400 bg-white/[0.03] p-2.5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>{course.modulesCount} Modules</span>
                  </div>
                </div>

                {/* Key Topics List */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-white/10">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Topics Covered:
                  </p>
                  {course.topics.slice(0, 3).map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span className="line-clamp-1">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Buy Now CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase">Complete Course</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-white font-['Outfit']">₹99</span>
                      <span className="text-xs text-cyan-400 font-semibold">One-time full access</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="text-xs text-cyan-400 hover:underline font-semibold"
                  >
                    View Syllabus
                  </button>
                </div>

                <button
                  id={`btn-course-buy-${course.id}`}
                  onClick={(e) => handleBuyNow(e, course.paymentUrl)}
                  className="block w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-center text-xs font-black rounded-lg transition-all shadow-md active:scale-95"
                >
                  Buy Now – ₹99
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Syllabus / Course Detail Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#050B1A]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase">
                    {selectedCourse.category} • {selectedCourse.level}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-['Outfit'] mt-2">
                    {selectedCourse.title}
                  </h3>
                  <p className="text-xs text-slate-400">{selectedCourse.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-2 rounded-xl bg-white/10 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedCourse.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Complete Curriculum & Topics:
                </h4>
                <div className="space-y-2">
                  {selectedCourse.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  What You Will Achieve:
                </h4>
                <div className="space-y-1.5">
                  {selectedCourse.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-400">Total Price:</p>
                  <p className="text-2xl font-black text-white font-['Outfit']">₹99 Only</p>
                </div>

                <button
                  onClick={(e) => handleBuyNow(e, selectedCourse.paymentUrl)}
                  className="w-full sm:w-auto px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all"
                >
                  Enroll Now – Buy Now – ₹99
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
