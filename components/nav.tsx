"use client"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { meta } from "@/lib/data"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "About",      href: "#about" },
  { label: "Contact",    href: "#contact" },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobile]   = useState(false)
  const [active, setActive]       = useState("hero")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  // Intersection observer for active section (includes hero so we know when we're at the top)
  useEffect(() => {
    const ids = ["hero", ...links.map(l => l.href.slice(1))]
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: "-40% 0px -55% 0px" }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-[58px] transition-all duration-300",
          scrolled
            ? "border-b border-border bg-canvas/92 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="max-w-content mx-auto px-6 h-full flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className={cn(
              "font-display text-[17px] transition-colors leading-none",
              active === "hero" ? "text-accent" : "text-ink hover:text-ink/80"
            )}
            aria-label="Liam Shaw — home"
          >
            Liam Shaw
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "font-mono text-[11.5px] tracking-wide uppercase transition-colors relative",
                  active === l.href.slice(1)
                    ? "text-accent font-medium"
                    : "text-ink-3 hover:text-ink-2"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={meta.resumeUrl}
              download
              className="font-mono text-[11px] tracking-wide uppercase text-ink-3 hover:text-ink transition-colors flex items-center gap-1"
              aria-label="Download resume"
            >
              Resume
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-50">
                <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3M8.5 1.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
            <ThemeToggle />
            <a
              href="#contact"
              className="font-sans text-[12.5px] font-medium text-canvas bg-ink hover:bg-ink/90 px-3.5 py-1.5 rounded-sm transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] text-ink-2 hover:text-ink transition-colors"
            onClick={() => setMobile(v => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={cn(
              "block w-5 h-px bg-current transition-transform duration-200 origin-center",
              mobileOpen && "rotate-45 translate-y-[6px]"
            )} />
            <span className={cn(
              "block w-5 h-px bg-current transition-opacity duration-200",
              mobileOpen && "opacity-0"
            )} />
            <span className={cn(
              "block w-5 h-px bg-current transition-transform duration-200 origin-center",
              mobileOpen && "-rotate-45 -translate-y-[6px]"
            )} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-canvas" onClick={() => setMobile(false)} />
        <div
          className={cn(
            "absolute top-[58px] inset-x-0 bottom-0 flex flex-col transition-transform duration-300",
            mobileOpen ? "translate-y-0" : "-translate-y-2"
          )}
        >
          <nav className="flex flex-col px-6 pt-8 gap-1" aria-label="Mobile navigation">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobile(false)}
                className="font-display text-[26px] text-ink/80 hover:text-ink py-3 border-b border-border last:border-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 px-6 pt-8">
            <a
              href="#contact"
              onClick={() => setMobile(false)}
              className="w-full flex items-center justify-center text-[14px] font-medium text-canvas bg-ink rounded-sm py-3"
            >
              Get in touch
            </a>
            <a
              href={meta.resumeUrl}
              download
              onClick={() => setMobile(false)}
              className="w-full flex items-center justify-center text-[14px] font-medium text-ink-2 border border-border rounded-sm py-3"
            >
              Resume ↗
            </a>
            <div className="flex items-center justify-center pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
