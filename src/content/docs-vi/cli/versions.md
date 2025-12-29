---
title: "ck versions"
description: "Liệt kê các phiên bản phát hành ClaudeKit có sẵn với lọc và thông tin chi tiết"
section: cli
order: 6
---

# ck versions

> Liệt kê tất cả các phiên bản phát hành ClaudeKit có sẵn từ GitHub với lọc theo bộ, giới hạn và trạng thái prerelease.

## Bắt đầu nhanh chóng

```bash
# Show all available versions for all kits
ck versions

# Filter by specific kit
ck versions --kit engineer

# Show more versions
ck versions --limit 50

# Include prereleases and drafts
ck versions --all
```

## Điều gì xảy ra

Lệnh `ck versions`:

1. Tìm nạp thông tin bản phát hành từ GitHub
2. Lọc theo bộ, trạng thái prerelease và giới hạn
3. Hiển thị các phiên bản trong bảng được định dạng với:
   - Thẻ phiên bản
   - Tên phát hành
   - Ngày xuất bản (thời gian tương đối)
   - Số lượng tài sản
   - Huy hiệu prerelease/draft

## Cú pháp

```bash
ck versions [OPTIONS]
```

### Tùy chọn

| Flag | Mô tả | Mặc định |
|------|-------------|---------|
| `--kit <name>` | Lọc theo bộ cụ thể (`engineer` hoặc `marketing`) | All kits |
| `--limit <number>` | Số phiên bản tối đa để hiển thị | 30 |
| `--all` | Bao gồm prerelease và draft | `false` (stable only) |
| `--verbose` | Bật ghi nhật ký chi tiết | `false` |

## Ví dụ

### Liệt kê tất cả các phiên bản

Hiển thị 30 phiên bản ổn định mới nhất cho tất cả các bộ:

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

### Lọc theo bộ

Hiển thị phiên bản cho một bộ cụ thể:

```bash
ck versions --kit engineer
```

Chỉ hiển thị bản phát hành cho ClaudeKit Engineer.

### Hiển thị các phiên bản khác

Tăng giới hạn mặc định:

```bash
ck versions --limit 50
```

Hiển thị tối đa 50 phiên bản thay vì 30 mặc định.

### Bao gồm Prerelease

Hiển thị các phiên bản beta và draft:

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

Prerelease được đánh dấu bằng huy hiệu `[prerelease]`, draft với huy hiệu `[draft]`.

### Kết hợp bộ lọc

Hiển thị 100 bản phát hành kỹ sư bao gồm prerelease:

```bash
ck versions --kit engineer --limit 100 --all
```

## Định dạng đầu ra

Mỗi mục phiên bản hiển thị:

```
v1.17.0              Release name                              2 days ago           (1 asset)
^^^^^^^              ^^^^^^^^^^^^                              ^^^^^^^^^^           ^^^^^^^^^^
Version tag          Release title                             Relative time        Asset count
```

### Huy hiệu

- `[prerelease]` - Phiên bản beta hoặc prerelease (vàng)
- `[draft]` - Bản phát hành nháp, chưa được xuất bản (xám)

### Thời gian tương đối

Thời gian dễ đọc kể từ khi phát hành:

- `Today` - Phát hành hôm nay
- `Yesterday` - Phát hành hôm qua
- `N days ago` - Trong tuần qua
- `N weeks ago` - Trong tháng qua
- `N months ago` - Trong năm qua
- `N years ago` - Hơn một năm trước

## Mô hình phổ biến

### Kiểm tra phiên bản mới nhất

Xem có gì mới:

```bash
ck versions --limit 1
```

Chỉ hiển thị bản phát hành ổn định gần đây nhất.

### Tìm phiên bản Beta

Tìm kiếm các tính năng sắp tới:

```bash
ck versions --all --limit 10
```

Hiển thị 10 phiên bản mới nhất bao gồm beta.

### So sánh bộ

Xem phiên bản trên cả hai bộ:

```bash
ck versions --limit 5
```

Hiển thị 5 phiên bản mới nhất cho mỗi bộ có sẵn.

### Lịch sử phiên bản đầy đủ

Lấy dòng thời gian bản phát hành hoàn chỉnh:

```bash
ck versions --all --limit 999
```

Hiển thị tất cả các bản phát hành đã xuất bản (lên đến giới hạn API).

## Use cases

### Trước khi cài đặt

Kiểm tra các phiên bản có sẵn trước khi tạo dự án:

```bash
# Duyệt phiên bản
ck versions --kit engineer

# Cài đặt phiên bản cụ thể
ck new --kit engineer --release v1.16.0
```

### Ghim phiên bản

Tìm phiên bản ổn định cho sản xuất:

