---
lang: vi
title: "ckm:plans-kanban"
description: "Dashboard kế hoạch với theo dõi tiến độ, timeline trực quan và quản lý milestone cho dự án."
section: marketing
kit: marketing
category: skills
order: 96
---

# Plans Kanban

> Quản lý kế hoạch dự án với dashboard trực quan, theo dõi tiến độ realtime và timeline kanban.

## Kỹ Năng Này Làm Gì

Skill `ckm:plans-kanban` tạo và duy trì dashboard kế hoạch dự án dạng kanban. Hiển thị tổng quan tiến độ, timeline milestone và trạng thái task theo từng phase. Tích hợp với hệ thống plans trong `./plans` directory.

## Bắt Đầu Nhanh

```
/ckm:plans-kanban
```

Hoặc chỉ định dự án:

```
/ckm:plans-kanban Tạo kanban dashboard cho kế hoạch triển khai Q1 marketing campaigns
```

## Tính Năng Chính

- **Kanban board**: Columns Todo → In Progress → Review → Done
- **Timeline view**: Gantt chart cho milestone và deadline
- **Progress tracking**: % hoàn thành theo phase và task
- **Priority tags**: Urgent, High, Medium, Low với màu sắc phân biệt
- **Dependency map**: Hiển thị phụ thuộc giữa các task

## Cấu Trúc Kanban

```markdown
## Kanban Board — Tên Dự Án

### Todo
- [ ] Task A (High) — Due: 2025-03-01
- [ ] Task B (Medium) — Blocked by: Task C

### In Progress
- [~] Task C (High) — 60% — @owner

### Review
- [~] Task D — Chờ phê duyệt

### Done
- [x] Task E — Hoàn thành 2025-02-15
```

## Ví Dụ Sử Dụng

**Xem trạng thái dự án:**
```
/ckm:plans-kanban Tóm tắt tiến độ hiện tại của tất cả plans đang active
```

**Cập nhật tiến độ:**
```
/ckm:plans-kanban Cập nhật Task authentication sang In Progress, 40% hoàn thành
```

**Tạo timeline:**
```
/ckm:plans-kanban Tạo Gantt chart cho 3 tháng tới với các milestone chính
```

## Liên Quan

- [ckm:kanban](/vi/docs/marketing/skills/kanban) - Quản lý task kanban cá nhân
- [ckm:plan](/vi/docs/marketing/skills/plan) - Tạo kế hoạch triển khai chi tiết
- [ckm:dashboard](/vi/docs/marketing/skills/dashboard) - Dashboard tổng hợp dữ liệu
