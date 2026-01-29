---
title: /preview
description: Universal markdown and directory viewer with clean reading interface
section: engineer
kit: engineer
category: commands/core
order: 22
published: true
---

# /preview

Universal viewer for markdown files and directories using a clean, novel-reader inspired UI.

## Syntax

```bash
/preview [path]          # File or directory path
/preview --stop         # Stop running server
```

## Usage

Pass any markdown file or directory path to view it in a distraction-free reading interface.

**Default port**: 3456

Server runs as background task visible in `/tasks`.

## Examples

```bash
/preview plans/my-plan/plan.md      # View markdown file
/preview plans/                     # Browse plans directory
/preview docs/                      # Browse docs directory
/preview any/path/file.md          # View any markdown
/preview any/path/                 # Browse any directory
```

## Modes

### File Mode
Renders markdown with:
- Clean typography
- Syntax-highlighted code blocks
- Responsive layout
- Navigation controls

### Directory Mode
Shows directory contents:
- File listing with metadata
- Quick navigation
- Markdown file preview
- Breadcrumb navigation

## Network Access

Both local and network URLs provided for:
- Local browser: `http://localhost:3456/view?file=...`
- Remote devices: `http://192.168.x.x:3456/view?file=...`

Access full URL including path and query string for direct file viewing.
