---
lang: vi
title: "ckm:brainstorming"
description: "Khám phá giải pháp cộng tác và ra quyết định kỹ thuật thông qua đối thoại có cấu trúc và xác nhận phương pháp."
section: marketing
category: skills
order: 9
---

> Biến ý tưởng thành thiết kế đã được xác nhận thông qua đối thoại có cấu trúc trước khi bất kỳ triển khai nào diễn ra.

## Skill Này Làm Gì

**Thách thức**: Các nhóm nhảy vào triển khai mà không khám phá các phương án, xác nhận giả định hay ghi lại quyết định. Điều này dẫn đến nợ kỹ thuật và các giải pháp không phù hợp.

**Giải pháp**: Skill Brainstorming thực thi các phiên phát triển ý tưởng có cấu trúc với nguyên tắc YAGNI/KISS/DRY, so sánh phương pháp và ghi lại quyết định. KHÔNG triển khai cho đến khi có xác nhận rõ ràng từ người dùng.

## Kích Hoạt

**Ngầm định**: Tự động kích hoạt khi người dùng báo hiệu chế độ brainstorming ("let's explore", "what are our options", "brainstorm with me").

**Tường minh**: Kích hoạt theo tên khi cần: "Activate brainstorming skill" hoặc dùng lệnh /ckm:brainstorm

## Tính Năng

### 1. Khám Phá Có Cấu Trúc
Các câu hỏi tuần tự để hiểu yêu cầu thực sự so với yêu cầu được nêu.

**Khám phá bao gồm**:
- Mục đích và tiêu chí thành công
- Ràng buộc (kỹ thuật, thời gian, nguồn lực)
- Giả định ẩn và các trường hợp ngoại lệ
- Yêu cầu phi chức năng (quy mô, bảo mật, hiệu suất)

### 2. So Sánh Phương Pháp
Trình bày 2-3 giải pháp khả thi với đánh đổi, ưu/nhược điểm và đánh giá độ phức tạp.

**Ví dụ so sánh**:
```markdown
## Phương án A: Serverless với Cloudflare Workers
**Ưu điểm**: Triển khai global edge, tự động mở rộng, $0 ở lưu lượng thấp
**Nhược điểm**: Giới hạn CPU 50ms, phụ thuộc nhà cung cấp, phức tạp khi debug
**Độ phức tạp**: Thấp (2-3 ngày)

## Phương án B: Node.js truyền thống với Docker
**Ưu điểm**: Toàn quyền kiểm soát, dễ debug, di động
**Nhược điểm**: Cần quản lý server, chi phí cố định
**Độ phức tạp**: Trung bình (4-5 ngày)

**Khuyến nghị**: Phương án A cho MVP (kiểm tra thị trường), chuyển sang B nếu sử dụng mở rộng.
```

### 3. Cổng Xác Nhận
Chia thiết kế thành các phân đoạn, chờ phê duyệt người dùng trước khi tiếp tục. Ngăn chặn các cuộc trò chuyện quá dài.

**Chủ đề phân đoạn**:
- Kiến trúc và luồng dữ liệu
- Phân tách thành phần
- Chiến lược xử lý lỗi
- Cân nhắc bảo mật và hiệu suất

## Điều Kiện Tiên Quyết

- Tuyên bố vấn đề hoặc mục tiêu rõ ràng
- Người dùng sẵn sàng cho đối thoại tương tác

## Cấu Hình

Không cần cấu hình. Skill hoạt động qua giao diện trò chuyện.

## Thực Hành Tốt Nhất

**1. Một Câu Hỏi Mỗi Lúc**
Tránh áp đảo người dùng với 10 câu hỏi ngay từ đầu. Hỏi tuần tự dựa trên câu trả lời.

**2. Ưu Tiên Câu Hỏi Trắc Nghiệm**
"Chúng ta nên dùng A, B hay C?" dễ trả lời hơn câu hỏi mở.

**3. Thách Thức Giả Định Một Cách Xây Dựng**
"Bạn đã xem xét X chưa?" tốt hơn "Điều đó sẽ không hoạt động vì Y".

## Các Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp 1: Phiên Thiết Kế Tính Năng
**Tình huống**: Người dùng muốn thêm "xác thực người dùng" vào ứng dụng.

**Quy trình**:
1. **Khám phá**: Phương thức xác thực nào? (email/password, OAuth, SSO?)
2. **Ràng buộc**: Yêu cầu bảo mật? Nhu cầu tuân thủ?
3. **So sánh phương pháp**:
   - Auth0 (trọn gói, $25/tháng, phụ thuộc nhà cung cấp)
   - Better Auth (mã nguồn mở, tự host, kiểm soát nhiều hơn)
   - JWT tùy chỉnh (toàn quyền kiểm soát, bảo trì cao hơn)
4. **Xác nhận**: Xem xét kiến trúc của phương án được chọn
5. **Tóm tắt**: Ghi lại quyết định kèm lý do

**Kết quả**: Tài liệu thiết kế Markdown sẵn sàng cho lập kế hoạch triển khai.

### Trường Hợp 2: Đánh Giá Nợ Kỹ Thuật
**Tình huống**: Hiệu suất monolith suy giảm, đang xem xét microservices.

**Quy trình**:
1. **Khám phá**: Điểm nút cổ chai cụ thể là gì? Yêu cầu quy mô?
2. **Phương án thay thế**:
   - Tối ưu monolith (mở rộng dọc, caching)
   - Tách các dịch vụ quan trọng (hybrid)
   - Di chuyển toàn bộ sang microservices (nỗ lực 3-6 tháng)
3. **Đánh giá rủi ro**: Điều gì có thể xảy ra sai với mỗi phương án?
4. **Khuyến nghị**: Bắt đầu với tối ưu hóa + tách 1 dịch vụ làm proof of concept

**Kết quả**: Ma trận quyết định với khuyến nghị và các bước tiếp theo.

## Xử Lý Sự Cố

**Vấn đề**: Phiên bị kẹt, không có tiến triển
**Giải pháp**: Yêu cầu người dùng làm rõ vấn đề cốt lõi. Reset về Giai đoạn 1 (Khám phá).

**Vấn đề**: Người dùng liên tục thêm yêu cầu
**Giải pháp**: Ghi nhận các bổ sung, nhưng tập trung vào MVP trước. Ghi lại các tính năng mong muốn riêng.

**Vấn đề**: Cuộc trò chuyện trở nên quá kỹ thuật
**Giải pháp**: Dùng ví dụ và phép so sánh. Tránh thuật ngữ chuyên môn trừ khi người dùng cho thấy quen thuộc.

## Skill Liên Quan

- [Planning](/vi/docs/marketing/skills) - Chuyển đầu ra brainstorm thành kế hoạch triển khai
- [Research](/vi/docs/marketing/skills/research) - Nghiên cứu kỹ thuật chuyên sâu
- [Problem Solving](/vi/docs/marketing/skills) - Khung ra quyết định nâng cao

## Lệnh Liên Quan

- `/ckm:brainstorm` - Bắt đầu phiên brainstorming
- `/ckm:plan` - Tạo kế hoạch từ đầu ra brainstorm
- `/ckm:ask` - Câu hỏi và tư vấn chung
