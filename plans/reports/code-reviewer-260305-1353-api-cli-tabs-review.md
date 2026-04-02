# Code Review: API and CLI Tabs for Docs Site Header

**Date:** 2026-03-05
**Reviewer:** code-reviewer
**Scope:** 24 files -- 5 infrastructure, 9 EN content, 9 VI content, 1 llms.txt
**Build Status:** PASS (567 pages, 2074 links validated, 0 broken)

## Overall Assessment

Solid implementation. All files follow established patterns, the build passes cleanly, the link validator confirms zero broken internal links, and bilingual content is structurally consistent. A few frontmatter inconsistencies and one CLAUDE.md drift issue worth addressing.

---

## Critical Issues

None.

---

## High Priority

### H1. CLAUDE.md Valid Sections list is stale

**File:** `/Users/duynguyen/www/claudekit/claudekit-docs/CLAUDE.md` (line 66)

The valid sections list reads:
```
getting-started, docs, engineer, marketing, cli, workflows, tools, changelog, support
```

Missing: `api`. Since `api` is now a valid enum value in `src/content/config.ts` and actively used by 12 content files, the CLAUDE.md must be updated to include it. Otherwise future contributors may not realize `api` is a valid section.

**Fix:**
```
- `getting-started`, `docs`, `engineer`, `marketing`, `cli`, `workflows`, `tools`, `changelog`, `support`
+ `getting-started`, `docs`, `engineer`, `marketing`, `cli`, `api`, `workflows`, `tools`, `changelog`, `support`
```

### H2. Zod schema does not include `lang` field

**File:** `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/config.ts`

The `docsSchema` does not define a `lang` field, yet all VI files use `lang: vi` in frontmatter. Astro silently ignores extra fields, so the build passes, but the schema provides no validation. If someone writes `lang: en` (which the CLAUDE.md says EN files should NOT have) or `lang: jp`, there is no type-safety catch.

This is a pre-existing issue (all existing VI docs already do this), not introduced by this change. Noting it for awareness since it compounds with each new VI file added. Consider adding:

```typescript
lang: z.enum(['vi']).optional(), // Only VI files should set this
```

**Severity:** Medium-High (existing tech debt, not a regression)

---

## Medium Priority

### M1. New CLI content pages missing `published: true`

**Files:**
- `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/cli/content-automation.md`
- `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/cli/watch.md`
- `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/cli/architecture.md`
- (and their VI counterparts)

The API pages all include `published: true` in frontmatter, but the CLI pages omit it. This is **functionally fine** because the Zod schema defaults `published` to `true`. However, the inconsistency within the same changeset creates a pattern divergence.

The existing CLI pages (index.md, installation.md, new.md, etc.) also omit `published`, so the new CLI pages are consistent with their section peers. The API pages are just more explicit.

**Verdict:** Not a bug. Consistent within CLI section. No action required unless team prefers explicit `published: true` everywhere.

### M2. New CLI content pages missing `category` field

**Files:** Same 3 EN + 3 VI CLI files listed in M1

The API pages use `category: overview`, `category: keys`, `category: vidcap`, `category: reviewweb` for categorized sidebar layout. The CLI pages omit `category` entirely.

This is **correct** because the CLI section uses `layout: 'flat'` in sidebar-nav-section-config.ts, which does not group by category. Flat layout just sorts by `order`. No issue here.

### M3. Comment typo in Header.astro and SidebarNav.astro

**Files:**
- `/Users/duynguyen/www/claudekit/claudekit-docs/src/components/Header.astro` (line 13)
- `/Users/duynguyen/www/claudekit/claudekit-docs/src/components/SidebarNav.astro` (line 17)

Both contain the comment `// Remove language prefix if present (e.g., /vi/docs -> /ck:docs)` which has a stale `/ck:docs` reference. Should be just `/docs`. Pre-existing issue, not introduced by this change.

---

## Low Priority

### L1. Duplicated `getSectionFromUrl` function

**Files:**
- `/Users/duynguyen/www/claudekit/claudekit-docs/src/components/Header.astro` (lines 12-25)
- `/Users/duynguyen/www/claudekit/claudekit-docs/src/components/SidebarNav.astro` (lines 16-31)

Both components define their own `getSectionFromUrl` with slightly different match logic. The Header version does not detect `engineer` or `marketing` sections individually (maps them to `docs`), while the SidebarNav version does. Both now include `api` and `cli` detection.

This is a pre-existing pattern and may be intentional (Header groups engineer/marketing under "docs" tab, SidebarNav distinguishes them). But could be refactored into a shared utility with a mode parameter. Not a regression.

### L2. Header nav ordering

The new nav items (API, CLI) are placed between "Docs" and "Workflows". This follows a logical grouping: Docs -> API -> CLI -> Workflows -> Tools -> Changelog -> Support. The order makes sense for discoverability.

---

## Verification Results

### Frontmatter Consistency Check

