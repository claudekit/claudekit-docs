---
title: "ck doctor"
lang: vi
description: "Chạy kiểm tra tình trạng toàn diện và tự động sửa các sự cố phổ biến với cài đặt ClaudeKit"
section: cli
order: 5
---

# ck doctor

> Chạy kiểm tra tình trạng toàn diện, chẩn đoán sự cố và tự động sửa các vấn đề thông thường với cài đặt ClaudeKit.

## Bắt Đầu Nhanh

```bash
# Kiểm tra tình trạng đầy đủ (tương tác)
ck doctor

# Tự động sửa tất cả các sự cố có thể sửa
ck doctor --fix

# Tạo báo cáo chẩn đoán có thể chia sẻ
ck doctor --report

# Chế độ CI (đầu ra JSON, mã thoát khi thất bại)
ck doctor --check-only --json
```

## Chức Năng

Lệnh `ck doctor` thực hiện kiểm tra tình trạng toàn diện trên:

1. **Hệ thống**: Node.js, npm, Python, pip, git, gh CLI
2. **ClaudeKit**: Cài đặt toàn cục/cục bộ, phiên bản, metadata
3. **Xác thực**: Xác thực GitHub CLI, quyền truy cập repository
4. **Dự án**: package.json, node_modules, lock files
5. **Skills**: Phân giải phụ thuộc skill động

Sau khi chạy kiểm tra, lệnh có thể:

- Hiển thị kết quả với trạng thái có màu sắc
- Tự động sửa các sự cố có thể sửa
- Tạo báo cáo chẩn đoán có thể chia sẻ
- Xuất JSON đọc được bằng máy cho CI/CD

## Cú Pháp

```bash
ck doctor [OPTIONS]
```

### Tùy Chọn

| Cờ | Mô tả | Mặc định |
|------|-------------|---------|
| `--fix` | Tự động sửa tất cả sự cố có thể sửa | `false` |
| `--report` | Tạo báo cáo chẩn đoán có thể chia sẻ (hỏi về upload gist) | `false` |
| `--check-only` | Chế độ CI: không có lời nhắc, thoát với mã 1 khi thất bại | `false` |
| `--json` | Xuất kết quả dạng JSON | `false` |
| `--full` | Chạy kiểm tra mở rộng (chậm hơn nhưng kỹ hơn) | `false` |
| `--verbose` | Bật ghi nhật ký chi tiết | `false` |

## Các Kiểm Tra Tình Trạng

### Kiểm Tra Hệ Thống

Xác minh các phụ thuộc môi trường phát triển:

- **Node.js**: Phiên bản 18.0.0+
- **npm**: Đã cài đặt và hoạt động
- **Python**: Phiên bản 3.8+ (cho phụ thuộc skill)
- **pip**: Trình quản lý gói Python
- **git**: Kiểm soát phiên bản
- **gh**: GitHub CLI để xác thực
- **Claude CLI**: Claude Code CLI (nếu đã cài đặt)

### Kiểm Tra ClaudeKit

Xác thực cài đặt ClaudeKit:

- **Cài đặt toàn cục**: `~/.claude/` tồn tại và hợp lệ
- **Cài đặt cục bộ**: `./.claude/` tồn tại và hợp lệ
- **Metadata**: Metadata cài đặt hợp lệ
- **Phiên bản**: Phiên bản đã cài đặt là hiện tại
- **Skills**: Cấu trúc thư mục skills chính xác

### Kiểm Tra Xác Thực

Xác thực xác thực GitHub:

- **GitHub CLI auth**: `gh auth status` đạt
- **Hợp lệ token**: Token có các phạm vi bắt buộc
- **Quyền truy cập repository**: Có thể truy cập các repository ClaudeKit
- **Quyền hạn**: Quyền đọc đến các bản phát hành

### Kiểm Tra Dự Án

Xác thực cấu hình dự án (nếu ở trong thư mục dự án):

- **package.json**: Tồn tại và hợp lệ
- **node_modules**: Đã cài đặt và không bị hỏng
- **Lock files**: Có mặt và nhất quán
- **Phụ thuộc**: Tất cả các gói yêu cầu đã cài đặt

### Kiểm Tra Module

Phân giải phụ thuộc skill một cách động:

- **Gói Python**: Từ `requirements.txt` trong skills
- **Công cụ hệ thống**: FFmpeg, ImageMagick, v.v.
- **Gói Node**: Phụ thuộc npm theo từng skill

## Ví Dụ

### Kiểm Tra Tình Trạng Cơ Bản

Chạy tất cả các kiểm tra một cách tương tác:

```bash
ck doctor
```

**Ví dụ đầu ra:**

