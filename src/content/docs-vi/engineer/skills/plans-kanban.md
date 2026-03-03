---
title: "ck:plans-kanban"
description: Server dashboard trực quan để xem các thư mục plan với theo dõi tiến độ, trực quan hóa timeline, trạng thái phase và activity heatmap
section: engineer
kit: engineer
category: skills
order: 50
published: true
lang: vi
---

# Plans Kanban Dashboard

> Chuyển đổi các thư mục plan thành dashboards trực quan với theo dõi tiến độ, Gantt timelines và chỉ số trạng thái phase.

## Skill Này Làm Gì

Plans Kanban Dashboard là một HTTP server nền tảng render các dashboards trực quan tương tác cho các thư mục plan. Nó tự động phân tích các file `plan.md` và tài liệu phase để hiển thị progress bars, phân tích phase, trực quan hóa timeline và activity heatmaps.

Skill này cần thiết để theo dõi các kế hoạch implementation nhiều phase, theo dõi tiến độ trên các nỗ lực phát triển song song, và trực quan hóa project timelines. Giao diện glassmorphism với dark mode cung cấp interface hiện đại, dễ đọc có thể truy cập từ bất kỳ trình duyệt nào.

## Yêu Cầu Trước

**Cần Cài Đặt**:
```bash
# Tùy chọn 1: Cài đặt qua ClaudeKit CLI (khuyến nghị)
ck init  # Chạy install.sh xử lý tất cả skills

# Tùy chọn 2: Cài đặt thủ công
cd .claude/skills/plans-kanban
npm install
```

**Dependencies**: `gray-matter` (cài đặt qua npm)

**Không cài đặt**: Bạn sẽ gặp **Lỗi 500** khi xem chi tiết plan.

## Kích Hoạt

Skill này tự động kích hoạt khi:
- Người dùng đề cập đến xem plans, kanban dashboard, hoặc theo dõi tiến độ
- Người dùng tham chiếu đến thư mục plan hoặc quản lý phase
- Người dùng muốn timeline trực quan hoặc Gantt chart

Kích hoạt thủ công:
```bash
/ck:kanban [thư-mục-plans]
```

## Bắt Đầu Nhanh

```bash
# Xem plans dashboard
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --open

# Truy cập từ xa (có thể truy cập từ mạng)
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --host 0.0.0.0 \
  --open

# Chế độ nền (giữ terminal trống)
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --background

# Dừng tất cả server đang chạy
node .claude/skills/plans-kanban/scripts/server.cjs --stop
```

## Tính Năng

### Chế Độ Dashboard

Các thẻ plan hiển thị:
- **Progress bars**: Phần trăm trực quan của các phases đã hoàn thành
- **Phân tích phase**: Số lượng phases đã hoàn thành, đang tiến hành và chờ
- **Lần sửa đổi cuối**: Timestamp của lần cập nhật gần nhất
- **Liên kết issue**: Tham chiếu GitHub issue (nếu có)
- **Liên kết branch**: Tham chiếu Git branch (nếu có)
- **Chỉ số ưu tiên**: Huy hiệu ưu tiên cao/trung bình/thấp

### Trực Quan Hóa Timeline

Timeline kiểu Gantt hiển thị:
- Thời gian plan từ bắt đầu đến hoàn thành ước tính
- Các plans chồng lên nhau để lên kế hoạch tài nguyên
- Activity heatmap làm nổi bật các giai đoạn bận rộn
- Các cột mốc phase và deadline

### Thiết Kế

- **Giao diện Glassmorphism**: Hiệu ứng kính mờ với backdrop blur
- **Dark mode**: Màu điểm nhấn ấm tối ưu cho xem ban đêm
- **Lưới responsive**: Thích nghi theo kích thước màn hình (desktop, tablet, mobile)
- **Điểm nhấn ấm**: Màu Amber và cam cho hệ thống phân cấp trực quan

## Tùy Chọn CLI

