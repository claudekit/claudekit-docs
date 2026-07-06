---
title: "ck:coding-agent-orchestration"
description: "Coordinate Claude Code, Codex, Gemini, OpenCode, Cursor, Amp, Droid, Antigravity, and similar coding agents across one engineering workflow"
section: engineer
kit: engineer
category: skills
order: 51
published: true
---

# Coding Agent Orchestration

Plan multi-agent coding work without duplicating effort, assigning overlapping files, or losing the source of truth.

Use this skill when a task benefits from more than one coding agent or AI developer tool. It helps choose between tools such as Claude Code, Codex, Gemini, OpenCode, Cursor, Amp, Droid, and Antigravity; split work safely; define handoffs; and consolidate plans, reviews, tests, and PRs.

## When to Use

- A feature has independent workstreams that can run in parallel
- A high-risk change needs adversarial review from another model or tool
- You need to decide which agent should plan, implement, test, debug, document, or review
- Multiple agents have produced outputs that need one final integration path

For one narrow fix, prefer a single agent. Orchestration should buy lower risk, better coverage, or real parallelism.

## Workflow Shapes

| Shape | Best For |
|-------|----------|
| Single-agent | Small fixes, narrow files, easy verification |
| Sequential | Plan -> implement -> review -> fix -> verify |
| Parallel | Independent files or modules with explicit ownership |
| Review-loop | High-risk changes or existing PRs that need adversarial review |

## Coordination Rules

1. Start from the repo, issue, PR, or spec as the source of truth.
2. Name one final integrator before work begins.
3. Assign file ownership before parallel edits start.
4. Do not let parallel agents edit the same files without a merge owner and strategy.
5. Require evidence before completion: tests, build, lint, screenshots, CI, or a concrete manual check.
6. Reconcile disagreements by checking repo truth, tests, docs, and user requirements.

## Related Skills

- [Team](/docs/engineer/skills/team) — run Claude Code Agent Teams for persistent parallel sessions
- [Cook](/docs/engineer/skills/cook) — implement a feature once the execution path is clear
- [Review PR](/docs/engineer/skills/code-review) — review code quality and correctness
- [Worktree](/docs/engineer/skills/worktree) — isolate branches for parallel local work
