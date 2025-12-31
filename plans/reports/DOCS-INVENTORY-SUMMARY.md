# ClaudeKit Documentation Inventory - Quick Summary

## By The Numbers
- **Total English Docs**: 275
- **Total Vietnamese Docs**: 194
- **Translation Coverage**: 70.5% complete
- **Missing Translations**: 81 documents across 7 categories
- **Categories with 100% Translation**: 3 (Changelog, Tools, Support/Troubleshooting)

## Critical Translation Gaps (Fix First)

### 🔴 CRITICAL - Engineer Skills
- **English**: 49 skill modules
- **Vietnamese**: 1 skill module
- **Gap**: 48 missing (2% coverage)
- **Effort**: ~36-40 hours for batch translation

### 🔴 CRITICAL - Marketing Workflows  
- **English**: 11 workflows
- **Vietnamese**: 2 workflows
- **Gap**: 9 missing (18% coverage)
- **Effort**: ~4-6 hours

## High Priority (Onboarding/Support)

### Getting-Started (50% done)
Missing: concepts.md, cheatsheet.md, why-claudekit.md, upgrade-guide.md
**Effort**: ~2-3 hours

### Support FAQ & Index (0% translated)
Missing: index.md, faq.md at root level (troubleshooting fully translated)
**Effort**: ~1-2 hours

### CLI Commands (55.6% done)
Missing: configuration.md, doctor.md, uninstall.md, update.md
**Effort**: ~2-3 hours

## Medium Priority

### Engineer Commands (61.5% done)
Missing: 25 docs across subsections
- **core**: Missing 8 of 22
- **git**: Missing 3 of 6
- **plan**: Missing 3 of 7
**Effort**: ~3-4 hours

### Workflows (82.4% done)
Missing: starting-new-project.md, understanding-codebases-with-gkg.md
**Effort**: ~1-2 hours

## File Structure Overview

```
src/content/docs/                      (English - 275 files)
├── getting-started/        (8 files)
├── cli/                    (9 files)
├── workflows/             (17 files)
├── tools/                 (2 files) ✓ Complete
├── changelog/             (1 file) ✓ Complete
├── support/               (8 files) - troubleshooting fully translated
├── engineer/             (138 files)
│   ├── agents/            (18 files)
│   ├── commands/          (65 files across 10 subdirs)
│   ├── skills/            (49 files) 🔴 CRITICAL
│   └── configuration/     (4 files)
└── marketing/            (92 files)
    ├── agents/           (33 files)
    ├── commands/         (25 files) ✓ Complete
    ├── skills/           (21 files)
    ├── workflows/        (11 files) 🔴 CRITICAL
    └── features/         (1 file) ✓ Complete

src/content/docs-vi/                   (Vietnamese - 194 files)
└── Same structure, 81 docs missing
```

## Key Findings

✓ **Strengths**:
- Well-organized hierarchical structure
- Consistent YAML frontmatter across all 275 docs
- Naming conventions (kebab-case) applied uniformly
- Mirror directory structure for EN/VI parity
- Support troubleshooting fully translated (6/6)

⚠ **Weaknesses**:
- Engineer Skills severely undertranslated (49→1)
- Marketing Workflows only 18% translated
- Support FAQ and root index missing in Vietnamese
- Getting-Started introduction incomplete for Vietnamese users

## Translation Strategy Recommendations

### Phase 1 (Weeks 1-2): Critical Gaps
1. Translate Engineer Skills (batch job, 36-40 hours)
2. Translate Marketing Workflows (4-6 hours)
3. Translate Support FAQ & Index (1-2 hours)

### Phase 2 (Week 3): Core Content
1. Complete Getting-Started category (2-3 hours)
2. Complete Engineer Commands core subsection (3-4 hours)
3. Complete CLI documentation (2-3 hours)

### Phase 3 (Ongoing): Long-term
- Establish translation workflow checklist
- Create CI checks to prevent untranslated docs in production
- Set up translation memory (TM) for consistency
- Priority matrix for future content additions

## File Paths

- **Report Location**: `plans/reports/scout-external-251230-2153-docs-inventory.md`
- **English Root**: `src/content/docs/`
- **Vietnamese Root**: `src/content/docs-vi/`

## For Translators

**Link Format - MUST use absolute paths**:
- English: `[Text](/docs/category/slug)`
- Vietnamese: `[Text](/vi/docs/category/slug)`
- ❌ Relative paths will break (Astro limitation)

**Frontmatter Template**:
```yaml
---
title: "Page Title"
description: "150-160 character SEO description"
category: "category-name"
order: 1
published: true
---
```

---
Generated: 2025-12-30 21:56 UTC
Full report: `plans/reports/scout-external-251230-2153-docs-inventory.md`
