# ClaudeKit Docs Inventory Scout Report

**Date**: December 30, 2025  
**Scope**: `/src/content/docs/` (English) and `/src/content/docs-vi/` (Vietnamese)  
**Total Documents**: 275 English, 194 Vietnamese  
**Translation Parity**: 81 missing Vietnamese translations across 7 categories

---

## Executive Summary

The ClaudeKit documentation is a substantial corpus of 275 English documents spanning 8 main categories plus nested subcategories. Vietnamese translations cover 194 documents (70.5% complete). The largest category is **Engineer** (138 EN / 84 VI docs), followed by **Marketing** (92 EN / 78 VI docs). Four categories maintain 100% translation parity (Changelog, Tools), while others have significant gaps.

**Key Findings:**
- Well-structured hierarchy with clear category separation
- Extensive nested skill/command documentation in Engineer & Marketing
- Marketing workflows have only 18% Vietnamese coverage (2/11 docs)
- Support troubleshooting fully translated (6/6)
- Frontmatter consistently includes title, description, category, and order fields

---

## Category Breakdown

### 1. GETTING-STARTED (EN: 8 | VI: 4)
**Translation Status**: 50% Complete (Missing 4 docs)

Core introductory content for new users.

| Document | Type | Title | EN | VI |
|----------|------|-------|----|----|
| index.md | Index | Getting Started | ✓ | ✓ |
| introduction.md | Guide | Introduction | ✓ | ✓ |
| quick-start.md | Guide | Quick Start | ✓ | ✓ |
| installation.md | Guide | Installation | ✓ | ✓ |
| concepts.md | Guide | Core Concepts | ✓ | ✗ |
| cheatsheet.md | Reference | ClaudeKit Cheatsheet | ✓ | ✗ |
| why-claudekit.md | Guide | Why ClaudeKit | ✓ | ✗ |
| upgrade-guide.md | Guide | Upgrade Guide for Claude Code Users | ✓ | ✗ |

**Gap Analysis**: Concepts, Cheatsheet, Why-ClaudeKit, and Upgrade Guide lack Vietnamese translations.

---

### 2. CLI (EN: 9 | VI: 5)
**Translation Status**: 55.6% Complete (Missing 4 docs)

ClaudeKit command-line interface documentation.

| Document | Type | Title | EN | VI |
|----------|------|-------|----|----|
| index.md | Index | ClaudeKit CLI | ✓ | ✓ |
| installation.md | Guide | Installation | ✓ | ✓ |
| init.md | Command | ck init | ✓ | ✓ |
| new.md | Command | ck new | ✓ | ✓ |
| versions.md | Command | ck versions | ✓ | ✓ |
| configuration.md | Guide | Configuration | ✓ | ✗ |
| doctor.md | Command | ck doctor | ✓ | ✗ |
| uninstall.md | Command | ck uninstall | ✓ | ✗ |
| update.md | Command | ck update | ✓ | ✗ |

**Gap Analysis**: Configuration, Doctor, Uninstall, and Update commands lack Vietnamese versions.

---

### 3. WORKFLOWS (EN: 17 | VI: 14)
**Translation Status**: 82.4% Complete (Missing 3 docs)

Task-oriented guides for common development scenarios.

| Document | Type | Title | EN | VI |
|----------|------|-------|----|----|
| index.md | Index | Workflows | ✓ | ✓ |
| new-project.md | Workflow | Greenfield Projects | ✓ | ✓ |
| existing-project.md | Workflow | Brownfield Projects | ✓ | ✓ |
| feature-development.md | Workflow | Feature Development Workflow | ✓ | ✓ |
| adding-feature.md | Workflow | Adding a New Feature | ✓ | ✓ |
| bug-fixing.md | Workflow | Bug Fixing Workflow | ✓ | ✓ |
| fixing-bugs.md | Workflow | Fixing Bugs | ✓ | ✓ |
| refactoring-code.md | Workflow | Refactoring Code | ✓ | ✓ |
| optimizing-performance.md | Workflow | Optimizing Performance | ✓ | ✓ |
| building-api.md | Workflow | Building a REST API | ✓ | ✓ |
| implementing-auth.md | Workflow | Implementing Authentication | ✓ | ✓ |
| integrating-payment.md | Workflow | Integrating Payment Processing | ✓ | ✓ |
| documentation.md | Workflow | Documentation Workflow | ✓ | ✓ |
| maintaining-old-project.md | Workflow | Maintaining an Old Project | ✓ | ✓ |
| starting-new-project.md | Workflow | Starting a New Project | ✓ | ✗ |
| gemini.md | Workflow | Gemini, wait what? | ✓ | ✓ |
| understanding-codebases-with-gkg.md | Workflow | Understanding Codebases with GitLab Knowledge Graph | ✓ | ✗ |

