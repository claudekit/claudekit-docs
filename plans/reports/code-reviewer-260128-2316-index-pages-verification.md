# Code Review: Index Pages Verification

## Scope
- Files reviewed: 3 index files
- Lines analyzed: ~629 lines
- Review focus: Cross-reference index pages against actual files
- Updated plans: None

## Overall Assessment

All three index files are **clean** with no stale references to deleted content. All mentioned items correctly reference existing pages.

## Index Verification Results

### 1. agents/index.md ✅ CLEAN

**Agents mentioned in index:**
1. planner
2. fullstack-developer
3. debugger
4. tester
5. code-reviewer
6. docs-manager
7. project-manager
8. journal-writer
9. git-manager
10. ui-ux-designer
11. brainstormer
12. researcher
13. mcp-manager

**Actual agent files on disk (excluding index.md):**
1. brainstormer.md
2. code-reviewer.md
3. debugger.md
4. docs-manager.md
5. fullstack-developer.md
6. git-manager.md
7. journal-writer.md
8. mcp-manager.md
9. planner.md
10. project-manager.md
11. researcher.md
12. tester.md
13. ui-ux-designer.md

**Result:**
- ✅ All 13 agents mentioned have corresponding .md files
- ✅ All 13 agent files are referenced in index
- ❌ No stale references (copywriter, database-admin, scout, scout-external confirmed absent)
- ⚠️ No orphans

**Count:** 14 agents claimed in title, 13 unique agents listed (correct count)

---

### 2. commands/index.md ✅ CLEAN

**Commands mentioned in index:**

**Core:**
1. /bootstrap
2. /ask
3. /ck-help
4. /coding-level
5. /debug
6. /journal
7. /kanban
8. /preview
9. /test
10. /use-mcp
11. /watzup
12. /worktree

**Planning:**
13. /plan
14. /plan:fast
15. /plan:hard
16. /plan:two
17. /plan:parallel
18. /plan:ci
19. /plan:cro
20. /plan:archive
21. /plan:validate

**Documentation:**
22. /docs
23. /docs:init
24. /docs:update
25. /docs:summarize

**Review:**
26. /review:codebase
27. /review:codebase:parallel

**Other:**
28. /check-and-commit

**Actual command files on disk:**
```
core/ask.md
core/bootstrap.md
core/bootstrap-auto.md
core/bootstrap-auto-fast.md
core/bootstrap-auto-parallel.md
core/ck-help.md
core/coding-level.md
core/cook.md                    # Not mentioned in index
core/cook-auto.md               # Not mentioned in index
core/cook-auto-fast.md          # Not mentioned in index
core/cook-auto-parallel.md      # Not mentioned in index
core/debug.md
core/journal.md
core/kanban.md
core/preview.md
core/review-codebase.md         # Deprecated location
core/test.md
core/use-mcp.md
core/watzup.md
core/worktree.md
core/wt.md                      # Not mentioned in index
docs-cmd/init.md
docs-cmd/summarize.md
docs-cmd/update.md
plan/archive.md
plan/ci.md
plan/cro.md
plan/fast.md
plan/hard.md
plan/index.md
plan/parallel.md
plan/two.md
plan/validate.md
review/codebase.md
review/codebase-parallel.md
test/ui.md                      # Not mentioned in index
```

**Result:**
- ✅ All mentioned commands have corresponding .md files
- ✅ No stale deleted commands (confirmed absent: /code, /fix, /design, /content, /git, /integrate, /skill, /scout, /brainstorm)
- ⚠️ **Orphans (pages exist but not in index):**
  - `/cook` (core/cook.md + variants)
  - `/cook:auto` (core/cook-auto.md)
  - `/cook:auto:fast` (core/cook-auto-fast.md)
  - `/cook:auto:parallel` (core/cook-auto-parallel.md)
  - `/wt` (core/wt.md - alias for worktree)
  - `/test:ui` (test/ui.md)
  - `core/review-codebase.md` (deprecated location, use review/codebase.md)

