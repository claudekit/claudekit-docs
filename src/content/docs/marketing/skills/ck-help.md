---
title: "ckm:ck-help"
description: "ClaudeKit usage guide and help system"
section: marketing
kit: marketing
category: skills
order: 54
---

# ckm:ck-help

> Get instant guidance on ClaudeKit commands, skills, and workflows for the marketing toolkit.

## What This Skill Does

The CK-Help skill is the built-in help and documentation system for the ClaudeKit Marketing toolkit. It answers questions about how to use specific skills and commands, guides new users through the toolkit's capabilities, and surfaces the right skill for any marketing task.

Rather than searching through documentation manually, you can ask CK-Help what you need and it will point you to the relevant skill, explain how to invoke it, and provide a practical usage example. It understands the full ClaudeKit command vocabulary and can disambiguate between similar skills (e.g., when to use `/ckm:write` vs. `/ckm:email` vs. `/ckm:social`).

CK-Help also includes an onboarding flow for new users: a guided tour of the marketing toolkit that covers the most impactful skills for common marketing workflows.

## Quick Start

```
/ckm:ck-help
```

Opens the interactive help system.

Or ask a specific question:
```
/ckm:ck-help How do I create a campaign plan?
```

## Key Features

- Natural language questions about any ClaudeKit skill or command
- Skill disambiguation: get the right tool for your specific task
- Usage examples for every skill in the toolkit
- Guided onboarding tour for new users
- Workflow suggestions: "you might also need..."
- Full command reference with flag documentation
- Context-aware: suggests skills based on your current project state

## Usage Examples

**General help**:
```
/ckm:ck-help
# Opens skill catalog with search and category browsing
```

**Task-based question**:
```
/ckm:ck-help I want to analyze my competitor's marketing strategy
# Points to: ckm:competitor, with usage example
```

**Skill disambiguation**:
```
/ckm:ck-help What's the difference between ckm:write and ckm:email?
# Explains use cases for each and when to pick which
```

**Onboarding**:
```
/ckm:ck-help --tour
# Walks through: init → plan → campaign → analyze → watzup as a standard workflow
```

## Related

- [ckm:init](/docs/marketing/skills/init) - Start a new marketing project
- [ckm:plan](/docs/marketing/skills/plan) - Plan your first campaign
- [ckm:brainstorming](/docs/marketing/skills/brainstorming) - Explore ideas before planning
