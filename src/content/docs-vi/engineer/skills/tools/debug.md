---
title: "Debug"
description: "Systematic debugging với root cause analysis, defense-in-depth validation và verification protocols"
section: engineer
kit: engineer
category: skills
order: 25
lang: vi
---

Comprehensive debugging framework kết hợp systematic investigation, root cause tracing và multi-layer validation. Không có fixes nào mà không hiểu root cause trước.

## Nguyên Tắc Cốt Lõi

**KHÔNG FIX MÀ KHÔNG ĐIỀU TRA ROOT CAUSE TRƯỚC**

Random fixes lãng phí thời gian và tạo bugs mới. Tìm root cause, fix tại nguồn, validate ở mỗi layer, verify trước khi claim success.

## Khi Nào Sử Dụng

**Luôn dùng cho**: Test failures, bugs, unexpected behavior, performance issues, build failures, integration problems, trước khi claim work complete

**Đặc biệt khi**: Dưới time pressure, "quick fix" có vẻ obvious, đã thử nhiều fixes, không fully hiểu issue, sắp claim success

## Bốn Techniques

### 1. Systematic Debugging

Four-phase framework đảm bảo proper investigation:
- **Phase 1**: Root Cause Investigation (đọc errors, reproduce, check changes, gather evidence)
- **Phase 2**: Pattern Analysis (tìm working examples, compare, identify differences)
- **Phase 3**: Hypothesis and Testing (form theory, test minimally, verify)
- **Phase 4**: Implementation (tạo test, fix once, verify)

**Key rule**: Hoàn thành mỗi phase trước khi proceed. Không fixes mà không có Phase 1.

### 2. Root Cause Tracing

Trace bugs backward qua call stack để tìm original trigger. Khi error xuất hiện deep trong execution, trace backward level-by-level cho đến khi tìm nguồn nơi invalid data originated. Fix tại source, không phải tại symptom.

Bao gồm `scripts/find-polluter.sh` để bisecting test pollution.

### 3. Defense-in-Depth

Validate ở mọi layer data passes qua. Làm bugs impossible.

**Bốn layers**: Entry validation → Business logic → Environment guards → Debug instrumentation

### 4. Verification

Chạy verification commands và confirm output trước khi claim success.

**Iron law**: KHÔNG COMPLETION CLAIMS MÀ KHÔNG CÓ FRESH VERIFICATION EVIDENCE

Chạy command. Đọc output. Sau đó claim result.

## Sử Dụng

Kích hoạt tự động cho bất kỳ debugging task nào. Skill này guide debugging process từ investigation đến verified fix.

## Câu Lệnh Mẫu

- "Tests đang failing trong authentication module"
- "Users báo cáo app crashes on login"
- "Performance degraded sau recent deployment"
- "Build fails với cryptic error message"
- "Integration tests pass locally nhưng fail trong CI"

## Quick Reference

```
Bug → Systematic Debugging (Phase 1-4)
  Error deep trong stack? → Root Cause Tracing (trace backward)
  Tìm thấy root cause? → Defense-in-Depth (add layers)
  Sắp claim success? → Verification (verify trước)
```

## Red Flags

Stop và follow process nếu nghĩ:
- "Quick fix for now, investigate sau"
- "Chỉ thử thay đổi X và xem nó works không"
- "Có lẽ là X, để tôi fix cái đó"
- "Should work now" / "Seems fixed"
- "Tests pass, chúng ta xong"

**Tất cả nghĩa là**: Quay lại systematic process.

## Các Skills Liên Quan

- [Fix](/vi/docs/engineer/skills/fix) - Complete bug fixing workflow với intelligent routing
- [Context Engineering](/vi/docs/engineer/skills/context-engineering) - Cho complex debugging yêu cầu context optimization
