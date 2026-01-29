---
title: Agents Overview
description: ClaudeKit's 14 specialized agents for software development
section: engineer
kit: engineer
category: agents
order: 1
published: true
---

# Agents Overview

14 specialized agents that handle every aspect of software development—automatically orchestrated through predefined workflows.

## Quick Reference

### Development & Implementation

| Agent | Purpose |
|-------|---------|
| [planner](/docs/engineer/agents/planner) | Research, analyze, create implementation plans before coding |
| [fullstack-developer](/docs/engineer/agents/fullstack-developer) | Execute implementation phases with strict file ownership |
| [debugger](/docs/engineer/agents/debugger) | Root cause analysis, log investigation, issue diagnosis |
| [tester](/docs/engineer/agents/tester) | Test execution, coverage analysis, quality validation |

### Quality & Review

| Agent | Purpose |
|-------|---------|
| [code-reviewer](/docs/engineer/agents/code-reviewer) | Security audits, performance analysis, code quality |

### Documentation & Management

| Agent | Purpose |
|-------|---------|
| [docs-manager](/docs/engineer/agents/docs-manager) | Technical documentation, API docs, architecture guides |
| [project-manager](/docs/engineer/agents/project-manager) | Progress tracking, cross-agent coordination, status reports |
| [journal-writer](/docs/engineer/agents/journal-writer) | Document failures and setbacks with brutal honesty |
| [git-manager](/docs/engineer/agents/git-manager) | Conventional commits, security scanning, token-optimized |

### Creative & Research

| Agent | Purpose |
|-------|---------|
| [ui-ux-designer](/docs/engineer/agents/ui-ux-designer) | Award-winning UI with Three.js, responsive layouts |
| [brainstormer](/docs/engineer/agents/brainstormer) | Explore approaches, challenge assumptions, debate decisions |
| [researcher](/docs/engineer/agents/researcher) | Multi-source research, documentation analysis |

### Integration

| Agent | Purpose |
|-------|---------|
| [mcp-manager](/docs/engineer/agents/mcp-manager) | MCP server integrations, tool discovery, execution |

## How to Use

**Automatic (recommended):** Commands orchestrate agents automatically
```bash
/bootstrap [feature] # planner → fullstack-developer → tester → code-reviewer
/plan [task]         # planner + researcher
/debug [issue]       # debugger → analysis and diagnosis
```

**Explicit:** Request specific agents in prompts
```
"Use debugger agent to investigate login failures, then planner to create fix strategy"
```

## Under the Hood

### Orchestration Patterns

**Sequential** (default): Agents run in order, each building on previous output
```
planner → fullstack-developer → tester → code-reviewer → git-manager
```

**Parallel**: Independent agents run simultaneously
```
researcher (topic1) ┐
researcher (topic2) ├─→ Aggregate → planner
researcher (topic3) ┘
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
fullstack-developer reads plan → implements → creates files + tests
    ↓
tester runs tests → validates coverage
    ↓
code-reviewer audits → security + quality report
    ↓
git-manager commits → conventional commit + push
```

### Troubleshooting

**Agent not activating?**
- Check command matches task type
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

14 agents work together automatically—use commands to orchestrate them, or invoke explicitly for specific tasks. No manual coordination needed.
