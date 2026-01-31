---
title: /fix
description: Tài liệu hướng dẫn lệnh fix:hard
section: engineer
kit: engineer
category: docs/commands/fix
order: 21
published: true
lang: vi
---

# /fix

Sửa các lỗi phức tạp thông qua việc điều tra kỹ lưỡng và phân tích nguyên nhân gốc rễ. Lệnh này triển khai nhiều agent để quét codebase, nghiên cứu giải pháp, tạo kế hoạch sửa lỗi chi tiết và triển khai kèm theo thử nghiệm toàn diện.

## Cú Pháp

```bash
/fix [mô tả vấn đề]
```

## Cách Hoạt Động

Lệnh `/fix` tuân theo một quy trình gỡ lỗi (debugging) toàn diện:

### 1. Phân Tích Codebase (Giai đoạn Scout)

- Triển khai nhiều scout agent song song
- Quét toàn bộ codebase để tìm mã nguồn liên quan
- Xác định tất cả các tệp tin có liên quan
- Lập sơ đồ các phụ thuộc và mối quan hệ

### 2. Phân Tích Nguyên Nhân Gốc Rễ

- Gọi agent **debugger**
- Phân tích nhật ký (logs) và dấu vết lỗi (error traces)
- Xác định các nguyên nhân cơ bản
- Phân biệt giữa các triệu chứng và nguyên nhân gốc rễ

### 3. Giai Đoạn Nghiên Cứu

- Tìm kiếm các thực hành tốt nhất (best practices)
- Xem lại các vấn đề tương tự trong tài liệu
- Kiểm tra các giải pháp đã biết
- Xác định các cạm bẫy tiềm tàng

### 4. Lập Kế Hoạch

- Tạo chiến lược sửa lỗi chi tiết
- Lập kế hoạch các bước triển khai
- Xác định các tình huống kiểm tra (test scenarios)
- Tài liệu hóa phương pháp tiếp cận

### 5. Triển Khai

- Triển khai bản sửa lỗi theo kế hoạch
- Xử lý các trường hợp biên (edge cases)
- Thêm xử lý lỗi (error handling)
- Cập nhật mã nguồn liên quan

### 6. Thử Nghiệm Toàn Diện

- Tạo các bài kiểm tra mới
- Chạy toàn bộ bộ kiểm tra
- Xác minh các trường hợp biên
- Kiểm tra các lỗi phát sinh (regressions)

## Khi Nào Nên Sử Dụng

### ✅ Sử dụng /fix cho:

**Các Lỗi Phức Tạp**
```bash
/fix [người dùng thỉnh thoảng bị đăng xuất sau 5-10 phút hoạt động]
```

**Các Vấn Đề Toàn Hệ Thống**
```bash
/fix [rò rỉ bộ nhớ trong các kết nối WebSocket gây ra treo máy chủ]
```

**Các Vấn Đề Không Liên Tục**
```bash
/fix [xảy ra tình trạng database deadlock khi tải cao]
```

**Nhiều Vấn Đề Liên Quan**
```bash
/fix [hệ thống xác thực gặp vấn đề với xử lý phiên, làm mới token và đăng xuất]
```

**Chưa Biết Nguyên Nhân Gốc Rễ**
```bash
/fix [API thỉnh thoảng trả về lỗi 500 nhưng nhật ký không hiển thị gì cả]
```

**Các Vấn Đề Về Hiệu Suất**
```bash
/fix [thời gian tải trang tăng từ 200ms lên 3s sau những thay đổi gần đây]
```

## Ví Dụ

### Lỗi Xác Thực Phức Tạp

```bash
/fix [người dùng bị đăng xuất ngẫu nhiên, có vẻ xảy ra nhiều hơn trên thiết bị di động, nhật ký lỗi hiển thị "invalid token" nhưng token trông có vẻ hợp lệ]
```

