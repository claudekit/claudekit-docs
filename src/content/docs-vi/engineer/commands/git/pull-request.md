---
title: /git pr
description: Tài liệu hướng dẫn lệnh pull-request
section: engineer
kit: engineer
category: commands/git
order: 32
published: true
lang: vi
---

# /git pr

Tạo một pull request (yêu cầu kéo) với bản tóm tắt toàn diện và kế hoạch kiểm tra được tạo bởi AI. Phân tích tất cả các commit kể từ khi nhánh bị phân tách, xem xét bộ thay đổi hoàn chỉnh và tạo mô tả PR chuyên nghiệp bằng GitHub CLI.

## Cú pháp

```bash
/git pr [target-branch] [source-branch]
```

### Tham số

- `[target-branch]` (tùy chọn): Nhánh mục tiêu để merge vào (mặc định là `main`)
- `[source-branch]` (tùy chọn): Nhánh nguồn để merge từ đó (mặc định là nhánh hiện tại)

## Cách hoạt động

Lệnh `/git pr` sử dụng agent `git-manager` với quy trình làm việc sau:

### 1. Phân tích nhánh

- Xác định nhánh mục tiêu và nhánh nguồn
- Kiểm tra việc theo dõi nhánh và trạng thái remote
- Xác định điểm phân tách từ nhánh cơ sở
- Xem xét tất cả các commit kể từ khi phân tách

### 2. Xem xét thay đổi

- Chạy `git status` để xem trạng thái hiện tại
- Chạy `git diff` cho các thay đổi staged/unstaged
- Chạy `git log` để xem lại lịch sử commit
- Chạy `git diff [base]...HEAD` cho bộ thay đổi hoàn chỉnh
- Phân tích TẤT CẢ các commit (không chỉ commit mới nhất)

### 3. Tạo bản tóm tắt PR

- Xem xét diff hoàn chỉnh và các thông điệp commit
- Xác định các tính năng thêm mới, sửa lỗi, tái cấu trúc
- Tạo bản tóm tắt các thay đổi theo dạng gạch đầu dòng
- Tạo danh sách kiểm tra kế hoạch kiểm tra
- Tuân theo định dạng PR chuyên nghiệp

### 4. Tạo PR

- Tạo/đẩy (push) nhánh lên remote nếu cần
- Thực thi `gh pr create` với nội dung đã tạo
- Trả về URL của PR để xem xét
- Xử lý xác thực và quyền hạn

## Khi nào nên sử dụng

### ✅ Hoàn hảo cho

**Hoàn thành tính năng**
```bash
# Sau khi triển khai xong tính năng
/git pr
```

**Bản sửa lỗi đã sẵn sàng**
```bash
# Sau khi sửa và kiểm tra lỗi
/git pr main hotfix/critical-bug
```

**Chuẩn bị phát hành (Release)**
```bash
# Merge nhánh develop vào main
/git pr main develop
```

**Yêu cầu xem xét mã nguồn (Code Review)**
```bash
# Yêu cầu nhóm xem xét
/git pr
```

### ❌ Không sử dụng cho

**Công việc đang dở dang (WIP)**
```bash
❌ /git pr  # Trước khi tính năng hoàn thành
✅ Hoàn thành tính năng trước, sau đó mới tạo PR
```

**Chưa có commit nào**
```bash
❌ /git pr  # Chưa có gì được commit
✅ /git cm  # Hãy commit trước
```

**Chưa cài đặt GitHub CLI**
```bash
❌ /git pr
✅ Cài đặt gh: brew install gh
```

## Ví dụ

### PR cho tính năng đơn giản

```bash
/git pr
```

**Điều gì xảy ra:**
```
1. Đang phân tích nhánh
   Nhánh hiện tại: feature/user-profile
   Nhánh mục tiêu: main
   Điểm phân tách tại: commit abc1234
   Số commit phía trước: 5

2. Đang xem xét các thay đổi
   $ git log main..HEAD
   - feat: add user profile page
   - feat: add profile avatar upload
   - test: add profile component tests
   - docs: document profile API
   - fix: handle missing avatar gracefully

   $ git diff main...HEAD
   Số tệp thay đổi: 12
   Số dòng thêm: +487
   Số dòng xóa: -23

3. Đang tạo mô tả PR
   ✓ Đã tạo bản tóm tắt từ tất cả 5 commit
   ✓ Đã tạo kế hoạch kiểm tra

4. Đang tạo PR
   $ gh pr create --title "Add user profile page" --body "..."

   ✓ Đã tạo: https://github.com/user/repo/pull/42

✓ Đã tạo pull request (34 giây)
```

