---
title: /fix
description: Tài liệu hướng dẫn lệnh fix:logs
section: engineer
kit: engineer
category: docs/commands/fix
order: 23
published: true
lang: vi
---

# /fix

Phân tích các tệp nhật ký (log) để xác định lỗi, cảnh báo và các vấn đề, sau đó tự động triển khai bản sửa lỗi dựa trên phân tích nguyên nhân gốc rễ toàn diện. Hoàn hảo để khắc phục sự cố trên production, gỡ lỗi các triển khai bị thất bại hoặc điều tra các lỗi hệ thống.

## Cú pháp

```bash
/fix [mô tả vấn đề]
```

## Cách hoạt động

Lệnh `/fix` sử dụng agent **debugger** để phân tích nhật ký một cách hệ thống:

### 1. Thu thập nhật ký

- Đọc toàn bộ tệp `./logs.txt`
- Xác định tất cả các lỗi và cảnh báo
- Thu thập dấu vết ngăn xếp (stack traces) và thông báo lỗi
- Thu thập thông tin ngữ cảnh

### 2. Phân tích nguyên nhân gốc rễ

- Đối chiếu các sự kiện giữa các mục nhật ký
- Xác định các mẫu (patterns) và điểm bất thường
- Truy vết các đường dẫn thực thi
- Xác định các nguyên nhân cơ bản

### 3. Phát triển giải pháp

- Tạo báo cáo chẩn đoán toàn diện
- Thiết kế các bản sửa lỗi mục tiêu cho các vấn đề đã xác định
- Triển khai các bản sửa lỗi một cách hệ thống
- Xác minh các bản sửa lỗi bằng các lệnh phù hợp

### 4. Xác minh

- Phân tích lại nhật ký sau khi sửa lỗi
- Đảm bảo các vấn đề đã được giải quyết
- Xác nhận không có vấn đề mới nào phát sinh
- Cung cấp báo cáo trạng thái cuối cùng

## Khi nào nên sử dụng

### ✅ Hoàn hảo cho

**Lỗi trên Production**
```bash
/fix [người dùng báo cáo lỗi 500 khi thanh toán]
```

**Triển khai thất bại**
```bash
/fix [quy trình CI/CD thất bại ở bước triển khai]
```

**Vấn đề cơ sở dữ liệu**
```bash
/fix [lỗi hết thời gian chờ kết nối trong nhật ký]
```

**Lỗi API**
```bash
/fix [lỗi timeout API không liên tục]
```

**Vấn đề hiệu suất**
```bash
/fix [thời gian phản hồi chậm được ghi nhận]
```

### ❌ Không sử dụng cho

**Không có tệp nhật ký**
```bash
❌ /fix [có vấn đề nhưng không thu thập nhật ký]
✅ Trước tiên hãy thu thập nhật ký vào tệp ./logs.txt
```

**Lỗi đánh máy đơn giản**
```bash
❌ /fix [lỗi đánh máy trong tên biến]
✅ /fix --quick [lỗi đánh máy trong tên biến]
```

**Đã biết cách sửa đơn giản**
```bash
❌ /fix [cần cập nhật giá trị cấu hình]
✅ /fix --quick [cập nhật giá trị cấu hình]
```

## Ví dụ

### Điều tra lỗi API

```bash
/fix [API trả về lỗi 500 cho endpoint /users]
```

**Điều gì xảy ra:**
```
1. Đang phân tích nhật ký
   - Đang đọc: ./logs.txt (2,345 dòng)
   - Tìm thấy: 47 mục lỗi
   - Khoảng thời gian: 2025-10-29 14:23 - 16:45

2. Đã xác định nguyên nhân gốc rễ
   - Vấn đề: Tham chiếu null không được xử lý trong user.profile
   - Vị trí: src/api/users.controller.ts:89
   - Nguyên nhân: Thiếu kiểm tra null sau khi truy vấn cơ sở dữ liệu
   - Tác động: 47 yêu cầu thất bại trong 2 giờ 22 phút

3. Triển khai bản sửa lỗi
   - Đã thêm: Xác thực null trước khi truy cập profile
   - Đã cập nhật: Xử lý lỗi với các mã trạng thái phù hợp
   - Đã thêm: Ghi nhật ký để chẩn đoán tốt hơn

4. Xác minh bản sửa lỗi
   - Kiểm tra: Tất cả đã vượt qua
   - Không có lỗi trong nhật ký mới

✓ Vấn đề đã được giải quyết (2 phút 34 giây)
```

