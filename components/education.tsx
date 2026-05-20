"use client"
import { FadeIn, SectionLabel } from "./ui"
import { education, certifications } from "@/lib/data"

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-canvas-2">
      <div className="max-w-content mx-auto px-6">
        <FadeIn className="mb-14">
          <SectionLabel>05 / Education</SectionLabel>
          <h2 className="font-display text-display-lg text-ink leading-tight tracking-tight">
            Academic background
          </h2>
        </FadeIn>

        {/* Education entries */}
        <div className="space-y-4 mb-12">
          {education.map((e, i) => (
            <FadeIn key={e.institution} delay={i * 0.07}>
              <div className="flex gap-5 md:gap-8 items-start border border-border rounded-card p-5 md:p-6 bg-canvas hover:border-border-hi transition-all duration-200">
                {/* Year column */}
                <div className="flex-shrink-0 pt-0.5">
                  <span className="font-mono text-[10px] text-ink-3">{e.period}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-ink leading-snug mb-0.5">
                    {e.degree}
                  </h3>
                  <p className="text-[13.5px] text-accent mb-3">{e.institution}</p>
                  <ul className="space-y-1">
                    {e.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2.5 text-[13px] text-ink-3">
                        <span className="font-mono text-border-hi mt-[3px] flex-shrink-0">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn>
          <p className="font-mono text-[9.5px] text-ink-3 tracking-widest uppercase mb-4">
            Certifications
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {certifications.map((c, i) => (
              <FadeIn key={c.name} delay={i * 0.05}>
                <div className="border border-border rounded-card p-4 bg-canvas hover:border-border-hi transition-all duration-200">
                  <p className="text-[13px] font-medium text-ink leading-snug mb-1">{c.name}</p>
                  <p className="font-mono text-[10px] text-ink-3">
                    {c.issuer} · {c.year}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
