---
title: "ck new"
description: "Tạo dự án ClaudeKit mới với các lời nhắc tương tác và các tùy chọn tùy chỉnh"
section: cli
order: 3
---

# ck new

> Tạo dự án ClaudeKit mới từ đầu với các lời nhắc tương tác và thiết lập tự động.

## Bắt đầu nhanh chóng

```bash
# Interactive mode (recommended for beginners)
ck new

# Specify kit and directory
ck new --kit engineer --dir my-project

# With beta versions and skill dependencies
ck new --beta --install-skills
```

## Điều gì xảy ra

Lệnh `ck new`:

1. Nhắc bạn chọn một bộ ClaudeKit (Kỹ sư hoặc Tiếp thị)
2. Cho phép bạn chọn thư mục đích cho dự án
3. Tìm nạp bản phát hành mới nhất (hoặc đã chọn) từ GitHub
4. Tải xuống và trích xuất các tệp dự án
5. Tùy chọn cài đặt các phụ thuộc kỹ năng
6. Tạo dự án ClaudeKit sẵn sàng sử dụng

## Cú pháp

```bash
ck new [OPTIONS]
```

### Tùy chọn

| Flag | Mô tả | Mặc định |
|------|-------------|---------|
| `--kit <name>` | Bộ để cài đặt (`engineer` hoặc `marketing`) | Interactive prompt |
| `--dir <path>` | Thư mục đích cho dự án | Interactive prompt |
| `--release <tag>` | Phiên bản bản phát hành cụ thể để cài đặt | Latest stable |
| `--beta` | Bao gồm các phiên bản beta/prerelease trong lựa chọn | `false` |
| `--refresh` | Buộc làm mới bộ nhớ đệm bản phát hành | `false` |
| `--force` | Ghi đè các tệp trong thư mục không rỗng | `false` |
| `--exclude <pattern>` | Loại trừ các tệp khớp với mô hình glob (có thể lặp lại) | None |
| `--prefix` | Chuyển các lệnh đến không gian tên `/ck:` | `false` |
| `--opencode` | Cài đặt gói OpenCode trên toàn cầu | `false` |
| `--gemini` | Cài đặt Gemini CLI và thiết lập tích hợp MCP | `false` |
| `--install-skills` | Tự động cài đặt các phụ thuộc kỹ năng | `false` |
| `--docs-dir <name>` | Tên tùy chỉnh cho thư mục tài liệu | `docs` |
| `--plans-dir <name>` | Tên tùy chỉnh cho thư mục kế hoạch | `plans` |
| `--verbose` | Bật ghi nhật ký chi tiết | `false` |
| `--log-file <path>` | Lưu nhật ký vào tệp | None |

## Ví dụ

### Tạo dự án cơ bản

Tạo dự án Engineer kit mới trong thư mục hiện tại:

```bash
ck new --kit engineer
```

**Kết quả mong đợi:**

```
🚀 ClaudeKit - Create New Project

Selected kit: ClaudeKit Engineer
Target directory: /Users/you/my-project
✓ Repository access verified
✓ Found: v1.16.0

Downloading
████████████████████████████████████████ 100% | 2.5 MB

Installing
✓ Files merged successfully

✨ Project created successfully at /Users/you/my-project
```

### Thư mục cụ thể

Tạo dự án trong thư mục tùy chỉnh:

```bash
ck new --kit engineer --dir ~/projects/my-awesome-app
```

### Bao gồm các phiên bản Beta

Hiển thị và chọn từ các phiên bản beta/prerelease:

```bash
ck new --beta
```

Điều này bao gồm các phiên bản được gắn thẻ là prerelease trong menu lựa chọn phiên bản.

### Cài đặt với các phụ thuộc

Tạo dự án và tự động cài đặt tất cả các phụ thuộc kỹ năng:

```bash
ck new --kit engineer --install-skills
```

Cài đặt:
- Gói Python (được định nghĩa trong tệp requirements.txt của kỹ năng)
- Công cụ hệ thống (FFmpeg, ImageMagick qua trình quản lý gói)
- Gói Node.js (phụ thuộc kỹ năng)

### Chế độ không tương tác

Dành cho CI/CD hoặc tập lệnh (yêu cầu tất cả các cờ cần thiết):

```bash
ck new --kit engineer --dir ./my-project --release v1.16.0 --force
```

**Lưu ý**: Không có `--release`, chế độ không tương tác sẽ không thành công. Lựa chọn phiên bản tương tác yêu cầu TTY.

### Loại trừ các tệp

Bỏ qua các tệp hoặc mô hình cụ thể trong quá trình cài đặt:

```bash
ck new --exclude "*.log" --exclude "temp/**" --exclude "node_modules/**"
```

**Mô hình Glob được hỗ trợ:**
- `*` - Bất kỳ ký tự nào
- `**` - Thư mục đệ quy
- `?` - Ký tự đơn
- `[abc]` - Bộ ký tự
- `{a,b}` - Các lựa chọn thay thế

### Tiền tố lệnh

Chuyển các lệnh ClaudeKit đến không gian tên `/ck:` để tránh xung đột:

```bash
ck new --prefix
```