### Vấn đề kết nối cơ sở dữ liệu

```bash
/fix [lỗi timeout kết nối cơ sở dữ liệu]
```

**Điều gì xảy ra:**
```
1. Phân tích nhật ký
   - Tìm thấy: 23 lỗi timeout
   - Mẫu: Xảy ra khi tải cao (>100 người dùng đồng thời)
   - Cơ sở dữ liệu: Connection pool bị cạn kiệt

2. Nguyên nhân gốc rễ
   - Kích thước pool: 10 (quá nhỏ)
   - Kết nối không được giải phóng đúng cách
   - Thiếu việc dọn dẹp kết nối trong các trình xử lý lỗi

3. Các bản sửa lỗi đã áp dụng
   - Tăng kích thước pool: 10 → 50
   - Thêm việc giải phóng kết nối trong các khối finally
   - Triển khai timeout kết nối: 30 giây
   - Thêm giám sát pool

4. Xác minh
   - Kiểm tra tải: 200 người dùng đồng thời ✓
   - Không quan sát thấy lỗi timeout
   - Sử dụng pool: ổn định (trung bình 35%)

✓ Vấn đề cơ sở dữ liệu đã được giải quyết (3 phút 12 giây)
```

### Phát hiện rò rỉ bộ nhớ

```bash
/fix [ứng dụng bị treo với lỗi hết bộ nhớ]
```

**Điều gì xảy ra:**
```
1. Kiểm tra nhật ký
   - Mẫu sử dụng bộ nhớ: Tăng liên tục
   - Điểm treo: ~2GB (đạt giới hạn heap)
   - Tần suất: Mỗi 4-6 giờ khi có tải

2. Phân tích
   - Các trình lắng nghe sự kiện (event listeners) không được gỡ bỏ
   - Các đối tượng lớn được giữ lại trong cache vô thời hạn
   - Các kết nối WebSocket bị tích tụ

3. Triển khai
   - Thêm việc dọn dẹp phù hợp cho các trình lắng nghe sự kiện
   - Triển khai LRU cache với TTL (1 giờ)
   - Thêm connection pooling cho WebSocket
   - Triển khai các gợi ý thu gom rác (garbage collection) định kỳ

4. Thử nghiệm
   - Hoàn thành bài kiểm tra áp lực trong 24 giờ
   - Bộ nhớ ổn định ở mức ~400MB
   - Không quan sát thấy tình trạng treo máy

✓ Đã sửa rò rỉ bộ nhớ (5 phút 43 giây)
```

### Thất bại trong quy trình CI/CD

```bash
/fix [workflow GitHub Actions bị thất bại]
```

**Điều gì xảy ra:**
```
1. Thu thập nhật ký quy trình
   - Run ID: 1234567890
   - Bước thất bại: "Build and Test"
   - Mã thoát: 1

2. Xác định lỗi
   - Thất bại kiểm tra: 3 bài kiểm tra trong auth.test.ts
   - Lý do: Thiếu biến môi trường
   - Biến: JWT_SECRET chưa được thiết lập trong CI

3. Giải pháp
   - Đã thêm JWT_SECRET vào GitHub Secrets
   - Cập nhật workflow: Sử dụng secrets.JWT_SECRET
   - Thêm bước xác thực để kiểm tra các biến môi trường bắt buộc

4. Xác minh
   - Chạy lại workflow: ✓ passed
   - Tất cả kiểm tra: 127/127 ✓

✓ Quy trình CI/CD đã được sửa (1 phút 56 giây)
```

## Agent được gọi

Lệnh này ủy quyền cho **debugger agent** với các khả năng sau:

- **Phân tích nhật ký**: Phân tích cú pháp một cách hệ thống và nhận diện mẫu
- **Xác định nguyên nhân gốc rễ**: Chẩn đoán dựa trên bằng chứng
- **Chẩn đoán cơ sở dữ liệu**: Phân tích truy vấn và kiểm tra cấu trúc
- **Phân tích hiệu suất**: Xác định điểm nghẽn
- **Tích hợp CI/CD**: Truy xuất và phân tích nhật ký GitHub Actions

