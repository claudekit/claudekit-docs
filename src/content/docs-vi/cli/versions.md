---
title: "ck versions"
description: "Liệt kê các phiên bản phát hành ClaudeKit có sẵn với lọc và thông tin chi tiết"
lang: vi
section: cli
order: 6
---

# ck versions

> Liệt kê tất cả các phiên bản phát hành ClaudeKit có sẵn từ GitHub, hỗ trợ lọc theo bộ kit, giới hạn số lượng và trạng thái prerelease.

## Bắt đầu nhanh

```bash
# Hiển thị tất cả các phiên bản có sẵn cho tất cả các bộ kit
ck versions

# Lọc theo bộ kit cụ thể
ck versions --kit engineer

# Hiển thị nhiều phiên bản hơn
ck versions --limit 50

# Bao gồm cả các bản prerelease và bản nháp (draft)
ck versions --all
```

## Quy trình thực hiện

Lệnh `ck versions` sẽ:

1. Lấy thông tin về các bản phát hành từ GitHub
2. Lọc danh sách theo bộ kit, trạng thái prerelease và giới hạn số lượng
3. Hiển thị các phiên bản dưới dạng bảng với các thông tin:
   - Thẻ phiên bản (Version tag)
   - Tên bản phát hành
   - Thời gian xuất bản (tính tương đối)
   - Số lượng tài sản (assets)
   - Huy hiệu prerelease/draft

## Cú pháp

```bash
ck versions [OPTIONS]
```

### Tùy chọn

| Cờ (Flag) | Mô tả | Mặc định |
|------|-------------|---------|
| `--kit <name>` | Lọc theo bộ kit cụ thể (`engineer` hoặc `marketing`) | Tất cả các bộ kit |
| `--limit <number>` | Số lượng phiên bản tối đa hiển thị | 30 |
| `--all` | Bao gồm cả prerelease và bản nháp | `false` (chỉ bản ổn định) |
| `--verbose` | Bật ghi nhật ký chi tiết | `false` |

## Ví dụ

### Liệt kê tất cả các phiên bản

Hiển thị 30 phiên bản ổn định mới nhất của tất cả các bộ kit:

```bash
ck versions
```

**Kết quả mẫu:**

```
📦 ClaudeKit - Available Versions

ClaudeKit Engineer - Available Versions:

  v1.17.0              Add multi-kit support and ownership     2 days ago            (1 asset)
  v1.16.0              Skills migration improvements           1 week ago            (1 asset)
  v1.15.0              Global installation support             2 weeks ago           (1 asset)
  v1.14.2              Fix file merging edge cases             3 weeks ago           (1 asset)
  ...

Showing 30 releases

✨ Done
```

### Lọc theo bộ kit

Hiển thị các phiên bản của một bộ kit cụ thể:

```bash
ck versions --kit engineer
```

Lệnh này chỉ hiển thị các bản phát hành dành cho ClaudeKit Engineer.

### Hiển thị nhiều phiên bản hơn

Tăng giới hạn số lượng hiển thị mặc định:

```bash
ck versions --limit 50
```

Hiển thị tối đa 50 phiên bản thay vì 30 bản mặc định.

### Bao gồm bản Prerelease

Hiển thị cả các phiên bản beta và bản nháp:

```bash
ck versions --all
```

**Kết quả mẫu:**

```
ClaudeKit Engineer - Available Versions:

  v1.18.0-beta.1       New feature testing                      1 day ago            (1 asset) [prerelease]
  v1.17.0              Add multi-kit support                    2 days ago           (1 asset)
  v1.17.0-rc.2         Release candidate                        4 days ago           (1 asset) [prerelease]
  v1.16.0              Skills migration                         1 week ago           (1 asset)
  ...
```

Các bản prerelease được đánh dấu bằng huy hiệu `[prerelease]`, bản nháp được đánh dấu bằng huy hiệu `[draft]`.

### Kết hợp các bộ lọc

