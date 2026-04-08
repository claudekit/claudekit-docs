---
title: "ck:loop"
description: "Autonomous iterative optimization loop for measurable metrics with git-tracked experiments and stuck detection"
section: engineer
kit: engineer
category: skills
order: 62
---

# Loop

Autonomous optimization loop that iteratively improves a measurable metric. Shares the same core protocol as [Autoresearch](/docs/engineer/skills/ck-autoresearch) — atomic changes, git-tracked experiments, automatic keep/discard decisions.

## What This Skill Does

Loop takes a numeric goal and repeatedly makes targeted code changes to drive it in the desired direction. Each change is committed, verified, and either kept or reverted. Strategy shifts automatically when progress stalls.

Loop and [Autoresearch](/docs/engineer/skills/ck-autoresearch) share the same core optimization protocol. Use whichever name fits your mental model — both invoke the same iterative keep/discard loop.

## Core Capabilities

- N iterations of autonomous code changes (default: 10)
- Git-tracked experiments with automatic rollback on regression
- Guard pattern to prevent regressions in other areas
- Stuck detection: 5 consecutive discards shifts strategy, 10 consecutive discards stops
- Results logged to TSV with per-iteration history
- Configurable noise tolerance and minimum delta

## When to Use

- Reducing bundle size below a target
- Improving Lighthouse scores
- Decreasing build time
- Any measurable code quality metric you want to push in one direction

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| `Goal` | Yes | What to optimize (natural language) |
| `Scope` | Yes | Glob patterns for files to modify |
| `Verify` | Yes | Shell command that outputs a single number |
| `Guard` | No | Shell command that must pass after each change |
| `Iterations` | No | Max iterations (default: 10) |
| `Direction` | No | `higher` or `lower` |
| `Min-Delta` | No | Minimum improvement to keep a change |
| `Noise` | No | `low`, `medium`, `high` — metric variance tolerance |

## Example Usage

```
/ck:loop
Goal: Reduce main bundle size below 200KB
Scope: src/**/*.ts, src/**/*.tsx
Verify: npx vite build 2>/dev/null | grep "dist/index" | awk '{print $2}' | sed 's/kB//'
Guard: npx tsc --noEmit
Direction: lower
Min-Delta: 0.5
```

## Workflow

1. **Configure** — parse fields from argument or ask via batched questions
2. **Baseline** — measure starting metric
3. **Iterate** — make atomic change → commit → verify → keep or discard
4. **Stuck detection** — 5 consecutive discards shifts strategy; 10 consecutive discards forces a full stop
5. **Results** — TSV log with `iter`, `timestamp`, `metric`, `delta`, `kept`, `description`

## Related Skills

- [Autoresearch](/docs/engineer/skills/ck-autoresearch) — identical optimization protocol
- [Test](/docs/engineer/skills/test) — test suites used as Guard commands
