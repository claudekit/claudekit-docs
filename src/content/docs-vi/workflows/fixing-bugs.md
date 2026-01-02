---
title: Sửa Lỗi
description: "Tài liệu hướng dẫn Sửa Lỗi"
lang: vi
section: workflows
category: workflows
order: 4
published: true
---

# Sửa Lỗi

Tìm hiểu cách điều tra, sửa chữa và xác minh các lỗi một cách có hệ thống bằng quy trình gỡ lỗi của ClaudeKit - từ phân tích log đến triển khai thực tế.

## Tổng quan

**Mục tiêu**: Gỡ lỗi và sửa các vấn đề một cách hệ thống với phân tích nguyên nhân gốc rễ.
**Thời gian**: 5-20 phút (so với 1-4 giờ làm thủ công)
**Các Agent sử dụng**: debugger, tester, code-reviewer
**Các lệnh**: /fix:fast, /fix:hard, /fix:logs, /fix:ui, /fix:ci, /test

## Điều kiện tiên quyết

- Các bước tái hiện lỗi hoặc log lỗi
- Môi trường phát triển đã được thiết lập
- Truy cập vào các log liên quan (nếu là lỗi trên production)
- Đã có sẵn bộ kiểm thử (test suite)

## Lựa chọn lệnh phù hợp

ClaudeKit cung cấp các lệnh gỡ lỗi khác nhau cho từng tình huống:

| Lệnh | Trường hợp sử dụng | Độ phức tạp | Thời gian |
|---------|----------|------------|------|
| `/fix:fast` | Lỗi đơn giản, sửa nhanh | Thấp | 2-5 phút |
| `/fix:hard` | Lỗi phức tạp, thay đổi nhiều tệp | Cao | 10-20 phút |
| `/fix:logs` | Vấn đề production từ log | Trung bình | 5-15 phút |
| `/fix:ui` | Lỗi giao diện/bố cục | Thấp-Trung bình | 3-10 phút |
| `/fix:ci` | Thất bại trong pipeline CI/CD | Trung bình | 5-15 phút |
| `/fix:types` | Lỗi kiểu dữ liệu TypeScript | Thấp | 2-5 phút |

## Quy trình từng bước

### Bước 1: Tái hiện lỗi

Trước khi sửa, hãy xác nhận rằng bạn có thể tái hiện được vấn đề:

```bash
# Ví dụ: Báo cáo lỗi
# "Người dùng không thể đăng nhập với thông tin hợp lệ"

# Kiểm thử thủ công
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "password": "password123"}'

# Mong đợi: 200 OK kèm token
# Thực tế: 401 Unauthorized
```

Ghi lại vấn đề:
- Điều gì đang xảy ra (hành vi thực tế)
- Điều gì nên xảy ra (hành vi mong đợi)
- Các bước để tái hiện
- Thông báo lỗi hoặc log

### Bước 2: Chọn phương pháp gỡ lỗi

#### Lựa chọn A: Sửa nhanh (/fix:fast)

Dành cho các lỗi đơn giản, biệt lập:

```bash
/fix:fast [người dùng nhận lỗi 401 khi đăng nhập với thông tin hợp lệ]
```

**Điều gì xảy ra**:
```
[1/4] Đang phân tích vấn đề...
  ✓ Xác định được controller đăng nhập
  ✓ Tìm thấy middleware xác thực
  ✓ Phát hiện vấn đề: so sánh mật khẩu dùng == thay vì bcrypt.compare

[2/4] Đang triển khai sửa lỗi...
  ✓ Cập nhật src/auth/login.controller.js
  ✓ Sửa logic xác thực mật khẩu

[3/4] Đang chạy kiểm thử...
  ✓ Tất cả bài kiểm thử auth đã vượt qua (24/24)
  ✓ Độ bao phủ được duy trì: 87%

[4/4] Xác minh...
  ✓ Kiểm thử thủ công: Đăng nhập thành công
  ✓ Tạo token hoạt động bình thường
  ✓ Không phát hiện lỗi mới (regressions)

✅ Đã sửa lỗi thành công

Các tệp đã sửa đổi:
- src/auth/login.controller.js

Tóm tắt thay đổi:
- Dòng 47: Thay thế == bằng bcrypt.compare()
- Thêm async/await cho việc xác thực mật khẩu
```