**Điều gì xảy ra:**
```
1. Giai đoạn Scout (3 agent song song)
   Agent 1: Quét các tệp auth/*
   Agent 2: Quét các tệp middleware/*
   Agent 3: Quét các tệp session/*

   Tìm thấy:
   - src/auth/token.service.ts
   - src/middleware/auth.middleware.ts
   - src/services/session.service.ts
   - config/jwt.config.ts

2. Phân tích nguyên nhân gốc rễ
   Debugger Agent đang phân tích...

   Kết quả:
   - Token hết hạn được đặt là 15 phút
   - Ứng dụng di động không chủ động làm mới token
   - Endpoint làm mới token có tình trạng tranh chấp (race condition)
   - Việc dọn dẹp phiên chạy mỗi 10 phút

   Nguyên nhân gốc rễ: Tình trạng tranh chấp giữa việc dọn dẹp phiên
   và làm mới token khi các yêu cầu bị chồng chéo

3. Nghiên cứu
   Researcher Agent: Đang tìm kiếm các thực hành tốt nhất...

   Tìm thấy:
   - Các mẫu làm mới token cho thiết bị di động
   - Các chiến lược ngăn chặn tình trạng tranh chấp
   - Các thực hành tốt nhất về quản lý phiên

4. Kế hoạch sửa lỗi được tạo
   Kế hoạch: plans/fix-token-race-condition.md

   Các bước:
   1. Thêm mutex vào endpoint làm mới token
   2. Triển khai exponential backoff trong ứng dụng di động
   3. Kéo dài thời gian hết hạn token lên 30 phút
   4. Thêm xoay vòng token làm mới (refresh token rotation)
   5. Cập nhật logic dọn dẹp phiên
   6. Thêm nhật ký (logging) toàn diện

5. Triển khai
   Các tệp đã chỉnh sửa:
   ✓ src/auth/token.service.ts (đã thêm mutex)
   ✓ src/middleware/auth.middleware.ts (ghi nhật ký)
   ✓ src/services/session.service.ts (logic dọn dẹp)
   ✓ config/jwt.config.ts (kéo dài thời gian hết hạn)

   Các tệp đã tạo:
   ✓ src/auth/token-mutex.ts
   ✓ tests/auth/token-race-condition.test.ts

6. Thử nghiệm
   Các bài kiểm tra mới: 25 bài được tạo
   - Tình trạng tranh chấp làm mới token: ✓
   - Các yêu cầu đồng thời: ✓
   - Dọn dẹp phiên trong khi làm mới: ✓
   - Hết hạn token di động: ✓

   Tất cả 87 bài kiểm tra đã vượt qua
   Độ bao phủ: 94%

✓ Hoàn thành sửa lỗi (8 phút)
```

### Điều Tra Rò Rỉ Bộ Nhớ

```bash
/fix [bộ nhớ máy chủ tăng liên tục, cuối cùng bị treo sau 6-8 giờ]
```

