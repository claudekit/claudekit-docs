---
title: "/dashboard"
description: "Launch the Marketing Dashboard web application for visual campaign management, content library, and automation workflows"
section: marketing
category: commands
order: 22
published: true
---

> Visual interface for marketing operations

## Quick Start

```bash
/dashboard
```

**What happens**:
1. Starts Vue 3 frontend (port 5173)
2. Starts Hono API backend (port 3457)
3. Initializes SQLite database
4. Opens browser to dashboard

**URLs**:
- Frontend: http://localhost:5173
- API: http://localhost:3457
- Health: http://localhost:3457/health

## Syntax

```bash
/dashboard [mode]
```

### Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| `dev` | Development with HMR | Default, active development |
| `build` | Build for production | Create optimized bundle |
| `prod` | Production mode | Serve production build |
| `stop` | Stop servers | Cleanup |

## Dashboard Features

### Campaign Board
- Kanban view with drag-drop
- Status columns: Planning, Active, Paused, Completed
- Quick actions: Edit, Analyze, Duplicate
- Filter by date, status, channel

### Content Library
- Grid view of all content
- Filters: Type, campaign, status, date
- Search by title, keywords
- Quick preview and edit

### Asset Gallery
- Visual browser for images, videos
- Link assets to campaigns
- AI enhancement tools
- Bulk operations

### Automation Panel
Pre-built automation recipes:
- Blog Post Generator
- Social Media Pack
- Campaign Brief Creator
- SEO Audit Tool
- Email Sequence Builder

## Tech Stack

- **Frontend**: Vue 3 + Vite + Pinia + Tailwind CSS
- **Backend**: Hono + Node.js
- **Database**: SQLite (local file)
- **AI**: Claude API integration
- **Build**: Optimized 56 KB gzipped

## Examples

### Start Development
```bash
/dashboard dev
# or just
/dashboard
```

**Output**:
```markdown
Starting Marketing Dashboard...

✓ Installing dependencies...
✓ Initializing database...
✓ Starting API server (port 3457)...
✓ Starting frontend (port 5173)...

Dashboard ready!
→ Frontend: http://localhost:5173
→ API: http://localhost:3457

Press Ctrl+C to stop
```

### Build for Production
```bash
/dashboard build
```

**Output**:
```markdown
Building for production...

✓ Frontend build complete
  - dist/assets/*.js (42 KB gzipped)
  - dist/assets/*.css (14 KB gzipped)
  Total: 56 KB gzipped

Build artifacts: app/dist/

Deploy with:
/dashboard prod
```

### Production Mode
```bash
/dashboard prod
```

**Output**:
```markdown
Starting production server...

✓ Serving built app from app/dist/
✓ API server running (port 3457)

Production ready!
→ Application: http://localhost:3457
→ Health check: http://localhost:3457/health
```

### Stop Servers
```bash
/dashboard stop
```

**Output**:
```markdown
Stopping servers...

✓ Frontend stopped (port 5173)
✓ API stopped (port 3457)

Dashboard stopped.
```

## API Key Setup

Required for AI features:

**Via Dashboard**:
1. Open http://localhost:5173
2. Go to Settings
3. Enter Claude API key
4. Saved to sessionStorage

**Via Environment**:
```bash
export CLAUDE_API_KEY=your-key-here
/dashboard
```

## Data Storage

All data stored locally:
- Database: `server/marketing.db` (SQLite)
- Assets: `assets/` directory
- Configs: `.env` file

**Backup**:
```bash
cp server/marketing.db server/marketing.db.backup
```

## Workflow Integration

### Visual Campaign Management
```bash
# Start dashboard
/dashboard

# Create campaigns visually
# Manage content in UI
# Run automation recipes
```

### Command + Dashboard Combo
```bash
# Create via command
/campaign create "Q1 Launch"

# View in dashboard
/dashboard
# See new campaign in Kanban board

# Analyze in dashboard
# Export reports
```

## Performance

- **Cold start**: 3-5 seconds
- **HMR updates**: <100ms
- **API response**: <50ms avg
- **Bundle size**: 56 KB gzipped

## Requirements

- Node.js 18+
- NPM dependencies (auto-installs)
- 100 MB disk space
- Modern browser (Chrome, Firefox, Safari, Edge)

## Troubleshooting

### Port conflicts
```bash
# Change ports in server/index.js and app/vite.config.ts
# Or stop conflicting services
```

### Database locked
```bash
/dashboard stop
rm server/marketing.db.lock
/dashboard
```

### API key issues
```bash
# Check key in Settings page
# Or set environment variable
export CLAUDE_API_KEY=sk-ant-...
```

## Related Commands

- [/campaign](/docs/marketing/commands/campaign) - Create campaigns (CLI)
- [/content](/docs/marketing/commands/content) - Generate content (CLI)
- [/analyze](/docs/marketing/commands/analyze) - View analytics (CLI + dashboard)

## Related Files

- Skill: `.claude/skills/marketing-dashboard/`
- Scripts: `start.sh`, `build.sh`, `stop.sh`
- Server: `server/index.js`
- Frontend: `app/src/`

---

**Visual management.** Campaigns, content, and automation in one interface.
