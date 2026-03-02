---
title: "Configuration"
lang: vi
description: "Tài liệu tham khảo cấu hình đầy đủ cho ClaudeKit CLI bao gồm các tệp cấu hình, biến môi trường và tùy chọn tùy chỉnh"
section: cli
order: 9
---

# Configuration

> Tùy chỉnh hành vi của ClaudeKit CLI với các tệp cấu hình, biến môi trường và cài đặt theo từng dự án.

## Các Tệp Cấu Hình

ClaudeKit CLI sử dụng nhiều tệp cấu hình ở các cấp độ khác nhau.

### Cấu Hình CLI Toàn Cục

**Vị trí:** `~/.claudekit/config.json`

**Mục đích:** Lưu trữ các giá trị mặc định của CLI và xác thực

**Cấu trúc:**

```json
{
  "github": {
    "token": "stored_in_keychain"
  },
  "defaults": {
    "kit": "engineer",
    "dir": "."
  }
}
```

**Tự động tạo:** Có, khi chạy lần đầu

**Các trường:**

| Trường | Kiểu | Mô tả |
|-------|------|-------------|
| `github.token` | string | Token xác thực GitHub (lưu trong OS keychain) |
| `defaults.kit` | string | Kit mặc định cho `ck new` và `ck init` |
| `defaults.dir` | string | Thư mục đích mặc định |

### Cấu Hình Dự Án

**Vị trí (Cục bộ):** `.claude/.ck.json`
**Vị trí (Toàn cục):** `~/.claude/.ck.json`

**Mục đích:** Lưu trữ cấu hình thư mục theo từng dự án

**Cấu trúc:**

```json
{
  "folders": {
    "docs": "documentation",
    "plans": "planning"
  }
}
```

**Tự động tạo:** Khi sử dụng tên thư mục tùy chỉnh

**Các trường:**

| Trường | Kiểu | Mô tả |
|-------|------|-------------|
| `folders.docs` | string | Tên tùy chỉnh cho thư mục docs |
| `folders.plans` | string | Tên tùy chỉnh cho thư mục plans |

### Metadata ClaudeKit

**Vị trí (Cục bộ):** `.claude/metadata.json`
**Vị trí (Toàn cục):** `~/.claude/metadata.json`

**Mục đích:** Theo dõi phiên bản cài đặt và quyền sở hữu

**Cấu trúc (Kit Đơn):**

```json
{
  "name": "ClaudeKit Engineer",
  "version": "1.17.0",
  "installedAt": "2025-01-15T10:30:00.000Z",
  "mode": "local",
  "files": [
    {
      "path": "agents/planner/agent.json",
      "hash": "sha256-abc123...",
      "ownership": "ck",
      "installedVersion": "1.17.0"
    }
  ]
}
```

**Cấu trúc (Nhiều Kit):**

```json
{
  "version": "1.17.0",
  "installedAt": "2025-01-15T10:30:00.000Z",
  "mode": "local",
  "kits": {
    "engineer": {
      "name": "ClaudeKit Engineer",
      "version": "1.17.0",
      "installedAt": "2025-01-15T10:30:00.000Z",
      "files": [ /* theo dõi tệp */ ]
    },
    "marketing": {
      "name": "ClaudeKit Marketing",
      "version": "1.5.0",
      "installedAt": "2025-01-16T14:20:00.000Z",
      "files": [ /* theo dõi tệp */ ]
    }
  }
}
```

**Tự động tạo:** Có, bởi `ck new` hoặc `ck init`

**Các trường:**

| Trường | Kiểu | Mô tả |
|-------|------|-------------|
| `name` | string | Tên kit (chỉ dùng cho kit đơn) |
| `version` | string | Phiên bản đã cài đặt |
| `installedAt` | string | Dấu thời gian ISO 8601 |
| `mode` | string | `"local"` hoặc `"global"` |
| `files` | array | Theo dõi quyền sở hữu tệp (kit đơn) |
| `kits` | object | Cài đặt nhiều kit (chứa dữ liệu theo từng kit) |

## Biến Môi Trường

