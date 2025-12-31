# ClaudeKit Documentation Inventory - Complete Index

**Scout Report Generated**: December 30, 2025 21:53 UTC  
**Scope**: Complete inventory of documentation content in ClaudeKit Docs site  
**Status**: Comprehensive analysis complete with translation gap analysis

---

## Quick Access

1. **QUICK SUMMARY** → `DOCS-INVENTORY-SUMMARY.md` (2-page overview)
2. **FULL DETAILED REPORT** → `scout-external-251230-2153-docs-inventory.md` (405 lines)

---

## Key Metrics at a Glance

| Metric | Value |
|--------|-------|
| **Total English Documents** | 275 |
| **Total Vietnamese Documents** | 194 |
| **Translation Coverage** | 70.5% |
| **Missing Translations** | 81 documents |
| **Fully Translated Categories** | 3 (Changelog, Tools, Support/Troubleshooting) |
| **Categories with Gaps** | 7 |
| **Average Category Completion** | 83.6% |

---

## Critical Gaps (Requires Immediate Action)

### 🔴 1. Engineer Skills (49 → 1)
- **Severity**: CRITICAL
- **Missing**: 48 documents (98% gap)
- **Coverage**: 2% only
- **Estimated Effort**: 36-40 hours
- **Content Type**: Individual skill modules (500-1500 words each)
- **Examples**: template-skill.md, web-frameworks.md, threejs.md, tailwindcss.md, etc.

### 🔴 2. Marketing Workflows (11 → 2)
- **Severity**: CRITICAL  
- **Missing**: 9 documents (82% gap)
- **Coverage**: 18% only
- **Estimated Effort**: 4-6 hours
- **Content Type**: Task-oriented marketing guides
- **Value**: High business impact for marketing audience

---

## Translation Status by Category

### Fully Complete (3 Categories - 100%)
✓ **Changelog** (1/1)
✓ **Tools** (2/2)
✓ **Support/Troubleshooting** (6/6)

### High Priority - Gaps Identified (4 Categories)

**Getting-Started** (8 → 4, 50% complete)
- Missing 4: concepts.md, cheatsheet.md, why-claudekit.md, upgrade-guide.md
- Effort: 2-3 hours
- Impact: Critical for onboarding

**CLI** (9 → 5, 55.6% complete)
- Missing 4: configuration.md, doctor.md, uninstall.md, update.md
- Effort: 2-3 hours
- Impact: Command reference incomplete

**Workflows** (17 → 14, 82.4% complete)
- Missing 2: starting-new-project.md, understanding-codebases-with-gkg.md
- Effort: 1-2 hours
- Impact: Near-complete, quick wins

**Support Root** (2 → 0, 0% complete)
- Missing 2: index.md, faq.md
- Effort: 1-2 hours
- Impact: High-visibility pages

### Medium Priority - Partially Translated (3 Categories)

**Engineer** (138 → 84, 60.9% complete)
- Agents: 18 → 15 (83%, missing 3)
- Commands: 65 → 40 (61%, missing 25)
  - Core: 22 → 14 (missing 8)
  - Git: 6 → 3 (missing 3)
  - Plan: 7 → 4 (missing 3)
  - Others mostly complete
- Skills: 49 → 1 (2%, missing 48) **← CRITICAL**
- Config: 4 → 3 (75%, missing 1)

**Marketing** (92 → 78, 84.8% complete)
- Agents: 33 → 28 (84.8%, missing 5)
- Commands: 25 → 25 (100% ✓)
- Skills: 21 → 20 (95.2%, missing 1)
- Workflows: 11 → 2 (18%, missing 9) **← CRITICAL**
- Features: 1 → 1 (100% ✓)
- Index: ✓

---

## File Organization

### Directory Structure

```
src/content/docs/                    (English Root)
├── changelog/          (1 file) ✓ 100% - Changelog
├── tools/              (2 files) ✓ 100% - Tools & Utilities
├── changelog/          (1 file) ✓ 100% - Changelog
├── getting-started/    (8 files) ✗ 50% - New User Onboarding
├── cli/                (9 files) ✗ 55% - Command-Line Reference
├── workflows/          (17 files) ✗ 82% - Development Workflows
├── support/            (8 files) ✗ 75% - FAQ & Troubleshooting
│   ├── index.md, faq.md (root)
│   └── troubleshooting/ (6 files - fully translated)
├── engineer/           (138 files) ✗ 61% - Engineer Kit
│   ├── index.md
│   ├── agents/         (18 files) ✗ 83%
│   ├── commands/       (65 files) ✗ 61%
│   │   ├── core/       (22 files)
│   │   ├── fix/        (9 files)
│   │   ├── plan/       (7 files)
│   │   ├── design/     (6 files)
│   │   ├── git/        (6 files)
│   │   ├── docs-cmd/   (3 files)
│   │   ├── integrate/  (2 files)
│   │   ├── skill/      (5 files)
│   │   ├── content/    (4 files)
│   │   └── review/     (1 file)
│   ├── skills/         (49 files) ✗ 2% - **CRITICAL**
│   └── configuration/  (4 files) ✗ 75%
└── marketing/          (92 files) ✗ 85% - Marketing Kit
    ├── index.md ✓
    ├── agents/         (33 files) ✗ 85%
    ├── commands/       (25 files) ✓ 100%
    ├── skills/         (21 files) ✗ 95%
    ├── workflows/      (11 files) ✗ 18% - **CRITICAL**
    └── features/       (1 file) ✓ 100%

src/content/docs-vi/                 (Vietnamese Root)
└── Mirror structure with 194 documents (81 missing)
```

