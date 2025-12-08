import { defineCollection, z } from "astro:content";
import { CATEGORIES } from "@/data/categories";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(true),
      heroImage: image(),
      title: z.string().max(100),
      category: z.enum(CATEGORIES),
      description: z.string(),
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      tags: z.array(z.string()),
      keywords: z.array(z.string()),
    }),
});

const projects = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      description: z.string(),
      pubDate: z.date(),
      featuredImage: image(),
      slideImages: z.array(image()).max(7).optional(),
      link: z.string(),
    }),
});

const services = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      description: z.string(),
      category: z.string(),
      thumbnail: image(),
      link: z.string(),
      tags: z.array(z.string()),
    }),
});

const experiences = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      role: z.string(),
      logo: z.string(),
      startDate: z.string(),
      endDate: z.string().optional(),
      current: z.boolean().default(false),
      order: z.number(),
    }),
});

const skills = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    icon: z.string().optional(),
    order: z.number(),
    skills: z.array(z.string()),
  }),
});

const education = defineCollection({
  type: "content",
  schema: z.object({
    degree: z.string(),
    field: z.string(),
    institution: z.string(),
    logo: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    location: z.string(),
    order: z.number(),
  }),
});

const slides = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pdfPath: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  blog,
  projects,
  services,
  experiences,
  skills,
  education,
  slides,
};
