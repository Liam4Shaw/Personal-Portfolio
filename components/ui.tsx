"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

// ── FadeIn ────────────────────────────────────────────────────────────────────
type FadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px 0px" })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

// ── SectionLabel ──────────────────────────────────────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10.5px] tracking-widest uppercase text-ink-3 mb-3">
      {children}
    </p>
  )
}

// ── SectionHeader ─────────────────────────────────────────────────────────────
export function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <FadeIn className="mb-16">
      <SectionLabel>{index}</SectionLabel>
      <h2 className="font-display text-display-lg text-ink leading-tight tracking-tight">
        {title}
      </h2>
    </FadeIn>
  )
}

// ── Tag pill ──────────────────────────────────────────────────────────────────
// Refined semantic colour by category family — low-saturation, theme-aware, and
// deliberately avoids amber (amber stays reserved for the primary CTA / status dot).
// A small palette (5 hues) grouped by family keeps it "taxonomy," not "rainbow."
// Anything not mapped falls back to neutral.
const tagColorMap: Record<string, string> = {
  // Modeling / intelligence family → violet
  "AI":               "bg-violet-500/10 border-violet-500/20 text-violet-700 dark:text-violet-300/85",
  "ML":               "bg-violet-500/10 border-violet-500/20 text-violet-700 dark:text-violet-300/85",
  "Generative AI":    "bg-violet-500/10 border-violet-500/20 text-violet-700 dark:text-violet-300/85",
  // Language → sky
  "NLP":              "bg-sky-500/10 border-sky-500/20 text-sky-700 dark:text-sky-300/85",
  // Research → rose
  "Research":         "bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-300/85",
  // Product / engineering → cyan
  "Full-Stack":       "bg-cyan-500/10 border-cyan-500/20 text-cyan-700 dark:text-cyan-300/85",
  // Analytics → emerald
  "Analytics":        "bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300/85",
  "Product Analytics":"bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-300/85",
  // CRM → orange (distinct from the amber accent)
  "CRM":              "bg-orange-500/10 border-orange-500/20 text-orange-700 dark:text-orange-300/85",
}

const neutralTag = "bg-surface border-border text-ink-3"

export function TagPill({ tag, sm }: { tag: string; sm?: boolean }) {
  return (
    <span className={cn(
      "inline-flex items-center font-mono border rounded-sm",
      sm ? "text-[9.5px] px-1.5 py-0.5" : "text-[10.5px] px-2 py-0.5",
      tagColorMap[tag] ?? neutralTag,
    )}>
      {tag}
    </span>
  )
}

// ── Highlight callout ─────────────────────────────────────────────────────────
export function Highlight({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-sm bg-accent/5 border border-accent/12 mt-3 mb-1">
      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-[6px]" />
      <span className="text-[12.5px] font-medium text-accent/90 leading-snug">{text}</span>
    </div>
  )
}

// ── Divider ───────────────────────────────────────────────────────────────────
export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-t border-border", className)} />
}
