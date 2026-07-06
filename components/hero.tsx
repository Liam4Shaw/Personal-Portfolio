"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "./theme-provider"
import { cn } from "@/lib/utils"

const f = (delay = 0) => ({
  initial:    { opacity: 0, y: 16 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[58px] overflow-hidden"
    >
      {/* Very subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="max-w-content mx-auto px-6 w-full py-24 md:py-32">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">

          {/* Left — copy stack */}
          <div className="max-w-[640px]">
            {/* Name kicker */}
            <motion.div {...f(0.05)} className="mb-6">
              <span className="font-mono text-[11px] text-ink-3 tracking-widest uppercase">
                Liam Shaw
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div {...f(0.1)} className="mb-7">
              <h1 className="font-display text-display-lg text-ink leading-tight tracking-tight max-w-[600px]">
                I build systems that turn messy data into clear decisions —
                and ideas into shipped software.
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div {...f(0.2)} className="mb-10">
              <p className="text-[15.5px] text-ink-2 leading-relaxed max-w-[520px]">
                I help businesses automate the busywork, make sense of their
                data, and stand up the tools they actually need — from
                reporting pipelines and dashboards to full web applications.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div {...f(0.32)} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                id="hero-cta-work"
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-on-accent bg-accent hover:bg-accent-dim px-5 py-2.5 rounded-sm transition-colors"
              >
                See my work
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                id="hero-cta-contact"
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-2 hover:text-ink border border-border hover:border-border-hi px-5 py-2.5 rounded-sm transition-all"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right — headshot */}
          <motion.div
            {...f(0.15)}
            className="hidden md:block flex-shrink-0"
          >
            <div className="relative">
              {/* Frame */}
              <div className="w-[240px] h-[293px] relative overflow-hidden rounded-sm border border-border/50">
                <Image
                  src="/headshot.png"
                  alt="Liam Shaw"
                  fill
                  className={cn(
                    "object-cover object-top transition-all duration-700",
                    theme === "dark" ? "grayscale hover:grayscale-0" : "grayscale-0 hover:grayscale"
                  )}
                  sizes="240px"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom — scroll indicator */}
        <motion.div
          {...f(0.48)}
          className="mt-20 md:mt-28 flex items-center gap-3"
        >
          <div className="flex flex-col gap-1">
            <div className="w-px h-8 bg-border mx-auto" />
          </div>
          <span className="font-mono text-[10px] text-ink-3 tracking-widest uppercase">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  )
}
