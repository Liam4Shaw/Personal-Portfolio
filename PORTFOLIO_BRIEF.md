# Portfolio redesign brief — liamshaw.in

## Goal
Redesign the visual design and top-level story of this existing Next.js portfolio. Keep the stack, routing, and technical case-study content untouched. This pass changes: the visual design system, the hero/about copy, the experience section, and the ordering/framing of "selected work." The certifications section is removed. Do NOT rewrite the technical descriptions inside existing case studies — that's a later pass.

## Stack (unchanged)
Next.js, TypeScript, Tailwind CSS, Framer Motion. This is a visual and content-ordering pass, not a rebuild — keep the architecture and routing exactly as they are.

## Design direction
- Tone: minimal, professional, techy. Generous whitespace, restrained color.
- Typography: keep the existing type system; use a monospace accent for nav items, tags, and meta text against a sans-serif body — this carries the "techy" feel without needing decoration.
- Color: one accent color only — a clean, professional amber (start from `#E8A33D`, adjust to taste) — used ONLY for the primary CTA button and one small status-indicator dot in the "currently" strip. Everything else stays neutral (black/white/gray, dark-mode adaptive). Do not spread the accent color anywhere else; the restraint is the point.
- Headshot: restore the headshot photo (I'll supply the image file) in the hero or about section.
- Remove: the Certifications section entirely (CS50x, LinkedIn Learning, freeCodeCamp Responsive Web Design listings) — redundant next to the actual project work.

## Section by section

### Nav
Keep structurally as-is; only a light type/style pass to match the new system.

### Hero
- Headline: "I build systems that turn messy data into clear decisions — and ideas into shipped software."
- Subtitle: "I help businesses automate the busywork, make sense of their data, and stand up the tools they actually need — from reporting pipelines and dashboards to full web applications."
- CTAs: "See my work" (primary, amber fill), "Get in touch" (secondary, outline).

### "Currently" strip
One line directly under the hero, visually distinct (subtle background tint or border, small live-status dot in amber):

> Currently — IT Consultant at Kisah, building automated reporting and competitive-intelligence dashboards.

Do not name specific platforms or competitors — keep this general. Link it through to the new Experience entry below.

### Experience section — new entry (add at top, reverse-chronological)
- **Title:** IT Consultant — Kisah
- **Dates:** May 2026 – Present
- **Description:** "Build automated reporting and analytics pipelines that replace manual data pulls. Developed a product-ranking analytics dashboard for a menswear category, driven by a daily automated data pipeline and layered with AI-generated insights. Work spans competitive-intelligence dashboards, workflow automation, and turning raw market data into decision-ready reporting."

Keep all existing earlier experience entries below this one, unchanged.

### Selected work — reorder into two tiers
This is the main structural change.

**Tier 1 — "Selected work" (top billing — current, professional, consulting-relevant):**
1. Kisah ranking dashboard — one-liner: "Daily product-ranking analytics from an automated data pipeline." (tags: power bi, dax, python)
2. FLAME Moodle Insight Dashboard — reframe as delivered client/institutional work: "A delivered analytics dashboard turning raw usage data into decisions for [institution]." (keep existing tags)

Leave room in this tier's layout for two more cards — the Shopify project and the Wilander platform will slot in here once they're live and shareable.

**Tier 2 — "Earlier work" / "Research" (secondary section, lower on the page, smaller visual weight):**
ScoutAI, MoodTrack, Hybrid Fake News Detection — keep their existing technical descriptions exactly as-is. Only demote their visual prominence and position; do not rewrite them.

The intent: a recruiter or client scanning the page sees current, real-world consulting/analytics/delivery work first, with the academic/research work as supporting depth underneath — not the headline.

### About section
Keep the existing "Research that ships / Data as a decision tool / Constraints as design input" framing — it's strong, don't rebuild it. Light copy pass only if needed to align tone with the new hero line; otherwise leave as-is.

## What NOT to change
- Technical content inside existing case studies (later pass)
- Site architecture, routing, stack
- The case-study-first philosophy of the site overall

## Process
Work through this in order, showing each section before moving to the next: nav → hero → currently strip → experience → selected work reorder → about → remove certifications. If anything here is ambiguous, ask rather than guess.