**PR được tạo:**
```markdown
## Tóm tắt

- Thêm trang hồ sơ người dùng với khả năng tải ảnh đại diện
- Triển khai chức năng chỉnh sửa dữ liệu hồ sơ
- Thêm tải ảnh đại diện với kiểm tra tính hợp lệ của ảnh
- Bao gồm bộ kiểm tra toàn diện cho các component hồ sơ
- Tài liệu hóa các endpoint API hồ sơ
- Xử lý trường hợp thiếu ảnh đại diện bằng ảnh mặc định

## Kế hoạch kiểm tra

- [ ] Xác minh trang hồ sơ tải chính xác
- [ ] Kiểm tra việc chỉnh sửa và lưu dữ liệu hồ sơ
- [ ] Xác thực việc tải ảnh đại diện với nhiều định dạng ảnh khác nhau
- [ ] Kiểm tra giới hạn kích thước ảnh đại diện và xác thực
- [ ] Xác minh ảnh đại diện mặc định hiển thị khi không có ảnh nào được tải lên
- [ ] Chạy toàn bộ bộ kiểm tra (npm test)
- [ ] Kiểm tra độ chính xác của tài liệu endpoint API
- [ ] Kiểm tra xử lý lỗi khi tải lên thất bại
```

### PR cho Hotfix

```bash
/git pr main hotfix/payment-timeout
```

**Điều gì xảy ra:**
```
1. Thiết lập nhánh
   Nguồn: hotfix/payment-timeout
   Mục tiêu: main
   Số commit: 2

2. Phân tích hotfix
   $ git diff main...hotfix/payment-timeout
   - fix: increase payment gateway timeout
   - test: add timeout handling tests

   Sửa lỗi nghiêm trọng: Timeout xử lý thanh toán khi tải cao

3. Đang tạo PR
   Tiêu đề: "Fix: Payment gateway timeout issues"
   Nhãn (Labels): hotfix, urgent

   ✓ Đã tạo: https://github.com/user/repo/pull/43

✓ PR hotfix đã sẵn sàng để xem xét ngay lập tức (18 giây)
```

**PR được tạo:**
```markdown
## Tóm tắt

- Tăng thời gian chờ (timeout) của cổng thanh toán từ 5 giây lên 30 giây để xử lý các kết nối chậm
- Thêm xử lý timeout toàn diện với logic thử lại (retry logic)
- Bao gồm các bài kiểm tra xác thực hành vi timeout trong nhiều điều kiện mạng khác nhau

## Kế hoạch kiểm tra

- [ ] Xác minh thanh toán hoàn tất thành công trong điều kiện bình thường
- [ ] Kiểm tra xử lý timeout với mô phỏng mạng chậm
- [ ] Xác thực logic thử lại hoạt động chính xác
- [ ] Chạy toàn bộ bộ kiểm tra tích hợp thanh toán
- [ ] Giám sát các chỉ số production sau khi triển khai
- [ ] Kiểm tra việc ghi nhật ký lỗi ghi lại các sự kiện timeout chính xác
```

### PR cho tính năng phức tạp

```bash
/git pr main feature/oauth-integration
```

**Điều gì xảy ra:**
```
1. Phân tích tính năng lớn
   Số commit: 23
   Số tệp thay đổi: 45
   Số dòng thêm: +2,345
   Số dòng xóa: -567

2. Xem xét các thay đổi toàn diện
   ✓ Đã phân tích tất cả 23 commit
   ✓ Đã xem xét diff hoàn chỉnh
   ✓ Xác định các thành phần chính:
     - Luồng xác thực OAuth2
     - Các nhà cung cấp Google và GitHub
     - Hệ thống quản lý Token
     - Liên kết tài khoản người dùng
     - Các cải tiến bảo mật

3. Tạo PR chi tiết
   ✓ Đã tạo bản tóm tắt toàn diện
   ✓ Đã tạo kế hoạch kiểm tra kỹ lưỡng
   ✓ Liệt kê các thay đổi gây phá vỡ (breaking changes)
   ✓ Tài liệu hóa các bước di chuyển (migration steps)

4. Đang tạo PR
   ✓ https://github.com/user/repo/pull/44

✓ PR phức tạp đã được tạo với đầy đủ tài liệu (1 phút 12 giây)
```

