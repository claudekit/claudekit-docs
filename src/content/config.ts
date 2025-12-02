import { defineCollection, z } from 'astro:content';

const docsSchema = z.object({
  title: z.string(),
  description: z.string().min(10).max(160), // SEO constraint
  section: z.enum([
    'getting-started',
    'docs',
    'workflows',
    'tools',
    'changelog',
    'support'
  ]),
  category: z.string().optional(), // e.g., 'agents', 'commands/core'
  order: z.number().optional().default(999),
  published: z.boolean().default(true),
  lastUpdated: z.date().optional(),
});

const docs = defineCollection({
  type: 'content',
  schema: docsSchema,
});

const docsVi = defineCollection({
  type: 'content',
  schema: docsSchema,
});

export const collections = {
  docs,
  'docs-vi': docsVi,
};
