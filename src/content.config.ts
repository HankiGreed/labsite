import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const imagePath = z.string().min(1);

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().int(),
    featured: z.boolean(),
    image: imagePath.optional(),
  }),
});

const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    group: z.enum(["leadership", "researchers", "students", "alumni"]),
    order: z.number().int(),
    photo: imagePath.optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    journal: z.string().default(""),
    year: z.number().int(),
    order: z.number().int().optional(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    featured: z.boolean(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    url: z.string().url().optional(),
    image: imagePath.optional(),
    featured: z.boolean(),
  }),
});

const pathogens = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pathogens" }),
  schema: z.object({
    name: z.string(),
    group: z.enum([
      "respiratory",
      "antimicrobial-resistant",
      "hypervirulent",
      "endodontic-other",
      "fungal",
    ]),
    summary: z.string(),
    order: z.number().int(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    funder: z.string().optional(),
    amount: z.string().optional(),
    period: z.string().optional(),
    role: z.string().optional(),
    order: z.number().int(),
  }),
});

const achievements = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/achievements" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    summary: z.string(),
    featured: z.boolean(),
  }),
});

export const collections = {
  research,
  people,
  publications,
  news,
  pathogens,
  projects,
  achievements,
};
