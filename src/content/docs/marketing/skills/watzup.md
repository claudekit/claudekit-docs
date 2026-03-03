---
title: "ckm:watzup"
description: "Review recent changes and wrap up the work session"
section: marketing
kit: marketing
category: skills
order: 50
---

# ckm:watzup

> Review everything that changed in the current session and produce a clean wrap-up summary.

## What This Skill Does

The Watzup skill reviews recent changes across the marketing project and produces a session wrap-up report. It scans git history, modified files, campaign status updates, and task completions to give a clear "what happened today" summary — useful for async team updates, end-of-day documentation, and handoffs.

Unlike the Journal skill (which focuses on learning and decisions), Watzup focuses on status: what changed, what's done, what's in progress, and what needs attention next. It's the last thing you run before closing a work session.

The skill also flags anything that looks unfinished, broken, or inconsistent — catching issues before they become problems for the next person who picks up the work.

## Quick Start

```
/ckm:watzup
```

Scans recent changes and produces a session summary.

## Key Features

- Automatic detection of modified files, commits, and campaign changes
- Task completion summary from Kanban board
- Unfinished items and open blockers highlighted
- Next session priorities suggested based on current state
- Exportable Markdown report for async team sharing
- Integration with journal for combined session documentation

## Usage Examples

**End of session wrap-up**:
```
/ckm:watzup
# Produces: what changed today, tasks completed, open items, priorities for tomorrow
```

**Team handoff report**:
```
/ckm:watzup --format handoff --recipient "marketing-team"
# Generates a structured handoff document with full session context
```

**Weekly wrap-up**:
```
/ckm:watzup --period last-week
# Summarizes the full week: campaigns launched, content published, metrics moved, next week focus
```

## Related

- [ckm:journal](/docs/marketing/skills/journal) - Decision and learning log (complementary)
- [ckm:kanban](/docs/marketing/skills/kanban) - Task status feeding into wrap-up
- [ckm:docs](/docs/marketing/skills/docs) - Formal doc updates triggered by wrap-up findings
