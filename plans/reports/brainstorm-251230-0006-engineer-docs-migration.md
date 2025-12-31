# Engineer Docs Migration Strategy

**Type**: Brainstorm Report
**Created**: 2025-12-30 00:06
**Status**: Approved
**Priority**: HIGH
**Effort**: 30-60 minutes

---

## Problem Statement

After kit-agnostic refactor (Phase 09), legacy Engineer docs remain at `/docs/docs/*` paths with `section: 'docs'` instead of migrated to `/docs/engineer/*` with `section: 'engineer'`.

### Current Behavior

**Clicking "Engineer" (KitSwitcher)**:
- Navigates to `/docs/engineer/`
- SidebarNav filters for `section='engineer'`
- Only finds ~15 newly created docs
- Result: **Broken navigation (missing ~100 docs)**

**Clicking "Docs" (Header tab)**:
- Navigates to `/docs/agents`
- SidebarNav filters for `section='docs'`
- Finds all legacy Engineer docs
- Result: **Full navigation working**

### Root Cause

Legacy docs never migrated during Phase 09 kit-agnostic refactor. Files remain at:
```
src/content/docs/docs/agents/*
src/content/docs/docs/commands/*
src/content/docs/docs/skills/*
src/content/docs/docs/use-cases/*
```

With frontmatter:
```yaml
section: docs    # ← Should be 'engineer'
category: agents
```

---

## Requirements

1. ✅ Migrate ALL legacy docs to Engineer kit structure
2. ✅ Maintain backward compatibility with redirects
3. ✅ Keep "Docs" tab as general landing page
4. ✅ Preserve file history in git
5. ✅ Update Vietnamese translations to match
6. ✅ Ensure build passes after migration

---

## Evaluated Approaches

### ❌ Option A: Quick Fix (Rejected)
Modify EngineerNav to show both `section='engineer'` AND `section='docs'`.

**Pros**:
- 5 minute fix
- No file moves
- No redirects needed

**Cons**:
- Technical debt persists
- Confusing architecture (two sections for one kit)
- Doesn't align with kit-agnostic goals
- Future maintenance nightmare

**Verdict**: Rejected - User chose "proper fix"

---

### ❌ Option B: Hybrid Approach (Rejected)
Keep files at `/docs/docs/*` but update frontmatter to `section='engineer'`.

**Pros**:
- No file moves
- Frontmatter aligned with architecture
- Less git churn

**Cons**:
- URLs don't match structure (`/docs/docs/agents` ≠ `/docs/engineer/agents`)
- Confusing for developers
- Requires routing hacks

**Verdict**: Rejected - User chose full migration

---

### ✅ Option C: Full Migration (Recommended - APPROVED)
Move files to `/docs/engineer/*` and update all references.

**Pros**:
- Clean architecture aligned with kit-agnostic design
- URLs match file structure (`/docs/engineer/agents` → `src/content/docs/engineer/agents/`)
- No routing hacks needed
- Future-proof for additional kits

**Cons**:
- 30-60 minute effort
- Requires redirect setup (~100 redirects)
- Risk of broken links if not thorough
- Large PR with file moves

**Verdict**: **APPROVED** - User selected this approach

---

## Recommended Solution: Full Migration

### File Structure Changes

**Before**:
```
src/content/docs/
├── docs/
│   ├── agents/         (~18 files)
│   ├── commands/       (~40 files)
│   ├── skills/         (~25 files)
│   └── use-cases/      (~15 files)
├── engineer/
│   └── skills/         (15 files - recent additions)
└── marketing/          (88 files)
```

**After**:
```
src/content/docs/
├── engineer/
│   ├── agents/         (18 files - migrated)
│   ├── commands/       (40 files - migrated)
│   ├── skills/         (40 files - 25 migrated + 15 existing)
│   └── use-cases/      (15 files - migrated)
├── marketing/          (88 files - unchanged)
├── cli/                (9 files - unchanged)
└── getting-started/    (unchanged)
```

### Frontmatter Updates

**Before**:
```yaml
title: Planner Agent
description: Research, analyze, and create implementation plans
section: docs
category: agents
order: 3
```

**After**:
```yaml
title: Planner Agent
description: Research, analyze, and create implementation plans
section: engineer
kit: engineer
category: agents
order: 3
```

### URL Changes

**Old URLs** (to redirect):
```
/docs/agents/planner
/docs/commands/core/cook
/docs/skills/ai/ai-multimodal
/docs/use-cases/bug-fix
```

**New URLs** (canonical):
```
/docs/engineer/agents/planner
/docs/engineer/commands/cook
/docs/engineer/skills/ai-multimodal
/docs/engineer/use-cases/bug-fix
```

---

## Implementation Steps

### Phase 1: File Migration (20 min)

1. **Move files with git mv** (preserves history):
   ```bash
   # Agents
   git mv src/content/docs/docs/agents src/content/docs/engineer/agents

   # Commands
   git mv src/content/docs/docs/commands src/content/docs/engineer/commands

   # Use cases
   git mv src/content/docs/docs/use-cases src/content/docs/engineer/use-cases

   # Skills (merge with existing)
   # Manual merge needed - 25 legacy + 15 new = 40 total
   ```

2. **Handle skills directory merge**:
   - Legacy: `docs/docs/skills/*` (25 files)
   - Existing: `docs/engineer/skills/*` (15 files)
   - Action: Move legacy skills to engineer/skills/, verify no duplicates

### Phase 2: Frontmatter Updates (15 min)

1. **Update all moved files**:
   - Change `section: docs` → `section: engineer`
   - Add `kit: engineer`
   - Verify category values match EngineerNav categories

