"use client"
import { FadeIn, SectionLabel, Highlight } from "./ui"
import { experiences } from "@/lib/data"

function CompanyInitials({ company }: { company: string }) {
  const initials = company
    .split(/\s+/)
    .map(w => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
  return (
    <div className="w-9 h-9 rounded-sm border border-border bg-canvas flex items-center justify-center flex-shrink-0">
      <span className="font-mono text-[10px] text-ink-3 font-medium">{initials}</span>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-canvas-2">
      <div className="max-w-content mx-auto px-6">
        <FadeIn className="mb-14">
          <SectionLabel>03 / Experience</SectionLabel>
          <h2 className="font-display text-display-lg text-ink leading-tight tracking-tight">
            Where I&apos;ve worked
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 0.06}>
              <div className="group flex gap-5 border border-border rounded-card p-5 md:p-6 bg-canvas hover:border-border-hi transition-all duration-200">
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <CompanyInitials company={exp.company} />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-1">
                    <div>
                      <h3 className="text-[15px] font-semibold text-ink leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-[13px] text-accent font-medium mt-0.5">
                        {exp.company}
                        <span className="text-ink-3 font-normal"> · {exp.location}</span>
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-ink-3 border border-border rounded-sm px-2.5 py-1 bg-canvas-2 flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Highlight */}
                  {exp.highlight && <Highlight text={exp.highlight} />}

                  {/* Bullets */}
                  <ul className="mt-3.5 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[13.5px] text-ink-3 leading-relaxed">
                        <span className="text-border-hi text-[11px] mt-[3px] flex-shrink-0 font-mono">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tags.map(t => (
                      <span key={t} className="font-mono text-[10px] text-ink-3 border border-border bg-canvas-2 rounded-sm px-1.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
