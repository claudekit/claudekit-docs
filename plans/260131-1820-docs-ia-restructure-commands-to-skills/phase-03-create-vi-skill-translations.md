---
phase: 3
title: "Create Missing VI Skill Translations"
status: pending
effort: 60min
---

# Phase 3: Create Missing VI Skill Translations

## Context Links

- EN skill pages: `src/content/docs/engineer/skills/`
- VI skill structure: `src/content/docs-vi/engineer/skills/` (categorized: tools, ai, auth, backend, frontend, ecommerce)
- Audit: `research/researcher-01-commands-vs-skills-audit.md` (lines 19-121)

## Overview

- **Priority:** P1
- **Status:** pending
- **Effort:** 60min (12min per page avg)

Create 5 missing VI skill translations required by Phase 2 redirects.

## Key Insights

- EN skill pages use flat structure: `skills/git.md`, `skills/fix.md`, etc.
- VI skill pages use categorized structure: `skills/tools/`, `skills/ai/`, etc.
- VI pages MUST have `lang: vi` frontmatter
- Translation quality: professional Vietnamese (not machine translated)

## Requirements

### Functional
- Create 5 VI skill pages matching EN content
- Use categorized VI structure (not flat)
- Complete Phase 2 redirect targets

### Non-functional
- Professional VI translation
- Consistent frontmatter (lang: vi, category, order)
- Absolute internal links (`/vi/docs/...`)

## Architecture

**Missing VI skill pages:**

```
src/content/docs-vi/engineer/skills/
  tools/
    + git.md                        [CREATE - translate from EN]
    + fix.md                        [CREATE - translate from EN]
    + cook.md                       [CREATE - translate from EN]
    + scout.md                      [CREATE - translate from EN]

  ai/
    + copywriting.md                [CREATE - translate from EN copywriting.md]
```

**EN source files:**
```
src/content/docs/engineer/skills/
  - git.md                          [SOURCE]
  - fix.md                          [SOURCE]
  - cook.md                         [SOURCE]
  - scout.md                        [SOURCE]
  - copywriting.md                  [SOURCE]
```

**Frontmatter template (VI):**
```yaml
---
title: "[Vietnamese title]"
description: "[Vietnamese description]"
category: "skills"
order: [number]
published: true
lang: vi
---
```

## Related Code Files

**To create:**
- `src/content/docs-vi/engineer/skills/tools/git.md`
- `src/content/docs-vi/engineer/skills/tools/fix.md`
- `src/content/docs-vi/engineer/skills/tools/cook.md`
- `src/content/docs-vi/engineer/skills/tools/scout.md`
- `src/content/docs-vi/engineer/skills/ai/copywriting.md`

**Source files:**
- `src/content/docs/engineer/skills/git.md`
- `src/content/docs/engineer/skills/fix.md`
- `src/content/docs/engineer/skills/cook.md`
- `src/content/docs/engineer/skills/scout.md`
- `src/content/docs/engineer/skills/copywriting.md`

## Implementation Steps

1. **Read EN skill pages**
   ```bash
   cd /home/kai/claudekit/claudekit-docs
   # Read all 5 source pages to understand structure
   ```

2. **Create VI tools/ directory if missing**
   ```bash
   mkdir -p src/content/docs-vi/engineer/skills/tools/
   ```

3. **Translate git.md**
   - Read `src/content/docs/engineer/skills/git.md`
   - Create `src/content/docs-vi/engineer/skills/tools/git.md`
   - Add `lang: vi` frontmatter
   - Translate title, description, all content
   - Update internal links to `/vi/docs/...` format

4. **Translate fix.md**
   - Read `src/content/docs/engineer/skills/fix.md`
   - Create `src/content/docs-vi/engineer/skills/tools/fix.md`
   - Same process as git.md

5. **Translate cook.md**
   - Read `src/content/docs/engineer/skills/cook.md`
   - Create `src/content/docs-vi/engineer/skills/tools/cook.md`
   - Same process

6. **Translate scout.md**
   - Read `src/content/docs/engineer/skills/scout.md`
   - Create `src/content/docs-vi/engineer/skills/tools/scout.md`
   - Same process

7. **Translate copywriting.md**
   - Read `src/content/docs/engineer/skills/copywriting.md`
   - Create `src/content/docs-vi/engineer/skills/ai/copywriting.md`
   - Category: ai (not tools)
   - Same translation process

8. **Verify frontmatter compliance**
   ```bash
   # All VI pages must have lang: vi
   grep -L "lang: vi" src/content/docs-vi/engineer/skills/tools/*.md
   grep -L "lang: vi" src/content/docs-vi/engineer/skills/ai/copywriting.md
   # Should return nothing
   ```

9. **Check internal link format**
   ```bash
   # VI pages should link to /vi/docs/..., not /docs/...
   grep -rP '\]\(/docs/' src/content/docs-vi/engineer/skills/tools/ --include="*.md"
   grep -rP '\]\(/docs/' src/content/docs-vi/engineer/skills/ai/copywriting.md
   # Should return nothing
   ```

10. **Build test**
    ```bash
    bun run build
    ```

## Todo List

- [ ] Read 5 EN skill pages
- [ ] Create tools/ directory if missing
- [ ] Translate git.md → tools/git.md
- [ ] Translate fix.md → tools/fix.md
- [ ] Translate cook.md → tools/cook.md
- [ ] Translate scout.md → tools/scout.md
- [ ] Translate copywriting.md → ai/copywriting.md
- [ ] Verify lang: vi frontmatter
- [ ] Check internal link format
- [ ] Build test passes

## Success Criteria

- 5 VI skill pages created
- All have `lang: vi` frontmatter
- Professional Vietnamese translation (not machine translated)
- Internal links use `/vi/docs/...` format
- `bun run build` passes
- Pages render correctly in VI docs nav

## Risk Assessment

**Medium risk:**
- Translation quality (avoid machine translation)
- VI categorization different from EN (tools/ vs flat structure)
- Internal link format (/vi/docs/ prefix required)

**Mitigations:**
- Use professional translation or native speaker review
- Follow existing VI skill structure (check tools/skill-creator.md as reference)
- Verify link format with grep before build

## Security Considerations

None. Static content creation only.

## Next Steps

After completion:
1. Phase 2 redirects now have valid targets
2. Proceed to Phase 4 (Update internal links)
3. Test all redirects end-to-end in Phase 5