#### Lựa chọn B: Sửa lỗi phức tạp (/fix:hard)

Dành cho các lỗi cần điều tra sâu và thay đổi nhiều tệp:

```bash
/fix:hard [rò rỉ bộ nhớ trong kết nối WebSocket gây treo server]
```

**Điều gì xảy ra**:
```
[1/6] Giai đoạn điều tra...
  ✓ Phân tích triển khai WebSocket
  ✓ Kiểm tra việc dọn dẹp kết nối
  ✓ Xem lại các event listener
  ✓ Kiểm tra các mẫu sử dụng bộ nhớ

Nguyên nhân gốc rễ đã được xác định:
- Các event listener không được gỡ bỏ khi ngắt kết nối
- Các đối tượng kết nối không được dọn dẹp bộ nhớ (garbage collection)
- Các tham chiếu socket vẫn được giữ trong bộ nhớ

[2/6] Tạo kế hoạch sửa lỗi...
  ✓ Kế hoạch đã lưu: plans/fix-websocket-leak-20251030.md

[3/6] Triển khai sửa lỗi...
  ✓ Thêm dọn dẹp khi ngắt kết nối
  ✓ Gỡ bỏ event listener đúng cách
  ✓ Triển khai connection pooling
  ✓ Thêm giám sát bộ nhớ

[4/6] Đang chạy kiểm thử...
  ✓ Kiểm thử dọn dẹp kết nối (12 bài mới)
  ✓ Kiểm thử rò rỉ bộ nhớ (5 bài mới)
  ✓ Tất cả bài kiểm thử hiện có đã vượt qua

[5/6] Xác minh hiệu suất...
  ✓ Sử dụng bộ nhớ ổn định qua 1000 kết nối
  ✓ Không phát hiện rò rỉ trong bài kiểm thử áp lực 10 phút

[6/6] Cập nhật tài liệu...
  ✓ Thêm tài liệu vòng đời WebSocket
  ✓ Cập nhật sơ đồ kiến trúc

✅ Đã sửa lỗi phức tạp thành công

Các tệp đã sửa đổi:
- src/websocket/server.js
- src/websocket/connection-manager.js
- src/utils/cleanup.js

Các bài kiểm thử đã thêm:
- tests/websocket/cleanup.test.js
- tests/websocket/memory.test.js
```

#### Lựa chọn C: Phân tích log Production (/fix:logs)

Dành cho các lỗi được phát hiện trên môi trường production:

```bash
# Sao chép log production
# logs/production.log

/fix:logs [phân tích log lỗi production và sửa vấn đề]
```

**Điều gì xảy ra**:
```
[1/5] Đang phân tích log...
  ✓ Đọc logs/production.log
  ✓ Phân tích 1,247 mục lỗi
  ✓ Nhóm theo loại lỗi

Phân bổ lỗi:
- TypeError: Cannot read property 'id' (847 lần)
- Database connection timeout (312 lần)
- Rate limit exceeded (88 lần)

[2/5] Phân tích nguyên nhân gốc rễ...
  ✓ Vấn đề chính: Đối tượng User bị undefined trong middleware
  ✓ Xảy ra khi token JWT hết hạn nhưng không được bắt lỗi
  ✓ Ảnh hưởng tại: src/middleware/auth.js:34

[3/5] Triển khai sửa lỗi...
  ✓ Thêm xác thực hết hạn token
  ✓ Cải thiện xử lý lỗi
  ✓ Thêm ghi log để gỡ lỗi

[4/5] Kiểm thử bản sửa lỗi...
  ✓ Thêm bài kiểm thử token hết hạn
  ✓ Thêm bài kiểm thử xử lý lỗi
  ✓ Tất cả bài kiểm thử đã vượt qua

[5/5] Các biện pháp ngăn ngừa...
  ✓ Thêm cảnh báo giám sát
  ✓ Cập nhật phản hồi lỗi
  ✓ Ghi lại trong hướng dẫn khắc phục sự cố

✅ Đã giải quyết vấn đề production

Các bước tiếp theo:
1. Triển khai bản sửa lên môi trường staging
2. Giám sát trong 24 giờ
3. Triển khai lên production
```

