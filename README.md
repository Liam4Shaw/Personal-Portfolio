# Liam Shaw — Portfolio · liamshaw.in

Built with Next.js 14 · TypeScript · Tailwind CSS · Framer Motion.

---

## Structure

```
liam-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx         Root layout, fonts, SEO
│   └── page.tsx           Page assembly
├── components/
│   ├── nav.tsx            Sticky nav, active tracking, mobile menu
│   ├── hero.tsx           Hero + stat grid
│   ├── about.tsx          About + trait cards
│   ├── projects.tsx       Project card grid
│   ├── project-panel.tsx  Slide-in case study panel (7 sections per project)
│   ├── experience.tsx     Experience timeline
│   ├── skills.tsx         Skill groups
│   ├── education.tsx      Education + certifications
│   ├── contact.tsx        Contact + footer
│   └── ui.tsx             Shared: FadeIn, SectionHeader, TagPill, Highlight
├── lib/
│   ├── data.ts            ALL CONTENT LIVES HERE
│   └── utils.ts           cn() utility
└── public/
    └── Liam_Shaw_Resume_OnePage.pdf   ← drop PDF here
```

---

## Setup

```bash
cd liam-portfolio
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
```

---

## Before going live

**1. Drop resume PDF**
```
public/Liam_Shaw_Resume_OnePage.pdf
```

**2. Replace `"#"` placeholders in lib/data.ts**
Search for `githubUrl: "#"` and `demoUrl: "#"` and replace with real URLs.

**3. Verify build**
```bash
npm run build   # must complete with 0 errors
```

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

Or: push to GitHub → vercel.com → New Project → import → Deploy (Next.js auto-detected).

---

## Connect liamshaw.in

In Vercel dashboard → Settings → Domains → add `liamshaw.in` and `www.liamshaw.in`.

DNS records to add at your registrar:
- `liamshaw.in` → **A record** → `76.76.21.21`
- `www.liamshaw.in` → **CNAME** → `cname.vercel-dns.com`

Propagates in 5–60 minutes.

---

## MoodTrack demo on Render (free)

1. Push Flask app to GitHub
2. render.com → New Web Service → connect repo
3. Build: `pip install -r requirements.txt` · Start: `gunicorn app:app`
4. Update `demoUrl` in `lib/data.ts` with the Render URL

---

## Updating content

Edit **`lib/data.ts`** only. Never need to touch a component.

| Thing to change | Location in data.ts |
|---|---|
| Name, email, links, domain | `meta` object |
| Hero stat row | `heroStats` array |
| Projects + case studies | `projects` array |
| Experience | `experiences` array |
| Skills | `skillGroups` array |
| Education | `education` array |
| Certifications | `certifications` array |
