"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ScreenshotProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function Screenshot({ src, alt, caption, className }: ScreenshotProps) {
  return (
    <figure className={cn("my-6 group", className)}>
      <div className="overflow-hidden rounded-card border border-border bg-canvas-2">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={750}
          className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.01]"
          quality={90}
        />
      </div>
      {caption && (
        <figcaption className="mt-2.5 font-mono text-[10.5px] text-ink-3 leading-relaxed px-0.5">
          ↳ {caption}
        </figcaption>
      )}
    </figure>
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