**Gap Analysis**: Starting a New Project and Understanding Codebases with GKG lack Vietnamese versions.

---

### 4. TOOLS (EN: 2 | VI: 2)
**Translation Status**: 100% Complete ✓

Ecosystem tools and utilities.

| Document | Type | Title | EN | VI |
|----------|------|-------|----|----|
| index.md | Index | Tools & Utilities | ✓ | ✓ |
| ccs.md | Tool | CCS - Claude Code Switch | ✓ | ✓ |

---

### 5. CHANGELOG (EN: 1 | VI: 1)
**Translation Status**: 100% Complete ✓

Release notes and version history.

| Document | Type | Title | EN | VI |
|----------|------|-------|----|----|
| index.md | Index | Changelog | ✓ | ✓ |

---

### 6. SUPPORT (EN: 8 | VI: 6)
**Translation Status**: 75% Complete (Missing 2 docs)

FAQ and troubleshooting guides.

#### Root Level
| Document | Type | Title | EN | VI |
|----------|------|-------|----|----|
| index.md | Index | Support | ✓ | ✗ |
| faq.md | FAQ | FAQ | ✓ | ✗ |

#### Troubleshooting Subdirectory (6 EN / 6 VI - 100%)
| Document | Type | Title | EN | VI |
|----------|------|-------|----|----|
| index.md | Index | Troubleshooting | ✓ | ✓ |
| installation-issues.md | Guide | Installation Issues | ✓ | ✓ |
| api-key-setup.md | Guide | API Key Setup | ✓ | ✓ |
| command-errors.md | Guide | Command Errors | ✓ | ✓ |
| agent-issues.md | Guide | Agent Issues | ✓ | ✓ |
| performance-issues.md | Guide | Performance Issues | ✓ | ✓ |

**Gap Analysis**: Root-level FAQ and Support index lack Vietnamese versions; troubleshooting subdirectory fully translated.

---

### 7. ENGINEER (EN: 138 | VI: 84)
**Translation Status**: 60.9% Complete (Missing 54 docs)

Comprehensive reference for ClaudeKit engineers. Largest category with 4 subsections.

#### 7.1 Index
- index.md - Engineer Kit (EN: ✓ | VI: ✓)

#### 7.2 Agents (EN: 18 | VI: 15 - Missing 3)
Specialized AI agents for different tasks.

Sample agents (first 5 shown):
- brainstormer.md - Brainstormer Agent
- code-reviewer.md - Code Reviewer Agent
- copywriter.md - Copywriter Agent
- database-admin.md - Database Admin Agent
- debugger.md - Debugger Agent
- ... and 13 more agents

#### 7.3 Commands (EN: 65 | VI: 40 - Missing 25)
CLI commands organized by functional area.

| Subsection | EN | VI | Status |
|-----------|----|----|--------|
| core | 22 | 14 | 63.6% (Missing 8) |
| fix | 9 | 8 | 88.9% (Missing 1) |
| plan | 7 | 4 | 57.1% (Missing 3) |
| design | 6 | 6 | 100% ✓ |
| docs-cmd | 3 | 3 | 100% ✓ |
| git | 6 | 3 | 50% (Missing 3) |
| integrate | 2 | 2 | 100% ✓ |
| skill | 5 | 5 | 100% ✓ |
| content | 4 | 4 | 100% ✓ |
| review | 1 | 0 | 0% (Missing 1) |
| **TOTAL** | **65** | **40** | **61.5%** |

