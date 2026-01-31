---
title: /fix --parallel
description: Sửa nhiều lỗi độc lập đồng thời sử dụng agent fullstack-developer song song để giải quyết nhanh hơn
section: engineer
kit: engineer
category: docs/commands/fix
order: 10
published: true
lang: vi
---

# /fix --parallel

Lệnh sửa lỗi song song. Giải quyết nhiều lỗi độc lập đồng thời bằng cách khởi chạy các agent fullstack-developer song song, mỗi agent xử lý một lỗi.

## Cú pháp

```bash
/fix --parallel [các vấn đề]
```

## Khi nào sử dụng

- **Nhiều lỗi không liên quan**: 2+ lỗi không ảnh hưởng đến cùng một tệp
- **Sửa lỗi độc lập**: Lỗi không cần ngữ cảnh chung
- **Cấp bách về thời gian**: Cần nhiều bản sửa lỗi nhanh chóng
- **Sửa lỗi hàng loạt**: Xử lý danh sách các lỗi nhỏ tồn đọng

## Ví dụ nhanh

```bash
/fix --parallel [
1. Nút không thể nhấp trên di động
2. Timeout API tại endpoint /users
3. Lỗi đánh máy trong phần bản quyền ở footer
]
```

**Kết quả**:
```
Đang phân tích các vấn đề...
Tìm thấy 3 vấn đề cần sửa

Đang xác minh tính độc lập...
✓ Vấn đề 1: src/components/Button.tsx
✓ Vấn đề 2: src/api/users.ts
✓ Vấn đề 3: src/components/Footer.tsx
Không phát hiện xung đột tệp.

Đang khởi chạy 3 agent song song...

Agent 1: Đang sửa nút trên di động...
Agent 2: Đang sửa lỗi timeout API...
Agent 3: Đang sửa lỗi đánh máy ở footer...

Tiến độ:
[██████████] Agent 3: Hoàn thành (12 giây)
[██████████] Agent 1: Hoàn thành (28 giây)
[██████████] Agent 2: Hoàn thành (45 giây)

Tất cả các agent đã hoàn thành.

Tóm tắt:
✓ Vấn đề 1: Đã sửa - Thêm trình xử lý sự kiện chạm
✓ Vấn đề 2: Đã sửa - Tăng thời gian chờ lên 30 giây
✓ Vấn đề 3: Đã sửa - Đổi "Copywrite" thành "Copyright"

Tổng thời gian: 45 giây (so với khoảng 90 giây nếu chạy tuần tự)
```

## Tham số

- `[các vấn đề]`: Danh sách các lỗi cần sửa (bắt buộc). Sử dụng định dạng đánh số hoặc gạch đầu dòng.

## Định dạng danh sách lỗi

### Danh sách đánh số

```bash
/fix --parallel [
1. Nút không phản hồi trên Safari
2. Trình chọn ngày hiển thị sai múi giờ
3. Kết quả tìm kiếm không phân trang
]
```

### Danh sách gạch đầu dòng

```bash
/fix --parallel [
- Thiếu biểu tượng tải khi gửi form
- Sai ký hiệu tiền tệ cho EUR
- Liên kết bị hỏng trong thanh điều hướng
]
```

### Định dạng trên cùng một dòng

```bash
/fix --parallel [sửa menu di động; sửa regex xác thực email; sửa căn lề footer]
```

## Quy trình hoạt động

### Bước 1: Phân tích lỗi

Trích xuất các lỗi riêng lẻ từ đầu vào:

```
Đầu vào: "1. Lỗi nút 2. Lỗi API 3. Lỗi đánh máy"
Kết quả phân tích:
- Vấn đề 1: Lỗi nút
- Vấn đề 2: Lỗi API
- Vấn đề 3: Lỗi đánh máy
```

### Bước 2: Xác nhận tính độc lập

Kiểm tra xem các lỗi có ảnh hưởng đến cùng một tệp hay không:

```
Đang phân tích các phụ thuộc tệp...

Vấn đề 1: Có khả năng ảnh hưởng đến src/components/Button.tsx
Vấn đề 2: Có khả năng ảnh hưởng đến src/api/endpoints.ts
Vấn đề 3: Có khả năng ảnh hưởng đến src/components/Footer.tsx

Kiểm tra chồng chéo: Không phát hiện ✓
Các vấn đề là độc lập.
```

### Bước 3: Khởi chạy agent song song

Tạo một agent fullstack-developer cho mỗi lỗi:

```
Đang khởi chạy các agent...

Agent 1: fullstack-developer → Vấn đề 1
Agent 2: fullstack-developer → Vấn đề 2
Agent 3: fullstack-developer → Vấn đề 3

Tất cả các agent đang chạy song song.
```

