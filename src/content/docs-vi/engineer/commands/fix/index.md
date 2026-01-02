---
title: /fix
description: Tài liệu hướng dẫn lệnh fix
section: engineer
kit: engineer
category: docs/commands/fix
order: 10
published: true
lang: vi
---

# /fix

Lệnh sửa lỗi thông minh phân tích mô tả vấn đề của bạn và tự động chọn giữa phương pháp nhanh hoặc kỹ lưỡng. Không cần quyết định giữa `/fix:fast` và `/fix:hard` - để ClaudeKit xác định chiến lược tốt nhất.

## Cú pháp

```bash
/fix [mô tả vấn đề]
```

## Cách hoạt động

Lệnh `/fix` định tuyến thông minh yêu cầu của bạn:

### 1. Phân tích vấn đề

- Phân tích độ phức tạp của vấn đề được mô tả
- Đánh giá phạm vi (một file hay nhiều file)
- Đánh giá độ rõ ràng của mô tả vấn đề
- Xác định nguyên nhân gốc rễ có được biết hay không

### 2. Lựa chọn chiến lược

**Chuyển đến `/fix:fast` khi:**
- Vấn đề dễ hiểu và đơn giản
- Vị trí đã biết hoặc dễ xác định
- Sửa đổi tối thiểu (1-2 file)
- Không cần điều tra

**Chuyển đến `/fix:hard` khi:**
- Vấn đề phức tạp hoặc không rõ ràng
- Nhiều thành phần bị ảnh hưởng
- Nguyên nhân gốc rễ chưa biết
- Cần điều tra và lập kế hoạch

### 3. Thực thi nâng cao

- Nâng cao prompt của bạn với ngữ cảnh bổ sung
- Tự động thực thi chiến lược đã chọn
- Cung cấp báo cáo sửa lỗi chi tiết

## Ví dụ nhanh

```bash
/fix [văn bản nút hiển thị "Loggin" thay vì "Login"]
```

**Điều gì xảy ra:**
```
Đang phân tích vấn đề...
→ Lỗi chính tả đơn giản trong UI
→ Vị trí có thể trong component button
→ Dự kiến thay đổi một file

Chiến lược: /fix:fast

Thực thi: /fix:fast [văn bản nút hiển thị "Loggin" thay vì "Login" trong component LoginButton]

Tìm thấy: src/components/LoginButton.tsx:15
Đã sửa: "Loggin" → "Login"
Kiểm thử: ✓ Tất cả đã pass

✓ Hoàn thành (8 giây)
```

## Khi nào sử dụng

### Hoàn hảo cho

**Bất kỳ lỗi hoặc vấn đề nào**
- Để ClaudeKit quyết định phương pháp
- Không lãng phí thời gian phân loại độ phức tạp
- Tin tưởng vào định tuyến thông minh

**Khi không chắc chắn**
```bash
# Không chắc đơn giản hay phức tạp?
/fix [người dùng báo cáo thời gian tải trang chậm]

# ClaudeKit phân tích và chọn phương pháp đúng
```

**Quy trình làm việc nhanh**
```bash
# Chỉ cần mô tả vấn đề
/fix [payment webhook không kích hoạt]

# Không cần nghĩ về chiến lược
```

## Ví dụ đầy đủ

### Ví dụ 1: Vấn đề đơn giản (Chuyển đến /fix:fast)

```bash
/fix [thiếu câu lệnh import cho UserType trong auth.ts]
```

**Phân tích:**
```
Vấn đề: Thiếu import
Phạm vi: Một file
Độ rõ ràng: Cao
Vị trí đã biết: Có

→ Chuyển đến /fix:fast
```

**Kết quả:**
```
Đã sửa trong 6 giây:
- Đã thêm: import { UserType } from './types'
- File: src/auth/auth.ts:3
- Kiểm thử: ✓ Đã pass
```

### Ví dụ 2: Vấn đề phức tạp (Chuyển đến /fix:hard)

```bash
/fix [người dùng đôi khi bị đăng xuất ngẫu nhiên]
```

**Phân tích:**
```
Vấn đề: Đăng xuất không thường xuyên
Phạm vi: Không rõ (session, cookies, hệ thống auth?)
Độ rõ ràng: Thấp (cần điều tra)
Vị trí đã biết: Không

→ Chuyển đến /fix:hard
```