Hiển thị 100 bản phát hành của Engineer bao gồm cả các bản prerelease:

```bash
ck versions --kit engineer --limit 100 --all
```

## Định dạng đầu ra

Mỗi mục phiên bản sẽ hiển thị:

```
v1.17.0              Release name                              2 days ago           (1 asset)
^^^^^^^              ^^^^^^^^^^^^                              ^^^^^^^^^^           ^^^^^^^^^^
Thẻ phiên bản        Tiêu đề bản phát hành                     Thời gian tương đối  Số lượng tài sản
```

### Huy hiệu

- `[prerelease]` - Phiên bản beta hoặc prerelease (màu vàng)
- `[draft]` - Bản phát hành nháp, chưa được công bố (màu xám)

### Thời gian tương đối

Thời gian dễ đọc tính từ thời điểm phát hành:

- `Today` - Phát hành hôm nay
- `Yesterday` - Phát hành hôm qua
- `N days ago` - Trong vòng một tuần qua
- `N weeks ago` - Trong vòng một tháng qua
- `N months ago` - Trong vòng một năm qua
- `N years ago` - Hơn một năm trước

## Các mẫu phổ biến

### Kiểm tra phiên bản mới nhất

Xem những cập nhật mới nhất:

```bash
ck versions --limit 1
```

Chỉ hiển thị bản phát hành ổn định gần đây nhất.

### Tìm kiếm phiên bản Beta

Tìm kiếm các tính năng sắp ra mắt:

```bash
ck versions --all --limit 10
```

Hiển thị 10 phiên bản mới nhất bao gồm cả các bản beta.

### So sánh các bộ kit

Xem phiên bản của cả hai bộ kit:

```bash
ck versions --limit 5
```

Hiển thị 5 phiên bản mới nhất cho mỗi bộ kit có sẵn.

### Xem toàn bộ lịch sử phiên bản

Lấy toàn bộ dòng thời gian của các bản phát hành:

```bash
ck versions --all --limit 999
```

Hiển thị tất cả các bản phát hành đã được công bố (tối đa theo giới hạn của API).

## Các trường hợp sử dụng

### Trước khi cài đặt

Kiểm tra các phiên bản có sẵn trước khi tạo dự án:

```bash
# Xem các phiên bản
ck versions --kit engineer

# Cài đặt một phiên bản cụ thể
ck new --kit engineer --release v1.16.0
```

### Cố định phiên bản (Version Pinning)

Tìm phiên bản ổn định để sử dụng cho sản xuất:

```bash
ck versions --kit engineer --limit 10
```

Tránh các bản prerelease bằng cách không sử dụng cờ `--all`.

### Thử nghiệm Beta

Tìm phiên bản beta mới nhất để thử nghiệm:

```bash
ck versions --all --limit 5
```

Tìm huy hiệu `[prerelease]`, sau đó chạy:

```bash
ck new --kit engineer --release v1.18.0-beta.1
```

### Tìm kiếm theo ghi chú phát hành (Release Notes)

Xác định phiên bản có chứa các tính năng cụ thể:

```bash
ck versions --limit 50
```

Kiểm tra tên/tiêu đề của các bản phát hành để tìm các tính năng được nhắc đến.

## Xử lý sự cố

### "No releases found"

**Nguyên nhân:**

1. Quyền truy cập vào kho lưu trữ bị từ chối
2. Bộ kit không có bản phát hành nào
3. Vấn đề về kết nối mạng

**Giải pháp:**

```bash
# Kiểm tra xác thực
ck doctor

# Xác thực lại
gh auth login

# Xác minh quyền truy cập kho lưu trữ
ck versions --verbose
```

### "Error fetching releases"

**Nguyên nhân:**

1. Vượt quá giới hạn tần suất (rate limit) của API GitHub
2. Hết thời gian chờ mạng (network timeout)
3. Xác thực không hợp lệ

**Giải pháp:**

