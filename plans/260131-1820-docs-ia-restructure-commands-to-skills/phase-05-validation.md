---
phase: 5
title: "Validation"
status: pending
effort: 20min
---

# Phase 5: Validation

## Context Links

- Quality gate: `/home/kai/claudekit/claudekit-docs/CLAUDE.md` (lines 6-12)
- Middleware: `src/middleware.ts`
- i18n compliance: `/home/kai/claudekit/claudekit-docs/CLAUDE.md` (lines 112-136)

## Overview

- **Priority:** P1
- **Status:** pending
- **Effort:** 20min

Comprehensive validation of all changes before commit.

## Key Insights

- Build must pass (non-negotiable quality gate)
- Test redirects in preview server (301 status)
- Verify i18n compliance (VI pages have `lang: vi`)
- Re-index Assistant after merge to update RAG

## Requirements

### Functional
- Build passes without errors
- All redirects return 301 status
- All new VI pages have `lang: vi`
- No broken internal links
- No 404s for deleted pages (redirects handle them)

### Non-functional
- Preview server performance acceptable
- No console errors in dev server
- Static assets (if any) still resolve

## Architecture

**Validation layers:**
```
1. Build (Astro SSG)
   ├── Type checking
   ├── Content collection validation
   └── Static asset resolution

2. Middleware
   ├── Redirect rules (301)
   └── Exact + wildcard patterns

3. i18n
   ├── Frontmatter (lang: vi)
   └── Link prefixes (/vi/docs/)

4. Content
   ├── Internal links
   └── Anchor fragments
```

## Related Code Files

**To test:**
- All deleted pages (should 301 redirect)
- All new VI skill pages (should render)
- All updated internal links (should resolve)

**Critical files:**
- `src/middleware.ts` (redirect logic)
- `src/content/docs-vi/engineer/skills/tools/*` (new VI pages)
- `src/content/docs-vi/engineer/skills/ai/copywriting.md` (new VI page)

## Implementation Steps

1. **Build test (CRITICAL)**
   ```bash
   cd /home/kai/claudekit/claudekit-docs
   bun run build
   # MUST pass - no exceptions
   ```

2. **Start preview server**
   ```bash
   bun run preview
   # Note port (usually 4321)
   ```

3. **Test EN cook command redirects**
   ```bash
   curl -I http://localhost:4321/docs/engineer/commands/core/cook
   # Expect: HTTP/1.1 301 Moved Permanently
   # Location: /docs/engineer/skills/cook

   curl -I http://localhost:4321/docs/engineer/commands/core/cook-auto
   # Expect: 301 → /docs/engineer/skills/cook

   curl -I http://localhost:4321/docs/engineer/commands/core/cook-auto-fast
   # Expect: 301 → /docs/engineer/skills/cook

   curl -I http://localhost:4321/docs/engineer/commands/core/cook-auto-parallel
   # Expect: 301 → /docs/engineer/skills/cook
   ```

4. **Test VI git command redirects**
   ```bash
   curl -I http://localhost:4321/vi/docs/engineer/commands/git/commit
   # Expect: 301 → /vi/docs/engineer/skills/tools/git

   curl -I http://localhost:4321/vi/docs/engineer/commands/git/commit-push
   # Expect: 301 → /vi/docs/engineer/skills/tools/git

   curl -I http://localhost:4321/vi/docs/engineer/commands/git/pull-request
   # Expect: 301 → /vi/docs/engineer/skills/tools/git
   ```

5. **Test VI fix command redirects**
   ```bash
   curl -I http://localhost:4321/vi/docs/engineer/commands/fix/ci
   # Expect: 301 → /vi/docs/engineer/skills/tools/fix

   curl -I http://localhost:4321/vi/docs/engineer/commands/fix/fast
   # Expect: 301 → /vi/docs/engineer/skills/tools/fix
   ```

6. **Test VI cook/code command redirects**
   ```bash
   curl -I http://localhost:4321/vi/docs/engineer/commands/core/cook
   # Expect: 301 → /vi/docs/engineer/skills/tools/cook

   curl -I http://localhost:4321/vi/docs/engineer/commands/core/code
   # Expect: 301 → /vi/docs/engineer/skills/tools/cook
   ```

7. **Test VI scout command redirects**
   ```bash
   curl -I http://localhost:4321/vi/docs/engineer/commands/core/scout
   # Expect: 301 → /vi/docs/engineer/skills/tools/scout
   ```

8. **Test VI design command redirects**
   ```bash
   curl -I http://localhost:4321/vi/docs/engineer/commands/design/3d
   # Expect: 301 → /vi/docs/engineer/skills/ai/canvas-design

   curl -I http://localhost:4321/vi/docs/engineer/commands/design/screenshot
   # Expect: 301 → /vi/docs/engineer/skills/ai/canvas-design
   ```

