---
title: /ask
description: Tài liệu hướng dẫn cho lệnh ask
section: engineer
kit: engineer
category: commands/core
order: 3
published: true
lang: vi
---

# /ask

Lệnh tư vấn kiến trúc chiến lược. Cung cấp hướng dẫn chuyên gia về các quyết định kỹ thuật, thiết kế hệ thống và các thách thức kiến trúc mà không thực hiện triển khai code.

## Cú pháp

```bash
/ask [câu-hỏi-kỹ-thuật]
```

## Khi nào nên sử dụng

- **Quyết định Kiến trúc**: Lựa chọn giữa các mẫu thiết kế (design patterns) hoặc kiến trúc hệ thống
- **Lựa chọn Công nghệ**: Đánh giá các framework, cơ sở dữ liệu hoặc lựa chọn hạ tầng
- **Thách thức Thiết kế**: Giải quyết các vấn đề kỹ thuật phức tạp với nhiều sự đánh đổi
- **Lập kế hoạch Khả năng mở rộng**: Đánh giá các cân nhắc về hiệu suất và tăng trưởng
- **Đánh giá Rủi ro**: Xác định các vấn đề tiềm ẩn trước khi triển khai

## Ví dụ nhanh

```bash
/ask [nên sử dụng kiến trúc microservices hay monolithic cho một nền tảng SaaS với 10.000 người dùng?]
```

**Kết quả đầu ra**:
```
Phân tích Kiến trúc:
- Quy mô hiện tại: 10k người dùng cho thấy độ phức tạp ở mức trung bình
- Kích thước đội ngũ và chuyên môn là yếu tố quan trọng đối với microservices
- Các cân nhắc về chi phí vận hành cho triển khai và giám sát

Đề xuất Thiết kế:
1. Bắt đầu với Modular Monolith
   - Tốc độ phát triển nhanh hơn
   - Độ phức tạp vận hành thấp hơn
   - Ranh giới module rõ ràng để dễ dàng tách rời trong tương lai

Hướng dẫn Công nghệ:
- Sử dụng các nguyên tắc thiết kế hướng tên miền (domain-driven design)
- Triển khai kiến trúc ưu tiên API (API-first)
- Lập kế hoạch cho khả năng mở rộng hàng ngang

Chiến lược Triển khai:
Giai đoạn 1: Modular monolith với ranh giới rõ ràng
Giai đoạn 2: Tách các module có lưu lượng truy cập cao nếu cần
Giai đoạn 3: Đánh giá microservices khi đạt 50k+ người dùng

Các hành động tiếp theo:
- Xác định ranh giới module trong mã nguồn
- Triển khai giám sát sớm
- Lập kế hoạch sơ đồ cơ sở dữ liệu để tách rời trong tương lai
```

**Kết quả**: Đã nhận được hướng dẫn chiến lược, không có mã nguồn nào bị thay đổi, sẵn sàng triển khai với sự tự tin.

## Tham số

- `[câu-hỏi-kỹ-thuật]`: Câu hỏi về kiến trúc, thách thức thiết kế hoặc quyết định kỹ thuật của bạn cần sự tư vấn từ chuyên gia.

## Điều gì xảy ra

Khi bạn chạy lệnh này:

1. **Phân tích Vấn đề**: Hệ thống phân tích câu hỏi của bạn và thu thập ngữ cảnh kiến trúc từ các tài liệu dự án.
2. **Tư vấn Chuyên gia**: Bốn cố vấn chuyên biệt cung cấp các góc nhìn:
   - **Systems Designer (Thiết kế Hệ thống)**: Đánh giá ranh giới hệ thống, giao diện, tương tác giữa các thành phần.
   - **Technology Strategist (Chiến lược gia Công nghệ)**: Đề xuất các công nghệ (stack), framework, mẫu kiến trúc.
   - **Scalability Consultant (Cố vấn Khả năng mở rộng)**: Đánh giá hiệu suất, độ tin cậy, các cân nhắc về tăng trưởng.
   - **Risk Analyst (Phân tích Rủi ro)**: Xác định các vấn đề, sự đánh đổi, chiến lược giảm thiểu rủi ro.
3. **Tổng hợp Kiến trúc**: Kết hợp các thông tin chuyên sâu thành hướng dẫn kiến trúc toàn diện.
4. **Xác nhận Chiến lược**: Đảm bảo các đề xuất phù hợp với mục tiêu kinh doanh và các ràng buộc.

