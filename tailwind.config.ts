import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-instrument)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Background layers — theme-adaptive via CSS variables (see globals.css)
        canvas:   "var(--color-canvas)",
        "canvas-2": "var(--color-canvas-2)",
        "canvas-3": "var(--color-canvas-3)",
        // Borders
        border:    "var(--color-border)",
        "border-hi": "var(--color-border-hi)",
        // Surfaces (subtle fills)
        surface:   "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        // Text hierarchy
        ink:  "var(--color-ink)",
        "ink-2": "var(--color-ink-2)",
        "ink-3": "var(--color-ink-3)",
        // Accent — single restrained amber. Same value in both themes (brand identity,
        // not a neutral) — used ONLY for the primary CTA fill and the "currently" status dot.
        accent: "var(--color-accent)",
        "accent-dim": "var(--color-accent-dim)",
        // Fixed dark text for content sitting on an accent-filled surface (buttons)
        "on-accent": "var(--color-on-accent)",
      },
      maxWidth: { content: "1100px" },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "reveal": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in":  "fade-in 0.4s ease forwards",
        "reveal":   "reveal 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
      },
      borderRadius: {
        card: "8px",
        sm:   "4px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.02em",
        tight:    "-0.01em",
        wide:     "0.05em",
        wider:    "0.10em",
        widest:   "0.16em",
      },
      lineHeight: {
        none:    "1",
        tight:   "1.15",
        snug:    "1.35",
        normal:  "1.5",
        relaxed: "1.7",
        loose:   "1.85",
      },
    },
  },
  plugins: [],
}

export default config
