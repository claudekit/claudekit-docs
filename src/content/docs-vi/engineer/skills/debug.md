---
title: "ck:debug"
description: "Debug có hệ thống với phân tích root cause, validation defense-in-depth và các protocols xác minh"
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# `ck:debug`

Framework debugging toàn diện kết hợp điều tra có hệ thống, root cause tracing và multi-layer validation. Không có fixes mà không hiểu root cause trước.

## Nguyên Tắc Cốt Lõi

**KHÔNG CÓ FIXES MÀ KHÔNG CÓ ĐIỀU TRA ROOT CAUSE TRƯỚC**

Fixes ngẫu nhiên lãng phí thời gian và tạo ra bugs mới. Tìm root cause, fix tại nguồn, validate ở mọi layer, xác minh trước khi tuyên bố thành công.

## Khi Nào Dùng

**Luôn dùng cho**: Test failures, bugs, hành vi không mong đợi, performance issues, build failures, integration problems, trước khi tuyên bố công việc hoàn thành

**Đặc biệt khi**: Dưới áp lực thời gian, "quick fix" có vẻ rõ ràng, đã thử nhiều fixes, không hiểu đầy đủ vấn đề, sắp tuyên bố thành công

## Bốn Kỹ Thuật

### 1. Systematic Debugging

Framework bốn giai đoạn đảm bảo điều tra đúng đắn:
- **Phase 1**: Root Cause Investigation (đọc errors, reproduce, kiểm tra changes, thu thập bằng chứng)
- **Phase 2**: Pattern Analysis (tìm working examples, so sánh, xác định differences)
- **Phase 3**: Hypothesis and Testing (đưa ra lý thuyết, test tối thiểu, xác minh)
- **Phase 4**: Implementation (tạo test, fix một lần, xác minh)

**Quy tắc chính**: Hoàn thành mỗi phase trước khi tiếp tục. Không có fixes mà không có Phase 1.

### 2. Root Cause Tracing

Trace bugs ngược qua call stack để tìm trigger gốc. Khi error xuất hiện sâu trong execution, trace ngược từng cấp cho đến khi tìm nguồn nơi invalid data bắt nguồn. Fix tại nguồn, không phải tại triệu chứng.

Bao gồm `scripts/find-polluter.sh` để bisect test pollution.

### 3. Defense-in-Depth

Validate ở mọi layer data đi qua. Làm cho bugs không thể xảy ra.

**Bốn layers**: Entry validation → Business logic → Environment guards → Debug instrumentation

### 4. Verification

Chạy verification commands và xác nhận output trước khi tuyên bố thành công.

**Nguyên Tắc Sắt Đá**: KHÔNG CÓ TUYÊN BỐ HOÀN THÀNH MÀ KHÔNG CÓ BẰNG CHỨNG XÁC MINH MỚI

Chạy lệnh. Đọc output. Rồi mới tuyên bố kết quả.

## Sử Dụng

Kích hoạt tự động cho bất kỳ tác vụ debugging nào. Skill này hướng dẫn quy trình debugging từ điều tra đến fix đã được xác minh.

## Câu Lệnh Mẫu

- "Tests đang thất bại trong authentication module"
- "Users báo ứng dụng crash khi đăng nhập"
- "Hiệu năng giảm sau deployment gần đây"
- "Build thất bại với error message khó hiểu"
- "Integration tests pass locally nhưng thất bại trong CI"

## Quick Reference

```
Bug → Systematic Debugging (Phase 1-4)
  Error sâu trong stack? → Root Cause Tracing (trace ngược)
  Đã tìm root cause? → Defense-in-Depth (thêm layers)
  Sắp tuyên bố thành công? → Verification (xác minh trước)
```

## Red Flags

Dừng lại và tuân theo quy trình nếu đang nghĩ:
- "Quick fix trước, điều tra sau"
- "Cứ thử đổi X xem có work không"
- "Chắc là X, để tôi fix cái đó"
- "Nên work rồi" / "Có vẻ đã fixed"
- "Tests pass, xong rồi"

**Tất cả đều có nghĩa**: Quay lại quy trình có hệ thống.

## Các Skills Liên Quan

- [Fix](/vi/docs/engineer/skills/fix) - Workflow fix bug hoàn chỉnh với intelligent routing
- [Context Engineering](/vi/docs/engineer/skills/context-engineering) - Cho debugging phức tạp đòi hỏi context optimization
