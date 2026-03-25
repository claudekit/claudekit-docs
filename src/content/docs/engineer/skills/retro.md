---
title: "ck:retro"
description: "Data-driven sprint retrospective with git metrics, velocity tracking, and health scoring"
section: engineer
kit: engineer
category: skills
order: 52
---

# Retro

Automated sprint retrospective using git metrics—commit velocity, file hotspots, churn ratio, and plan completion—delivered as a structured report.

## What This Skill Does

Retro pulls real data from your git history and plan files to generate an honest retrospective. No guesswork—metrics from actual commits, LOC changes, test coverage deltas, and plan completion percentages.

## When to Use

- End of sprint, week, or milestone
- Team wants data-backed retrospective instead of vibes
- Comparing current period against previous (trend analysis)
- Generating a shareable report for stakeholders

## Core Capabilities

- Parse configurable timeframes (7d, 2w, 1m, sprint, date:date)
- Compute commit velocity, lines changed, file hotspots, churn ratio
- Calculate test coverage delta between periods
- Track plan completion percentage from `plans/` directory
- Compare against previous period (`--compare`)
- Output as markdown or HTML

## Arguments

| Argument | Description |
|----------|-------------|
| `timeframe` | `7d`, `2w`, `1m`, `sprint`, or `YYYY-MM-DD:YYYY-MM-DD` |
| `--compare` | Compare current period vs previous equivalent period |
| `--team` | Include per-author breakdown |
| `--format html\|md` | Output format (default: md) |

## Example Usage

```
/ck:retro 2w
/ck:retro sprint --compare
/ck:retro 2025-01-01:2025-01-15 --team --format html
```

## 6-Step Workflow

1. **Parse timeframe** — resolve date range from argument or sprint config
2. **Gather metrics** — `git log`, `git diff --stat`, file change frequency
3. **Compute health score** — velocity trend, churn ratio, hotspot concentration
4. **Track plan progress** — scan `plans/` for `[x]` vs `[ ]` checkboxes
5. **Generate report** — structured markdown with tables and trend indicators
6. **Deliver** — write to `plans/reports/retro-{date}.md` or open HTML

## Metrics Tracked

| Metric | Source |
|--------|--------|
| Commit velocity | `git log --oneline` count |
| Lines changed | `git diff --shortstat` |
| File hotspots | Files changed most frequently |
| Churn ratio | Lines deleted / lines added |
| Test coverage delta | Diff coverage reports if present |
| Plan completion % | Checked vs total items in plan files |

## Related Skills

- [Cook](/docs/engineer/skills/cook) — implementation skill retro measures
- [Journal](/docs/engineer/skills/journal) — daily entries that feed retrospectives
- [Plans Kanban](/docs/engineer/skills/plans-kanban) — visual plan progress this skill summarizes
