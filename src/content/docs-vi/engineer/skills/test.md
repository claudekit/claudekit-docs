---
title: "ck:test"
description: "Chạy unit, integration, e2e và UI tests với phân tích coverage, xác minh build và báo cáo QA"
section: engineer
kit: engineer
category: skills
order: 12
published: true
lang: vi
---

# `ck:test`

Framework testing toàn diện cho code và UI. Chạy toàn bộ test stack, phân tích failures, đo lường coverage và tạo báo cáo QA.

## Nguyên Tắc Cốt Lõi

**KHÔNG BAO GIỜ BỎ QUA FAILING TESTS.**

Không có workarounds. Không mock để vượt CI. Không dùng `--passWithNoTests`. Sửa nguyên nhân gốc rễ hoặc ghi lại skip hợp lý có lý do.

## Skill Này Làm Gì

Test điều phối vòng lặp xác minh chất lượng hoàn chỉnh: kiểm tra type, thực thi test, phân tích failures, đo lường coverage, xác nhận UI và tạo báo cáo. Hoạt động với mọi test runner và tích hợp với debug skill cho các failures cần điều tra.

## Workflows

### Testing Code

Hỗ trợ tất cả test runners chính:

| Ngôn Ngữ | Runners |
|----------|---------|
| JavaScript/TypeScript | Jest, Vitest, Mocha |
| Python | pytest, unittest |
| Go | go test |
| Rust | cargo test |
| Dart/Flutter | flutter test |

### UI Testing

Ủy quyền cho skill `chrome-devtools` để:
- Visual regression
- Interaction testing
- Kiểm tra accessibility
- Kiểm toán hiệu suất

### Tạo Báo Cáo

Tạo báo cáo QA có cấu trúc tại `{active-plan}/reports/tester-YYMMDD.md` bao gồm: tóm tắt pass/fail, metrics coverage, chi tiết failing tests và khuyến nghị.

## Quy Trình Làm Việc

```
Xác Định Phạm Vi → Typecheck Trước → Thực Thi Suites
→ Phân Tích Failures → Coverage Report → UI Tests (nếu cần)
→ QA Report
```

1. **Xác Định Phạm Vi** — xác định suites nào liên quan (unit/integration/e2e/UI)
2. **Typecheck Trước** — chạy `tsc --noEmit` hoặc tương đương trước tests
3. **Thực Thi Suites** — chạy test runner(s) cho dự án
4. **Phân Tích Failures** — cho mỗi failure: đọc lỗi, truy vết nguyên nhân gốc, đề xuất fix
5. **Coverage Report** — xuất Istanbul/c8/pytest-cov/go cover
6. **UI Tests** — xác nhận trình duyệt qua chrome-devtools skill
7. **QA Report** — viết báo cáo có cấu trúc với phát hiện có thể thực hiện

## Tích Hợp Công Cụ

| Công Cụ | Mục Đích |
|------|---------|
| Test runners | Thực thi suites (tự động phát hiện từ package.json / config files) |
| Istanbul/c8 | Coverage JS/TS |
| pytest-cov | Coverage Python |
| go cover | Coverage Go |
| chrome-devtools skill | Testing trình duyệt/UI |
| ai-multimodal skill | Phân tích screenshot cho UI failures |
| debug skill | Phân tích nguyên nhân gốc cho failures phức tạp |

## Tiêu Chuẩn Chất Lượng

- **Critical paths**: Cần coverage 100%
- **Happy + error paths**: cả hai phải được bao phủ
- **Test isolation**: không có shared state giữa các tests
- **Deterministic**: tests phải tạo ra cùng kết quả mỗi lần chạy
- **Data cleanup**: tests dọn sạch bất kỳ dữ liệu nào đã tạo
- **No flaky tests**: sửa hoặc xóa, không bao giờ retry-loop

## Chế Độ Team

Trong phiên agent team, tester teammate:
- Sở hữu độc quyền tất cả file test
- Đọc file triển khai nhưng không bao giờ chỉnh sửa chúng
- Báo cáo coverage và failures về lead

## Ví Dụ Prompt

- "Chạy tests cho auth module và tạo coverage report"
- "Chạy toàn bộ test suite và sửa mọi failures"
- "Chạy UI tests trên trang dashboard và kiểm tra regressions"
- "Chạy integration tests và phân tích tại sao payment tests thất bại"

## Skill Liên Quan

- [Debug](/vi/docs/engineer/skills/debug) — được kích hoạt cho failures cần phân tích nguyên nhân gốc
- [Cook](/vi/docs/engineer/skills/cook) — quality gate của cook yêu cầu 100% test pass
- [Chrome DevTools](/vi/docs/engineer/skills/chrome-devtools) — UI và browser testing
