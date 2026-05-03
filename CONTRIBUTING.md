# Contributing Guidelines

This document provides a set of guidelines for AI agents and developers working on the Lyneo Data landing page project. The goal is to maintain a consistent and high-quality codebase.

## Core Principles

- **Follow the Astro way:** Build static UI with Astro components. Do not add a client framework or hydrated island unless the feature truly needs browser-side interactivity.
- **Use Tailwind CSS:** Prefer Tailwind utilities and project tokens from `src/styles/global.css`. Avoid custom CSS unless it belongs in the shared token/base layer.
- **Keep content editable:** Put reusable copy, navigation, contact details, and page metadata in `src/data` rather than burying it inside large page sections.
- **Abstract selectively:** Use small shared primitives for repeated layout/CTA patterns. Keep one-off art-directed sections local when extracting them would add more ceremony than clarity.
- **Use TypeScript:** Keep exported data typed so copy and metadata changes fail early when fields are missing.
- **Verify your changes:** Run `pnpm run verify` before finishing work.

## Source Layout

- `src/pages/` contains route entrypoints.
- `src/layouts/main.astro` owns the shared document shell and SEO metadata.
- `src/components/` contains Astro-only UI components.
- `src/data/` contains typed site and page data.
- `src/styles/global.css` contains Tailwind imports, design tokens, and base styles.

## Commands

- `pnpm run dev` starts local development.
- `pnpm run check` runs Astro/TypeScript checks.
- `pnpm run format` formats source and docs.
- `pnpm run build` builds the static site.
- `pnpm run verify` runs the full handoff gate.

## Deployment

This is a static website deployed to GitHub Pages from `main`. The deployment workflow runs `pnpm run verify` before publishing `dist/`.
