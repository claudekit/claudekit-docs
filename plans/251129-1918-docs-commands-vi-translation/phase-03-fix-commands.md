# Phase 03: Fix Commands Documentation

**Phase ID**: 03
**Status**: Pending
**Priority**: High
**Estimated Complexity**: Medium
**Files**: 2

## Context

Fix commands with intelligent routing + parallel execution:
- `/fix` (update) - Router analyzing issue type, routes to specialized fix command
- `/fix:parallel` (new) - Fixes multiple independent issues using parallel agents

## Research Links

- Missing Commands: Lines 183-222 (fix routing decision tree)
- Reference: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/fix/ui.md`

## Requirements

### 1. /fix Router Documentation (UPDATE EXISTING)

**File**: Check if `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/fix/index.md` exists
- If yes: UPDATE with routing logic
- If no: CREATE new file

**Frontmatter**:
```yaml
---
title: /fix
description: Intelligently route issues to specialized fix commands based on type, complexity, and scope analysis
category: commands/fix
order: 1
published: true
---
```

**Content Sections**:
1. **Overview**: Intelligent issue router
2. **Syntax**: `/fix [issues]` (required)
3. **What It Does**:
   - Analyzes issue description
   - Detects issue type via keywords
   - Routes to specialized fix command
   - Enhances description before delegation
4. **Pre-Routing Check**:
   - Check for existing plan at `<WORKING-DIR>/.claude/active-plan`
   - If found: route to `/code <path-to-plan>` instead
5. **Decision Tree** (priority order):
   ```
   1. Existing plan found → /code <path>
   2. Type errors (type, typescript, tsc) → /fix:types
   3. UI/UX (ui, ux, design, layout, style, css, responsive) → /fix:ui
   4. CI/CD (github actions, pipeline, ci/cd, workflow) → /fix:ci
   5. Tests (test, spec, jest, vitest, failing test) → /fix:test
   6. Logs (logs, error logs, log file, stack trace) → /fix:logs
   7. Multiple independent issues (2+ unrelated) → /fix:parallel
   8. Complex (complex, architecture, refactor, major) → /fix:hard
   9. Default (simple, single file) → /fix:fast
   ```
6. **Keyword Detection**: Table of keywords → route mapping
7. **Examples**: 8 scenarios covering each route
8. **Clarification**: If unclear, asks user before routing
9. **Related Commands**: List all /fix:* variants

**Complexity**: 2 lightning (⚡⚡)

### 2. /fix:parallel Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/fix/parallel.md`

**Frontmatter**:
```yaml
---
title: /fix:parallel
description: Fix multiple independent issues simultaneously using parallel fullstack-developer agents for faster resolution
category: commands/fix
order: 10
published: true
---
```

**Content Sections**:
1. **Overview**: Parallel issue fixing for independent bugs
2. **Syntax**: `/fix:parallel [issues]` (required, list format)
3. **When to Use**:
   - 2+ issues that don't affect same files
   - Independent bugs (no shared context needed)
   - Time-sensitive fixes
4. **What It Does**:
   - Parses issue list (numbered or bullet points)
   - Validates issues are independent (checks file overlap)
   - Spawns N fullstack-developer agents in parallel
   - Each agent fixes one issue
   - Aggregates results
5. **Issue Format**:
   ```bash
   /fix:parallel [
   1. Button not clickable on mobile
   2. API timeout on /users endpoint
   3. Typo in footer copyright
   ]
   ```
6. **Workflow**:
   - Step 1: Parse issues (extract list)
   - Step 2: Validate independence (no file conflicts)
   - Step 3: Launch parallel agents (1 per issue)
   - Step 4: Monitor progress (timeout: 10 mins per agent)
   - Step 5: Aggregate results
   - Step 6: Report summary
7. **Limitations**:
   - Max 5 parallel agents (resource constraint)
   - Issues must be independent (no shared files)
   - If dependent, routes to `/fix:hard` instead
8. **Examples**: 2 scenarios (independent fixes, dependency detected)
9. **Agent Invoked**: fullstack-developer (multiple instances)
10. **Related Commands**: /fix, /fix:hard, /code:parallel

**Complexity**: 2 lightning (⚡⚡)

## Implementation Steps

1. **Check Existing Files**:
   - `ls /mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/fix/index.md`
   - Determine UPDATE or CREATE
2. **Update/Create /fix Router**:
   - Document decision tree with priority
   - Add keyword detection table
   - Add 8 routing examples (one per route)
   - Document "existing plan" pre-check
   - Link to all /fix:* variants
3. **Create /fix:parallel.md**:
   - Write frontmatter (order: 10)
   - Document independence validation
   - Add issue format examples
   - Document 6-step workflow
   - Add limitation section (max 5 agents)
   - Add 2 examples
4. **Quality Check**:
   - SEO descriptions 150-160 chars
   - Decision tree readable (use code block)
   - Keyword table formatted
5. **Build Test**: `bun run build`

## Success Criteria

- [ ] /fix routing logic documented (index.md updated/created)
- [ ] /fix:parallel.md created at correct path
- [ ] Decision tree clear with 9 routes
- [ ] Keyword detection table provided
- [ ] Independence validation explained
- [ ] Frontmatter valid
- [ ] SEO descriptions within limit
- [ ] `bun run build` passes

## Dependencies

- None (standalone phase)

## Notes

- Existing fix commands: ui, fast, hard, test, types, logs, ci
- Order 10 for parallel (after existing fix commands)
- Decision tree priority matters (existing plan first, then type errors, etc.)
