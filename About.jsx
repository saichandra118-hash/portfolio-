import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Brain, Languages, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, personal } = portfolioData;

  const highlightIcons = {
    GraduationCap: GraduationCap,
    Brain: Brain,
    Languages: Languages,
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Identity &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            {about.heading}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive Narrative & University Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="p-8 rounded-2xl bg-[#0F131C]/80 border border-white/10 backdrop-blur-xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-100 mb-4 flex items-center gap-2">
                <span className="text-blue-400">👋</span> Aspiring AI &amp; Software Developer
              </h3>

              {about.paragraphs.map((para, idx) => (
                <p key={idx} className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))}

              {/* Education institution badge inside card */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Dr. M.G.R. Educational and Research Institute</h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      Chennai, Tamil Nadu
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Enrolled Student</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Three Professional Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {about.highlights.map((item, index) => {
              const IconComponent = highlightIcons[item.icon] || Award;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`p-6 rounded-2xl bg-gradient-to-r ${item.color} bg-[#0F131C]/90 border ${item.border} backdrop-blur-xl shadow-lg relative overflow-hidden group`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 text-left">
                      <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                        {item.value}
                      </div>
                      <div className={`text-base font-semibold ${item.accent} font-heading`}>
                        {item.label}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-snug pt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl bg-slate-900/80 border border-white/10 ${item.accent} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Subtle hover sheen */}
                  <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
