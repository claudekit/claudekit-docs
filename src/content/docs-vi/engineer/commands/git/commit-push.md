---
title: /git:cp
description: Tài liệu hướng dẫn lệnh commit-push
section: engineer
kit: engineer
category: commands/git
order: 31
published: true
lang: vi
---

# /git:cp

Thực hiện stage tất cả các thay đổi, tạo một bản commit theo tiêu chuẩn conventional với thông điệp chuyên nghiệp, và đẩy (push) lên kho lưu trữ từ xa chỉ trong một lệnh duy nhất. Hoàn hảo cho các chu kỳ lặp lại nhanh chóng.

## Cú pháp

```bash
/git:cp
```

## Cách hoạt động

Lệnh này kết hợp `/git:cm` (commit) với `git push`:

### 1. Stage & Commit (`/git:cm`)

- Phân tích tất cả các thay đổi (staged + unstaged)
- Tạo thông điệp commit theo tiêu chuẩn conventional
- Stage các tệp liên quan
- Tạo commit

### 2. Đẩy lên kho lưu trữ từ xa (Push)

- Đẩy lên nhánh upstream của nhánh hiện tại
- Hoặc yêu cầu thiết lập upstream nếu chưa được cấu hình
- Xác minh việc đẩy lên thành công

## Khi nào nên sử dụng

### ✅ Hoàn hảo cho

**Phát triển nhanh**
```bash
# Chu kỳ lặp lại nhanh
/cook [thêm tính năng]
/git:cp  # Commit và push ngay lập tức
```

**Phát triển cá nhân**
```bash
# Làm việc một mình trên nhánh tính năng
/git:cp  # Không cần xem lại cục bộ
```

**Các thay đổi nhỏ**
```bash
# Sửa lỗi đánh máy, cập nhật nhỏ
/fix --quick [lỗi đánh máy]
/git:cp  # Đẩy lên ngay
```

**Tích hợp liên tục (CI)**
```bash
# Kích hoạt CI sau mỗi thay đổi
/git:cp  # CI tự động chạy sau khi push
```

### ❌ Khi nào nên tránh

**Hợp tác nhóm**
```bash
❌ /git:cp  # Đẩy mã nguồn chưa được xem lại

✅ /git:cm  # Commit cục bộ
✅ Tạo PR   # Nhóm xem xét trước khi merge
```

**Các thay đổi chưa chắc chắn**
```bash
❌ /git:cp  # Không chắc bản sửa lỗi có hoạt động không

✅ /git:cm  # Commit cục bộ
✅ Kiểm tra thêm
✅ Sau đó: git push
```

**Các nhánh chung (Shared Branches)**
```bash
❌ /git:cp  # Trên nhánh main/develop

✅ Sử dụng các nhánh tính năng (feature branches)
✅ Tạo PR để xem xét
```

## Ví dụ

### Phát triển tính năng

```bash
# 1. Triển khai tính năng
/cook [thêm thông báo người dùng]

✓ Tính năng đã được triển khai
✓ Các bài kiểm tra đã được tạo (độ bao phủ 95%)
✓ Tài liệu đã được cập nhật

# 2. Commit và push
/git:cp

Đang phân tích các thay đổi...
✓ Đã stage 8 tệp
✓ Đã tạo commit: "feat: add user notifications system"
✓ Đã đẩy lên origin/feature/notifications

Các thay đổi hiện đã có trên GitHub!
```

### Quy trình sửa lỗi

```bash
# 1. Sửa lỗi
/fix --quick [lỗi đánh máy văn bản nút]

✓ Đã sửa lỗi đánh máy trong SubmitButton.tsx

# 2. Commit và push
/git:cp

✓ Commit: "fix: correct button text typo"
✓ Đã đẩy lên origin/bugfix/button-text

# 3. CI tự động chạy
✓ Các bài kiểm tra đã vượt qua
✓ Sẵn sàng để triển khai
```

### Triển khai liên tục (CD)

```bash
# Phát triển với tính năng tự động triển khai lên staging

# Thay đổi 1
/cook [cập nhật header]
/git:cp  # → Triển khai lên staging

# Thay đổi 2
/fix [vấn đề căn lề]
/git:cp  # → Triển khai lên staging

# Thay đổi 3
/docs:update
/git:cp  # → Triển khai lên staging
```

## Điều gì xảy ra

### Từng bước một

