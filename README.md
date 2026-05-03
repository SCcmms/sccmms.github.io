# LyneoData Landing Page

Static landing page for LyneoData, built with Astro and Tailwind CSS and deployed to GitHub Pages.

## Requirements

- Node.js 22 or newer
- pnpm 10.13.1, managed through `corepack`

## Local Development

```sh
corepack enable
pnpm install
pnpm run dev
```

Useful commands:

- `pnpm run dev` starts the local Astro dev server.
- `pnpm run build` builds the static site into `dist/`.
- `pnpm run preview` serves the built site locally.
- `pnpm run check` runs Astro/TypeScript checks.
- `pnpm run format` formats source and docs.
- `pnpm run verify` runs checks, formatting validation, and build.

## Project Structure

- `src/pages/` defines the three public routes.
- `src/layouts/main.astro` owns shared HTML metadata and social tags.
- `src/components/` contains Astro components used by the pages.
- `src/data/` contains typed navigation, contact, page metadata, and section copy.
- `src/styles/global.css` defines Tailwind imports, design tokens, and base styles.
- `public/assets/` contains static image assets served as-is.

## Editing Guidelines

Prefer Astro components for static UI. Add client-side JavaScript only when a feature truly needs browser interactivity.

Keep repeated content in `src/data` and repeated layout primitives in `src/components`. For one-off art-directed sections, local Tailwind utility classes are fine.

Before handing off a change, run:

```sh
pnpm run verify
```

## Deployment

Pushing to `main` runs the GitHub Pages workflow. The workflow installs dependencies, runs `pnpm run verify`, uploads `dist/`, and deploys the generated static site.
