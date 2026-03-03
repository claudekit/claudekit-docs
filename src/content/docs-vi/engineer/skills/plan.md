---
title: "ck:plan"
description: "Tạo các kế hoạch triển khai kỹ thuật chi tiết với nghiên cứu, thiết kế kiến trúc và tài liệu phase toàn diện"
section: engineer
kit: engineer
category: skills
order: 3
published: true
lang: vi
---

# Plan

Tạo các bản thiết kế implementation có cấu trúc, dựa trên nghiên cứu trong thư mục `plans/`. Trước đây được chia thành `/ck:plan --fast`, `/ck:plan --hard` và các lệnh khác — nay được hợp nhất thành một skill duy nhất.

## Skill Này Làm Gì

Planning tạo ra các bản thiết kế dự án hoàn chỉnh: tổng quan `plan.md` cộng với các file `phase-XX-*.md` với các bước implementation, quyền sở hữu file, tiêu chí thành công và đánh giá rủi ro. Plans được lưu trữ qua các phiên và thúc đẩy việc hydrate task.

## Chế Độ Quy Trình

| Flag | Chế độ | Nghiên cứu | Red Team | Xác nhận | Cook Flag |
|------|--------|-----------|---------|---------|-----------|
| `--auto` | Tự động phát hiện | Theo chế độ | Theo chế độ | Theo chế độ | `--auto` |
| `--fast` | Nhanh | Bỏ qua | Bỏ qua | Bỏ qua | `--auto` |
| `--hard` | Khó | 2 researchers | Có | Tùy chọn | (không có) |
| `--parallel` | Song song | 2 researchers | Có | Tùy chọn | `--parallel` |
| `--two` | Hai cách tiếp cận | 2+ researchers | Sau chọn | Sau chọn | (không có) |

Thêm `--no-tasks` vào bất kỳ chế độ nào để bỏ qua việc hydrate task sau khi tạo plan.

## Cách Dùng

```
/ck:plan <yêu cầu> [flags]
```

**Ví dụ:**
- `/ck:plan "add Stripe subscription billing" --fast`
- `/ck:plan "migrate from REST to GraphQL" --hard`
- `/ck:plan "implement real-time notifications + presence" --parallel`
- `/ck:plan "redesign auth system" --two`
- `/ck:plan "scaffold new microservice" --auto --no-tasks`

## Quy Trình Làm Việc

```
Kiểm Tra Trước → Phát Hiện Chế Độ → Giai Đoạn Nghiên Cứu
→ Phân Tích Codebase → Tài Liệu Plan → Red Team Review
→ Xác Nhận → Hydrate Tasks → Nhắc Nhở Ngữ Cảnh
```

1. **Kiểm Tra Trước** — quét các plans hiện có để tránh trùng lặp
2. **Phát Hiện Chế Độ** — giải thích flags hoặc tự động chọn dựa trên độ phức tạp nhiệm vụ
3. **Giai Đoạn Nghiên Cứu** — tạo parallel researchers (chế độ hard/parallel/two)
4. **Phân Tích Codebase** — tìm kiếm files, patterns, dependencies liên quan
5. **Tài Liệu Plan** — viết plan.md + phase files
6. **Red Team Review** — phê bình đối nghịch về plan (hard/parallel)
7. **Xác Nhận** — xác nhận plan có thể thực hiện được
8. **Hydrate Tasks** — tạo tasks phiên từ các todo items trong phase files
9. **Nhắc Nhở Ngữ Cảnh** — nhắc nhở active plan cho các công cụ phía sau

## Cấu Trúc Đầu Ra Plan

```
plans/
└── YYMMDD-HHMM-<slug>/
    ├── plan.md              # Tổng quan, phases, trạng thái
    ├── phase-01-setup.md    # Thiết lập / môi trường
    ├── phase-02-*.md        # Các phase implementation
    └── reports/
        └── researcher-*.md  # Kết quả nghiên cứu
```

Mỗi phase file chứa: tổng quan, yêu cầu, kiến trúc, quyền sở hữu file, các bước implementation, danh sách todo, tiêu chí thành công, đánh giá rủi ro.

## Hydrate Tasks

Tasks là tạm thời (phạm vi phiên). Plan files là persistent. Việc hydrate kết nối chúng:

1. Đọc các mục `[ ]` từ phase files
2. `TaskCreate` cho mỗi mục chưa được đánh dấu
3. Công việc tiến hành qua `TaskUpdate`
4. Khi hoàn thành: đánh dấu `[ ]` → `[x]` trong plan file
5. Phiên tiếp theo: re-hydrate các mục `[ ]` còn lại → tiếp tục

Dùng `--no-tasks` khi bạn chỉ muốn plan (ví dụ: để review trước khi thực thi).

## Trạng Thái Plan Đang Hoạt Động

Hooks theo dõi active plan hiện tại. Các skills phía sau (cook, project-management, research) tự động viết báo cáo vào thư mục của active plan. Chuyển plans cập nhật ngữ cảnh hook.

## Tiêu Chuẩn Chất Lượng

Plans tuân theo YAGNI, KISS, DRY. Trung thực và thực tế — không có ảo tưởng về độ phức tạp hoặc timeline. Phase files ngắn gọn tốt hơn là quá chi tiết. Mỗi phase phải có thể thực thi độc lập.

## Skills Liên Quan

- [Cook](/vi/docs/engineer/skills/cook) — thực thi các plans được tạo bởi skill này
- [Bootstrap](/vi/docs/engineer/skills/bootstrap) — scaffold đầu cuối đến đầu cuối ủy quyền cho plan + cook
- [Agent Teams](/vi/docs/engineer/skills/team) — nhóm thực thi song song sử dụng phase files
