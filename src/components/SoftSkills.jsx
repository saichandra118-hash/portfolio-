import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Lightbulb,
  Users,
  Clock,
  Compass,
  Zap,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SoftSkills() {
  const { softSkills } = portfolioData;

  const iconMap = {
    MessageSquare: MessageSquare,
    Lightbulb: Lightbulb,
    Users: Users,
    Clock: Clock,
    Compass: Compass,
    Zap: Zap,
  };

  return (
    <section id="soft-skills" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interpersonal Strengths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Soft Skills &amp; Work Ethic
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Professional competencies that complement technical knowledge and drive efficient teamwork and continuous growth.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* 6 Professional Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Sparkles;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-6 rounded-2xl bg-[#0F131C]/80 border border-white/10 backdrop-blur-xl hover:border-violet-500/35 transition-all duration-300 shadow-xl group text-left relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} border border-white/10 ${skill.accent} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-semibold text-white mb-2">
                    {skill.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Professional Skill
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-violet-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