9. **Test VI content command redirects**
   ```bash
   curl -I http://localhost:4321/vi/docs/engineer/commands/content/cro
   # Expect: 301 → /vi/docs/engineer/skills/ai/copywriting

   curl -I http://localhost:4321/vi/docs/engineer/commands/content/enhance
   # Expect: 301 → /vi/docs/engineer/skills/ai/copywriting
   ```

10. **Test VI skill command redirects**
    ```bash
    curl -I http://localhost:4321/vi/docs/engineer/commands/skill/add
    # Expect: 301 → /vi/docs/engineer/skills/tools/skill-creator

    curl -I http://localhost:4321/vi/docs/engineer/commands/skill/create
    # Expect: 301 → /vi/docs/engineer/skills/tools/skill-creator
    ```

11. **Verify new VI skill pages render**
    ```bash
    curl -s http://localhost:4321/vi/docs/engineer/skills/tools/git | grep "<title>"
    # Should show Vietnamese title

    curl -s http://localhost:4321/vi/docs/engineer/skills/tools/fix | grep "<title>"
    curl -s http://localhost:4321/vi/docs/engineer/skills/tools/cook | grep "<title>"
    curl -s http://localhost:4321/vi/docs/engineer/skills/tools/scout | grep "<title>"
    curl -s http://localhost:4321/vi/docs/engineer/skills/ai/copywriting | grep "<title>"
    ```

12. **Verify i18n compliance**
    ```bash
    # VI files missing lang: vi (should return nothing)
    grep -L "lang: vi" src/content/docs-vi/engineer/skills/tools/git.md
    grep -L "lang: vi" src/content/docs-vi/engineer/skills/tools/fix.md
    grep -L "lang: vi" src/content/docs-vi/engineer/skills/tools/cook.md
    grep -L "lang: vi" src/content/docs-vi/engineer/skills/tools/scout.md
    grep -L "lang: vi" src/content/docs-vi/engineer/skills/ai/copywriting.md

    # VI files linking to EN paths (should return nothing)
    grep -rP '\]\(/docs/' src/content/docs-vi/engineer/skills/tools/*.md
    grep -rP '\]\(/docs/' src/content/docs-vi/engineer/skills/ai/copywriting.md
    ```

13. **Check dev server console**
    ```bash
    bun run dev
    # Watch for errors or warnings in console
    # Test navigation in browser manually
    ```

14. **Browser manual testing**
    - Navigate to `/docs/engineer/skills/cook` (should work)
    - Navigate to `/docs/engineer/commands/core/cook` (should redirect)
    - Navigate to `/vi/docs/engineer/skills/tools/git` (should work)
    - Navigate to `/vi/docs/engineer/commands/git/commit` (should redirect)
    - Click any updated internal links (should resolve)

15. **Final build test**
    ```bash
    bun run build
    # MUST pass before commit
    ```

## Todo List

- [ ] Build passes
- [ ] Preview server starts
- [ ] EN cook redirects (4 tests)
- [ ] VI git redirects (3 tests)
- [ ] VI fix redirects (2 tests)
- [ ] VI cook/code redirects (2 tests)
- [ ] VI scout redirects (1 test)
- [ ] VI design redirects (2 tests)
- [ ] VI content redirects (2 tests)
- [ ] VI skill redirects (2 tests)
- [ ] New VI pages render (5 pages)
- [ ] i18n compliance verified
- [ ] Dev server no errors
- [ ] Browser manual testing
- [ ] Final build passes

## Success Criteria

- `bun run build` passes without errors or warnings
- All curl tests return 301 status with correct Location header
- All new VI pages render with Vietnamese content
- All VI pages have `lang: vi` frontmatter
- No broken internal links in browser testing
- Dev server console clean (no errors)

## Risk Assessment

**Low risk:**
- Validation is read-only (no changes made)
- Redirect tests safe to run multiple times

**Potential issues:**
- Preview server port conflict (use different port if needed)
- Redirect chains if middleware patterns overlap (check middleware.ts order)

**Mitigations:**
- Stop existing preview servers before starting new one
- Test redirects match expected targets (not intermediate redirects)

## Security Considerations

None. Validation testing only.

## Next Steps

After validation passes:
1. Commit changes with conventional commit format:
   ```bash
   git add .
   git commit -m "docs: restructure IA - remove legacy command pages after skills migration"
   ```

2. Push to dev branch and create PR

3. After merge, notify Assistant team to re-index docs:
   - Deleted pages no longer in index
   - New VI skill pages indexed
   - RAG returns single source of truth per feature

## Unresolved Questions

1. **Assistant re-indexing:** Does it happen automatically on deploy or manual trigger needed?
2. **integrate/* commands:** Were they migrated? (verify in Phase 2 before deleting)
3. **Marketing scope:** Should marketing/commands cleanup be separate PR or future work?
