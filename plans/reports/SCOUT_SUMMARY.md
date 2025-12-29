# ClaudeKit Engineer Commands - Scout Summary

**Report Location:** `/mnt/d/www/claudekit/claudekit-docs/plans/reports/scout-251229-2047-claude-engineer-commands.md`

**Total Lines:** 1639  
**Total Commands Documented:** 77  
**Total Categories:** 15  
**Generated:** 2025-12-29 20:47 UTC

## Quick Stats

| Category | Count |
|----------|-------|
| Core Operations | 5 |
| Code Execution | 4 |
| Fixing Issues | 9 |
| Planning | 9 |
| Project Bootstrap | 4 |
| Feature Implementation | 4 |
| Git Operations | 5 |
| Documentation | 5 |
| Code Review | 2 |
| Design | 6 |
| Content Creation | 4 |
| Testing | 1 |
| Skills Management | 6 |
| Integration | 2 |
| Navigation & Utilities | 6 |

## Documentation Structure

Each command includes:
1. **Description** - Short summary with energy level indicator
2. **Arguments** - Required and optional parameters
3. **What it does** - Detailed explanation of functionality
4. **Workflow** - Step-by-step process (if applicable)
5. **Output/Requirements** - What it produces and needed for execution
6. **Example usage** - Real-world examples

## Key Finding: 3 Implementation Paradigms

ClaudeKit supports three approaches for every major task:

### 1. **Guided Mode** (Default)
- User asks questions before execution
- Approval gates at critical points
- Example: `/plan`, `/code`, `/bootstrap`

### 2. **Fast Mode** (:fast)
- Minimal research/planning
- Direct to implementation
- Example: `/plan:fast`, `/cook:auto:fast`, `/design:fast`

### 3. **Auto Mode** (:auto)
- No approval gates
- Auto-proceeds through phases
- Example: `/code:auto`, `/bootstrap:auto`, `/cook:auto`

Plus **:parallel** variants for multi-phase execution.

## Command Workflow Types

### Linear Workflows
- `/ask` → Just answer (no implementation)
- `/debug` → Find root causes (no fixes)
- `/test` → Run tests (analyze results)

### Plan-then-Code
- `/plan` → Create plan
- `/code` → Implement from plan

### Integrated Workflows (Built-in Planning)
- `/cook` → Questions → Research → Plan → Code
- `/bootstrap` → Git → Research → Tech → Design → Plan → Code
- `/brainstorm` → Explore → Recommend (no code)

### Issue-Specific Fixes
- `/fix` → Intelligent router
- `/fix:types`, `/fix:test`, `/fix:ui`, etc. → Specialized fixes

## Most Powerful Commands

1. **`/bootstrap:auto:parallel`** - Full project with parallel execution
2. **`/code:parallel`** - Multi-phase implementation with concurrency
3. **`/plan:parallel`** - Complex planning with dependency graphs
4. **`/cook:auto:parallel`** - Feature implementation with parallelization
5. **`/review:codebase:parallel`** - Edge case verification with parallel reviewers

## Most Useful Commands (Daily Use)

1. **`/code`** - Implement plans (most common)
2. **`/fix`** - Smart issue routing
3. **`/plan:hard`** - Comprehensive planning
4. **`/scout`** - Find files in codebase
5. **`/cook`** - Quick feature implementation

## Commands by Use Case

### Starting New Projects
- `/bootstrap` (full guidance)
- `/bootstrap:auto:fast` (quick setup)
- `/bootstrap:auto:parallel` (complex projects)

### Feature Development
- `/cook` (step-by-step)
- `/cook:auto` (faster)
- `/cook:auto:parallel` (multi-phase features)

### Bug Fixing
- `/fix` (intelligent routing)
- `/fix:fast` (simple issues)
- `/fix:hard` (complex issues)
- `/fix:parallel` (multiple issues)

### Planning
- `/plan` (auto-detect complexity)
- `/plan:fast` (simple tasks)
- `/plan:hard` (complex tasks)
- `/plan:parallel` (multi-phase)

### Code Quality
- `/review:codebase` (analysis)
- `/review:codebase:parallel` (edge cases)
- `/test:ui` (UI testing)

### Design & Content
- `/design:fast` (quick design)
- `/design:good` (premium design)
- `/content:good` (compelling copy)
- `/content:cro` (conversion optimization)

## Integration Points

### External Tools
- Gemini CLI (for `/use-mcp`)
- GitHub CLI (for `/git:pr`, `/git:merge`, `/fix:ci`)
- Chrome DevTools (for `/test:ui`, design screenshots)
- ImageMagick (for image processing)

### Internal Systems
- Skill activation (automatically per task)
- Subagent delegation (researcher, debugger, planner, etc.)
- Progressive disclosure (phased plans)
- Report generation (markdown-based)

## Documentation Quality Notes

✅ **Strengths:**
- Clear categorization by functionality
- Comprehensive examples for each command
- Detailed workflow explanations
- Argument specifications
- Output descriptions

📝 **Structure:**
- 15 logical categories
- Progressive complexity levels
- Cross-references between related commands
- Implementation paradigms clearly explained

⚠️ **Potential Gaps:**
- Some commands reference "skills" that may not be documented
- MCP/external tool integration assumes setup
- Some advanced features (3D design, edge case verification) are complex
- Error handling workflows not always specified

## File Paths in Report

All absolute paths used:
- `/mnt/d/www/claudekit/claudekit-engineer/.claude/commands/`

Plan locations:
- `./plans/` - Default plan directory
- `./plans/reports/` - Report directory
- `./docs/` - Documentation directory

## Access the Full Report

```bash
cat /mnt/d/www/claudekit/claudekit-docs/plans/reports/scout-251229-2047-claude-engineer-commands.md
```

Or use `/preview`:
```
/preview /mnt/d/www/claudekit/claudekit-docs/plans/reports/scout-251229-2047-claude-engineer-commands.md
```

