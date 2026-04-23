# OneWorld DMCs

Next.js 16 (App Router, React 19, Tailwind v4) travel/DMC site.

## Run
- Dev: `npm run dev` (port 5000, host 0.0.0.0) — configured as the "Start application" workflow.
- Build: `npm run build`; Start: `npm run start`.

## Replit notes
- `next.config.mjs`: `allowedDevOrigins` includes `*.replit.dev`/`*.replit.app`; `images.remotePatterns` allows all https hosts (used by dynamic `operator.image`/`brand.image`/`dest.image`).
- No backend, DB, or secrets required.