**PR được tạo:**
```markdown
## Tóm tắt

### Triển khai OAuth2
- Triển khai luồng xác thực OAuth2 với authorization code grant
- Thêm nhà cung cấp Google OAuth với tính năng lấy dữ liệu hồ sơ
- Thêm nhà cung cấp GitHub OAuth với quyền truy cập email và hồ sơ
- Tạo hệ thống quản lý token với lưu trữ bảo mật

### Trải nghiệm người dùng
- Cho phép liên kết tài khoản cho người dùng hiện tại
- Triển khai luồng đăng ký liền mạch cho người dùng mới qua OAuth
- Thêm chức năng ngắt kết nối OAuth trong cài đặt tài khoản

### Cải tiến bảo mật
- Triển khai PKCE để bảo mật luồng OAuth
- Thêm bảo vệ CSRF cho các callback OAuth
- Bảo mật lưu trữ token bằng mã hóa
- Thêm giới hạn tốc độ (rate limiting) cho các endpoint OAuth

### Hạ tầng
- Tạo các endpoint callback OAuth
- Triển khai quản lý trạng thái OAuth
- Thêm xử lý lỗi toàn diện
- Bao gồm độ bao phủ kiểm tra rộng rãi (94%)

## Các thay đổi gây phá vỡ (Breaking Changes)

- Luồng xác thực hiện yêu cầu biến môi trường `AUTH_CALLBACK_URL`
- Sơ đồ bảng Users được cập nhật với các trường OAuth (yêu cầu migration)

## Hướng dẫn di chuyển (Migration Guide)

1. Thêm các biến môi trường:
   ```
   GOOGLE_CLIENT_ID=...
   GOOGLE_CLIENT_SECRET=...
   GITHUB_CLIENT_ID=...
   GITHUB_CLIENT_SECRET=...
   AUTH_CALLBACK_URL=https://yourdomain.com/auth/callback
   ```

2. Chạy database migration:
   ```
   npm run migrate
   ```

## Kế hoạch kiểm tra

### Luồng OAuth
- [ ] Kiểm tra luồng đăng ký Google OAuth
- [ ] Kiểm tra luồng đăng ký GitHub OAuth
- [ ] Kiểm tra luồng đăng nhập Google OAuth
- [ ] Kiểm tra luồng đăng nhập GitHub OAuth
- [ ] Xác minh xử lý callback OAuth

### Liên kết tài khoản
- [ ] Kiểm tra liên kết tài khoản Google với người dùng hiện tại
- [ ] Kiểm tra liên kết tài khoản GitHub với người dùng hiện tại
- [ ] Xác minh việc hủy liên kết tài khoản OAuth
- [ ] Kiểm tra nhiều nhà cung cấp OAuth cho mỗi người dùng

### Bảo mật
- [ ] Xác minh triển khai PKCE
- [ ] Kiểm tra bảo vệ CSRF
- [ ] Xác thực mã hóa lưu trữ token
- [ ] Kiểm tra giới hạn tốc độ
- [ ] Kiểm toán bảo mật luồng OAuth

### Các trường hợp biên (Edge Cases)
- [ ] Kiểm tra OAuth với thông tin xác thực không hợp lệ
- [ ] Kiểm tra các lỗi callback OAuth
- [ ] Kiểm tra các nỗ lực OAuth đồng thời
- [ ] Xác minh xử lý token hết hạn

### Tích hợp
- [ ] Chạy toàn bộ bộ kiểm tra (npm test)
- [ ] Kiểm tra trong môi trường staging
- [ ] Xác minh các database migration
- [ ] Kiểm tra việc ghi nhật ký lỗi và giám sát
```

### PR Phát hành (Release)

```bash
/git pr main develop
```