**Kết quả:**
```
Bắt đầu điều tra...

Tìm thấy nguyên nhân gốc:
- Thiếu thuộc tính SameSite của session cookie
- Yêu cầu cross-site làm mất cookies
- Ảnh hưởng 15% người dùng (trình duyệt Safari)

Đã triển khai sửa lỗi:
- Cập nhật cấu hình session
- Thêm thuộc tính SameSite=Lax
- Thêm kiểm thử cho hành vi cookie
- Cập nhật tài liệu

File đã thay đổi: 4
Kiểm thử đã thêm: 8
Thời gian: 4 phút
```

### Ví dụ 3: Vấn đề trung bình (Quyết định thông minh)

```bash
/fix [form validation không hoạt động cho trường email]
```

**Phân tích:**
```
Vấn đề: Validation thất bại
Phạm vi: Có thể 1-2 file (form + validation)
Độ rõ ràng: Trung bình
Vị trí đã biết: Một phần

→ Chuyển đến /fix:fast
```

**Kết quả:**
```
Tìm thấy vấn đề:
- Pattern regex email không chính xác
- Thiếu validation @ domain
- Vị trí: src/utils/validation.ts

Đã sửa:
- Cập nhật pattern regex
- Thêm validation domain
- Cập nhật kiểm thử

✓ Hoàn thành (15 giây)
```

## So sánh với lựa chọn thủ công

### Sử dụng /fix (Khuyến nghị)

```bash
/fix [mô tả bất kỳ vấn đề nào]
```

✅ Lợi ích:
- Không bị liệt quyết định
- Chiến lược tối ưu được chọn tự động
- Tạo prompt nâng cao
- Quy trình làm việc nhanh hơn

### Lựa chọn thủ công

```bash
# Bạn quyết định và thực thi
/fix:fast [vấn đề đơn giản]
/fix:hard [vấn đề phức tạp]
```

⚠️ Nhược điểm:
- Cần đánh giá độ phức tạp
- Rủi ro chọn sai
- Quy trình làm việc chậm hơn
- Không có nâng cao prompt

## Cách lựa chọn chiến lược hoạt động

### /fix:fast được chọn khi

**Dấu hiệu:**
- ✓ Vị trí cụ thể được đề cập
- ✓ Động từ hành động đơn giản (sửa lỗi chính tả, thêm, cập nhật, thay đổi)
- ✓ Ngụ ý một file
- ✓ Mô tả rõ ràng
- ✓ Nguyên nhân đã biết

**Ví dụ:**
```bash
/fix [lỗi chính tả trong thông báo chào mừng]
/fix [thêm dấu chấm phẩy bị thiếu ở dòng 42]
/fix [thay đổi màu nút thành xanh]
/fix [cập nhật timeout API từ 5s lên 10s]
```

### /fix:hard được chọn khi

**Dấu hiệu:**
- ✓ Mô tả mơ hồ hoặc không rõ ràng
- ✓ Động từ điều tra (ngẫu nhiên, đôi khi, thỉnh thoảng)
- ✓ Thuật ngữ toàn hệ thống (tất cả, khắp nơi, toàn bộ)
- ✓ Nhiều thành phần được đề cập
- ✓ Nguyên nhân chưa biết

**Ví dụ:**
```bash
/fix [người dùng báo cáo lỗi]
/fix [có gì đó sai với thanh toán]
/fix [ứng dụng crash không thường xuyên]
/fix [hiệu suất giảm dần theo thời gian]
```

## Nâng cao prompt

`/fix` tự động nâng cao mô tả của bạn trước khi thực thi:

![Fix Prompt Enhancement](/assets/fix-prompt-enhancement.png)

### Đầu vào của bạn
```bash
/fix [đăng nhập bị hỏng]
```

### Prompt đã nâng cao
```
Phân tích và sửa lỗi chức năng đăng nhập.

Ngữ cảnh:
- Vấn đề: Đăng nhập bị hỏng (cần điều tra)
- Phạm vi: Hệ thống xác thực
- Ưu tiên: Cao (chức năng cốt lõi)

Bước điều tra:
1. Kiểm tra luồng xác thực
2. Xác minh API endpoints
3. Xem xét xử lý session
4. Kiểm tra error logs
5. Kiểm thử các kịch bản đăng nhập

Sửa lỗi và xác thực:
- Triển khai giải pháp
- Thêm kiểm thử
- Xác minh sửa lỗi
- Ghi chép thay đổi
```

## Best practices

