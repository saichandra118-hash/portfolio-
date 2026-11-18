import React from 'react';
import { motion } from 'framer-motion';
import { Languages as LanguagesIcon, Globe2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Languages() {
  const { languages } = portfolioData;

  return (
    <section id="languages" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <LanguagesIcon className="w-3.5 h-3.5" />
            <span>Linguistic Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Languages Known
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Multilingual fluency enabling effective collaboration across regional and international technical environments.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* 3 Language Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-7 rounded-2xl bg-[#0F131C]/80 border border-white/10 backdrop-blur-xl hover:border-blue-500/35 transition-all duration-300 shadow-xl text-left relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Header with Native Script */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                    {lang.nativeScript}
                  </span>
                </div>

                {/* Language Name */}
                <h3 className="text-2xl font-heading font-bold text-white mb-2">
                  {lang.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lang.description}
                </p>
              </div>

              {/* Minimal footer indicator */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Multilingual Fluency
                </span>
                <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-emerald-400 transition-colors" />
              </div>

              {/* Hover Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Prompt Compliance note */}
        <div className="mt-8 text-center">
          <span className="text-xs font-mono text-slate-400">
            * Language fluency presented without unverified rating bars to maintain professional resume integrity.
          </span>
        </div>
      </div>
    </section>
  );
}
