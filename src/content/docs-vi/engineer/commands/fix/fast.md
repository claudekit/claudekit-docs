---
title: /fix:fast
description: Tài liệu hướng dẫn lệnh fix:fast
section: engineer
kit: engineer
category: docs/commands/fix
order: 20
published: true
lang: vi
---

# /fix:fast

Sửa các lỗi nhỏ và vấn đề một cách nhanh chóng. Lệnh này bỏ qua việc phân tích và lập kế hoạch codebase sâu rộng, đi thẳng vào việc triển khai và thử nghiệm. Hoàn hảo cho các bản sửa lỗi đơn giản khi bạn biết chính xác những gì cần phải thực hiện.

## Cú Pháp

```bash
/fix:fast [mô tả lỗi]
```

## Cách Hoạt Động

Lệnh `/fix:fast` tuân theo một quy trình làm việc tinh giản:

### 1. Phân Tích Nhanh

- Đọc mô tả lỗi
- Xác định vị trí có khả năng xảy ra lỗi từ mô tả
- Quét codebase ở mức tối thiểu

### 2. Triển Khai Trực Tiếp

- Triển khai bản sửa lỗi ngay lập tức
- Không có giai đoạn lập kế hoạch chi tiết
- Tuân theo các mẫu (patterns) hiện có

### 3. Thử Nghiệm

- Chạy các bài kiểm tra liên quan
- Xác nhận bản sửa lỗi hoạt động đúng
- Kiểm tra các lỗi phát sinh (regressions)

### 4. Báo Cáo Tóm Tắt

- Các tệp đã thay đổi
- Trạng thái các bài kiểm tra
- Mức độ tin cậy

## Khi Nào Nên Sử Dụng

### ✅ Hoàn Hảo Cho

**Lỗi Đánh Máy Đơn Giản**
```bash
/fix:fast [lỗi đánh máy trong thông báo lỗi: "sucessful" nên là "successful"]
```

**Các Vấn Đề UI Nhỏ**
```bash
/fix:fast [văn bản nút hiển thị "Submitt" thay vì "Submit"]
```

**Sửa Logic Đơn Giản**
```bash
/fix:fast [xác thực cho phép để trống trường email trong khi nó là bắt buộc]
```

**Cập Nhật Cấu Hình**
```bash
/fix:fast [cập nhật giới hạn tốc độ API từ 100 lên 200 yêu cầu mỗi phút]
```

**Các Lỗi Hiển Nhiên**
```bash
/fix:fast [quên thêm từ khóa await trước truy vấn cơ sở dữ liệu trong trình xử lý đăng nhập]
```

### ❌ Không Sử Dụng Cho

**Các Vấn Đề Phức Tạp**
```bash
❌ /fix:fast [người dùng thỉnh thoảng bị đăng xuất ngẫu nhiên]
✅ /fix:hard [người dùng thỉnh thoảng bị đăng xuất ngẫu nhiên]
```

**Các Vấn Đề Toàn Hệ Thống**
```bash
❌ /fix:fast [rò rỉ bộ nhớ gây ra treo ứng dụng]
✅ /fix:hard [rò rỉ bộ nhớ gây ra treo ứng dụng]
```

**Chưa Biết Nguyên Nhân Gốc Rễ**
```bash
❌ /fix:fast [có gì đó bị hỏng với phần thanh toán]
✅ /fix:hard [xử lý thanh toán thất bại với lỗi không rõ ràng]
```

**Nhiều Vấn Đề Liên Quan**
```bash
❌ /fix:fast [hệ thống xác thực có nhiều vấn đề]
✅ /fix:hard [hệ thống xác thực có nhiều vấn đề]
```

## Ví Dụ

### Sửa Lỗi Đánh Máy

```bash
/fix:fast [sửa lỗi đánh máy trong thông báo chào mừng: "Welcom" nên là "Welcome"]
```

**Điều gì xảy ra:**
```
1. Xác định vị trí thông báo chào mừng
   - Tìm thấy tại: src/components/Welcome.tsx

2. Sửa lỗi đánh máy
   - Thay đổi: "Welcom to our app"
   - Thành: "Welcome to our app"

3. Chạy các bài kiểm tra
   - Kiểm tra UI: ✓ passed
   - Kiểm tra tích hợp: ✓ passed

✓ Hoàn thành sửa lỗi (12 giây)
```

### Sửa Lỗi Xác Thực

```bash
/fix:fast [xác thực email chấp nhận các email không hợp lệ như "test@"]
```

