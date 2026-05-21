"use client"
import Image from "next/image"
import { FadeIn, SectionLabel } from "./ui"

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6">
        <FadeIn className="mb-14">
          <SectionLabel>02 / About</SectionLabel>
          <h2 className="font-display text-display-lg text-ink leading-tight tracking-tight">
            How I think about building
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-[1fr_280px] gap-14 md:gap-20 items-start">

          {/* Left — prose */}
          <FadeIn delay={0.06} className="space-y-5 text-[15.5px] text-ink-2 leading-loose">
            <p>
              I&apos;m a final-year Computer Science student at{" "}
              <span className="text-ink font-medium">FLAME University, Pune</span>
              {" "}(Minor: Business Analytics, Full Academic Scholarship). My work sits at
              the intersection of applied ML, NLP, and software engineering — with a
              consistent focus on outcomes over elegance.
            </p>

            <p>
              My graduation project,{" "}
              <span className="text-ink font-medium">MoodTrack</span>, is a
              multimodal music emotion system that models audio and lyrics jointly
              at sub-second resolution. The most interesting result wasn&apos;t the
              CCC scores — it was that the learned fusion gates independently
              recovered a known music-psychology finding purely from gradient
              descent. That&apos;s the kind of result that earns trust.
            </p>

            <p>
              At{" "}
              <span className="text-ink font-medium">ACEplus</span>, I designed
              the analytics event framework for a product reaching 5,000+ schools,
              ran cohort analyses that directly shifted product strategy, and built
              a data-cleaning pipeline from scratch. At{" "}
              <span className="text-ink font-medium">FLAME&apos;s CDL</span>, I
              replaced an hours-long manual Excel workflow with a deployed
              client-side dashboard in weeks — by choosing the right constraint
              early.
            </p>

            <p>
              I&apos;m drawn to roles where both technical rigour and practical
              judgment matter: AI engineering, product analytics, CRM/ops tech,
              and full-stack software.
            </p>

            {/* Availability callout */}
            <div className="inline-flex items-center gap-2.5 border border-border rounded-sm px-4 py-2.5 bg-surface mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0 animate-pulse" />
              <span className="font-mono text-[11.5px] text-ink-2">
                Available for internships + full-time · May 2026 onwards
              </span>
            </div>
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
                body: "CS + Business Analytics background means I always ask: what decision does this data change? The 2× cohort finding at ACEplus mattered because it shifted product strategy — not because it was statistically interesting.",
              },
              {
                label: "Constraints as design input",
                body: "The client-side Moodle dashboard shipped in weeks because building local-first removed IT approval and privacy objections in one move. The right constraint often makes the project possible.",
              },
              {
                label: "Generalist with depth",
                body: "I move across NLP research, backend engineering, CRM analytics, and client work. The common thread: understand the problem clearly, pick the right tool, execute cleanly.",
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
      </div>
    </section>
  )
}
