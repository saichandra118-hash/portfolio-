import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  GraduationCap,
  Brain,
  Code2,
  FileCheck2,
  Languages,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, about, technicalSkills, featuredProject, education, softSkills, languages } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadSimulation = () => {
    // Generate clean text-formatted resume for instant download
    const resumeText = `=====================================================
ADIGOPPULA SAICHANDRA
Computer Science & Engineering Student | AI & ML Enthusiast
Email: ${personal.email} | Phone: ${personal.phone} | Location: ${personal.location}
=====================================================

PROFESSIONAL SUMMARY
${about.paragraphs.join('\n\n')}

ACADEMIC QUALIFICATIONS
Institution: ${education.institution}
Degree: ${education.degree}
Branch: ${education.branch}
Academic CGPA: ${education.cgpa}
Status: ${education.status}

TECHNICAL SKILLS
- Programming: Python
- Web Technologies: HTML
- Database: SQL
- Artificial Intelligence: AI Fundamentals
- Problem Solving: Algorithmic Reasoning & Systematic Debugging

FEATURED PROJECT
${featuredProject.title}
Overview: ${featuredProject.overview}
Technologies: ${featuredProject.technologies.map(t => t.name).join(', ')}
Key Features:
${featuredProject.keyFeatures.map(f => `- ${f.title}: ${f.description}`).join('\n')}

SOFT SKILLS
${softSkills.map(s => `- ${s.title}: ${s.description}`).join('\n')}

LANGUAGES
${languages.map(l => `- ${l.name} (${l.nativeScript})`).join('\n')}

=====================================================
Generated from Adigoppula Saichandra's Developer Portfolio
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Adigoppula_Saichandra_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F131C] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0D12]/90">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
              <h3 className="font-heading font-semibold text-white text-base sm:text-lg">
                Curriculum Vitae – Adigoppula Saichandra
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadSimulation}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-heading font-semibold transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1"
                aria-label="Close resume viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-left bg-[#0B0D12] text-slate-200">
            
            {/* Header info */}
            <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {personal.name}
                </h1>
                <p className="text-blue-400 font-medium text-sm sm:text-base mt-1">
                  {personal.role}
                </p>
                <p className="text-slate-400 text-xs font-mono mt-1">
                  {personal.university}
                </p>
              </div>

              <div className="text-xs font-mono space-y-1 text-slate-400 md:text-right">
                <div className="flex items-center md:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center md:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-violet-400" />
                  <span>+91 {personal.phone}</span>
                </div>
                <div className="flex items-center md:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2 border-b border-blue-500/20 pb-1">
                Profile Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {about.paragraphs[0]}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mt-2">
                {about.paragraphs[1]}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3 border-b border-blue-500/20 pb-1">
                Education
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading font-semibold text-white text-base">
                    {education.institution}
                  </h3>
                  <p className="text-xs text-blue-300">
                    {education.degree} — {education.branch}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {education.location}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-3 py-1 rounded-lg bg-blue-500/15 text-blue-400 border border-blue-500/30 font-heading font-bold text-sm">
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3 border-b border-blue-500/20 pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {technicalSkills.map((cat) => (
                  <div key={cat.category} className="p-3 rounded-xl bg-slate-900/40 border border-white/[0.06]">
                    <div className="text-xs font-mono text-blue-400 font-semibold">{cat.category}</div>
                    <div className="text-sm font-medium text-white mt-1">
                      {cat.items.map((i) => i.name).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Project */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-3 border-b border-blue-500/20 pb-1">
                Academic &amp; Software Projects
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-base font-heading font-bold text-white">
                    {featuredProject.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-blue-300">
                    {featuredProject.technologies.map(t => t.name).join(' • ')}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {featuredProject.overview}
                </p>

                <div className="pt-2 border-t border-white/[0.06]">
                  <div className="text-xs font-mono text-slate-400 mb-1.5">Key Implementation Modules:</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {featuredProject.keyFeatures.map(feat => (
                      <span key={feat.title} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                        ✓ {feat.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2 border-b border-blue-500/20 pb-1">
                  Soft Skills
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {softSkills.map(s => (
                    <span key={s.title} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300">
                      {s.title}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2 border-b border-blue-500/20 pb-1">
                  Languages Known
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {languages.map(l => (
                    <span key={l.name} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300">
                      {l.name} ({l.nativeScript})
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