**Điều gì xảy ra:**
```
1. Xác định vị trí hàm xác thực
   - Tìm thấy tại: src/utils/validation.js

2. Cập nhật mẫu regex
   - Cũ: /^[^\\s@]+@[^\\s@]+$/
   - Mới: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/

3. Chạy các bài kiểm tra xác thực
   - test("test@" bị từ chối): ✓ passed
   - test("test@domain.com" được chấp nhận): ✓ passed
   - Tất cả 15 bài kiểm tra đã vượt qua

✓ Hoàn thành sửa lỗi (18 giây)
```

### Thiếu Await

```bash
/fix:fast [quên await trong hàm getUserData gây ra Promise<User> thay vì User]
```

**Điều gì xảy ra:**
```
1. Xác định vị trí hàm
   - Tìm thấy tại: src/services/user.service.ts:45

2. Thêm từ khóa await
   - const user = db.getUser(id)
   - const user = await db.getUser(id)

3. Kiểm tra kiểu TypeScript
   - Kiểu hiện đã được giải quyết chính xác thành User
   - Không còn lỗi Promise<User>

4. Chạy các bài kiểm tra
   - Tất cả các bài kiểm tra đã vượt qua

✓ Hoàn thành sửa lỗi (9 giây)
```

### Cập Nhật Cấu Hình

```bash
/fix:fast [tăng thời gian chờ phiên làm việc từ 15 phút lên 30 phút]
```

**Điều gì xảy ra:**
```
1. Xác định vị trí cấu hình
   - Tìm thấy tại: config/session.ts

2. Cập nhật giá trị
   - sessionTimeout: 15 * 60 * 1000
   - sessionTimeout: 30 * 60 * 1000

3. Xác minh cấu hình
   - Cấu hình tải chính xác
   - Các bài kiểm tra vượt qua

✓ Hoàn thành sửa lỗi (7 giây)
```

## So Sánh Tốc Độ

### /fix:fast so với /fix:hard

**Lỗi đánh máy đơn giản:**
```
/fix:fast:  10-20 giây
/fix:hard:  2-3 phút (không cần thiết các bước dư thừa)
```

**Lỗi phức tạp:**
```
/fix:fast:  Có thể tạo ra bản sửa lỗi không đầy đủ
/fix:hard:  5-10 phút (điều tra đúng quy trình)
```

**Quy tắc chung:**
- Biết chính xác cách sửa? → `/fix:fast`
- Cần điều tra? → `/fix:hard`

## Những Gì Bị Bỏ Qua

Để tiết kiệm thời gian, `/fix:fast` bỏ qua:

1. **Quét Codebase Sâu Rộng**
   - Không triển khai các scout agent
   - Chỉ tìm kiếm ở các vị trí hiển nhiên

2. **Giai Đoạn Lập Kế Hoạch**
   - Không tạo kế hoạch chi tiết
   - Đi thẳng vào triển khai

3. **Nghiên Cứu**
   - Không nghiên cứu internet
   - Không tra cứu tài liệu
   - Chỉ sử dụng kiến thức hiện có

4. **Phân Tích Nguyên Nhân Gốc Rễ**
   - Sửa triệu chứng, không nhất thiết là nguyên nhân gốc rễ
   - Giả định mô tả của bạn là chính xác

## Thực Hành Tốt Nhất

### Cung Cấp Vị Trí Chính Xác

✅ **Có vị trí:**
```bash
/fix:fast [trong tệp src/auth/login.ts dòng 45, đổi timeout từ 5000 thành 10000]
```

❌ **Không có vị trí:**
```bash
/fix:fast [đổi một cái timeout ở đâu đó]
```

### Cụ Thể Về Bản Sửa Lỗi

✅ **Cụ thể:**
```bash
/fix:fast [văn bản nút "Loggin" trong LoginButton.tsx nên là "Login"]
```

❌ **Mơ hồ:**
```bash
/fix:fast [sửa văn bản nút]
```

### Xác Minh Phạm Vi Đơn Giản

Trước khi sử dụng `/fix:fast`, hãy tự hỏi:
- Tôi có biết chính xác những gì cần thay đổi không?
- Nó nằm trong một hoặc hai tệp?
- Bản sửa lỗi có tốn ít hơn 5 dòng mã không?
- Tôi có tự tin rằng điều này sẽ không làm hỏng bất cứ thứ gì không?

Nếu có cho tất cả → Sử dụng `/fix:fast`
Nếu không cho bất kỳ câu nào → Sử dụng `/fix:hard`

## Các Trường Hợp Sử Dụng Phổ Biến

### Lỗi Đánh Máy Trong Mã Nguồn

```bash
/fix:fast [tên biến "usreName" nên là "userName" trong profile.service.ts]
```

### Các Câu Lệnh Import

```bash
/fix:fast [thiếu import cho kiểu User trong auth.controller.ts]
```

### Các Tính Toán Đơn Giản