Cấu hình hành vi CLI thông qua biến môi trường.

### Xác Thực

#### GITHUB_TOKEN

**Mục đích:** Token truy cập cá nhân GitHub để xác thực API

**Thứ tự ưu tiên:**

1. GitHub CLI (`gh auth token`)
2. Biến môi trường `GITHUB_TOKEN`
3. Tệp cấu hình (`~/.claudekit/config.json`)
4. OS keychain
5. Nhập từ người dùng

**Cách dùng:**

```bash
export GITHUB_TOKEN=ghp_abc123...
ck new
```

**Lưu ý:** Nên dùng GitHub CLI (`gh auth login`) thay vì PAT.

### Hành Vi

#### CI

**Mục đích:** Phát hiện môi trường CI/CD, bật chế độ không tương tác

**Giá trị:** `"true"` hoặc `"false"`

**Cách dùng:**

```bash
CI=true ck init --release v1.16.0
```

**Hiệu ứng:**
- Tắt các lời nhắc tương tác
- Yêu cầu cờ `--release` rõ ràng để chọn phiên bản
- Bỏ qua các lời nhắc xác nhận

#### NON_INTERACTIVE

**Mục đích:** Bắt buộc chế độ không tương tác

**Giá trị:** `"true"` hoặc `"false"`

**Cách dùng:**

```bash
NON_INTERACTIVE=true ck new --kit engineer --dir ./project
```

**Hiệu ứng:** Tương tự `CI=true`

#### NO_UPDATE_NOTIFIER

**Mục đích:** Tắt thông báo cập nhật

**Giá trị:** `"1"` hoặc bất kỳ giá trị đúng nào

**Cách dùng:**

```bash
export NO_UPDATE_NOTIFIER=1
ck --version  # Không hiển thị thông báo cập nhật
```

**Vĩnh viễn:**

```bash
# Thêm vào ~/.bashrc hoặc ~/.zshrc
echo 'export NO_UPDATE_NOTIFIER=1' >> ~/.bashrc
```

#### CLAUDEKIT_VERBOSE

**Mục đích:** Bật ghi nhật ký chi tiết toàn cục

**Giá trị:** `"1"` hoặc `"true"`

**Cách dùng:**

```bash
CLAUDEKIT_VERBOSE=1 ck new
```

**Hiệu ứng:** Tương tự cờ `--verbose` trên tất cả các lệnh

### Bộ Nhớ Đệm

#### CK_CACHE_TTL

**Mục đích:** Đặt thời gian sống của bộ nhớ đệm theo giây

**Mặc định:** `3600` (1 giờ)

**Cách dùng:**

```bash
# Lưu đệm trong 2 giờ
CK_CACHE_TTL=7200 ck versions

# Tắt bộ nhớ đệm (luôn lấy dữ liệu mới)
CK_CACHE_TTL=0 ck versions

# Lưu đệm trong 30 phút (vĩnh viễn)
export CK_CACHE_TTL=1800
```

**Những gì được lưu đệm:**
- Dữ liệu bản phát hành GitHub
- Kết quả kiểm tra phiên bản

**Vị trí bộ nhớ đệm:**

- **Bản phát hành:** `~/.claudekit/cache/releases/`
- **Kiểm tra phiên bản:** `~/.claudekit/cache/version-check.json`

## Giá Trị Mặc Định Dòng Lệnh

Đặt giá trị mặc định để tránh lặp đi lặp lại các cờ.

### Mặc Định Kit

Đặt kit mặc định cho `ck new` và `ck init`:

**Qua tệp cấu hình:**

Chỉnh sửa `~/.claudekit/config.json`:

```json
{
  "defaults": {
    "kit": "engineer"
  }
}
```

**Qua lệnh:**

```bash
# Chạy lần đầu với cờ --kit
ck new --kit engineer

# Lưu vào cấu hình, các lần chạy tiếp theo dùng mặc định này
ck new  # Sử dụng engineer theo mặc định
```

### Mặc Định Thư Mục

Đặt thư mục đích mặc định:

**Qua tệp cấu hình:**

