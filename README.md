# Devexim Intranet

Internal company portal built with **TypeScript, JavaScript, HTML and CSS**, bundled with [Vite](https://vite.dev).

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build locally
```

Requires Node 20+ (see `.nvmrc`).

## Folder structure

```
devexim-intranet/
├── index.html                 Home page (Vite expects index.html at the project root)
├── pages/                     One HTML file per page
│   ├── people.html
│   ├── announcements.html
│   ├── resources.html
│   └── events.html
├── public/                    Copied as-is to the site root (favicon, images, PDFs in public/docs/)
├── src/
│   ├── main.ts                Entry for every page: loads CSS, mounts layout, runs the page module
│   ├── config/nav.ts          Site name + navigation (drives sidebar, breadcrumb, quick-access cards)
│   ├── components/            Reusable UI pieces (layout, search, lists, empty state)
│   ├── pages/                 One TS module per page, named after <body data-page="...">, exports init()
│   ├── data/                  Static data for now (announcements, events); later replaced by API calls
│   ├── types/                 Shared TypeScript interfaces
│   ├── utils/                 Small helpers (dom, date, url)
│   └── styles/
│       ├── main.css           Imports everything below, in order
│       ├── base/              tokens.css (colors, spacing, fonts) and base.css (reset, focus, a11y)
│       ├── layout/            sidebar, topbar, content area
│       └── components/        welcome card, search box, cards/panels, lists
├── vite.config.ts             Multi-page build config (list every HTML page here)
├── tsconfig.json              Strict TypeScript settings
└── .github/workflows/ci.yml   Typecheck + build on every push and pull request
```

If you keep a `services/` folder (API, scripts, etc.), leave it as its own top-level folder next to `src/`.

## How to add a page

1. Add an item to `NAV_ITEMS` in `src/config/nav.ts`.
2. Copy `pages/events.html`, change `data-page`, title and content.
3. Add the file to `build.rollupOptions.input` in `vite.config.ts`.
4. Optional: create `src/pages/<id>.ts` exporting `init()` for page logic.

## Why it is structured this way

- **CSS is imported from `main.ts`**, not linked per page, so there are no relative-path bugs between `index.html` and `pages/*.html`.
- **The sidebar, top bar and footer exist once** (`layout.ts`), so changing navigation is a one-file edit.
- **Navigation is data** (`nav.ts`), so the sidebar and the home quick-access cards can never drift apart.
- **Data is separate from rendering**, so swapping `src/data/*.ts` for a `fetch()` to an API later does not touch the UI code.

## Project plan

| Phase | Goal | Done when |
| --- | --- | --- |
| 0. Foundations | Repo, tooling, CI, decisions on hosting and login | `npm run build` passes in CI; hosting and auth approach agreed |
| 1. Shell and design system | Layout, tokens, shared components | All pages share sidebar, top bar and footer |
| 2. Content pages | Announcements, events, resources, people directory (static data) | Each page shows real content |
| 3. Access control and hosting | Only employees can open the site | Login (SSO) or network restriction in place |
| 4. Dynamic data | Content editable without a code deploy | Data comes from an API or CMS; basic admin editing |
| 5. Quality | Tests, accessibility, performance | Vitest tests for utils/components, Lighthouse a11y score 90+ |

## Security note (important for an intranet)

This is a front-end project. A static site is readable by anyone who can reach its URL, so **do not put confidential content in it** until access control (phase 3) is in place.

- GitHub Pages sites are publicly reachable unless your plan offers private Pages (GitHub Enterprise Cloud); a private repository does not make the published site private.
- Safer options: host behind your company VPN or office network, put it behind an identity-aware proxy (Cloudflare Access, Google Cloud IAP, Microsoft Entra application proxy), or add SSO login with a small backend.
- Keep secrets out of the repo and out of front-end code. Anything bundled into the browser is visible to users.
- Every page already sends `noindex` so search engines do not list it.

## Sub-path deployments

If the site is served from a sub-path (for example `https://example.com/intranet/`), build with:

```bash
BASE_PATH=/intranet/ npm run build
```
