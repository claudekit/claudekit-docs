---
title: Plans Kanban Dashboard
description: Visual dashboard server để xem plan directories với progress tracking, timeline visualization, phase status và activity heatmap
section: engineer
kit: engineer
category: skills
order: 3
published: true
lang: vi
---

# Plans Kanban Dashboard

> Chuyển đổi plan directories thành visual dashboards với progress tracking, Gantt timelines và phase status indicators.

## Skill Này Làm Gì

Plans Kanban Dashboard là background HTTP server render interactive visual dashboards cho plan directories. Nó tự động parse `plan.md` files và phase documents để hiển thị progress bars, phase breakdowns, timeline visualizations và activity heatmaps.

Skill này essential để monitor multi-phase implementation plans, track progress trên parallel development efforts và visualize project timelines. Glassmorphism UI với dark mode cung cấp modern, readable interface accessible từ bất kỳ browser nào.

## Yêu Cầu Trước

**Yêu cầu cài đặt**:
```bash
# Option 1: Cài đặt qua ClaudeKit CLI (khuyến nghị)
ck init  # Chạy install.sh xử lý tất cả skills

# Option 2: Cài đặt thủ công
cd .claude/skills/plans-kanban
npm install
```

**Dependencies**: `gray-matter` (installed qua npm)

**Không có cài đặt**: Bạn sẽ nhận **Error 500** khi viewing plan details.

## Kích Hoạt

Skill này tự động kích hoạt khi:
- User đề cập viewing plans, kanban dashboard hoặc progress tracking
- User references plan directories hoặc phase management
- User muốn visual timeline hoặc Gantt chart

Kích hoạt thủ công:
```bash
/kanban [plans-directory]
```

## Bắt Đầu Nhanh

```bash
# Xem plans dashboard
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --open

# Remote access (accessible từ network)
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --host 0.0.0.0 \
  --open

# Background mode (giữ terminal free)
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --background

# Stop tất cả running servers
node .claude/skills/plans-kanban/scripts/server.cjs --stop
```

## Tính Năng

### Dashboard View

Plan cards hiển thị:
- **Progress bars**: Visual percentage của completed phases
- **Phase breakdown**: Count của completed, in-progress và pending phases
- **Last modified**: Timestamp của most recent update
- **Issue links**: GitHub issue references (nếu present)
- **Branch links**: Git branch references (nếu present)
- **Priority indicators**: High/medium/low priority badges

### Timeline Visualization

Gantt-style timeline hiển thị:
- Plan duration từ start tới estimated completion
- Overlapping plans cho resource planning
- Activity heatmap highlighting busy periods
- Phase milestones và deadlines

### Design

- **Glassmorphism UI**: Frosted glass effect với backdrop blur
- **Dark mode**: Warm accent colors tối ưu cho night viewing
- **Responsive grid**: Adapts tới screen size (desktop, tablet, mobile)
- **Warm accents**: Amber và orange highlights cho visual hierarchy

## CLI Options

| Option | Mô Tả | Default |
|--------|-------|---------|
| `--dir <path>` | Plans directory để scan | Required |
| `--port <number>` | Server port | 3500 |
| `--host <addr>` | Host để bind (`0.0.0.0` cho remote) | localhost |
| `--open` | Auto-open browser | false |
| `--background` | Chạy ở background | false |
| `--stop` | Stop tất cả servers | - |

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

| Route | Mô Tả |
|-------|-------|
| `/` hoặc `/kanban` | Dashboard view cho default directory |
| `/kanban?dir=<path>` | Dashboard cho specific directory |
| `/api/plans` | JSON API cho plans data |
| `/api/plans?dir=<path>` | JSON API cho specific directory |
| `/assets/*` | Static assets (CSS, JS) |
| `/file/*` | Local file serving (cho images, etc.) |

## Plan Directory Structure

Dashboard scan cho directories chứa `plan.md` files:

```
plans/
├── 251215-feature-a/
│   ├── plan.md              # Required - parsed cho metadata và phases
│   ├── phase-01-setup.md
│   ├── phase-02-impl.md
│   └── phase-03-test.md
├── 251214-feature-b/
│   ├── plan.md
│   └── phase-01-research.md
└── templates/               # Excluded by default (no plan.md)
```

**Required**: Mỗi plan directory phải chứa `plan.md` với frontmatter:

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

Cho network access từ other devices:

```bash
# Bind tới tất cả interfaces
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --host 0.0.0.0 \
  --port 3500
```

Server output bao gồm cả local và network URLs:

```json
{
  "success": true,
  "url": "http://localhost:3500/kanban?dir=...",
  "networkUrl": "http://192.168.2.75:3500/kanban?dir=...",
  "port": 3500
}
```

**Dùng networkUrl để access từ phones, tablets hoặc other computers trên same network.**

## Best Practices

**Dùng consistent phase naming**: `phase-01-name.md`, `phase-02-name.md` cho automatic sorting.

**Update plan.md frontmatter**: Giữ status, priority và dates current cho accurate dashboards.

**Bao gồm issue/branch links**: Dashboard auto-links tới GitHub cho quick navigation.

**Chạy ở background mode**: Free up terminal trong khi giữ dashboard accessible.

**Dùng network access cho teams**: Share networkUrl cho team visibility during standups.

**Kiểm tra /api/plans cho automation**: Integrate với CI/CD hoặc reporting tools.

## Skills Liên Quan

- [Markdown Novel Viewer](/vi/docs/engineer/skills/markdown-novel-viewer) - Đọc individual plan files với rich formatting
- [Planning](/vi/docs/engineer/skills/planning) - Tạo và structure plan directories
- [Research](/vi/docs/engineer/skills/research) - Gather requirements cho planning

## Commands Liên Quan

- `/kanban` - Quick access tới dashboard server
- `/preview` - Xem individual plan files (dùng Markdown Novel Viewer)
