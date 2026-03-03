---
title: "ckm:docs"
description: "Initialize, update, and summarize project documentation"
section: marketing
kit: marketing
category: skills
order: 34
---

# ckm:docs

> Keep marketing project documentation accurate, complete, and up to date.

## What This Skill Does

The Docs skill manages the lifecycle of marketing project documentation. It initializes the `docs/` directory structure when starting a new project, updates existing docs after major changes, and generates summaries that give new team members fast context.

Documentation drift is one of the most common causes of team misalignment. The Docs skill combats this by making documentation updates a first-class step in every workflow, not an afterthought. After campaigns launch, personas evolve, or brand guidelines change — Docs ensures the record reflects reality.

The skill follows the standard ClaudeKit documentation structure and enforces consistent formatting so docs stay readable and searchable across the project lifetime.

## Quick Start

**Initialize docs for a new project**:
```
/ckm:docs init
```

**Update docs after implementation**:
```
/ckm:docs update --section brand-guidelines
```

**Generate a summary for onboarding**:
```
/ckm:docs summarize
```

## Key Features

- Initializes standard `docs/` directory structure
- Updates specific doc sections after changes
- Generates executive summaries and onboarding overviews
- Validates internal links and cross-references
- Syncs documentation with implemented features
- Supports Markdown with frontmatter

## Usage Examples

**New project setup**:
```
Initialize the docs directory for our new product launch campaign.
Create sections for: brand guidelines, campaign brief, persona profiles, and content calendar
```

**Post-campaign documentation update**:
```
Update the campaign docs to reflect the final performance results and lessons learned
from the Q1 Product Launch campaign
```

**Onboarding summary**:
```
Generate a 1-page summary of our marketing project docs for a new team member joining next week
```

## Related

- [ckm:brand](/docs/marketing/skills/brand) - Brand guidelines management
- [ckm:journal](/docs/marketing/skills/journal) - Session-level change journaling
- [ckm:watzup](/docs/marketing/skills/watzup) - Review and wrap up recent changes
