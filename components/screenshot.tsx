"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScreenshotProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function Screenshot({ src, alt, caption, className }: ScreenshotProps) {
  const [expanded, setExpanded] = useState(false)

  // Escape key to dismiss
  useEffect(() => {
    if (!expanded) return
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setExpanded(false) }
    document.addEventListener("keydown", fn)
    return () => document.removeEventListener("keydown", fn)
  }, [expanded])

  // Lock scroll when expanded
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [expanded])

  return (
    <>
      <figure className={cn("my-6 group", className)}>
        <div
          className="overflow-hidden rounded-card border border-border bg-canvas-2 cursor-zoom-in"
          onClick={() => setExpanded(true)}
          role="button"
          aria-label={`Expand screenshot: ${alt}`}
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setExpanded(true) }}
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={750}
            className="w-full h-auto block transition-all duration-500 group-hover:scale-[1.01] group-hover:brightness-105"
            quality={90}
          />
        </div>
        {caption && (
          <figcaption className="mt-2.5 font-mono text-[10.5px] text-ink-3 leading-relaxed px-0.5 flex items-start gap-1.5">
            <span className="text-ink-3 flex-shrink-0">↳</span>
            <span>{caption}</span>
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      <AnimatePresence>
        {expanded && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100] bg-canvas/94 backdrop-blur-md cursor-zoom-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setExpanded(false)}
            />

            {/* Image container */}
            <motion.div
              className="fixed inset-0 z-[101] flex items-center justify-center p-6 md:p-12 pointer-events-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative max-w-5xl w-full pointer-events-auto">
                <div className="overflow-hidden rounded-card border border-border-hi shadow-2xl">
                  <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={750}
                    className="w-full h-auto block"
                    quality={95}
                  />
                </div>

                {/* Caption below */}
                {caption && (
                  <p className="mt-3 font-mono text-[10.5px] text-ink-3 text-center leading-relaxed">
                    {caption}
                  </p>
                )}

                {/* Close button */}
                <button
                  onClick={() => setExpanded(false)}
                  className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-canvas-2 border border-border-hi flex items-center justify-center text-ink-3 hover:text-ink hover:border-border-hi transition-colors"
                  aria-label="Close expanded screenshot"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

interface ScreenshotPlaceholderProps {
  label?: string
  className?: string
}

export function ScreenshotPlaceholder({ label = "Screenshot", className }: ScreenshotPlaceholderProps) {
  return (
    <figure className={cn("my-6", className)}>
      <div
        className="flex flex-col items-center justify-center gap-2 rounded-card border border-dashed border-border bg-canvas-2 py-12 px-8"
        aria-label={`Placeholder: ${label}`}
      >
        <div className="w-8 h-8 rounded-sm border border-border-hi flex items-center justify-center mb-1">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-ink-3">
            <rect x="1" y="1" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="4.5" cy="4.5" r="1" fill="currentColor" />
            <path d="M1 9.5L4.5 6.5L7 8.5L9.5 6L13 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-mono text-[10px] text-ink-3 tracking-wider uppercase">
          {label} — coming soon
        </p>
      </div>
    </figure>
  )
}