**Các Agent được triệu tập**: Systems Designer, Technology Strategist, Scalability Consultant, Risk Analyst

**Ngữ cảnh được sử dụng**: Tự động tham chiếu tài liệu dự án trong thư mục `./docs` bao gồm:
- `project-overview-pdr.md` - Các yêu cầu và mục tiêu sản phẩm
- `code-standards.md` - Các tiêu chuẩn phát triển
- `system-architecture.md` - Kiến trúc hiện tại
- `deployment-guide.md` - Các ràng buộc về hạ tầng

## Ví dụ Đầy đủ

### Kịch bản: Lựa chọn Cơ sở dữ liệu cho tính năng Phân tích

```bash
/ask [chúng tôi cần thêm tính năng theo dõi phân tích hành vi người dùng. Nên sử dụng PostgreSQL với TimescaleDB, ClickHouse, hay một dịch vụ phân tích riêng biệt như Mixpanel?]
```

**Phân tích Phản hồi**:

**1. Phân tích Kiến trúc**
```
Ngữ cảnh Hiện tại:
- Cơ sở dữ liệu PostgreSQL hiện có cho dữ liệu giao dịch
- Khoảng 10k người dùng hoạt động hàng ngày với dự kiến tăng lên 100k
- Đội ngũ quen thuộc với SQL, nguồn lực DevOps hạn chế
- Yêu cầu bảng điều khiển (dashboard) thời gian thực

Các cân nhắc chính:
- Khối lượng dữ liệu: Hiện tại ~1 triệu sự kiện/ngày, dự kiến 10 triệu
- Mẫu truy vấn: Tổng hợp theo chuỗi thời gian, phễu người dùng
- Ngân sách: Ưu tiên tự lưu trữ (self-hosted) để kiểm soát chi phí
- Tuân thủ: GDPR yêu cầu kiểm soát vị trí lưu trữ dữ liệu
```

**2. Đề xuất Thiết kế**
```
Lựa chọn A: PostgreSQL + TimescaleDB (Khuyên dùng)
Ưu điểm:
- Tận dụng chuyên môn PostgreSQL hiện có
- Cơ sở dữ liệu duy nhất giúp giảm độ phức tạp vận hành
- Hỗ trợ SQL gốc cho các truy vấn phân tích
- Tuân thủ GDPR thông qua việc tự lưu trữ

Nhược điểm:
- Có thể cần tinh chỉnh cho khối lượng ghi lớn
- Các truy vấn phức tạp ảnh hưởng đến hiệu suất giao dịch

Lựa chọn B: ClickHouse
Ưu điểm:
- Hiệu suất vượt trội cho các truy vấn phân tích
- Xử lý hơn 10 triệu sự kiện/ngày một cách dễ dàng

Nhược điểm:
- Công nghệ mới cần học hỏi và bảo trì
- Hạ tầng riêng biệt làm tăng độ phức tạp
- Sự khác biệt về cú pháp SQL

Lựa chọn C: Mixpanel
Ưu điểm:
- Không tốn chi phí vận hành
- Giao diện phân tích phong phú có sẵn

Nhược điểm:
- Chi phí hàng tháng: $999+ khi đạt 100k người dùng
- Kiểm soát GDPR hạn chế
- Phụ thuộc vào nhà cung cấp (vendor lock-in)
```

**3. Hướng dẫn Công nghệ**
```
Cách tiếp cận đề xuất: Tiện ích mở rộng TimescaleDB
1. Thêm TimescaleDB vào PostgreSQL hiện có
2. Tạo sơ đồ (schema) riêng cho phân tích
3. Sử dụng quản lý kết nối (connection pooling - PgBouncer)
4. Triển khai đệm ghi (write buffering) qua Redis

Mẫu Kiến trúc:
[App] → [Redis Buffer] → [PostgreSQL/TimescaleDB]
                              ↓
                        [Analytics Dashboard]
```

