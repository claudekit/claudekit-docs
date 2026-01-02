---
lang: vi
title: "/ask"
description: "Tư vấn kiến trúc chuyên gia với 4 cố vấn chuyên biệt để đưa ra quyết định kỹ thuật, thiết kế hệ thống và lập kế hoạch khả năng mở rộng"
section: marketing
category: commands
order: 19
published: true
---

> Tư vấn kỹ thuật, không phải thực hiện

## Khởi động nhanh

```bash
/ask How should we structure our email automation system?
```

**Điều gì xảy ra**:
1. 4 cố vấn chuyên gia phân tích câu hỏi của bạn
2. Systems Designer đánh giá kiến trúc
3. Technology Strategist đề xuất công nghệ
4. Scalability Consultant đánh giá sự tăng trưởng
5. Risk Analyst xác định các sự đánh đổi

**Kết quả**: Phân tích kiến trúc (không có thực hiện)

## Cú pháp

```bash
/ask [technical-question]
```

## Ví dụ

**Đầu vào**:
```bash
/ask Should we use microservices or monolith for our marketing automation platform?
```

**Kết quả mong đợi**:
```markdown
✓ 4 cố vấn kiến trúc được tư vấn

---
# Phân tích kiến trúc: Microservices so với Monolith

## QUAN ĐIỂM CỦA SYSTEMS DESIGNER

Bối cảnh hiện tại:
- Kích thước nhóm: 3-5 nhà phát triển
- Lưu lượng truy cập: ~10K người dùng
- Độ phức tạp: Trung bình (email, chiến dịch, phân tích)

Khuyến cáo Monolith:
- Bắt đầu với monolith mô-đun
- Ranh giới mô-đun rõ ràng (email/, campaigns/, analytics/)
- Dễ dàng tách ra sau nếu cần

Tại sao không microservices ngay bây giờ:
- Overhead hoạt động quá cao cho kích thước nhóm
- Tối ưu hóa sớm
- Phức tạp triển khai không cần thiết ở mức độ này

## QUAN ĐIỂM CỦA TECHNOLOGY STRATEGIST

Stack được đề xuất (monolith mô-đun):
- Ứng dụng Next.js với cấu trúc thư mục rõ ràng
- Cơ sở dữ liệu được chia sẻ với tách biệt logic
- Hệ thống hàng đợi (BullMQ) cho các nhiệm vụ không đồng bộ
- Redis cho bộ nhớ đệm và phiên

Đường dẫn di chuyển tới microservices (nếu cần):
1. Đảm bảo ranh giới mô-đun sạch bây giờ
2. Sử dụng tiêm phụ thuộc
3. Khi lưu lượng > 100K người dùng, hãy xem xét tách
4. Tách dịch vụ email trước tiên (tải cao nhất)

## QUAN ĐIỂM CỦA SCALABILITY CONSULTANT

Monolith có thể xử lý:
- 100K+ người dùng
- 1 triệu+ email/tháng
- Phân tích thời gian thực

Mở rộng theo chiều dọc trước tiên:
- Thêm bộ nhớ đệm Redis (hiệu suất 10x)
- Lập chỉ mục cơ sở dữ liệu (tốc độ truy vấn 5x)
- Công nhân hàng đợi (xử lý không đồng bộ)

Microservices cần khi:
- Các mô-đun khác nhau có nhu cầu quy mô rất khác nhau
- Các nhóm > 20 nhà phát triển
- Triển khai độc lập bắt buộc

## QUAN ĐIỂM CỦA RISK ANALYST

Rủi ro Monolith:
⚠ Mã ghép chặt (giảm thiểu bằng các mô-đun)
⚠ Điểm lỗi duy nhất (giảm thiểu bằng tính dự phòng)
✓ Rủi ro thấp hơn cho các nhóm nhỏ

Rủi ro Microservices:
🔴 Phức tạp hoạt động (giám sát, gỡ lỗi)
🔴 Độ trễ mạng giữa các dịch vụ
🔴 Thách thức nhất quán dữ liệu
🔴 Phối hợp triển khai

## KHUYẾN CÁO

**Bắt đầu với monolith mô-đun.**

Nguyên tắc YAGNI áp dụng: Bạn không cần microservices ngay bây giờ.

Xây dựng với những nguyên tắc này:
1. Ranh giới mô-đun rõ ràng
2. Tiêm phụ thuộc
3. Xử lý không đồng bộ qua hàng đợi
4. Sẵn sàng tính mở rộng ngang

Khi nào nên tái xem xét:
- Lưu lượng > 100K người dùng
- Nhóm > 15 nhà phát triển
- Mô-đun cụ thể cần tính độc lập mở rộng

---

Các bước tiếp theo:
/plan Design modular monolith architecture
/cook Implement email module with clear boundaries
```

## 4 Cố vấn chuyên gia

### Systems Designer
Đánh giá:
- Ranh giới hệ thống
- Tương tác thành phần
- Luồng dữ liệu
- Mẫu tích hợp

### Technology Strategist
Đề xuất:
- Stack công nghệ
- Khung
- Mẫu kiến trúc
- Phương pháp hay nhất trong ngành

### Scalability Consultant
Đánh giá:
- Ý nghĩa về hiệu suất
- Xem xét tăng trưởng
- Chiến lược tính mở rộng
- Xác định điểm nghẽn

### Risk Analyst
Xác định:
- Sự đánh đổi
- Vấn đề tiềm ẩn
- Chiến lược giảm thiểu
- Ý nghĩa quyết định

## Nguyên tắc

Tất cả khuyến cáo suy trọng:
- **YAGNI**: Bạn sẽ không cần nó
- **KISS**: Giữ nó đơn giản, Ngu ngốc
- **DRY**: Đừng lặp lại chính mình

## Khi nào sử dụng

### Quyết định chiến lược
```bash
/ask Should we use SQL or NoSQL?
/ask REST vs GraphQL vs tRPC?
/ask Authentication strategy for multi-tenant SaaS?
```

### Câu hỏi kiến trúc
```bash
/ask How to structure campaign automation system?
/ask Best approach for real-time analytics?
/ask Caching strategy for high-traffic API?
```

### Lựa chọn công nghệ
```bash
/ask Which email service provider?
/ask Best state management for dashboard?
/ask Database choice for time-series data?
```

## KHÔNG phải cho

- Thực hiện (sử dụng /plan hoặc /cook)
- Gỡ lỗi (sử dụng /fix hoặc /debug)
- Đánh giá mã (sử dụng /review)

## Lệnh liên quan

- [/brainstorm](/vi/docs/marketing/commands/brainstorm) - Thảo luận tương tác
- [/plan](/vi/docs/marketing/commands/plan) - Lập kế hoạch thực hiện
- [/research](/vi/docs/marketing/commands/research) - Nghiên cứu thị trường/công nghệ

---

**Lời khuyên chuyên gia. Không có thực hiện.** Hướng dẫn kiến trúc từ 4 chuyên gia.
