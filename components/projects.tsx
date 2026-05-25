"use client"
import { useState } from "react"
import Image from "next/image"
import { FadeIn, SectionLabel, TagPill } from "./ui"
import ProjectPanel from "./project-panel"
import { projects, type Project } from "@/lib/data"
import { cn } from "@/lib/utils"
import { meta } from "@/lib/data"

// Project index label (01, 02, etc.)
function ProjectIndex({ n }: { n: number }) {
  return (
    <span className="font-mono text-[11px] text-ink-3/50 w-8 flex-shrink-0 pt-0.5">
      {String(n).padStart(2, "0")}
    </span>
  )
}

// Featured project row
function FeaturedRow({
  p,
  index,
  onOpen,
}: {
  p: Project
  index: number
  onOpen: () => void
}) {
  return (
    <FadeIn delay={index * 0.05}>
      <article
        onClick={onOpen}
        id={`project-${p.id}`}
        className={cn(
          "group relative flex flex-col gap-5 py-7 border-b border-border cursor-pointer",
          "hover:bg-white/[0.018] transition-colors duration-200 -mx-4 px-4 rounded-sm"
        )}
      >
        {/* Top row — index + title + thumbnail */}
        <div className="flex items-start gap-4">
          <ProjectIndex n={index} />

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-[22px] md:text-[26px] text-ink leading-tight tracking-tight group-hover:text-accent transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="font-mono text-[10.5px] text-ink-3 mt-0.5 tracking-wide">
                  {p.subtitle}
                </p>
              </div>

              {/* Thumbnail — only for projects that have a listImage */}
              {p.listImage && (
                <div className="hidden sm:block flex-shrink-0 w-[90px] h-[58px] overflow-hidden rounded-sm border border-border bg-canvas-2 group-hover:border-border-hi transition-colors">
                  <Image
                    src={p.listImage}
                    alt={`${p.title} preview`}
                    width={180}
                    height={116}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle — summary + meta */}
        <div className="flex items-start gap-4 pl-12">
          <div className="flex-1">
            <p className="text-[14px] text-ink-2 leading-relaxed max-w-[560px]">
              {p.summary}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => <TagPill key={t} tag={t} sm />)}
              </div>

              {/* Period */}
              <span className="font-mono text-[10px] text-ink-3">{p.period}</span>

              {/* 2 key metrics */}
              <div className="flex gap-4 ml-2">
                {p.metrics.slice(0, 2).map(m => (
                  <div key={m.label} className="flex items-baseline gap-1.5">
                    <span className="font-mono text-[13px] text-ink font-medium">{m.value}</span>
                    <span className="font-mono text-[9.5px] text-ink-3">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA arrow */}
          <div className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center gap-1 text-[12px] font-medium text-accent">
            Case study
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </article>
    </FadeIn>
  )
}

// Secondary project row (lighter treatment)
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
          "hover:bg-white/[0.018] transition-colors duration-200 -mx-4 px-4 rounded-sm"
        )}
      >
        <ProjectIndex n={index} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-[17px] text-ink/80 leading-tight group-hover:text-ink transition-colors">
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

  // Priority order from spec
  const priorityOrder = [
    "moodtrack",
    "moodle-dashboard",
    "scoutai",
    "fakenews",
    "multimodal-mer",
  ]

  const sortedProjects = [...projects].sort((a, b) => {
    const ai = priorityOrder.indexOf(a.id)
    const bi = priorityOrder.indexOf(b.id)
    if (ai === -1 && bi === -1) return 0
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
  })

  const featured  = sortedProjects.filter(p => p.featured)
  const secondary = sortedProjects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 bg-canvas-2">
      <div className="max-w-content mx-auto px-6">
        <FadeIn className="mb-12">
          <SectionLabel>01 / Work</SectionLabel>
          <h2 className="font-display text-display-lg text-ink leading-tight tracking-tight mb-3">
            Selected work
          </h2>
          <p className="text-[15px] text-ink-2 max-w-[480px] leading-relaxed">
            Research that shipped. Products in active use. Click any row to open the full case study.
          </p>
        </FadeIn>

        {/* Featured projects */}
        <div className="border-t border-border mb-0">
          {featured.map((p, i) => (
            <FeaturedRow
              key={p.id}
              p={p}
              index={i + 1}
              onOpen={() => setActive(p)}
            />
          ))}
        </div>

        {/* Secondary projects */}
        {secondary.length > 0 && (
          <div className="mt-10">
            <FadeIn>
              <p className="font-mono text-[10px] text-ink-3 tracking-widest uppercase mb-4">
                Additional work
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