**4. Chiến lược Triển khai**
```
Giai đoạn 1 (Tuần 1-2): Thử nghiệm khái niệm (PoC)
- Cài đặt tiện ích mở rộng TimescaleDB
- Tạo hypertables để theo dõi sự kiện
- Kiểm tra hiệu suất ghi với dữ liệu mẫu
- Đo lường hiệu suất truy vấn

Giai đoạn 2 (Tuần 3-4): Tích hợp Sản xuất
- Triển khai đệm ghi Redis
- Tạo lớp API phân tích
- Thêm giám sát (hiệu suất truy vấn, sử dụng đĩa)
- Thiết lập các chính sách lưu giữ dữ liệu tự động

Giai đoạn 3 (Tháng 2): Phát triển Bảng điều khiển
- Xây dựng bảng điều khiển thời gian thực
- Triển khai các truy vấn phễu người dùng
- Thêm khả năng xuất dữ liệu

Lộ trình Di chuyển nếu cần:
- Di chuyển sang ClickHouse khả thi nếu khối lượng vượt quá 50 triệu sự kiện/ngày
- Luôn có sẵn khả năng xuất dữ liệu để tuân thủ quy định
```

**5. Các hành động tiếp theo**
```
1. Chạy đo lường: Tải 1 triệu sự kiện mẫu, kiểm tra hiệu suất truy vấn
2. Đánh giá năng lực đội ngũ: Xác nhận chuyên môn tinh chỉnh PostgreSQL
3. Phân tích chi phí: So sánh tự lưu trữ TimescaleDB và Mixpanel ở quy mô lớn
4. Thử nghiệm khái niệm: Xây dựng hệ thống theo dõi sự kiện đơn giản trong môi trường dev
5. Điểm kiểm tra quyết định: Xác nhận hiệu suất đáp ứng yêu cầu trước khi xây dựng đầy đủ
```

**Các cân nhắc bổ sung**:
```
- Nếu bạn cần /scout để tìm các cấu hình DB hiện có, tôi có thể gọi lệnh đó
- Cân nhắc các chính sách lưu giữ dữ liệu (giới hạn 2 năm của GDPR)
- Lập kế hoạch triển khai dần dần để xác nhận hiệu suất ghi
```

## Các trường hợp sử dụng phổ biến

### Lựa chọn Công nghệ (Tech Stack)

```bash
/ask [lựa chọn giữa Next.js, Remix và Astro cho trang web tài liệu có tính năng chat AI]
```

Nhận hướng dẫn về việc lựa chọn framework dựa trên nhu cầu về SSR, tạo trang tĩnh và các thành phần tương tác.

### Chiến lược Mở rộng

```bash
/ask [thời gian phản hồi API của chúng tôi tăng lên 2 giây khi tải nặng. Nên thêm bộ nhớ đệm, mở rộng hàng ngang hay tối ưu hóa truy vấn?]
```

Nhận phân tích về các nút thắt cổ chai và chiến lược tối ưu hóa được ưu tiên.

### Kiến trúc Tích hợp

```bash
/ask [chúng tôi nên tích hợp xử lý thanh toán như thế nào: tích hợp trực tiếp Stripe hay lớp trừu tượng cổng thanh toán (payment gateway abstraction layer)?]
```

Nhận phân tích sự đánh đổi giữa tính đơn giản và tính linh hoạt với nhà cung cấp.

### Thiết kế Bảo mật

```bash
/ask [cách tiếp cận tốt nhất cho xác thực API: JWT, dựa trên session, hay API keys?]
```

Nhận đánh giá bảo mật và các đề xuất dựa trên trường hợp sử dụng.

## Thực hành tốt nhất

### Đặt câu hỏi mang tính Chiến lược

✅ **Tốt:**
```bash
/ask [nên sử dụng WebSockets hay Server-Sent Events cho thông báo thời gian thực?]
/ask [cách cấu trúc ranh giới microservices cho lĩnh vực thương mại điện tử?]
/ask [kiến trúc cơ sở dữ liệu nào cho SaaS đa khách hàng (multi-tenant) có cách ly dữ liệu?]
```

❌ **Quá tập trung vào Triển khai:**
```bash
/ask [làm thế nào để viết một hàm kết nối với Redis?]
/ask [cú pháp cho các chỉ mục (indexes) PostgreSQL là gì?]
/ask [debug thông báo lỗi này giúp tôi]
```

### Cung cấp Ngữ cảnh

Bao gồm các ràng buộc liên quan:
```bash
/ask [
  Cần giải pháp bộ nhớ đệm cho:
  - 100k người dùng hàng ngày
  - Ngân sách: $200/tháng
  - Đội ngũ biết cơ bản về Redis
  - Phải hỗ trợ việc xóa bộ nhớ đệm (invalidation) phức tạp
  Nên sử dụng Redis, Memcached, hay bộ nhớ đệm trong bộ nhớ (in-memory cache)?
]
```

