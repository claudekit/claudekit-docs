---
lang: vi
title: "ck:project-management"
description: "Theo dõi tiến độ, quản lý tác vụ, phối hợp cập nhật tài liệu, và kết nối các phiên với file kế hoạch liên tục"
section: engineer
kit: engineer
category: skills
order: 50
published: true
---

Quản lý dự án sử dụng hệ thống tác vụ native của Claude với file kế hoạch liên tục. Kết nối các phiên, theo dõi tiến độ, phối hợp cập nhật tài liệu, và tạo báo cáo trạng thái.

## Chức Năng Của Skill Này

Quản Lý Dự Án kết nối các tác vụ phiên tạm thời với file kế hoạch liên tục. Tác vụ biến mất khi phiên kết thúc — file kế hoạch thì không. Skill này duy trì tính liên tục bằng cách khởi tạo tác vụ từ file kế hoạch khi bắt đầu phiên và đồng bộ trạng thái trở lại khi hoàn thành.

## Khả Năng Cốt Lõi

### Các Thao Tác Tác Vụ

| Thao Tác | Khi Nào |
|----------|---------|
| `TaskCreate` | Khởi tạo từ các mục `[ ]` trong kế hoạch, thêm công việc được phát hiện |
| `TaskUpdate` | Đánh dấu in_progress khi bắt đầu, completed khi kết thúc |
| `TaskGet` | Đọc chi tiết tác vụ đầy đủ trước khi bắt đầu |
| `TaskList` | Khảo sát công việc có sẵn / bị chặn |

### Kết Nối Phiên

Pattern khởi tạo giữ kế hoạch và tác vụ đồng bộ:

```
Bắt Đầu Phiên:
  Đọc file kế hoạch → tìm mục [ ] → TaskCreate cho từng mục

Trong Quá Trình Làm Việc:
  TaskUpdate(in_progress) → thực hiện công việc → TaskUpdate(completed)

Đồng Bộ Lại:
  Đánh dấu [ ] → [x] trong file kế hoạch, cập nhật trạng thái YAML frontmatter

Phiên Tiếp Theo:
  Khởi tạo lại các mục [ ] còn lại → tiếp tục
```

### Theo Dõi Tiến Độ

Quét thư mục kế hoạch đang hoạt động, tính toán:
- Giai đoạn hoàn thành vs. tổng số
- Tác vụ hoàn thành vs. đang thực hiện vs. bị chặn
- Ước tính nỗ lực còn lại (từ frontmatter giai đoạn)
- Các điểm chặn và phụ thuộc

### Phối Hợp Tài Liệu

Sau các mốc triển khai, kích hoạt docs-manager để:
- Cập nhật các file trong thư mục `./docs/`
- Đánh giá tác động đến claudekit-docs
- Tạo hoặc cập nhật các trang tài liệu liên quan

### Báo Cáo Trạng Thái

Tạo `plans/reports/project-status-YYMMDD.md` với:
- Phần trăm hoàn thành của từng giai đoạn
- Các điểm chặn đang hoạt động
- Các hoàn thành gần đây
- Các ưu tiên tiếp theo

## YAML Frontmatter Của Kế Hoạch

Các file giai đoạn hỗ trợ metadata có cấu trúc để theo dõi:

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
Quét Kế Hoạch → Khởi Tạo Tác Vụ → Theo Dõi Tiến Độ
→ Cập Nhật Trạng Thái → Tạo Báo Cáo → Kích Hoạt Cập Nhật Tài Liệu
```

1. **Quét Kế Hoạch** — tìm các thư mục `plans/` đang hoạt động với giai đoạn chưa hoàn thành
2. **Khởi Tạo Tác Vụ** — tạo tác vụ phiên từ các mục `[ ]` trong file giai đoạn
3. **Theo Dõi Tiến Độ** — theo dõi thay đổi trạng thái tác vụ trong phiên
4. **Cập Nhật Trạng Thái** — đồng bộ tác vụ đã hoàn thành trở lại file kế hoạch (`[x]`)
5. **Tạo Báo Cáo** — viết báo cáo trạng thái với số liệu
6. **Kích Hoạt Cập Nhật Tài Liệu** — phối hợp với docs-manager nếu đạt mốc

## Ví Dụ Lệnh

- "Trạng thái hiện tại của kế hoạch đang hoạt động là gì?"
- "Khởi tạo tác vụ từ kế hoạch xác thực và bắt đầu theo dõi"
- "Tạo báo cáo trạng thái dự án"
- "Đánh dấu giai đoạn database hoàn thành và cập nhật kế hoạch"
- "Điều gì đang bị chặn trong sprint hiện tại?"

## Skill Liên Quan

- [Lập Kế Hoạch](/vi/docs/engineer/skills/tools/plan) — tạo các file kế hoạch mà skill này theo dõi
- [Cook](/vi/docs/engineer/skills/tools/cook) — thực thi các giai đoạn được theo dõi bởi skill này
- [Plans Kanban](/vi/docs/engineer/skills/tools/kanban) — xem kanban trực quan về tiến độ kế hoạch