### Frontmatter Consistency
✓ All 275 English documents have:
- `title` field (document title)
- `description` field (150-160 char SEO description)
- `category` field (category classification)
- `order` field (numeric for sorting)
- `published: true` flag

---

## Translation Recommendations (Phased Approach)

### Phase 1: Critical Gaps (Weeks 1-2)
**Total Effort**: ~41-48 hours

1. **Engineer Skills Module** (36-40 hours)
   - Translate all 49 skill files
   - Batch job suitable for dedicated translator
   - Each file: 500-1500 words
   - Content type: Reference documentation

2. **Marketing Workflows** (4-6 hours)
   - Translate all 11 workflow files
   - High business value
   - Content type: Task-oriented guides

3. **Support FAQ & Index** (1-2 hours)
   - Translate `index.md` and `faq.md`
   - Quick win, high visibility
   - Content type: Q&A reference

### Phase 2: Core Content (Week 3)
**Total Effort**: ~7-10 hours

4. **Getting-Started Category** (2-3 hours)
   - Complete 4 missing docs
   - Priority: concepts.md, cheatsheet.md
   - Content type: Introductory guides

5. **Engineer Commands Core** (3-4 hours)
   - Fill 8 missing core commands
   - Focus on high-usage commands first
   - Content type: Command reference

6. **CLI Documentation** (2-3 hours)
   - Complete 4 missing CLI docs
   - Priority: configuration.md, doctor.md
   - Content type: Feature reference

### Phase 3: Polish & Long-term (Ongoing)
**Total Effort**: Variable

7. **Remaining Gaps** (1-2 hours)
   - Engineer/Configuration (1 missing)
   - Workflows (2 missing, starting-new-project.md, gkg.md)
   - Engineer/Agents (3 missing)
   - Marketing/Agents (5 missing)

---

## Process Standards for Translators

### Link Format (CRITICAL - Must Use Absolute Paths)
```markdown
# ✓ CORRECT - Absolute paths
[Quick Start](/docs/getting-started/quick-start)
[CI Tutorials](/vi/docs/engineer/commands/core/ci)

# ✗ WRONG - Relative paths (WILL BREAK)
[Quick Start](./quick-start)
[Tutorials](../commands/ci)
```

### Frontmatter Template
```yaml
---
title: "Translated Title in Vietnamese"
description: "SEO description in Vietnamese (150-160 chars)"
category: "same-category-as-english"
order: [same-order-number]
published: true
---
```

### File Naming
- Use same filename as English version
- Keep kebab-case formatting
- Place in same directory structure: `docs-vi/[category]/[filename].md`

### Content Guidelines
- Maintain visual consistency with English version
- Preserve all code examples (English code, Vietnamese explanations)
- Use consistent Vietnamese terminology (from glossary if exists)
- Keep document length/structure similar to English version
- Test absolute links after translation

---

## Related Documentation

### Full Detailed Report
**File**: `scout-external-251230-2153-docs-inventory.md`
- Complete category breakdown with tables
- Document titles and descriptions
- Translation status for every document
- Detailed gap analysis per category
- Statistical breakdown by document type

### Quick Summary
**File**: `DOCS-INVENTORY-SUMMARY.md`
- Key numbers and metrics
- Critical gaps highlighted
- File structure overview
- Translation strategy recommendations
- Translator guidelines

### Original Scout Report
**File**: `scout-external-251230-2153-documentation-inventory.md`
- Earlier inventory analysis
- Additional structural details

---

## Action Items Checklist

- [ ] Review DOCS-INVENTORY-SUMMARY.md (2-page overview)
- [ ] Assess translation resources available
- [ ] Prioritize Phase 1 critical gaps (Engineer Skills + Marketing Workflows)
- [ ] Establish translation workflow (tools, guidelines, QA process)
- [ ] Create translation memory for consistency
- [ ] Schedule Engineer Skills batch translation
- [ ] Schedule Marketing Workflows translation
- [ ] Set up CI checks for untranslated content
- [ ] Create translator guidelines document
- [ ] Monitor translation progress with this inventory

---

## Metadata

| Property | Value |
|----------|-------|
| **Report Type** | Documentation Inventory & Translation Gap Analysis |
| **Generated** | 2025-12-30 21:53 UTC |
| **Scope** | Complete `/src/content/docs/` and `/src/content/docs-vi/` |
| **Documents Scanned** | 469 total (275 EN + 194 VI) |
| **Categories Analyzed** | 8 primary + 23 subcategories |
| **Translation Coverage** | 70.5% (194 of 275) |
| **Critical Items** | 2 areas requiring immediate action |
| **Estimated Total Translation Effort** | ~56-68 hours across all phases |

**Repository**: `/Users/duynguyen/www/claudekit/claudekit-docs`  
**Content Directories**:
- English: `src/content/docs/`
- Vietnamese: `src/content/docs-vi/`

---

Generated by Scout External - December 30, 2025
