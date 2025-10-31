import { defineCollection, z } from 'astro:content';

const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(['getting-started', 'core-concepts', 'agents', 'commands', 'skills', 'use-cases', 'components', 'cli', 'troubleshooting']).optional(),
  order: z.number().optional(),
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
