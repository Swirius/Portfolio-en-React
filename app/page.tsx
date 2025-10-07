import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackgroundEffects from "@/components/background-effects"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <BackgroundEffects />
      <ThemeToggle />
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Skills />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Experience />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Contact />
      </ScrollReveal>
      <Footer />
    </main>
  )
}