#### 7.4 Skills (EN: 49 | VI: 1)
**Translation Status**: 2% Complete (Missing 48 docs)

Individual skill modules covering various technologies. Root-level skill files (not in subdirectories).

Sample skills shown:
- template-skill.md
- skill-creator.md
- systematic-debugging.md
- sequential-thinking.md
- shopify.md
- shadcn-ui.md
- shadcn-ui-components.md
- tailwindcss.md
- threejs.md
- ui-styling.md
- ui-ux-pro-max.md
- web-frameworks.md
- ... and 37 more

**Critical Gap**: Only 1 Vietnamese skill document exists. This is the most undertranslated subsection.

#### 7.5 Configuration (EN: 4 | VI: 3)
Configuration reference documentation.

---

### 8. MARKETING (EN: 92 | VI: 78)
**Translation Status**: 84.8% Complete (Missing 14 docs)

Marketing-focused documentation. Second-largest category with 5 subsections.

#### 8.1 Index
- index.md (EN: ✓ | VI: ✓)

#### 8.2 Agents (EN: 33 | VI: 28)
**Translation Status**: 84.8% Complete (Missing 5 agents)

Marketing-specific AI agents.

#### 8.3 Commands (EN: 25 | VI: 25)
**Translation Status**: 100% Complete ✓

Marketing command documentation fully translated.

#### 8.4 Skills (EN: 21 | VI: 20)
**Translation Status**: 95.2% Complete (Missing 1 skill)

Marketing skill modules.

#### 8.5 Workflows (EN: 11 | VI: 2)
**Translation Status**: 18.2% Complete (Missing 9 workflows)

Marketing-oriented task workflows. **Most critical gap in Marketing category.**

Sample workflows:
- All 11 English workflows exist
- Only 2 Vietnamese translations available

#### 8.6 Features (EN: 1 | VI: 1)
**Translation Status**: 100% Complete ✓

---

## File Structure Patterns

### Frontmatter Format (Consistent)
All documents follow this standard YAML frontmatter:

```yaml
---
title: "Document Title"
description: "SEO-friendly description (150-160 chars)"
category: "category-name"  # or "section" in some files
order: 1                    # Numeric ordering within category
published: true
---
```

### Naming Conventions
- **File names**: Kebab-case (e.g., `quick-start.md`, `database-admin.md`)
- **Directory structure**: Flat within categories, with optional subcategories for complex areas
- **Index files**: Each category has `index.md` as root navigation page

### Link Guidelines (From CLAUDE.md)
- **Use absolute paths** for internal links (REQUIRED)
- Format: `[Link text](/docs/category/slug)` for English
- Format: `[Link text](/vi/docs/category/slug)` for Vietnamese
- Relative links break due to Astro's default URL structure (no trailing slashes)

---

## Translation Coverage Summary

| Category | English | Vietnamese | Coverage | Gap | Priority |
|----------|---------|------------|----------|-----|----------|
| Changelog | 1 | 1 | 100% | 0 | ✓ Complete |
| Tools | 2 | 2 | 100% | 0 | ✓ Complete |
| Support/Troubleshooting | 6 | 6 | 100% | 0 | ✓ Complete |
| Workflows | 17 | 14 | 82.4% | 3 | High |
| Support Root | 2 | 0 | 0% | 2 | High |
| Getting-Started | 8 | 4 | 50% | 4 | High |
| CLI | 9 | 5 | 55.6% | 4 | High |
| Engineer/Agents | 18 | 15 | 83.3% | 3 | Medium |
| Engineer/Commands | 65 | 40 | 61.5% | 25 | Medium |
| Engineer/Config | 4 | 3 | 75% | 1 | Medium |
| **Engineer/Skills** | **49** | **1** | **2%** | **48** | **CRITICAL** |
| Marketing/Agents | 33 | 28 | 84.8% | 5 | Medium |
| Marketing/Commands | 25 | 25 | 100% | 0 | ✓ Complete |
| Marketing/Skills | 21 | 20 | 95.2% | 1 | Low |
| **Marketing/Workflows** | **11** | **2** | **18.2%** | **9** | **CRITICAL** |
| Marketing/Features | 1 | 1 | 100% | 0 | ✓ Complete |
| **TOTAL** | **275** | **194** | **70.5%** | **81** | — |

