/**
 * Tests for check-sitemap-coverage.ts
 *
 * Verifies every URL listed in the sitemap XML has a corresponding built HTML
 * file in the dist/ directory. Catches the "sitemap lists pages that 404" bug.
 */
import { describe, test, expect, beforeAll, afterAll } from 'bun:test';
import { mkdirSync, writeFileSync, rmSync } from 'fs';
import { join } from 'path';
import {
  extractUrlsFromSitemap,
  extractChildSitemapLocs,
  collectAllSitemapUrls,
  urlToDistPath,
  checkSitemapCoverage,
} from '../scripts/check-sitemap-coverage';

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const TMP = join(import.meta.dir, '__tmp_sitemap_test__');

function makeDist(urlPaths: string[]) {
  // Each URL path becomes dist/<path>/index.html (Astro directory format)
  for (const p of urlPaths) {
    // Strip leading slash; empty = root
    const rel = p.replace(/^\//, '') || '';
    const dir = join(TMP, 'dist', rel);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), `<html><body>${p}</body></html>`);
  }
}

beforeAll(() => {
  mkdirSync(TMP, { recursive: true });
});

afterAll(() => {
  rmSync(TMP, { recursive: true, force: true });
});

// ---------------------------------------------------------------------------
// Unit tests — extractUrlsFromSitemap
// ---------------------------------------------------------------------------

describe('extractUrlsFromSitemap', () => {
  test('extracts all <loc> entries', () => {
    const xml = `<?xml version="1.0"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://docs.claudekit.cc/</loc></url>
  <url><loc>https://docs.claudekit.cc/docs/getting-started</loc></url>
  <url><loc>https://docs.claudekit.cc/docs/cli/install</loc></url>
</urlset>`;
    const urls = extractUrlsFromSitemap(xml);
    expect(urls).toEqual([
      'https://docs.claudekit.cc/',
      'https://docs.claudekit.cc/docs/getting-started',
      'https://docs.claudekit.cc/docs/cli/install',
    ]);
  });

  test('returns empty array for empty sitemap', () => {
    const xml = `<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`;
    expect(extractUrlsFromSitemap(xml)).toEqual([]);
  });

  test('handles self-closing url tags gracefully', () => {
    // Sitemap that only has loc elements without surrounding whitespace
    const xml = `<urlset><url><loc>https://example.com/page</loc></url></urlset>`;
    const urls = extractUrlsFromSitemap(xml);
    expect(urls).toContain('https://example.com/page');
  });
});

// ---------------------------------------------------------------------------
// Unit tests — extractChildSitemapLocs
// ---------------------------------------------------------------------------

