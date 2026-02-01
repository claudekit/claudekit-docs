---
phase: 4
title: "Update Internal Links"
status: pending
effort: 30min
---

# Phase 4: Update Internal Links

## Context Links

- Link guidelines: `/home/kai/claudekit/claudekit-docs/CLAUDE.md` (lines 60-78)
- Middleware redirects: `src/middleware.ts`

## Overview

- **Priority:** P1
- **Status:** pending
- **Effort:** 30min

Find and update all internal links pointing to deleted command pages.

## Key Insights

- Absolute paths required (`/docs/...`, not `./...`)
- EN links use `/docs/...`, VI links use `/vi/docs/...`
- Redirects handle external links (301), but internal should point directly to new location
- Common link locations: cheatsheets, concept pages, workflow guides

## Requirements

### Functional
- Replace all `/docs/engineer/commands/...` links with `/docs/engineer/skills/...`
- Replace all `/vi/docs/engineer/commands/...` links with appropriate VI skill paths
- Update both EN and VI docs

### Non-functional
- No broken links after update
- Links point directly to target (not via redirect)
- Preserve anchor links (`#section`)

## Architecture

**Link patterns to find (EN):**
```
/docs/engineer/commands/core/cook*
/docs/engineer/commands/git/*
/docs/engineer/commands/fix/*
/docs/engineer/commands/design/*
/docs/engineer/commands/content/*
/docs/engineer/commands/skill/*
```

**Replacement targets (EN):**
```
/docs/engineer/commands/core/cook* → /docs/engineer/skills/cook
/docs/engineer/commands/git/* → /docs/engineer/skills/git
/docs/engineer/commands/fix/* → /docs/engineer/skills/fix
/docs/engineer/commands/design/* → /docs/engineer/skills/ai-artist
/docs/engineer/commands/content/* → /docs/engineer/skills/copywriting
/docs/engineer/commands/skill/* → /docs/engineer/skills/skill-creator
```

**Link patterns to find (VI):**
```
/vi/docs/engineer/commands/git/*
/vi/docs/engineer/commands/fix/*
/vi/docs/engineer/commands/core/cook*
/vi/docs/engineer/commands/core/code*
/vi/docs/engineer/commands/core/scout*
/vi/docs/engineer/commands/design/*
/vi/docs/engineer/commands/content/*
/vi/docs/engineer/commands/skill/*
```

**Replacement targets (VI):**
```
/vi/docs/engineer/commands/git/* → /vi/docs/engineer/skills/tools/git
/vi/docs/engineer/commands/fix/* → /vi/docs/engineer/skills/tools/fix
/vi/docs/engineer/commands/core/cook* → /vi/docs/engineer/skills/tools/cook
/vi/docs/engineer/commands/core/code* → /vi/docs/engineer/skills/tools/cook
/vi/docs/engineer/commands/core/scout* → /vi/docs/engineer/skills/tools/scout
/vi/docs/engineer/commands/design/* → /vi/docs/engineer/skills/ai/canvas-design
/vi/docs/engineer/commands/content/* → /vi/docs/engineer/skills/ai/copywriting
/vi/docs/engineer/commands/skill/* → /vi/docs/engineer/skills/tools/skill-creator
```

## Related Code Files

**Search locations:**
- `src/content/docs/` (all .md files)
- `src/content/docs-vi/` (all .md files)
- `src/components/` (.astro, .tsx files if they contain doc links)

**To modify:**
- Any files found with old command links

## Implementation Steps

1. **Search EN command links**
   ```bash
   cd /home/kai/claudekit/claudekit-docs

   # Cook family
   grep -rn "/docs/engineer/commands/core/cook" src/content/docs/ --include="*.md"

   # Git family (EN - should not exist, but check)
   grep -rn "/docs/engineer/commands/git/" src/content/docs/ --include="*.md"

   # Fix family (EN - should not exist)
   grep -rn "/docs/engineer/commands/fix/" src/content/docs/ --include="*.md"

   # Design family (EN - should not exist)
   grep -rn "/docs/engineer/commands/design/" src/content/docs/ --include="*.md"

   # Content family (EN - should not exist)
   grep -rn "/docs/engineer/commands/content/" src/content/docs/ --include="*.md"

   # Skill family (EN - should not exist)
   grep -rn "/docs/engineer/commands/skill/" src/content/docs/ --include="*.md"
   ```

