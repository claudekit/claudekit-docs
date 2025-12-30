---
title: "Brainstorming"
description: "Khám phá giải pháp cộng tác và ra quyết định kỹ thuật thông qua đối thoại có cấu trúc và xác nhận phương pháp tiếp cận."
lang: vi
section: marketing
category: skills
order: 9
---

> Chuyển đổi ý tưởng thành thiết kế được xác nhận thông qua đối thoại có cấu trúc trước bất kỳ việc triển khai nào.

## Skill Này Làm Gì

**Thách Thức**: Các đội nhảy vào triển khai mà không khám phá các lựa chọn thay thế, xác nhận các giả định hoặc ghi lại các quyết định. Điều này dẫn đến nợ kỹ thuật và các giải pháp không phù hợp.

**Giải Pháp**: Skill Brainstorming thực thi các phiên tưởng tượng có cấu trúc với các nguyên tắc YAGNI/KISS/DRY, so sánh phương pháp tiếp cận và ghi lại các quyết định. KHÔNG triển khai cho đến khi có xác nhận rõ ràng từ người dùng.

## Kích Hoạt

**Ẩn Danh**: Kích hoạt khi người dùng báo hiệu chế độ tưởng tượng ("hãy khám phá", "những lựa chọn của chúng ta là gì", "brainstorm với tôi").

**Rõ Ràng**: `/skill:add brainstorming` hoặc `/brainstorm`

## Khả Năng

### 1. Khám Phá Có Cấu Trúc
Các câu hỏi tuần tự để hiểu những yêu cầu thật sự so với yêu cầu ban đầu.

**Khám Phá Bao Gồm**:
- Mục đích và tiêu chí thành công
- Ràng buộc (kỹ thuật, thời gian, tài nguyên)
- Các giả định ẩn và trường hợp cạnh
- Yêu cầu phi chức năng (quy mô, bảo mật, hiệu suất)

### 2. So Sánh Phương Pháp Tiếp Cận
Trình bày 2-3 giải pháp khả thi với sự đánh đổi, ưu/nhược điểm và đánh giá độ phức tạp.

**Ví Dụ So Sánh**:
```markdown
## Phương Pháp A: Serverless với Cloudflare Workers
**Ưu Điểm**: Triển khai cạnh toàn cầu, tự động mở rộng, $0 ở volume thấp
**Nhược Điểm**: Giới hạn CPU 50ms, khóa nhà cung cấp, độ phức tạp gỡ lỗi
**Độ Phức Tạp**: Thấp (2-3 ngày)

## Phương Pháp B: Node.js Truyền Thống với Docker
**Ưu Điểm**: Kiểm soát đầy đủ, gỡ lỗi dễ dàng, có thể di động
**Nhược Điểm**: Yêu cầu quản lý máy chủ, chi phí cố định
**Độ Phức Tạp**: Trung Bình (4-5 ngày)

**Khuyến Nghị**: Phương Pháp A cho MVP (kiểm tra độ phù hợp thị trường), di chuyển đến B nếu cách sử dụng mở rộng.
```

### 3. Cổng Xác Nhận
Chia thiết kế thành các phân khúc, chờ sự phê duyệt của người dùng trước khi tiếp tục. Ngăn chặn các cuộc trò chuyện quá lâu.

**Chủ Đề Phân Khúc**:
- Kiến trúc và luồng dữ liệu
- Phân tích thành phần
- Chiến lược xử lý lỗi
- Các cân nhắc bảo mật và hiệu suất

## Điều Kiện Tiên Quyết

- Tuyên bố vấn đề rõ ràng hoặc mục tiêu
- Người dùng có sẵn để đối thoại tương tác

## Cấu Hình

Không cần cấu hình. Skill hoạt động thông qua giao diện hội thoại.

## Phương Pháp Tốt Nhất

**1. Một Câu Hỏi Tại Một Thời Điểm**
Tránh làm quá tải người dùng với 10 câu hỏi từ đầu. Hỏi liên tiếp dựa trên câu trả lời.

