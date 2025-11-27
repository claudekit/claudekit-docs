// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';

import remarkDirective from 'remark-directive';
import { remarkAdmonitions } from './src/plugins/remark-admonitions.mjs';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    react(),
    tailwind({
      applyBaseStyles: false, // We'll use our custom CSS
    }),
  ],
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath, remarkDirective, remarkAdmonitions],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['heading-anchor'],
          },
        },
      ],
      rehypeKatex,
    ],
    shikiConfig: {
      themes: {
        light: 'light-plus',
        dark: 'one-dark-pro',
      },
      wrap: true,
    },
  },
  output: 'static', // SSG for documentation
  // Path aliases will be handled by TypeScript
});
