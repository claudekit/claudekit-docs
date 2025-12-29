---
title: Plans Kanban Dashboard
description: Visual dashboard server for viewing plan directories with progress tracking, timeline visualization, phase status, and activity heatmap
section: engineer
kit: engineer
category: skills
order: 3
published: true
---

# Plans Kanban Dashboard

> Transform plan directories into visual dashboards with progress tracking, Gantt timelines, and phase status indicators.

## What This Skill Does

Plans Kanban Dashboard is a background HTTP server that renders interactive visual dashboards for plan directories. It automatically parses `plan.md` files and phase documents to display progress bars, phase breakdowns, timeline visualizations, and activity heatmaps.

This skill is essential for monitoring multi-phase implementation plans, tracking progress across parallel development efforts, and visualizing project timelines. The glassmorphism UI with dark mode provides a modern, readable interface accessible from any browser.

## Prerequisites

**Installation Required**:
```bash
# Option 1: Install via ClaudeKit CLI (recommended)
ck init  # Runs install.sh which handles all skills

# Option 2: Manual installation
cd .claude/skills/plans-kanban
npm install
```

**Dependencies**: `gray-matter` (installed via npm)

**Without installation**: You'll get **Error 500** when viewing plan details.

## Activation

This skill activates automatically when:
- User mentions viewing plans, kanban dashboard, or progress tracking
- User references plan directories or phase management
- User wants visual timeline or Gantt chart

Manual activation:
```bash
/kanban [plans-directory]
```

## Quick Start

```bash
# View plans dashboard
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --open

# Remote access (accessible from network)
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --host 0.0.0.0 \
  --open

# Background mode (keep terminal free)
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --background

# Stop all running servers
node .claude/skills/plans-kanban/scripts/server.cjs --stop
```

## Features

### Dashboard View

Plan cards display:
- **Progress bars**: Visual percentage of completed phases
- **Phase breakdown**: Count of completed, in-progress, and pending phases
- **Last modified**: Timestamp of most recent update
- **Issue links**: GitHub issue references (if present)
- **Branch links**: Git branch references (if present)
- **Priority indicators**: High/medium/low priority badges

### Timeline Visualization

Gantt-style timeline showing:
- Plan duration from start to estimated completion
- Overlapping plans for resource planning
- Activity heatmap highlighting busy periods
- Phase milestones and deadlines

### Design

- **Glassmorphism UI**: Frosted glass effect with backdrop blur
- **Dark mode**: Warm accent colors optimized for night viewing
- **Responsive grid**: Adapts to screen size (desktop, tablet, mobile)
- **Warm accents**: Amber and orange highlights for visual hierarchy

## CLI Options

| Option | Description | Default |
|--------|-------------|---------|
| `--dir <path>` | Plans directory to scan | Required |
| `--port <number>` | Server port | 3500 |
| `--host <addr>` | Host to bind (`0.0.0.0` for remote) | localhost |
| `--open` | Auto-open browser | false |
| `--background` | Run in background | false |
| `--stop` | Stop all servers | - |

## Architecture

```
scripts/
├── server.cjs               # Main entry point
└── lib/
    ├── port-finder.cjs      # Port allocation (3500-3550)
    ├── process-mgr.cjs      # PID management (/tmp)
    ├── http-server.cjs      # HTTP routing
    ├── plan-parser.cjs      # Plan.md parsing
    ├── plan-scanner.cjs     # Directory scanning
    ├── plan-metadata-extractor.cjs  # Rich metadata extraction
    └── dashboard-renderer.cjs       # HTML generation

assets/
├── dashboard-template.html  # Dashboard HTML template
├── dashboard.css           # Glassmorphism styles
└── dashboard.js            # Client interactivity
```

## HTTP Routes

| Route | Description |
|-------|-------------|
| `/` or `/kanban` | Dashboard view for default directory |
| `/kanban?dir=<path>` | Dashboard for specific directory |
| `/api/plans` | JSON API for plans data |
| `/api/plans?dir=<path>` | JSON API for specific directory |
| `/assets/*` | Static assets (CSS, JS) |
| `/file/*` | Local file serving (for images, etc.) |

## Plan Directory Structure

The dashboard scans for directories containing `plan.md` files:

