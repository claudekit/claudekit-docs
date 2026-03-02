---
lang: vi
title: "ck:plan"
description: "Tạo kế hoạch triển khai kỹ thuật chi tiết với nghiên cứu, thiết kế kiến trúc, và tài liệu giai đoạn toàn diện"
section: engineer
kit: engineer
category: skills
order: 3
published: true
---

Tạo kế hoạch triển khai có cấu trúc, được hỗ trợ bởi nghiên cứu trong thư mục `plans/` của bạn. Trước đây được chia thành `/ck:plan:fast`, `/ck:plan:hard`, và các lệnh khác — nay được hợp nhất thành một skill duy nhất.

## Chức Năng Của Skill Này

Lập kế hoạch tạo ra bản thiết kế dự án hoàn chỉnh: tổng quan `plan.md` cùng với các file `phase-XX-*.md` chứa các bước triển khai, quyền sở hữu file, tiêu chí thành công, và đánh giá rủi ro. Kế hoạch được lưu trữ xuyên suốt các phiên làm việc và thúc đẩy quá trình khởi tạo tác vụ.

## Các Chế Độ Quy Trình

| Flag | Chế Độ | Nghiên Cứu | Red Team | Xác Nhận | Cook Flag |
|------|---------|------------|----------|-----------|-----------|
| `--auto` | Tự phát hiện | Theo chế độ | Theo chế độ | Theo chế độ | `--auto` |
| `--fast` | Nhanh | Bỏ qua | Bỏ qua | Bỏ qua | `--auto` |
| `--hard` | Khó | 2 nhà nghiên cứu | Có | Tùy chọn | (không) |
| `--parallel` | Song song | 2 nhà nghiên cứu | Có | Tùy chọn | `--parallel` |
| `--two` | Hai hướng tiếp cận | 2+ nhà nghiên cứu | Sau khi chọn | Sau khi chọn | (không) |

Thêm `--no-tasks` vào bất kỳ chế độ nào để bỏ qua khởi tạo tác vụ sau khi tạo kế hoạch.

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
Kiểm Tra Trước Khi Tạo → Phát Hiện Chế Độ → Giai Đoạn Nghiên Cứu
→ Phân Tích Codebase → Tài Liệu Kế Hoạch → Review Red Team
→ Xác Nhận → Khởi Tạo Tác Vụ → Nhắc Nhở Ngữ Cảnh
```

1. **Kiểm Tra Trước Khi Tạo** — quét kế hoạch hiện có để tránh trùng lặp
2. **Phát Hiện Chế Độ** — diễn giải flags hoặc tự chọn dựa trên độ phức tạp tác vụ
3. **Giai Đoạn Nghiên Cứu** — khởi động các nhà nghiên cứu song song (chế độ hard/parallel/two)
4. **Phân Tích Codebase** — tìm kiếm các file, pattern, dependency liên quan
5. **Tài Liệu Kế Hoạch** — viết plan.md + các file giai đoạn
6. **Review Red Team** — phê bình đối nghịch về kế hoạch (hard/parallel)
7. **Xác Nhận** — xác nhận kế hoạch có thể triển khai
8. **Khởi Tạo Tác Vụ** — tạo tác vụ theo phiên từ các mục todo trong giai đoạn
9. **Nhắc Nhở Ngữ Cảnh** — nhắc nhở kế hoạch đang hoạt động cho các công cụ downstream

## Cấu Trúc Output Kế Hoạch

```
plans/
└── YYMMDD-HHMM-<slug>/
    ├── plan.md              # Tổng quan, các giai đoạn, trạng thái
    ├── phase-01-setup.md    # Cài đặt / môi trường
    ├── phase-02-*.md        # Các giai đoạn triển khai
    └── reports/
        └── researcher-*.md  # Kết quả nghiên cứu
```

Mỗi file giai đoạn chứa: tổng quan, yêu cầu, kiến trúc, quyền sở hữu file, các bước triển khai, danh sách todo, tiêu chí thành công, đánh giá rủi ro.

## Khởi Tạo Tác Vụ

Tác vụ có tính tạm thời (theo phạm vi phiên). File kế hoạch là liên tục. Khởi tạo kết nối chúng:

1. Đọc các mục `[ ]` từ file giai đoạn
2. `TaskCreate` cho mỗi mục chưa được đánh dấu
3. Tiến hành qua `TaskUpdate`
4. Khi hoàn thành: đánh dấu `[x]` trong file kế hoạch
5. Phiên tiếp theo: khởi tạo lại các mục `[ ]` còn lại

Dùng `--no-tasks` khi bạn chỉ muốn kế hoạch (ví dụ: để review trước khi thực thi).

## Trạng Thái Kế Hoạch Đang Hoạt Động

Hook theo dõi kế hoạch đang hoạt động hiện tại. Các skill downstream (cook, project-management, research) tự động ghi báo cáo vào thư mục của kế hoạch đang hoạt động. Chuyển đổi kế hoạch sẽ cập nhật ngữ cảnh hook.

## Tiêu Chuẩn Chất Lượng

Kế hoạch tuân theo YAGNI, KISS, DRY. Trung thực và thẳng thắn — không có suy nghĩ viển vông về độ phức tạp hay thời gian. File giai đoạn ngắn gọn tốt hơn file đầy đủ. Mỗi giai đoạn phải có thể thực thi độc lập.

## Skill Liên Quan

- [Cook](/vi/docs/engineer/skills/tools/cook) — thực thi các kế hoạch được tạo bởi skill này
- [Bootstrap](/vi/docs/engineer/skills/tools/bootstrap) — scaffold toàn diện ủy quyền cho plan + cook
- [Agent Teams](/vi/docs/engineer/skills/tools/team) — nhóm thực thi song song sử dụng file giai đoạn
