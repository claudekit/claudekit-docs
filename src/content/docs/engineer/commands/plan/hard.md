---
title: /plan:hard
description: Deep research, analyze, and create comprehensive implementation plan
section: engineer
kit: engineer
category: commands/plan
order: 3
published: true
---

# /plan:hard

Thorough planning with research. Uses multiple researcher agents for comprehensive analysis.

## Syntax

```bash
/plan:hard [task]
```

## How It Works

1. **Pre-Creation Check**: Checks for active plan in `.claude/active-plan`
2. **Research Phase**: Multiple `researcher` agents (max 2) research in parallel
3. **Codebase Analysis**: Reads docs; uses `/scout` if `codebase-summary.md` unavailable or >3 days old
4. **Gather & Plan**: Main agent gathers research/scout reports, passes to `planner` subagent
5. **User Review**: Asks for approval

## Output Structure

```
plans/
└── YYYYMMDD-HHmm-plan-name/
    ├── research/
    │   └── researcher-XX-report.md  # Research findings
    ├── reports/
    │   └── XX-report.md
    ├── scout/
    │   └── scout-XX-report.md
    ├── plan.md                      # Overview (<80 lines)
    └── phase-XX-name.md             # Phase details
```

## Research Limits

- Max 2 researcher agents in parallel
- Max 5 tool calls per researcher
- Reports ≤150 lines each

## When to Use

- Unfamiliar technology/library
- Complex architectural decisions
- Need best practices research
- External integrations

## Comparison

| Command | Research | Speed |
|---------|----------|-------|
| `/plan` | Full | Medium |
| `/plan:fast` | None | Fast |
| `/plan:hard` | Deep | Slow |

**Important**: Does NOT start implementation. Use `/code` after approval.

---

**Key Takeaway**: Use `/plan:hard` when you need comprehensive research and detailed planning for complex tasks.
