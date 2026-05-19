/**
 * check-sitemap-coverage.ts
 *
 * Post-build gate: every URL in dist/sitemap-0.xml must have a corresponding
 * dist/<path>/index.html file. Catches the "sitemap lists pages that 404" bug
 * without making external HTTP requests.
 *
 * Usage:
 *   bun run scripts/check-sitemap-coverage.ts [--dir <dist-path>] [--site <siteUrl>]
 *
 * Defaults:
 *   --dir   dist/
 *   --site  https://docs.claudekit.cc
 *
 * Exit codes:
 *   0 — all sitemap URLs covered by dist files
 *   1 — one or more sitemap URLs have no matching dist file
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface CoverageResult {
  total: number;
  covered: number;
  missing: string[];
}

// ---------------------------------------------------------------------------
// Core logic (exported for tests)
// ---------------------------------------------------------------------------

/**
 * Parse all <loc> values from a sitemap XML string.
 */
export function extractUrlsFromSitemap(xml: string): string[] {
  const urls: string[] = [];
  // Match <loc>...</loc> with optional surrounding whitespace
  const locPattern = /<loc>\s*([^<]+?)\s*<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = locPattern.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  return urls;
}

/**
 * Convert a fully-qualified sitemap URL to the expected dist-relative path.
 *
 * Astro builds with `format: 'directory'`, so every page becomes:
 *   /docs/getting-started  →  dist/docs/getting-started/index.html
 *   /                      →  dist/index.html
 */
export function urlToDistPath(url: string, siteUrl: string): string {
  // Strip site origin
  const origin = siteUrl.replace(/\/$/, '');
  let pathname = url.startsWith(origin) ? url.slice(origin.length) : url;

  // Normalize: strip leading/trailing slash
  pathname = pathname.replace(/^\//, '').replace(/\/$/, '');

  if (!pathname) {
    return 'index.html';
  }
  return `${pathname}/index.html`;
}

/**
 * Check that every URL in the sitemap has a built HTML file in distDir.
 */
export function checkSitemapCoverage(
  sitemapXml: string,
  distDir: string,
  siteUrl: string
): CoverageResult {
  const urls = extractUrlsFromSitemap(sitemapXml);
  const missing: string[] = [];

  for (const url of urls) {
    const relPath = urlToDistPath(url, siteUrl);
    const absPath = join(distDir, relPath);
    if (!existsSync(absPath)) {
      missing.push(url);
    }
  }

  return {
    total: urls.length,
    covered: urls.length - missing.length,
    missing,
  };
}

// ---------------------------------------------------------------------------
// CLI entrypoint
// ---------------------------------------------------------------------------

function parseArgs(args: string[]): { distDir: string; siteUrl: string } {
  let distDir = join(process.cwd(), 'dist');
  let siteUrl = 'https://docs.claudekit.cc';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--dir' && args[i + 1]) {
      const val = args[i + 1];
      distDir = val.startsWith('/') ? val : join(process.cwd(), val);
      i++;
    } else if (args[i] === '--site' && args[i + 1]) {
      siteUrl = args[i + 1];
      i++;
    }
  }

  return { distDir, siteUrl };
}

if (import.meta.main) {
  const { distDir, siteUrl } = parseArgs(process.argv.slice(2));

  const sitemapPath = join(distDir, 'sitemap-0.xml');

  if (!existsSync(sitemapPath)) {
    console.error(`[X] Sitemap not found: ${sitemapPath}`);
    console.error('    Run "bun run build" first.');
    process.exit(1);
  }

  const sitemapXml = readFileSync(sitemapPath, 'utf-8');
  const result = checkSitemapCoverage(sitemapXml, distDir, siteUrl);

  if (result.missing.length === 0) {
    console.log(`[OK] All ${result.total} sitemap URLs have matching dist files.`);
    process.exit(0);
  }

  console.error(`[X] ${result.missing.length} of ${result.total} sitemap URLs have no dist file:\n`);
  for (const url of result.missing) {
    const rel = urlToDistPath(url, siteUrl);
    console.error(`  ${url}`);
    console.error(`    expected: dist/${rel}`);
  }
  console.error(`\n  Fix: ensure these pages are generated during build, or remove`);
  console.error(`       them from the sitemap if they are intentionally excluded.`);
  process.exit(1);
}
