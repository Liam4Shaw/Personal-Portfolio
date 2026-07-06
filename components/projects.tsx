"use client"
import { useState } from "react"
import Image from "next/image"
import { FadeIn, SectionLabel, TagPill } from "./ui"
import ProjectPanel from "./project-panel"
import { projects, type Project } from "@/lib/data"
import { cn } from "@/lib/utils"

// ── Tier 1 — "Selected work" card grid ──────────────────────────────────────
// Two cards today; the grid holds up to four without any layout change once
// the Shopify and Wilander projects are ready to slot in.
function FeaturedCard({
  p,
  index,
  onOpen,
}: {
  p: Project
  index: number
  onOpen: () => void
}) {
  return (
    <FadeIn delay={index * 0.06}>
      <article
        onClick={onOpen}
        id={`project-${p.id}`}
        className="group cursor-pointer border border-border rounded-card bg-canvas-2 hover:border-border-hi transition-colors duration-200 overflow-hidden h-full flex flex-col"
      >
        {/* Thumbnail — grayscale by default, colour on hover; a placeholder for projects without one yet */}
        <div className="relative w-full aspect-[16/10] bg-canvas border-b border-border overflow-hidden">
          {p.listImage ? (
            <Image
              src={p.listImage}
              alt={`${p.title} preview`}
              fill
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 14 14" fill="none" className="text-ink-3/50">
                <rect x="1" y="1" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="4.5" cy="4.5" r="1" fill="currentColor" />
                <path d="M1 9.5L4.5 6.5L7 8.5L9.5 6L13 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col p-5 md:p-6">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3 className="font-display text-[20px] md:text-[22px] text-ink leading-tight tracking-tight group-hover:text-accent transition-colors">
              {p.title}
            </h3>
            <span className="font-mono text-[10px] text-ink-3 pt-1.5 flex-shrink-0">{p.period}</span>
          </div>

          <p className="font-mono text-[10.5px] text-ink-3 tracking-wide mb-3">{p.subtitle}</p>

          <p className="text-[13.5px] text-ink-2 leading-relaxed mb-4">{p.summary}</p>

          <div className="mt-auto pt-3">
            <div className="flex flex-wrap gap-1.5 mb-3.5">
              {p.tags.map(t => <TagPill key={t} tag={t} sm />)}
            </div>
            <div className="flex items-center gap-1 text-[12px] font-medium text-ink-2 group-hover:text-ink transition-colors">
              Case study
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  )
}

// ── Tier 2 — "Earlier work" secondary row (lighter treatment) ───────────────
function SecondaryRow({
  p,
  index,
  onOpen,
}: {
  p: Project
  index: number
  onOpen: () => void
}) {
  return (
    <FadeIn delay={index * 0.04}>
      <article
        onClick={onOpen}
        id={`project-${p.id}`}
        className={cn(
          "group flex items-start gap-4 py-5 border-b border-border cursor-pointer",
          "hover:bg-surface transition-colors duration-200 -mx-4 px-4 rounded-sm"
        )}
      >
        <span className="font-mono text-[11px] text-ink-3/50 w-8 flex-shrink-0 pt-0.5">
          {String(index).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-[17px] text-ink/80 leading-tight group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="font-mono text-[10px] text-ink-3 mt-0.5">{p.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 flex-shrink-0">
              {p.tags.slice(0, 2).map(t => <TagPill key={t} tag={t} sm />)}
            </div>
          </div>
          <p className="mt-2 text-[13px] text-ink-3 leading-relaxed max-w-[520px]">
            {p.summary}
          </p>
        </div>
      </article>
    </FadeIn>
  )
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  const featured  = projects.filter(p => p.featured)
  const secondary = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6">
        <FadeIn className="mb-12">
          <SectionLabel>02 / Selected work</SectionLabel>
          <h2 className="font-display text-display-lg text-ink leading-tight tracking-tight mb-3">
            Selected work
          </h2>
          <p className="text-[15px] text-ink-2 max-w-[520px] leading-relaxed">
            Things I&apos;ve built end-to-end — research systems, full-stack platforms, and
            delivered client tools. Click any card to open the full case study.
          </p>
        </FadeIn>

        {/* Tier 1 — featured card row (three-up on desktop) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featured.map((p, i) => (
            <FeaturedCard
              key={p.id}
              p={p}
              index={i}
              onOpen={() => setActive(p)}
            />
          ))}
        </div>

        {/* Tier 2 — earlier / research work */}
        {secondary.length > 0 && (
          <div className="mt-16 md:mt-20">
            <FadeIn>
              <p className="font-mono text-[10px] text-ink-3 tracking-widest uppercase mb-1.5">
                Earlier work
              </p>
              <p className="text-[13px] text-ink-3 mb-4">
                Additional academic and research projects.
              </p>
            </FadeIn>
            <div className="border-t border-border">
              {secondary.map((p, i) => (
                <SecondaryRow
                  key={p.id}
                  p={p}
                  index={featured.length + i + 1}
                  onOpen={() => setActive(p)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <ProjectPanel project={active} onClose={() => setActive(null)} />
    </section>
  )
}
