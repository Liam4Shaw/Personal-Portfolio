import Nav from "@/components/nav"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </main>
  )
}

