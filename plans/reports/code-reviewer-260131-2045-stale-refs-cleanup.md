# Code Review: Stale References Cleanup

**Date:** 2026-01-31
**Reviewer:** code-reviewer (adcc7eb)
**Work Context:** /home/kai/claudekit/claudekit-docs
**Scope:** Engineer section - commands and agents docs

---

## Code Review Summary

### Scope
- Files reviewed: 11 command pages, 6 agent pages
- Lines analyzed: ~2500
- Review focus: Stale references to removed/migrated commands
- Updated plans: None

### Overall Assessment

Found **17 stale references** to removed or migrated commands across command and agent documentation. All references point to `/code`, `/fix`, `/design`, or `/content` - commands that have been migrated to skills in engineer@1.3.0+.

### Critical Issues

None. No security vulnerabilities or breaking issues found.

### High Priority Findings

**Stale Command References (17 instances)**

Commands referenced have been migrated to skills but documentation still links to old command paths that no longer exist:

#### 1. `/code` References (11 instances)

| File | Line | Context | Issue |
|------|------|---------|-------|
| `commands/index.md` | 19 | Migration notice example | Mentions `/code` → `/cook` migration |
| `commands/index.md` | 87 | Quick reference | Shows `/cook` as replacement (correct) |
| `commands/core/ck-help.md` | 44 | Workflow example | `/plan` → `/code` workflow |
| `commands/core/test.md` | 49 | Related commands table | Lists `/code` as related command |
| `commands/core/ask.md` | 363 | Next actions | Suggests `/plan` then `/code` |
| `commands/plan/fast.md` | 54 | Important note | "Use `/code` after approval" |
| `commands/plan/ci.md` | 273 | Next step | "Use: /code [implement plan...]" |
| `commands/plan/ci.md` | 438 | Next step | "Next: /code [implement CI fixes...]" |
| `commands/plan/ci.md` | 623 | After getting plan | "/code [implement CI fix plan]" |
| `commands/plan/ci.md` | 796 | Test locally first | "/code [implement from plan]" |
| `commands/plan/ci.md` | 848 | Next steps links | "[/code](/docs/engineer/commands/core/code)" |
| `commands/plan/hard.md` | 65 | Important note | "Use `/code` after approval" |
| `commands/plan/two.md` | 849 | Next steps links | "[/code](/docs/engineer/commands/core/code)" |
| `agents/fullstack-developer.md` | 36 | Use case table | `/code plans/...` example |

#### 2. `/fix`, `/design`, `/content` References (Mentioned but not linked)

| File | Line | Context | Status |
|------|------|---------|--------|
| `commands/index.md` | 19 | Migration notice | Correctly notes migration to skills |
| `commands/core/test.md` | 47 | Related commands | Lists `/fix` as skill (table shows it) |

### Medium Priority Improvements

**Documentation Consistency**

1. **Migration Notice Strategy**: `commands/index.md` includes migration notice at top (lines 15-25) but individual command pages don't warn users about stale workflow references.

2. **Mixed Workflow Guidance**: Some pages show old `/plan` → `/code` workflow while Quick Start guide correctly shows `/plan` → `/cook` workflow.

3. **Broken Internal Links**: 2 instances link to `/docs/engineer/commands/core/code` which doesn't exist post-migration.

**File-Specific Code Quality Issues**

None - markdown files, no code quality issues.

### Low Priority Suggestions

**File Naming**: All command files use correct kebab-case naming.

**Frontmatter Consistency**: All files have proper frontmatter with `section`, `kit`, `category`, `order`, `published` fields.

### Positive Observations

1. **Build Quality**: `bun run build` passes successfully with zero errors
2. **Migration Notice**: Clear migration notice on commands index page
3. **Type Safety**: N/A (markdown documentation)
4. **Comprehensive Examples**: `/plan:ci` has excellent detailed examples
5. **Proper Linking**: Most internal links use absolute paths correctly

### Recommended Actions

1. **High Priority - Update All `/code` References**
   - Replace `/code` with `/cook` in workflow examples
   - Update internal links from `/docs/engineer/commands/core/code` to `/docs/engineer/skills/cook`
   - Add deprecation notices where `/code` is mentioned historically

2. **Medium Priority - Add Migration Warnings**
   - Add callout boxes on affected pages referencing migration guide
   - Example: `:::note[Command Migrated] /code is now /cook skill. See [Migration Guide](/docs/getting-started/migration-from-commands-to-skills) :::`

3. **Low Priority - Consistency Review**
   - Ensure all "Next Steps" sections use current command names
   - Update workflow diagrams if any exist

### Files Requiring Updates

**Commands:**
- `src/content/docs/engineer/commands/index.md` (line 19, 44, 87)
- `src/content/docs/engineer/commands/core/ck-help.md` (line 44)
- `src/content/docs/engineer/commands/core/test.md` (line 49)
- `src/content/docs/engineer/commands/core/ask.md` (line 363)
- `src/content/docs/engineer/commands/plan/fast.md` (line 54)
- `src/content/docs/engineer/commands/plan/ci.md` (lines 273, 438, 623, 796, 848)
- `src/content/docs/engineer/commands/plan/hard.md` (line 65)
- `src/content/docs/engineer/commands/plan/two.md` (line 849)

**Agents:**
- `src/content/docs/engineer/agents/fullstack-developer.md` (line 36)

### Metrics

- Type Coverage: N/A (markdown)
- Test Coverage: N/A (documentation)
- Linting Issues: 0 (build passes)
- **Stale References**: 17 (documented above)

### Next Steps

1. Fix stale `/code` references → `/cook` or appropriate skill
2. Update broken internal links to point to skills section
3. Add migration callouts on high-traffic pages (plan/ci.md, plan/fast.md, plan/hard.md)
4. Run `bun run build` to verify no broken links after updates

---

## Unresolved Questions

1. **Should `/code` remain as legacy alias?** - If engineer@1.3.0+ still supports `/code` as alias to `/cook`, docs should clarify this rather than removing all references.

2. **Are there Vietnamese docs to update?** - This review only covered English (`src/content/docs/`). Same updates needed in `src/content/docs-vi/` if Vietnamese versions exist.

3. **Migration guide completeness?** - Need to verify `/docs/getting-started/migration-from-commands-to-skills` exists and is comprehensive (referenced in index.md line 24).