## Định dạng tệp nhật ký

### Vị trí dự kiến

```bash
./logs.txt
```

### Các định dạng nhật ký được hỗ trợ

**Nhật ký ứng dụng tiêu chuẩn**
```
2025-10-29T14:23:45.123Z [ERROR] Database connection failed
2025-10-29T14:23:45.456Z [WARN] Retrying connection (attempt 2/3)
```

**Nhật ký định dạng JSON**
```json
{"timestamp":"2025-10-29T14:23:45.123Z","level":"error","message":"Request failed"}
```

**Dấu vết ngăn xếp (Stack Traces)**
```
Error: Cannot read property 'id' of null
    at UserController.getProfile (src/controllers/user.ts:89:15)
    at processRequest (src/middleware/handler.ts:34:8)
```

## Thực hành tốt nhất

### Thu thập nhật ký đầy đủ

✅ **Tốt - Đầy đủ ngữ cảnh:**
```bash
# Thu thập nhật ký toàn diện
docker logs my-app > logs.txt
# Hoặc từ máy chủ
ssh server "cat /var/log/app/*.log" > logs.txt
```

❌ **Xấu - Không đầy đủ:**
```bash
# Chỉ có đầu ra một phần
echo "some error" > logs.txt
```

### Bao gồm dấu thời gian

✅ **Có dấu thời gian:**
```
2025-10-29 14:23:45 [ERROR] Database timeout
2025-10-29 14:23:46 [INFO] Retrying connection
```

❌ **Không có dấu thời gian:**
```
ERROR Database timeout
INFO Retrying connection
```

### Cung cấp ngữ cảnh

✅ **Vấn đề cụ thể:**
```bash
/fix [xử lý thanh toán thất bại với lỗi timeout kể từ 14:00]
```

❌ **Vấn đề mơ hồ:**
```bash
/fix [có gì đó bị hỏng]
```

## Thu thập nhật ký

### Container Docker

```bash
# Một container duy nhất
docker logs container-name > logs.txt

# Theo dõi nhật ký trong thời gian thực
docker logs -f container-name > logs.txt

# 1000 dòng cuối cùng
docker logs --tail 1000 container-name > logs.txt

# Sau đó phân tích
/fix [mô tả vấn đề]
```

### Ứng dụng trên máy chủ

```bash
# Nhật ký hệ thống
journalctl -u myapp > logs.txt

# Nhật ký ứng dụng
cat /var/log/myapp/*.log > logs.txt

# Nhật ký PM2
pm2 logs --lines 1000 > logs.txt

# Sau đó phân tích
/fix [mô tả vấn đề]
```

### Quy trình CI/CD

```bash
# GitHub Actions
gh run view 1234567890 --log > logs.txt

# GitLab CI
gitlab-ci-trace job_id > logs.txt

# Sau đó phân tích
/fix [thất bại quy trình ở bước build]
```

### Kubernetes

```bash
# Nhật ký Pod
kubectl logs pod-name > logs.txt

# Nhiều pod
kubectl logs -l app=myapp --all-containers=true > logs.txt

# Container đã bị treo trước đó
kubectl logs pod-name --previous > logs.txt

# Sau đó phân tích
/fix [các pod bị treo với lỗi OOM]
```

## Quy trình làm việc

### Luồng khắc phục sự cố tiêu chuẩn

```bash
# 1. Thu thập nhật ký
docker logs my-app > logs.txt

# 2. Phân tích và sửa lỗi
/fix [người dùng báo cáo lỗi thanh toán]

# 3. Xem lại thay đổi
git diff

# 4. Kiểm tra bản sửa lỗi
/test

# 5. Commit nếu hài lòng
/git:cm

# 6. Triển khai
git push
```

### Phản ứng sự cố Production

```bash
# 1. Thu thập nhật ký ngay lập tức
ssh production "docker logs app > /tmp/incident.log"
scp production:/tmp/incident.log ./logs.txt

# 2. Phân tích khẩn cấp
/fix [production down - lỗi 500 trên tất cả endpoint]

# 3. Tạo nhánh hotfix
git checkout -b hotfix/production-500-errors

# 4. Áp dụng sửa lỗi và kiểm tra
/test

# 5. Triển khai ngay lập tức
/git:cm
git push origin hotfix/production-500-errors
/git:pr main hotfix/production-500-errors
```