| Tùy chọn | Mô tả | Mặc định |
|----------|-------|---------|
| `--dir <path>` | Thư mục plans để quét | Bắt buộc |
| `--port <number>` | Port server | 3500 |
| `--host <addr>` | Host để bind (`0.0.0.0` cho remote) | localhost |
| `--open` | Tự động mở trình duyệt | false |
| `--background` | Chạy ở nền | false |
| `--stop` | Dừng tất cả server | - |

## Kiến Trúc

```
scripts/
├── server.cjs               # Điểm vào chính
└── lib/
    ├── port-finder.cjs      # Phân bổ port (3500-3550)
    ├── process-mgr.cjs      # Quản lý PID (/tmp)
    ├── http-server.cjs      # HTTP routing
    ├── plan-parser.cjs      # Phân tích Plan.md
    ├── plan-scanner.cjs     # Quét thư mục
    ├── plan-metadata-extractor.cjs  # Trích xuất metadata phong phú
    └── dashboard-renderer.cjs       # Tạo HTML

assets/
├── dashboard-template.html  # Template HTML dashboard
├── dashboard.css           # Styles glassmorphism
└── dashboard.js            # Tương tác client
```

## HTTP Routes

| Route | Mô tả |
|-------|-------|
| `/` hoặc `/ck:kanban` | Chế độ dashboard cho thư mục mặc định |
| `/ck:kanban?dir=<path>` | Dashboard cho thư mục cụ thể |
| `/api/plans` | JSON API cho dữ liệu plans |
| `/api/plans?dir=<path>` | JSON API cho thư mục cụ thể |
| `/assets/*` | Static assets (CSS, JS) |
| `/file/*` | Phục vụ file cục bộ (cho hình ảnh, v.v.) |

## Cấu Trúc Thư Mục Plan

Dashboard quét các thư mục chứa file `plan.md`:

```
plans/
├── 251215-feature-a/
│   ├── plan.md              # Bắt buộc - được phân tích để lấy metadata và phases
│   ├── phase-01-setup.md
│   ├── phase-02-impl.md
│   └── phase-03-test.md
├── 251214-feature-b/
│   ├── plan.md
│   └── phase-01-research.md
└── templates/               # Được loại trừ mặc định (không có plan.md)
```

**Bắt buộc**: Mỗi thư mục plan phải chứa `plan.md` với frontmatter:

```yaml
---
title: "ck:plans-kanban"
status: in-progress
priority: high
issue: https://github.com/org/repo/issues/123
branch: feature/feature-a
created: 2025-12-15
---
```

## Truy Cập Từ Xa

Để truy cập mạng từ các thiết bị khác:

```bash
# Bind tất cả interfaces
node .claude/skills/plans-kanban/scripts/server.cjs \
  --dir ./plans \
  --host 0.0.0.0 \
  --port 3500
```

Đầu ra server bao gồm cả URL cục bộ và mạng:

```json
{
  "success": true,
  "url": "http://localhost:3500/kanban?dir=...",
  "networkUrl": "http://192.168.2.75:3500/kanban?dir=...",
  "port": 3500
}
```

**Dùng networkUrl để truy cập từ điện thoại, máy tính bảng hoặc máy tính khác trên cùng mạng.**

## Khả Năng

### Theo Dõi Tiến Độ

Dashboard tự động tính phần trăm hoàn thành:

```markdown
# plan.md

## Phase 1: Thiết lập [completed]
## Phase 2: Implementation [in-progress]
## Phase 3: Kiểm thử [pending]

Progress: 33% (1/3 completed)
```

**Khi nào dùng**: Theo dõi dự án nhiều phase, theo dõi nhóm song song, trực quan hóa tiến độ sprint.

### Trực Quan Hóa Timeline

Gantt chart hiển thị:
- Ngày bắt đầu và kết thúc plan
- Các plans chồng lên nhau (xung đột tài nguyên)
- Làm nổi bật critical path
- Các cột mốc