**Điều gì xảy ra:**
```
1. Phân tích bản phát hành
   Nguồn: develop
   Mục tiêu: main
   Số commit kể từ lần phát hành trước: 67
   Tính năng: 12
   Sửa lỗi: 8
   Cải tiến: 5

2. Tạo bản tóm tắt phát hành
   ✓ Nhóm các thay đổi theo loại
   ✓ Làm nổi bật các thay đổi gây phá vỡ
   ✓ Liệt kê các tính năng mới
   ✓ Tài liệu hóa các bản sửa lỗi

3. Tạo PR phát hành
   Tiêu đề: "Release v2.1.0"

   ✓ https://github.com/user/repo/pull/45

✓ PR phát hành đã được tạo (1 phút 45 giây)
```

## Tích hợp GitHub CLI

### Yêu cầu

Lệnh yêu cầu GitHub CLI (`gh`):

```bash
# Cài đặt GitHub CLI
brew install gh  # macOS
# hoặc
sudo apt install gh  # Linux
# hoặc
winget install --id GitHub.cli  # Windows

# Xác thực
gh auth login
```

### Xác thực

Nếu chưa xác thực:
```
! GitHub CLI chưa được xác thực
Hãy chạy: gh auth login

Làm theo hướng dẫn để xác thực với GitHub.
```

### Quyền hạn yêu cầu

- Quyền ghi (write access) vào kho lưu trữ
- Quyền tạo pull request
- Quyền push nhánh (nếu nhánh chưa tồn tại trên remote)

## Định dạng PR

### Tiêu đề

Được tạo tự động dựa trên các commit:
- Một tính năng duy nhất: "Add user authentication"
- Nhiều tính năng: "Release v2.1.0"
- Sửa lỗi: "Fix payment processing timeout"

### Cấu trúc nội dung

```markdown
## Tóm tắt
- Danh sách các thay đổi theo dạng gạch đầu dòng
- Được sắp xếp theo nhóm logic
- Tập trung vào NHỮNG GÌ đã thay đổi và TẠI SAO

## Kế hoạch kiểm tra
- [ ] Mục kiểm tra 1
- [ ] Mục kiểm tra 2
- [ ] Các bài kiểm tra tích hợp
```

## Thực hành tốt nhất

### Commit trước khi tạo PR

✅ **Tốt - Mọi thứ đã được commit:**
```bash
# Commit tất cả công việc
/git cm

# Push lên remote
git push

# Tạo PR
/git pr
```

❌ **Xấu - Còn các thay đổi chưa commit:**
```bash
# Còn các thay đổi chưa commit
/git pr  # Có thể không bao gồm tất cả các thay đổi
```

### Cung cấp ngữ cảnh nhánh

✅ **Các nhánh rõ ràng:**
```bash
# Merge hotfix vào main
/git pr main hotfix/critical-bug

# Merge feature vào develop
/git pr develop feature/new-api
```

### Xem lại trước khi Merge

✅ **Xem lại PR:**
```bash
# Tạo PR
/git pr

# Xem lại trên GitHub
# Nhận phản hồi từ nhóm
# Giải quyết các bình luận
# Sau đó mới merge
```

## Quy trình làm việc

### Luồng phát triển tính năng

```bash
# 1. Tạo nhánh tính năng
git checkout -b feature/user-dashboard

# 2. Triển khai tính năng (nhiều commit)
/cook [thêm bố cục dashboard]
/git cm

/cook [thêm các widget dashboard]
/git cm

/cook [thêm các bộ lọc dashboard]
/git cm

# 3. Chạy các bài kiểm tra
/test

# 4. Tạo PR
/git pr

# 5. Giải quyết phản hồi từ việc xem xét
# ... thực hiện thay đổi ...
/git cm
git push

# 6. Merge trên GitHub sau khi được phê duyệt
```

### Luồng Hotfix

```bash
# 1. Tạo nhánh hotfix từ main
git checkout main
git pull
git checkout -b hotfix/payment-bug

# 2. Sửa lỗi
/fix --quick [lỗi xử lý thanh toán]

# 3. Kiểm tra lỗi
/test

# 4. Commit
/git cm

# 5. Tạo PR ngay lập tức
/git pr main hotfix/payment-bug

# 6. Yêu cầu xem xét khẩn cấp
# 7. Merge và triển khai ASAP
```

### Luồng phát hành (Release)

