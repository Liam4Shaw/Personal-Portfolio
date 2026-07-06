import Nav from "@/components/nav"
import Hero from "@/components/hero"
import CurrentlyStrip from "@/components/currently-strip"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <CurrentlyStrip />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}

