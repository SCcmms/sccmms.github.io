# Landing Page MVP: Initial Spec & Implementation Plan

## 1. Overview

This document outlines the requirements and implementation plan for the first iteration of the Lyneo Data landing page. The goal is to create a simple, elegant, and effective "business card" style landing page that communicates our core value proposition and provides a clear call to action.

### 1.1. Target Audience

The landing page is aimed at middle-level managers in the manufacturing industry who have some technical knowledge of stream processing and analytics.

### 1.2. Core Message

The primary message to convey is summarized by our tagline: **"The voice of manufacturing data."**

## 2. Requirements

The landing page will consist of a single **Hero Section** with the following elements:

*   **Headline (h1):** "The voice of manufacturing data"
*   **Subheading (p):** "Lyneo Data provides real-time stream processing and analytics to help you understand and optimize your manufacturing operations."
*   **Call to Action (Button):** "Contact Sales"
*   **Logo:** The company name "Lyneo Data" as a text-based logo.

### 2.1. Design & Layout

*   **Color Palette:** Black and silver.
*   **Visuals:** Subtle light/luminescence effects to create a modern, elegant feel.
*   **Layout:** The Hero section should fill the viewport. The content should be centered both horizontally and vertically.
*   **Responsiveness:** The page must be fully responsive and look great on both desktop and mobile devices.

## 3. Tech Stack

*   **Framework:** [Astro](https://astro.build/)
*   **Language:** TypeScript
*   **Styling:** [TailwindCSS](https://tailwindcss.com/)
*   **Testing:** [Vitest](https://vitest.dev/)

## 4. Implementation Plan

We will follow a Test-Driven Development (TDD) approach with small, frequent commits. Each step will include creating or modifying a component, adding styles, and writing a test to verify the implementation.

**Important:** Before implementing any new component, especially UI elements like buttons, you must search the [shadcn registry](https://ui.shadcn.com/) to see if a suitable component already exists. We prefer to use existing, well-tested components whenever possible.

### Task 1: Setup TailwindCSS and Basic Layout

1.  **Goal:** Configure TailwindCSS and create the basic structure of the landing page.
2.  **Files to touch:**
    *   `astro.config.mjs`: Add the TailwindCSS integration.
    *   `tailwind.config.cjs`: Configure the color palette and any custom themes.
    *   `src/layouts/main.astro`: Set up the basic HTML structure.
    *   `src/styles/global.css`: Import TailwindCSS.
3.  **Guidance:**
    *   Follow the official Astro documentation to add the TailwindCSS integration.
    *   In your `tailwind.config.cjs`, extend the theme to include our black and silver color palette.
    *   Ensure the `main.astro` layout provides a basic HTML structure with a `<slot />` for content.
4.  **Testing:**
    *   Create a simple test file `src/layouts/main.test.ts` using Vitest.
    *   Write a test to verify that the `main.astro` component renders without errors.
    *   Run `pnpm test` to execute the test.
5.  **Commit:** `feat: setup tailwindcss and basic layout`

### Task 2: Create the Hero Section Component

1.  **Goal:** Create a new `Hero.astro` component and integrate it into the main page.
2.  **Files to touch:**
    *   `src/components/Hero.astro`: Create this new file.
    *   `src/pages/index.astro`: Import and use the `Hero` component.
3.  **Guidance:**
    *   The `Hero.astro` component should contain the headline, subheading, and a button.
    *   Use semantic HTML elements (`<h1>`, `<p>`, `<button>`).
4.  **Testing:**
    *   Create a test file `src/components/Hero.test.ts`.
    *   Write a test to verify that the `Hero.astro` component renders the headline, subheading, and button text.
    *   Run `pnpm test`.
5.  **Commit:** `feat: create Hero component`

### Task 3: Style the Hero Section with TailwindCSS

1.  **Goal:** Apply TailwindCSS classes to the `Hero.astro` component to achieve the desired design.
2.  **Files to touch:**
    *   `src/components/Hero.astro`
3.  **Guidance:**
    *   Use TailwindCSS utility classes to style the component.
    *   Implement the black and silver color scheme.
    *   Create the luminescence effect on the button, likely using a combination of `box-shadow` and `transition` utilities.
    *   Ensure the layout is centered and responsive.
4.  **Testing:**
    *   Run `pnpm dev` and visually inspect the page in the browser.
    *   Verify the colors, layout, and responsiveness.
    *   Check the button's hover effect.
5.  **Commit:** `feat: style Hero component with tailwindcss`

## 5. How to Test

*   **Unit and Component Tests:** Use Vitest for unit and component testing. Write tests for each component to verify that it renders correctly and that the content is as expected. All tests should be in files ending with `.test.ts`.
*   **Visual Inspection:** Use `pnpm dev` to run the development server and visually inspect the application in your browser.