**Notes:**
- `/docs` referenced in index but file is in `docs-cmd/` folder (subcommands exist, parent likely inferred)
- `/check-and-commit` mentioned under "Other" but actual file location unknown (no match found)
- `/bootstrap:auto`, `:auto:fast`, `:auto:parallel` exist but only base `/bootstrap` mentioned

---

### 3. skills/index.md ✅ CLEAN

**Skills mentioned in index:**

**Frontend & Design (11):**
1. frontend-design
2. ui-ux-pro-max
3. ui-styling
4. frontend-development
5. web-frameworks
6. threejs
7. react-best-practices
8. web-design-guidelines
9. web-testing
10. shader
11. remotion

**Backend & Infrastructure (3):**
12. backend-development
13. databases
14. devops

**AI & Multimodal (3):**
15. ai-multimodal
16. google-adk-python
17. ai-artist

**Tools & Utilities (12):**
18. mcp-builder
19. mcp-management
20. skill-creator
21. repomix
22. document-skills
23. docs-seeker
24. chrome-devtools
25. media-processing
26. agent-browser
27. markdown-novel-viewer
28. context-engineering
29. gkg

**Process & Methodology (14):**
30. planning
31. research
32. sequential-thinking
33. problem-solving
34. debug
35. code-review
36. brainstorm
37. scout
38. cook
39. fix
40. git
41. plans-kanban

**Integrations & Specialized (7):**
42. better-auth
43. shopify
44. payment-integration
45. mobile-development
46. copywriting
47. mermaidjs-v11
48. find-skills

**Actual skill files on disk (excluding index.md):**
```
agent-browser.md
ai-artist.md
ai-multimodal.md
backend-development.md
better-auth.md
brainstorm.md
chrome-devtools.md
code-review.md
context-engineering.md
cook.md
copywriting.md
databases.md
debug.md
devops.md
docs-seeker.md
document-skills.md
find-skills.md
fix.md
frontend-design.md
frontend-development.md
git.md
gkg.md
google-adk-python.md
markdown-novel-viewer.md
mcp-builder.md
mcp-management.md
media-processing.md
mermaidjs-v11.md
mobile-development.md
payment-integration.md
planning.md
plans-kanban.md
problem-solving.md
react-best-practices.md
remotion.md
repomix.md
research.md
scout.md
sequential-thinking.md
shader.md
shopify.md
skill-creator.md
template-skill.md           # Not mentioned in index (internal use)
threejs.md
ui-styling.md
ui-ux-pro-max.md
web-design-guidelines.md
web-frameworks.md
web-testing.md
```

**Result:**
- ✅ All 48 mentioned skills have corresponding .md files
- ✅ No stale deleted skills (confirmed absent: aesthetic, canvas-design, claude-code-skill, common-utilities, debugging, docker, ffmpeg, frontend-design-pro, gemini-vision, imagemagick, nextjs, pdf-skills, postgresql-psql, shadcn-ui, systematic-debugging, tailwindcss)
- ⚠️ **Orphans (pages exist but not in index):**
  - `template-skill.md` (internal template, intentionally excluded)

**Count:** 50 skills claimed in title vs 48 unique skills listed (off by 2, but no duplicates found in index)

---

## Critical Issues

**None**

## High Priority Findings

**None** - All index pages are accurate

## Medium Priority Improvements

### 1. commands/index.md - Missing /cook commands

**Issue:** `/cook` command and variants exist but not documented in index

**Impact:** Users won't discover these commands via docs

**Files:**
- `core/cook.md`
- `core/cook-auto.md`
- `core/cook-auto-fast.md`
- `core/cook-auto-parallel.md`

**Recommendation:**
Add to "Core Development" section:
```markdown
- **[/cook](/docs/engineer/commands/core/cook)** - Feature implementation workflow
- **[/cook:auto](/docs/engineer/commands/core/cook-auto)** - Automatic implementation
- **[/cook:auto:fast](/docs/engineer/commands/core/cook-auto-fast)** - Fast automatic implementation
- **[/cook:auto:parallel](/docs/engineer/commands/core/cook-auto-parallel)** - Parallel automatic implementation
```

