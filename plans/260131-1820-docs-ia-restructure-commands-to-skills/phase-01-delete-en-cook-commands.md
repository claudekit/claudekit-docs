---
phase: 1
title: "Delete EN Cook Command Pages"
status: pending
effort: 20min
---

# Phase 1: Delete EN Cook Command Pages

## Context Links

- Research: `research/researcher-01-commands-vs-skills-audit.md`
- Redirect patterns: `research/researcher-02-astro-redirects-and-ia-patterns.md`
- Middleware: `/home/kai/claudekit/claudekit-docs/src/middleware.ts`

## Overview

- **Priority:** P1
- **Status:** pending
- **Effort:** 20min

Remove 6 EN command pages from cook family after migration to `skills/cook.md`.

## Key Insights

- Cook commands migrated to single skill page: `src/content/docs/engineer/skills/cook.md`
- No `/code` standalone command pages found (only cook variants)
- VI has 4 cook/code pages (handled in Phase 2)

## Requirements

### Functional
- Delete 6 EN command pages
- Add wildcard redirects to middleware.ts
- Update commands index if exists

### Non-functional
- Zero downtime (static site)
- 301 redirects preserve SEO
- Build must pass after deletion

## Architecture

**File changes:**
```
src/content/docs/engineer/
  commands/
    core/
      - cook.md                    [DELETE]
      - cook-auto.md               [DELETE]
      - cook-auto-fast.md          [DELETE]
      - cook-auto-parallel.md      [DELETE]

  skills/
    + cook.md                      [EXISTS - authoritative source]
```

**Redirect flow:**
```
/docs/engineer/commands/core/cook
  ↓ (301 via middleware)
/docs/engineer/skills/cook
```

## Related Code Files

**To modify:**
- `src/middleware.ts` (add cook redirects)

**To delete:**
- `src/content/docs/engineer/commands/core/cook.md`
- `src/content/docs/engineer/commands/core/cook-auto.md`
- `src/content/docs/engineer/commands/core/cook-auto-fast.md`
- `src/content/docs/engineer/commands/core/cook-auto-parallel.md`

**To check:**
- `src/content/docs/engineer/commands/index.md` (if exists)
- Any internal links to old cook command paths

## Implementation Steps

1. **Verify authoritative skill page exists**
   ```bash
   ls -la /home/kai/claudekit/claudekit-docs/src/content/docs/engineer/skills/cook.md
   ```

2. **Delete EN cook command pages**
   ```bash
   cd /home/kai/claudekit/claudekit-docs
   rm src/content/docs/engineer/commands/core/cook.md
   rm src/content/docs/engineer/commands/core/cook-auto.md
   rm src/content/docs/engineer/commands/core/cook-auto-fast.md
   rm src/content/docs/engineer/commands/core/cook-auto-parallel.md
   ```

3. **Add redirects to middleware.ts**
   ```typescript
   // Add after existing wildcard redirects

   // Cook command variants → skills/cook
   if (pathname.startsWith('/docs/engineer/commands/core/cook')) {
     return redirect('/docs/engineer/skills/cook', 301);
   }
   ```

4. **Search for internal links to deleted pages**
   ```bash
   grep -r "/docs/engineer/commands/core/cook" src/content/docs/ --include="*.md"
   ```

5. **Update any found links**
   Replace `/docs/engineer/commands/core/cook*` with `/docs/engineer/skills/cook`

6. **Build test**
   ```bash
   cd /home/kai/claudekit/claudekit-docs
   bun run build
   ```

## Todo List

- [ ] Verify `skills/cook.md` exists
- [ ] Delete 4 cook command pages
- [ ] Add cook redirects to middleware.ts
- [ ] Search internal links
- [ ] Update found links
- [ ] Build test passes

## Success Criteria

- All 4 cook command pages deleted
- Middleware redirects `/docs/engineer/commands/core/cook*` → `/docs/engineer/skills/cook`
- No broken internal links
- `bun run build` passes
- Preview server shows 301 redirects working

## Risk Assessment

**Low risk:**
- Cook family already migrated to skills
- Single authoritative source exists
- Middleware pattern proven (existing use-cases → workflows redirect)

**Mitigations:**
- Test redirects in preview before commit
- Keep git history (can revert if needed)

## Security Considerations

None. Static site content restructure only.

## Next Steps

After completion, proceed to Phase 2 (Delete VI migrated command pages).