2. **Search VI command links**
   ```bash
   # Git family
   grep -rn "/vi/docs/engineer/commands/git/" src/content/docs-vi/ --include="*.md"

   # Fix family
   grep -rn "/vi/docs/engineer/commands/fix/" src/content/docs-vi/ --include="*.md"

   # Cook/code family
   grep -rn "/vi/docs/engineer/commands/core/cook\|/vi/docs/engineer/commands/core/code" src/content/docs-vi/ --include="*.md"

   # Scout family
   grep -rn "/vi/docs/engineer/commands/core/scout" src/content/docs-vi/ --include="*.md"

   # Design family
   grep -rn "/vi/docs/engineer/commands/design/" src/content/docs-vi/ --include="*.md"

   # Content family
   grep -rn "/vi/docs/engineer/commands/content/" src/content/docs-vi/ --include="*.md"

   # Skill family
   grep -rn "/vi/docs/engineer/commands/skill/" src/content/docs-vi/ --include="*.md"
   ```

3. **Document findings**
   Create list of files + line numbers to update

4. **Update EN links**
   For each file found in Step 1:
   - Read file
   - Replace old link with new skill link
   - Preserve any anchor fragments (`#section`)
   - Save file

5. **Update VI links**
   For each file found in Step 2:
   - Read file
   - Replace old link with categorized VI skill path
   - Preserve anchor fragments
   - Save file

6. **Check components for hardcoded links**
   ```bash
   grep -rn "/docs/engineer/commands/" src/components/ --include="*.astro" --include="*.tsx"
   grep -rn "/vi/docs/engineer/commands/" src/components/ --include="*.astro" --include="*.tsx"
   ```

7. **Update component links if found**

8. **Verify no remaining old links**
   ```bash
   # Should return nothing
   grep -r "/docs/engineer/commands/core/cook\|/docs/engineer/commands/git/\|/docs/engineer/commands/fix/\|/docs/engineer/commands/design/\|/docs/engineer/commands/content/\|/docs/engineer/commands/skill/" src/content/docs/ --include="*.md"

   grep -r "/vi/docs/engineer/commands/git/\|/vi/docs/engineer/commands/fix/\|/vi/docs/engineer/commands/core/cook\|/vi/docs/engineer/commands/core/scout\|/vi/docs/engineer/commands/design/\|/vi/docs/engineer/commands/content/\|/vi/docs/engineer/commands/skill/" src/content/docs-vi/ --include="*.md"
   ```

9. **Build test**
   ```bash
   bun run build
   ```

## Todo List

- [ ] Search EN command links (6 patterns)
- [ ] Search VI command links (7 patterns)
- [ ] Document findings (file + line numbers)
- [ ] Update EN links
- [ ] Update VI links
- [ ] Check components for hardcoded links
- [ ] Update component links if found
- [ ] Verify no remaining old links
- [ ] Build test passes

## Success Criteria

- All internal links updated to new skill paths
- No grep results for old command paths in content/
- `bun run build` passes
- No 404s when clicking internal links in preview

## Risk Assessment

**Low risk:**
- Search patterns comprehensive
- Replacements straightforward (old path → new path)

**Potential issues:**
- Anchor fragments might break if skill page structure differs from command page
- Links in code comments or non-markdown files

**Mitigations:**
- Test each updated page in preview
- Check anchor targets exist in new skill pages
- Expand search to .astro/.tsx if needed

## Security Considerations

None. Link updates only.

## Next Steps

Proceed to Phase 5 (Validation) for comprehensive testing of all changes.
