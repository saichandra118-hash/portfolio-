import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Brain,
  FileCheck2,
  ListFilter,
  CheckCircle2,
  Terminal,
  Database,
  Layers,
  Sparkles,
  Play,
  Copy,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onOpenAiDemo, onOpenProjectUrlModal }) {
  const { featuredProject } = portfolioData;
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyProjectLink = () => {
    navigator.clipboard.writeText(featuredProject.projectUrlPlaceholder);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Projects That I've Built
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Transforming Artificial Intelligence and Natural Language Processing into tangible software solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* Large Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-[#0F131C]/90 border border-white/10 overflow-hidden backdrop-blur-2xl shadow-2xl hover:border-blue-500/40 transition-all duration-300"
        >
          {/* Subtle Ambient Glow behind card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/15 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Left Column: Project Details & Features */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              
              {/* Badge */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-medium">
                  {featuredProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Specialized AI Architecture
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight">
                {featuredProject.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {featuredProject.overview}
              </p>

              {/* Technologies Badges */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-blue-500/25 text-blue-300 font-mono text-xs font-medium shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {tech.name}
                      <span className="text-[10px] text-slate-400">({tech.category})</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="w-full pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Key System Features:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                  {featuredProject.keyFeatures.map((feat, idx) => (
                    <div
                      key={feat.title}
                      className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-heading font-semibold text-white">
                            {feat.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08] w-full">
                {/* View Project Button (Modal with editable placeholder) */}
                <button
                  type="button"
                  onClick={onOpenProjectUrlModal}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                {/* Interactive Simulator Button */}
                <button
                  type="button"
                  onClick={onOpenAiDemo}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/40 font-heading font-semibold text-sm transition-all hover:-translate-y-0.5"
                >
                  <Play className="w-4 h-4 text-violet-400 fill-violet-400/30" />
                  <span>Try Interactive Demo</span>
                </button>

                {/* Copy Repo Placeholder URL */}
                <button
                  type="button"
                  onClick={handleCopyProjectLink}
                  className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white text-xs font-mono transition-colors"
                  title="Copy project placeholder URL"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied URL</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Repo URL</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-400">
                * Note: Project links use editable placeholders until your GitHub repository link is configured.
              </div>
            </div>

            {/* Right Column: AI-inspired Project Thumbnail & Architecture Preview */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl bg-[#0B0D12] border border-white/10 p-5 shadow-2xl relative overflow-hidden group">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono text-slate-300">Resume Screening Dashboard</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Model Ready
                  </span>
                </div>

                {/* Interactive Simulated Candidate Screening Pipeline Graphic */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Top: Job Description Match Metric */}
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-blue-500/20 text-left">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                      <span>Target Role: Machine Learning Engineer</span>
                      <span className="text-blue-400 font-bold">94.8% Match</span>
                    </div>
                    {/* Progress indicator */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full w-[94.8%]" />
                    </div>
                  </div>

                  {/* Candidate Rank 1 */}
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-left flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 font-bold text-[10px] flex items-center justify-center">
                        #1
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-white">Candidate_Resume_04.pdf</div>
                        <div className="text-[10px] text-slate-400">Extracted: Python, TensorFlow, SQL</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-400">Ranked Top</span>
                  </div>

                  {/* Candidate Rank 2 */}
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] text-left flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-slate-800 text-slate-400 font-bold text-[10px] flex items-center justify-center">
                        #2
                      </span>
                      <div>
                        <div className="text-xs font-medium text-slate-300">Candidate_Resume_12.pdf</div>
                        <div className="text-[10px] text-slate-400">Extracted: Python, Scikit-Learn</div>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400">88.2% Match</span>
                  </div>

                  {/* NLP Entity Extraction Box */}
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-white/[0.06] text-left">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-violet-400" />
                      <span>NLP Entity Parsing Output:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-1.5 py-0.5 rounded bg-blue-900/40 text-blue-300 text-[10px] border border-blue-500/30">
                        SKILL: Python
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-violet-900/40 text-violet-300 text-[10px] border border-violet-500/30">
                        SKILL: NLP
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-900/40 text-cyan-300 text-[10px] border border-cyan-500/30">
                        SKILL: SQL
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-900/40 text-emerald-300 text-[10px] border border-emerald-500/30">
                        SIMILARITY: Cosine Vector
                      </span>
                    </div>
                  </div>
                </div>

                {/* Click to launch interactive demo trigger */}
                <button
                  type="button"
                  onClick={onOpenAiDemo}
                  className="w-full mt-4 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600/30 to-violet-600/30 hover:from-blue-600/50 hover:to-violet-600/50 border border-blue-500/40 text-xs font-heading font-medium text-blue-200 flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-blue-300 text-blue-300" />
                  <span>Launch Live NLP Screener Simulator</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
