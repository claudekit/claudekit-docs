---
title: Agents Overview
description: ClaudeKit's 17 specialized agents for software development
section: docs
category: agents
order: 1
published: true
---

# Agents Overview

17 specialized agents that handle every aspect of software development—automatically orchestrated through predefined workflows.

## Quick Reference

### Development & Implementation

| Agent | Purpose |
|-------|---------|
| [planner](/docs/agents/planner) | Research, analyze, create implementation plans before coding |
| [fullstack-developer](/docs/agents/fullstack-developer) | Execute implementation phases with strict file ownership |
| [scout](/docs/agents/scout) | Parallel file search across large codebases |
| [scout-external](/docs/agents/scout-external) | External search using Gemini CLI and OpenCode |
| [debugger](/docs/agents/debugger) | Root cause analysis, log investigation, issue diagnosis |
| [tester](/docs/agents/tester) | Test execution, coverage analysis, quality validation |

### Quality & Review

| Agent | Purpose |
|-------|---------|
| [code-reviewer](/docs/agents/code-reviewer) | Security audits, performance analysis, code quality |
| [database-admin](/docs/agents/database-admin) | Query optimization, schema design, performance tuning |

### Documentation & Management

| Agent | Purpose |
|-------|---------|
| [docs-manager](/docs/agents/docs-manager) | Technical documentation, API docs, architecture guides |
| [project-manager](/docs/agents/project-manager) | Progress tracking, cross-agent coordination, status reports |
| [journal-writer](/docs/agents/journal-writer) | Document failures and setbacks with brutal honesty |
| [git-manager](/docs/agents/git-manager) | Conventional commits, security scanning, token-optimized |

### Creative & Research

| Agent | Purpose |
|-------|---------|
| [ui-ux-designer](/docs/agents/ui-ux-designer) | Award-winning UI with Three.js, responsive layouts |
| [copywriter](/docs/agents/copywriter) | High-converting marketing copy, viral content |
| [brainstormer](/docs/agents/brainstormer) | Explore approaches, challenge assumptions, debate decisions |
| [researcher](/docs/agents/researcher) | Multi-source research, documentation analysis |

### Integration

| Agent | Purpose |
|-------|---------|
| [mcp-manager](/docs/agents/mcp-manager) | MCP server integrations, tool discovery, execution |

## How to Use

**Automatic (recommended):** Commands orchestrate agents automatically
```bash
/cook [feature]     # planner → code → tester → reviewer → git-manager
/fix:hard [bug]     # scout → debugger → planner → code → tester
/plan [task]        # planner + researcher
```

**Explicit:** Request specific agents in prompts
```
"Use scout agent to find auth files, then planner to create migration strategy"
```

## Under the Hood

### Orchestration Patterns

**Sequential** (default): Agents run in order, each building on previous output
```
planner → code → tester → code-reviewer → git-manager
```

**Parallel**: Independent agents run simultaneously
```
scout (dir1) ┐
scout (dir2) ├─→ Aggregate → planner
scout (dir3) ┘
```

**Hybrid**: Mix of sequential and parallel for complex tasks

### Agent Communication

Agents share context through:
- **Shared files**: `docs/`, `plans/`, code standards
- **Handoff protocols**: Each agent receives previous output, performs task, passes results
- **TodoWrite**: Real-time progress tracking visible to user

### Handoff Example

```
planner output → plans/auth-feature.md
    ↓
code reads plan → implements → creates files + tests
    ↓
tester runs tests → validates coverage
    ↓
code-reviewer audits → security + quality report
    ↓
git-manager commits → conventional commit + push
```

### Troubleshooting

**Agent not activating?**
- Check command matches task complexity (`/fix:fast` vs `/fix:hard`)
- Verify workflow files exist in `.claude/agents/`
- Try explicit invocation: "Use [agent] to..."

**Slow response?**
- Use parallel orchestration when tasks are independent
- Scope tasks more specifically
- Use simpler commands for simple tasks

**Conflicts?**
- Review orchestration order in workflow files
- Check handoff protocols between agents

## Key Takeaway

17 agents work together automatically—use commands to orchestrate them, or invoke explicitly for specific tasks. No manual coordination needed.
