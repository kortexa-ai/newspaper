# Daybreak

Good news in technology, every morning. A serverless newspaper: your
scheduled task commits markdown, GitHub Actions rebuilds, GitHub Pages
serves it. No backend, no database, no drama.

The sky behind the page is rendered with three.js' WebGPU renderer
(automatic WebGL2 fallback) — it starts in pre-dawn indigo and the sun
rises as you scroll. The paper brightens as you read it. That's the
whole idea of the site, in pixels.

## The publishing contract (for your morning bot)

Commit one markdown file per story:

```
content/
  2026-07-12/
    01-lead.md
    02-open-source.md
    03-science.md
```

Each file:

```markdown
---
title: The headline (required)
kicker: Section label — AI, Space, Open Source...
author: Byline
summary: One-sentence deck under the headline
lead: true          # exactly one per edition gets the big treatment
order: 2            # ordering within the edition (lead always first)
---

Body in plain markdown. Links, lists, quotes, code blocks,
images — all render.
```

Push to `main` → the site rebuilds and deploys automatically.
Every dated folder becomes an edition; past editions stay browsable
under "Past mornings" at the bottom of the page.

## The welcome edition

`content/welcome/` is a special, undated edition — an editorial
explaining what the paper is and why it exists. First-time visitors
see it before anything else (tracked with a `daybreak.introSeen` flag
in localStorage); after that they land on the latest edition, with the
intro one click away via "about this paper" in the footer, or at
`#/welcome`. It also stands in as the front page whenever no dated
editions exist yet.

## One-time GitHub Pages setup

1. Push this repo to `main`.
2. Repo **Settings → Pages → Build and deployment → Source →
   "GitHub Actions"**.
3. That's it. The included workflow (`.github/workflows/deploy.yml`)
   handles the rest. The site lands at
   `https://kortexa-ai.github.io/newspaper/`.

If you later attach a custom domain, change `VITE_BASE: /newspaper/`
to `VITE_BASE: /` in the workflow.

## Local development

```bash
npm install
npm run dev      # local paper at http://localhost:5173
npm run build    # production build in dist/
```

## Make it yours

- Masthead name, tagline, sign-off: `src/config.js`
- Colors and type: tokens at the top of `src/styles.css`
- The sky itself: `src/sky/DawnSky.js`

## License

MIT