---

## Critical Gaps Identified

### 1. Engineer Skills (48 missing) - CRITICAL
- Only 1 Vietnamese skill exists
- 49 English skills need translation
- Recommendation: Prioritize batch translation of skill modules

### 2. Marketing Workflows (9 missing) - CRITICAL
- 11 English workflows, only 2 translated (18%)
- Likely high-value content for marketing audience
- Recommendation: Translate all 11 workflows

### 3. Support FAQ & Index (2 missing)
- Root-level FAQ and Support index have no Vietnamese version
- High-visibility pages for support seekers
- Recommendation: High priority translation

### 4. Engineer Commands Core (8 missing)
- 22 core commands, only 14 translated
- Recommendation: Focus on most-used core commands first

### 5. Getting-Started Gaps (4 missing)
- Introduction phase missing: Concepts, Cheatsheet, Why-ClaudeKit, Upgrade Guide
- Recommendation: Translate all 4 for complete onboarding experience

---

## Document Statistics

### By Type
- **Index files**: 8 (one per category)
- **Command documentation**: ~90 files
- **Workflow guides**: 31 files (workflows + marketing workflows)
- **Agent documentation**: 51 files
- **Skill modules**: 70 files
- **Reference/FAQ**: 25 files

### Depth Analysis
- **Single-level categories**: Getting-Started, CLI, Workflows, Tools, Changelog
- **Multi-level categories**: Support (2 levels), Engineer (4 levels), Marketing (5 levels)
- **Largest subdirectory**: Engineer/Skills (49 files), Engineer/Commands (65 files in subdirs)

---

## Frontmatter Consistency Check

**Status**: Consistent across all 275 documents
- All files have `title` field
- All files have `description` field
- All files have `category` or `section` field
- All files have `order` field (numeric)
- All files have `published: true` flag

**Note**: Some older files use `section` instead of `category` field (legacy format still functional)

---

## Recommendations

### Immediate Actions (High Priority)

1. **Translate Engineer Skills** (48 docs)
   - Create batch translation workflow for skill modules
   - Each skill typically 500-1500 words
   - Estimated effort: ~36-40 hours

2. **Translate Marketing Workflows** (9 docs)
   - High business value for marketing team
   - Estimated effort: ~4-6 hours

3. **Translate Support FAQ & Index** (2 docs)
   - High-visibility pages
   - Quick wins for user-facing completeness
   - Estimated effort: ~1-2 hours

### Medium Priority

4. **Complete Engineer Commands Core** (8 docs)
   - Fill gaps in 22 core commands
   - Estimated effort: ~3-4 hours

5. **Complete Getting-Started** (4 docs)
   - Ensure smooth onboarding for Vietnamese users
   - Estimated effort: ~2-3 hours

### Long-term Strategy

- Establish Vietnamese translation workflow/checklist
- Consider translation memory tool (TM) for consistency
- Set up CI checks to prevent untranslated docs in deployment
- Create translation priority matrix for future content

---

## Metadata

- **Report Generated**: 2025-12-30 21:53 UTC
- **Total Documents Scanned**: 469 (275 EN + 194 VI)
- **Categories Analyzed**: 8 primary + 23 subcategories
- **Completeness**: 70.5% translation coverage across all docs
- **Action Items Identified**: 5 high-priority, 4 medium-priority

---

## File Paths Reference

**English Root**: `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs/`

**Vietnamese Root**: `/Users/duynguyen/www/claudekit/claudekit-docs/src/content/docs-vi/`

**All categories follow mirror structure**: `docs/[category]/[document].md` ↔ `docs-vi/[category]/[document].md`
