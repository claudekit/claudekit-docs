---
lang: vi
title: "ckm:fix"
description: "Sửa lỗi với định tuyến phức tạp thông minh — phân tích root cause, fix và verify tự động."
section: marketing
kit: marketing
category: skills
order: 114
---

# Fix

> Sửa lỗi nhanh chóng và chính xác với pipeline tự động: diagnose → fix → test → verify.

## Kỹ Năng Này Làm Gì

Skill `ckm:fix` xử lý bug fixing thông minh — từ phân tích stack trace, xác định root cause, implement fix đến chạy tests xác nhận. Tự động định tuyến đến specialist agent phù hợp dựa trên loại lỗi.

## Bắt Đầu Nhanh

```
/ckm:fix
```

Hoặc mô tả lỗi:

```
/ckm:fix TypeError: Cannot read property 'map' of undefined tại UserList component
```

## Quy Trình Sửa Lỗi

1. **Diagnose**: Phân tích error message, stack trace và context
2. **Root cause**: Xác định nguyên nhân gốc rễ (không chỉ triệu chứng)
3. **Fix**: Implement giải pháp tối thiểu và chính xác
4. **Test**: Chạy tests liên quan để xác nhận fix
5. **Verify**: Đảm bảo không gây regression

## Loại Lỗi Được Hỗ Trợ

| Loại | Ví Dụ | Approach |
|------|-------|---------|
| Runtime errors | TypeError, ReferenceError | Stack trace analysis |
| Build errors | TS compile, module not found | Dependency check |
| Logic bugs | Wrong output, edge cases | Test case creation |
| Performance | Memory leak, slow queries | Profiling |
| Integration | API failures, webhook errors | Request/response trace |

## Ví Dụ Sử Dụng

**Bug từ error log:**
```
/ckm:fix Error: ENOENT: no such file or directory, open '/tmp/upload-123'
Fix upload handler để tạo thư mục nếu chưa tồn tại
```

**Logic bug:**
```
/ckm:fix Hàm calculateDiscount trả về giá trị âm khi discount > 100%
```

**Performance issue:**
```
/ckm:fix Dashboard load mất 8 giây — query chậm, cần optimize
```

**Regression:**
```
/ckm:fix Sau khi update auth middleware, social login không hoạt động
```

## Flags

```
/ckm:fix --quick    # Chỉ fix, không chạy full test suite
/ckm:fix --safe     # Thêm test case trước khi fix
/ckm:fix --explain  # Giải thích root cause chi tiết
```

## Liên Quan

- [ckm:cook](/vi/docs/marketing/skills/cook) - Triển khai tính năng mới
- [ckm:sequential-thinking](/vi/docs/marketing/skills/sequential-thinking) - Debug phức tạp step-by-step
- [ckm:chrome-devtools](/vi/docs/marketing/skills/chrome-devtools) - Debug frontend issues