```
plans/
├── 251215-feature-a/
│   ├── plan.md              # Required - parsed for metadata and phases
│   ├── phase-01-setup.md
│   ├── phase-02-impl.md
│   └── phase-03-test.md
├── 251214-feature-b/
│   ├── plan.md
│   └── phase-01-research.md
└── templates/               # Excluded by default (no plan.md)
```

**Required**: Each plan directory must contain `plan.md` with frontmatter:

```yaml
---
title: Feature A Implementation
status: in-progress
priority: high
issue: https://github.com/org/repo/issues/123
branch: feature/feature-a
created: 2025-12-15
---
```

## Remote Access

For network access from other devices:

```bash
# Bind to all interfaces
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --host 0.0.0.0 \
  --port 3500
```

Server output includes both local and network URLs:

```json
{
  "success": true,
  "url": "http://localhost:3500/kanban?dir=...",
  "networkUrl": "http://192.168.2.75:3500/kanban?dir=...",
  "port": 3500
}
```

**Use networkUrl to access from phones, tablets, or other computers on same network.**

## Capabilities

### Progress Tracking

Dashboard automatically calculates completion percentage:

```markdown
# plan.md

## Phase 1: Setup [completed]
## Phase 2: Implementation [in-progress]
## Phase 3: Testing [pending]

Progress: 33% (1/3 completed)
```

**When to use**: Track multi-phase projects, monitor parallel teams, visualize sprint progress.

### Timeline Visualization

Gantt chart shows:
- Plan start and end dates
- Overlapping plans (resource conflicts)
- Critical path highlighting
- Milestone markers

**When to use**: Capacity planning, deadline tracking, resource allocation.

### JSON API Integration

Programmatic access to plan data:

```bash
curl http://localhost:3500/api/plans | jq '.plans[] | {title, status, progress}'
```

**When to use**: CI/CD integration, reporting dashboards, automation scripts.

## Examples

### Example 1: Monitor Development Sprints

```bash
# Start dashboard for sprint plans
/kanban plans/sprints/

# Access from phone to check progress during standup
# Use networkUrl: http://192.168.1.100:3500/kanban?dir=plans/sprints
```

### Example 2: Track Parallel Feature Development

```
plans/
├── feature-auth/
│   ├── plan.md [in-progress, 60% complete]
│   ├── phase-01-design.md [completed]
│   └── phase-02-impl.md [in-progress]
├── feature-api/
│   ├── plan.md [in-progress, 80% complete]
│   └── phase-01-endpoints.md [completed]
└── feature-ui/
    └── plan.md [pending, 0% complete]
```

Dashboard shows all three features side-by-side with progress bars and timeline overlap.

## Best Practices

**Use consistent phase naming**: `phase-01-name.md`, `phase-02-name.md` for automatic sorting.

**Update plan.md frontmatter**: Keep status, priority, and dates current for accurate dashboards.

**Include issue/branch links**: Dashboard auto-links to GitHub for quick navigation.

**Run in background mode**: Free up terminal while keeping dashboard accessible.

**Use network access for teams**: Share networkUrl for team visibility during standups.

**Check /api/plans for automation**: Integrate with CI/CD or reporting tools.

## Troubleshooting

**Problem**: Port 3500 already in use.

**Solution**: Server auto-increments to next available port (3500-3550). Check terminal output for actual port.

---

**Problem**: No plans found in directory.

**Solution**: Ensure each plan directory contains `plan.md` file. Check directory path is correct.

---

**Problem**: Can't access from other devices.

**Solution**: Use `--host 0.0.0.0` to bind to all network interfaces. Check firewall allows port 3500.

---

**Problem**: Server won't stop with `--stop`.

**Solution**: Check `/tmp/plans-kanban-*.pid` for stale PID files. Manually kill process or delete PID files.

---

**Problem**: Progress shows 0% but phases are marked completed.

**Solution**: Verify phase markdown files have status indicators in headers: `## Phase 1: Name [completed]`

## Related Skills

- [Markdown Novel Viewer](/docs/engineer/skills/markdown-novel-viewer) - Read individual plan files with rich formatting
- [Planning](/docs/engineer/skills/planning) - Create and structure plan directories
- [Research](/docs/engineer/skills/research) - Gather requirements for planning

## Related Commands

- `/kanban` - Quick access to dashboard server
- `/preview` - View individual plan files (uses Markdown Novel Viewer)
