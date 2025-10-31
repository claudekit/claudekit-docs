import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['getting-started', 'core-concepts', 'agents', 'commands', 'skills', 'use-cases', 'components', 'cli', 'troubleshooting']).optional(),
    order: z.number().optional(),
    published: z.boolean().default(true),
    lastUpdated: z.date().optional(),
  }),
});

export const collections = {
  docs,
};
