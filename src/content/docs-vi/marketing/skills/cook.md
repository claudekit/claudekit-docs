---
lang: vi
title: "ckm:cook"
description: "Triển khai tính năng end-to-end với định tuyến thông minh — từ planning đến testing và review tự động."
section: marketing
kit: marketing
category: skills
order: 113
---

# ckm:cook

> Triển khai tính năng hoàn chỉnh với pipeline tự động: plan → implement → test → review.

## Kỹ Năng Này Làm Gì

Skill `ckm:cook` là skill triển khai tính năng end-to-end thông minh. Tự động định tuyến qua các giai đoạn: tạo kế hoạch, triển khai code, chạy tests và code review. Điều phối nhiều subagents song song để hoàn thành công việc nhanh nhất có thể.

## Bắt Đầu Nhanh

```
/ckm:cook
```

Hoặc mô tả tính năng:

```
/ckm:cook Thêm tính năng export CSV cho bảng analytics dashboard
```

## Chế Độ Hoạt Động

### Chế Độ Tự Động (`--auto`)
```
/ckm:cook --auto Tính năng cần triển khai
```
Không hỏi xác nhận, chạy toàn bộ pipeline tự động.

### Chế Độ Tương Tác (mặc định)
Xác nhận ở các bước quan trọng trước khi tiếp tục.

## Pipeline Triển Khai

```
Input → Plan → Implement → Test → Review → Done
         ↓         ↓          ↓       ↓
      phase files  code    test pass  approval
```

1. **Plan**: Phân tích yêu cầu, tạo file kế hoạch trong `./plans`
2. **Implement**: Viết code theo kế hoạch, đảm bảo compile
3. **Test**: Chạy unit tests, integration tests
4. **Review**: Code review tự động với `code-reviewer` agent
5. **Done**: Báo cáo tổng kết và next steps

## Tính Năng Chính

- **Smart routing**: Tự động chọn agent phù hợp cho từng subtask
- **Parallel execution**: Nhiều subtasks chạy đồng thời khi không có dependency
- **Error recovery**: Tự động sửa lỗi phát sinh trong quá trình
- **Progress tracking**: Cập nhật tiến độ realtime
- **Rollback safety**: Không commit code chưa pass tests

## Ví Dụ Sử Dụng

**Tính năng đơn giản:**
```
/ckm:cook Thêm dark mode toggle vào navigation
```

**Feature phức tạp:**
```
/ckm:cook --auto Tích hợp Stripe subscription với customer portal và webhook handling
```

**Bug fix:**
```
/ckm:cook Fix: Memory leak trong WebSocket connection handler
```

## Liên Quan

- [ckm:fix](/vi/docs/marketing/skills/fix) - Sửa lỗi với routing thông minh
- [ckm:plan](/vi/docs/marketing/skills/plan) - Tạo kế hoạch chi tiết
- [ckm:brainstorm](/vi/docs/marketing/skills/brainstorm) - Khám phá phương án trước khi cook
