# Phase 04: Scout & Review Commands

**Phase ID**: 04
**Status**: Pending
**Priority**: Medium
**Estimated Complexity**: Medium
**Files**: 2

## Context

Codebase exploration commands:
- `/scout:ext` (new) - Use external agentic tools (gemini/opencode/Explore) for scouting
- `/review:codebase` (new) - Scan and analyze codebase with researcher+scout+code-reviewer

## Research Links

- Missing Commands: Lines 223-258 (scout variants)
- Missing Commands: Lines 292-298 (review:codebase)
- Reference: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/scout.md`

## Requirements

### 1. /scout:ext Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/scout-ext.md`

**Frontmatter**:
```yaml
---
title: /scout:ext
description: Scout codebase using external agentic tools like Gemini CLI for enhanced search capabilities
category: commands/core
order: 71
published: true
---
```

**Content Sections**:
1. **Overview**: External tool-powered codebase scouting
2. **Syntax**: `/scout:ext [user-prompt] [scale]` (prompt required, scale optional, default: 3)
3. **What It Does**:
   - Uses external agentic tools based on scale
   - Gemini CLI for large context (2M tokens)
   - Opencode for medium context
   - Explore agents for parallel search
   - Combines results from multiple tools
4. **Tool Selection by Scale**:
   - Scale 1-2: Explore agents only
   - Scale 3-5: Gemini CLI + Explore
   - Scale 6+: Gemini + Opencode + Explore
5. **Workflow**:
   - Step 1: Analyze scale parameter
   - Step 2: Select tools (gemini, opencode, Explore)
   - Step 3: Dispatch agents in parallel
   - Step 4: Aggregate results (timeout: 5 mins per tool)
   - Step 5: Generate report: `plans/<plan>/reports/scout-ext-report.md`
6. **Output Location**:
   - Active plan: `{active-plan}/reports/scout-ext-YYMMDD.md`
   - Fallback: `plans/reports/scout-ext-YYMMDD.md`
7. **Advantages over /scout**:
   - Handles larger codebases (gemini 2M context)
   - External tool intelligence
   - Better semantic understanding
8. **Examples**: 3 scenarios (small, medium, large codebase)
9. **Related Commands**: /scout, /review:codebase

**Complexity**: 1 lightning (⚡)

### 2. /review:codebase Documentation (NEW)

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/review-codebase.md`

**Frontmatter**:
```yaml
---
title: /review:codebase
description: Comprehensive codebase analysis with researcher, scout, and code-reviewer agents for quality assessment
category: commands/core
order: 72
published: true
---
```

**Content Sections**:
1. **Overview**: Multi-agent codebase scanning and analysis
2. **Syntax**: `/review:codebase [tasks-or-prompt]` (optional - analyzes entire codebase if empty)
3. **What It Does**:
   - Scans codebase structure
   - Analyzes code quality
   - Identifies technical debt
   - Creates improvement plan
4. **Agents Invoked**:
   - `researcher`: Analyzes architecture patterns
   - `scout` (multiple): Explores directories in parallel
   - `code-reviewer`: Reviews code quality
   - `planner`: Creates improvement roadmap
5. **Workflow**:
   - Step 1: Scan directory structure
   - Step 2: Dispatch scout agents (scale: 5)
   - Step 3: Researcher analyzes patterns
   - Step 4: Code-reviewer checks quality
   - Step 5: Planner creates improvement plan
   - Step 6: Generate comprehensive report
6. **Output**:
   - Location: `plans/reports/codebase-review-YYMMDD.md`
   - Sections: Structure, Quality, Technical Debt, Recommendations
7. **Analysis Includes**:
   - Code organization (file structure, naming)
   - Architecture patterns (monolith, microservices, etc.)
   - Code quality metrics (complexity, duplication)
   - Security issues
   - Performance bottlenecks
   - Technical debt inventory
   - Improvement priorities
8. **Use Cases**:
   - Onboarding new team members
   - Pre-refactoring assessment
   - Technical debt audit
   - Architecture review
9. **Examples**: 2 scenarios (full scan, focused review)
10. **Related Commands**: /scout, /scout:ext, /ask

**Complexity**: 3 lightning (⚡⚡⚡)

## Implementation Steps

1. **Create /scout:ext.md**:
   - Write frontmatter (order: 71, after scout=7)
   - Document tool selection by scale
   - Add 3 examples (small/medium/large codebase)
   - Document advantages over /scout
   - Add external tools list (gemini, opencode)
2. **Create /review:codebase.md**:
   - Write frontmatter (order: 72)
   - Document 4 agents (researcher, scout, code-reviewer, planner)
   - Add 6-step workflow
   - Document report sections
   - Add 2 examples (full scan, focused)
   - List analysis areas (structure, quality, debt, security)
3. **Quality Check**:
   - SEO descriptions 150-160 chars
   - Agent lists accurate
   - Internal links valid
4. **Build Test**: `bun run build`

## Success Criteria

- [ ] /scout:ext.md created at correct path
- [ ] /review:codebase.md created at correct path
- [ ] Tool selection logic clear (scale-based)
- [ ] Agent lists documented
- [ ] Workflow steps detailed
- [ ] Frontmatter valid
- [ ] SEO descriptions within limit
- [ ] `bun run build` passes

## Dependencies

- None (standalone phase)

## Notes

- Order 71, 72 after existing core commands
- Both commands generate reports in plans/reports/
- scout:ext enhances /scout with external tools
- review:codebase is comprehensive multi-agent analysis
