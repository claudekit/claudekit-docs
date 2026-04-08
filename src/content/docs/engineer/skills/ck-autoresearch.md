---
title: "ck:autoresearch"
description: "Autonomous iterative optimization loop that runs N iterations against a measurable metric with git-tracked experiments"
section: engineer
kit: engineer
category: skills
order: 61
---

# Autoresearch

Autonomous optimization loop that runs N iterations against a mechanical metric, keeping improvements and discarding regressions. Every change is git-tracked for safe rollback.

## What This Skill Does

Autoresearch takes a measurable goal (test coverage, bundle size, performance score) and iteratively makes atomic code changes to improve it. Each iteration commits before verification, compares against baseline, and keeps or discards the change. A stuck-detection mechanism shifts strategy after consecutive failures.

## When to Use

- Increasing test coverage from X% to Y%
- Reducing bundle size below a target
- Improving a performance benchmark score
- Any goal expressible as a single numeric metric from a shell command

## Core Capabilities

- N iterations of autonomous code changes (default: 10)
- Git-tracked experiments with automatic rollback on regression
- Guard pattern to prevent regressions in other areas (e.g., `tsc --noEmit`)
- Stuck detection: 5+ consecutive failures triggers strategy shift
- Results logged to TSV with per-iteration history
- Configurable noise tolerance and minimum delta

## Arguments

| Argument | Required | Description |
|----------|----------|-------------|
| `Goal` | Yes | What to optimize (natural language) |
| `Scope` | Yes | Glob patterns for files to modify |
| `Verify` | Yes | Shell command that outputs a single number |
| `Guard` | No | Shell command that must pass (exit 0) after each change |
| `Iterations` | No | Max iterations (default: 10) |
| `Direction` | No | `higher` or `lower` (default: higher) |
| `Min-Delta` | No | Minimum improvement to keep a change |
| `Noise` | No | `low`, `medium`, or `high` — tolerance for metric variance |

## Example Usage

```
/ck:autoresearch
Goal: Increase test coverage in src/utils from ~60% to 80%
Scope: src/utils/**/*.ts, tests/utils/**/*.test.ts
Verify: npx jest tests/utils --coverage --coverageReporters=json-summary 2>/dev/null | node -e "const d=require('./coverage-summary.json');console.log(d.total.lines.pct)"
Guard: npx tsc --noEmit && npx jest --passWithNoTests
Iterations: 15
Direction: higher
```

## Workflow

1. **Configure** — parse required fields from argument or ask interactively
2. **Baseline** — run Verify command and record starting metric
3. **Iterate** — for each iteration:
   - Make ONE atomic change to files in Scope
   - Commit before running Verify
   - Compare metric against baseline
   - Run Guard if provided
   - Keep (update baseline) or discard (git revert)
   - Log result to TSV
4. **Stuck detection** — 5 consecutive discards triggers strategy shift; 10 consecutive discards forces a full stop
5. **Stop** — after N iterations or 10 consecutive discards

## Output

Results TSV with columns: `iter`, `timestamp`, `metric`, `delta`, `kept`, `description`

## Related Skills

- [Loop](/docs/engineer/skills/ck-loop) — similar optimization loop with identical protocol
- [Security](/docs/engineer/skills/ck-security) — uses autoresearch pattern for iterative security fixes
- [Test](/docs/engineer/skills/test) — test suite that Verify commands often wrap
