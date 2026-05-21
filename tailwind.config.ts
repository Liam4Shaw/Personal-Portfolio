import type { Config } from "tailwindcss"

const config: Config = {
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
        // Background layers — near-neutral dark (not blue-black)
        canvas:   "#0a0a0b",
        "canvas-2": "#111113",
        "canvas-3": "#18181b",
        // Borders
        border:    "rgba(255,255,255,0.09)",
        "border-hi": "rgba(255,255,255,0.17)",
        // Surfaces (subtle fills)
        surface:   "rgba(255,255,255,0.04)",
        "surface-2": "rgba(255,255,255,0.07)",
        // Text hierarchy
        ink:  "#f0eeeb",
        "ink-2": "#9e9c99",
        "ink-3": "#56534f",
        // Accent — warm amber, single deliberate pop of colour
        accent: "#e8c468",
        "accent-dim": "#c9a84c",
        // Status
        green: "#4ade80",
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