```bash
ck versions --kit engineer --limit 10
```

Tránh prerelease bằng cách không sử dụng cờ `--all`.

### Kiểm tra Beta

Tìm beta mới nhất để kiểm tra:

```bash
ck versions --all --limit 5
```

Tìm huy hiệu `[prerelease]`, sau đó:

```bash
ck new --kit engineer --release v1.18.0-beta.1
```

### Nghiên cứu ghi chú phát hành

Xác định phiên bản với các tính năng cụ thể:

```bash
ck versions --limit 50
```

Kiểm tra tên/tiêu đề bản phát hành cho các đề cập đến tính năng.

## Xử lý sự cố

### "No releases found"

**Nguyên nhân:**

1. Quyền truy cập kho lưu trữ bị từ chối
2. Bộ không có bản phát hành
3. Vấn đề kết nối mạng

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

1. Giới hạn tỷ lệ API GitHub vượt quá
2. Thời gian chờ mạng
3. Xác thực không hợp lệ

**Giải pháp:**

```bash
# Đợi và thử lại (giới hạn tỷ lệ đặt lại mỗi giờ)
sleep 60
ck versions

# Kiểm tra trạng thái xác thực
gh auth status

# Sử dụng chế độ chi tiết để biết chi tiết
ck versions --verbose
```

### Đầu ra trống

**Nguyên nhân:**

1. Tất cả các bản phát hành được lọc (sử dụng `--kit` với bộ sai)
2. Không có bản phát hành ổn định (cần cờ `--all`)

**Giải pháp:**

```bash
# Bao gồm prerelease
ck versions --all

# Thử bộ khác
ck versions --kit marketing

# Kiểm tra tất cả các bộ
ck versions
```

## Quy ước đặt tên phiên bản

Các phiên bản ClaudeKit tuân theo [Semantic Versioning](https://semver.org/):

```
v1.17.0
^ ^  ^ ^
│ │  │ └─ Patch (bug fixes)
│ │  └─── Minor (new features, backward compatible)
│ └────── Major (breaking changes)
└──────── Prefix 'v'
```

### Thẻ Prerelease

- `v1.18.0-alpha.1` - Alpha (kiểm tra sớm)
- `v1.18.0-beta.1` - Beta (hoàn thành tính năng, kiểm tra)
- `v1.18.0-rc.1` - Release Candidate (kiểm tra cuối cùng)

## Bộ nhớ đệm

Dữ liệu bản phát hành được lưu vào bộ nhớ cache cục bộ để cải thiện hiệu suất.

### Vị trí bộ nhớ đệm

`~/.claudekit/cache/releases/`

### TTL bộ nhớ đệm

Mặc định: 1 giờ (3600 giây)

### Cấu hình bộ nhớ đệm

Đặt TTL tùy chỉnh thông qua biến môi trường:

```bash
# Bộ nhớ đệm trong 2 giờ
CK_CACHE_TTL=7200 ck versions

# Vô hiệu hóa bộ nhớ đệm (luôn tìm nạp mới)
CK_CACHE_TTL=0 ck versions

# Cấu hình vĩnh viễn (thêm vào ~/.bashrc hoặc ~/.zshrc)
export CK_CACHE_TTL=1800  # 30 minutes
```

## Ghi chú cụ thể theo nền tảng

### Windows

- Mã hóa đầu ra: UTF-8 (màu sắc và huy hiệu hiển thị chính xác)
- Vị trí bộ nhớ đệm: `%USERPROFILE%\.claudekit\cache\`

### macOS

- Màu sắc và huy hiệu hiển thị chính xác trong Terminal.app
- Vị trí bộ nhớ đệm: `~/.claudekit/cache/`

### Linux

- Được hỗ trợ đầy đủ trên tất cả các bản phân phối chính
- Vị trí bộ nhớ đệm: `~/.claudekit/cache/`
- WSL được hỗ trợ

## Bước tiếp theo

Sau khi duyệt các phiên bản:

1. **Cài đặt phiên bản cụ thể:**

```bash
ck new --release v1.16.0
```

2. **Cập nhật phiên bản cụ thể:**

```bash
ck init --release v1.17.0
```

3. **Thử phiên bản beta:**

```bash
ck new --release v1.18.0-beta.1
```

4. **Kiểm tra cập nhật CLI:**

```bash
ck update --check
```

## Lệnh liên quan

- [`ck new`](/vi/docs/cli/new) - Tạo dự án với phiên bản cụ thể
- [`ck init`](/vi/docs/cli/init) - Cập nhật phiên bản cụ thể
- [`ck update`](/vi/docs/cli/update) - Cập nhật CLI
- [`ck doctor`](/vi/docs/cli/doctor) - Chẩn đoán các vấn đề phiên bản