```json
{
  "defaults": {
    "dir": "~/projects"
  }
}
```

**Hiệu ứng:**

```bash
ck new  # Tạo dự án trong ~/projects thay vì thư mục hiện tại
```

## Tên Thư Mục Tùy Chỉnh

Sử dụng tên tùy chỉnh cho thư mục `docs/` và `plans/`.

### Cấu Hình Theo Từng Dự Án

**Đặt khi tạo:**

```bash
ck new --docs-dir documentation --plans-dir planning
```

**Đặt khi cập nhật:**

```bash
ck init --docs-dir documentation --plans-dir planning
```

**Điều gì xảy ra:**

1. Tên thư mục thay đổi trong hệ thống tệp
2. Tất cả các tham chiếu được cập nhật trong các tệp workflow
3. Cấu hình được lưu vào `.claude/.ck.json`
4. Các lần cập nhật tiếp theo giữ nguyên tên tùy chỉnh

### Tệp Cấu Hình

**Vị trí:** `.claude/.ck.json`

**Cấu trúc:**

```json
{
  "folders": {
    "docs": "documentation",
    "plans": "planning"
  }
}
```

**Được đọc bởi:** `ck init` trong quá trình cập nhật

## Các Mẫu Tệp Được Bảo Vệ

Các tệp khớp với những mẫu này sẽ không bao giờ bị ghi đè trong quá trình cập nhật.

### Tệp Môi Trường

- `.env`
- `.env.local`
- `.env.*.local` (ví dụ: `.env.production.local`)

### Tệp Thông Tin Xác Thực

- `*.key` (khóa riêng tư)
- `*.pem` (chứng chỉ)
- `*.p12`, `*.pfx` (tệp PKCS12)

### Cấu Hình Người Dùng

- `settings.json`
- `settings.local.json`
- `CLAUDE.md` (chỉ ở chế độ global)

### Các Artifact Build

- `node_modules/**`
- `.git/**`
- `dist/**`
- `build/**`

### Mẫu Loại Trừ Tùy Chỉnh

Thêm mẫu của riêng bạn:

```bash
ck new --exclude "*.log" --exclude "temp/**"
ck init --exclude "secrets/**"
```

## Đường Dẫn Theo Từng Nền Tảng

Vị trí cấu hình thay đổi theo nền tảng.

### macOS/Linux

| Loại | Đường dẫn |
|------|------|
| Cấu hình CLI | `~/.claudekit/config.json` |
| Cache bản phát hành | `~/.claudekit/cache/releases/` |
| Cache phiên bản | `~/.claudekit/cache/version-check.json` |
| Kit toàn cục | `~/.claude/` |
| Kit cục bộ | `./.claude/` |

### Windows

| Loại | Đường dẫn |
|------|------|
| Cấu hình CLI | `%USERPROFILE%\.claudekit\config.json` |
| Cache bản phát hành | `%USERPROFILE%\.claudekit\cache\releases\` |
| Cache phiên bản | `%USERPROFILE%\.claudekit\cache\version-check.json` |
| Kit toàn cục | `%USERPROFILE%\.claude\` |
| Kit cục bộ | `.\.claude\` |

## Ví Dụ Cấu Hình

### Thiết Lập Tối Giản

Cấu hình cơ bản để bắt đầu nhanh:

```json
{
  "defaults": {
    "kit": "engineer"
  }
}
```

### Cấu Hình Nhóm

Cài đặt dùng chung cho các dự án nhóm:

```json
{
  "defaults": {
    "kit": "engineer",
    "dir": "."
  }
}
```

**Quy trình nhóm:**

1. Trưởng nhóm thiết lập giá trị mặc định
2. Các thành viên sử dụng cùng cấu hình
3. Cấu trúc dự án nhất quán

### Cấu Hình CI/CD

Tối ưu cho tự động hóa:

```bash
# .github/workflows/setup.yml
env:
  CI: true
  NO_UPDATE_NOTIFIER: 1
  CK_CACHE_TTL: 0

steps:
  - name: Install ClaudeKit
    run: ck init --yes --release v1.16.0 --skip-setup
