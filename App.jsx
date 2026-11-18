import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import ScrollProgress from './components/ScrollProgress';
import ResumeModal from './components/ResumeModal';
import SocialLinksModal from './components/SocialLinksModal';
import AiDemoModal from './components/AiDemoModal';
import ProjectUrlModal from './components/ProjectUrlModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);
  const [isAiDemoModalOpen, setIsAiDemoModalOpen] = useState(false);
  const [isProjectUrlModalOpen, setIsProjectUrlModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B0D12] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      {/* Scroll Reading Progress Bar */}
      <ScrollProgress />

      {/* Dynamic Animated Ambient Background & Interactive Neural Canvas */}
      <BackgroundEffects />

      {/* Sticky Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenSocialModal={() => setIsSocialModalOpen(true)}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Featured Projects Section */}
        <Projects
          onOpenAiDemo={() => setIsAiDemoModalOpen(true)}
          onOpenProjectUrlModal={() => setIsProjectUrlModalOpen(true)}
        />

        {/* 5. Education Section (Modern Vertical Timeline) */}
        <Education />

        {/* 6. Soft Skills Section */}
        <SoftSkills />

        {/* 7. Languages Known Section */}
        <Languages />

        {/* 8. Contact Section */}
        <Contact
          onOpenSocialModal={() => setIsSocialModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenSocialModal={() => setIsSocialModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <SocialLinksModal
        isOpen={isSocialModalOpen}
        onClose={() => setIsSocialModalOpen(false)}
      />

      <AiDemoModal
        isOpen={isAiDemoModalOpen}
        onClose={() => setIsAiDemoModalOpen(false)}
      />

      <ProjectUrlModal
        isOpen={isProjectUrlModalOpen}
        onClose={() => setIsProjectUrlModalOpen(false)}
      />
    </div>
  );
}