```
ClaudeKit Health Check

System Checks:
  ✓ Node.js (v20.11.0)
  ✓ npm (v10.2.4)
  ✓ Python (v3.11.5)
  ✓ pip (v23.3.1)
  ✓ git (v2.42.0)
  ✓ GitHub CLI (v2.40.1)
  ⚠ Claude CLI (not installed)

ClaudeKit Checks:
  ✓ Local installation (v1.16.0)
  ✓ Global installation (v1.16.0)
  ✓ Metadata valid

Auth Checks:
  ✓ GitHub CLI authenticated
  ✓ Repository access granted

Project Checks:
  ✓ package.json valid
  ✓ node_modules installed
  ✓ Lock file present

Module Checks:
  ✓ All skill dependencies installed

Summary: 17 passed, 1 warning, 0 failed

All checks passed!
```

### Tự Động Sửa Sự Cố

Tự động sửa tất cả các sự cố có thể sửa:

```bash
ck doctor --fix
```

**Những gì được sửa:**

- Thiếu phụ thuộc npm → `npm install`
- Thiếu gh auth → lời nhắc `gh auth login`
- node_modules bị hỏng → Cài đặt lại
- Thiếu cài đặt toàn cục → lời nhắc `ck init --global`
- Thiếu phụ thuộc skill → Cài đặt trong thư mục skill

**Ví dụ đầu ra:**

```
ClaudeKit Health Check

...checks run...

Auto-fixing issues...

✓ Installed missing dependencies (npm install)
✓ Fixed GitHub CLI authentication
✓ Installed skill dependencies (3 packages)

Healing Summary:
  3 issues fixed
  0 issues failed
  2 issues not fixable

All fixable issues resolved!
```

### Tạo Báo Cáo Chẩn Đoán

Tạo báo cáo văn bản có thể chia sẻ để xử lý sự cố:

```bash
ck doctor --report
```

**Chức năng:**

1. Chạy tất cả các kiểm tra
2. Tạo báo cáo văn bản chi tiết
3. Hỏi về việc upload lên GitHub Gist (công khai)
4. In URL gist để chia sẻ

**Ví dụ đầu ra:**

```
ClaudeKit Health Check - Diagnostic Report

System Information:
  OS: macOS 14.2.1 (darwin)
  Node.js: v20.11.0
  npm: v10.2.4
  ...

Check Results:
  [PASS] Node.js version
  [FAIL] GitHub CLI authentication
  ...

Detailed Errors:
  1. GitHub CLI not authenticated
     Fix: Run 'gh auth login'
  ...

---
Upload report to GitHub Gist? (y/n)

Report uploaded: https://gist.github.com/abc123
```

Chia sẻ URL gist khi cần hỗ trợ.

### Chế Độ CI/CD

Chạy trong pipeline CI với đầu ra JSON và mã thoát:

```bash
ck doctor --check-only --json
```

**Mã thoát:**

- `0`: Tất cả kiểm tra đạt
- `1`: Một hoặc nhiều kiểm tra thất bại

**Ví dụ đầu ra JSON:**

```json
{
  "summary": {
    "passed": 15,
    "failed": 2,
    "warnings": 1
  },
  "checks": [
    {
      "category": "System",
      "name": "Node.js",
      "status": "pass",
      "message": "v20.11.0"
    },
    {
      "category": "Auth",
      "name": "GitHub CLI",
      "status": "fail",
      "message": "Not authenticated",
      "autoFixable": true,
      "fix": "gh auth login"
    }
  ]
}
```

### Kiểm Tra Mở Rộng Đầy Đủ

Chạy kiểm tra kỹ lưỡng (chậm hơn):

```bash
ck doctor --full
```

Bao gồm:
- Kiểm tra kết nối mạng
- Xác minh phụ thuộc sâu hơn
- Kiểm tra quyền hạn mở rộng
- Đánh giá hiệu suất

## Khả Năng Tự Động Sửa

Các sự cố có thể được tự động sửa:

| Sự cố | Hành động sửa |
|-------|------------|
| Thiếu phụ thuộc npm | `npm install` |
| Thiếu xác thực gh | Lời nhắc `gh auth login` |
| node_modules bị hỏng | `rm -rf node_modules && npm install` |
| Thiếu cài đặt toàn cục | Lời nhắc `ck init --global` |
| Thiếu phụ thuộc skill | Cài đặt gói trong thư mục skill |
| Cache không hợp lệ | Xóa cache và làm mới |

Các sự cố yêu cầu can thiệp thủ công:

| Sự cố | Cách sửa thủ công |
|-------|------------|
| Phiên bản Node.js quá cũ | Cập nhật Node.js từ nodejs.org |
| Chưa cài đặt Python | Cài đặt Python từ python.org |
| Bị từ chối quyền truy cập repository | Chấp nhận email mời GitHub |
| Hệ điều hành không tương thích | Dùng hệ điều hành được hỗ trợ (Windows/macOS/Linux) |

## Đọc Hiểu Kết Quả

### Biểu Tượng Trạng Thái

