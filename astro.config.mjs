// @ts-nocheck
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';

import remarkDirective from 'remark-directive';
import { remarkAdmonitions } from './src/plugins/remark-admonitions.mjs';
import { writeFileSync } from 'fs';
import { join } from 'path';

// Custom integrations
import buildTimeInternalLinkValidator from './src/integrations/build-time-internal-link-validator.ts';
import { readdir, readFile } from 'fs/promises';

function llmsTxtGenerator() {
  return {
    name: 'llms-txt-generator',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        try {
          // Read content collection directly from file system
          const contentDir = join(process.cwd(), 'src', 'content', 'docs');
          const allDocs = [];

          async function collectDocs(dirPath, section = '') {
            const entries = await readdir(dirPath, { withFileTypes: true });

            for (const entry of entries) {
              if (entry.isDirectory()) {
                await collectDocs(join(dirPath, entry.name), entry.name);
              } else if (entry.name.endsWith('.md')) {
                const filePath = join(dirPath, entry.name);
                const content = await readFile(filePath, 'utf-8');
                const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

                if (frontmatterMatch) {
                  const frontmatter = {};
                  const lines = frontmatterMatch[1].split('\n');
                  for (const line of lines) {
                    const colonIndex = line.indexOf(':');
                    if (colonIndex > 0) {
                      const key = line.slice(0, colonIndex).trim();
                      let value = line.slice(colonIndex + 1).trim();

                      // Handle quotes and boolean conversion
                      if (value.startsWith('"') && value.endsWith('"')) {
                        value = value.slice(1, -1);
                      } else if (value === 'true') {
                        value = true;
                      } else if (value === 'false') {
                        value = false;
                      }

                      frontmatter[key] = value;
                    }
                  }

                  if (frontmatter.published !== false) {
                    const slug = section ? `${section}/${entry.name.slice(0, -3)}` : entry.name.slice(0, -3);
                    const body = content.replace(/^---\n[\s\S]*?\n---\n/, '');

                    allDocs.push({
                      slug,
                      data: {
                        title: frontmatter.title || 'Untitled',
                        description: frontmatter.description || '',
                        section: frontmatter.section || section,
                        category: frontmatter.category || null,
                        order: frontmatter.order || 999,
                        published: frontmatter.published !== false
                      },
                      body
                    });
                  }
                }
              }
            }
          }

          await collectDocs(contentDir);

          // Sort by section → category → order
          const sorted = allDocs.sort((a, b) => {
            if (a.data.section !== b.data.section) {
              return a.data.section.localeCompare(b.data.section);
            }
            if (a.data.category !== b.data.category) {
              return (a.data.category || '').localeCompare(b.data.category || '');
            }
            return (a.data.order || 999) - (b.data.order || 999);
          });

          // Generate llms.txt (index with links)
          const llmsTxt = `# ClaudeKit Documentation

> Production-grade framework for Claude Code with agents, commands, and skills

## Sections

${generateSectionIndex(sorted)}

## All Pages

${sorted.map(doc => `- [${doc.data.title}](https://docs.claudekit.cc/docs/${doc.slug}): ${doc.data.description}`).join('\n')}
`;

          // Generate llms-full.txt (complete content)
          const llmsFullTxt = `# ClaudeKit Documentation (Complete)

Generated: ${new Date().toISOString()}
Total Pages: ${sorted.length}

---

${sorted.map(doc => `
# ${doc.data.title}

Section: ${doc.data.section}
Category: ${doc.data.category || 'N/A'}
URL: https://docs.claudekit.cc/docs/${doc.slug}

${doc.body}

---
`).join('\n')}`;

          // Write files
          writeFileSync(join(dir.pathname, 'llms.txt'), llmsTxt);
          writeFileSync(join(dir.pathname, 'llms-full.txt'), llmsFullTxt);

          console.log(`✓ Generated llms.txt (${Math.round(llmsTxt.length / 1024)}KB)`);
          console.log(`✓ Generated llms-full.txt (${Math.round(llmsFullTxt.length / 1024)}KB)`);
        } catch (error) {
          console.error('Error generating llms.txt files:', error);
        }
      },
    },
  };
}

function generateSectionIndex(docs) {
  const sections = {
    'getting-started': [],
    'docs': [],
    'workflows': [],
    'changelog': [],
    'support': [],
  };

  docs.forEach(doc => {
    const sectionKey = doc.data.section || 'docs';
    if (sections[sectionKey]) {
      sections[sectionKey].push(doc);
    }
  });

  return Object.entries(sections)
    .filter(([_, docs]) => docs.length > 0)
    .map(([section, docs]) => `
### ${section.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}

${docs.slice(0, 5).map(doc => `- [${doc.data.title}](https://docs.claudekit.cc/docs/${doc.slug})`).join('\n')}
${docs.length > 5 ? `- [... ${docs.length - 5} more pages](https://docs.claudekit.cc/docs/${section})` : ''}
  `).join('\n');
}

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
    llmsTxtGenerator(),
    buildTimeInternalLinkValidator(),
    pagefind(), // Must be LAST - runs after build to index HTML
  ],
  build: {
    format: 'directory', // Required for Pagefind proper URL indexing
  },
  markdown: {
    remarkPlugins: [remarkGfm, [remarkMath, { singleDollarTextMath: false }], remarkDirective, remarkAdmonitions],
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
      [rehypeKatex, { strict: false }],
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
