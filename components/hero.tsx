"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { meta } from "@/lib/data"

const f = (delay = 0) => ({
  initial:    { opacity: 0, y: 16 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
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
            {/* Status indicator */}
            <motion.div {...f(0.05)} className="mb-8 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              <span className="font-mono text-[11px] text-ink-3 tracking-wide">
                Available · May 2026
              </span>
            </motion.div>

            {/* Name */}
            <motion.div {...f(0.1)} className="mb-6">
              <h1 className="font-display text-display-xl text-ink leading-none tracking-tightest mb-2">
                Liam Shaw
              </h1>
              <p className="font-mono text-[12px] text-ink-3 tracking-widest uppercase">
                Applied AI · Analytics · Software
              </p>
            </motion.div>

            {/* Core proposition — specific, grounded */}
            <motion.div {...f(0.2)} className="mb-10">
              <p className="text-[19px] md:text-[21px] text-ink/80 leading-relaxed font-light tracking-tight max-w-[520px]">
                I build systems that help people{" "}
                <span className="text-ink font-normal italic font-display">make better decisions.</span>
              </p>
              <p className="mt-4 text-[15px] text-ink-2 leading-relaxed max-w-[500px]">
                Audio-to-emotion models, AI scouting platforms, engagement
                analytics for universities — the common thread is turning
                messy data into something a person can act on.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div {...f(0.32)} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                id="hero-cta-work"
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-canvas bg-accent hover:bg-accent-dim px-5 py-2.5 rounded-sm transition-colors"
              >
                View work
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-github"
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-2 hover:text-ink border border-border hover:border-border-hi px-5 py-2.5 rounded-sm transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href={meta.resumeUrl}
                download
                id="hero-cta-resume"
                className="inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-2 hover:text-ink border border-border hover:border-border-hi px-5 py-2.5 rounded-sm transition-all"
              >
                Resume ↗
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
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
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
