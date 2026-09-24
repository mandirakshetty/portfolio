import { Navbar } from "@/components/portfolio/Navbar"
import { Hero } from "@/components/portfolio/Hero"
import { ExperienceSection } from "@/components/portfolio/ExperienceSection"
import { SkillsSection } from "@/components/portfolio/SkillsSection"
import { ProjectsSection } from "@/components/portfolio/ProjectsSection"
import { ResearchLeadership } from "@/components/portfolio/ResearchLeadership"
import { EducationCertifications } from "@/components/portfolio/EducationCertifications"
import { ContactSection } from "@/components/portfolio/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchLeadership />
        <EducationCertifications />
        <ContactSection />
      </main>
    </div>
  )
}
