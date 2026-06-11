import { Navigation } from '@/components/navigation'
import { CursorGlow } from '@/components/cursor-glow'
import { StructuredData } from '@/components/structured-data'
import { Hero } from '@/components/hero'
import { ExpertiseStrip } from '@/components/expertise-strip'
import { ResearchDirectionsSection } from '@/components/research-directions-section'
import { ApproachSection } from '@/components/approach-section'
import { VerifiedSignalsSection } from '@/components/verified-signals-section'
import { SystemsPortfolioSection } from '@/components/systems-portfolio-section'
import { EvidenceIndexSection } from '@/components/evidence-index-section'
import { ExperienceTimeline } from '@/components/experience-timeline'
import { CapabilitiesSection } from '@/components/capabilities-section'
import { EducationCredentialsSection } from '@/components/education-credentials-section'
import { WritingSection } from '@/components/writing-section'
import { AboutSection } from '@/components/about-section'
import { TechnologyCloud } from '@/components/technology-cloud'
import { LabNotesSection } from '@/components/lab-notes-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <StructuredData />
      <a href="#main-content" className="sr-only z-[100] rounded-md bg-foreground px-4 py-2 text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <CursorGlow />
      <Navigation />
      <main id="main-content">
        <Hero />
        <ExpertiseStrip />
        <ResearchDirectionsSection />
        <ApproachSection />
        <VerifiedSignalsSection />
        <SystemsPortfolioSection />
        <EvidenceIndexSection />
        <ExperienceTimeline />
        <CapabilitiesSection />
        <EducationCredentialsSection />
        <WritingSection />
        <AboutSection />
        <TechnologyCloud />
        <LabNotesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
