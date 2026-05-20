"use client"
import { FadeIn, SectionLabel } from "./ui"
import { skillGroups } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6">
        <FadeIn className="mb-14">
          <SectionLabel>04 / Skills</SectionLabel>
          <h2 className="font-display text-display-lg text-ink leading-tight tracking-tight">
            Technical range
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.04}>
              <div>
                <p className="font-mono text-[9.5px] text-ink-3 tracking-widest uppercase mb-3 pb-2 border-b border-border">
                  {group.label}
                </p>
                <p className="text-[13.5px] text-ink-2 leading-relaxed">
                  {group.skills.join(", ")}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
