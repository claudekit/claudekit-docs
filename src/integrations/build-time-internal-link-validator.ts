import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

/**
 * Astro integration that validates all internal links at build time.
 * Scans markdown content for internal links and verifies they resolve to valid pages.
 */
export default function buildTimeInternalLinkValidator() {
  return {
    name: 'build-time-internal-link-validator',
    hooks: {
      'astro:build:start': async () => {
        console.log('[Link Validator] Starting internal link validation...');

        try {
          const baseDir = process.cwd();
          const contentDirs = [
            { path: join(baseDir, 'src', 'content', 'docs'), urlPrefix: '/docs' },
            { path: join(baseDir, 'src', 'content', 'docs-vi'), urlPrefix: '/vi/docs' },
          ];

          // Build set of valid slugs
          const validSlugs = new Set<string>();

          for (const { path: contentPath, urlPrefix } of contentDirs) {
            await collectValidSlugs(contentPath, '', urlPrefix, validSlugs);
          }

          console.log(`[Link Validator] Found ${validSlugs.size} valid pages`);

          // Scan all files for links and validate
          const brokenLinks: { file: string; link: string }[] = [];
          let totalLinks = 0;
          let filesScanned = 0;

          for (const { path: contentPath } of contentDirs) {
            await scanFilesForLinks(contentPath, validSlugs, brokenLinks, (links) => {
              totalLinks += links;
              filesScanned++;
            });
          }

          // Report results
          if (brokenLinks.length > 0) {
            console.error('\n[Link Validator] ❌ BROKEN LINKS FOUND:\n');
            brokenLinks.forEach(({ file, link }) => {
              console.error(`  [BROKEN LINK] ${file} → ${link}`);
            });
            console.error(`\n[Link Validator] Summary: ${brokenLinks.length} broken link(s) found across ${filesScanned} file(s)`);
            throw new Error(`Build failed: ${brokenLinks.length} broken internal link(s) detected`);
          }

          console.log(`[Link Validator] ✅ All ${totalLinks} internal links validated across ${filesScanned} files`);
        } catch (error) {
          if (error instanceof Error && error.message.includes('Build failed')) {
            throw error;
          }
          console.error('[Link Validator] Error during validation:', error);
          throw error;
        }
      },
    },
  };
}

/**
 * Recursively collect all valid slugs from content directory.
 */
async function collectValidSlugs(
  dirPath: string,
  relativePath: string,
  urlPrefix: string,
  validSlugs: Set<string>
): Promise<void> {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const newRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
        await collectValidSlugs(join(dirPath, entry.name), newRelativePath, urlPrefix, validSlugs);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        const filename = entry.name.replace(/\.mdx?$/, '');

        if (filename === 'index') {
          // index.md creates routes for both /path and /path/
          if (relativePath) {
            validSlugs.add(`${urlPrefix}/${relativePath}`);
            validSlugs.add(`${urlPrefix}/${relativePath}/`);
            // Also accept /index suffix links
            validSlugs.add(`${urlPrefix}/${relativePath}/index`);
          } else {
            // Root index
            validSlugs.add(urlPrefix);
            validSlugs.add(`${urlPrefix}/`);
            validSlugs.add(`${urlPrefix}/index`);
          }
        } else {
          const slug = relativePath ? `${relativePath}/${filename}` : filename;
          validSlugs.add(`${urlPrefix}/${slug}`);
          validSlugs.add(`${urlPrefix}/${slug}/`);
        }
      }
    }
  } catch (error) {
    // Silently skip if directory doesn't exist
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error;
    }
  }
}

/**
 * Scan all markdown files for internal links and validate them.
 */
async function scanFilesForLinks(
  dirPath: string,
  validSlugs: Set<string>,
  brokenLinks: { file: string; link: string }[],
  onLinksFound: (count: number) => void
): Promise<void> {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        await scanFilesForLinks(join(dirPath, entry.name), validSlugs, brokenLinks, onLinksFound);
      } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
        const filePath = join(dirPath, entry.name);
        await validateFileLinks(filePath, validSlugs, brokenLinks, onLinksFound);
      }
    }
  } catch (error) {
    // Silently skip if directory doesn't exist
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error;
    }
  }
}

/**
 * Validate all internal links in a single file.
 */
async function validateFileLinks(
  filePath: string,
  validSlugs: Set<string>,
  brokenLinks: { file: string; link: string }[],
  onLinksFound: (count: number) => void
): Promise<void> {
  const content = await readFile(filePath, 'utf-8');

  // Skip frontmatter section
  let bodyContent = content.replace(/^---\n[\s\S]*?\n---\n/, '');

  // Strip fenced code blocks to avoid validating example links
  bodyContent = bodyContent.replace(/```[\s\S]*?```/g, '');

  // Extract internal links - markdown syntax [text](/docs/...) or [text](/vi/docs/...)
  const markdownLinkRegex = /\[.*?\]\((\/(?:vi\/)?docs\/[^)\s]+)\)/g;

  // Extract internal links - MDX component syntax href="/docs/..." or href="/vi/docs/..."
  const hrefLinkRegex = /href=["'](\/(?:vi\/)?docs\/[^"'\s]+)["']/g;

  const links = new Set<string>();

  let match;
  while ((match = markdownLinkRegex.exec(bodyContent)) !== null) {
    links.add(match[1]);
  }

  while ((match = hrefLinkRegex.exec(bodyContent)) !== null) {
    links.add(match[1]);
  }

  if (links.size > 0) {
    onLinksFound(links.size);
  }

  // Validate each link
  for (const link of links) {
    if (!isValidInternalLink(link, validSlugs)) {
      const relativeFilePath = filePath.replace(process.cwd() + '/', '');
      brokenLinks.push({ file: relativeFilePath, link });
    }
  }
}

/**
 * Check if an internal link is valid.
 */
function isValidInternalLink(link: string, validSlugs: Set<string>): boolean {
  // Skip validation for static assets (images, PDFs, etc.)
  // These are served from public/ and handled by Astro's static file serving
  const staticExtensions = /\.(png|jpg|jpeg|gif|svg|webp|pdf|zip|mp4|webm)$/i;
  if (staticExtensions.test(link)) {
    return true; // Assume static assets exist, let 404s be caught at runtime
  }

  // Strip anchor and query params
  let cleanLink = link.replace(/#.*$/, '').replace(/\?.*$/, '');

  // Strip trailing slash
  cleanLink = cleanLink.replace(/\/$/, '');

  // Check if the link exists in valid slugs
  return validSlugs.has(cleanLink) || validSlugs.has(`${cleanLink}/`);
}