```

### Môi Trường Phát Triển vs Sản Xuất

**Phát triển:**

```bash
# Sử dụng phiên bản beta
ck new --beta --install-skills
```

**Sản xuất:**

```bash
# Ghim phiên bản ổn định
ck new --release v1.16.0
```

## Gỡ Lỗi Cấu Hình

### Xem Cấu Hình Hiện Tại

```bash
# Xem cấu hình toàn cục
cat ~/.claudekit/config.json

# Xem cấu hình dự án
cat .claude/.ck.json

# Xem metadata
cat .claude/metadata.json
```

### Kiểm Tra Cấu Hình

```bash
# Chạy kiểm tra tình trạng
ck doctor

# Chế độ chi tiết để xem thêm thông tin
ck doctor --verbose
```

### Đặt Lại Cấu Hình

**Đặt lại cấu hình CLI:**

```bash
rm ~/.claudekit/config.json
ck new  # Sẽ tạo lại với các lời nhắc
```

**Đặt lại cấu hình dự án:**

```bash
rm .claude/.ck.json
ck init  # Sẽ sử dụng giá trị mặc định
```

## Các Thực Hành Tốt Nhất

### Ghim Phiên Bản

Cho các dự án sản xuất:

```bash
# Ghim phiên bản ổn định cụ thể
ck new --release v1.16.0

# Ghi lại trong README
echo "ClaudeKit Version: 1.16.0" >> README.md
```

### Đồng Bộ Nhóm

Giữ cho nhóm dùng cùng phiên bản CLI:

```bash
# Trong tài liệu nhóm
npm install -g claudekit-cli@3.10.1

# Hoặc package.json (cài đặt cục bộ)
{
  "devDependencies": {
    "claudekit-cli": "3.10.1"
  }
}
```

### Bảo Mật Thông Tin Xác Thực

Không bao giờ commit thông tin xác thực:

```bash
# Thêm vào .gitignore
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo "*.key" >> .gitignore

# Sử dụng biến môi trường trong CI
# Đặt GITHUB_TOKEN trong CI secrets
```

### Quản Lý Bộ Nhớ Đệm

Xóa bộ nhớ đệm định kỳ:

```bash
# Xóa cache bản phát hành
rm -rf ~/.claudekit/cache/releases/

# Xóa cache kiểm tra phiên bản
rm -rf ~/.claudekit/cache/version-check.json

# Hoặc đặt TTL thấp hơn
export CK_CACHE_TTL=1800  # 30 phút
```

## Xử Lý Sự Cố Cấu Hình

### "Config file not found"

**Hành vi bình thường** - Cấu hình được tạo khi chạy lần đầu.

**Để tạo trước:**

```bash
mkdir -p ~/.claudekit
echo '{"defaults":{"kit":"engineer"}}' > ~/.claudekit/config.json
```

### "Invalid JSON in config file"

**Cách sửa:**

```bash
# Kiểm tra JSON
cat ~/.claudekit/config.json | jq .

# Nếu không hợp lệ, tạo lại
rm ~/.claudekit/config.json
ck new  # Tạo lại với JSON hợp lệ
```

### "Permission denied" trên tệp cấu hình

**Linux/macOS:**

```bash
chmod 600 ~/.claudekit/config.json
```

**Windows:**

Chạy với quyền Administrator hoặc kiểm tra quyền tệp trong Properties.

## Các Bước Tiếp Theo

Sau khi cấu hình:

1. **Kiểm tra cấu hình:**

```bash
ck doctor
```

2. **Tạo dự án:**

```bash
ck new
```

3. **Xác minh cài đặt:**

```bash
cat .claude/metadata.json
```

## Các Lệnh Liên Quan

- [`ck doctor`](/vi/docs/cli/doctor) - Xác thực cấu hình
- [`ck new`](/vi/docs/cli/new) - Tạo dự án với cấu hình
- [`ck init`](/vi/docs/cli/init) - Cập nhật dự án và giữ cấu hình
- [Cài đặt](/vi/docs/cli/installation) - Thiết lập ban đầu