2. **Update Vietnamese translations**:
   - Apply same changes to `src/content/docs-vi/docs/*` → `src/content/docs-vi/engineer/*`

### Phase 3: Navigation & Routing (10 min)

1. **Remove legacy DocsNav** (if no longer needed):
   - Option A: Remove `src/components/nav/DocsNav.astro` entirely
   - Option B: Repurpose as "Browse All Kits" landing nav

2. **Add redirects** in `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     redirects: {
       // Agents
       '/docs/agents/[slug]': '/docs/engineer/agents/[slug]',

       // Commands
       '/docs/commands/[...slug]': '/docs/engineer/commands/[...slug]',

       // Skills
       '/docs/skills/[...slug]': '/docs/engineer/skills/[...slug]',

       // Use cases
       '/docs/use-cases/[slug]': '/docs/engineer/use-cases/[slug]',
     }
   });
   ```

3. **Update internal links**:
   - Search/replace in all docs:
     - `/docs/agents/` → `/docs/engineer/agents/`
     - `/docs/commands/` → `/docs/engineer/commands/`
     - `/docs/skills/` → `/docs/engineer/skills/`
     - `/docs/use-cases/` → `/docs/engineer/use-cases/`

### Phase 4: Validation (10 min)

1. **Build test**:
   ```bash
   bun run build
   # Should pass with 0 errors
   ```

2. **Manual verification**:
   - Click "Engineer" button → Should show full navigation
   - Click "Docs" tab → Should show general landing or all-kits view
   - Test old URLs redirect to new URLs
   - Verify Vietnamese pages mirror English structure

3. **Link verification**:
   ```bash
   # Check for broken internal links
   grep -r "/docs/agents" src/content/docs/engineer
   grep -r "/docs/commands" src/content/docs/engineer
   # Should return 0 results
   ```

---

## File Count Estimation

| Category | Files | Vietnamese | Total |
|----------|-------|------------|-------|
| Agents | 18 | 18 | 36 |
| Commands | 40 | 40 | 80 |
| Skills (legacy) | 25 | 25 | 50 |
| Skills (existing) | 15 | 15 | 30 |
| Use Cases | 15 | 15 | 30 |
| **Total** | **113** | **113** | **226** |

**Files to migrate**: ~226 files (113 EN + 113 VI)
**Redirects needed**: ~100 URL patterns

---

## Risk Assessment

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|------------|
| Broken internal links | HIGH | MEDIUM | Comprehensive grep/replace, build validation |
| Lost git history | MEDIUM | LOW | Use `git mv` not `mv` |
| Build failures | MEDIUM | MEDIUM | Test build before commit |
| 404s from old URLs | HIGH | HIGH | Comprehensive redirect map |
| Vietnamese sync drift | MEDIUM | LOW | Migrate both EN+VI in same commit |
| PR too large | LOW | HIGH | Split into 2-3 commits (agents, commands, skills) |

---

## Success Metrics

1. ✅ Clicking "Engineer" button shows full navigation (113 docs)
2. ✅ All old URLs redirect correctly (0 404s)
3. ✅ Build passes with 0 errors/warnings
4. ✅ Vietnamese pages match English 1:1
5. ✅ No broken internal links (grep verification)
6. ✅ Git history preserved for all files

---

## Rollback Plan

If issues discovered post-merge:

1. **Immediate**: Revert PR
2. **Alternative**: Add emergency redirects:
   ```javascript
   '/docs/engineer/[...slug]': '/docs/docs/[...slug]'
   ```
3. **Debug**: Fix issues in separate branch, re-test
4. **Re-deploy**: Merge fixed version

---

## Next Steps

### Option 1: Create Implementation Plan
Use `/plan` to generate detailed implementation plan with:
- File-by-file migration checklist
- Automated scripts for frontmatter updates
- Comprehensive redirect map
- Testing procedures

### Option 2: Execute Immediately
Begin migration following steps above, estimated 30-60 min.

---

## Unresolved Questions

1. **DocsNav fate**: Remove entirely or repurpose as "Browse All"?
   - Recommendation: Keep as general landing showing all kits

2. **"Docs" tab destination**: Where should it go?
   - Option A: `/docs/` (overview page with kit picker)
   - Option B: `/docs/engineer/` (default to Engineer)
   - Option C: Keep current `/docs/agents` until migration complete

3. **Skills merge strategy**: How to handle 15 existing + 25 legacy?
   - Recommendation: Manual review for duplicates, combine all in `/engineer/skills/`

4. **Commit strategy**: Single large commit or split by category?
   - Recommendation: 3 commits (agents+commands, skills, use-cases) for easier review

5. **Deploy timing**: Immediate or wait for full QA?
   - Recommendation: Full QA first (Phase 10 from previous plan)

---

## Decision Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Migration scope | Full migration to /engineer/ | Clean architecture, user-approved |
| File move method | `git mv` | Preserves history |
| Redirect strategy | Astro config redirects | Built-in, no server config needed |
| DocsNav handling | Keep as general landing | User requested |
| Vietnamese sync | Same commit as English | Prevent drift |
| Validation method | Build + manual + grep | Comprehensive coverage |

---

**Report Status**: ✅ APPROVED
**User Decision**: Full migration (Option C)
**Estimated Effort**: 30-60 minutes
**Priority**: HIGH (blocks proper Engineer navigation)
**Next Action**: Create implementation plan or execute immediately

---

**Generated**: 2025-12-30 00:06 UTC
**Brainstormer**: Solution Brainstormer Agent