**Điều gì xảy ra:**
```
1. Scout + Phân tích
   Đang quét để tìm:
   - Các trình lắng nghe sự kiện (Event listeners)
   - Các kết nối cơ sở dữ liệu
   - Các trình xử lý WebSocket
   - Việc triển khai Cache

   Tìm thấy các khu vực khả nghi:
   - src/websocket/connection-manager.ts
   - src/cache/redis-client.ts
   - src/events/event-bus.ts

2. Phân tích nguyên nhân gốc rễ
   Debugger Agent đang đo hiệu năng (profiling)...

   Kết quả đo bộ nhớ cho thấy:
   - Các kết nối WebSocket không được dọn dẹp
   - Các trình lắng nghe sự kiện bị tích tụ
   - Các client Redis không được quản lý tập trung (pooling) đúng cách

   Nguyên nhân gốc rễ: Trình xử lý ngắt kết nối WebSocket không
   gỡ bỏ các trình lắng nghe sự kiện, gây ra rò rỉ bộ nhớ

3. Nghiên cứu
   Thực hành tốt nhất cho:
   - Quản lý vòng đời WebSocket
   - Dọn dẹp trình lắng nghe sự kiện
   - Quản lý tập trung kết nối (Connection pooling)

4. Kế hoạch triển khai
   1. Thêm logic dọn dẹp phù hợp trong trình xử lý ngắt kết nối
   2. Triển khai connection pooling cho Redis
   3. Thêm các kiểm tra dọn dẹp tự động
   4. Thêm giám sát bộ nhớ
   5. Tạo các bài kiểm tra tải (load tests)

5. Sửa lỗi đã áp dụng
   ✓ Đã thêm logic dọn dẹp
   ✓ Đã triển khai connection pool
   ✓ Đã thêm giám sát
   ✓ Đã tạo các bài kiểm tra áp lực (stress tests)

6. Xác minh
   Đã kiểm tra tải trong 24 giờ:
   - Bộ nhớ ổn định ở mức 450MB
   - Không phát hiện rò rỉ
   - Tất cả các bài kiểm tra đã vượt qua

✓ Hoàn thành sửa lỗi (12 phút)
```

## Các Giai Đoạn Của Quy Trình

### Giai đoạn 1: Khám Phá (2-3 phút)

```
Scout Agents: Đang tìm mã nguồn liên quan...

Tiến độ:
[████████░░] 80%

Số tệp đã quét: 1,247
Số tệp đã xác định: 15
Sơ đồ phụ thuộc: 43
```

### Giai đoạn 2: Phân Tích (1-2 phút)

```
Debugger Agent: Đang phân tích nguyên nhân gốc rễ...

Đang phân tích:
- Các mẫu lỗi
- Chuỗi nhật ký
- Luồng mã nguồn
- Các phụ thuộc

Đã xác định nguyên nhân gốc rễ: [mô tả]
```

### Giai đoạn 3: Nghiên Cứu (1-2 phút)

```
Researcher Agent: Đang tìm kiếm giải pháp...

Đang tìm kiếm:
- Các thực hành tốt nhất
- Các vấn đề tương tự
- Tài liệu
- Stack Overflow

Tìm thấy 3 giải pháp liên quan
```

### Giai đoạn 4: Lập Kế Hoạch (1 phút)

```
Planner Agent: Đang tạo chiến lược sửa lỗi...

Kế hoạch đã được tạo: plans/fix-[vấn-đề].md

Chiến lược:
- Phương pháp tiếp cận: [mô tả]
- Số tệp cần sửa: 8
- Số bài kiểm tra cần thêm: 15
- Thời gian dự kiến: 10 phút
```

### Giai đoạn 5: Triển Khai (3-5 phút)

```
Code Agent: Đang triển khai bản sửa lỗi...

Tiến độ:
✓ Đã cập nhật logic xác thực
⟳ Đang cấu trúc lại trình xử lý phiên
⧗ Đang thêm xử lý lỗi
⧗ Đang tạo các bài kiểm tra
```

### Giai đoạn 6: Xác Minh (1-2 phút)

```
Tester Agent: Đang chạy các bài kiểm tra toàn diện...

Kết quả kiểm tra:
✓ Unit tests: 45/45
✓ Integration tests: 23/23
✓ Bài kiểm tra mới: 15/15
✓ Regression tests: 67/67

Độ bao phủ: 96% (+8%)
```

## Thực Hành Tốt Nhất

### Cung Cấp Ngữ Cảnh Chi Tiết

✅ **Mô tả tốt:**
```bash
/fix [
  Người dùng báo cáo bị đăng xuất ngẫu nhiên trên thiết bị di động.
  Xảy ra thường xuyên hơn sau 10-15 phút sử dụng.
  Lỗi trong nhật ký: "Invalid token signature"
  Nhưng token trông vẫn hợp lệ khi được giải mã.
  Vấn đề bắt đầu sau khi triển khai cập nhật quản lý phiên.
  Người dùng máy tính để bàn không bị ảnh hưởng.
]
```