**Khi nào dùng**: Lên kế hoạch sức chứa, theo dõi deadline, phân bổ tài nguyên.

### Tích Hợp JSON API

Truy cập dữ liệu plan theo chương trình:

```bash
curl http://localhost:3500/api/plans | jq '.plans[] | {title, status, progress}'
```

**Khi nào dùng**: Tích hợp CI/CD, dashboards báo cáo, scripts tự động hóa.

## Ví Dụ

### Ví Dụ 1: Theo Dõi Sprint Phát Triển

```bash
# Khởi động dashboard cho sprint plans
/ck:kanban plans/sprints/

# Truy cập từ điện thoại để kiểm tra tiến độ trong standup
# Dùng networkUrl: http://192.168.1.100:3500/kanban?dir=plans/sprints
```

### Ví Dụ 2: Theo Dõi Phát Triển Feature Song Song

```
plans/
├── feature-auth/
│   ├── plan.md [in-progress, hoàn thành 60%]
│   ├── phase-01-design.md [completed]
│   └── phase-02-impl.md [in-progress]
├── feature-api/
│   ├── plan.md [in-progress, hoàn thành 80%]
│   └── phase-01-endpoints.md [completed]
└── feature-ui/
    └── plan.md [pending, hoàn thành 0%]
```

Dashboard hiển thị cả ba features cạnh nhau với progress bars và timeline overlap.

## Thực Hành Tốt Nhất

**Dùng đặt tên phase nhất quán**: `phase-01-name.md`, `phase-02-name.md` để tự động sắp xếp.

**Cập nhật frontmatter plan.md**: Giữ status, priority và dates hiện tại để dashboards chính xác.

**Bao gồm liên kết issue/branch**: Dashboard tự động liên kết đến GitHub để điều hướng nhanh.

**Chạy ở chế độ nền**: Giải phóng terminal trong khi giữ dashboard có thể truy cập.

**Dùng truy cập mạng cho nhóm**: Chia sẻ networkUrl để nhóm có thể xem trong standups.

**Kiểm tra /api/plans để tự động hóa**: Tích hợp với CI/CD hoặc công cụ báo cáo.

## Xử Lý Sự Cố

**Vấn đề**: Port 3500 đã được sử dụng.

**Giải pháp**: Server tự động tăng lên port tiếp theo có sẵn (3500-3550). Kiểm tra đầu ra terminal để biết port thực tế.

---

**Vấn đề**: Không tìm thấy plans trong thư mục.

**Giải pháp**: Đảm bảo mỗi thư mục plan chứa file `plan.md`. Kiểm tra đường dẫn thư mục là đúng.

---

**Vấn đề**: Không thể truy cập từ thiết bị khác.

**Giải pháp**: Dùng `--host 0.0.0.0` để bind tất cả interfaces mạng. Kiểm tra firewall cho phép port 3500.

---

**Vấn đề**: Server không dừng với `--stop`.

**Giải pháp**: Kiểm tra `/tmp/plans-kanban-*.pid` cho các file PID cũ. Kill thủ công process hoặc xóa file PID.

---

**Vấn đề**: Tiến độ hiển thị 0% nhưng các phases được đánh dấu completed.

**Giải pháp**: Xác minh các file markdown phase có chỉ số trạng thái trong headers: `## Phase 1: Name [completed]`

## Skills Liên Quan

- [Markdown Novel Viewer](/vi/docs/engineer/skills/markdown-novel-viewer) - Đọc các file plan riêng lẻ với định dạng phong phú
- [Planning](/vi/docs/engineer/skills/plan) - Tạo và cấu trúc các thư mục plan
- [Research](/vi/docs/engineer/skills/research) - Thu thập yêu cầu để lên kế hoạch

## Lệnh Liên Quan

- `/ck:kanban` - Truy cập nhanh vào dashboard server
- `/ck:preview` - Xem các file plan riêng lẻ (dùng Markdown Novel Viewer)
