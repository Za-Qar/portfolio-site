# Portfolio Site (Vite + React + TypeScript + SCSS)

Modernized portfolio app focused on showcasing projects quickly while keeping room for visual polish.

## Stack

- React 19 + TypeScript (strict mode)
- Vite for dev/build
- SCSS modules + shared design tokens
- React Three Fiber for lightweight 3D hero accents
- Vitest + Testing Library for tests

## Scripts

- `npm run dev` - start local dev server
- `npm run typecheck` - run TypeScript checks
- `npm test` - run unit tests
- `npm run build` - typecheck + production build
- `npm run preview` - preview built output

## Project Data Model

Projects are defined in [src/data/projects.ts](src/data/projects.ts) and rendered dynamically in [src/components/Body/Body.tsx](src/components/Body/Body.tsx).  
The contract lives in [src/types/project.ts](src/types/project.ts).

## GitHub Pages Deployment

Deployment is automated through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Push to `main`
2. GitHub Action installs dependencies, runs typecheck/tests/build
3. `dist/` is published to GitHub Pages

The Vite base path is computed from `GITHUB_REPOSITORY` in `vite.config.ts`, so it works for repository pages (for example `/portfolio-site/`).