### Kiểm tra Tài liệu Dự án trước

Lệnh `/ask` tự động đọc thư mục `./docs` nhưng bạn có thể hỗ trợ bằng cách:
1. Luôn cập nhật file `system-architecture.md`
2. Tài liệu hóa các ràng buộc trong `project-overview-pdr.md`
3. Cập nhật `code-standards.md` với các sở thích của bạn

## Điều /ask KHÔNG làm

- ❌ Viết mã nguồn triển khai
- ❌ Sửa lỗi (sử dụng `/debug` hoặc các lệnh `/fix:*` thay thế)
- ❌ Triển khai hạ tầng
- ❌ Đưa ra quyết định cuối cùng (bạn quyết định, hệ thống tư vấn)

## Tích hợp vào Quy trình làm việc

### Trước khi Lập kế hoạch

```bash
# 1. Nhận hướng dẫn kiến trúc
/ask [cách tiếp cận tốt nhất cho xử lý công việc chạy ngầm (background job)?]

# 2. Xem xét các đề xuất
# [Nhận kết quả từ cố vấn]

# 3. Tạo kế hoạch triển khai
/plan [triển khai background jobs sử dụng Bull + Redis]

# 4. Triển khai
/cook [thêm xử lý background job]
```

### Trong quá trình Đánh giá mã nguồn (Code Review)

```bash
# 1. Xem xét PR
git diff main

# 2. Đặt câu hỏi về lựa chọn thiết kế
/ask [liệu sự trừu tượng hóa lớp dịch vụ (service layer) này có quá phức tạp cho các hoạt động CRUD không?]

# 3. Điều chỉnh dựa trên hướng dẫn
# [Thực hiện các thay đổi nếu được đề xuất]
```

### Có thể gọi /scout tự động

Nếu `/ask` cần thêm ngữ cảnh về mã nguồn của bạn:

```
Phân tích Kiến trúc:
Cần hiểu thiết lập cơ sở dữ liệu hiện tại...

Đang gọi /scout để tìm cấu hình cơ sở dữ liệu...
[Kết quả từ Scout được tích hợp vào phân tích]
```

Bạn cũng có thể gọi lệnh này một cách tường minh:
```bash
# Đầu tiên thăm dò mã nguồn
/scout [tìm tất cả các triển khai xác thực API] 3

# Sau đó đặt câu hỏi kiến trúc
/ask [nên hợp nhất các mẫu xác thực này hay giữ chúng riêng biệt?]
```

## Các vấn đề thường gặp

### Câu hỏi quá mơ hồ

**Vấn đề**: "Tôi nên xây dựng tính năng này như thế nào?"

**Giải pháp**: Hãy cụ thể về thách thức của bạn
```bash
/ask [cách tốt nhất để xử lý tải lên tệp trên 100MB với tính năng theo dõi tiến trình và khả năng tiếp tục khi bị gián đoạn là gì?]
```

### Thiếu ngữ cảnh

**Vấn đề**: Lời khuyên không phù hợp với các ràng buộc của bạn

**Giải pháp**: Bao gồm các ràng buộc trong câu hỏi
```bash
/ask [cách tiếp cận xác thực cho ứng dụng di động với yêu cầu: ưu tiên ngoại tuyến, đồng bộ hóa khi có mạng]
```

### Câu hỏi về Triển khai

**Vấn đề**: Hỏi về cú pháp hoặc sửa lỗi

**Giải pháp**: Sử dụng các lệnh phù hợp
- Cú pháp code: Chỉ cần hỏi trực tiếp
- Sửa lỗi (Bugs): `/debug [vấn đề]`
- Triển khai: `/plan` sau đó `/code`

## Các lệnh liên quan

- [/scout](/docs/engineer/commands/core/scout) - Tìm kiếm mã nguồn trước khi đặt câu hỏi kiến trúc
- [/plan](/docs/engineer/commands/core/plan) - Tạo kế hoạch triển khai sau khi nhận được hướng dẫn
- [/debug](/docs/engineer/commands/core/debug) - Điều tra các vấn đề kỹ thuật (không phải kiến trúc)

---

**Thông điệp chính**: `/ask` cung cấp tư vấn kiến trúc chiến lược từ các cố vấn chuyên gia, giúp bạn đưa ra các quyết định kỹ thuật sáng suốt trước khi bắt đầu triển khai.
