---
title: "ckm:kit-builder"
description: "Build ClaudeKit Marketing components — skills, agents, workflows, and command templates for the marketing toolkit."
section: marketing
category: skills
order: 82
---

# Kit Builder

> Extend ClaudeKit Marketing by building custom skills, agents, and workflow commands tailored to your marketing stack.

## What This Skill Does

**The Challenge**: Every marketing team has unique workflows, proprietary tools, and specific automation needs that generic AI tools don't cover. Building custom Claude Code skills requires understanding conventions, file structures, and activation patterns.

**The Solution**: Kit Builder skill provides templates, conventions, and step-by-step workflows for creating new ClaudeKit Marketing components — skills, agents, workflow commands, and reference libraries. Includes testing patterns and distribution guidance.

## Activation

**Implicit**: Activates when user wants to create custom skills, extend ClaudeKit, or build agent workflows.

**Explicit**: Activate via prompt:
```
Activate kit-builder skill to create [skill/agent/workflow] for [describe purpose]
```

## Capabilities

### 1. Skill Creation Template
Build a new reusable skill from scratch.

**Skill directory structure**:
```
skills/
└── my-new-skill/
    ├── SKILL.md           # Skill definition (required)
    ├── scripts/           # Python/Bash automation scripts
    │   └── main.py
    ├── references/        # Reference docs and data
    │   └── guide.md
    └── assets/            # Templates and presets
        └── templates.md
```

**SKILL.md template**:
```markdown
# Skill: my-new-skill

## Purpose
[What this skill does in 2 sentences]

## Activation
- Implicit triggers: [phrases that activate this skill]
- Explicit: "Activate my-new-skill skill to..."

## Capabilities
[List capabilities]

## Quick Start
[First example]
```

### 2. Agent Creation Patterns
Define specialized agents with focused roles.

**Agent definition template**:
```markdown
# Agent: Market Researcher

## Role
Research competitor positioning, market trends, and ICP insights.

## Capabilities
- Web search and synthesis
- Competitor analysis frameworks
- ICP interview analysis

## Output Format
Structured markdown report in `plans/research/`

## Activation
"Spawn market-researcher agent to investigate [topic]"
```

### 3. Workflow Command Templates
Create `/command` shortcuts for common marketing workflows.

**Command template**:
```markdown
# Command: /ckm:weekly-report

## Purpose
Generate automated weekly marketing performance report.

## Steps
1. Fetch GA4 metrics (last 7 days)
2. Compare to previous 7 days
3. Pull ad spend and ROAS
4. Generate summary with highlights and alerts
5. Save to `reports/weekly-{date}.md`

## Output
Markdown report + Slack notification
```

### 4. Reference Library Building
Create reference docs loaded by skills for consistent outputs.

**Reference types**:
- Framework guides (`references/copy-formulas.md`)
- Template libraries (`references/headline-templates.md`)
- Checklist files (`references/launch-checklist.md`)
- Style guides (`references/writing-styles.md`)

## Prerequisites

- ClaudeKit Marketing installed
- `~/.claude/skills/` directory for personal skills
- Understanding of the skill/agent activation model

## Best Practices

**1. One skill, one responsibility**
Build focused skills. Compose them for complex workflows.

**2. Test activation triggers**
Verify implicit and explicit activation works before distributing.

**3. Document with examples**
Every skill needs at least 2 concrete use cases in SKILL.md.

## Common Use Cases

### Use Case 1: Custom Campaign Reporting Skill
**Scenario**: Build skill that auto-generates campaign reports in your brand format.

**Workflow**:
1. Define skill structure in `skills/campaign-report/SKILL.md`
2. Write Python script to query GA4 + ad APIs
3. Add report template in `assets/templates/campaign-report.md`
4. Add to `~/.claude/skills/` for personal use
5. Test: "Activate campaign-report skill for Q1 2026"

### Use Case 2: Industry-Specific Research Agent
**Scenario**: SaaS company needs agent specialized in SaaS metrics and benchmarks.

**Workflow**:
1. Create agent definition with SaaS-specific context
2. Add reference library: SaaS metrics benchmarks, terminology
3. Define output format: structured research report
4. Test with 3 research queries
5. Share with team via shared `~/.claude/skills/` repository

## Troubleshooting

**Issue**: Skill not activating on expected phrases
**Solution**: Review activation triggers in SKILL.md. Test with exact phrasing. Add more trigger variations.

**Issue**: Script fails to run in skill context
**Solution**: Use absolute paths. Verify Python venv is activated. Check `SKILL.md` for script invocation instructions.

## Related Skills

- [Claude Code](/docs/marketing/skills/claude-code) - Claude Code skill system
- [Context Engineering](/docs/marketing/skills/context-engineering) - Optimize skill context
- [Backend Development](/docs/marketing/skills/backend-development) - Scripts for skills
- [Docs Seeker](/docs/marketing/skills/docs-seeker) - Research for skill building

## Related Commands

- `/ckm:brainstorm` - Design new skill architecture
- `/ckm:plan` - Plan skill implementation
