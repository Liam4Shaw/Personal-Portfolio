# Liam Shaw — Personal Portfolio

My personal portfolio site, live at **[liamshaw.in](https://liamshaw.in)**.

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

```bash
npm install
npm run dev   # → http://localhost:3000
```

## Project Structure

```
├── app/           # Root layout, global styles, page assembly
├── components/    # All UI components (nav, hero, projects, etc.)
├── lib/
│   ├── data.ts    # All site content lives here — edit this to update the site
│   └── utils.ts   # Utility helpers
└── public/        # Static assets (resume PDF, images, screenshots)
```

## Updating Content

All content (bio, projects, experience, skills, education) is managed in a single file: [`lib/data.ts`](./lib/data.ts). No component changes needed for content updates.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` automatically trigger a production deployment.

## License

© Liam Shaw. All rights reserved.