Điều này chuyển đổi:
- `/plan` → `/ck:plan`
- `/review` → `/ck:review`
- `/debug` → `/ck:debug`

Hữu ích khi bạn có các lệnh tùy chỉnh xung đột với các mặc định ClaudeKit.

### Tên thư mục tùy chỉnh

Sử dụng tên tùy chỉnh cho thư mục tài liệu và kế hoạch:

```bash
ck new --docs-dir documentation --plans-dir planning
```

Cái này tạo:
- `documentation/` thay vì `docs/`
- `planning/` thay vì `plans/`

Và cập nhật tất cả các tham chiếu trong các tệp quy trình làm việc một cách tự động.

## Mô hình phổ biến

### Thiết lập đầy đủ tính năng

Tạo dự án hoàn chỉnh với tất cả các tính năng:

```bash
ck new \
  --kit engineer \
  --dir ~/projects/new-app \
  --install-skills \
  --gemini \
  --prefix
```

### Kiểm tra Beta

Thử các tính năng prerelease mới nhất:

```bash
ck new --beta --kit engineer
```

### Nguyên mẫu nhanh

Thiết lập tối thiểu để kiểm tra nhanh:

```bash
ck new --kit engineer --dir ./test-project
```

### Thiết lập sản xuất

Phiên bản ổn định với các phụ thuộc kỹ năng cho sản xuất:

```bash
ck new \
  --kit engineer \
  --release v1.16.0 \
  --install-skills \
  --dir ~/production-app
```

## Xử lý sự cố

### "Directory is not empty"

**Vấn đề**: Thư mục đích chứa các tệp.

**Giải pháp**:

Sử dụng `--force` để ghi đè (chế độ tương tác sẽ nhắc):

```bash
ck new --force --dir ./existing-project
```

Hoặc chọn thư mục khác:

```bash
ck new --dir ./new-project
```

### "Access denied to repository"

**Vấn đề**: Xác thực GitHub không thành công hoặc không được cấp quyền truy cập kho lưu trữ.

**Giải pháp**:

1. Chạy kiểm tra sức khỏe:

```bash
ck doctor
```

2. Xác thực lại:

```bash
gh auth login
```

Chọn tùy chọn "Login with a web browser".

3. Chấp nhận lời mời kho lưu trữ (kiểm tra email)
4. Đợi 2-5 phút để quyền truyền tải

### "Interactive version selection unavailable in non-interactive mode"

**Vấn đề**: Chạy trong CI/CD mà không có TTY và không có cờ `--release`.

**Giải pháp**:

Chỉ định phiên bản một cách rõ ràng:

```bash
ck new --kit engineer --release v1.16.0
```

Hoặc đặt `CI=false` để bật chế độ tương tác (nếu TTY có sẵn).

### Các vấn đề cụ thể theo nền tảng

**Windows:**

- Sử dụng PowerShell hoặc Windows Terminal
- Đường dẫn có chứa dấu cách: Sử dụng dấu ngoặc kép `--dir "C:\My Projects\app"`
- Một số phần mềm antivirus có thể gắn cờ tải xuống (danh sách trắng `ck` command)

**macOS:**

- Yêu cầu Xcode Command Line Tools để git
- Sử dụng Homebrew để phụ thuộc hệ thống: `brew install gh`

**Linux:**

- Trình quản lý gói khác nhau theo distro (apt, yum, pacman)
- Có thể cần sudo cho các cài đặt npm toàn cầu
- WSL được hỗ trợ đầy đủ

## Những gì được tạo

Sau khi `ck new` hoàn thành thành công, cấu trúc dự án của bạn trông như sau:

```
my-project/
├── .claude/
│   ├── agents/           # AI agent definitions
│   ├── commands/         # Slash commands
│   ├── skills/           # Reusable skills
│   ├── workflows/        # Workflow definitions
│   ├── hooks/            # Lifecycle hooks
│   ├── settings.json     # Project settings
│   └── metadata.json     # Installation metadata
├── docs/                 # Documentation
├── plans/                # Planning directory
├── CLAUDE.md             # Claude Code instructions
├── .env.example          # Environment variables template
└── README.md             # Project readme
```

## Bước tiếp theo

Sau khi tạo dự án:

1. **Điều hướng đến dự án:**

```bash
cd my-project
```

2. **Xem xét cấu hình:**

```bash
cat .claude/settings.json
```

3. **Thiết lập các biến môi trường:**

```bash
cp .env.example .env
# Edit .env with your API keys
```

4. **Bắt đầu mã hóa với Claude Code** - Mở dự án trong Claude Code và bắt đầu sử dụng các lệnh

5. **Cập nhật sau:**

```bash
ck init  # Update to latest version
```

## Lệnh liên quan

- [`ck init`](/vi/docs/cli/init) - Cập nhật dự án hiện có
- [`ck versions`](/vi/docs/cli/versions) - Duyệt các phiên bản có sẵn
- [`ck doctor`](/vi/docs/cli/doctor) - Khắc phục sự cố các vấn đề
- [Configuration](/vi/docs/cli/configuration) - Tùy chỉnh các giá trị mặc định