#### Lựa chọn D: Sửa lỗi UI (/fix:ui)

Dành cho các vấn đề về hiển thị hoặc bố cục:

```bash
# Cung cấp ảnh chụp màn hình hoặc mô tả
/fix:ui [nút bấm bị lệch trên thiết bị di động]
```

**Điều gì xảy ra**:
```
[1/4] Đang phân tích lỗi UI...
  ✓ Xác định được component nút bấm
  ✓ Kiểm tra style responsive
  ✓ Vấn đề: Thiếu media query cho di động

[2/4] Triển khai sửa lỗi...
  ✓ Thêm style cho breakpoint di động
  ✓ Sửa căn lề nút bấm
  ✓ Cải thiện kích thước vùng chạm (touch target)

[3/4] Kiểm thử trên các thiết bị...
  ✓ Máy tính: ✓
  ✓ Máy tính bảng: ✓
  ✓ Di động: ✓

[4/4] Kiểm tra sự thay đổi giao diện (Visual regression)...
  ✓ Không có thay đổi bố cục nào khác
  ✓ Tất cả component hiển thị đúng

✅ Đã sửa lỗi UI thành công

Các tệp đã sửa đổi:
- src/components/Button.css
```

#### Lựa chọn E: Sửa lỗi CI/CD (/fix:ci)

Dành cho các thất bại trong build hoặc triển khai:

```bash
# Cung cấp URL GitHub Actions
/fix:ci [https://github.com/user/repo/actions/runs/12345]
```

**Điều gì xảy ra**:
```
[1/5] Đang lấy log CI...
  ✓ Tải log workflow
  ✓ Phân tích 847 dòng log

[2/5] Phân tích thất bại...
  Tìm thấy lỗi tại dòng 234:
  "Error: Cannot find module '@babel/preset-react'"

  Nguyên nhân gốc rễ: Thiếu dependency trong package.json

[3/5] Triển khai sửa lỗi...
  ✓ Thêm @babel/preset-react vào devDependencies
  ✓ Cập nhật cấu hình .babelrc

[4/5] Xác minh cục bộ...
  ✓ npm install thành công
  ✓ Build vượt qua trên máy cục bộ
  ✓ Kiểm thử vượt qua

[5/5] Xác minh trên CI...
  ✓ Push bản sửa để kích hoạt CI
  ✓ Giám sát workflow...
  ✓ Build CI thành công ✓

✅ Đã sửa lỗi CI thành công

Các tệp đã sửa đổi:
- package.json
- .babelrc
```

### Bước 3: Xác minh bản sửa lỗi

Luôn xác minh các bản sửa lỗi một cách kỹ lưỡng:

```bash
# Chạy bộ kiểm thử
/test

# Kiểm thử thủ công
npm run dev
# Thử nghiệm kịch bản lỗi cụ thể

# Kiểm tra lỗi mới (regressions)
npm run test:integration
```

### Bước 4: Ghi lại tài liệu cho bản sửa lỗi

Cập nhật tài liệu kèm theo bản sửa:

```bash
# Cập nhật tài liệu
/docs:update [ghi lại tài liệu về việc sửa lỗi đăng nhập và các biện pháp ngăn ngừa]
```

