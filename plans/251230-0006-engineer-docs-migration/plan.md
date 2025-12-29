---
title: "Engineer Documentation Migration"
description: "Migrate legacy docs from /docs/docs/* to /docs/engineer/* with frontmatter updates and redirects"
status: in-progress
priority: P0
effort: 1.5h
branch: feat/marketing-docs
tags: [refactor, migration, engineer, documentation]
created: 2025-12-30
updated: 2025-12-30
---

# Engineer Documentation Migration Plan

**Plan ID**: 251230-0006-engineer-docs-migration
**Created**: 2025-12-30
**Estimated Effort**: 1.5h (90 minutes)
**Branch**: feat/marketing-docs
**Related Brainstorm**: [plans/reports/brainstorm-251230-0006-engineer-docs-migration.md](../reports/brainstorm-251230-0006-engineer-docs-migration.md)

---

## Executive Summary

Migrate 133 legacy Engineer docs from `/docs/docs/*` to `/docs/engineer/*` to fix broken navigation in kit-agnostic architecture. Includes file moves, frontmatter updates, redirect configuration, and Vietnamese translation sync.

### Critical Issue

**Engineer button navigation broken**: Clicking "Engineer" in KitSwitcher shows only 15 docs instead of 133 because legacy docs have `section: docs` instead of `section: engineer`.

---

## Scope

### Files to Migrate (English)

| Category | Count | Source | Destination |
|----------|-------|--------|-------------|
| Agents | 18 | `docs/docs/agents/` | `docs/engineer/agents/` |
| Commands | 66 | `docs/docs/commands/` | `docs/engineer/commands/` |
| Skills | 43 | `docs/docs/skills/` | `docs/engineer/skills/` (merge with 15 existing) |
| Configuration | 4 | `docs/docs/configuration/` | `docs/engineer/configuration/` |
| CLI (legacy) | 2 | `docs/docs/cli/` | `docs/cli/` (already has 9 files) - **excluded from migration** |
| **Total to Migrate** | **131** | - | - |
| **Original Count** | 133 | - | - |

### Vietnamese Translations

- Found: 86 files in `docs-vi/docs/`
- Missing: 45 files (131 - 86 = 45)
- Action: Migrate existing 86, document missing translations

### URL Changes

**Old format**: `/docs/{category}/{slug}`
**New format**: `/docs/engineer/{category}/{slug}`

Examples:
- `/docs/agents/planner` → `/docs/engineer/agents/planner`
- `/docs/commands/core/cook` → `/docs/engineer/commands/cook`
- `/docs/skills/ai/ai-multimodal` → `/docs/engineer/skills/ai-multimodal`

---

## Phases

| # | Phase | Type | Duration | Dependencies |
|---|-------|------|----------|--------------|
| 1 | Pre-Migration Analysis | Analysis | 10m | None |
| 2 | File Migration (English) | Execution | 30m | Phase 1 |
| 3 | Frontmatter Updates | Execution | 20m | Phase 2 |
| 4 | Vietnamese Migration | Execution | 15m | Phase 2 |
| 5 | Redirect Configuration | Configuration | 10m | Phase 2,3 |
| 6 | Internal Link Updates | Execution | 10m | Phase 2 |
| 7 | Validation & Testing | Validation | 20m | All |

**Total Estimated Time**: ~115 minutes (1h 55m with buffer)

---

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Migration Strategy | Full migration to `/engineer/` | Clean architecture, user-approved |
| File Move Method | `git mv` | Preserves git history |
| Skills Merge | Manual review for duplicates | Prevent overwrites (43 legacy + 15 existing) |
| CLI Files | Move to `/docs/cli/` | Already has separate section |
| Vietnamese Missing Files | Document & skip | Out of scope for this migration |
| Redirect Method | Astro config | No server config needed |
| Commit Strategy | Single atomic commit | Ensure consistency |

---

## Risk Mitigation

