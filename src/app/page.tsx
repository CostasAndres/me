import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Documentation } from "@/components/documentation"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Documentation />
        <Contact />
      </div>
    </main>
  )
}
