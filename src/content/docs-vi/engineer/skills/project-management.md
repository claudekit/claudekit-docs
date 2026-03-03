---
title: "ck:project-management"
description: "Theo dõi tiến độ, quản lý task, phối hợp cập nhật tài liệu và kết nối các phiên với các file plan persistent"
section: engineer
kit: engineer
category: skills
order: 50
published: true
lang: vi
---

Giám sát dự án sử dụng hệ thống task gốc của Claude với các file plan persistent. Kết nối các phiên, theo dõi tiến độ, phối hợp cập nhật tài liệu và tạo báo cáo trạng thái.

## Skill Này Làm Gì

Project Management kết nối các task phiên tạm thời với các file plan persistent. Tasks biến mất khi phiên kết thúc — plan files thì không. Skill này duy trì tính liên tục bằng cách hydrate tasks từ plan files khi bắt đầu phiên và đồng bộ trạng thái khi hoàn thành.

## Khả Năng Cốt Lõi

### Các Thao Tác Task

| Thao tác | Khi nào |
|---------|---------|
| `TaskCreate` | Hydrate từ các mục `[ ]` trong plan, thêm công việc được phát hiện |
| `TaskUpdate` | Đánh dấu in_progress khi bắt đầu, completed khi kết thúc |
| `TaskGet` | Đọc chi tiết task đầy đủ trước khi bắt đầu |
| `TaskList` | Khảo sát công việc có sẵn / bị chặn |

### Kết Nối Phiên

Pattern hydration giữ plans và tasks đồng bộ:

```
Bắt Đầu Phiên:
  Đọc plan files → tìm các mục [ ] → TaskCreate cho mỗi mục

Trong Khi Làm Việc:
  TaskUpdate(in_progress) → làm việc → TaskUpdate(completed)

Đồng Bộ Lại:
  Đánh dấu [ ] → [x] trong plan file, cập nhật trạng thái YAML frontmatter

Phiên Tiếp Theo:
  Re-hydrate các mục [ ] còn lại → tiếp tục
```

### Theo Dõi Tiến Độ

Quét thư mục plans đang hoạt động, tính toán:
- Phases hoàn thành vs tổng số
- Tasks đã hoàn thành vs đang tiến hành vs bị chặn
- Nỗ lực còn lại ước tính (từ phase frontmatter)
- Các blocker và dependencies

### Phối Hợp Tài Liệu

Sau các mốc implementation, kích hoạt docs-manager để:
- Cập nhật các file trong thư mục `./docs/`
- Đánh giá tác động claudekit-docs
- Tạo hoặc cập nhật các trang tài liệu liên quan

### Báo Cáo Trạng Thái

Tạo `plans/reports/project-status-YYMMDD.md` với:
- Phần trăm hoàn thành phase
- Các blocker đang hoạt động
- Các hoàn thành gần đây
- Các ưu tiên tiếp theo

## YAML Frontmatter Cho Plan

Phase files hỗ trợ metadata có cấu trúc để theo dõi:

```yaml
---
title: "ck:project-management"
status: in-progress   # pending | in-progress | completed
priority: P1
effort: medium
branch: feature-branch
tags: [auth, api]
created: 2026-02-05
---
```

## Quy Trình Làm Việc

```
Quét Plans → Hydrate Tasks → Theo Dõi Tiến Độ
→ Cập Nhật Trạng Thái → Tạo Báo Cáo → Kích Hoạt Cập Nhật Tài Liệu
```

1. **Quét Plans** — tìm các thư mục `plans/` đang hoạt động với phases chưa hoàn thành
2. **Hydrate Tasks** — tạo session tasks từ các mục `[ ]` trong phase files
3. **Theo Dõi Tiến Độ** — theo dõi thay đổi trạng thái task trong phiên
4. **Cập Nhật Trạng Thái** — đồng bộ tasks đã hoàn thành trở lại plan files (`[x]`)
5. **Tạo Báo Cáo** — viết báo cáo trạng thái với số liệu
6. **Kích Hoạt Cập Nhật Tài Liệu** — phối hợp với docs-manager nếu đạt mốc

## Prompt Mẫu

- "Trạng thái hiện tại của plan đang hoạt động là gì?"
- "Hydrate tasks từ authentication plan và bắt đầu theo dõi"
- "Tạo báo cáo trạng thái dự án"
- "Đánh dấu database phase hoàn thành và cập nhật plan"
- "Điều gì đang bị chặn trong sprint hiện tại?"

## Skills Liên Quan

- [Planning](/vi/docs/engineer/skills/plan) — tạo các file plan mà skill này theo dõi
- [Cook](/vi/docs/engineer/skills/cook) — thực thi các phases được theo dõi bởi skill này
- [Plans Kanban](/vi/docs/engineer/skills/plans-kanban) — chế độ xem kanban trực quan của tiến độ plan
