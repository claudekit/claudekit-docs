---
lang: vi
title: "ck:test"
description: "Chạy unit, integration, e2e, và UI test với phân tích coverage, xác minh build, và báo cáo QA"
section: engineer
kit: engineer
category: skills
order: 12
published: true
---

Framework kiểm thử toàn diện cho code và UI. Chạy toàn bộ bộ test, phân tích lỗi, đo lường coverage, và tạo báo cáo QA.

## Nguyên Tắc Cốt Lõi

**KHÔNG BAO GIỜ BỎ QUA CÁC TEST THẤT BẠI.**

Không có cách workaround. Không mock để vượt CI. Không `--passWithNoTests`. Sửa nguyên nhân gốc rễ hoặc ghi lại lý do bỏ qua hợp lệ có giải thích.

## Chức Năng Của Skill Này

Test điều phối vòng lặp xác minh chất lượng hoàn chỉnh: kiểm tra kiểu dữ liệu, thực thi test, phân tích lỗi, đo lường coverage, xác nhận UI, và tạo báo cáo. Hoạt động với bất kỳ test runner nào và tích hợp với skill debug để điều tra các lỗi phức tạp.

## Quy Trình Làm Việc

### Kiểm Thử Code

Hỗ trợ tất cả các test runner chính:

| Ngôn Ngữ | Các Runner |
|---------|------------|
| JavaScript/TypeScript | Jest, Vitest, Mocha |
| Python | pytest, unittest |
| Go | go test |
| Rust | cargo test |
| Dart/Flutter | flutter test |

### Kiểm Thử UI

Ủy quyền cho skill `chrome-devtools` để:
- Kiểm tra hồi quy trực quan
- Kiểm thử tương tác
- Kiểm tra khả năng tiếp cận
- Kiểm toán hiệu năng

### Tạo Báo Cáo

Tạo báo cáo QA có cấu trúc tại `{active-plan}/reports/tester-YYMMDD.md` bao gồm: tóm tắt pass/fail, số liệu coverage, chi tiết test thất bại, và khuyến nghị.

## Quy Trình Làm Việc

```
Xác Định Phạm Vi → Kiểm Tra Kiểu Trước → Thực Thi Bộ Test
→ Phân Tích Lỗi → Báo Cáo Coverage → UI Test (nếu cần)
→ Báo Cáo QA
```

1. **Xác Định Phạm Vi** — xác định bộ test nào liên quan (unit/integration/e2e/UI)
2. **Kiểm Tra Kiểu Trước** — chạy `tsc --noEmit` hoặc tương đương trước test
3. **Thực Thi Bộ Test** — chạy test runner cho dự án
4. **Phân Tích Lỗi** — với mỗi lỗi: đọc error, truy tìm nguyên nhân gốc rễ, đề xuất fix
5. **Báo Cáo Coverage** — output Istanbul/c8/pytest-cov/go cover
6. **UI Test** — xác nhận dựa trên trình duyệt qua skill chrome-devtools
7. **Báo Cáo QA** — viết báo cáo có cấu trúc với các phát hiện có thể thực hiện

## Tích Hợp Công Cụ

| Công Cụ | Mục Đích |
|--------|---------|
| Test runner | Thực thi bộ test (tự động phát hiện từ package.json / file config) |
| Istanbul/c8 | Coverage JS/TS |
| pytest-cov | Coverage Python |
| go cover | Coverage Go |
| skill chrome-devtools | Kiểm thử trình duyệt/UI |
| skill ai-multimodal | Phân tích screenshot cho lỗi UI |
| skill debug | Phân tích nguyên nhân gốc rễ cho lỗi phức tạp |

## Tiêu Chuẩn Chất Lượng

- **Đường dẫn quan trọng**: yêu cầu 100% test coverage
- **Đường dẫn happy + error**: cả hai phải được coverage
- **Cô lập test**: không có trạng thái chung giữa các test
- **Xác định**: test phải tạo ra cùng kết quả mỗi lần chạy
- **Dọn dẹp dữ liệu**: test dọn sạch mọi dữ liệu đã tạo
- **Không có test flaky**: sửa hoặc xóa, không bao giờ retry-loop

## Chế Độ Nhóm

Trong các phiên agent team, đồng nghiệp tester:
- Sở hữu tất cả file test một cách độc quyền
- Đọc file triển khai nhưng không bao giờ chỉnh sửa chúng
- Báo cáo coverage và lỗi trở lại lead

## Ví Dụ Lệnh

- "Chạy test cho module auth và tạo báo cáo coverage"
- "Chạy toàn bộ bộ test và sửa bất kỳ lỗi nào"
- "Chạy UI test trên trang dashboard và kiểm tra hồi quy"
- "Chạy integration test và phân tích tại sao các payment test đang thất bại"

## Skill Liên Quan

- [Debug](/vi/docs/engineer/skills/tools/debug) — được kích hoạt cho các lỗi yêu cầu phân tích nguyên nhân gốc rễ
- [Cook](/vi/docs/engineer/skills/tools/cook) — cổng chất lượng của cook yêu cầu 100% test pass
- [Chrome DevTools](/vi/docs/engineer/skills/tools/chrome-devtools) — kiểm thử UI và trình duyệt
