# Vietnamese Translation Gap Analysis

**Date**: 2025-11-29
**Researcher**: researcher-agent
**Scope**: Compare EN docs vs VI docs for missing translations

---

## Executive Summary

- **Total EN files**: 112
- **Total VI files**: 94
- **Missing VI translations**: 26 files (23.2%)
- **Orphaned VI files**: 8 files (exist in VI but not EN structure)

**Status**: Significant gaps in core sections. Commands restructured in EN but VI still uses flat structure.

---

## Critical Missing Translations (26 files)

### 1. Getting Started (4 missing)
- `getting-started/index.md`
- `getting-started/concepts.md`
- `getting-started/upgrade-guide.md`
- `getting-started/why-claudekit.md`

**Impact**: Users miss overview page, core concepts, upgrade paths, value prop.

### 2. Commands (8 missing - NEW nested structure)
EN migrated to nested structure, VI still flat. Missing:
- `commands/core/ask.md` *(VI has flat `commands/ask.md`)*
- `commands/core/bootstrap.md` *(VI has flat `commands/bootstrap.md`)*
- `commands/core/cook.md` *(VI has flat `commands/cook.md`)*
- `commands/core/debug.md` *(VI has flat `commands/debug.md`)*
- `commands/core/journal.md` *(VI has flat `commands/journal.md`)*
- `commands/core/scout.md` *(VI has flat `commands/scout.md`)*
- `commands/core/watzup.md` *(VI has flat `commands/watzup.md`)*
- `commands/docs-cmd/init.md` *(VI has flat `commands/init.md`)*
- `commands/docs-cmd/summarize.md` *(VI has flat `commands/summarize.md`)*
- `commands/docs-cmd/update.md` *(VI has flat `commands/update.md`)*
- `commands/git/commit-push.md` *(VI has flat `commands/commit-push.md`)*
- `commands/git/commit.md` *(VI has flat `commands/commit.md`)*
- `commands/git/pull-request.md` *(VI has flat `commands/pull-request.md`)*
- `commands/integrate/polar.md` *(VI has flat `commands/polar.md`)*
- `commands/integrate/sepay.md` *(VI has flat `commands/sepay.md`)*
- `commands/plan/ci.md` *(VI has flat `commands/ci.md`)*
- `commands/plan/two.md` *(VI has flat `commands/two.md`)*
- `commands/skill/create.md` *(VI has flat `commands/create.md`)*
- `commands/skill/fix-logs.md` *(VI has flat `commands/fix-logs.md`)*

**Note**: VI has these as flat files. Need migration to nested structure + re-translation.

### 3. Skills (6 missing - NEW nested structure)
EN migrated to category-based structure. Missing:
- `skills/ai/canvas-design.md` *(VI has flat `skills/canvas-design.md`)*
- `skills/ai/gemini-vision.md` *(VI has flat `skills/gemini-vision.md`)*
- `skills/auth/better-auth.md` *(VI has flat `skills/better-auth.md`)*
- `skills/backend/docker.md` *(VI has flat `skills/docker.md`)*
- `skills/backend/postgresql-psql.md` *(VI has flat `skills/postgresql-psql.md`)*
- `skills/ecommerce/shopify.md` *(VI has flat `skills/shopify.md`)*
- `skills/frontend/nextjs.md` *(VI has flat `skills/nextjs.md`)*
- `skills/frontend/shadcn-ui.md` *(VI has flat `skills/shadcn-ui.md`)*
- `skills/frontend/tailwindcss.md` *(VI has flat `skills/tailwindcss.md`)*
- `skills/tools/document-skills.md` *(VI has flat `skills/document-skills.md`)*
- `skills/tools/ffmpeg.md` *(VI has flat `skills/ffmpeg.md`)*
- `skills/tools/imagemagick.md` *(VI has flat `skills/imagemagick.md`)*
- `skills/tools/mcp-builder.md` *(VI has flat `skills/mcp-builder.md`)*
- `skills/tools/skill-creator.md` *(VI has flat `skills/skill-creator.md`)*
- `skills/tools/systematic-debugging.md` *(VI has flat `skills/systematic-debugging.md`)*

**Note**: VI has these as flat files. Need migration to nested structure + re-translation.

### 4. Support (2 missing)
- `support/index.md`
- `support/faq.md`

### 5. Workflows (3 missing)
- `workflows/bug-fixing.md`
- `workflows/documentation.md`
- `workflows/feature-development.md`

### 6. Changelog (1 missing)
- `changelog/index.md`

---

## Orphaned VI Files (8 files)

These exist in VI but NOT in current EN structure:

### Commands (flat structure - legacy)
1. `docs-vi/docs/commands/ask.md`
2. `docs-vi/docs/commands/bootstrap.md`
3. `docs-vi/docs/commands/ci.md`
4. `docs-vi/docs/commands/commit-push.md`
5. `docs-vi/docs/commands/commit.md`
6. `docs-vi/docs/commands/cook.md`
7. `docs-vi/docs/commands/create.md`
8. `docs-vi/docs/commands/debug.md`
... *(19 total flat command files)*

**Cause**: EN restructured to nested (core/, design/, fix/, git/, etc.). VI still uses old flat structure.

**Action**: Move to nested structure matching EN, update internal links.

---

## Translation Priority Recommendations

### Phase 1: Critical (High Traffic)
1. `getting-started/index.md` - Landing page
2. `getting-started/concepts.md` - Core understanding
3. `support/faq.md` - Common questions
4. `support/index.md` - Support hub

### Phase 2: Commands Migration
Migrate ALL flat command files to nested structure:
- `commands/core/*` (7 files)
- `commands/design/*` (already done)
- `commands/docs-cmd/*` (3 files)
- `commands/fix/*` (already done)
- `commands/git/*` (3 files)
- `commands/integrate/*` (2 files)
- `commands/plan/*` (2 files)
- `commands/skill/*` (2 files)

### Phase 3: Skills Migration
Migrate ALL flat skill files to categorized structure:
- `skills/ai/*` (2 files)
- `skills/auth/*` (1 file)
- `skills/backend/*` (2 files)
- `skills/ecommerce/*` (1 file)
- `skills/frontend/*` (3 files)
- `skills/tools/*` (6 files)

### Phase 4: Workflows
3 missing workflow guides (bug-fixing, documentation, feature-development)

### Phase 5: Changelog
1 file (changelog/index.md)

---

## Technical Debt Notes

### Structural Mismatch
EN docs restructured with nested categories. VI docs still flat. This creates:
- Broken URL patterns (`/vi/docs/commands/ask` vs `/vi/docs/commands/core/ask`)
- Navigation inconsistency
- SEO issues (duplicate content at different paths)

### Recommendation
1. Bulk migrate VI files to nested structure FIRST
2. Update all internal links in VI docs
3. Add redirects from old flat URLs to new nested URLs
4. THEN translate missing content

---

## Unresolved Questions

1. **URL Strategy**: Keep flat VI URLs with redirects or force break? (impacts SEO)
2. **Content Freeze**: Freeze EN changes during VI migration to avoid drift?
3. **Automation**: Use AI translation + human review or full human translation?
4. **Timeline**: Migrate structure first (1 sprint) or translate + migrate together (2 sprints)?
5. **Redirects**: Need nginx/cloudflare rules for flat→nested URL changes?
