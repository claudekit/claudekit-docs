---
title: "ck:team"
description: "Orchestrate parallel multi-session collaboration with independent Claude Code teammates"
section: engineer
kit: engineer
category: skills
order: 50
published: true
---

# `ck:team`

CK-native orchestration engine (v2.1.0) that spawns independent Claude Code sessions as teammates, each with their own context window, task ownership, and cross-session memory.

## What This Skill Does

Agent Teams lets you run multiple Claude Code instances in parallel—each tackling a different workstream simultaneously. Teammates share a task list and communicate via messaging. Unlike subagents (fire-and-forget), teammates are persistent, event-driven, and capable of discussion.

Templates auto-execute on spawn (v2.1.0 change—was manual in v1.x).

## Templates

| Template | Teammates | Best For | Token Budget |
|----------|-----------|----------|--------------|
| `research` | 2-4 researchers | Competitive analysis, multi-source investigation | 150-300K (haiku) |
| `cook` | 1 lead + N devs | Parallel feature implementation | 400-800K (sonnet+haiku) |
| `review` | 2-3 reviewers | Code quality, security, performance audits | 100-200K (haiku) |
| `debug` | 3 debuggers (default) | Root cause analysis via competing hypotheses | 200-400K (sonnet) |

## Usage

```
/ck:team <template> <context> [flags]
```

**Flags:**
- `--devs N` — number of developer teammates
- `--researchers N` — number of researcher teammates
- `--reviewers N` — number of reviewer teammates
- `--debuggers N` — number of debugger teammates
- `--plan-approval` — require lead approval before implementation starts
- `--delegate` — lead only coordinates, never touches code directly

**Examples:**
- `/ck:team cook "implement auth + notifications + dashboard" --devs 3`
- `/ck:team research "compare React state management options" --researchers 2`
- `/ck:team review --reviewers 2`
- `/ck:team debug "race condition in payment flow" --plan-approval`

## Requirements

Agent Teams must be enabled in your Claude Code environment:

```bash
# Claude Code < 2.1.33 (use env var)
CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 claude

# Claude Code >= 2.1.33 (enabled by default)
```

## Event-Driven Monitoring

Teams fire hooks you can observe:

| Event | When | Use For |
|-------|------|---------|
| `TaskCompleted` | Teammate finishes a task | Progress tracking, triggering dependents |
| `TeammateIdle` | Teammate has no pending tasks | Reassign work, wind down |

## Agent Memory

Teammates persist knowledge across sessions via `.claude/agent-memory/<name>/`. Each teammate maintains:
- Previous context and findings
- Decisions made
- Files owned

Memory is teammate-scoped—not shared between teammates unless explicitly passed.

## When to Use vs Subagents

| Situation | Agent Teams | Subagents |
|-----------|-------------|-----------|
| 3+ independent parallel workstreams | Yes | No |
| Workers need to discuss findings | Yes | No |
| Competing hypotheses to evaluate | Yes | No |
| Cross-layer work (API + UI + DB) | Yes | Yes |
| Single focused task | No | Yes |
| Sequential chain (A then B then C) | No | Yes |
| Tight token budget | No | Yes |

## Display Modes

Teams render based on your terminal:

- **auto** — detects best mode for your environment
- **in-process** — inline output (navigate with Shift+Up/Down)
- **tmux** — split-pane view per teammate
- **split** — separate terminal windows

## Error Recovery

If a teammate crashes or goes idle unexpectedly:
1. Check `TaskList` for orphaned in-progress tasks
2. Reassign via `TaskUpdate` to another teammate or claim yourself
3. Teammate agent memory preserves context for handoff

## Related Skills

- [Cook](/docs/engineer/skills/cook) — implementation engine used by cook teams
- [Planning](/docs/engineer/skills/plan) — create plans before delegating to teams
