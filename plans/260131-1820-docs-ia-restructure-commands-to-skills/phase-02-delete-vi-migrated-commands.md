---
phase: 2
title: "Delete VI Migrated Command Pages"
status: pending
effort: 30min
---

# Phase 2: Delete VI Migrated Command Pages

## Context Links

- Research: `research/researcher-01-commands-vs-skills-audit.md`
- VI structure: Lines 209-237 (skills organized by category)

## Overview

- **Priority:** P1
- **Status:** pending
- **Effort:** 30min

Remove 39 VI command pages across 7 families (git, fix, cook/code, scout, design, content, skill).

## Key Insights

- VI has 15 skill pages organized by category (tools, ai, auth, backend, frontend, ecommerce)
- Design commands → ai-artist/canvas-design/gemini-vision skills (already exist)
- Skill commands → skill-creator skill (already exists)
- Missing VI translations: git, fix, cook, scout, copywriting (handled in Phase 3)

## Requirements

### Functional
- Delete 39 VI command pages
- Add VI wildcard redirects to middleware.ts
- Preserve existing VI skill pages

### Non-functional
- All redirects use 301 status
- No broken VI doc links

## Architecture

**Pages to delete (39 total):**

```
src/content/docs-vi/engineer/commands/
  git/
    - commit.md                     [DELETE - 3 pages]
    - commit-push.md
    - pull-request.md

  fix/
    - ci.md                         [DELETE - 8 pages]
    - fast.md
    - hard.md
    - index.md
    - logs.md
    - parallel.md
    - types.md
    - ui.md

  core/
    - cook.md                       [DELETE - 4 pages]
    - cook-auto-parallel.md
    - code.md
    - code-parallel.md
    - scout.md                      [DELETE - 2 pages]
    - scout-ext.md

  design/
    - 3d.md                         [DELETE - 6 pages]
    - describe.md
    - fast.md
    - good.md
    - screenshot.md
    - video.md

  content/
    - cro.md                        [DELETE - 4 pages]
    - enhance.md
    - fast.md
    - good.md

  skill/
    - add.md                        [DELETE - 5 pages]
    - create.md
    - fix-logs.md
    - optimize.md
    - optimize-auto.md

  integrate/
    - polar.md                      [DELETE? - 2 pages, unclear if migrated]
    - sepay.md
```

**Redirect targets:**
- `/vi/docs/engineer/commands/git/*` → `/vi/docs/engineer/skills/git` (create in Phase 3)
- `/vi/docs/engineer/commands/fix/*` → `/vi/docs/engineer/skills/fix` (create in Phase 3)
- `/vi/docs/engineer/commands/core/cook*` → `/vi/docs/engineer/skills/cook` (create in Phase 3)
- `/vi/docs/engineer/commands/core/scout*` → `/vi/docs/engineer/skills/scout` (create in Phase 3)
- `/vi/docs/engineer/commands/design/*` → `/vi/docs/engineer/skills/ai/canvas-design` (exists)
- `/vi/docs/engineer/commands/content/*` → `/vi/docs/engineer/skills/copywriting` (create in Phase 3)
- `/vi/docs/engineer/commands/skill/*` → `/vi/docs/engineer/skills/tools/skill-creator` (exists)

## Related Code Files

**To modify:**
- `src/middleware.ts` (add VI wildcard redirects)