- `✓` Dấu kiểm xanh: Đạt
- `⚠` Cảnh báo vàng: Cảnh báo (không nghiêm trọng)
- `✗` X đỏ: Thất bại (nghiêm trọng)

### Các Sự Cố Thông Thường

#### "GitHub CLI not authenticated"

**Trạng thái:** `✗ Failed`

**Cách sửa:**

```bash
gh auth login
```

Chọn tùy chọn "Login with a web browser".

#### "Repository access denied"

**Trạng thái:** `✗ Failed`

**Nguyên nhân:**

1. Chưa chấp nhận lời mời GitHub
2. Quyền hạn chưa được áp dụng (chờ 2-5 phút)
3. Token hết hạn (chạy lại `gh auth login`)

**Cách sửa:**

1. Kiểm tra email xem có lời mời GitHub không
2. Chấp nhận lời mời
3. Chờ 2-5 phút
4. Chạy lại `ck doctor`

#### "Node.js version too old"

**Trạng thái:** `✗ Failed`

**Cách sửa:**

Cập nhật Node.js lên 18.0.0 trở lên:

- **Windows**: Tải từ [nodejs.org](https://nodejs.org/)
- **macOS**: `brew install node`
- **Linux**: Dùng trình quản lý gói hoặc [nvm](https://github.com/nvm-sh/nvm)

#### "Claude CLI not installed"

**Trạng thái:** `⚠ Warning`

**Cách sửa (tùy chọn):**

```bash
npm install -g @claude/cli
```

Không bắt buộc với ClaudeKit, nhưng hữu ích cho tích hợp Claude Code.

## Các Mẫu Phổ Biến

### Quy Trình Xử Lý Sự Cố

Gỡ lỗi từng bước:

```bash
# 1. Chạy chẩn đoán
ck doctor

# 2. Tự động sửa những gì có thể
ck doctor --fix

# 3. Kiểm tra lại
ck doctor

# 4. Nếu vẫn thất bại, tạo báo cáo
ck doctor --report
```

### Kiểm Tra Trước Khi Cài Đặt

Trước khi cài đặt ClaudeKit:

```bash
ck doctor --full
```

Đảm bảo hệ thống của bạn sẵn sàng.

### Tích Hợp CI Pipeline

Thêm vào quy trình CI của bạn:

```yaml
# .github/workflows/test.yml
- name: Health Check
  run: ck doctor --check-only --json > health-report.json
  continue-on-error: true

- name: Upload Report
  uses: actions/upload-artifact@v3
  with:
    name: health-report
    path: health-report.json
```

### Bảo Trì Định Kỳ

Kiểm tra tình trạng định kỳ:

```bash
# Cron job hàng tuần
0 9 * * 1 ck doctor --fix --json > ~/claudekit-health.log
```

## Ghi Chú Theo Nền Tảng

### Windows

- Sử dụng PowerShell hoặc Windows Terminal
- Một số kiểm tra có thể yêu cầu quyền Administrator
- Dấu phân cách đường dẫn được xử lý tự động

### macOS

- Yêu cầu Xcode Command Line Tools cho git
- Khuyến nghị Homebrew để cài đặt các phụ thuộc
- Sử dụng native unzip để tăng hiệu suất

### Linux

- Trình quản lý gói thay đổi theo bản phân phối (apt, yum, pacman)
- WSL được hỗ trợ đầy đủ
- Có thể cần sudo cho các phụ thuộc hệ thống

## Định Dạng Đầu Ra

### Tương Tác (Mặc Định)

Đầu ra terminal có màu sắc với dấu kiểm và chi tiết.

### JSON (`--json`)

Đầu ra có cấu trúc đọc được bằng máy:

```json
{
  "summary": { ... },
  "checks": [ ... ],
  "timestamp": "2025-01-15T10:30:00Z"
}
```

### Báo Cáo (`--report`)

Báo cáo văn bản chi tiết với:
- Thông tin hệ thống
- Kết quả kiểm tra
- Chi tiết lỗi
- Các cách sửa được khuyến nghị
- Tùy chọn upload gist

## Các Bước Tiếp Theo

Sau khi chạy `ck doctor`:

1. **Sửa các kiểm tra thất bại** bằng các giải pháp được cung cấp
2. **Cập nhật ClaudeKit** nếu phiên bản đã lỗi thời:

```bash
ck init
```

3. **Cài đặt các phụ thuộc còn thiếu:**

```bash
ck init --install-skills
```

4. **Kiểm tra thiết lập của bạn:**

```bash
ck new --dir test-project
```

## Các Lệnh Liên Quan

- [`ck new`](/vi/docs/cli/new) - Tạo dự án mới
- [`ck init`](/vi/docs/cli/init) - Cập nhật cài đặt
- [`ck update`](/vi/docs/cli/update) - Cập nhật chính CLI
- [Cài đặt](/vi/docs/cli/installation) - Hướng dẫn thiết lập
- [Configuration](/vi/docs/cli/configuration) - Cấu hình mặc định
