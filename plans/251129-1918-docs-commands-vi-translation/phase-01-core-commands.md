# Phase 01: Core Commands Documentation

**Phase ID**: 01
**Status**: Done
**Completion**: 2025-11-29 19:57 UTC+7
**Priority**: Critical
**Estimated Complexity**: High
**Files**: 2

## Context

Core commands are foundational workflow orchestrators:
- `/code` - 6-step plan execution (0 lightning complexity)
- `/brainstorm` - Elite solution brainstorming (2 lightning complexity)

Both missing from docs but heavily referenced in workflow.

## Research Links

- Missing Commands Report: `/mnt/d/www/claudekit/claudekit-docs/plans/reports/researcher-251129-missing-commands.md`
- Reference Doc Pattern: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/ask.md`
- Code Standards: `/mnt/d/www/claudekit/claudekit-docs/docs/code-standards.md`

## Requirements

### 1. /code Documentation

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/code.md`

**Frontmatter**:
```yaml
---
title: /code
description: Execute implementation plans with 6-step quality-gated workflow including automated testing and code review
category: commands/core
order: 8
published: true
---
```

**Content Sections**:
1. **Overview**: Plan execution command, 6-step workflow
2. **Syntax**: `/code [plan]` (optional arg)
3. **Arguments**: plan path (auto-detect if empty)
4. **Workflow Steps** (detailed):
   - Step 0: Plan Detection (find latest or use provided)
   - Step 1: Analysis & Task Extraction (TodoWrite)
   - Step 2: Implementation (execute tasks)
   - Step 3: Testing (tester subagent, 100% pass required)
   - Step 4: Code Review (code-reviewer subagent, 0 critical issues)
   - Step 5: User Approval (BLOCKING GATE)
   - Step 6: Finalize (status update, docs, auto-commit/push)
5. **Output Format**: Step markers with progress
6. **Enforcement Rules**: No step skipping, blocking gates
7. **Examples**: 3 usage scenarios
8. **Subagents Invoked**: tester, code-reviewer, project-manager, docs-manager
9. **Related Commands**: /plan, /cook, /fix
10. **Common Issues**: Missing plan, test failures, approval timeout

**Key Features to Document**:
- Auto-detection logic for active plan
- TodoWrite integration for task tracking
- Mandatory quality gates (tests 100%, 0 critical issues)
- User approval requirement before finalization
- Git auto-commit on success

**Complexity**: 6 lightning (⚡)

### 2. /brainstorm Documentation

**File**: `/mnt/d/www/claudekit/claudekit-docs/src/content/docs/docs/commands/core/brainstorm.md`

**Frontmatter**:
```yaml
---
title: /brainstorm
description: Collaborate with expert advisors to evaluate technical approaches using YAGNI, KISS, and DRY principles
category: commands/core
order: 9
published: true
---
```

**Content Sections**:
1. **Overview**: Elite brainstorming for technical solutions
2. **Syntax**: `/brainstorm [question]` (required arg)
3. **Arguments**: Technical question/challenge
4. **Core Principles**: YAGNI, KISS, DRY (explain each)
5. **Process Phases** (6-phase workflow):
   - Discovery: Clarify requirements, constraints, timeline
   - Research: Gather info from agents/external sources
   - Analysis: Evaluate approaches against principles
   - Debate: Present options, challenge preferences
   - Consensus: Ensure alignment
   - Documentation: Create markdown report
6. **Expertise Areas**: Architecture, risk, dev time, UX/DX, tech debt, performance
7. **Collaboration Tools**: planner, docs-manager, searchapi MCP, docs-seeker, ai-multimodal, psql
8. **Output Location**:
   - Active plan: `{active-plan}/reports/brainstorm-YYMMDD-{topic}.md`
   - Fallback: `plans/reports/brainstorm-YYMMDD-{topic}.md`
9. **Report Includes**: Problem, approaches, recommendation, risks, success metrics
10. **Examples**: 3 usage scenarios (architecture, tech selection, design)
11. **Critical Constraints**: Does NOT implement, only advises
12. **Related Commands**: /ask, /plan, /cook

**Key Features to Document**:
- Multi-agent collaboration
- 6-phase structured process
- Markdown report generation
- Does NOT implement (advice only)

**Complexity**: 2 lightning (⚡⚡)

## Implementation Steps

1. **Study Reference Pattern**: Read `/ask.md` for structure/tone
2. **Create /code.md**:
   - Write frontmatter (category: commands/core, order: 8)
   - Document 6-step workflow with enforcement rules
   - Add 3 examples (auto-detect, specific plan, phase execution)
   - List subagents (tester, code-reviewer, project-manager, docs-manager)
   - Add related commands section
3. **Create /brainstorm.md**:
   - Write frontmatter (category: commands/core, order: 9)
   - Document 6-phase process
   - Explain YAGNI/KISS/DRY principles
   - Add collaboration tools list
   - Add 3 examples (architecture, tech stack, design challenge)
   - Add "does not implement" warning
4. **Quality Check**:
   - SEO descriptions 150-160 chars
   - Frontmatter schema compliance
   - Internal links valid
5. **Build Test**: Run `bun run build` from project root

## Success Criteria

- [x] `/code.md` created at correct path, published=true
- [x] `/brainstorm.md` created at correct path, published=true
- [x] Both files follow existing doc pattern (see /ask.md)
- [x] Frontmatter valid (category, order, title, description)
- [x] SEO descriptions within char limit
- [x] Examples clear and actionable
- [x] `bun run build` passes

## Dependencies

- None (standalone phase)

## Notes

- Order values: /ask=3, /bootstrap=4, /cook=5, /debug=6, /scout=7 → use 8,9 for code/brainstorm
- Keep tone consistent with existing docs (technical but approachable)
- Use emoji sparingly (✅ ❌ for do/don't examples only)
- Sacrifice grammar for concision in workflow steps
