"use client"
import { FadeIn } from "./ui"

export default function CurrentlyStrip() {
  return (
    <FadeIn delay={0.42}>
      <a
        href="#experience"
        className="group block border-y border-border bg-surface hover:bg-surface-2 transition-colors duration-200"
        aria-label="Jump to experience — currently at Kisah"
      >
        <div className="max-w-content mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative flex-shrink-0 w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-pulse" />
            </span>
            <p className="font-mono text-[12px] text-ink-2 leading-snug truncate">
              <span className="text-ink-3">Currently —</span>{" "}
              <span className="text-ink font-medium">IT Consultant at Kisah</span>
              , building automated reporting and competitive-intelligence dashboards.
            </p>
          </div>
          <svg
            width="11" height="11" viewBox="0 0 12 12" fill="none"
            className="flex-shrink-0 text-ink-3 group-hover:text-ink-2 group-hover:translate-x-0.5 transition-all duration-200"
          >
            <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>
    </FadeIn>
  )
}
