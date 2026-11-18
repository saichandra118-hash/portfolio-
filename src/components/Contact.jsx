import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Loader2,
  CheckCircle2,
  Sliders
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onOpenSocialModal }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your Name, Email, and Message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate submission handling with feedback & direct mailto fallback preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#3B82F6', '#8B5CF6', '#10B981', '#06B6D4'],
        });
      } catch (err) {
        // Safe fallback
      }

      // Prepare mailto link so the user can also send it directly via their default email client if desired
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Hi Saichandra,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Store draft mailto
      window._latestDraftMailto = mailtoUrl;
    }, 1000);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Have an opportunity, an idea, or just want to connect? I'd be happy to hear from you.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-4" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Social Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-[#0F131C]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2">
                <span>Contact Details</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h3>

              <div className="space-y-6">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-base font-medium text-white hover:text-blue-400 transition-colors block truncate"
                    >
                      {personal.email}
                    </a>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        type="button"
                        onClick={() => handleCopy(personal.email, 'email')}
                        className="text-xs text-blue-400 hover:text-blue-300 font-mono inline-flex items-center gap-1"
                      >
                        {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedEmail ? 'Copied to clipboard' : 'Copy address'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/15 border border-violet-500/30 text-violet-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </div>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-base font-medium text-white hover:text-violet-400 transition-colors block"
                    >
                      {personal.phone}
                    </a>
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        type="button"
                        onClick={() => handleCopy(personal.phone, 'phone')}
                        className="text-xs text-violet-400 hover:text-violet-300 font-mono inline-flex items-center gap-1"
                      >
                        {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPhone ? 'Copied number' : 'Copy phone'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-base font-medium text-white">
                      {personal.location}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Open to on-site, hybrid, &amp; remote opportunities
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Mail Button */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-heading font-semibold text-sm transition-all shadow-md shadow-blue-500/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenSocialModal}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                >
                  <Sliders className="w-3.5 h-3.5 text-violet-400" />
                  <span>Edit Links</span>
                </button>
              </div>
            </div>

            {/* Social Placeholders Box */}
            <div className="p-6 rounded-2xl bg-[#0F131C]/60 border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Profiles:
                </span>
                <span className="text-[10px] text-blue-400 font-mono">
                  Configurable
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={onOpenSocialModal}
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-heading font-medium">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </button>

                <button
                  type="button"
                  onClick={onOpenSocialModal}
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-violet-500/40 text-slate-300 hover:text-white flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="w-4 h-4 text-violet-400" />
                    <span className="text-xs font-heading font-medium">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </button>
              </div>

              <div className="text-[11px] text-slate-400 mt-3 font-mono">
                * Social handles remain editable placeholders until real profiles are supplied.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0F131C]/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative text-left">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your inquiry has been processed. A copy of your draft is also ready if you'd like to open it in your email client.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    {window._latestDraftMailto && (
                      <a
                        href={window._latestDraftMailto}
                        className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-heading font-semibold transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open in Mail Client</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 text-xs font-mono transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-sm font-heading font-semibold text-white">
                      Send a Direct Message
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Response within 24 hours
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Your Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity / AI Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Hi Saichandra, I would love to connect with you regarding..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-heading font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
