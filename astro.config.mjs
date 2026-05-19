import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
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
import { fileURLToPath } from 'url';

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

          // Generate llms-full.txt (complete content) — llms.txt is maintained manually in public/
          const distDir = fileURLToPath(dir);
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

          // Write llms-full.txt to dist (llms.txt comes from public/ via Astro copy)
          writeFileSync(join(distDir, 'llms-full.txt'), llmsFullTxt);

          console.log(`✓ llms.txt served from public/ (manually curated)`);
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
  site: 'https://docs.claudekit.cc',

  // Static redirects — these work in SSG (output: 'static') mode because Astro
  // generates redirect HTML stubs at build time. The middleware.ts redirects are
  // DEAD CODE in static mode (middleware only runs server-side); all redirects
  // that matter must live here.
  //
  // Format: { '/old/path': '/new/path' }  (301 by default)
  //
  // KNOWN GAP (wildcard patterns not fully ported):
  // The original middleware.ts used prefix/wildcard rules that Astro static
  // redirects cannot express. The following sub-paths are NOT redirected and
  // will 404 for inbound external links or stale search-engine results:
  //
  //   /docs/troubleshooting/<slug>       → should go to /docs/support/troubleshooting/<slug>
  //   /vi/docs/engineer/commands/git/*   → /vi/docs/engineer/skills/git
  //   /vi/docs/engineer/commands/fix/*   → /vi/docs/engineer/skills/fix
  //   /vi/docs/engineer/commands/core/cook/* → /vi/docs/engineer/skills/cook
  //   /vi/docs/engineer/commands/core/scout/* → /vi/docs/engineer/skills/scout
  //   /vi/docs/engineer/commands/design/* → /vi/docs/engineer/skills/frontend-design
  //   /vi/docs/engineer/commands/content/* → /vi/docs/engineer/skills/copywriting
  //   /vi/docs/engineer/commands/skill/*  → /vi/docs/engineer/skills/skill-creator
  //   /vi/docs/engineer/commands/integrate/* → (no target page yet)
  //
  // Internal links do not use these paths (grep verified 0 hits). Impact is
  // limited to stale external bookmarks / search-index entries.
  // Resolution: enumerate explicit paths once we know the full slug list, or
  // add a Cloudflare Pages _redirects file with glob support.
  //
  // Tracked in: claudekit/claudekit-docs#166
  redirects: {
    // Getting Started path moves
    '/docs/getting-started/greenfield-projects': '/docs/workflows/new-project',
    '/docs/getting-started/brownfield-projects': '/docs/workflows/existing-project',
    '/docs/getting-started/mcp-setup':           '/docs/cli/configuration',
    '/docs/getting-started/gemini':              '/docs/workflows/gemini',

    // Core Concepts section removed — map to nearest equivalent
    '/docs/core-concepts/claude-md':             '/docs/getting-started/concepts',
    '/docs/core-concepts/workflows':             '/docs/workflows',
    '/docs/core-concepts/architecture':          '/docs/engineer/agents',
    '/docs/core-concepts/code-standards':        '/docs/getting-started/concepts',
    '/docs/core-concepts/system-architecture':   '/docs/engineer/agents',

    // Use Cases → Workflows (old URL pattern)
    '/docs/use-cases':                                        '/docs/workflows',
    '/docs/use-cases/adding-feature':                         '/docs/workflows/adding-feature',
    '/docs/use-cases/fixing-bugs':                            '/docs/workflows/fixing-bugs',
    '/docs/use-cases/building-api':                           '/docs/workflows/building-api',
    '/docs/use-cases/implementing-auth':                      '/docs/workflows/implementing-auth',
    '/docs/use-cases/integrating-payment':                    '/docs/workflows/integrating-payment',
    '/docs/use-cases/optimizing-performance':                 '/docs/workflows/optimizing-performance',
    '/docs/use-cases/refactoring-code':                       '/docs/workflows/refactoring-code',
    '/docs/use-cases/understanding-codebases-with-gkg':       '/docs/workflows/understanding-codebases-with-gkg',
    '/docs/use-cases/starting-new-project':                   '/docs/workflows/new-project',

    // Troubleshooting path move
    '/docs/troubleshooting': '/docs/support/troubleshooting',

    // VI: old command paths → skills
    '/vi/docs/engineer/commands/git':             '/vi/docs/engineer/skills/git',
    '/vi/docs/engineer/commands/fix':             '/vi/docs/engineer/skills/fix',
    '/vi/docs/engineer/commands/core/cook':       '/vi/docs/engineer/skills/cook',
    '/vi/docs/engineer/commands/core/code':       '/vi/docs/engineer/skills/cook',
    '/vi/docs/engineer/commands/core/scout':      '/vi/docs/engineer/skills/scout',
    '/vi/docs/engineer/commands/design':          '/vi/docs/engineer/skills/frontend-design',
    '/vi/docs/engineer/commands/content':         '/vi/docs/engineer/skills/copywriting',
    '/vi/docs/engineer/commands/skill':           '/vi/docs/engineer/skills/skill-creator',

    // EN: cook command redirect
    '/docs/engineer/commands/core/cook':          '/docs/engineer/skills/cook',
  },

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
    sitemap(),
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
