---
title: "Docs IA Restructure - Commands to Skills Migration"
description: "Remove legacy command pages after migration to skills, fix RAG contradictory data"
status: completed
priority: P1
effort: 3h
branch: dev
tags: [docs, ia, cleanup, rag, assistant]
created: 2026-01-31
---

# Docs IA Restructure - Commands to Skills Migration

## Problem

Commands migrated to skills in engineer kit still have full docs pages under `commands/` section. Assistant RAG returns contradictory data (e.g., `/git` listed as both "command" and "skill" with mixed syntax).

## Scope

- **EN:** 6 cook family command pages to remove
- **VI:** 39 command pages to remove (git, fix, cook, scout, design, content, skill families)
- **Missing VI skill pages:** git, fix, cook, scout, copywriting (5 pages)
- **Marketing:** NO changes (no command→skill migration occurred)

## Phases Overview

| Phase | Description | Effort | Status |
|-------|-------------|--------|--------|
| 1 | Delete EN cook command pages | 20min | completed |
| 2 | Delete VI migrated command pages | 30min | completed |
| 3 | Create missing VI skill translations | 60min | completed |
| 4 | Update internal links | 30min | completed |
| 5 | Validation | 20min | completed |

**Total Effort:** 3h

## Success Criteria

- All legacy command pages removed
- 301 redirects working (old paths → new paths)
- All internal links updated
- Build passes (`bun run build`)
- Assistant RAG returns single source of truth per feature

## Dependencies

- Research reports in `research/` directory
- Existing middleware redirect pattern
- EN skill pages as translation source

## Next Steps

Execute with `/cook --parallel` for independent phases. Phase files contain detailed implementation steps.

---

## Validation Log

### Session 1 — 2026-01-31
**Trigger:** Initial plan validation before implementation
**Questions asked:** 6

#### Questions & Answers

1. **[Scope]** Phase 2 notes `/integrate:polar` and `/integrate:sepay` in VI docs have unclear migration status. These 2 pages — what should we do?
   - Options: Keep integrate/* pages | Delete integrate/* pages | Defer decision (Recommended)
   - **Answer:** Delete integrate/* pages
   - **Custom input:** "but make sure the information preserved on the skills section"
   - **Rationale:** Clean up obsolete command pages while preserving content in new skill page

2. **[Translation]** Phase 3 requires creating 5 VI skill translations (git, fix, cook, scout, copywriting). How should we handle translation quality?
   - Options: AI translation + review (Recommended) | AI translation, trust it | Skip VI translations
   - **Answer:** AI translation + review (Recommended)
   - **Rationale:** Balance speed with quality — AI translates, user reviews before commit

3. **[Architecture]** VI skills are organized by category (tools/, ai/, auth/, etc.) while EN is flat. Should new VI skill pages follow VI's categorized structure or EN's flat structure?
   - Options: Categorized (Recommended) | Flat structure
   - **Answer:** Categorized (Recommended)
   - **Rationale:** Maintain VI consistency — new skills go to tools/ or ai/ subdirectories

4. **[Execution]** Phase 2 deletes VI command pages and adds redirects to skill pages that don't exist yet (created in Phase 3). Should we add redirects before or after skill pages exist?
   - Options: Add all redirects in Phase 2 | Add redirects after Phase 3 (Recommended)
   - **Answer:** Add redirects after Phase 3 (Recommended)
   - **Rationale:** Avoid 404 window — create targets before setting up redirects

5. **[Execution]** Given the dependency between Phase 2 (delete) and Phase 3 (create targets), what execution order do you prefer?
   - Options: Sequential (Recommended) | Phase 3 first, then 1+2 | EN only, defer VI
   - **Answer:** Use /cook --parallel
   - **Custom input:** "Use /cook --parallel maybe?"
   - **Rationale:** User wants parallel execution where phases are independent

6. **[Scope]** You said delete integrate/* but preserve info in skills. Should we create a new VI integrate skill page or merge content into an existing skill?
   - Options: Create skills/tools/integrate.md | Merge into existing skill | Delete only (Recommended)
   - **Answer:** Create skills/tools/integrate.md
   - **Rationale:** Preserve integration guides as new VI skill page

#### Confirmed Decisions
- **integrate/* pages:** Delete + create new `skills/tools/integrate.md` (VI only)
- **VI translation:** AI translation with user review
- **VI skill structure:** Categorized (tools/, ai/)
- **Redirect timing:** After Phase 3 (targets exist first)
- **Execution:** Parallel where possible (`/cook --parallel`)

#### Action Items
- [ ] Update Phase 2 to delete integrate/* pages
- [ ] Update Phase 3 to add integrate.md to translation list (6 pages now, not 5)
- [ ] Reorder: Phase 3 before Phase 2 redirects (or add redirects in Phase 4)
- [ ] Consider `/cook --parallel` for Phase 1 + Phase 3 (independent)

#### Impact on Phases
- **Phase 2:** Add integrate/* to deletion list; move redirect addition to Phase 4
- **Phase 3:** Add integrate.md translation (6 pages total); translate integrate/* content first
- **Phase 4:** Now includes redirect setup (moved from Phase 2)