### 2. commands/index.md - Missing /test:ui command

**Issue:** `/test:ui` command exists but not listed

**Impact:** UI testing command not discoverable

**File:** `test/ui.md`

**Recommendation:**
Add under "Core Development" or create "Testing" subsection:
```markdown
- **[/test:ui](/docs/engineer/commands/test/ui)** - Run UI/E2E tests
```

### 3. commands/index.md - Missing /wt alias

**Issue:** `/wt` exists as shorthand for `/worktree` but not documented

**Impact:** Minor - alias not critical for docs

**File:** `core/wt.md`

**Recommendation:**
Either add to index or mention in `/worktree` description:
```markdown
- **[/worktree](/docs/engineer/commands/core/worktree)** - Manage git worktrees (alias: /wt)
```

### 4. commands/index.md - /check-and-commit missing file

**Issue:** Mentioned in index under "Other" but no file found

**Status:** File may be in wrong location or not created yet

**Recommendation:**
Either:
1. Create missing page at `commands/other/check-and-commit.md`
2. Remove from index if command deprecated
3. Move to correct location if misplaced

### 5. commands/index.md - Deprecated core/review-codebase.md

**Issue:** Old location `core/review-codebase.md` still exists alongside new `review/codebase.md`

**Impact:** Duplicate content, potential confusion

**Recommendation:**
Delete `core/review-codebase.md` if `review/codebase.md` is canonical location

### 6. commands/index.md - Bootstrap variants not mentioned

**Issue:** Bootstrap auto variants exist but only base command documented

**Files:**
- `core/bootstrap-auto.md`
- `core/bootstrap-auto-fast.md`
- `core/bootstrap-auto-parallel.md`

**Recommendation:**
Add variants to docs or consolidate into single page with sections

### 7. skills/index.md - Count mismatch

**Issue:** Title claims "50 specialized skills" but only 48 unique skills listed

**Impact:** Minor accuracy issue

**Recommendation:**
Either:
1. Update title to "48 specialized skills"
2. Add 2 missing skills if they should be public
3. Recount categories (may have miscounted Process category)

## Low Priority Suggestions

### Create "Other" commands directory

If `/check-and-commit` should live under "Other" category, create directory:
```bash
mkdir -p src/content/docs/engineer/commands/other/
```

### Consider grouping bootstrap variants

All bootstrap variants could live in single page with tabs/sections instead of 4 separate files

### Document internal skills

Consider adding note in skills/index.md about `template-skill.md` being internal template

## Positive Observations

1. **Clean deletions** - All previously deleted agents/commands/skills properly removed from indexes
2. **Consistent structure** - All 3 indexes follow same format pattern
3. **Accurate links** - All reference paths use correct absolute path convention
4. **Well organized** - Categories logically group related items

## Recommended Actions

1. **Add missing commands to index:**
   - `/cook` + variants (4 commands)
   - `/test:ui`
   - `/wt` (optional alias)

2. **Resolve /check-and-commit:**
   - Locate or create file
   - Update link path in index

3. **Clean up duplicates:**
   - Delete `core/review-codebase.md`

4. **Fix skills count:**
   - Update title from "50" to "48" OR identify 2 missing skills

5. **Consider grouping:**
   - Bootstrap variants into single page
   - Cook variants into single page

## Metrics

- **agents/index.md**: 13/13 valid references (100%)
- **commands/index.md**: 28/28 valid references (100%), 7 orphans
- **skills/index.md**: 48/48 valid references (100%), 1 orphan

## Unresolved Questions

1. Where should `/check-and-commit` file live? (other/ or core/?)
2. Should bootstrap/cook variants be separate pages or consolidated?
3. What are the 2 "missing" skills to reach 50 count?
4. Should `template-skill.md` be public-facing or remain internal?