## Xử lý sự cố

### Không tìm thấy tệp nhật ký

**Vấn đề:** `./logs.txt` không tồn tại

**Giải pháp:**
```bash
# Tạo tệp nhật ký trước
docker logs my-app > logs.txt

# Hoặc từ máy chủ
ssh server "cat /var/log/app/error.log" > logs.txt

# Sau đó chạy lệnh
/fix [mô tả vấn đề]
```

### Nhật ký quá lớn

**Vấn đề:** Tệp nhật ký vượt quá kích thước hợp lý

**Giải pháp:**
```bash
# Lọc khoảng thời gian liên quan
grep "2025-10-29 14:" app.log > logs.txt

# Hoặc 5000 dòng cuối cùng
tail -5000 app.log > logs.txt

# Sau đó phân tích
/fix [vấn đề xảy ra lúc 14:00]
```

### Không có nguyên nhân gốc rễ rõ ràng

**Vấn đề:** Nhật ký đã được phân tích nhưng nguyên nhân vẫn chưa rõ ràng

**Giải pháp:**
```bash
# Thu thập nhật ký toàn diện hơn
# Bao gồm mức độ debug
docker logs my-app --since 1h > logs.txt

# Bật ghi nhật ký chi tiết trước
# Sau đó tái hiện vấn đề
# Sau đó phân tích lại
/fix [vấn đề với nhật ký chi tiết hơn]
```

### Bản sửa lỗi không hoạt động

**Vấn đề:** Vấn đề vẫn tiếp diễn sau khi sửa lỗi

**Giải pháp:**
```bash
# Tái hiện vấn đề và thu thập nhật ký mới
./reproduce-issue.sh
docker logs my-app > logs.txt

# Phân tích lại với nhiều ngữ cảnh hơn
/fix [vấn đề vẫn xảy ra - bản sửa lỗi trước đó là X]
```

## Các lệnh liên quan

### Phân tích nhật ký + Thử nghiệm

```bash
# 1. Phân tích và sửa lỗi
/fix [lỗi API trên production]

# 2. Chạy các bài kiểm tra toàn diện
/test

# 3. Nếu các bài kiểm tra tiết lộ thêm vấn đề
/fix [các vấn đề bổ sung được tìm thấy trong kiểm tra]
```

### Nhật ký + Sửa lỗi CI/CD

```bash
# 1. Lấy nhật ký CI
/fix [github-actions-url]

# Hoặc với nhật ký cục bộ
# 2. Thu thập và phân tích
gh run view 123 --log > logs.txt
/fix [quy trình CI thất bại ở bước kiểm tra]
```

### Gỡ lỗi các vấn đề phức tạp

```bash
# 1. Bắt đầu với nhật ký
/fix [vấn đề phức tạp với nhiều triệu chứng]

# 2. Nếu cần điều tra thêm
/debug [những phát hiện từ phân tích nhật ký]
```

## Số liệu

Hiệu suất điển hình của `/fix`:

- **Thời gian**: 2-5 phút
- **Số dòng nhật ký được phân tích**: 100-10,000+
- **Độ chính xác sửa lỗi**: ~92% (dựa trên một lần thử)
- **Các lỗi thường gặp**: Cấu hình, xử lý lỗi, giới hạn tài nguyên
- **Các vấn đề phụ được tìm thấy**: ~35% trường hợp

## Bước tiếp theo

Sau khi sử dụng `/fix`:

- [/test](/docs/engineer/commands/core/test) - Xác minh bản sửa lỗi bằng các bài kiểm tra
- [/fix](/docs/engineer/commands/fix/hard) - Cho các vấn đề phức tạp cần phân tích sâu hơn
- [/debug](/docs/engineer/commands/core/debug) - Nếu vấn đề cần điều tra thêm
- [/git:cm](/docs/engineer/commands/git/commit) - Commit bản sửa lỗi

---

**Điểm mấu chốt**: `/fix` cung cấp khả năng phân tích nhật ký và giải quyết vấn đề tự động bằng cách tận dụng phương pháp hệ thống của debugger agent để xác định nguyên nhân gốc rễ và triển khai bản sửa lỗi.
