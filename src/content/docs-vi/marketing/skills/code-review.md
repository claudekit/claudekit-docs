---
lang: vi
title: "ckm:code-review"
description: "Xử lý phản hồi review code và xác minh chất lượng"
section: marketing
kit: marketing
category: skills
order: 67
---

# Code Review

> Đảm bảo chất lượng code marketing tools thông qua review có hệ thống và xử lý phản hồi hiệu quả.

## Skill Này Làm Gì

**Thách thức**: Code marketing tools thường được viết nhanh để meet deadlines, dẫn đến technical debt, bugs tiềm ẩn và khó bảo trì. Review ad-hoc không đủ để đảm bảo chất lượng.

**Giải pháp**: Skill code-review cung cấp checklist review đầy đủ, quy trình xử lý feedback, metrics chất lượng và tự động hóa phần review có thể.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt sau khi hoàn thành implementation để review code.

**Tường minh**: Kích hoạt qua prompt:
```
Activate code-review skill to review [file/component/PR]
```

## Tính Năng

### 1. Checklist Review Đầy Đủ

**Correctness**:
- [ ] Logic xử lý đúng edge cases
- [ ] Error handling đầy đủ (try/catch, error boundaries)
- [ ] Null/undefined checks
- [ ] Type safety (no `any` types)
- [ ] Business logic khớp requirements

**Performance**:
- [ ] Không có N+1 queries
- [ ] Không có unnecessary re-renders (React)
- [ ] Lazy loading cho heavy components
- [ ] API calls được cache khi phù hợp
- [ ] Bundle size được tối ưu

**Security**:
- [ ] Không có hardcoded secrets
- [ ] Input validation và sanitization
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] CSRF protection cho forms

**Maintainability**:
- [ ] Functions dưới 50 lines
- [ ] Files dưới 200 lines
- [ ] Naming rõ ràng và tự documenting
- [ ] DRY — không lặp code
- [ ] Comments cho complex logic

### 2. Severity Levels
Phân loại issues theo mức độ nghiêm trọng.

| Level | Ký hiệu | Ý nghĩa | Action |
|-------|---------|---------|--------|
| Critical | 🔴 | Bug nghiêm trọng, security hole | Phải sửa trước merge |
| Major | 🟠 | Logic sai, performance issue | Nên sửa trước merge |
| Minor | 🟡 | Code smell, style issue | Sửa khi có thời gian |
| Nitpick | 💬 | Preference, suggestion | Optional |

### 3. Review Feedback Format
Cấu trúc feedback rõ ràng và actionable.

**Template comment**:
```markdown
🔴 **Critical**: SQL Injection Vulnerability

**File**: `src/api/leads.js:47`
**Issue**: User input được concatenate trực tiếp vào SQL query

**Current code**:
```js
const query = `SELECT * FROM leads WHERE email = '${email}'`;
```

**Suggested fix**:
```js
const query = 'SELECT * FROM leads WHERE email = $1';
const result = await db.query(query, [email]);
```

**Why**: Attacker có thể inject SQL để đọc/xóa toàn bộ database.
```

### 4. Automated Quality Checks
Tích hợp với CI/CD để tự động hóa phần review có thể.

**ESLint config cho marketing code**:
```json
{
  "extends": ["eslint:recommended", "@typescript-eslint/recommended"],
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "no-unused-vars": "error",
    "prefer-const": "error"
  }
}
```

**Pre-commit hooks** (với Husky):
```bash
npx husky add .husky/pre-commit "npm run lint && npm run type-check"
```

## Điều Kiện Tiên Quyết

- Code đã implement và hoạt động
- Test suite (nếu có)
- ESLint / TypeScript config

## Cấu Hình

**Review scope** (tùy chỉnh theo project):
```yaml
review:
  focus:
    - security  # Ưu tiên cao nhất
    - correctness
    - performance
  skip:
    - formatting  # Auto-handled bởi Prettier
    - style  # Enforce bằng ESLint
  thresholds:
    max_function_lines: 50
    max_file_lines: 200
    min_test_coverage: 80
```

## Thực Hành Tốt Nhất

**1. Review Nhỏ Và Thường Xuyên**
PR nhỏ (< 400 lines) dễ review hơn và ít bugs hơn.

**2. Tách Review Logic Và Style**
Dùng linters cho style, focus human review vào logic và security.

**3. Document Quyết Định Thiết Kế**
Comments giải thích "tại sao" quan trọng hơn "cái gì".

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Review Trước Deploy
**Tình huống**: Review code analytics dashboard trước khi deploy lên production.

**Quy trình**:
1. Chạy automated checks (lint, type-check, tests)
2. Review security: API keys, input validation, auth
3. Review performance: queries, bundle size, caching
4. Review UX: error states, loading states, edge cases
5. Sign-off nếu không có critical issues

### Trường Hợp 2: Code Audit Định Kỳ
**Tình huống**: Monthly audit để giảm technical debt.

**Quy trình**:
1. Chạy dependency audit: `npm audit`
2. Kiểm tra outdated packages
3. Review files > 200 lines để refactor
4. Tìm duplicate code với CodeClimate hoặc SonarQube

## Xử Lý Sự Cố

**Vấn đề**: PR có quá nhiều issues, khó biết bắt đầu từ đâu
**Giải pháp**: Ưu tiên Critical → Major → Minor. Resolve từng nhóm theo batch.

**Vấn đề**: Developer không đồng ý với feedback
**Giải pháp**: Tách "must fix" (security, correctness) khỏi "nice to have". Thảo luận alternatives.

## Skill Liên Quan

- [Debugging](/vi/docs/marketing/skills/debugging) - Gỡ lỗi sau review
- [Backend Development](/vi/docs/marketing/skills/backend-development) - Patterns cho backend code
- [Frontend Development](/vi/docs/marketing/skills/frontend-development) - Patterns cho frontend code

## Lệnh Liên Quan

- `/ckm:code-review` - Bắt đầu review code
- `/ckm:debugging` - Gỡ lỗi issues tìm thấy trong review
- `/ckm:test` - Chạy test suite
