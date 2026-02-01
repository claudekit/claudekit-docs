---
title: "/scout"
description: "Fast, token-efficient codebase search with parallel agent spawning to find relevant files for implementation tasks"
section: marketing
category: commands
order: 16
published: true
---

> Find relevant files fast with parallel search agents

## Quick Start

```bash
/scout find campaign-related components
```

**What happens** (under 30 seconds):
1. Spawns 3 parallel scout agents
2. Divides codebase intelligently
3. Each agent searches assigned directories
4. Reports findings to main agent
5. Generates consolidated report

**Output**: `plans/reports/scout-251229-{slug}.md`

## Syntax

```bash
/scout [user-prompt] [scale]
```

### Arguments

| Argument | Description | Default |
|----------|-------------|---------|
| `user-prompt` | What to search for | Required |
| `scale` | Number of parallel agents | 3 |

## Examples

### Example 1: Find Campaign Files

**Input**:
```bash
/scout find campaign-related files
```

**Process**:
```markdown
Spawning 3 scout agents in parallel...

Agent 1: Searching app/, components/
Agent 2: Searching lib/, utils/
Agent 3: Searching types/, api/

[30 seconds later]

✓ Scout report generated

Found 12 campaign-related files:
- lib/campaign/manager.ts
- lib/campaign/scheduler.ts
- components/CampaignCard.tsx
- components/CampaignList.tsx
- app/api/campaigns/route.ts
- types/campaign.ts
[... 6 more files]

Saved: plans/reports/scout-251229-2145-campaign-files.md
```

### Example 2: Scale Up Search

**Input**:
```bash
/scout authentication implementation 5
```

**Spawns 5 agents** for faster, more thorough search in large codebases.

## Workflow Integration

```bash
# Before planning
/scout find email-related code
/plan implement email automation

# Before implementation
/cook add payment feature
# (internally runs /scout automatically)

# Manual search
/scout find all database models
```

## Performance

- **Speed**: 30 seconds avg (vs 2-3 min manual)
- **Parallelization**: 3-10 agents
- **Timeout**: 3 min per agent
- **Token efficiency**: Minimal context usage

## Related Commands

- [/plan](/docs/marketing/commands/plan) - Uses /scout internally
- [/cook](/docs/engineer/skills/cook) - Uses /scout internally and implements after scouting

---

**Find files fast.** Parallel search agents map your codebase.
