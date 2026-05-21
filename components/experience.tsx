"use client"
import { FadeIn, SectionLabel } from "./ui"
import { experiences } from "@/lib/data"

// Key phrases to highlight in amber per experience entry
const amberPhrases: Record<string, string[]> = {
  aceplus: [
    "~2× more in-app ACEs",
    "formally adopted by the engineering team",
    "reprioritise school engagement programmes",
    "~15%",
  ],
  mandrake: [
    "removed environment-parity issues",
    "full request lifecycle",
  ],
  willwali: [
    "inaugural intern cohort",
    "90%+ test coverage",
    "30+ bugs",
  ],
  "flame-sports": [
    "18.91M total views",
    "6.57M accounts reached",
    "79,100+ followers",
    "98.2% non-follower view share",
  ],
}

function highlightBullet(text: string, id: string): React.ReactNode {
  const phrases = amberPhrases[id] || []
  if (phrases.length === 0) return text

  const parts: React.ReactNode[] = []
  let remaining = text

  while (remaining.length > 0) {
    let earliestIndex = -1
    let earliestPhrase = ""

    for (const phrase of phrases) {
      const idx = remaining.indexOf(phrase)
      if (idx !== -1 && (earliestIndex === -1 || idx < earliestIndex)) {
        earliestIndex = idx
        earliestPhrase = phrase
      }
    }

    if (earliestIndex === -1) {
      parts.push(remaining)
      break
    }

    if (earliestIndex > 0) {
      parts.push(remaining.slice(0, earliestIndex))
    }
    parts.push(
      <span key={earliestIndex} className="text-accent font-medium">
        {earliestPhrase}
      </span>
    )
    remaining = remaining.slice(earliestIndex + earliestPhrase.length)
  }

  return <>{parts}</>
}

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
          <SectionLabel>02 / Experience</SectionLabel>
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

                  {/* Bullets */}
                  <ul className="mt-3.5 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[13.5px] text-ink-3 leading-relaxed">
                        <span className="text-border-hi text-[11px] mt-[3px] flex-shrink-0 font-mono">—</span>
                        <span>{highlightBullet(b, exp.id)}</span>
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