```bash
# 1. Đảm bảo nhánh develop sạch sẽ
git checkout develop
git pull

# 2. Cập nhật phiên bản và changelog
# Chỉnh sửa package.json và CHANGELOG.md
/git cm

# 3. Tạo PR phát hành
/git pr main develop

# 4. Xem xét kỹ lưỡng các thay đổi
# 5. Chạy toàn bộ bộ kiểm tra trong môi trường staging
# 6. Merge vào main
# 7. Gắn tag cho bản phát hành
git tag v2.1.0
git push --tags
```

## Xử lý sự cố

### Chưa cài đặt GitHub CLI

**Vấn đề:** Không tìm thấy lệnh `gh`

**Giải pháp:**
```bash
# Cài đặt GitHub CLI
brew install gh  # macOS
sudo apt install gh  # Linux

# Xác thực
gh auth login

# Thử lại
/git pr
```

### Chưa được xác thực

**Vấn đề:** Yêu cầu xác thực GitHub

**Giải pháp:**
```bash
# Xác thực với GitHub
gh auth login

# Làm theo hướng dẫn để xác thực

# Thử lại
/git pr
```

### Không có commit nào phía trước

**Vấn đề:** Nhánh hiện tại không có commit mới nào

**Giải pháp:**
```bash
# Kiểm tra trạng thái nhánh
git status
git log main..HEAD

# Đảm bảo bạn đã có các commit
# Hoặc tạo tính năng mới trước
```

### Nhánh chưa được đẩy (Push)

**Vấn đề:** Nhánh cục bộ không có trên remote

**Giải pháp:**
```bash
# Lệnh sẽ tự động push
/git pr

# Hoặc push thủ công trước
git push -u origin feature-branch
/git pr
```

### PR đã tồn tại

**Vấn đề:** PR đã tồn tại cho nhánh này

**Giải pháp:**
```bash
# Xem PR hiện có
gh pr view

# Hoặc đóng PR cũ và tạo cái mới
gh pr close 42
/git pr
```

## Các lệnh liên quan

### Commit và tạo PR

```bash
# 1. Commit các thay đổi
/git cm

# 2. Tạo PR
/git pr
```

### Commit, Push và tạo PR

```bash
# 1. Commit và push
/git cp

# 2. Tạo PR
/git pr
```

### Fix và tạo PR

```bash
# 1. Sửa lỗi
/fix --quick [mô tả lỗi]

# 2. Kiểm tra
/test

# 3. Commit
/git cm

# 4. Tạo PR
/git pr
```

## Cách dùng nâng cao

### Nhánh mục tiêu tùy chỉnh

```bash
# Merge vào develop thay vì main
/git pr develop

# Merge vào staging
/git pr staging

# Merge các nhánh cụ thể
/git pr production hotfix/urgent-fix
```

### PR nháp (Draft PRs)

```bash
# Tạo PR trước (công việc đang tiến hành)
/git pr

# Sau đó đánh dấu là draft trên GitHub
gh pr ready --undo
```

## Số liệu

Hiệu suất điển hình của `/git pr`:

- **Thời gian**: 30 giây - 2 phút (tùy thuộc vào kích thước bộ thay đổi)
- **Số commit được phân tích**: Tất cả các commit kể từ khi phân tách nhánh
- **Chất lượng bản tóm tắt**: Chuyên nghiệp, toàn diện
- **Độ bao phủ kế hoạch kiểm tra**: Thường từ 8-15 mục kiểm tra
- **Tỷ lệ thành công**: 99%+ (giả sử gh CLI đã được cấu hình)

## Bước tiếp theo

Sau khi sử dụng `/git pr`:

- Xem lại PR trên GitHub
- Giải quyết phản hồi từ người xem xét
- Chạy quy trình CI/CD
- Merge khi được phê duyệt
- [/watzup](/vi/docs/engineer/commands/core/watzup) - Xem lại những gì đã hoàn thành

---

**Điểm mấu chốt**: `/git pr` tạo các pull request chuyên nghiệp bằng cách phân tích tất cả các commit kể từ khi phân tách nhánh và tạo các bản tóm tắt toàn diện với các kế hoạch kiểm tra có thể thực hiện được, giúp hợp lý hóa quy trình xem xét mã nguồn.
