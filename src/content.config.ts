import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryIds } from './data/categories';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    updateNote: z.string().optional(),
    category: z.enum(categoryIds),
    translationKey: z.string(),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});

export const collections = { posts };
