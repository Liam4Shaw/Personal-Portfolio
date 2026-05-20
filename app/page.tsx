import Nav from "@/components/nav"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import EducationSection from "@/components/education"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <EducationSection />
      <Contact />
    </main>
  )
}
