---
title: "ckm:plan"
description: "Intelligent plan creation with prompt enhancement"
section: marketing
kit: marketing
category: skills
order: 42
---

# `ckm:plan`

> Transform a vague marketing goal into a structured, actionable implementation plan.

## What This Skill Does

The Plan skill converts high-level marketing goals and brainstorm outputs into detailed, phased implementation plans. It structures work into clear phases, assigns tasks, estimates effort, identifies dependencies, and surfaces risks before execution begins.

What distinguishes this from a simple task list is prompt enhancement: the skill actively clarifies ambiguous requirements, asks targeted questions to fill gaps, and uses YAGNI/KISS principles to scope plans that are realistic rather than exhaustive. Plans are saved to the `plans/` directory in a standard format that integrates with the Kanban and agent orchestration system.

The Plan skill is a prerequisite for any non-trivial marketing campaign or project — it turns intentions into executable roadmaps.

## Quick Start

```
/ckm:plan
```

Starts an interactive planning session. Alternatively, provide context directly:
```
/ckm:plan Create a 6-week email nurture campaign for trial users. Goal: improve trial-to-paid conversion from 8% to 15%
```

## Key Features

- Goal-to-plan conversion with automatic phase structuring
- Prompt enhancement: clarifies ambiguities before planning
- Dependency mapping between tasks and phases
- Effort estimation (hours/days per task)
- Risk identification with mitigation suggestions
- Saved to `plans/` directory in standard ClaudeKit format
- Integration with Kanban for task tracking

## Usage Examples

**Campaign plan**:
```
/ckm:plan Plan a product launch campaign for our new AI feature.
Timeline: 8 weeks. Budget: $20k. Channels: email, content, paid social, PR
```

**SEO content plan**:
```
/ckm:plan Create a 3-month SEO content plan targeting "project management for startups" and related long-tail keywords
```

**Post-brainstorm planning**:
```
Based on our brainstorming session about the re-engagement campaign, create a detailed implementation plan
with tasks, owners, and timeline
```

## Related

- [ckm:brainstorming](/docs/marketing/skills/brainstorming) - Explore options before planning
- [ckm:kanban](/docs/marketing/skills/kanban) - Execute and track the plan
- [ckm:campaign](/docs/marketing/skills/campaign) - Campaign-specific planning frameworks