### Bước 4: Theo dõi tiến độ

Theo dõi từng agent với thời gian chờ (10 phút cho mỗi agent):

```
Tiến độ:
[████████──] Agent 1: Đang điều tra... (15 giây)
[██████████] Agent 2: Hoàn thành (22 giây)
[██████────] Agent 3: Đang triển khai bản sửa lỗi... (18 giây)
```

### Bước 5: Tổng hợp kết quả

Thu thập kết quả từ tất cả các agent:

```
Kết quả thu thập được:
- Agent 1: Thành công - 1 tệp thay đổi
- Agent 2: Thành công - 2 tệp thay đổi
- Agent 3: Thành công - 1 tệp thay đổi

Tổng cộng: 4 tệp đã thay đổi
```

### Bước 6: Báo cáo tóm tắt

Cung cấp báo cáo sửa lỗi tổng hợp:

```
═══════════════════════════════════════
        TÓM TẮT SỬA LỖI SONG SONG
═══════════════════════════════════════

Vấn đề 1: Nút không phản hồi trên Safari
Trạng thái: ✓ Đã sửa
Tệp: src/components/Button.tsx
Thay đổi: Thêm -webkit-tap-highlight-color

Vấn đề 2: Trình chọn ngày sai múi giờ
Trạng thái: ✓ Đã sửa
Tệp: src/utils/date.ts, src/components/DatePicker.tsx
Thay đổi: Thêm chuẩn hóa múi giờ

Vấn đề 3: Phân trang tìm kiếm bị hỏng
Trạng thái: ✓ Đã sửa
Tệp: src/hooks/useSearch.ts
Thay đổi: Sửa công thức tính offset

───────────────────────────────────────
Tổng thời gian: 45 giây
Ước tính chạy tuần tự: ~2 phút
Tốc độ tăng: 2.7 lần
═══════════════════════════════════════
```

## Ví dụ đầy đủ

### Kịch bản: Dọn dẹp cuối giai đoạn (Sprint)

```bash
/fix --parallel [
1. Trạng thái vô hiệu hóa của nút đăng nhập không hiển thị
2. Ảnh đại diện không tải cho người dùng mới
3. Gợi ý tìm kiếm không đóng khi mất tiêu điểm (blur)
4. Các liên kết mạng xã hội ở footer trỏ sai URL
]
```

**Thực thi**:

```
Đang phân tích các vấn đề...
Tìm thấy 4 vấn đề

Đang xác minh tính độc lập...
Vấn đề 1: src/components/auth/LoginButton.tsx
Vấn đề 2: src/components/profile/Avatar.tsx
Vấn đề 3: src/components/search/Autocomplete.tsx
Vấn đề 4: src/components/layout/Footer.tsx

Không có tệp chồng chéo ✓

Đang khởi chạy 4 agent song song...

[Agent 1] LoginButton: Đang điều tra trạng thái vô hiệu hóa...
[Agent 2] Avatar: Đang kiểm tra logic tải ảnh...
[Agent 3] Autocomplete: Đang phân tích hành vi blur...
[Agent 4] Footer: Đang xem xét các liên kết mạng xã hội...

Tiến độ:
[██████████] Agent 4: Hoàn thành (8 giây)
[██████████] Agent 1: Hoàn thành (15 giây)
[██████████] Agent 3: Hoàn thành (22 giây)
[██████████] Agent 2: Hoàn thành (35 giây)

═══════════════════════════════════════
               KẾT QUẢ
═══════════════════════════════════════

✓ Vấn đề 1: Đã sửa ràng buộc prop disabled
✓ Vấn đề 2: Thêm phương án dự phòng cho avatar bị thiếu
✓ Vấn đề 3: Thêm trình xử lý onBlur với độ trễ
✓ Vấn đề 4: Cập nhật các URL mạng xã hội

Số tệp thay đổi: 4
Kiểm tra vượt qua: ✓
Tổng thời gian: 35 giây
═══════════════════════════════════════
```

## Phát hiện phụ thuộc

Nếu các lỗi chia sẻ cùng một tệp, `/fix --parallel` sẽ chuyển hướng sang `/fix:hard`:

```bash
/fix --parallel [
1. Token xác thực không làm mới
2. Chuyển hướng đăng nhập bị hỏng
]
```

