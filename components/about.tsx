"use client"
import Image from "next/image"
import { FadeIn, SectionLabel } from "./ui"
import { skillGroups, education, certifications } from "@/lib/data"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6">

        {/* ── How I think about building ─────────────────────────────── */}
        <FadeIn className="mb-14">
          <SectionLabel>03 / About</SectionLabel>
          <h2 className="font-display text-display-lg text-ink leading-tight tracking-tight">
            How I think about building
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-[1fr_280px] gap-14 md:gap-20 items-start mb-20 md:mb-28">

          {/* Left — prose */}
          <FadeIn delay={0.06} className="space-y-5 text-[15.5px] text-ink-2 leading-loose">
            <p>
              I&apos;m a recent{" "}
              <span className="text-ink font-medium">CS + Business Analytics graduate from FLAME University</span>
              , and I&apos;m genuinely excited to work with people and businesses to solve real problems, build strong systems, and overall create value — and keep doing that as I learn and grow.
            </p>

            <p>
              I&apos;ve spent the last few years building things — ML research systems, analytics pipelines, client dashboards, internship projects — and the part that keeps pulling me forward isn&apos;t the technology itself. It&apos;s the moment when something opaque becomes clear: a cohort analysis that shifts a product decision, a dashboard that turns hours of Excel work into seconds, a model that surfaces a pattern nobody had formalised before.
            </p>

            <p>
              I use AI the way I use any other tool — to get to that moment faster and more reliably. I&apos;m comfortable in the research layer when that&apos;s what the problem needs, and equally comfortable in the analytics or product layer when that&apos;s what actually moves things forward.
            </p>

            <p>
              What matters most to me is whether the problem is real and whether the work moves something forward.
            </p>

            {/* Availability callout */}
            <a href="#contact" className="inline-flex">
              <div className="inline-flex items-center gap-2.5 border border-border rounded-sm px-4 py-2.5 bg-surface mt-1 hover:border-border-hi transition-colors cursor-pointer">
                <span className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0 animate-pulse" />
                <span className="font-mono text-[11.5px] text-ink-2">
                  Available for full-time roles, internships, &amp; select project work
                </span>
              </div>
            </a>
          </FadeIn>

          {/* Right — principle cards */}
          <div className="space-y-4">
            {[
              {
                label: "Research that ships",
                body: "Every AI project I build ends with a running application. MoodTrack is a Flask web app. ScoutAI is a full-stack platform. Results tables alone don't tell you whether a system is useful.",
              },
              {
                label: "Data as a decision tool",
                body: "CS + Business Analytics background means I treat data as an input to decisions, not an output to report. The 2× cohort finding at ACEplus mattered because it influenced product strategy — not because it was statistically interesting.",
              },
              {
                label: "Constraints as design input",
                body: "The client-side Moodle dashboard shipped in weeks because building local-first removed IT approval and privacy objections in one move. The right constraint often makes the project possible.",
              },
              {
                label: "Generalist with depth",
                body: "I move across NLP research, backend engineering, CRM analytics, and client work. The common thread isn't the stack — it's understanding the problem well enough to know what actually needs to be built.",
              },
            ].map((card, i) => (
              <FadeIn key={card.label} delay={0.08 + i * 0.05}>
                <div className="group border-l-[1.5px] border-border pl-4 hover:border-accent/50 transition-colors duration-200">
                  <h3 className="text-[13px] font-semibold text-ink mb-1 group-hover:text-accent/90 transition-colors">
                    {card.label}
                  </h3>
                  <p className="text-[13px] text-ink-3 leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}

            {/* Mobile headshot */}
            <FadeIn delay={0.24} className="md:hidden mt-4">
              <div className="flex items-center gap-4 pt-2">
                <div className="w-[60px] h-[72px] relative overflow-hidden rounded-sm border border-border flex-shrink-0">
                  <Image
                    src="/headshot.png"
                    alt="Liam Shaw"
                    fill
                    className="object-cover object-top grayscale"
                    sizes="60px"
                  />
                </div>
                <div>
                  <p className="text-[13px] font-medium text-ink">Liam Shaw</p>
                  <p className="font-mono text-[10px] text-ink-3 mt-0.5">FLAME University, Pune</p>
                  <p className="font-mono text-[10px] text-ink-3">CS + Business Analytics · 2026</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ── Education ──────────────────────────────────────────────── */}
        <FadeIn className="mb-10">
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-ink-3 mb-3">Education</p>
          <div className="space-y-3">
            {education.map((e, i) => (
              <FadeIn key={e.institution} delay={i * 0.07}>
                <div className="flex gap-5 md:gap-8 items-start border border-border rounded-card p-5 md:p-6 bg-canvas-2 hover:border-border-hi transition-all duration-200">
                  <div className="flex-shrink-0 pt-0.5 w-16 md:w-20">
                    <span className="font-mono text-[10px] text-ink-3">{e.period}</span>
                  </div>
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
        </FadeIn>

        {/* Certifications */}
        <FadeIn className="mb-20 md:mb-28">
          <p className="font-mono text-[10.5px] text-ink-3 tracking-widest uppercase mb-4">
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

        {/* ── Technical Skills ───────────────────────────────────────── */}
        <FadeIn className="mb-4">
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-ink-3 mb-8">Technical range</p>
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
        </FadeIn>

      </div>
    </section>
  )
}