**Tài liệu được tạo**:
```markdown
## Sửa lỗi: Vấn đề xác thực đăng nhập

### Vấn đề
Người dùng không thể đăng nhập bằng thông tin hợp lệ do so sánh mật khẩu sai.

### Nguyên nhân gốc rễ
Sử dụng toán tử == thay vì bcrypt.compare() để kiểm tra mật khẩu.

### Bản sửa đã áp dụng
Cập nhật logic xác thực để sử dụng so sánh bcrypt bất đồng bộ đúng cách.

### Ngăn ngừa
- Thêm bài kiểm thử cho việc xác thực mật khẩu bcrypt
- Cập nhật danh sách kiểm tra khi review mã nguồn
- Ghi lại các thực hành tốt nhất khi xử lý mật khẩu
```

### Bước 5: Commit bản sửa lỗi

```bash
/git:cm
```

**Commit được tạo**:
```
fix: giải quyết lỗi xác thực đăng nhập với thông tin hợp lệ

- Sửa việc so sánh mật khẩu sang dùng bcrypt.compare thay vì ==
- Thêm async/await để xác thực mật khẩu đúng cách
- Thêm các trường hợp kiểm thử cho logic xác thực mật khẩu
- Cập nhật tài liệu xác thực

Sửa lỗi: #123
```

## Ví dụ hoàn chỉnh: Lỗi giỏ hàng thương mại điện tử

### Báo cáo lỗi

```
Tiêu đề: Giỏ hàng bị nhân đôi sản phẩm khi tải lại trang
Mức độ: Cao
Ảnh hưởng: Người dùng thấy tổng tiền giỏ hàng không chính xác

Các bước tái hiện:
1. Thêm sản phẩm vào giỏ
2. Tải lại trang
3. Sản phẩm xuất hiện hai lần trong giỏ
4. Giá tiền bị tính sai

Môi trường: Production
Trình duyệt: Tất cả trình duyệt
```

### Điều tra

```bash
/fix:hard [giỏ hàng bị nhân đôi sản phẩm khi tải lại trang]
```

### Kết quả phân tích

```
Phân tích nguyên nhân gốc rễ:
1. Giỏ hàng được lưu trong localStorage
2. Đồng thời cũng được lưu trong cơ sở dữ liệu
3. Khi tải trang, cả hai nguồn đều được nạp và gộp lại
4. Logic gộp không kiểm tra sản phẩm trùng lặp

Các yếu tố góp phần:
- Thiếu kiểm tra khóa (key) duy nhất
- Không có logic loại bỏ trùng lặp (deduplication)
- Đồng bộ hóa trạng thái (state synchronization) không đúng cách
```

### Triển khai

```
Các bản sửa đã áp dụng:

1. src/store/cart.js
   - Thêm loại bỏ trùng lặp trong loadCart()
   - Kiểm tra ID sản phẩm trước khi thêm
   - Ưu tiên cơ sở dữ liệu làm nguồn sự thật (source of truth)

2. src/utils/cart-sync.js
   - Triển khai chiến lược đồng bộ hóa đúng cách
   - Thêm xử lý xung đột
   - Xóa localStorage sau khi đồng bộ với DB

3. tests/cart/sync.test.js
   - Thêm các bài kiểm thử phát hiện trùng lặp
   - Kiểm thử đồng bộ localStorage/DB
   - Kiểm thử kịch bản tải lại trang

4. docs/architecture/state-management.md
   - Ghi lại chiến lược đồng bộ giỏ hàng
   - Thêm hướng dẫn khắc phục sự cố
```

### Xác minh

```bash
# Kiểm thử tự động
✓ 15 bài kiểm thử mới được thêm vào
✓ Tất cả bài kiểm thử vượt qua (187/187)
✓ Độ bao phủ: 89%

# Kiểm thử thủ công
✓ Thêm sản phẩm vào giỏ
✓ Tải lại trang
✓ Chỉ còn một sản phẩm trong giỏ ✓
✓ Giá tiền chính xác ✓
✓ Số lượng chính xác ✓

# Kiểm thử lỗi mới (Regression testing)
✓ Giỏ hàng cập nhật khi đổi số lượng
✓ Giỏ hàng được duy trì khi chuyển trang
✓ Giỏ hàng đồng bộ giữa các tab
```

