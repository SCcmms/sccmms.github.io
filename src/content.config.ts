import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/case-studies" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    note: z.string().optional(),
    img: z.string(),
    href: z.string(),
  }),
});

export const collections = { caseStudies };
