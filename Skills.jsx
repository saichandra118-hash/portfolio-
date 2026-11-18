import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Code2,
  Database,
  Brain,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { technicalSkills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const iconMap = {
    Terminal: Terminal,
    Code2: Code2,
    Database: Database,
    Brain: Brain,
    Sparkles: Sparkles,
  };

  const categories = ['All', ...technicalSkills.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? technicalSkills
      : technicalSkills.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            My Technical Skills
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Curated toolkit focused on Artificial Intelligence, algorithmic problem solving, structured data, and software fundamentals.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                  : 'bg-slate-900/60 text-slate-400 border-white/[0.08] hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Skill Cards organized strictly by requested categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, groupIdx) => {
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                className="relative rounded-2xl bg-[#0F131C]/80 border border-white/10 p-6 backdrop-blur-xl hover:border-blue-500/35 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                {/* Top: Category Label */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
                      {group.category}
                    </span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-800 border border-white/10 text-slate-400 font-mono">
                      Verified Skill
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills under this category */}
                  <div className="space-y-4">
                    {group.items.map((skill) => {
                      const IconComponent = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-white/15 transition-colors"
                        >
                          <div className="flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 border border-blue-500/25 text-blue-400 group-hover:scale-105 transition-transform">
                              <IconComponent className="w-5 h-5" />
                            </div>

                            <div className="flex-1 text-left">
                              <div className="flex items-center justify-between">
                                <h3 className="text-base font-heading font-semibold text-white">
                                  {skill.name}
                                </h3>
                                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono">
                                  {skill.tag}
                                </span>
                              </div>
                              <p className="text-xs text-slate-400 mt-1 leading-normal">
                                {skill.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer info */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Core Technical Competency
                  </span>
                </div>

                {/* Subtle hover glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-tr-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Note on integrity */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-2">
            <span>⚡ Strict technical alignment: skills reflect verified resume proficiencies without arbitrary percentage claims.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
