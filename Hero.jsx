import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  ArrowRight,
  Mail,
  Sparkles,
  Terminal,
  Cpu,
  Brain,
  Database,
  ExternalLink,
  ChevronDown,
  Info
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenResume, onOpenSocialModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saichandra118@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability / Specialization pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/25 backdrop-blur-md mb-6 shadow-sm shadow-blue-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-slate-300">
                Specializing in AI & Machine Learning
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
                Saichandra
              </span>
              <span className="inline-block animate-wave origin-bottom-right ml-2 text-blue-400">.</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-heading font-semibold text-blue-200/90 mb-5 max-w-2xl leading-snug">
              Computer Science &amp; Engineering Student | AI &amp; ML Enthusiast
            </h2>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Passionate about technology, artificial intelligence, and building meaningful software solutions.
              I enjoy exploring new technologies, solving problems, and transforming ideas into practical applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-9 w-full sm:w-auto">
              {/* Primary button: Explore My Work */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary button: Download Resume */}
              <button
                type="button"
                onClick={onOpenResume}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:text-white hover:-translate-y-0.5 backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons & Contact Links with Editable Placeholders */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-white/[0.08] w-full max-w-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect Directly:
              </span>
              
              <div className="flex items-center gap-2.5">
                {/* GitHub (Placeholder with editor modal trigger) */}
                <button
                  type="button"
                  onClick={onOpenSocialModal}
                  title="GitHub Profile (Editable placeholder - click to set your URL)"
                  className="group relative p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-blue-500/40 hover:bg-slate-800/80 text-slate-300 hover:text-white transition-all shadow-sm"
                  aria-label="GitHub Profile Placeholder"
                >
                  <GithubIcon className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-[10px] text-slate-300 px-2 py-0.5 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    GitHub Profile
                  </span>
                </button>

                {/* LinkedIn (Placeholder with editor modal trigger) */}
                <button
                  type="button"
                  onClick={onOpenSocialModal}
                  title="LinkedIn Profile (Editable placeholder - click to set your URL)"
                  className="group relative p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-violet-500/40 hover:bg-slate-800/80 text-slate-300 hover:text-white transition-all shadow-sm"
                  aria-label="LinkedIn Profile Placeholder"
                >
                  <LinkedinIcon className="w-5 h-5 group-hover:text-violet-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-[10px] text-slate-300 px-2 py-0.5 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    LinkedIn Profile
                  </span>
                </button>

                {/* Email Direct Link */}
                <a
                  href="mailto:saichandra118@gmail.com"
                  title="Email Saichandra"
                  className="group relative p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 hover:bg-slate-800/80 text-slate-300 hover:text-white transition-all shadow-sm"
                  aria-label="Send Email to saichandra118@gmail.com"
                >
                  <Mail className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-[10px] text-slate-300 px-2 py-0.5 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    saichandra118@gmail.com
                  </span>
                </a>

                {/* Copy Email quick badge */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.06] font-mono transition-colors"
                >
                  {copiedEmail ? '✓ Copied Email' : 'Copy Email'}
                </button>
              </div>

              {/* Editable note helper */}
              <button
                type="button"
                onClick={onOpenSocialModal}
                className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-blue-400 transition-colors ml-auto"
              >
                <Info className="w-3 h-3" />
                <span>Configure profile links</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Abstract 3D AI-inspired developer visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-violet-600/20 to-cyan-500/10 rounded-3xl blur-2xl transform scale-90" />

            {/* Main Interactive AI Matrix Card */}
            <div className="relative w-full max-w-md rounded-2xl bg-[#0F131C]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden p-5 sm:p-6">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    saichandra_ai_engine.py
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  Python 3.12
                </span>
              </div>

              {/* Code Snippet Preview */}
              <div className="font-mono text-xs sm:text-sm space-y-2 text-left bg-[#0B0D12]/70 p-4 rounded-xl border border-white/[0.05] mb-5">
                <div className="text-slate-400">
                  <span className="text-violet-400">import</span> tensorflow <span className="text-violet-400">as</span> tf
                </div>
                <div className="text-slate-400">
                  <span className="text-violet-400">from</span> nlp_pipeline <span className="text-violet-400">import</span> ResumeParser
                </div>
                <div className="pt-1 text-slate-300">
                  <span className="text-blue-400">class</span> <span className="text-emerald-400">CandidateEngine</span>:
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-blue-400">def</span> <span className="text-yellow-300">__init__</span>(self):
                </div>
                <div className="pl-8 text-slate-400">
                  self.specialization = <span className="text-emerald-300">"AI &amp; ML"</span>
                </div>
                <div className="pl-8 text-slate-400">
                  self.cgpa = <span className="text-cyan-300">8.5</span>
                </div>
                <div className="pl-8 text-slate-400">
                  self.status = <span className="text-blue-300">"Building Innovative Solutions"</span>
                </div>
              </div>

              {/* Central Glowing AI Neural Core Visual */}
              <div className="relative py-4 flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Outer pulsating ring */}
                  <div className="w-24 h-24 rounded-full border border-blue-500/30 animate-spin-slow flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#3B82F6]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-violet-400 absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#8B5CF6]" />
                  </div>

                  {/* Inner glowing pulse */}
                  <div className="absolute w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600/40 via-violet-600/40 to-cyan-500/40 blur-md animate-pulse" />

                  {/* Center Brain Icon */}
                  <div className="absolute w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-400/40 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Brain className="w-7 h-7 text-blue-400 animate-pulse" />
                  </div>
                </div>

                {/* Subtext under AI Core */}
                <div className="mt-3 text-center">
                  <span className="text-xs font-mono font-medium text-slate-300">
                    Neural Rank &amp; Screening Active
                  </span>
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Real-time NLP Parsing</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badges */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/[0.08]">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06] flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-500/15 text-blue-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Academic Track</div>
                    <div className="text-xs font-semibold text-slate-200">CSE (AI &amp; ML)</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06] flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-violet-500/15 text-violet-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 uppercase font-mono">Performance</div>
                    <div className="text-xs font-semibold text-slate-200">8.5 / 10 CGPA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Micro Badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0F131C]/90 border border-blue-500/30 backdrop-blur-md shadow-xl text-xs font-medium text-blue-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>AI &amp; ML Specialist</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0F131C]/90 border border-violet-500/30 backdrop-blur-md shadow-xl text-xs font-medium text-violet-300"
            >
              <Terminal className="w-3.5 h-3.5 text-violet-400" />
              <span>Python &amp; SQL</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Downward Scroll Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          className="flex flex-col items-center text-slate-400 hover:text-blue-400 transition-colors text-xs font-mono"
        >
          <span>Scroll down</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-0.5" />
        </a>
      </div>
    </section>
  );
}