**To delete:**
- 37-39 VI command pages (see Architecture section above)
- Note: integrate/* status unclear - verify before delete

**To verify exist:**
- `src/content/docs-vi/engineer/skills/ai/canvas-design.md`
- `src/content/docs-vi/engineer/skills/tools/skill-creator.md`

## Implementation Steps

1. **Verify existing VI skill pages**
   ```bash
   cd /home/kai/claudekit/claudekit-docs
   ls -la src/content/docs-vi/engineer/skills/ai/canvas-design.md
   ls -la src/content/docs-vi/engineer/skills/tools/skill-creator.md
   ```

2. **Check integrate/* migration status**
   ```bash
   grep -l "integrate:polar\|integrate:sepay" src/content/docs-vi/engineer/skills/ -r
   # If found in skills/, safe to delete commands/integrate/*
   ```

3. **Delete VI command pages (37 confirmed)**
   ```bash
   # Git family (3)
   rm -rf src/content/docs-vi/engineer/commands/git/

   # Fix family (8)
   rm -rf src/content/docs-vi/engineer/commands/fix/

   # Cook/code (4)
   rm src/content/docs-vi/engineer/commands/core/cook.md
   rm src/content/docs-vi/engineer/commands/core/cook-auto-parallel.md
   rm src/content/docs-vi/engineer/commands/core/code.md
   rm src/content/docs-vi/engineer/commands/core/code-parallel.md

   # Scout (2)
   rm src/content/docs-vi/engineer/commands/core/scout.md
   rm src/content/docs-vi/engineer/commands/core/scout-ext.md

   # Design family (6)
   rm -rf src/content/docs-vi/engineer/commands/design/

   # Content family (4)
   rm -rf src/content/docs-vi/engineer/commands/content/

   # Skill family (5)
   rm -rf src/content/docs-vi/engineer/commands/skill/

   # Integrate (2) - ONLY if confirmed migrated in Step 2
   # rm -rf src/content/docs-vi/engineer/commands/integrate/
   ```

4. **Add VI redirects to middleware.ts**
   ```typescript
   // Add after EN cook redirects

   // VI: git commands → git skill (Phase 3 creates target)
   if (pathname.startsWith('/vi/docs/engineer/commands/git/')) {
     return redirect('/vi/docs/engineer/skills/git', 301);
   }

   // VI: fix commands → fix skill (Phase 3 creates target)
   if (pathname.startsWith('/vi/docs/engineer/commands/fix/')) {
     return redirect('/vi/docs/engineer/skills/fix', 301);
   }

   // VI: cook/code commands → cook skill (Phase 3 creates target)
   if (pathname.match(/\/vi\/docs\/engineer\/commands\/core\/(cook|code)/)) {
     return redirect('/vi/docs/engineer/skills/cook', 301);
   }

   // VI: scout commands → scout skill (Phase 3 creates target)
   if (pathname.startsWith('/vi/docs/engineer/commands/core/scout')) {
     return redirect('/vi/docs/engineer/skills/scout', 301);
   }

   // VI: design commands → canvas-design skill
   if (pathname.startsWith('/vi/docs/engineer/commands/design/')) {
     return redirect('/vi/docs/engineer/skills/ai/canvas-design', 301);
   }

   // VI: content commands → copywriting skill (Phase 3 creates target)
   if (pathname.startsWith('/vi/docs/engineer/commands/content/')) {
     return redirect('/vi/docs/engineer/skills/copywriting', 301);
   }

   // VI: skill commands → skill-creator
   if (pathname.startsWith('/vi/docs/engineer/commands/skill/')) {
     return redirect('/vi/docs/engineer/skills/tools/skill-creator', 301);
   }
   ```

5. **Search for internal VI links to deleted pages**
   ```bash
   grep -r "/vi/docs/engineer/commands/git\|/vi/docs/engineer/commands/fix\|/vi/docs/engineer/commands/core/cook\|/vi/docs/engineer/commands/core/scout\|/vi/docs/engineer/commands/design\|/vi/docs/engineer/commands/content\|/vi/docs/engineer/commands/skill" src/content/docs-vi/ --include="*.md"
   ```

6. **Update found links** (if any)

7. **Build test**
   ```bash
   bun run build
   ```

## Todo List

- [ ] Verify existing VI skill pages (canvas-design, skill-creator)
- [ ] Check integrate/* migration status
- [ ] Delete 37 confirmed VI command pages
- [ ] Delete integrate/* if confirmed migrated
- [ ] Add 7 VI redirect rules to middleware.ts
- [ ] Search VI internal links
- [ ] Update found links
- [ ] Build test passes

## Success Criteria

- 37-39 VI command pages deleted
- 7 VI redirect rules in middleware.ts
- No broken VI internal links
- `bun run build` passes
- Redirects point to existing pages (canvas-design, skill-creator) or Phase 3 targets (git, fix, cook, scout, copywriting)

## Risk Assessment

**Medium risk:**
- Missing VI skill translations (git, fix, cook, scout, copywriting)
- Redirects point to pages that don't exist yet
- Integrate/* unclear migration status

**Mitigations:**
- Phase 3 creates missing VI skills BEFORE testing redirects end-to-end
- Verify integrate/* before deletion
- Test build after each family deletion (can stop if issues)

## Security Considerations

None. Static content cleanup only.

## Next Steps

Proceed to Phase 3 (Create missing VI skill translations) to complete redirect targets.