**2. Chọn Nhiều Được Ưa Thích**
"Chúng ta nên sử dụng A, B hay C?" dễ trả lời hơn các câu hỏi mở.

**3. Thách Thức Giả Định Xây Dựng**
"Bạn đã xem xét X chưa?" tốt hơn "Điều đó sẽ không hoạt động vì Y".

## Trường Hợp Sử Dụng Phổ Biến

### Trường Hợp Sử Dụng 1: Phiên Thiết Kế Tính Năng
**Tình Huống**: Người dùng muốn thêm "xác thực người dùng" vào ứng dụng.

**Quy Trình Công Việc**:
1. **Khám Phá**: Những phương pháp xác thực nào? (email/mật khẩu, OAuth, SSO?)
2. **Ràng Buộc**: Yêu cầu bảo mật? Nhu cầu tuân thủ?
3. **So Sánh Phương Pháp Tiếp Cận**:
   - Auth0 (turnkey, $25/tháng, phụ thuộc nhà cung cấp)
   - Better Auth (nguồn mở, tự lưu trữ, kiểm soát nhiều hơn)
   - JWT Tùy Chỉnh (kiểm soát đầy đủ, bảo trì cao hơn)
4. **Xác Nhận**: Xem xét kiến trúc của phương pháp tiếp cận được chọn
5. **Tóm Tắt**: Ghi lại quyết định với lý do

**Kết Quả**: Tài liệu thiết kế Markdown sẵn sàng cho lập kế hoạch triển khai.

### Trường Hợp Sử Dụng 2: Đánh Giá Nợ Kỹ Thuật
**Tình Huống**: Hiệu suất monolith suy thoái, xem xét microservices.

**Quy Trình Công Việc**:
1. **Khám Phá**: Những nút cổ chai cụ thể nào? Yêu cầu quy mô?
2. **Các Phương Pháp Thay Thế**:
   - Tối ưu hóa monolith (mở rộng dọc, bộ nhớ cache)
   - Trích xuất các dịch vụ quan trọng (kết hợp)
   - Di chuyển microservices đầy đủ (nỗ lực 3-6 tháng)
3. **Đánh Giá Rủi Ro**: Điều gì có thể sai lầm với mỗi cái?
4. **Khuyến Nghị**: Bắt đầu với tối ưu hóa + trích xuất 1 dịch vụ như bằng chứng khái niệm

**Kết Quả**: Ma trận quyết định với khuyến nghị và bước tiếp theo.

## Khắc Phục Sự Cố

**Vấn Đề**: Phiên bị kẹt, không tiến bộ
**Giải Pháp**: Yêu cầu người dùng làm rõ vấn đề cốt lõi. Đặt lại Giai Đoạn 1 (Khám Phá).

**Vấn Đề**: Người dùng tiếp tục thêm yêu cầu
**Giải Pháp**: Công nhận bổ sung, nhưng tập trung vào MVP đầu tiên. Ghi lại tính năng tốt để-có riêng biệt.

**Vấn Đề**: Cuộc trò chuyện trở nên quá kỹ thuật
**Giải Pháp**: Sử dụng các phép loại suy và ví dụ. Tránh jargon trừ khi người dùng cho thấy quen thuộc.

## Kỹ Năng Liên Quan

- [Planning](/vi/docs/marketing/skills/planning) - Chuyển đổi đầu ra brainstorming thành kế hoạch triển khai
- [Research](/vi/docs/marketing/skills/research) - Nghiên cứu sâu về kỹ thuật
- [Problem Solving](/vi/docs/marketing/skills/problem-solving) - Khung ra quyết định nâng cao

## Lệnh Liên Quan

- `/brainstorm` - Bắt đầu phiên brainstorming
- `/plan` - Tạo kế hoạch từ đầu ra brainstorm
- `/ask` - Câu hỏi chung và lời khuyên
