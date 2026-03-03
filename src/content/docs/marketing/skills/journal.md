---
title: "ckm:journal"
description: "Write journal entries analyzing recent changes"
section: marketing
kit: marketing
category: skills
order: 39
---

# ckm:journal

> Capture and analyze recent marketing changes in structured journal entries for learning and accountability.

## What This Skill Does

The Journal skill writes structured journal entries that document what changed in the marketing project, why it changed, and what was learned. It reviews recent git commits, campaign adjustments, and content updates to produce a narrative record of marketing decisions and outcomes.

Journals serve two purposes: accountability (what did we actually do?) and learning (what worked, what didn't, and why?). Over time, the journal becomes a searchable institutional knowledge base that prevents teams from repeating past mistakes or re-litigating settled decisions.

The skill is best used at the end of a work session or sprint, capturing the context behind decisions while it's still fresh — not weeks later when the reasoning is forgotten.

## Quick Start

```
/ckm:journal
```

Analyzes recent changes and writes a journal entry for today's session.

## Key Features

- Auto-detects recent changes from git history and file modifications
- Structures entries: what changed, why, what was learned, next steps
- Tags entries by campaign, channel, and type (decision, experiment, fix)
- Searchable journal archive in `docs/journal/`
- Weekly rollup summaries for team reviews
- Links journal entries to relevant campaigns and assets

## Usage Examples

**End-of-session journal**:
```
/ckm:journal
# Writes journal entry covering today's work: what changed, decisions made, open questions
```

**Campaign decision log**:
```
/ckm:journal --type decision --campaign "Q2 Email Launch"
# Documents the decision to change email cadence from weekly to bi-weekly, with rationale
```

**Weekly rollup**:
```
/ckm:journal --rollup --period last-week
# Synthesizes the week's journal entries into a summary for the team meeting
```

## Related

- [ckm:watzup](/docs/marketing/skills/watzup) - End-of-session wrap-up (broader scope)
- [ckm:docs](/docs/marketing/skills/docs) - Formal documentation updates
- [ckm:analyze](/docs/marketing/skills/analyze) - Data-driven performance analysis