```
Đang xác minh tính độc lập...

Vấn đề 1: Có khả năng ảnh hưởng đến src/auth/token.ts, src/auth/session.ts
Vấn đề 2: Có khả năng ảnh hưởng đến src/auth/login.ts, src/auth/session.ts

⚠️ Phát hiện chồng chéo: src/auth/session.ts

Các vấn đề không độc lập.
→ Đang chuyển hướng sang /fix:hard thay thế

Cả hai vấn đề có thể chia sẻ cùng ngữ cảnh trong auth/session.ts.
Khuyến nghị sửa lỗi tuần tự để đảm bảo tính nhất quán.
```

## Giới hạn

### Số lượng agent tối đa

```
Số agent song song tối đa: 5
```

Nếu có nhiều hơn 5 lỗi, chúng sẽ được chia thành các đợt (waves):

```
Tìm thấy 8 vấn đề

Đợt 1 (song song): Vấn đề 1-5
Đợt 2 (song song): Vấn đề 6-8

Đang thực thi Đợt 1...
```

### Yêu cầu về tính độc lập

Các lỗi không được phép thay đổi cùng một tệp:

```
✓ Độc lập: Sửa nút + Sửa API + Sửa Footer
✗ Phụ thuộc: Sửa xác thực + Sửa phiên làm việc (chia sẻ module auth)
```

### Thời gian chờ (Timeout)

Mỗi agent có thời gian chờ tối đa là 10 phút:

```
Thời gian chờ của agent: 10 phút

Agent 3 đã hết thời gian chờ.
Đã thu thập kết quả một phần.
```

## Thực hành tốt nhất

### Nhóm các lỗi liên quan ở nơi khác

```bash
# Không tốt: Các lỗi có liên quan đến nhau
/fix --parallel [
1. Token xác thực hết hạn
2. Phiên làm việc không được duy trì
]

# Tốt: Sử dụng /fix:hard cho các lỗi có liên quan
/fix:hard [lỗi token xác thực hết hạn và phiên làm việc không được duy trì]
```

### Mô tả lỗi cụ thể

```bash
# Tốt: Cụ thể, có thể thực hiện được ngay
/fix --parallel [
1. Màu nút sai khi di chuột qua (nên là #2563eb)
2. Thiếu aria-label cho ô nhập tìm kiếm
3. Bản quyền ở footer vẫn ghi năm 2024
]

# Không tốt: Mơ hồ
/fix --parallel [
1. Giao diện trông hơi sai
2. Vấn đề về khả năng tiếp cận
3. Cập nhật footer
]
```

### Không vượt quá 5 lỗi một lúc

```bash
# Tối ưu: 2-5 lỗi
/fix --parallel [
1. Vấn đề thứ nhất
2. Vấn đề thứ hai
3. Vấn đề thứ ba
]

# Quá nhiều: Nên chia thành nhiều lần chạy
/fix --parallel [1-5]
/fix --parallel [6-10]
```

## Khi nào KHÔNG nên sử dụng

### Các lỗi có liên quan

Các lỗi ảnh hưởng đến phần mã nguồn chung:

```bash
# Không dùng parallel cho:
- Token xác thực + Xử lý phiên làm việc (chia sẻ mã nguồn auth)
- Truy vấn DB + Connection pool (chia sẻ lớp DB)
- API route + Middleware (chia sẻ luồng yêu cầu)

# Sử dụng thay thế:
/fix:hard [mô tả các vấn đề liên quan cùng nhau]
```

### Điều tra phức tạp

Các lỗi cần phân tích sâu:

```bash
# Không dùng parallel cho:
- "Ứng dụng bị treo ngẫu nhiên" (cần điều tra)
- "Hiệu suất bị giảm sút" (cần đo đạc hiệu năng)

# Sử dụng thay thế:
/fix:hard [vấn đề cần điều tra kỹ]
```

## Các lệnh liên quan

- [/fix](/vi/docs/engineer/commands/fix) - Định tuyến thông minh (có thể định tuyến đến đây)
- [/fix:fast](/vi/docs/engineer/commands/fix/fast) - Cho một lỗi đơn giản duy nhất
- [/fix:hard](/vi/docs/engineer/commands/fix/hard) - Cho lỗi phức tạp hoặc các lỗi có liên quan
- [/code:parallel](/vi/docs/engineer/commands/core/code-parallel) - Thực thi kế hoạch song song
- [/cook:auto:parallel](/vi/docs/engineer/commands/core/cook-auto-parallel) - Triển khai tính năng song song

---

**Điểm mấu chốt**: `/fix --parallel` tăng tốc quá trình sửa lỗi bằng cách giải quyết nhiều lỗi độc lập cùng một lúc. Hãy cung cấp danh sách các lỗi không liên quan, và các agent song song sẽ xử lý chúng đồng thời để mang lại kết quả nhanh hơn.
