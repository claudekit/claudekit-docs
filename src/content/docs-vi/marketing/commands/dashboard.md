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

### Trung Tâm Quản Lý Tài Sản

Phần Quản Lý Tài Sản cung cấp quyền truy cập tập trung vào tất cả tài sản marketing được tạo bởi lệnh ClaudeKit. Duyệt, xem trước và tổ chức báo cáo markdown, storyboard, slide, hình ảnh, video và tài liệu thương hiệu.

![Trung tâm Quản lý Tài sản](/docs/screenshots/assets-management.png)

**Danh Mục Tài Sản:**

**Hướng Dẫn Thương Hiệu**
- Tài liệu giọng văn thương hiệu
- Hướng dẫn phong cách và mẫu
- Bảng màu và typography
- Tài sản logo và quy tắc sử dụng

![Hướng dẫn Thương hiệu](/docs/screenshots/assets-branding-guideline.png)

**Storyboard (Sản Xuất Video)**
- Phân tích cảnh trực quan
- Lập kế hoạch từng shot
- Xem trước timeline
- Xuất sang sản xuất

![Xem trước Storyboard](/docs/screenshots/assets-storyboard-preview.png)

![Tùy chọn Storyboard](/docs/screenshots/assets-storyboard-options.png)

**Slide Bài Thuyết Trình**
- Pitch deck (.pptx)
- Đề xuất chiến dịch
- Demo sản phẩm
- Báo cáo hiệu suất

![Xem trước Slide](/docs/screenshots/assets-slides-preview.png)

**Infographic & Hình Ảnh**
- Đồ họa mạng xã hội
- Trực quan hóa dữ liệu
- Hình ảnh nổi bật blog
- Creative chiến dịch

![Xem trước Infographic](/docs/screenshots/assets-infographic-preview.png)

**Bài Đăng Mạng Xã Hội**
- Nội dung theo nền tảng
- Bài đăng đã lên lịch
- Chỉ số hiệu suất
- Theo dõi tương tác

![Xem trước Bài đăng Mạng xã hội](/docs/screenshots/assets-social-post-preview.png)

**Tính Năng Trung Tâm Tài Sản:**
- **Chế độ Xem Trước**: Xem markdown, hình ảnh, video inline
- **Hành Động Nhanh**: Tải xuống, chia sẻ, chỉnh sửa, nhân bản
- **Tìm Kiếm & Lọc**: Tìm tài sản theo loại, ngày, chiến dịch, thẻ
- **Thao Tác Hàng Loạt**: Xuất, lưu trữ, xóa nhiều tài sản
- **Lịch Sử Phiên Bản**: Theo dõi thay đổi và khôi phục phiên bản trước
- **Bộ Sưu Tập**: Tổ chức tài sản vào thư mục tùy chỉnh

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