### So sánh thời gian

**Gỡ lỗi thủ công**: 3-4 giờ
- Tái hiện: 15 phút
- Điều tra: 60-90 phút
- Triển khai: 45-60 phút
- Kiểm thử: 30-45 phút
- Tài liệu: 30 phút

**Với ClaudeKit**: 18 phút
- Tái hiện: 5 phút
- /fix:hard: 12 phút
- Xác minh: 1 phút

**Thời gian tiết kiệm được**: 3+ giờ (nhanh hơn 90%)

## Các biến thể thường gặp

### Biến thể 1: Sửa lỗi kiểu dữ liệu (Type Error)

```bash
/fix:types

# Tự động sửa các lỗi TypeScript
# Cập nhật các định nghĩa kiểu
# Chạy trình kiểm tra kiểu (type checker)
```

### Biến thể 2: Lỗi hiệu suất

```bash
/fix:hard [endpoint API mất hơn 8 giây để phản hồi]

# Phân tích hiệu suất
# Xác định các nút thắt cổ chai
# Triển khai tối ưu hóa
# Xác minh sự cải thiện
```

### Biến thể 3: Lỗi bảo mật

```bash
/fix:fast [lỗ hổng SQL injection trong endpoint tìm kiếm]

# Xác định lỗ hổng
# Triển khai các truy vấn có tham số (parameterized queries)
# Thêm xác thực đầu vào
# Chạy các bài kiểm thử bảo mật
```

### Biến thể 4: Lỗi tích hợp

```bash
/fix:logs [Stripe webhook thất bại với lỗi 400]

# Phân tích log webhook
# Xác định sự sai lệch chữ ký (signature mismatch)
# Sửa logic xác thực
# Kiểm thử việc xử lý webhook
```

## Khắc phục sự cố

### Vấn đề: Không thể tái hiện lỗi

**Biểu hiện**: Lỗi không xảy ra trong môi trường phát triển.

**Giải pháp**:
```bash
# Sử dụng log production
/fix:logs [phân tích log production để xác định vấn đề]

# Hoặc thử môi trường giống production
docker-compose -f docker-compose.prod.yml up
```

### Vấn đề: Bản sửa gây ra lỗi cho các tính năng khác

**Biểu hiện**: Bản sửa lỗi gây ra lỗi mới (regressions).

**Giải pháp**:
```bash
# Chạy kiểm thử toàn diện
/test

# Nếu kiểm thử thất bại
/fix:test

# Xem lại tất cả thay đổi
git diff

# Cân nhắc cách tiếp cận khác
/fix:hard [sửa lỗi đăng nhập mà không làm thay đổi middleware]
```

### Vấn đề: Nguyên nhân gốc rễ không rõ ràng

**Biểu hiện**: Không thể xác định tại sao lỗi xảy ra.

**Giải pháp**:
```bash
# Sử dụng hard fix để điều tra
/fix:hard [mô tả chi tiết các triệu chứng]

# Cung cấp phân tích kỹ lưỡng
# Tạo kế hoạch điều tra
# Xác định nguyên nhân gốc rễ
```

### Vấn đề: Lỗi chập chờn (Intermittent Bug)

**Biểu hiện**: Lỗi chỉ thỉnh thoảng mới xảy ra.

**Giải pháp**:
```bash
# Thêm ghi log trước
/cook [thêm log chi tiết xung quanh khu vực có vấn đề]

# Tái hiện nhiều lần
# Thu thập log
/fix:logs [phân tích các log đã thu thập]
```

## Thực hành tốt nhất

### 1. Luôn tái hiện trước khi sửa

Trước khi sửa:
```bash
✅ Tái hiện lỗi cục bộ
✅ Ghi lại chính xác các bước
✅ Lưu lại các thông báo lỗi
✅ Ghi chú các chi tiết về môi trường

❌ Đừng sửa mà không tái hiện được lỗi
```

### 2. Thêm bài kiểm thử cho các lỗi

