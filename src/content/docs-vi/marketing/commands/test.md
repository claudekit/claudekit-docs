---
lang: vi
title: "/test"
description: "Chạy bộ test và phân tích kết quả - chỉ kiểm tra, không triển khai"
section: marketing
category: commands
order: 18
published: true
---

> Chạy test và phân tích kết quả (không triển khai)

## Quick Start

```bash
/test
```

**Điều gì xảy ra**:
1. Kích hoạt tester agent
2. Chạy bộ test hoàn chỉnh
3. Phân tích kết quả pass/fail
4. Báo cáo tóm tắt

**Quan trọng**: KHÔNG triển khai các bản sửa, chỉ báo cáo vấn đề

## Syntax

```bash
/test
```

Không cần đối số.

## Example Output

```markdown
✓ tester: Chạy bộ test...

Test Results:
✓ Unit tests: 89 passed, 0 failed
✓ Integration tests: 23 passed, 0 failed
✗ E2E tests: 4 passed, 2 failed

Coverage:
- Statements: 84% (target: 80%)
- Branches: 78% (target: 75%)
- Functions: 91% (target: 85%)
- Lines: 86% (target: 80%)

Failed Tests:
1. E2E: Email campaign creation flow
   Error: Timeout waiting for API response

2. E2E: Analytics dashboard load
   Error: Chart data not rendering

Summary: 116/118 tests passing (98.3%)

Next: /fix Test failures in email campaign + analytics
```

## When to Use

### Sau khi triển khai
```bash
/cook plans/feature.md
/test  # Xác minh mọi thứ hoạt động
```

### Trước khi Commits
```bash
/test  # Đảm bảo test pass
/git:cm  # Commit nếu tất cả bình thường
```

### Debugging
```bash
/fix feature not working
/test  # Xác minh bản sửa hoạt động
```

## Related Commands

- [/code](/docs/marketing/commands/code) - Bao gồm kiểm tra tự động
- [/fix](/docs/marketing/commands/fix) - Sửa lỗi test
- [/review](/docs/marketing/commands/review) - Kiểm tra chất lượng mã

---

**Test trước. Fix nhanh.** Biết cái gì bị hỏng trước khi bạn commit.