describe('extractChildSitemapLocs', () => {
  test('extracts child sitemap file names from a sitemap index XML', () => {
    const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://docs.claudekit.cc/sitemap-0.xml</loc></sitemap>
  <sitemap><loc>https://docs.claudekit.cc/sitemap-1.xml</loc></sitemap>
</sitemapindex>`;
    const childFiles = extractChildSitemapLocs(indexXml);
    expect(childFiles).toEqual(['sitemap-0.xml', 'sitemap-1.xml']);
  });

  test('returns empty array for empty sitemap index', () => {
    const indexXml = `<?xml version="1.0"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></sitemapindex>`;
    expect(extractChildSitemapLocs(indexXml)).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// Integration tests — collectAllSitemapUrls
// ---------------------------------------------------------------------------

describe('collectAllSitemapUrls', () => {
  const siteUrl = 'https://docs.claudekit.cc';

  test('reads sitemap-index.xml and follows child sitemaps', () => {
    const distDir = join(TMP, 'dist_index');
    rmSync(distDir, { recursive: true, force: true });
    mkdirSync(distDir, { recursive: true });

    // Shard 0
    writeFileSync(join(distDir, 'sitemap-0.xml'), `<urlset>
<url><loc>${siteUrl}/</loc></url>
<url><loc>${siteUrl}/docs/getting-started</loc></url>
</urlset>`);
    // Shard 1
    writeFileSync(join(distDir, 'sitemap-1.xml'), `<urlset>
<url><loc>${siteUrl}/docs/engineer</loc></url>
</urlset>`);
    // Index
    writeFileSync(join(distDir, 'sitemap-index.xml'), `<sitemapindex>
<sitemap><loc>${siteUrl}/sitemap-0.xml</loc></sitemap>
<sitemap><loc>${siteUrl}/sitemap-1.xml</loc></sitemap>
</sitemapindex>`);

    const urls = collectAllSitemapUrls(distDir);
    expect(urls).toContain(`${siteUrl}/`);
    expect(urls).toContain(`${siteUrl}/docs/getting-started`);
    expect(urls).toContain(`${siteUrl}/docs/engineer`);
    expect(urls).toHaveLength(3);
  });

  test('falls back to sitemap-0.xml when no sitemap-index.xml exists', () => {
    const distDir = join(TMP, 'dist_fallback');
    rmSync(distDir, { recursive: true, force: true });
    mkdirSync(distDir, { recursive: true });

    writeFileSync(join(distDir, 'sitemap-0.xml'), `<urlset>
<url><loc>${siteUrl}/</loc></url>
<url><loc>${siteUrl}/docs/cli</loc></url>
</urlset>`);

    const urls = collectAllSitemapUrls(distDir);
    expect(urls).toContain(`${siteUrl}/`);
    expect(urls).toContain(`${siteUrl}/docs/cli`);
    expect(urls).toHaveLength(2);
  });

  test('deduplicates URLs that appear in multiple shards', () => {
    const distDir = join(TMP, 'dist_dedup');
    rmSync(distDir, { recursive: true, force: true });
    mkdirSync(distDir, { recursive: true });

    writeFileSync(join(distDir, 'sitemap-0.xml'), `<urlset>
<url><loc>${siteUrl}/docs/page</loc></url>
</urlset>`);
    writeFileSync(join(distDir, 'sitemap-1.xml'), `<urlset>
<url><loc>${siteUrl}/docs/page</loc></url>
</urlset>`);
    writeFileSync(join(distDir, 'sitemap-index.xml'), `<sitemapindex>
<sitemap><loc>${siteUrl}/sitemap-0.xml</loc></sitemap>
<sitemap><loc>${siteUrl}/sitemap-1.xml</loc></sitemap>
</sitemapindex>`);

    const urls = collectAllSitemapUrls(distDir);
    expect(urls).toHaveLength(1);
  });

  test('returns empty array when no sitemap files exist', () => {
    const distDir = join(TMP, 'dist_empty');
    rmSync(distDir, { recursive: true, force: true });
    mkdirSync(distDir, { recursive: true });

    const urls = collectAllSitemapUrls(distDir);
    expect(urls).toHaveLength(0);
  });
});

// ---------------------------------------------------------------------------
// Unit tests — urlToDistPath
// ---------------------------------------------------------------------------

describe('urlToDistPath', () => {
  const siteUrl = 'https://docs.claudekit.cc';

  test('converts root URL to dist/index.html', () => {
    expect(urlToDistPath(`${siteUrl}/`, siteUrl)).toBe('index.html');
  });

  test('converts path to dist/<path>/index.html', () => {
    expect(urlToDistPath(`${siteUrl}/docs/getting-started`, siteUrl)).toBe(
      'docs/getting-started/index.html'
    );
  });

  test('handles trailing slash in URL', () => {
    expect(urlToDistPath(`${siteUrl}/docs/cli/`, siteUrl)).toBe('docs/cli/index.html');
  });

  test('strips siteUrl prefix correctly', () => {
    expect(urlToDistPath(`${siteUrl}/docs/engineer/agents`, siteUrl)).toBe(
      'docs/engineer/agents/index.html'
    );
  });
});

// ---------------------------------------------------------------------------
// Integration tests — checkSitemapCoverage
// ---------------------------------------------------------------------------

describe('checkSitemapCoverage', () => {
  const siteUrl = 'https://docs.claudekit.cc';

  test('returns no missing pages when all sitemap URLs have matching dist files', () => {
    const distDir = join(TMP, 'dist_full');
    makeDist.call(null, ['/'].concat(['/docs/getting-started', '/docs/cli']));

    // Build the dist dir fresh for this test
    rmSync(distDir, { recursive: true, force: true });
    mkdirSync(distDir, { recursive: true });

    const pages = ['/', '/docs/getting-started', '/docs/cli'];
    for (const p of pages) {
      const rel = p.replace(/^\//, '') || '';
      const dir = join(distDir, rel);
      mkdirSync(dir, { recursive: true });
      writeFileSync(join(dir, 'index.html'), `<html/>`);
    }

    const sitemapXml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `<url><loc>${siteUrl}${p}</loc></url>`).join('\n')}
</urlset>`;

    const result = checkSitemapCoverage(sitemapXml, distDir, siteUrl);
    expect(result.missing).toHaveLength(0);
    expect(result.total).toBe(3);
  });

  test('returns missing pages when dist files are absent', () => {
    const distDir = join(TMP, 'dist_partial');
    rmSync(distDir, { recursive: true, force: true });
    mkdirSync(distDir, { recursive: true });

    // Only build root page
    writeFileSync(join(distDir, 'index.html'), '<html/>');

    const sitemapXml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>${siteUrl}/</loc></url>
<url><loc>${siteUrl}/docs/getting-started</loc></url>
<url><loc>${siteUrl}/docs/engineer/agents</loc></url>
</urlset>`;

    const result = checkSitemapCoverage(sitemapXml, distDir, siteUrl);
    expect(result.missing).toHaveLength(2);
    expect(result.missing).toContain(`${siteUrl}/docs/getting-started`);
    expect(result.missing).toContain(`${siteUrl}/docs/engineer/agents`);
  });

  test('result includes total count', () => {
    const distDir = join(TMP, 'dist_count');
    rmSync(distDir, { recursive: true, force: true });
    mkdirSync(distDir, { recursive: true });

    const sitemapXml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>${siteUrl}/a</loc></url>
<url><loc>${siteUrl}/b</loc></url>
<url><loc>${siteUrl}/c</loc></url>
</urlset>`;

    const result = checkSitemapCoverage(sitemapXml, distDir, siteUrl);
    expect(result.total).toBe(3);
  });
});
