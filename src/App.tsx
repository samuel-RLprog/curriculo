import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceIndicators } from './components/ExperienceIndicators';
import { CoreConcept } from './components/CoreConcept';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CriticalEnvironments } from './components/CriticalEnvironments';
import { ObservabilityDashboard } from './components/ObservabilityDashboard';
import { OperationalReliability } from './components/OperationalReliability';
import { TechStack } from './components/TechStack';
import { AutomationAI } from './components/AutomationAI';
import { SecuritySection } from './components/SecuritySection';
import { VideoSection } from './components/VideoSection';
import { EducationCertifications } from './components/EducationCertifications';
import { Achievements } from './components/Achievements';
import { ProfessionalProfile } from './components/ProfessionalProfile';
import { ProjectsGitHub } from './components/ProjectsGitHub';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CurriculumModal } from './components/CurriculumModal';

export default function App() {
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-blue-600 selection:text-white relative">
      {/* Top Navigation */}
      <Navbar onOpenCurriculum={() => setIsCurriculumOpen(true)} />

      {/* Main Content Layout */}
      <main>
        {/* 1. Impactful Hero Section */}
        <Hero onOpenCurriculum={() => setIsCurriculumOpen(true)} />

        {/* 2. Key Experience Indicators Strip */}
        <ExperienceIndicators />

        {/* 3. Operational Concept & 6-Step Pipeline */}
        <CoreConcept />

        {/* 4. About Samuel with Secondary Photo */}
        <AboutSection />

        {/* 5. Main Experience Timeline (Sonda, Oi, GlobalWeb, Politec) */}
        <ExperienceTimeline />

        {/* 6. Critical Environments & Panoramic Data Center */}
        <CriticalEnvironments />

        {/* 7. Observability & NOC Dashboard Visual */}
        <ObservabilityDashboard />

        {/* 8. Operational Reliability: Availability, Integrity, Security */}
        <OperationalReliability />

        {/* 9. Tech Stack Categorized */}
        <TechStack />

        {/* 10. Automation & Generative AI Formula */}
        <AutomationAI />

        {/* 11. Information Security & CIA Triad */}
        <SecuritySection />

        {/* 12. Samuel in Video (Embedded YouTube Player) */}
        <VideoSection />

        {/* 13. Education, Official Certifications & Language */}
        <EducationCertifications />

        {/* 14. Key Operational Achievements */}
        <Achievements />

        {/* 15. Professional Profile Pillars */}
        <ProfessionalProfile />

        {/* 16. Projects & GitHub Integration */}
        <ProjectsGitHub />

        {/* 17. Contact & Professional Channels */}
        <ContactSection onOpenCurriculum={() => setIsCurriculumOpen(true)} />
      </main>

      {/* Fixed WhatsApp Floating Quick Button */}
      <WhatsAppButton />

      {/* Executive Printable Curriculum Modal */}
      <CurriculumModal
        isOpen={isCurriculumOpen}
        onClose={() => setIsCurriculumOpen(false)}
      />
    </div>
  );
}
