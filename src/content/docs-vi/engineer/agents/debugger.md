---
title: Agent Debugger
description: Điều tra các vấn đề một cách có hệ thống, phân tích nhật ký và cung cấp phân tích nguyên nhân gốc rễ với các giải pháp có thể thực hiện được
section: engineer
kit: engineer
category: agents
order: 5
published: true
lang: vi
---

# Agent Debugger

Agent debugger điều tra các vấn đề phức tạp một cách có hệ thống, phân tích hành vi hệ thống, thu thập dữ liệu chẩn đoán và cung cấp phân tích nguyên nhân gốc rễ toàn diện cùng với các giải pháp khả thi.

## Mục đích

Điều tra và chẩn đoán các vấn đề kỹ thuật bao gồm lỗi API, lỗi CI/CD, suy giảm hiệu suất, các vấn đề cơ sở dữ liệu và các hiện tượng bất thường của hệ thống.

## Khi nào được kích hoạt

Agent debugger được kích hoạt khi:

- Sử dụng lệnh `/debug [description]`
- Các điểm cuối API trả về lỗi
- Các đường dẫn CI/CD bị lỗi
- Phát hiện các vấn đề về hiệu suất
- Các truy vấn cơ sở dữ liệu chậm hoặc bị lỗi
- Hành vi hệ thống không như mong đợi
- Các sự cố trong môi trường sản xuất (production)
- Lỗi tích hợp

## Khả năng

### Điều tra vấn đề

- **Phân tích hệ thống**: Phương pháp giải quyết vấn đề có cấu trúc
- **Thu thập dữ liệu**: Nhật ký (logs), các chỉ số (metrics), vết (traces), trạng thái cơ sở dữ liệu
- **Nhận dạng mẫu**: Xác định các mẫu lỗi phổ biến
- **Đánh giá tác động**: Đánh giá phạm vi và mức độ nghiêm trọng
- **Phân tích dòng thời gian**: Khi nào vấn đề bắt đầu, tần suất xảy ra

### Phân tích cơ sở dữ liệu

- **Kiểm tra lược đồ (Schema)**: Sử dụng các lệnh `psql \d`
- **Phân tích truy vấn**: Kế hoạch EXPLAIN, nhật ký truy vấn chậm
- **Giám sát kết nối**: Các kết nối đang hoạt động, các khóa (locks)
- **Xác nhận dữ liệu**: Kiểm tra tính toàn vẹn, vi phạm ràng buộc
- **Chỉ số hiệu suất**: Thời gian truy vấn, việc sử dụng chỉ mục

### Phân tích nhật ký (Log)

- **Nhật ký máy chủ**: Nhật ký lỗi ứng dụng, nhật ký truy cập
- **Nhật ký CI/CD**: Đầu ra bản build, lỗi kiểm thử, lỗi triển khai
- **GitHub Actions**: Nhật ký workflow, lỗi job, lỗi step
- **Nhật ký Container**: Nhật ký pod Docker/Kubernetes
- **Nhật ký hệ thống**: Lỗi cấp hệ điều hành, giới hạn tài nguyên

### Phân tích hiệu suất

- **Thời gian phản hồi**: Độ trễ của điểm cuối API
- **Sử dụng tài nguyên**: CPU, bộ nhớ, đĩa, mạng
- **Hiệu suất cơ sở dữ liệu**: Thời gian thực thi truy vấn, connection pool
- **Hiệu quả bộ nhớ đệm**: Tỷ lệ hit, các mẫu bị loại bỏ (eviction)
- **Xác định nút thắt cổ chai**: Các thành phần chậm nhất

### Xác định nguyên nhân gốc rễ

- **Truy vết lỗi**: Theo dõi ngăn xếp lỗi (stack traces)
- **Phân tích phụ thuộc**: Lỗi từ các dịch vụ bên ngoài
- **Vấn đề cấu hình**: Biến môi trường, cài đặt
- **Phân tích mã nguồn**: Xác định bug, lỗi logic
- **Vấn đề cơ sở hạ tầng**: Mạng, lưu trữ, tính toán

## Phương pháp luận

### 1. Đánh giá ban đầu (5-10 phút)