```
1. Đang phân tích các thay đổi...
   - 5 tệp đã sửa đổi
   - 2 tệp đã tạo mới
   - 1 tệp đã xóa

2. Đang tạo commit...
   ✓ Thông điệp commit đã được tạo:
     "feat: add real-time notifications

     - Implement WebSocket connection
     - Add notification bell UI
     - Store notifications in database
     - Add mark-as-read functionality
     - Include comprehensive tests"

3. Đang stage các tệp...
   ✓ src/services/notification.service.ts
   ✓ src/components/NotificationBell.tsx
   ✓ src/websocket/notification-handler.ts
   ✓ tests/notification.test.ts
   ✓ docs/api/notifications.md

4. Đang tạo commit...
   ✓ Commit đã được tạo: a1b2c3d

5. Đang đẩy lên remote...
   ✓ Đã đẩy lên origin/feature/notifications

6. Đang xác minh...
   ✓ Remote đã được cập nhật thành công
   ✓ CI đã được kích hoạt tự động

Hoàn thành! Xem tại:
https://github.com/user/repo/commit/a1b2c3d
```

## Cấu hình

### Thiết lập Upstream

Nếu upstream chưa được thiết lập:

```
⚠ Chưa thiết lập nhánh upstream

Thiết lập upstream thành origin/feature-name? (y/n)
> y

✓ Đã thiết lập upstream
✓ Đang đẩy lên...
✓ Hoàn thành
```

Thiết lập thủ công:
```bash
git branch --set-upstream-to=origin/feature-name
```

### Các tùy chọn Push

ClaudeKit tự động xử lý:
- Lần đẩy đầu tiên (`git push -u origin branch-name`)
- Các lần đẩy tiếp theo (`git push`)
- Cảnh báo đẩy đè (force push)
- Xung đột khi đẩy

## Kiểm tra an toàn

### Xác minh trước khi Push

```
Đang chạy các kiểm tra trước khi push...

✓ Tất cả các bài kiểm tra đã vượt qua (87/87)
✓ Không có lỗi TypeScript
✓ Các kiểm tra lint đã vượt qua
✓ Không phát hiện các tệp nhạy cảm

An toàn để đẩy lên.
```

### Phát hiện xung đột

```
⚠ Cảnh báo: Kho lưu trữ từ xa có các thay đổi mới

Nhánh từ xa có 3 commit mới.
Pull trước khi đẩy lên? (y/n)
```

### Ngăn chặn đẩy đè (Force Push)

```
❌ Lỗi: Yêu cầu đẩy đè (force push)

Nhánh của bạn đang đi sau 'origin/main' 2 commit.

Các tùy chọn:
1. Pull và rebase: git pull --rebase
2. Tạo nhánh mới
3. Hủy bỏ

Lựa chọn:
```

## Thực hành tốt nhất

### Xác minh bài kiểm tra trước

```bash
# Luôn kiểm tra trước khi đẩy lên
/test

✓ Tất cả các bài kiểm tra đã vượt qua

# Bây giờ an toàn để đẩy lên
/git:cp
```

### Xem lại các thay đổi

```bash
# Kiểm tra những gì bạn sắp đẩy lên
git diff

# Xem lại commit
git show HEAD

# Sau đó đẩy lên
git push  # hoặc /git:cp cho thay đổi tiếp theo
```

### Sử dụng các nhánh tính năng

```bash
# Tạo nhánh tính năng
git checkout -b feature/new-dashboard

# Phát triển và đẩy lên
/cook [xây dựng dashboard]
/git:cp  # An toàn trên nhánh tính năng

# Tạo PR khi đã sẵn sàng
/git:pr
```

### Commit nhỏ và thường xuyên

✅ **Tốt:**
```bash
/cook [thêm form đăng nhập]
/git:cp

/cook [thêm form đăng ký]
/git:cp

/cook [thêm đặt lại mật khẩu]
/git:cp
```

❌ **Xấu:**
```bash
# Làm việc trong 3 ngày
# Thực hiện 50 thay đổi
/git:cp  # Commit quá lớn, không rõ ràng
```

## Các mẫu quy trình làm việc

### Phát triển tính năng

```bash
# Ngày 1
git checkout -b feature/payments
/cook [triển khai tích hợp Stripe]
/git:cp

# Ngày 2
/cook [thêm giao diện thanh toán]
/git:cp

# Ngày 3
/test
/git:cp

# Tạo PR
/git:pr
```