Ngăn chặn lỗi quay trở lại:
```bash
# Sau khi sửa
/test  # Bao gồm cả bài kiểm thử regression mới

# Hoặc thêm bài kiểm thử cụ thể
/cook [thêm trường hợp kiểm thử cho lỗi đăng nhập để ngăn chặn lỗi tái diễn]
```

### 3. Kiểm tra các vấn đề liên quan

Sửa các lỗi tương tự:
```bash
# Khảo sát codebase
/scout "mẫu tương tự với lỗi này" 3

# Sửa tất cả các trường hợp
/fix:fast [sửa tất cả các trường hợp so sánh mật khẩu bị lỗi]
```

### 4. Ghi lại trong Changelog

Theo dõi các bản sửa lỗi:
```bash
# Commit với tiền tố fix:
/git:cm

# Tự động được thêm vào CHANGELOG.md
# Liên kết đến số thứ tự issue
```

### 5. Giám sát sau khi triển khai

Xác minh bản sửa trên production:
```bash
# Sau khi triển khai bản sửa
# Giám sát log trong 24-48 giờ
# Kiểm tra tỷ lệ lỗi
# Xác nhận các báo cáo từ người dùng đã dừng lại
```

### 6. Phân tích nguyên nhân gốc rễ (RCA)

Hiểu rõ tại sao lỗi lại xảy ra:
```bash
# Sử dụng /fix:hard để phân tích
# Ghi lại nguyên nhân gốc rễ
# Đề xuất các biện pháp ngăn ngừa
# Cập nhật các hướng dẫn phát triển
```

## Chiến lược ngăn ngừa

Sau khi sửa lỗi, hãy cải thiện quy trình:

### 1. Thêm xác thực (Validation)

```bash
/cook [thêm xác thực đầu vào để ngăn chặn các vấn đề tương tự]
```

### 2. Cải thiện xử lý lỗi

```bash
/cook [tăng cường xử lý lỗi với log tốt hơn và thông báo rõ hơn cho người dùng]
```

### 3. Thêm giám sát

```bash
/cook [thêm cảnh báo giám sát cho loại lỗi này]
```

### 4. Cập nhật tiêu chuẩn mã nguồn

```bash
/docs:update [thêm mẫu lỗi này vào danh sách kiểm tra khi review mã nguồn]
```

## Bước tiếp theo

### Các trường hợp sử dụng liên quan
- [Thêm Tính Năng Mới](/vi/docs/workflows/adding-feature) - Triển khai các tính năng
- [Tối Ưu Hóa Hiệu Suất](/vi/docs/workflows/optimizing-performance) - Cải thiện tốc độ
- [Refactor Mã Nguồn](/vi/docs/workflows/refactoring-code) - Chất lượng mã nguồn

### Các lệnh liên quan
- [/fix:fast](/vi/docs/engineer/commands/fix/fast) - Sửa lỗi nhanh
- [/fix:hard](/vi/docs/engineer/commands/fix/hard) - Gỡ lỗi phức tạp
- [/fix:logs](/vi/docs/engineer/commands/fix/logs) - Phân tích log
- [/fix:ui](/vi/docs/engineer/commands/fix/ui) - Sửa lỗi giao diện
- [/fix:ci](/vi/docs/engineer/commands/fix/ci) - Sửa lỗi CI/CD
- [/test](/vi/docs/engineer/commands/core/test) - Bộ kiểm thử

### Đọc thêm
- [Debugger Agent](/vi/docs/engineer/agents/debugger) - Khả năng gỡ lỗi
- [Tester Agent](/vi/docs/engineer/agents/tester) - Các tính năng kiểm thử
- [Troubleshooting](/vi/docs/troubleshooting) - Các vấn đề thường gặp

---

**Thông điệp chính**: Quy trình gỡ lỗi của ClaudeKit cung cấp giải pháp sửa lỗi hệ thống với phân tích nguyên nhân gốc rễ, kiểm thử tự động và các biện pháp ngăn ngừa - biến hàng giờ gỡ lỗi thành vài phút.