| Field | EN API (6 files) | VI API (6 files) | EN CLI (3 files) | VI CLI (3 files) |
|-------|-------------------|-------------------|-------------------|-------------------|
| `title` | Present | Present (Vietnamese) | Present | Present (Vietnamese) |
| `description` | Present (10-160 chars) | Present (Vietnamese) | Present | Present (Vietnamese) |
| `section` | `api` | `api` | `cli` | `cli` |
| `category` | Correct per group | Matches EN | N/A (flat) | N/A (flat) |
| `order` | Sequential | Matches EN | Sequential | Matches EN |
| `published` | `true` (explicit) | `true` (explicit) | Omitted (default) | Omitted (default) |
| `lang` | Absent | `vi` | Absent | `vi` |

All frontmatter is consistent and correct.

### Sidebar Nav Config Verification

| Config Key | Value | Consistent with Pattern |
|------------|-------|------------------------|
| `api.badge` | `'ClaudeKit API'` | Yes (matches `cli.badge: 'ClaudeKit CLI'`) |
| `api.badgeIcon` | Globe SVG | Yes |
| `api.accentColor` | `var(--color-accent-green, #4ADE80)` | Yes, distinct from other sections |
| `api.badgeStyle` | `'outlined'` | Yes (matches `cli.badgeStyle`) |
| `api.layout` | `'categorized'` | Yes (API has subcategories: overview, keys, vidcap, reviewweb) |
| `api.categoryOrder` | `['overview', 'keys', 'vidcap', 'reviewweb']` | Yes, matches actual content categories |
| `api.categoryIcons` | 4 icons | Yes, one per category |

### Internal Link Verification

**EN API pages** -- all links use `/docs/api/...` format. Verified:
- `/docs/api/overview/authentication` -- valid
- `/docs/api/keys/api-keys` -- valid
- `/docs/api/vidcap/youtube-processing` -- valid
- `/docs/api/reviewweb/web-scraping` -- valid
- `/docs/api/reviewweb/seo-analysis` -- valid
- `/docs/api/overview/introduction` -- valid

**VI API pages** -- all links use `/vi/docs/api/...` format. Verified correct.

**EN CLI pages** -- all links use `/docs/cli/...` format. Verified:
- `/docs/cli/watch` -- valid
- `/docs/cli/architecture` -- valid
- `/docs/cli/content-automation` -- valid
- `/docs/cli/configuration` -- valid (pre-existing page)
- `/docs/cli/installation` -- valid (pre-existing page)

**VI CLI pages** -- all links use `/vi/docs/cli/...` format. Verified correct.

### llms.txt Verification

- API Reference section added with correct structure and URLs
- 3 new CLI pages added (content-automation, watch, architecture)
- All URLs use `https://docs.claudekit.cc/docs/...` format
- URL patterns match actual generated routes

### Build Validation

```
Build: PASS (17.51s)
Pages: 567 generated
Links: 2074 validated, 0 broken
Pagefind: 567 pages indexed
```

---

## Edge Cases Found by Scout

1. **`getSectionFromUrl` in Header does not match `engineer`/`marketing` individually** -- by design, Header groups them under `docs` for the active tab indicator. This means navigating to `/docs/engineer/...` highlights the "Docs" tab, not a separate tab. Consistent behavior.

2. **CLI nav link points to `/docs/cli/`** (index page) while API nav link points to `/docs/api/overview/introduction`. This is intentional: CLI has an index page at `cli/index.md`, while API has no index page and uses the introduction page as its entry point. Both are valid approaches.

3. **The `api` section's `accentColor` uses green** (`#4ADE80`) while most other sections use blue. This is a deliberate design choice for visual distinction. No issue.

4. **Vietnamese API key security section** uses `#xoay-vong-api-key` as anchor in the self-link at line 187 of `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs-vi/api/keys/api-keys.md`. The heading "Xoay Vong API Key" should generate this slug correctly in most markdown processors, but the diacritical marks in the heading "Xoay Vong" vs the Vietnamese heading which has diacritics stripped from the anchor could be a fragile pattern. Worth manual testing.

---

## Positive Observations

1. **Perfect link integrity** -- zero broken links across 2074 validated
2. **Consistent bilingual mirroring** -- every EN API/CLI page has a matching VI counterpart with correct `lang: vi`
3. **Proper use of nav config registry** -- API section added to centralized config following exact same pattern as existing sections; no per-section nav component created
4. **Clean separation** -- API uses categorized layout (suitable for multi-category docs), CLI uses flat layout (suitable for simple page list)
5. **Content quality** -- API docs are well-structured with clear endpoint descriptions, request/response examples, and cross-references
6. **Vietnamese translations** are natural, not machine-sounding, with appropriate technical term retention

---

## Recommended Actions

1. **[H1] Update CLAUDE.md** -- Add `api` to the valid sections list (1 line change)
2. **[H2] Consider adding `lang` to Zod schema** -- Optional, addresses pre-existing tech debt
3. **No blockers** -- all changes are production-ready as-is

---

## Metrics

- Type Coverage: N/A (content/config changes only)
- Test Coverage: N/A (static content)
- Linting Issues: 0 (build passes cleanly)
- Build Time: 17.51s
- Pages Generated: 567
- Internal Links Validated: 2074 (0 broken)