| Risk | Severity | Mitigation |
|------|----------|------------|
| Broken internal links | HIGH | Automated search/replace, grep validation |
| Lost git history | MEDIUM | Use `git mv` exclusively |
| Build failures | MEDIUM | Run build after each phase |
| 404s from old URLs | HIGH | Comprehensive redirect map |
| Vietnamese sync drift | LOW | Migrate both EN+VI together |
| Skills file conflicts | MEDIUM | Pre-check for duplicates |

---

## Success Criteria

- [ ] All 131 English docs migrated to `/engineer/` paths
- [ ] All 86 Vietnamese docs migrated to `/engineer/` paths
- [ ] Frontmatter updated: `section: engineer`, `kit: engineer` added
- [ ] Build passes with 0 errors/warnings
- [ ] Engineer navigation shows all 146 docs (131 migrated + 15 existing)
- [ ] Old URLs redirect correctly (tested manually)
- [ ] No broken internal links (grep verification)
- [ ] Git history preserved for all files

---

## Phase Files

Detailed execution steps:
- [phase-01-pre-migration-analysis.md](phase-01-pre-migration-analysis.md)
- [phase-02-file-migration.md](phase-02-file-migration.md)
- [phase-03-frontmatter-updates.md](phase-03-frontmatter-updates.md)
- [phase-04-vietnamese-migration.md](phase-04-vietnamese-migration.md)
- [phase-05-redirect-configuration.md](phase-05-redirect-configuration.md)
- [phase-06-internal-link-updates.md](phase-06-internal-link-updates.md)
- [phase-07-validation-testing.md](phase-07-validation-testing.md)

---

## Rollback Plan

If critical issues discovered:

1. **Immediate Rollback**: `git reset --hard HEAD~1` (before push)
2. **Post-Push Rollback**: Revert PR merge commit
3. **Emergency Fix**: Add reverse redirects temporarily:
   ```javascript
   '/docs/engineer/[...slug]': '/docs/docs/[...slug]'
   ```
4. **Debug**: Fix in separate branch, re-test, re-deploy

---

## Post-Migration Tasks

1. Remove empty `docs/docs/` directory
2. Update documentation references in README/CLAUDE.md
3. Consider removing legacy `DocsNav.astro` (if unused)
4. Document missing Vietnamese translations (47 files)
5. Update project-roadmap.md with migration completion

---

## Notes

- **Skills directory merge**: 35 legacy + 14 existing = 49 total (8 duplicates identified, Option A: merge legacy into existing)
- **CLI files**: 2 in `docs/docs/cli/` excluded from migration (already migrated)
- **Total migration scope**: 131 English files + 86 Vietnamese files = 217 files
- **Frontmatter updates**: 217 files (131 EN + 86 VI)
- **Vietnamese gap**: 45 missing translations to be addressed separately
- **Commit message**: `refactor(docs): migrate engineer docs to kit-agnostic structure`

---

## Phase 01 Completion Summary

**Status**: ✅ COMPLETED (2025-12-30)
**Duration**: 10 minutes
**Blockers**: None (0 critical issues)

### Verified Deliverables
- ✅ 133 English files verified (131 to migrate + 2 CLI excluded)
- ✅ 86 Vietnamese files verified
- ✅ 8 skills duplicates identified and resolution strategy confirmed (Option A)
- ✅ 2 CLI files identified for separate handling
- ✅ Migration manifest created and reviewed
- ✅ No blocking conflicts found
- ✅ Approved for Phase 02 execution

### Key Findings
- **Total files to migrate**: 131 English + 86 Vietnamese = 217 files
- **Skills merge outcome**: 35 legacy + 14 existing = 49 total skills
- **Frontmatter updates needed**: 217 files
- **URL redirects needed**: 131 paths

---

**Overall Progress**: Phase 01 of 7 (14%)
**Next Action**: Execute Phase 02 - File Migration
