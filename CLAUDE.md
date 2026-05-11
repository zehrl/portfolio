# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start           # Start dev server (localhost:3000)
npm run tailwind    # Watch and compile Tailwind CSS (input.css → output.css)
npm run build       # Production build
npm run deploy      # Build and deploy to GitHub Pages (gh-pages)
npm test            # Run tests
```

When editing styles, `npm run tailwind` must be running alongside `npm start` — changes to Tailwind classes won't appear in the browser otherwise, because `output.css` is the compiled file actually imported.

## Architecture

Built with Create React App (react-scripts, not Vite), React 18, TypeScript, React Router v6, and Tailwind CSS via PostCSS.

**Routing** is defined in [src/index.tsx](src/index.tsx). All routes are nested under `<Layout>`, which renders a persistent Header, Footer, and back-to-top button around a Router `<Outlet>`:
- `/` → `WorkExperiencePage`
- `/projects` → `ProjectsPage`

**Pages** ([src/pages/](src/pages/)) contain all data inline as constants — there is no external data source or API. Work history, education, certifications, and projects are all hardcoded in their respective page files.

**Components** ([src/components/](src/components/)) are presentational. Key ones:
- `Container` — section wrapper that accepts a `theme` prop (`"light"` | `"dark"`) to switch background/text color
- `Tag` — skill/badge pill that accepts a `theme` prop (`"light"` | `"dark"` | `"warning"`)
- `SkillList` — renders an array of strings as `Tag` components
- `Header` — includes the nav bar with active-link highlighting

## Styling

Custom Tailwind theme is defined in [tailwind.config.js](tailwind.config.js):
- **Colors:** `primary`, `secondary`, `tertiary` (each with a `-light` variant), `dark`, `light-dark`, `warning`
- **Fonts:** `font-sans` → Inter, `font-serif` → Aleo, `font-handwriting` → Rock Salt (all loaded via Google Fonts CDN in `public/index.html`)
- **Drop shadow:** `drop-shadow-flat` (0px 4px 0px dark color, used on buttons and interactive elements)

Tailwind directives live in [src/input.css](src/input.css); the compiled output is [src/output.css](src/output.css) — never edit `output.css` directly.

## Deployment

Site deploys to [loganzehr.com](http://loganzehr.com) via GitHub Pages. Running `npm run deploy` runs the build then pushes to the `gh-pages` branch automatically.
