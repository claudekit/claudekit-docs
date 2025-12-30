# Phase 05: Skill Management Commands

**Phase ID**: 05
**Status**: Pending
**Priority**: Medium
**Estimated Complexity**: Medium
**Files**: 3

## Context

Skill lifecycle management commands:
- `/skill:add` - Add references/scripts to existing skill
- `/skill:optimize` - Plan-based skill optimization
- `/skill:optimize:auto` - Automatic skill optimization without approval

## Research Links

- Missing Commands: Lines 284-291 (skills management)
- Reference: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/skill/create.md`
- Reference: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/skill/fix-logs.md`

## Requirements

### 1. /skill:add Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/skill/add.md`

**Frontmatter**:
```yaml
---
title: /skill:add
description: Add reference files or executable scripts to existing skills with progressive disclosure optimization
category: commands/skill
order: 82
published: true
---
```

**Content Sections**:
1. **Overview**: Extend skills with new references or scripts
2. **Syntax**: `/skill:add [skill-name] [reference-or-script-prompt]` (both required)
3. **Arguments**:
   - `skill-name`: Target skill name (must exist)
   - `reference-or-script-prompt`: URL, file path, or script description
4. **What It Does**:
   - Validates skill exists
   - Analyzes reference type (URL, file, script idea)
   - For URLs: Explores content, summarizes
   - For files: Reads, integrates
   - For scripts: Creates executable script
   - Updates skill with progressive disclosure
5. **Reference Types**:
   - **URLs**: Docs, blog posts, GitHub repos (explored via WebFetch)
   - **Files**: Local markdown, code samples
   - **Scripts**: Executable tools (bash, python, node)
6. **Progressive Disclosure**:
   - Core instructions: Always loaded
   - References: Loaded on-demand
   - Scripts: Executed when needed
7. **Workflow**:
   - Step 1: Validate skill exists at `$HOME/.claude/skills/{skill-name}/`
   - Step 2: Analyze reference type
   - Step 3: Process reference (fetch URL, read file, or create script)
   - Step 4: Update skill with progressive disclosure structure
   - Step 5: Test skill activation
8. **Token Efficiency**: Uses progressive disclosure to avoid loading all content
9. **Examples**: 3 scenarios (URL, file, script)
10. **Related Commands**: /skill:create, /skill:optimize

**Complexity**: 2 lightning (⚡⚡)

### 2. /skill:optimize Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/skill/optimize.md`

**Frontmatter**:
```yaml
---
title: /skill:optimize
description: Create optimization plan for skill improvements with user approval workflow for token efficiency
category: commands/skill
order: 83
published: true
---
```

**Content Sections**:
1. **Overview**: Plan-based skill optimization with approval
2. **Syntax**: `/skill:optimize [skill-name] [prompt]` (both required)
3. **Arguments**:
   - `skill-name`: Target skill
   - `prompt`: Optimization goal (e.g., "reduce token usage", "add error handling")
4. **What It Does**:
   - Analyzes current skill structure
   - Identifies optimization opportunities
   - Creates improvement plan
   - Waits for user approval
   - Implements approved changes
5. **Optimization Areas**:
   - Token efficiency (progressive disclosure)
   - Instruction clarity
   - Script performance
   - Error handling
   - Documentation
6. **Workflow**:
   - Step 1: Read skill files (prompt.md, references/*, scripts/*)
   - Step 2: Analyze against optimization goal
   - Step 3: Create plan: `plans/skill-optimize-{skill-name}-YYMMDD/plan.md`
   - Step 4: Present plan to user
   - Step 5: Wait for approval (BLOCKING)
   - Step 6: Execute plan if approved
   - Step 7: Test optimized skill
7. **Plan Includes**:
   - Current issues
   - Proposed changes
   - Token impact estimate
   - Risk assessment
8. **Examples**: 2 scenarios (token optimization, clarity improvement)
9. **Related Commands**: /skill:optimize:auto, /skill:add, /skill:create

**Complexity**: 2 lightning (⚡⚡)

### 3. /skill:optimize:auto Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/skill/optimize-auto.md`

**Frontmatter**:
```yaml
---
title: /skill:optimize:auto
description: Automatically optimize skills without approval for rapid iteration and token efficiency improvements
category: commands/skill
order: 84
published: true
---
```

**Content Sections**:
1. **Overview**: Automatic skill optimization without approval
2. **Syntax**: `/skill:optimize:auto [skill-name] [prompt]` (both required)
3. **Difference from /skill:optimize**:
   - No plan creation
   - No user approval needed
   - Direct optimization
   - Faster execution
4. **What It Does**:
   - Reads skill structure
   - Applies optimizations immediately
   - Creates backup before changes
   - Tests optimized skill
5. **Use Cases**:
   - Rapid iteration during development
   - Minor fixes (typos, formatting)
   - Token usage optimization
   - Known improvements
6. **Safety**:
   - Creates backup at `$HOME/.claude/skills/{skill-name}/.backup-YYMMDD-HHmm/`
   - Validates skill syntax after changes
   - Rolls back if activation fails
7. **Workflow**:
   - Step 1: Backup current skill
   - Step 2: Analyze optimization goal
   - Step 3: Apply changes directly
   - Step 4: Validate skill syntax
   - Step 5: Test activation
   - Step 6: Rollback if failed, report if success
8. **Limitations**:
   - Use for small/safe changes only
   - Major restructuring should use /skill:optimize (with plan)
9. **Examples**: 2 scenarios (token optimization, error handling)
10. **Related Commands**: /skill:optimize, /skill:add

**Complexity**: 2 lightning (⚡⚡)

## Implementation Steps

1. **Create /skill:add.md**:
   - Write frontmatter (order: 82, after fix-logs=81)
   - Document 3 reference types (URL, file, script)
   - Explain progressive disclosure
   - Add 3 examples
   - Document token efficiency benefit
2. **Create /skill:optimize.md**:
   - Write frontmatter (order: 83)
   - Document 7-step workflow with approval gate
   - List 5 optimization areas
   - Document plan structure
   - Add 2 examples
3. **Create /skill:optimize:auto.md**:
   - Write frontmatter (order: 84)
   - Document differences from /skill:optimize
   - Explain backup/rollback safety
   - Add limitations section
   - Add 2 examples
4. **Quality Check**:
   - SEO descriptions 150-160 chars
   - Approval workflow clear in optimize
   - Safety measures documented in auto
   - Internal links valid
5. **Build Test**: `bun run build`

## Success Criteria

- [ ] /skill:add.md created at correct path
- [ ] /skill:optimize.md created at correct path
- [ ] /skill:optimize:auto.md created at correct path
- [ ] Progressive disclosure explained
- [ ] Approval workflow documented
- [ ] Backup/rollback safety documented
- [ ] Frontmatter valid
- [ ] SEO descriptions within limit
- [ ] `bun run build` passes

## Dependencies

- None (standalone phase)

## Notes

- Order values: create=80, fix-logs=81 → use 82, 83, 84
- Optimize requires approval, optimize:auto does not
- All skill commands work with `$HOME/.claude/skills/`
- Progressive disclosure reduces token usage
