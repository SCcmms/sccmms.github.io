# Contributing Guidelines

This document provides a set of guidelines for AI agents and developers working on the Lyneo Data landing page project. The goal is to maintain a consistent and high-quality codebase.

## Core Principles

*   **Leverage shadcn/ui:** This project uses shadcn/ui. Please use its components whenever possible. You can find them in `src/components`. If you need to create a new base component, you must first check the shadcn registry for appropriate code.
*   **Embrace Tailwind CSS:** All styling should be done using Tailwind CSS utility classes. Avoid writing custom CSS.
*   **Follow the Astro way:** Build pages and components using the Astro framework. Keep an eye on the existing structure in `src/pages` and `src/components`.
*   **TypeScript is key:** The project is set up with TypeScript. Please use it to ensure type safety.
*   **Keep it clean:** Strive for clean, readable, and maintainable code.
*   **Verify your changes:** Run `pnpm run build` to check for errors before finishing your work.

## Deployment

This is a static website that is deployed to GitHub Pages. The site is built using `pnpm run build`.
