/**
 * check-sitemap-coverage.ts
 *
 * Post-build gate: every URL listed in the site's sitemaps must have a
 * corresponding dist/<path>/index.html file. Catches the "sitemap lists pages
 * that 404" bug without making external HTTP requests.
 *
 * Astro emits either:
 *   - dist/sitemap-0.xml          (single sitemap, < 45k URLs)
 *   - dist/sitemap-index.xml      (index pointing to sitemap-0.xml, sitemap-1.xml, …)
 *
 * This script reads sitemap-index.xml first (if present), follows every child
 * sitemap listed there, and aggregates all <loc> values. Falls back to
 * sitemap-0.xml if the index does not exist.
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

import { readFileSync, existsSync, readdirSync } from 'fs';
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
 * Parse all <loc> values from a sitemap index XML string.
 * A sitemap index contains <sitemap><loc>…</loc></sitemap> entries, each
 * pointing to a child sitemap file (e.g. sitemap-0.xml, sitemap-1.xml).
 * Returns the bare file names (no path prefix) so callers can join with distDir.
 */
export function extractChildSitemapLocs(indexXml: string): string[] {
  const locs = extractUrlsFromSitemap(indexXml);
  // locs look like "https://docs.claudekit.cc/sitemap-0.xml"
  // We only need the file name to read from dist/
  return locs.map(loc => {
    const parts = loc.split('/');
    return parts[parts.length - 1];
  });
}

/**
 * Collect all page URLs from the dist/ directory's sitemaps.
 *
 * Strategy:
 *   1. If dist/sitemap-index.xml exists, follow every child <loc> listed in it.
 *   2. Otherwise fall back to dist/sitemap-0.xml.
 *   3. As a final safety net, glob all dist/sitemap-*.xml files (excluding the
 *      index) and union their URLs — handles any edge case where the index is
 *      missing but multiple shards exist.
 */
export function collectAllSitemapUrls(distDir: string): string[] {
  const indexPath = join(distDir, 'sitemap-index.xml');
  const fallbackPath = join(distDir, 'sitemap-0.xml');

  const allUrls: string[] = [];
  const processedFiles = new Set<string>();

  function readSitemap(filePath: string): void {
    if (processedFiles.has(filePath)) return;
    processedFiles.add(filePath);

    if (!existsSync(filePath)) return;
    const xml = readFileSync(filePath, 'utf-8');
    const urls = extractUrlsFromSitemap(xml);
    allUrls.push(...urls);
  }

  if (existsSync(indexPath)) {
    const indexXml = readFileSync(indexPath, 'utf-8');
    const childFiles = extractChildSitemapLocs(indexXml);
    for (const childFile of childFiles) {
      readSitemap(join(distDir, childFile));
    }
  } else if (existsSync(fallbackPath)) {
    readSitemap(fallbackPath);
  } else {
    // Last-resort: read all sitemap-*.xml files (excluding index) found in distDir
    try {
      const files = readdirSync(distDir);
      const sitemapFiles = files.filter(
        f => f.startsWith('sitemap-') && f.endsWith('.xml') && f !== 'sitemap-index.xml'
      );
      for (const file of sitemapFiles.sort()) {
        readSitemap(join(distDir, file));
      }
    } catch {
      // Unreadable dist dir — caller will report no sitemap found
    }
  }

  // Deduplicate while preserving order
  return [...new Set(allUrls)];
}

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

  // Determine which sitemap entry-point to report in error messages
  const indexPath = join(distDir, 'sitemap-index.xml');
  const fallbackPath = join(distDir, 'sitemap-0.xml');
  const hasSitemap = existsSync(indexPath) || existsSync(fallbackPath);

  if (!hasSitemap) {
    console.error(`[X] No sitemap found in: ${distDir}`);
    console.error('    Expected sitemap-index.xml (split) or sitemap-0.xml (single).');
    console.error('    Run "bun run build" first.');
    process.exit(1);
  }

  const entryPoint = existsSync(indexPath) ? 'sitemap-index.xml' : 'sitemap-0.xml';
  console.log(`[i] Reading sitemaps from ${distDir}/${entryPoint} ...`);

  const allUrls = collectAllSitemapUrls(distDir);
  // Build a synthetic XML for checkSitemapCoverage — reuse the existing function
  // rather than duplicating the coverage logic
  const syntheticXml = allUrls.map(u => `<url><loc>${u}</loc></url>`).join('\n');
  const result = checkSitemapCoverage(syntheticXml, distDir, siteUrl);
  console.log(`[i] ${allUrls.length} total URLs collected across all sitemap shards.`);

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