### Mô tả chi tiết

✅ **Tốt:**
```bash
/fix [email validation chấp nhận email không hợp lệ như "test@"]
```

❌ **Quá mơ hồ:**
```bash
/fix [validation bị hỏng]
```

### Bao gồm ngữ cảnh

✅ **Tốt:**
```bash
/fix [payment webhook trả về lỗi 500 khi Stripe gửi events]
```

❌ **Thiếu ngữ cảnh:**
```bash
/fix [lỗi 500]
```

### Đề cập vị trí nếu biết

✅ **Tốt:**
```bash
/fix [thiếu await trong hàm getUserData trong user.service.ts]
```

❌ **Thiếu vị trí:**
```bash
/fix [thiếu await ở đâu đó]
```

## Các trường hợp sử dụng phổ biến

### Lỗi chính tả và thay đổi văn bản

```bash
/fix [nút hiển thị "Submitt" nên là "Submit"]
/fix [thông báo lỗi có lỗi chính tả: "sucessful"]
/fix [cập nhật năm bản quyền lên 2025]
```

### Lỗi logic

```bash
/fix [tính toán giảm giá hiển thị 15% thay vì 20%]
/fix [validation cho phép các trường bắt buộc để trống]
/fix [quên thêm await trong hàm async]
```

### Vấn đề cấu hình

```bash
/fix [timeout API quá ngắn, gây lỗi]
/fix [CORS không cho phép localhost:3000]
/fix [biến môi trường không được tải]
```

### Vấn đề không rõ ràng

```bash
/fix [người dùng báo cáo hiệu suất chậm]
/fix [thanh toán đôi khi thất bại]
/fix [vấn đề xác thực trên mobile]
```

## Tích hợp với kế hoạch hiện có

Nếu đã có kế hoạch triển khai markdown:

```bash
# Thay vì /fix, sử dụng:
/code [path/to/plan.md]

# /fix dùng cho vấn đề không có kế hoạch sẵn
```

## Đầu ra

Bạn sẽ thấy:

```
Đang phân tích: [mô tả vấn đề của bạn]

Đánh giá độ phức tạp:
- Phạm vi: Một file / Nhiều file
- Độ rõ ràng: Cao / Trung bình / Thấp
- Cần điều tra: Có / Không

Chiến lược đã chọn: /fix:fast | /fix:hard

Đang thực thi với prompt đã nâng cao...

[Kết quả sửa lỗi]

✓ Hoàn thành
```

## Lệnh liên quan

- [/fix:fast](/docs-vi/commands/fix/fast) - Sửa lỗi nhanh (tự động chọn)
- [/fix:hard](/docs-vi/commands/fix/hard) - Sửa lỗi phức tạp (tự động chọn)
- [/fix:ci](/docs-vi/commands/fix/ci) - Sửa lỗi CI
- [/fix:logs](/docs-vi/commands/fix/logs) - Sửa lỗi từ logs
- [/fix:ui](/docs-vi/commands/fix/ui) - Sửa lỗi UI
- [/fix:types](/docs-vi/commands/fix/types) - Sửa lỗi type
- [/debug](/docs-vi/commands/core/debug) - Điều tra vấn đề
- [/code](/docs-vi/commands/core/code) - Triển khai kế hoạch hiện có

## Khắc phục sự cố

### Chiến lược sai được chọn

**Vấn đề:** `/fix` chọn `/fix:fast` nhưng vấn đề phức tạp

**Giải pháp:**
```bash
# Ghi đè bằng cách gọi trực tiếp
/fix:hard [mô tả vấn đề của bạn]
```

### Cần kiểm soát nhiều hơn

**Vấn đề:** Muốn tự kiểm soát phương pháp

**Giải pháp:**
```bash
# Gọi chiến lược trực tiếp
/fix:fast [cho vấn đề đơn giản]
/fix:hard [cho vấn đề phức tạp]
```

### Kế hoạch đã tồn tại

**Vấn đề:** Đã có kế hoạch triển khai

**Giải pháp:**
```bash
# Sử dụng /code thay thế
/code [path/to/plan.md]
```

---

**Điểm chính**: `/fix` là trợ lý sửa lỗi thông minh của bạn. Chỉ cần mô tả vấn đề - ClaudeKit phân tích độ phức tạp và tự động chọn chiến lược sửa lỗi tối ưu, tiết kiệm thời gian và công sức suy nghĩ.