Ghi nhận loại vấn đề, mức độ nghiêm trọng, môi trường, thời điểm xảy ra và tần suất. Đặt ra các câu hỏi về thay đổi gần đây, khả năng tái hiện lỗi và các hệ thống liên quan.

### 2. Thu thập dữ liệu (10-20 phút)

Sử dụng các công cụ như `kubectl logs`, `psql`, `gh run view`, `docker stats` để thu thập dữ liệu từ máy chủ, cơ sở dữ liệu, CI/CD và hệ thống.

### 3. Phân tích (15-30 phút)

- Xem xét dữ liệu đã thu thập
- Xác định các mẫu lỗi
- Kiểm tra các hệ thống liên quan
- Kiểm thử các giả thuyết
- Thu hẹp phạm vi nguyên nhân gốc rễ

### 4. Phát triển giải pháp (10-20 phút)

- Đề xuất các bản sửa lỗi
- Ghi chép các giải pháp tạm thời (workarounds)
- Tạo kế hoạch hành động
- Ước tính tác động
- Định nghĩa các bước xác nhận

## Ví dụ sử dụng

### Điều tra lỗi API

**Đầu vào:**
```bash
/debug [điểm cuối API /api/orders đang trả về lỗi 500]
```

**Quá trình:**
1. **Đánh giá ban đầu**: Lỗi 500 khi POST /api/orders, mức độ nghiêm trọng cao, ảnh hưởng 100% yêu cầu.
2. **Thu thập dữ liệu**: Kiểm tra log máy chủ, phát hiện lỗi `Cannot read property 'userId' of undefined` và lỗi cạn kiệt connection pool. Kiểm tra trạng thái DB, thấy nhiều query đang chờ khóa.
3. **Phân tích**: Xác định các nguyên nhân gốc rễ: thiếu kiểm tra null trong code, rò rỉ kết nối DB do không đóng transaction, tranh chấp khóa bảng. Liên kết với lần deploy bản v2.3.4 gần nhất.
4. **Phát triển giải pháp**: Đề xuất rollback về v2.3.3, sau đó sửa code và triển khai lại bản v2.3.5.

**Báo cáo được tạo:**
- Tóm tắt vấn đề và hành động khuyến nghị.
- Phân tích chi tiết từng nguyên nhân gốc rễ kèm code minh họa và cách sửa.
- Đánh giá tác động kinh doanh và kỹ thuật.
- Kế hoạch hành động cụ thể (ngay lập tức, ngắn hạn, dài hạn).
- Các bước xác nhận sau khi sửa lỗi và biện pháp ngăn chặn.

## Tích hợp công cụ

- **Lệnh psql**: Kiểm tra thông tin kết nối, lược đồ bảng, chỉ mục và truy vấn chậm.
- **Lệnh gh**: Xem danh sách workflow, chi tiết lần chạy, tải nhật ký và chạy lại workflow.
- **docs-seeker**: Tìm kiếm các mẫu lỗi và thực hành tốt nhất.
- **repomix**: Tạo tóm tắt mã nguồn để phân tích bối cảnh.
- **scout agents**: Điều tra song song các phần khác nhau của mã nguồn.

## Các chỉ số thành công

Việc gỡ lỗi hiệu quả đạt được:
- ✅ Xác định được nguyên nhân gốc rễ (không chỉ là triệu chứng)
- ✅ Giải pháp được xác nhận trong môi trường bị ảnh hưởng
- ✅ Các biện pháp ngăn chặn được ghi chép lại
- ✅ Kiến thức được chia sẻ với đội ngũ
- ✅ Các vấn đề tương tự được ngăn chặn

## Liên quan

- [Agent Tester](/vi/docs/engineer/agents/tester) - Xác nhận các bản sửa lỗi bằng kiểm thử
- [Agent Code Reviewer](/vi/docs/engineer/agents/code-reviewer) - Xem xét chất lượng bản sửa lỗi
- [Fix Skill](/docs/engineer/skills/fix) - Áp dụng các bản sửa lỗi một cách hệ thống

---

**Thông điệp chính**: Agent debugger cung cấp khả năng điều tra hệ thống, phân tích nguyên nhân gốc rễ toàn diện và các giải pháp khả thi cùng với các bước xác nhận và biện pháp ngăn chặn.
