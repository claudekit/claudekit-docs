---
title: /plan:fast
description: No research - analyze codebase and create implementation plan
section: docs
category: commands/plan
order: 2
published: true
---

# /plan:fast

Quick planning without research. Analyzes codebase and creates implementation plan.

## Syntax

```bash
/plan:fast [task]
```

## How It Works

1. **Pre-Creation Check**: Checks for active plan in `.claude/active-plan`
2. **Codebase Analysis**: Reads `codebase-summary.md`, `code-standards.md`, `system-architecture.md`, `project-overview-pdr.md`
3. **Plan Creation**: Uses `planner` subagent to create implementation plan
4. **User Review**: Asks for approval before proceeding

## Output Structure

```
plans/
└── YYYYMMDD-HHmm-plan-name/
    ├── reports/
    │   └── XX-report.md
    ├── plan.md           # Overview (<80 lines)
    └── phase-XX-name.md  # Phase details
```

## When to Use

- Task is straightforward
- Codebase is well-understood
- No external research needed
- Faster iteration desired

## Comparison

| Command | Research | Speed |
|---------|----------|-------|
| `/plan` | Full research | Slower |
| `/plan:fast` | No research | Faster |
| `/plan:hard` | Deep research | Slowest |

**Important**: Does NOT start implementation. Use `/code` after approval.

---

**Key Takeaway**: Use `/plan:fast` for quick planning when you understand the task and don't need external research.
