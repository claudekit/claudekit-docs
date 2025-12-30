# Phase 02: Plan Commands Documentation

**Phase ID**: 02
**Status**: Pending
**Priority**: High
**Estimated Complexity**: Medium
**Files**: 2

## Context

Plan commands orchestrate implementation planning with intelligent routing:
- `/plan` (update) - Router that analyzes complexity, routes to fast/hard
- `/plan:parallel` (new) - Creates parallel-executable phases with dependency graph

## Research Links

- Missing Commands: Lines 148-181 (plan routing logic)
- Reference: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/plan/ci.md`
- Reference: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/plan/two.md`

## Requirements

### 1. /plan Router Documentation (UPDATE EXISTING)

**File**: Check if `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/plan/index.md` exists
- If yes: UPDATE with routing logic
- If no: CREATE new file

**Frontmatter**:
```yaml
---
title: /plan
description: Intelligently analyze task complexity and route to fast or hard planning workflow with prompt enhancement
category: commands/plan
order: 1
published: true
---
```

**Content Sections**:
1. **Overview**: Intelligent planning router
2. **Syntax**: `/plan [task]` (required)
3. **What It Does**:
   - Analyzes task complexity
   - Asks for clarification if needed
   - Routes to `/plan:fast` or `/plan:hard`
   - Enhances prompt before delegation
4. **Pre-Creation Check**:
   - Reads `<WORKING-DIR>/.claude/active-plan`
   - Prompts: "Active plan found: {path}. Continue? [Y/n]"
   - If Y: passes existing plan path to subcommand
   - If n: creates new plan
5. **Routing Decision Tree**:
   - Simple/small tasks → `/plan:fast`
   - Complex/research-heavy → `/plan:hard`
6. **Workflow**:
   - Step 1: Analyze task
   - Step 2: Ask details if needed
   - Step 3: Decide fast vs hard
   - Step 4: Enhance prompt (detailed-instructions-prompt)
   - Step 5: Execute SlashCommand with enhanced prompt
   - Step 6: Activate `planning` skill
7. **Examples**: 3 scenarios (simple, complex, active plan exists)
8. **Related Commands**: /plan:fast, /plan:hard, /plan:parallel, /plan:ci, /plan:two

**Complexity**: 3 lightning (⚡⚡⚡)

### 2. /plan:parallel Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/plan/parallel.md`

**Frontmatter**:
```yaml
---
title: /plan:parallel
description: Create implementation plans with parallel-executable phases using dependency graphs and file ownership matrices
category: commands/plan
order: 12
published: true
---
```

**Content Sections**:
1. **Overview**: Parallel execution planning with dependency management
2. **Syntax**: `/plan:parallel [task]` (required)
3. **What It Does**:
   - Creates plan with phases that can run in parallel
   - Builds dependency graph between phases
   - Generates file ownership matrix (exclusive boundaries)
   - Documents parallelization strategy
4. **Key Concepts**:
   - Dependency Graph: Which phases depend on others
   - File Ownership: Exclusive file access per phase (no conflicts)
   - Parallel vs Sequential: When phases can run simultaneously
5. **Plan Structure**:
   ```markdown
   # Plan

   ## Dependency Graph
   Phase 1 (no deps) → Phase 3
   Phase 2 (no deps) → Phase 3

   ## File Ownership Matrix
   Phase 1: src/auth/*.ts
   Phase 2: src/payment/*.ts
   Phase 3: src/app.ts (depends on 1,2)

   ## Parallelization Strategy
   - Wave 1: Phase 1 + Phase 2 (parallel)
   - Wave 2: Phase 3 (sequential after 1,2)
   ```
6. **Use Cases**:
   - Independent feature modules
   - Microservices setup
   - Component library development
7. **Examples**: 2 scenarios (auth+payment, multi-service)
8. **Related Commands**: /code:parallel, /plan:hard, /bootstrap:auto:parallel

**Complexity**: 3 lightning (⚡⚡⚡)

## Implementation Steps

1. **Check Existing Files**:
   - `ls /mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/plan/index.md`
   - Determine if UPDATE or CREATE needed
2. **Update/Create /plan Router**:
   - Add routing logic documentation
   - Document active plan check
   - Document prompt enhancement
   - Add decision tree (fast vs hard)
   - List examples for each route
3. **Create /plan:parallel.md**:
   - Write frontmatter (order: 12, after ci=10, two=11)
   - Document dependency graph concept
   - Document file ownership matrix
   - Add parallelization strategy example
   - Add 2 complete examples
4. **Quality Check**:
   - SEO descriptions 150-160 chars
   - Internal links valid (check /code:parallel exists later)
5. **Build Test**: `bun run build`

## Success Criteria

- [ ] /plan routing logic documented (index.md updated or created)
- [ ] /plan:parallel.md created at correct path
- [ ] Dependency graph explained clearly
- [ ] File ownership matrix example provided
- [ ] Frontmatter valid
- [ ] SEO descriptions within limit
- [ ] `bun run build` passes

## Dependencies

- Phase 06 (for /code:parallel cross-reference)

## Notes

- Order values: ci=10, two=11 → use 12 for parallel
- Dependency graph should be visual/clear
- File ownership prevents merge conflicts in parallel execution
