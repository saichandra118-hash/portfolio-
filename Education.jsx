import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            My Education
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Strong academic grounding in Computer Science with specialized focus on Artificial Intelligence and Machine Learning.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-violet-500 to-transparent -translate-x-1/2" />

          {/* Education Timeline Node */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12"
          >
            {/* Center Pulsing Indicator on timeline */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0B0D12] border-2 border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20">
              <span className="w-3.5 h-3.5 rounded-full bg-blue-400 animate-pulse" />
            </div>

            {/* Content Card (Centered or spanning smoothly) */}
            <div className="ml-14 md:ml-0 md:w-full">
              <div className="rounded-3xl bg-[#0F131C]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group">
                
                {/* Background glow sheen */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  {/* Institution and Degree */}
                  <div className="text-left space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-mono mb-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{education.degree}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                      {education.institution}
                    </h3>

                    <p className="text-blue-300 font-medium text-base sm:text-lg">
                      {education.branch}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {education.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        Status: {education.status}
                      </span>
                    </div>
                  </div>

                  {/* CGPA Badge */}
                  <div className="flex-shrink-0 self-start md:self-auto p-4 rounded-2xl bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-transparent border border-blue-500/30 text-center shadow-lg">
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                      8.5 <span className="text-sm font-normal text-slate-400">/ 10</span>
                    </div>
                    <div className="text-[11px] font-mono text-blue-300 uppercase tracking-wider font-semibold">
                      Academic CGPA
                    </div>
                  </div>
                </div>

                {/* Key Coursework and Academic Highlights */}
                <div className="pt-5 border-t border-white/[0.08] text-left">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    <span>Academic Highlights &amp; Coursework Focus</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {education.highlights.map((point, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
