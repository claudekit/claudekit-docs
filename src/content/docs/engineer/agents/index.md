---
title: Agents Overview
description: ClaudeKit's 13 specialized agents for Claude Code workflows
section: engineer
kit: engineer
category: agents
order: 1
published: true
---

# Agents Overview

ClaudeKit Engineer ships 13 specialized agents for Claude Code. They can be selected directly or coordinated by skills such as `/ck:plan`, `/ck:cook`, `/ck:test`, and `/ck:ck-code-review`.

:::note[Provider support]
These agent definitions are available in Claude Code. Codex installations expose the ClaudeKit skill catalog, not these Claude-specific agents.
:::

## Agent Catalog

| Agent | Purpose |
|-------|---------|
| [brainstormer](/docs/engineer/agents/brainstormer) | Explore approaches, challenge assumptions, and compare trade-offs |
| [code-reviewer](/docs/engineer/agents/code-reviewer) | Review correctness, security, performance, and maintainability |
| [code-simplifier](/docs/engineer/agents/code-simplifier) | Refine implemented code for clarity without changing behavior |
| [debugger](/docs/engineer/agents/debugger) | Investigate failures and identify root causes |
| [docs-manager](/docs/engineer/agents/docs-manager) | Maintain technical documentation and project knowledge |
| [fullstack-developer](/docs/engineer/agents/fullstack-developer) | Implement frontend, backend, and integration work |
| [git-manager](/docs/engineer/agents/git-manager) | Prepare focused commits and repository handoffs |
| [journal-writer](/docs/engineer/agents/journal-writer) | Record engineering decisions, failures, and lessons |
| [planner](/docs/engineer/agents/planner) | Research requirements and create implementation plans |
| [project-manager](/docs/engineer/agents/project-manager) | Track progress, dependencies, and delivery status |
| [researcher](/docs/engineer/agents/researcher) | Gather and synthesize technical evidence |
| [tester](/docs/engineer/agents/tester) | Run tests and validate quality gates |
| [ui-ux-designer](/docs/engineer/agents/ui-ux-designer) | Design usable, accessible interfaces and experiences |

## How They Work Together

Skills choose the appropriate agents for each workflow. A typical implementation can move from planning through development, testing, review, and git handoff while keeping each responsibility explicit.

```text
planner -> fullstack-developer -> tester -> code-reviewer -> git-manager
```

For independent research or review tasks, Claude Code can run multiple agents in parallel and combine their findings before the next step.