❌ **Mơ hồ:**
```bash
/fix [lỗi đăng xuất]
```

### Bao Gồm Các Thông Báo Lỗi

```bash
/fix [
  Xử lý thanh toán thất bại với lỗi:
  "PaymentError: Card declined (code: insufficient_funds)"
  Nhưng thẻ của người dùng có đủ số dư.
  Chỉ xảy ra với các số tiền trên $100.
  Bảng điều khiển Stripe hiển thị thanh toán là "đang chờ" (pending).
]
```

### Đề Cập Đến Thời Điểm Bắt Đầu

```bash
/fix [
  Rò rỉ bộ nhớ bắt đầu sau khi triển khai v2.3.0.
  Bộ nhớ máy chủ tăng từ 200MB lên 2GB sau 6 giờ.
  Đã kiểm tra các PR gần đây: #245, #247, #251.
  Nghi ngờ các thay đổi WebSocket trong PR #247.
]
```

### Chia Sẻ Các Bước Tái Hiện

```bash
/fix [
  Để tái hiện:
  1. Đăng nhập với quyền admin
  2. Điều hướng tới /admin/users
  3. Nhấp "Export CSV"
  4. Bị lỗi timeout sau 30 giây
  5. Việc tạo CSV hoạt động tốt với < 1000 người dùng
  6. Thất bại với > 5000 người dùng
]
```

## Các Tệp Đầu Ra

Sau khi `/fix` hoàn thành, bạn sẽ có:

### Kế Hoạch Sửa Lỗi

```
plans/fix-[vấn-đề]-YYYYMMDD-HHMMSS.md
```

Bao gồm:
- Phân tích nguyên nhân gốc rễ
- Giải pháp đề xuất
- Các bước triển khai
- Chiến lược kiểm tra
- Kế hoạch hoàn tác (rollback)

### Mã Nguồn Đã Sửa

```
src/
├── [các tệp đã sửa]
└── [các cập nhật liên quan]
```

### Các Bài Kiểm Tra Đã Tạo

```
tests/
├── unit/
│   └── [các bài kiểm tra mới]
├── integration/
│   └── [các bài kiểm tra tích hợp]
└── regression/
    └── [các bài kiểm tra hồi quy]
```

### Cập Nhật Tài Liệu

```
docs/
└── [các tài liệu đã cập nhật]
```

## So Sánh Thời Gian

| Độ phức tạp của vấn đề | /fix --quick | /fix |
|-----------------|-----------|-----------|
| Lỗi đánh máy đơn giản | 10 giây | 2 phút (dư thừa) |
| Lỗi logic | 30 giây | 3 phút |
| Tình trạng tranh chấp | Có thể bỏ sót | 8 phút |
| Rò rỉ bộ nhớ | Sẽ không tìm thấy | 12 phút |
| Lỗi toàn hệ thống | Sẽ không sửa được | 15 phút |

## Khi /fix Tìm Thấy Nhiều Vấn Đề

Thỉnh thoảng việc điều tra sẽ tiết lộ nhiều vấn đề liên quan:

```
Phân Tích Nguyên Nhân Gốc Rễ Đã Hoàn Tất

Tìm thấy 3 vấn đề liên quan:
1. Chính: Tình trạng tranh chấp làm mới token
2. Phụ: Thiếu xác thực token
3. Bổ sung: Ghi nhật ký chưa đầy đủ

Thứ tự sửa lỗi khuyến nghị:
1. Sửa tình trạng tranh chấp (quan trọng)
2. Thêm xác thực (quan trọng)
3. Cải thiện ghi nhật ký (nên có)

Tiếp tục với tất cả các bản sửa lỗi? (y/n)
```