```bash
# Đợi và thử lại (giới hạn tần suất thường được thiết lập lại mỗi giờ)
sleep 60
ck versions

# Kiểm tra trạng thái xác thực
gh auth status

# Sử dụng chế độ verbose để xem chi tiết lỗi
ck versions --verbose
```

### Đầu ra trống

**Nguyên nhân:**

1. Tất cả các bản phát hành đã bị lọc (ví dụ: sử dụng `--kit` sai tên bộ kit)
2. Không có bản phát hành ổn định nào (cần dùng cờ `--all`)

**Giải pháp:**

```bash
# Bao gồm cả các bản prerelease
ck versions --all

# Thử với bộ kit khác
ck versions --kit marketing

# Kiểm tra tất cả các bộ kit
ck versions
```

## Quy ước đặt tên phiên bản

Các phiên bản của ClaudeKit tuân theo chuẩn [Semantic Versioning](https://semver.org/):

```
v1.17.0
^ ^  ^ ^
│ │  │ └─ Patch (sửa lỗi)
│ │  └─── Minor (tính năng mới, tương thích ngược)
│ └────── Major (thay đổi lớn, phá vỡ tương thích)
└──────── Tiền tố 'v'
```

### Các nhãn Prerelease

- `v1.18.0-alpha.1` - Alpha (thử nghiệm sớm)
- `v1.18.0-beta.1` - Beta (tính năng đã xong, đang kiểm thử)
- `v1.18.0-rc.1` - Release Candidate (kiểm thử cuối cùng)

## Bộ nhớ đệm (Caching)

Dữ liệu của các bản phát hành được lưu tạm tại máy cục bộ để cải thiện hiệu suất.

### Vị trí bộ nhớ đệm

`~/.claudekit/cache/releases/`

### Thời gian sống (TTL) của bộ nhớ đệm

Mặc định: 1 giờ (3600 giây)

### Cấu hình bộ nhớ đệm

Thiết lập thời gian sống (TTL) tùy chỉnh thông qua biến môi trường:

```bash
# Lưu bộ nhớ đệm trong 2 giờ
CK_CACHE_TTL=7200 ck versions

# Vô hiệu hóa bộ nhớ đệm (luôn lấy dữ liệu mới)
CK_CACHE_TTL=0 ck versions

# Cấu hình vĩnh viễn (thêm vào file ~/.bashrc hoặc ~/.zshrc)
export CK_CACHE_TTL=1800  # 30 phút
```

## Ghi chú theo nền tảng

### Windows

- Mã hóa đầu ra: UTF-8 (đảm bảo màu sắc và huy hiệu hiển thị đúng)
- Vị trí bộ nhớ đệm: `%USERPROFILE%\.claudekit\cache\`

### macOS

- Màu sắc và huy hiệu hiển thị chính xác trong Terminal.app
- Vị trí bộ nhớ đệm: `~/.claudekit/cache/`

### Linux

- Được hỗ trợ đầy đủ trên tất cả các bản phân phối phổ biến
- Vị trí bộ nhớ đệm: `~/.claudekit/cache/`
- Hỗ trợ WSL

## Bước tiếp theo

Sau khi xem danh sách các phiên bản:

1. **Cài đặt phiên bản cụ thể:**

```bash
ck new --release v1.16.0
```

2. **Cập nhật lên phiên bản cụ thể:**

```bash
ck init --release v1.17.0
```

3. **Dùng thử phiên bản beta:**

```bash
ck new --release v1.18.0-beta.1
```

4. **Kiểm tra cập nhật CLI:**

```bash
ck update --check
```

## Các lệnh liên quan

- [`ck new`](/vi/docs/cli/new) - Tạo dự án với phiên bản cụ thể
- [`ck init`](/vi/docs/cli/init) - Cập nhật dự án với phiên bản cụ thể
- [`ck update`](/vi/docs/cli/update) - Cập nhật CLI
- [`ck doctor`](/vi/docs/cli/doctor) - Chẩn đoán các lỗi liên quan đến phiên bản
