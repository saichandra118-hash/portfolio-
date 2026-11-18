import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Save, Check, Info, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function SocialLinksModal({ isOpen, onClose }) {
  const { socialPlaceholders } = portfolioData;

  const [githubUrl, setGithubUrl] = useState(() => {
    return localStorage.getItem('saichandra_github') || socialPlaceholders.github.placeholder;
  });

  const [linkedinUrl, setLinkedinUrl] = useState(() => {
    return localStorage.getItem('saichandra_linkedin') || socialPlaceholders.linkedin.placeholder;
  });

  const [saved, setSaved] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

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

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('saichandra_github', githubUrl);
    localStorage.setItem('saichandra_linkedin', linkedinUrl);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCopy = (val, type) => {
    navigator.clipboard.writeText(val);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-[#0F131C] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 text-left overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-500/15 text-blue-400">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg">
                  Configure Social Profiles
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Maintain editable placeholders or paste live links
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

          {/* Prompt Guideline Callout */}
          <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-200 text-xs mb-6 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Per portfolio design guidelines, social media URLs are kept as editable placeholders so no fake handles are invented. You can test your actual handles here.
            </p>
          </div>

          <form onSubmit={handleSave} className="space-y-5">
            {/* GitHub URL */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-mono uppercase text-slate-300 flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>GitHub Profile Link</span>
                </label>
                <button
                  type="button"
                  onClick={() => handleCopy(githubUrl, 'github')}
                  className="text-[11px] font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  {copiedType === 'github' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedType === 'github' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="relative">
                <input
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/saichandra"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* LinkedIn URL */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-mono uppercase text-slate-300 flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-violet-400" />
                  <span>LinkedIn Profile Link</span>
                </label>
                <button
                  type="button"
                  onClick={() => handleCopy(linkedinUrl, 'linkedin')}
                  className="text-[11px] font-mono text-violet-400 hover:text-violet-300 flex items-center gap-1"
                >
                  {copiedType === 'linkedin' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedType === 'linkedin' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="relative">
                <input
                  type="url"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://linkedin.com/in/saichandra"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-violet-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-heading font-semibold transition-all shadow-md"
              >
                {saved ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Save className="w-3.5 h-3.5" />}
                <span>{saved ? 'Saved Successfully!' : 'Save & Update'}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
