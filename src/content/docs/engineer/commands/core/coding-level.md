---
title: /coding-level
description: Set your coding experience level for tailored explanations and output format
section: engineer
kit: engineer
category: commands/core
order: 20
published: true
---

# /coding-level

Configure how technical and detailed Claude's explanations should be based on your experience level.

## Syntax

```bash
/coding-level [0-5]
```

## Experience Levels

| Level | Name | Description |
|-------|------|-------------|
| 0 | ELI5 | Zero coding experience - analogies, no jargon, step-by-step |
| 1 | Junior | 0-2 years - concepts explained, WHY not just HOW |
| 2 | Mid-Level | 3-5 years - design patterns, system thinking |
| 3 | Senior | 5-8 years - trade-offs, business context, architecture |
| 4 | Tech Lead | 8-10 years - risk assessment, business impact, strategy |
| 5 | God Mode | Expert - default behavior, maximum efficiency (default) |

## How It Works

Once set in `.claude/.ck.json`, guidelines are automatically injected on every session start. No manual activation needed.

## Examples

### Set Level 1 (Junior)

Update `.claude/.ck.json`:
```json
{
  "codingLevel": 1
}
```

Next session, Claude automatically:
- Explains concepts and techniques clearly
- Always explains WHY, not just HOW
- Points out common mistakes
- Adds "Key Takeaways" after implementations

### Manual Override

For finer control, use `/output-style` with specific styles:
- `coding-level-0-eli5`
- `coding-level-1-junior`
- `coding-level-2-mid`
- `coding-level-3-senior`
- `coding-level-4-lead`
- `coding-level-5-god`
