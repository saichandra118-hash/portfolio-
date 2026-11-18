import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenSocialModal }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#090B0F] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-blue-600/30 border border-blue-500/30 flex items-center justify-center">
                <span className="font-heading font-bold text-blue-400 text-sm">S</span>
              </div>
              <span className="font-heading font-bold tracking-wider text-white text-lg">
                SAICHANDRA
              </span>
            </a>
            <p className="text-xs text-slate-400 font-mono mt-2 max-w-sm">
              Computer Science &amp; Engineering Student specializing in AI &amp; Machine Learning.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social and Scroll to Top */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenSocialModal}
              title="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenSocialModal}
              title="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/40 text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${personal.email}`}
              title="Email Saichandra"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              title="Scroll to Top"
              className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 text-blue-400 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Exact requested text & dynamic year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Designed &amp; Developed by{' '}
            <span className="text-white font-semibold">Adigoppula Saichandra</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Chennai, India</span>
            <span>•</span>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
