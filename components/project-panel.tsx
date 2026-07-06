"use client"
import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TagPill } from "./ui"
import { Screenshot, ScreenshotPlaceholder } from "./screenshot"
import type { Project } from "@/lib/data"
import { cn } from "@/lib/utils"

const caseSections = [
  { key: "problem",      label: "Problem",                  num: "01" },
  { key: "approach",     label: "Approach",                 num: "02" },
  { key: "architecture", label: "Architecture",             num: "03" },
  { key: "results",      label: "Results",                  num: "04" },
  { key: "challenges",   label: "Challenges",               num: "05" },
  { key: "differently",  label: "What I'd do differently",  num: "06" },
  { key: "insight",      label: "Key insight",              num: "07" },
] as const

type SectionKey = typeof caseSections[number]["key"]

function getScreenshotsForSection(project: Project, placement: string) {
  return project.screenshots?.images.filter(img => img.placement === placement) ?? []
}

function CaseSection({
  sectionKey,
  label,
  num,
  content,
  project,
}: {
  sectionKey: SectionKey
  label: string
  num: string
  content: string
  project: Project
}) {
  const shots = getScreenshotsForSection(project, sectionKey)

  return (
    <div className="py-7 border-b border-border last:border-0">
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-mono text-[10px] text-ink-3/40 w-6 flex-shrink-0">{num}</span>
        <h3 className="font-mono text-[10.5px] text-ink-3 tracking-widest uppercase">{label}</h3>
      </div>
      <div className="pl-9">
        <p className="text-[14.5px] md:text-[15px] text-ink-2 leading-loose">{content}</p>
        {shots.map(shot => (
          <Screenshot
            key={shot.src}
            src={shot.src}
            alt={shot.caption}
            caption={shot.caption}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProjectPanel({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const [activeSection, setActiveSection] = useState<string>("problem")

  // Lock body scroll
  useEffect(() => {
    const cls = "panel-open"
    project ? document.body.classList.add(cls) : document.body.classList.remove(cls)
    return () => document.body.classList.remove(cls)
  }, [project])

  // Escape key
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", fn)
    return () => document.removeEventListener("keydown", fn)
  }, [onClose])

  // Reset scroll section on project change
  useEffect(() => {
    if (project) setActiveSection("problem")
  }, [project])

  const scrollToSection = useCallback((key: string) => {
    const el = document.getElementById(`cs-section-${key}`)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    setActiveSection(key)
  }, [])

  const headerShots = project?.screenshots?.images.filter(img => img.placement === "header") ?? []

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-canvas/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 w-full max-w-[860px] bg-canvas-2 border-l border-border flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
            aria-label={`Case study: ${project.title}`}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 md:px-8 py-4 md:py-5 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-ink-3 tracking-widest uppercase">
                  Case study
                </span>
                <span className="font-mono text-[10px] text-ink-3/40">·</span>
                <span className="font-mono text-[10px] text-ink-3">{project.period}</span>
              </div>
              <button
                onClick={onClose}
                className="group flex items-center gap-2 font-mono text-[10.5px] text-ink-3 hover:text-ink transition-colors"
                aria-label="Close case study"
              >
                Close
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-sm border border-border group-hover:border-border-hi transition-colors text-[9px]">
                  esc
                </span>
              </button>
            </div>

            {/* Mobile horizontal section strip */}
            {!project.caseStudyPending && (
              <div className="lg:hidden flex-shrink-0 border-b border-border overflow-x-auto">
                <nav className="flex px-5 gap-1 py-2" aria-label="Case study sections mobile">
                  {caseSections.map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => scrollToSection(key)}
                      className={cn(
                        "flex-shrink-0 font-mono text-[10px] px-3 py-1.5 rounded-sm transition-colors whitespace-nowrap",
                        activeSection === key
                          ? "text-ink bg-surface-2 border border-border-hi"
                          : "text-ink-3 hover:text-ink-2 border border-transparent"
                      )}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Two-column body */}
            <div className="flex flex-1 min-h-0 overflow-hidden">

              {/* Left sidebar — sticky */}
              <div className="hidden lg:flex flex-col w-[260px] flex-shrink-0 border-r border-border overflow-y-auto p-7">
                {/* Title block */}
                <div className="mb-6">
                  <h2 className="font-display text-[22px] text-ink leading-tight tracking-tight mb-1">
                    {project.title}
                  </h2>
                  <p className="font-mono text-[10px] text-ink-3 leading-snug">{project.subtitle}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map(t => <TagPill key={t} tag={t} sm />)}
                </div>

                {/* Role */}
                <div className="mb-5">
                  <p className="font-mono text-[9px] text-ink-3/60 tracking-widest uppercase mb-1">Role</p>
                  <p className="text-[12.5px] text-ink-2 leading-snug">{project.role}</p>
                </div>

                {/* Links */}
                <div className="flex gap-2 mb-7">
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-ink-3 hover:text-ink border border-border hover:border-border-hi px-2.5 py-1.5 rounded-sm transition-all">
                      GitHub ↗
                    </a>
                  )}
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-ink-3 hover:text-ink border border-border hover:border-border-hi px-2.5 py-1.5 rounded-sm transition-all">
                      Live ↗
                    </a>
                  )}
                </div>

                {/* Metrics */}
                <div className="mb-6">
                  <p className="font-mono text-[9px] text-ink-3/60 tracking-widest uppercase mb-3">Key metrics</p>
                  <div className="grid grid-cols-2 gap-2">
                    {project.metrics.map(m => (
                      <div key={m.label} className="bg-canvas border border-border rounded-sm p-2.5">
                        <div className="font-mono text-[14px] text-ink font-medium leading-none mb-1">{m.value}</div>
                        <div className="font-mono text-[8.5px] text-ink-3 leading-snug">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div className="mb-7">
                  <p className="font-mono text-[9px] text-ink-3/60 tracking-widest uppercase mb-2">Stack</p>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map(s => (
                      <span key={s} className="font-mono text-[10px] text-ink-3 border border-border bg-canvas px-1.5 py-0.5 rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Section nav */}
                {!project.caseStudyPending && (
                  <div>
                    <p className="font-mono text-[9px] text-ink-3/60 tracking-widest uppercase mb-3">Jump to</p>
                    <nav className="flex flex-col gap-0.5" aria-label="Case study sections">
                      {caseSections.map(({ key, label, num }) => (
                        <button
                          key={key}
                          onClick={() => scrollToSection(key)}
                          className={cn(
                            "flex items-center gap-2 text-left px-2 py-1.5 rounded-sm transition-colors text-[11.5px]",
                            activeSection === key
                              ? "text-ink bg-surface border-l border-border-hi -ml-px pl-[calc(0.5rem-1px)]"
                              : "text-ink-3 hover:text-ink-2 hover:bg-surface/50"
                          )}
                        >
                          <span className="font-mono text-[9px] text-ink-3/40 w-4">{num}</span>
                          {label}
                        </button>
                      ))}
                    </nav>
                  </div>
                )}
              </div>

              {/* Right — scrollable case study body */}
              <div className="flex-1 overflow-y-auto">
                <div className="px-5 md:px-10 py-8 pb-20">

                  {/* Mobile: title block */}
                  <div className="lg:hidden mb-7">
                    <h2 className="font-display text-[24px] text-ink leading-tight tracking-tight mb-1">
                      {project.title}
                    </h2>
                    <p className="font-mono text-[10px] text-ink-3">{project.subtitle}</p>

                    <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                      {project.tags.map(t => <TagPill key={t} tag={t} sm />)}
                    </div>

                    <div className="flex gap-2">
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="text-[11.5px] font-medium text-ink-3 hover:text-ink border border-border px-2.5 py-1.5 rounded-sm transition-all">
                          GitHub ↗
                        </a>
                      )}
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                          className="text-[11.5px] font-medium text-ink-3 hover:text-ink border border-border px-2.5 py-1.5 rounded-sm transition-all">
                          Live ↗
                        </a>
                      )}
                    </div>

                    {/* Mobile metrics */}
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      {project.metrics.map(m => (
                        <div key={m.label} className="bg-canvas border border-border rounded-sm p-2.5">
                          <div className="font-mono text-[13px] text-ink font-medium leading-none mb-1">{m.value}</div>
                          <div className="font-mono text-[8px] text-ink-3 leading-snug">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Header screenshot — only for projects with a header-placement image */}
                  {headerShots.length > 0 ? (
                    <div className="mb-8">
                      <Screenshot
                        src={headerShots[0].src}
                        alt={headerShots[0].caption}
                        caption={headerShots[0].caption}
                      />
                    </div>
                  ) : !project.screenshots && (
                    <div className="mb-8">
                      <ScreenshotPlaceholder label={`${project.title} screenshot`} />
                    </div>
                  )}

                  {/* Seven case study sections — or a pending notice for unpublished write-ups */}
                  {project.caseStudyPending ? (
                    <ScreenshotPlaceholder label="Full case study write-up" />
                  ) : (
                    <div>
                      {caseSections.map(({ key, label, num }) => (
                        <div key={key} id={`cs-section-${key}`}>
                          <CaseSection
                            sectionKey={key}
                            label={label}
                            num={num}
                            content={project.detail[key]}
                            project={project}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* No-screenshot placeholder for projects without any screenshots */}
                  {!project.screenshots && !project.caseStudyPending && (
                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="font-mono text-[10px] text-ink-3/50 tracking-widest uppercase mb-4">
                        Visual artifacts
                      </p>
                      <ScreenshotPlaceholder label="Application screenshots — coming soon" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
