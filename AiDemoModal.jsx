import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Brain,
  Sparkles,
  FileText,
  Play,
  RotateCcw,
  CheckCircle2,
  Terminal,
  Layers,
  ArrowRight
} from 'lucide-react';

const SAMPLE_ROLES = [
  {
    id: 'ai-engineer',
    title: 'AI & Machine Learning Engineer',
    keywords: ['Python', 'AI Fundamentals', 'Machine Learning', 'NLP', 'Problem Solving', 'SQL'],
    description: 'Looking for a developer with solid Python foundations, AI fundamentals, NLP experience, and structured database querying skills.'
  },
  {
    id: 'python-dev',
    title: 'Python Software Developer',
    keywords: ['Python', 'SQL', 'Problem Solving', 'HTML'],
    description: 'Seeking a software engineer proficient in Python development, database operations with SQL, web fundamentals with HTML, and algorithmic problem solving.'
  }
];

const SAMPLE_CANDIDATES = [
  {
    name: 'Adigoppula Saichandra',
    resumeSnippet: 'B.Tech CSE (AI & ML) student at Dr. M.G.R. University. Proficient in Python, SQL, HTML, AI fundamentals, NLP techniques, and systematic problem solving. Developed AI-Based Resume Screening System.',
    skills: ['Python', 'AI Fundamentals', 'NLP', 'SQL', 'HTML', 'Problem Solving'],
    baseScore: 96,
  },
  {
    name: 'Candidate Alex P.',
    resumeSnippet: 'Junior developer with experience in HTML, CSS, basic Python scripting, and introductory database concepts.',
    skills: ['Python', 'HTML', 'Basic SQL'],
    baseScore: 74,
  },
  {
    name: 'Candidate Jordan M.',
    resumeSnippet: 'Data analyst focused on SQL queries, business dashboards, and introductory Python statistical analysis.',
    skills: ['SQL', 'Python'],
    baseScore: 68,
  }
];

export default function AiDemoModal({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState(SAMPLE_ROLES[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [step, setStep] = useState(0);

  const runSimulation = () => {
    setIsRunning(true);
    setHasRun(false);
    setStep(1); // Parsing resumes

    setTimeout(() => {
      setStep(2); // Extracting skills
      setTimeout(() => {
        setStep(3); // Matching JD & Vector scoring
        setTimeout(() => {
          setIsRunning(false);
          setHasRun(true);
          setStep(4); // Ranked Output
        }, 600);
      }, 600);
    }, 600);
  };

  const resetSimulation = () => {
    setHasRun(false);
    setStep(0);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#0F131C] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0D12]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-violet-500/20 text-violet-400">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-base sm:text-lg flex items-center gap-2">
                  <span>AI-Based Resume Screening System</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                    Live Simulator
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Interactive simulation of Parsing, Skill Extraction, Matching &amp; Ranking
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Workspace */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#0B0D12]">
            
            {/* Step 1: Select Target Job Description */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  1. Target Job Description (JD)
                </span>
                <span className="text-xs text-slate-400 font-mono">Select role to match:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {SAMPLE_ROLES.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => {
                      setSelectedRole(role);
                      resetSimulation();
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedRole.id === role.id
                        ? 'bg-blue-600/15 border-blue-500 text-white shadow-md'
                        : 'bg-slate-900/40 border-white/[0.06] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-sm font-heading font-semibold text-white">{role.title}</div>
                    <div className="text-xs text-slate-400 mt-1 line-clamp-2">{role.description}</div>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/[0.06]">
                <span className="text-xs font-mono text-slate-400">Required Skills in JD:</span>
                {selectedRole.keywords.map((kw) => (
                  <span key={kw} className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-mono">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Run Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-transparent border border-blue-500/25">
              <div>
                <h4 className="text-sm font-heading font-semibold text-white">Execute Screening Algorithm</h4>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Pipeline: Resume Parsing &rarr; Skill Extraction &rarr; JD Similarity &rarr; Ranking Shortlist
                </p>
              </div>

              <div className="flex items-center gap-2">
                {hasRun && (
                  <button
                    type="button"
                    onClick={resetSimulation}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={runSimulation}
                  disabled={isRunning}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-heading font-semibold text-xs transition-all shadow-lg flex items-center gap-2 disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{isRunning ? 'Processing...' : 'Run AI Screening'}</span>
                </button>
              </div>
            </div>

            {/* Status Steps Indicator */}
            {isRunning && (
              <div className="p-4 rounded-xl bg-slate-900 border border-blue-500/30 font-mono text-xs text-slate-300 flex items-center gap-3 animate-pulse">
                <Brain className="w-5 h-5 text-blue-400 animate-spin" />
                <span>
                  {step === 1 && 'Step 1/4: Parsing unstructured PDF resumes...'}
                  {step === 2 && 'Step 2/4: Performing NLP tokenization and skill extraction...'}
                  {step === 3 && 'Step 3/4: Calculating vector cosine similarity with JD...'}
                </span>
              </div>
            )}

            {/* Candidate Results */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                {hasRun ? 'Ranked Shortlist Results (Sorted by AI Match Score):' : 'Candidate Pool Before Screening:'}
              </span>

              {SAMPLE_CANDIDATES.map((candidate, idx) => {
                const matchScore = selectedRole.id === 'ai-engineer' 
                  ? candidate.baseScore 
                  : (candidate.name.includes('Saichandra') ? 94 : candidate.baseScore);

                return (
                  <motion.div
                    key={candidate.name}
                    layout
                    className={`p-4 rounded-2xl border transition-all ${
                      hasRun && idx === 0
                        ? 'bg-blue-600/10 border-blue-500/50 shadow-lg'
                        : 'bg-slate-900/60 border-white/[0.08]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-heading font-bold text-xs ${
                          hasRun && idx === 0 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          #{idx + 1}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-heading font-semibold text-white text-sm">
                              {candidate.name}
                            </h5>
                            {hasRun && idx === 0 && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                                Top Recommended
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                            {candidate.resumeSnippet}
                          </p>
                        </div>
                      </div>

                      {/* Score Indicator */}
                      <div className="flex items-center gap-4 self-end sm:self-auto">
                        <div className="text-right">
                          <div className="text-xs font-mono text-slate-400">Match Score</div>
                          <div className={`text-base font-heading font-bold ${
                            hasRun ? 'text-blue-400' : 'text-slate-400'
                          }`}>
                            {hasRun ? `${matchScore}%` : 'Pending'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Extracted Skills */}
                    <div className="mt-3 pt-3 border-t border-white/[0.05] flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono text-slate-400 mr-1">Extracted Entities:</span>
                      {candidate.skills.map((s) => {
                        const isMatch = selectedRole.keywords.includes(s);
                        return (
                          <span
                            key={s}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              isMatch && hasRun
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-400 border border-white/[0.05]'
                            }`}
                          >
                            {s} {isMatch && hasRun && '✓'}
                          </span>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
