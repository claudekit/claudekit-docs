---
title: "/dashboard"
description: "Khởi chạy ứng dụng web Marketing Dashboard để quản lý chiến dịch trực quan, thư viện nội dung và quy trình làm việc tự động hóa"
section: marketing
category: commands
order: 22
published: true
---

> Giao diện trực quan cho các hoạt động tiếp thị

## Khởi động nhanh

```bash
/dashboard
```

**Điều gì xảy ra**:
1. Bắt đầu Vue 3 frontend (cổng 5173)
2. Bắt đầu Hono API backend (cổng 3457)
3. Khởi tạo cơ sở dữ liệu SQLite
4. Mở trình duyệt để bảng điều khiển

**URL**:
- Frontend: http://localhost:5173
- API: http://localhost:3457
- Health: http://localhost:3457/health

## Cú pháp

```bash
/dashboard [mode]
```

### Chế độ

| Chế độ | Mô tả | Trường hợp sử dụng |
|------|-------|----------|
| `dev` | Phát triển với HMR | Mặc định, phát triển tích cực |
| `build` | Xây dựng cho sản xuất | Tạo bó được tối ưu hóa |
| `prod` | Chế độ sản xuất | Phục vụ bó sản xuất |
| `stop` | Dừng máy chủ | Làm sạch |

## Tính năng bảng điều khiển

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
Công thức tự động hóa được xây dựng sẵn:
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

## Ví dụ

### Bắt đầu phát triển
```bash
/dashboard dev
# or just
/dashboard
```

**Kết quả**:
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

### Xây dựng cho sản xuất
```bash
/dashboard build
```

**Kết quả**:
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

### Chế độ sản xuất
```bash
/dashboard prod
```

**Kết quả**:
```markdown
Starting production server...

✓ Serving built app from app/dist/
✓ API server running (port 3457)

Production ready!
→ Application: http://localhost:3457
→ Health check: http://localhost:3457/health
```

### Dừng máy chủ
```bash
/dashboard stop
```

**Kết quả**:
```markdown
Stopping servers...

✓ Frontend stopped (port 5173)
✓ API stopped (port 3457)

Dashboard stopped.
```

## Thiết lập khóa API

Bắt buộc cho các tính năng AI:

**Qua bảng điều khiển**:
1. Mở http://localhost:5173
2. Đi tới Cài đặt
3. Nhập khóa API Claude
4. Lưu vào sessionStorage

**Qua môi trường**:
```bash
export CLAUDE_API_KEY=your-key-here
/dashboard
```

## Lưu trữ dữ liệu

Tất cả dữ liệu được lưu trữ cục bộ:
- Cơ sở dữ liệu: `server/marketing.db` (SQLite)
- Tài sản: `assets/` directory
- Cấu hình: `.env` file

**Sao lưu**:
```bash
cp server/marketing.db server/marketing.db.backup
```

## Tích hợp quy trình làm việc

### Quản lý chiến dịch trực quan
```bash
# Start dashboard
/dashboard

# Create campaigns visually
# Manage content in UI
# Run automation recipes
```

### Lệnh + Bảng điều khiển Combo
```bash
# Create via command
/campaign create "Q1 Launch"

# View in dashboard
/dashboard
# See new campaign in Kanban board

# Analyze in dashboard
# Export reports
```

## Hiệu suất

- **Cold start**: 3-5 seconds
- **HMR updates**: <100ms
- **API response**: <50ms avg
- **Bundle size**: 56 KB gzipped

## Yêu cầu

- Node.js 18+
- NPM dependencies (auto-installs)
- 100 MB disk space
- Modern browser (Chrome, Firefox, Safari, Edge)

## Khắc phục sự cố

### Xung đột cổng
```bash
# Change ports in server/index.js and app/vite.config.ts
# Or stop conflicting services
```

### Cơ sở dữ liệu bị khóa
```bash
/dashboard stop
rm server/marketing.db.lock
/dashboard
```

### Vấn đề khóa API
```bash
# Check key in Settings page
# Or set environment variable
export CLAUDE_API_KEY=sk-ant-...
```

## Lệnh liên quan

- [/campaign](/vi/docs/marketing/commands/campaign) - Tạo chiến dịch (CLI)
- [/content](/vi/docs/marketing/commands/content) - Tạo nội dung (CLI)
- [/analyze](/vi/docs/marketing/commands/analyze) - Xem phân tích (CLI + dashboard)

## Tệp liên quan

- Kỹ năng: `.claude/skills/marketing-dashboard/`
- Kịch bản: `start.sh`, `build.sh`, `stop.sh`
- Máy chủ: `server/index.js`
- Frontend: `app/src/`

---

**Quản lý trực quan.** Chiến dịch, nội dung và tự động hóa trong một giao diện.