```bash
/fix:fast [tính toán chiết khấu đang hiển thị 15% thay vì 20%, cập nhật trong checkout.ts]
```

### Cập Nhật Văn Bản

```bash
/fix:fast [cập nhật năm bản quyền từ 2023 thành 2024 trong footer]
```

### Các Câu Điều Kiện Đơn Giản

```bash
/fix:fast [đảo ngược điều kiện: if (isDisabled) nên là if (!isDisabled) trong SubmitButton]
```

### Các Giá Trị Mặc Định

```bash
/fix:fast [thay đổi kích thước trang mặc định từ 10 thành 20 trong cấu hình phân trang]
```

## Xử Lý Lỗi

Nếu `/fix:fast` không thể hoàn thành bản sửa lỗi:

```
⚠ Cảnh báo: Bản sửa lỗi có thể phức tạp hơn dự kiến

Các cân nhắc:
- Nhiều tệp bị ảnh hưởng
- Vị trí không rõ ràng
- Có thể yêu cầu phân tích sâu hơn

Khuyến nghị: Sử dụng /fix:hard thay thế

Vẫn tiếp tục với /fix:fast? (y/n)
```

Bạn có thể:
1. **Tiếp tục (Continue)** - Thử sửa dù sao đi nữa
2. **Hủy (Cancel)** - Chuyển sang `/fix:hard`

## Sau Khi Sửa Lỗi

Quy trình làm việc tiêu chuẩn sau `/fix:fast`:

```bash
# 1. Bản sửa lỗi đã được áp dụng
/fix:fast [lỗi đánh máy văn bản nút]

# 2. Xem lại các thay đổi
git diff

# 3. Chạy toàn bộ bộ kiểm tra (tùy chọn)
/test

# 4. Commit nếu hài lòng
/git:cm
```

## Xử Lý Sự Cố

### Bản Sửa Lỗi Không Hoạt Động

**Vấn đề:** Vấn đề vẫn xảy ra sau khi sửa

**Giải pháp:**
```bash
# Vấn đề có thể phức tạp hơn
/fix:hard [mô tả lại vấn đề với nhiều chi tiết hơn]
```

### Sai Vị Trí

**Vấn đề:** Đã sửa sai tệp/vị trí

**Giải pháp:**
```bash
# Cung cấp đường dẫn tệp chính xác
/fix:fast [trong src/correct/file.ts dòng 42, sửa vấn đề thực tế]
```

### Các Bài Kiểm Tra Thất Bại

**Vấn đề:** Bản sửa lỗi làm hỏng các bài kiểm tra hiện có

**Giải pháp:**
```bash
# Điều tra lý do tại sao các bài kiểm tra thất bại
/debug [thất bại bài kiểm tra sau khi sửa X]

# Hoặc hoàn tác và sử dụng phương pháp kỹ lưỡng
git restore .
/fix:hard [mô tả vấn đề ban đầu]
```

### Bản Sửa Lỗi Không Đầy Đủ

**Vấn đề:** Bản sửa lỗi hoạt động nhưng cảm thấy chưa đầy đủ

**Giải pháp:**
```bash
# Thêm các cải tiến tiếp theo
/cook [cải thiện X với tính năng Y]
```

## Số Liệu

Hiệu suất điển hình của `/fix:fast`:

- **Thời gian**: 5-30 giây
- **Số tệp thay đổi**: 1-2
- **Độ bao phủ kiểm tra**: Chỉ các bài kiểm tra hiện có
- **Tỷ lệ thành công**: ~95% cho các vấn đề đơn giản

So sánh với `/fix:hard`:

- **Thời gian**: 2-10 phút
- **Số tệp thay đổi**: 1-10+
- **Độ bao phủ kiểm tra**: Các bài kiểm tra mới được tạo ra
- **Tỷ lệ thành công**: ~99% cho tất cả các vấn đề

## Bước Tiếp Theo

Sau khi sử dụng `/fix:fast`:

- [/test](/docs/engineer/commands/core/test) - Chạy toàn bộ bộ kiểm tra
- [/fix:hard](/docs/engineer/commands/fix/hard) - Cho các vấn đề phức tạp
- [/git:cm](/docs/engineer/commands/git/commit) - Commit bản sửa lỗi
- [/debug](/docs/engineer/commands/core/debug) - Nếu vấn đề vẫn tiếp diễn

---

**Điểm mấu chốt**: `/fix:fast` hoàn hảo cho các bản sửa lỗi đơn giản, đã được hiểu rõ khi mà tốc độ là ưu tiên hàng đầu. Đối với bất kỳ điều gì phức tạp hoặc chưa rõ ràng, hãy sử dụng `/fix:hard` thay thế.
