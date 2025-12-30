# Implementation Plan: ClaudeKit Documentation Update

**Created**: 2025-11-29
**Plan ID**: 251129-1918-docs-commands-vi-translation
**Status**: Completed
**Priority**: High

## Overview

Complete ClaudeKit docs by adding 14 missing command pages + migrate/translate 26 VI files.

## Context Links

- Research: Missing Commands: `/mnt/d/www/claudekit/claudekit-docs/plans/reports/researcher-251129-missing-commands.md`
- Research: VI Gaps: `/mnt/d/www/claudekit/claudekit-docs/plans/251129-1918-docs-commands-vi-translation/research/researcher-251129-vi-gaps.md`
- Codebase Summary: `/mnt/d/www/claudekit/claudekit-docs/docs/codebase-summary.md`
- Code Standards: `/mnt/d/www/claudekit/claudekit-docs/docs/code-standards.md`

## Scope Summary

### Part 1: EN Documentation (14 new pages)
- Core: 2 files (code, brainstorm)
- Plan: 2 files (routing update, parallel)
- Fix: 2 files (routing update, parallel)
- Scout/Review: 2 files (scout:ext, review:codebase)
- Skills: 3 files (add, optimize, optimize:auto)
- Advanced: 3 files (bootstrap:auto:parallel, cook:auto:parallel, code:parallel)

### Part 2: VI Translation (26 files)
- Getting Started: 4 files
- Support: 2 files
- Workflows: 3 files
- Changelog: 1 file
- Structural migration: 34 files (commands + skills from flat to nested)

## Execution Phases

| Phase | Status | Files | Priority |
|-------|--------|-------|----------|
| [01: Core Commands](phase-01-core-commands.md) | Done | 2 | Critical |
| [02: Plan Commands](phase-02-plan-commands.md) | Done | 2 | High |
| [03: Fix Commands](phase-03-fix-commands.md) | Done | 2 | High |
| [04: Scout/Review](phase-04-scout-review-commands.md) | Done | 2 | Medium |
| [05: Skill Commands](phase-05-skill-commands.md) | Done | 3 | Medium |
| [06: Advanced Commands](phase-06-bootstrap-cook-commands.md) | Done | 3 | Medium |
| [07: VI Structure Migration](phase-07-vi-structure-migration.md) | Done | 34 | High |
| [08: VI Translation](phase-08-vi-translation.md) | Done | 14 | Medium |

## Success Criteria

- [x] All 14 EN command pages created, published=true
- [x] `bun run build` passes (quality gate) - 234 pages
- [x] VI docs migrated to nested structure matching EN
- [x] All 14 VI translations for new command docs completed
- [x] Internal links updated in VI docs
- [x] No orphaned files
- [x] SEO descriptions 150-160 chars

## Quality Gates

1. **Pre-commit**: Run `bun run build` - must pass
2. **Post-creation**: Verify frontmatter schema compliance
3. **Link validation**: Check internal cross-references
4. **Translation consistency**: EN/VI structural parity

## Phase Execution Order

**Sequential Dependencies**:
1. Phases 01-06 can run in parallel (independent EN docs)
2. Phase 07 must complete before Phase 08
3. Phase 08 Group B depends on Phases 01-06 completion

**Recommended Execution**:
```
Wave 1 (Parallel):
- Phase 01, 02, 03, 04, 05, 06

Wave 2 (Sequential):
- Phase 07 (structure migration)

Wave 3 (Sequential):
- Phase 08 (translation, depends on Wave 1 + Wave 2)
```

## File Locations Reference

All files use absolute paths from project root:
- **EN Commands**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/`
- **EN Skills**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/skills/`
- **VI Commands**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/commands/`
- **VI Skills**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs-vi/docs/skills/`
- **Plan Directory**: `/mnt/d/www/claudekit/claudekit-docs/plans/251129-1918-docs-commands-vi-translation/`

## Quality Gates (Mandatory)

1. **Pre-commit**: `bun run build` must pass (NO exceptions)
2. **Frontmatter**: Validate against schema in `src/content/config.ts`
3. **SEO**: Descriptions 150-160 chars
4. **Links**: Internal cross-references valid

## Unresolved Questions

1. URL redirects needed for VI flat→nested migration?
2. Translation approach: AI + review or full human?
3. Should EN be frozen during VI migration?
4. Announce breaking change for VI URL structure?
