---
title: Agent Tester
description: Thực thi kiểm thử, xác nhận triển khai và đảm bảo chất lượng mã nguồn với phân tích độ bao phủ toàn diện
section: engineer
kit: engineer
category: agents
order: 4
published: true
lang: vi
---

# Agent Tester

Agent tester thực thi các bộ kiểm thử toàn diện, xác nhận việc triển khai và đảm bảo chất lượng mã nguồn với mục tiêu đạt độ bao phủ (coverage) trên 80% trên nhiều nền tảng kiểm thử khác nhau.

## Mục đích

Thực thi kiểm thử đơn vị (unit tests), kiểm thử tích hợp (integration tests), xác nhận hiệu suất và xác minh bản build để đảm bảo chất lượng mã nguồn và ngăn ngừa lỗi tái diễn (regressions).

## Khi nào được kích hoạt

Agent tester kích hoạt khi:
- Sử dụng lệnh `/test`
- Sử dụng lệnh `/fix:test [issues]`
- Sau khi triển khai các tính năng mới
- Khi kiểm tra độ bao phủ mã nguồn
- Trước khi tạo pull request
- Khi xác nhận các đường dẫn CI/CD

## Khả năng

### Thực thi kiểm thử
- **Unit Tests**: Kiểm tra từng hàm/thành phần riêng lẻ.
- **Integration Tests**: Kiểm tra sự tương tác giữa nhiều thành phần.
- **E2E Tests**: Xác nhận toàn bộ quy trình làm việc của người dùng.
- **Regression Tests**: Ngăn chặn các lỗi đã sửa xuất hiện trở lại.
- **Performance Tests**: Xác nhận tốc độ và mức sử dụng tài nguyên.

### Hỗ trợ Framework
Hỗ trợ đa dạng các ngôn ngữ và framework:
- **Flutter**: `flutter analyze`, `flutter test`.
- **Node.js/TypeScript**: Jest, Vitest, Mocha, AVA.
- **Python**: pytest, unittest.
- **Go**: `go test`.
- **Rust**: `cargo test`.

### Phân tích độ bao phủ (Coverage)
- Theo dõi độ bao phủ theo dòng (Line), nhánh (Branch), hàm (Function) và câu lệnh (Statement).
- **Mục tiêu**: Đạt độ bao phủ trên 80% cho mã nguồn sản xuất (production code).

### Kiểm tra kịch bản lỗi
- **Trường hợp biên (Edge Cases)**: Các điều kiện giới hạn.
- **Xử lý lỗi**: Các đường dẫn ngoại lệ và thông báo lỗi.
- **Đầu vào không hợp lệ**: Dữ liệu sai định dạng hoặc không mong đợi.
- **Race Conditions**: Các vấn đề thực thi đồng thời.

### Xác minh bản Build
- Đảm bảo mã nguồn biên dịch không lỗi.
- Kiểm tra kiểu dữ liệu (Type checking) và linting.
- Kiểm tra sự tương thích của các phụ thuộc (dependencies).
- Phân tích kích thước gói (bundle size).

## Ví dụ sử dụng

### Thực thi kiểm thử cơ bản
```bash
/test
```
**Quy trình**: Phát hiện kiểm thử -> Thực thi -> Phân tích độ bao phủ -> Tạo báo cáo chi tiết về các bài test đạt/thất bại và các lỗ hổng bao phủ.

## Các chỉ số thành công

Một đợt chạy kiểm thử thành công đạt được:
- ✅ 100% các bài test đã chạy đều vượt qua.
- ✅ Độ bao phủ đạt mục tiêu (80%+).
- ✅ Không có bài test nào bị chập chờn (flaky).
- ✅ Bản build thành công và vượt qua kiểm tra linting.
- ✅ Hiệu suất nằm trong giới hạn cho phép.

---

**Thông điệp chính**: Agent tester đảm bảo chất lượng mã nguồn thông qua việc thực thi kiểm thử toàn diện, phân tích độ bao phủ và xác nhận liên tục trên mọi framework.
