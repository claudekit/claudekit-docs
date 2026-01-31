# Plan/Bootstrap Syntax Reversion Report

**Agent:** fullstack-developer
**Date:** 2026-01-31 17:05
**Task:** Revert incorrect flag syntax for /plan and /bootstrap commands back to colon syntax

## Summary

Successfully reverted all instances of `/plan` and `/bootstrap` commands from incorrect flag syntax (`--`) back to the correct colon syntax (`:`). This fix addresses a batch change that incorrectly migrated these commands to the new flag syntax when they should have remained with colon syntax.

## Changes Overview

### Total Files Modified: 21 (English docs only)

#### Pattern Reverted

| Incorrect (old) | Correct (new) |
|----------------|---------------|
| `/plan --fast` | `/plan:fast` |
| `/plan --hard` | `/plan:hard` |
| `/plan --parallel` | `/plan:parallel` |
| `/plan --ci` | `/plan:ci` |
| `/plan --cro` | `/plan:cro` |
| `/plan --validate` | `/plan:validate` |
| `/plan --archive` | `/plan:archive` |
| `/bootstrap --auto` | `/bootstrap:auto` |
| `/bootstrap --auto --fast` | `/bootstrap:auto:fast` |
| `/bootstrap --auto --parallel` | `/bootstrap:auto:parallel` |

## Files Modified

### 1. Agent Documentation
- `src/content/docs/engineer/agents/fullstack-developer.md` - 2 changes
- `src/content/docs/engineer/agents/planner.md` - 2 changes

### 2. Bootstrap Commands
- `src/content/docs/engineer/commands/core/bootstrap-auto-fast.md` - Title + 2 changes
- `src/content/docs/engineer/commands/core/bootstrap-auto-parallel.md` - Title + 11 changes
- `src/content/docs/engineer/commands/core/bootstrap-auto.md` - Title + 2 changes
- `src/content/docs/engineer/commands/core/bootstrap.md` - 2 changes

### 3. Plan Commands
- `src/content/docs/engineer/commands/plan/fast.md` - Title + 2 changes
- `src/content/docs/engineer/commands/plan/hard.md` - Title + 2 changes
- `src/content/docs/engineer/commands/plan/index.md` - 11 changes
- `src/content/docs/engineer/commands/plan/parallel.md` - Title + 8 changes
- `src/content/docs/engineer/commands/plan/validate.md` - 1 change

### 4. Mixed Files (had both cook/fix AND plan/bootstrap refs)
- `src/content/docs/engineer/commands/core/cook-auto.md` - 1 change
- `src/content/docs/engineer/commands/core/cook-auto-fast.md` - 1 change
- `src/content/docs/engineer/commands/core/cook-auto-parallel.md` - 4 changes
- `src/content/docs/engineer/commands/index.md` - 8 changes

### 5. Other Documentation
- `src/content/docs/engineer/index.md` - 1 change
- `src/content/docs/getting-started/concepts.md` - 1 change
- `src/content/docs/getting-started/cheatsheet.md` - 6 changes
- `src/content/docs/getting-started/migration-from-commands-to-skills.md` - 1 change
- `src/content/docs/marketing/commands/plan.md` - 3 changes
- `src/content/docs/workflows/new-project.md` - 1 change

## Verification

Final check confirmed **0** remaining instances of incorrect syntax:
```bash
grep -rn "/plan --\|/bootstrap --" src/content/docs/ |
  grep -v "npm cache clean" |
  grep -v "/kanban --" |
  grep -v "/code --" |
  grep -v "/cook --" |
  grep -v "/worktree --" |
  grep -v "/fix --" |
  wc -l
# Result: 0
```

## Commands NOT Changed

Following commands correctly use flag syntax (no changes needed):
- `/code --parallel` → `/code:parallel` (already migrated in other batch)
- `/cook --auto` (uses flag syntax, not colon)
- `/fix --quick` (uses flag syntax, not colon)
- `/kanban --stop` (uses flag syntax, not colon)
- All git, docs, and other commands

## Key Takeaways

1. **Plan commands** use colon syntax: `/plan:fast`, `/plan:hard`, `/plan:parallel`
2. **Bootstrap commands** use colon syntax: `/bootstrap:auto`, `/bootstrap:auto:fast`
3. **Cook/Fix/Code commands** use flag syntax: `/cook --auto`, `/fix --quick`, `/code --parallel`
4. Command syntax is **NOT** being unified - different commands use different patterns

## Testing Recommendation

Build the docs to ensure no broken links:
```bash
bun run build
```

All internal links should resolve correctly as file paths were updated to match new command syntax.
