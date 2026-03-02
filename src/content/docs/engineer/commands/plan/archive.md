---
title: /ck:plan:archive
description: Archive completed plans and write journal entries
section: engineer
kit: engineer
category: commands/plan
order: 10
published: true
---

# /ck:plan:archive

Archive completed plans with optional journal documentation.

## Syntax

```bash
/ck:plan:archive                  # Archive all plans
/ck:plan:archive [plan-path]      # Archive specific plan
```

## Workflow

1. **Read Plans** - Analyzes plan directory structure and phase files
2. **Journal Entries** (Optional) - Document key events, decisions, impacts
3. **Confirm Action** - Choose specific plans or all completed plans
4. **Archive Method** - Move to `./plans/archive/` or delete permanently
5. **Commit Changes** (Optional) - Stage and commit via `/ck:git cm` or `/ck:git cp`

## Journal Documentation

If enabled, creates entries in `./docs/journals/` directory:
- Concise summaries of plan progress
- Key changes and impacts
- Important decisions made
- Lessons learned

## Archive Options

**Move to archive:**
- Preserves plan history
- Organized in `./plans/archive/`
- Searchable and accessible

**Delete permanently:**
- Removes plan files completely
- Recommended only for abandoned/duplicate plans

## Output Summary

After archiving:
- Number of plans archived/deleted
- Table of affected plans (title, status, created date, LOC)
- Table of journal entries created
- Commit status if changes committed

## Examples

```bash
/ck:plan:archive
# Prompts for journal → selects plans → archives

/ck:plan:archive plans/260128-auth-implementation/
# Archives specific plan only
```
