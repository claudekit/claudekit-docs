---
title: "Cook"
description: "End-to-end feature implementation with automatic workflow detection and intelligent routing"
section: engineer
kit: engineer
category: skills
order: 23
---

Your complete feature implementation engine. Replaces the old `/code` command with smart workflow detection, research phases, and quality gates.

## What This Skill Does

Cook orchestrates the entire implementation journey from idea to tested, reviewed code. It automatically detects the right workflow based on your request—whether you need fast prototyping, parallel execution, or full research-backed development.

Think of it as your implementation conductor. Give it a task like "add user authentication" and it coordinates researchers, planners, developers, testers, and reviewers to deliver production-ready code.

## Core Capabilities

- **Smart Intent Detection**: Analyzes your request to choose optimal workflow
- **Research Phase**: Parallel researchers gather relevant technical knowledge
- **Scout Phase**: Discover codebase structure and related files
- **Planning**: Create detailed implementation plans with phases
- **Implementation**: Execute with quality gates and review cycles
- **Testing**: Comprehensive test coverage with 100% pass requirement
- **Code Review**: Automated or human review based on complexity

## Workflow Modes

| Mode | Research | Testing | Review Gates | Use When |
|------|----------|---------|--------------|----------|
| **interactive** (default) | ✓ | ✓ | User approval each step | Standard features |
| **auto** | ✓ | ✓ | Auto if score≥9.5 | Trusted autonomous work |
| **fast** | ✗ | ✓ | User approval each step | Quick prototypes |
| **parallel** | Optional | ✓ | User approval each step | Multi-feature work |
| **no-test** | ✓ | ✗ | User approval each step | Experimental code |
| **code** | ✗ | ✓ | User approval each step | Execute existing plan |

## Usage

```
/cook <task OR plan path> [--flag]
```

Optional flags: `--interactive`, `--fast`, `--parallel`, `--no-test`, `--auto`

If no flag provided, uses interactive mode by default.

## Example Prompts

- "/cook add user authentication to the app"
- "/cook implement real-time notifications --fast"
- "/cook path/to/plan.md --auto"
- "/cook add search, filters, and pagination --parallel"
- "/cook prototype new UI design --no-test"

## Workflow Overview

```
[Intent Detection] → [Research?] → [Review] → [Plan] → [Review]
→ [Implement] → [Review] → [Test?] → [Review] → [Finalize]
```

**Default (non-auto)**: Stops at [Review] gates for human approval before each major step.

**Auto mode**: Skips human review gates, implements all phases continuously.

## Quality Gates

**Always enforced (all modes):**
- Testing: 100% pass required (unless no-test mode)
- Code Review: User approval OR auto-approve (score≥9.5, 0 critical)
- Finalize: project-manager AND docs-manager must complete

## What Makes This Different

Cook doesn't just write code—it manages the entire software development lifecycle. It knows when to research, when to skip research, when to parallelize work, and when to enforce quality gates. The result: production-ready features, not prototypes.

## Related Skills

- [Brainstorm](/docs/engineer/skills/brainstorm) - For architecture decisions before implementation
- [Fix](/docs/engineer/skills/fix) - For debugging existing code
- [Scout](/docs/engineer/skills/scout) - For codebase discovery