Các tùy chọn:
1. **Sửa tất cả (Fix all)** - Giải quyết tất cả các vấn đề cùng nhau
2. **Chỉ vấn đề chính (Primary only)** - Sửa vấn đề quan trọng nhất trước
3. **Tùy chỉnh (Custom)** - Chọn vấn đề nào cần sửa

## Kế Hoạch Hoàn Tác (Rollback)

Mỗi lệnh `/fix` đều bao gồm hướng dẫn hoàn tác:

```
Kế Hoạch Hoàn Tác (nếu cần):

1. Hoàn tác các commit:
   git revert HEAD~3..HEAD

2. Khôi phục cấu hình:
   cp config/jwt.config.backup.ts config/jwt.config.ts

3. Xóa cache:
   redis-cli FLUSHDB

4. Khởi động lại các dịch vụ:
   pm2 restart all

5. Xác minh:
   curl https://api.example.com/health
```

## Xử Lý Sự Cố

### Việc Điều Tra Quá Chậm

**Vấn đề:** Mất nhiều thời gian hơn dự kiến

**Kiểm tra:**
- Kích thước codebase (càng lớn quét càng lâu)
- Tiến độ của scout agent
- Có thể cần thu hẹp phạm vi

**Giải pháp:**
```bash
# Hủy và cung cấp vị trí cụ thể hơn
Ctrl+C

/fix [cùng mô tả vấn đề, nhưng chỉ tìm trong src/auth/]
```

### Không Thể Tìm Thấy Nguyên Nhân Gốc Rễ

**Vấn đề:** Phân tích hoàn tất nhưng không tìm thấy nguyên nhân rõ ràng

**Kiểm tra:**
- Có sẵn nhật ký lỗi không?
- Có thể tái hiện nhất quán không?
- Các thay đổi gần đây đã được tài liệu hóa chưa?

**Giải pháp:**
```bash
# Cung cấp thêm thông tin chẩn đoán
/debug [thu thập thêm chi tiết về vấn đề]

# Sau đó thử lại với nhiều ngữ cảnh hơn
/fix [vấn đề + thông tin chẩn đoán mới]
```

### Bản Sửa Lỗi Làm Hỏng Các Tính Năng Khác

**Vấn đề:** Bản sửa lỗi hoạt động nhưng gây ra lỗi phát sinh (regressions)

**Giải pháp:**
```bash
# Sử dụng kế hoạch hoàn tác
git revert HEAD

# Điều tra tác động
/debug [chi tiết về lỗi phát sinh]

# Tạo kế hoạch toàn diện
/plan [cách sửa mà không làm hỏng X]
```

## Sau Khi Sửa Lỗi

Quy trình làm việc khuyến nghị:

```bash
# 1. Sửa lỗi hoàn tất
/fix [vấn đề]

# 2. Xem lại kế hoạch sửa lỗi
cat plans/fix-[vấn-đề].md

# 3. Xem lại các thay đổi
git diff

# 4. Chạy toàn bộ bộ kiểm tra
/test

# 5. Triển khai lên môi trường staging
/deploy [staging]

# 6. Xác minh trên staging
# (Kiểm tra thủ công)

# 7. Commit
/git:cm

# 8. Triển khai lên production
/deploy [production]

# 9. Giám sát
# (Kiểm tra nhật ký, các số liệu)
```

## Bước Tiếp Theo

- [/debug](/docs/engineer/commands/core/debug) - Điều tra vấn đề
- [/fix --quick](/docs/engineer/commands/fix/fast) - Cho các sửa lỗi đơn giản
- [/test](/docs/engineer/commands/core/test) - Chạy các bài kiểm tra
- [/git:cm](/docs/engineer/commands/git/commit) - Commit bản sửa lỗi

---

**Điểm mấu chốt**: `/fix` là lệnh ưu tiên của bạn cho các lỗi phức tạp yêu cầu điều tra kỹ. Nó triển khai nhiều agent để phân tích, nghiên cứu, lập kế hoạch và sửa lỗi một cách thấu đáo với thử nghiệm toàn diện.