### Hotfix

```bash
# Lỗi nghiêm trọng trên production
git checkout -b hotfix/login-error
/fix --quick [lỗi đăng nhập]
/git:cp  # Đẩy lên ngay lập tức

# Tạo PR vào main
/git:pr main

# Merge và triển khai
```

### Cập nhật tài liệu

```bash
# Cập nhật tài liệu
/docs:update
/git:cp  # Đẩy tài liệu lên ngay lập tức

# Các thay đổi sẽ xuất hiện trực tiếp trên trang tài liệu
```

## Xử lý sự cố

### Push bị từ chối

**Vấn đề:** `! [rejected] main -> main (non-fast-forward)`

**Giải pháp:**
```bash
# Đừng đẩy đè!
# Thay vào đó, pull và rebase
git pull --rebase origin main

# Giải quyết xung đột nếu có
# Sau đó đẩy lên
git push
```

### Upstream chưa được thiết lập

**Vấn đề:** "No upstream branch"

**Giải pháp:**
```bash
# Thiết lập upstream
git push -u origin branch-name

# Hoặc để /git:cp thực hiện
/git:cp
> y  # Khi được hỏi thiết lập upstream
```

### Pre-Push Hooks thất bại

**Vấn đề:** Hook pre-push ngăn cản việc đẩy lên

**Giải pháp:**
```bash
# Sửa các vấn đề
npm run lint:fix
npm test

# Sau đó thử lại
/git:cp
```

### Tệp lớn

**Vấn đề:** "File exceeds GitHub's 100 MB limit"

**Giải pháp:**
```bash
# Sử dụng Git LFS
git lfs track "*.mp4"
git add .gitattributes

# Hoặc loại bỏ tệp lớn
git rm --cached large-file.mp4
echo "large-file.mp4" >> .gitignore

# Sau đó đẩy lên
/git:cp
```

## So sánh

| Lệnh | Commit cục bộ | Đẩy lên (Push) | Trường hợp sử dụng |
|---------|-------------|------|----------|
| `/git:cm` | ✓ | ❌ | Xem lại trước khi đẩy lên |
| `/git:cp` | ✓ | ✓ | Chu kỳ lặp lại nhanh |
| `git push` | ❌ | ✓ | Sau khi commit thủ công |

## Cách dùng nâng cao

### Nhiều Remote

```bash
# Đẩy lên một remote cụ thể
git push staging
git push production

# /git:cp sử dụng mặc định (origin)
```

### Bảo vệ nhánh (Branch Protection)

Một số kho lưu trữ có tính năng bảo vệ nhánh:

```
❌ Không thể đẩy lên nhánh được bảo vệ 'main'

Hãy tạo nhánh tính năng thay thế:
git checkout -b feature/your-changes
/git:cp  # Bây giờ hoạt động
```

### Tích hợp CI

Sau khi `/git:cp`, CI sẽ tự động:
1. Chạy các bài kiểm tra
2. Build dự án
3. Triển khai lên staging
4. Thông báo cho nhóm

Theo dõi: `gh run watch`

## Khi nào KHÔNG nên sử dụng

❌ **Đừng sử dụng `/git:cp` khi:**
- Đang làm việc trên các nhánh chung (main, develop)
- Các thay đổi cần nhóm xem xét
- Chưa chắc chắn liệu các thay đổi có hoạt động hay không
- Có nhiều thay đổi không liên quan
- Mã nguồn mang tính thử nghiệm
- Các thay đổi gây phá vỡ (breaking changes)

✅ **Sử dụng thay thế:**
```bash
/git:cm  # Commit cục bộ
# Kiểm tra, xem lại, nhận phản hồi
git push  # Đẩy lên thủ công khi đã sẵn sàng
```

## Bước tiếp theo

- [/git:pr](/vi/docs/engineer/commands/git/pull-request) - Tạo pull request
- [/git:cm](/vi/docs/engineer/commands/git/commit) - Commit mà không push
- [Git Workflow](/vi/docs/guides/git-workflow) - Quy trình làm việc nhóm

---

**Điểm mấu chốt**: `/git:cp` hợp lý hóa quá trình phát triển nhanh bằng cách kết hợp commit và push, hoàn hảo cho các nhánh tính năng và phát triển cá nhân, nhưng hãy thận trọng khi sử dụng trên các nhánh chung.
