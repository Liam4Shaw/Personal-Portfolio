"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import type { Tag } from "@/lib/data"

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
const tagMap: Record<Tag, string> = {
  "AI":               "bg-amber-500/8 text-amber-300/80 border-amber-500/15",
  "NLP":              "bg-sky-500/8   text-sky-300/80   border-sky-500/15",
  "ML":               "bg-teal-500/8  text-teal-300/80  border-teal-500/15",
  "Analytics":        "bg-emerald-500/8 text-emerald-300/80 border-emerald-500/15",
  "Generative AI":    "bg-violet-500/8 text-violet-300/80 border-violet-500/15",
  "CRM":              "bg-orange-500/8 text-orange-300/80 border-orange-500/15",
  "Full-Stack":       "bg-cyan-500/8   text-cyan-300/80   border-cyan-500/15",
  "Research":         "bg-rose-500/8   text-rose-300/80   border-rose-500/15",
  "Product Analytics":"bg-lime-500/8   text-lime-300/80   border-lime-500/15",
}

export function TagPill({ tag, sm }: { tag: Tag; sm?: boolean }) {
  return (
    <span className={cn(
      "inline-flex items-center font-mono border rounded-sm",
      sm ? "text-[9.5px] px-1.5 py-0.5" : "text-[10.5px] px-2 py-0.5",
      tagMap[tag]
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
