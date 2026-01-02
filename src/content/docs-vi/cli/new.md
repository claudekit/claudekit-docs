---
title: "ck new"
description: "Tạo dự án ClaudeKit mới với các lời nhắc tương tác và các tùy chọn tùy chỉnh"
lang: vi
section: cli
order: 3
---

# ck new

> Tạo dự án ClaudeKit mới từ đầu với các lời nhắc tương tác và thiết lập tự động.

## Bắt đầu nhanh

```bash
# Chế độ tương tác (khuyên dùng cho người mới bắt đầu)
ck new

# Chỉ định bộ (kit) và thư mục
ck new --kit engineer --dir my-project

# Với các phiên bản beta và cài đặt kỹ năng
ck new --beta --install-skills
```

## Quy trình thực hiện

Lệnh `ck new` sẽ:

1. Yêu cầu bạn chọn một bộ ClaudeKit (Engineer hoặc Marketing)
2. Cho phép bạn chọn thư mục đích cho dự án
3. Tìm bản phát hành mới nhất (hoặc bản đã chọn) từ GitHub
4. Tải xuống và giải nén các tệp dự án
5. Tùy chọn cài đặt các phụ thuộc cho kỹ năng (skills)
6. Tạo ra một dự án ClaudeKit sẵn sàng sử dụng

## Cú pháp

```bash
ck new [OPTIONS]
```

### Tùy chọn

| Cờ (Flag) | Mô tả | Mặc định |
|------|-------------|---------|
| `--kit <name>` | Bộ kit cần cài đặt (`engineer` hoặc `marketing`) | Lời nhắc tương tác |
| `--dir <path>` | Thư mục đích cho dự án | Lời nhắc tương tác |
| `--release <tag>` | Phiên bản cụ thể để cài đặt | Bản ổn định mới nhất |
| `--beta` | Bao gồm các phiên bản beta/prerelease trong lựa chọn | `false` |
| `--refresh` | Buộc làm mới bộ nhớ đệm của các bản phát hành | `false` |
| `--force` | Ghi đè các tệp trong thư mục không trống | `false` |
| `--exclude <pattern>` | Loại trừ các tệp khớp với mẫu glob (có thể lặp lại) | Không có |
| `--prefix` | Chuyển các lệnh sang không gian tên `/ck:` | `false` |
| `--opencode` | Cài đặt gói OpenCode trên toàn cầu | `false` |
| `--gemini` | Cài đặt Gemini CLI và thiết lập tích hợp MCP | `false` |
| `--install-skills` | Tự động cài đặt các phụ thuộc của kỹ năng | `false` |
| `--docs-dir <name>` | Tên tùy chỉnh cho thư mục tài liệu | `docs` |
| `--plans-dir <name>` | Tên tùy chỉnh cho thư mục kế hoạch | `plans` |
| `--verbose` | Bật ghi nhật ký chi tiết | `false` |
| `--log-file <path>` | Lưu nhật ký vào tệp | Không có |

## Ví dụ

### Tạo dự án cơ bản

Tạo một dự án Engineer kit mới trong thư mục hiện tại:

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

### Chỉ định thư mục

Tạo dự án trong một thư mục tùy chỉnh:

```bash
ck new --kit engineer --dir ~/projects/my-awesome-app
```

### Bao gồm các phiên bản Beta

Hiển thị và chọn từ các phiên bản beta/prerelease:

```bash
ck new --beta
```

Tùy chọn này sẽ bao gồm các phiên bản được đánh dấu là prerelease trong menu chọn phiên bản.

### Cài đặt cùng các phụ thuộc

Tạo dự án và tự động cài đặt tất cả các phụ thuộc của kỹ năng:

```bash
ck new --kit engineer --install-skills
```

Lệnh này sẽ cài đặt:
- Các gói Python (được định nghĩa trong file requirements.txt của kỹ năng)
- Các công cụ hệ thống (FFmpeg, ImageMagick qua trình quản lý gói)
- Các gói Node.js (phụ thuộc của kỹ năng)

### Chế độ không tương tác

Dành cho CI/CD hoặc các tập lệnh (yêu cầu cung cấp đầy đủ các cờ cần thiết):

```bash
ck new --kit engineer --dir ./my-project --release v1.16.0 --force
```

**Lưu ý**: Nếu không có `--release`, chế độ không tương tác sẽ thất bại. Việc chọn phiên bản tương tác yêu cầu TTY.

### Loại trừ tệp

Bỏ qua các tệp hoặc mẫu cụ thể trong quá trình cài đặt:

```bash
ck new --exclude "*.log" --exclude "temp/**" --exclude "node_modules/**"
```

**Các mẫu Glob được hỗ trợ:**
- `*` - Bất kỳ ký tự nào
- `**` - Thư mục đệ quy
- `?` - Một ký tự đơn
- `[abc]` - Bộ ký tự
- `{a,b}` - Các lựa chọn thay thế

### Tiền tố lệnh (Prefix)

Chuyển các lệnh ClaudeKit sang không gian tên `/ck:` để tránh xung đột:

```bash
ck new --prefix
```

Việc này sẽ chuyển đổi:
- `/plan` → `/ck:plan`
- `/review` → `/ck:review`
- `/debug` → `/ck:debug`

Hữu ích khi bạn có các lệnh tùy chỉnh trùng tên với các lệnh mặc định của ClaudeKit.

### Tên thư mục tùy chỉnh

Sử dụng tên tùy chỉnh cho thư mục tài liệu và kế hoạch:

```bash
ck new --docs-dir documentation --plans-dir planning
```

Lệnh này sẽ tạo:
- `documentation/` thay vì `docs/`
- `planning/` thay vì `plans/`

Và tự động cập nhật tất cả các tham chiếu trong các tệp quy trình công việc (workflow).

## Các mẫu phổ biến

### Thiết lập đầy đủ tính năng

Tạo một dự án hoàn chỉnh với tất cả các tính năng:

```bash
ck new \
  --kit engineer \
  --dir ~/projects/new-app \
  --install-skills \
  --gemini \
  --prefix
```

### Thử nghiệm Beta

Thử các tính năng prerelease mới nhất:

```bash
ck new --beta --kit engineer
```

### Tạo mẫu nhanh (Prototyping)

Thiết lập tối thiểu để kiểm tra nhanh:

```bash
ck new --kit engineer --dir ./test-project
```

### Thiết lập cho môi trường sản xuất (Production)

Sử dụng phiên bản ổn định với các phụ thuộc kỹ năng cho sản xuất:

```bash
ck new \
  --kit engineer \
  --release v1.16.0 \
  --install-skills \
  --dir ~/production-app
```

## Xử lý sự cố

### "Directory is not empty"

**Vấn đề**: Thư mục đích đã có sẵn tệp tin.

**Giải pháp**:

Sử dụng `--force` để ghi đè (chế độ tương tác sẽ hỏi bạn):

```bash
ck new --force --dir ./existing-project
```

Hoặc chọn một thư mục khác:

```bash
ck new --dir ./new-project
```

### "Access denied to repository"

**Vấn đề**: Xác thực GitHub thất bại hoặc bạn chưa được cấp quyền truy cập kho lưu trữ.

**Giải pháp**:

1. Chạy kiểm tra hệ thống:

```bash
ck doctor
```

2. Xác thực lại:

```bash
gh auth login
```

Chọn tùy chọn "Login with a web browser".

3. Chấp nhận lời mời tham gia kho lưu trữ (kiểm tra email của bạn).
4. Đợi 2-5 phút để quyền hạn được cập nhật.

### "Interactive version selection unavailable in non-interactive mode"

**Vấn đề**: Chạy trong môi trường CI/CD không có TTY và thiếu cờ `--release`.

**Giải pháp**:

Chỉ định phiên bản một cách rõ ràng:

```bash
ck new --kit engineer --release v1.16.0
```

Hoặc đặt `CI=false` để bật chế độ tương tác (nếu có TTY).

### Các vấn đề theo nền tảng

**Windows:**

- Sử dụng PowerShell hoặc Windows Terminal.
- Đường dẫn có khoảng trắng: Sử dụng dấu ngoặc kép `--dir "C:\My Projects\app"`.
- Một số phần mềm diệt virus có thể chặn việc tải xuống (hãy thêm lệnh `ck` vào danh sách trắng).

**macOS:**

- Yêu cầu Xcode Command Line Tools cho git.
- Sử dụng Homebrew cho các phụ thuộc hệ thống: `brew install gh`.

**Linux:**

- Trình quản lý gói khác nhau tùy bản phân phối (apt, yum, pacman).
- Có thể cần `sudo` cho việc cài đặt npm toàn cầu.
- WSL được hỗ trợ đầy đủ.

## Cấu trúc được tạo ra

Sau khi `ck new` hoàn tất, cấu trúc dự án của bạn sẽ trông như thế này:

```
my-project/
├── .claude/
│   ├── agents/           # Định nghĩa các AI agent
│   ├── commands/         # Các lệnh slash (/)
│   ├── skills/           # Các kỹ năng có thể tái sử dụng
│   ├── workflows/        # Định nghĩa quy trình công việc
│   ├── hooks/            # Các hook vòng đời
│   ├── settings.json     # Cấu hình dự án
│   └── metadata.json     # Siêu dữ liệu cài đặt
├── docs/                 # Tài liệu
├── plans/                # Thư mục lập kế hoạch
├── CLAUDE.md             # Hướng dẫn cho Claude Code
├── .env.example          # Mẫu biến môi trường
└── README.md             # File giới thiệu dự án
```

## Các bước tiếp theo

Sau khi tạo dự án:

1. **Truy cập vào thư mục dự án:**

```bash
cd my-project
```

2. **Xem lại cấu hình:**

```bash
cat .claude/settings.json
```

3. **Thiết lập biến môi trường:**

```bash
cp .env.example .env
# Chỉnh sửa .env với các API key của bạn
```

4. **Bắt đầu lập trình với Claude Code** - Mở dự án trong Claude Code và bắt đầu sử dụng các lệnh.

5. **Cập nhật sau này:**

```bash
ck init  # Cập nhật lên phiên bản mới nhất
```

## Các lệnh liên quan

- [`ck init`](/vi/docs/cli/init) - Cập nhật dự án hiện có
- [`ck versions`](/vi/docs/cli/versions) - Xem các phiên bản có sẵn
- [`ck doctor`](/vi/docs/cli/doctor) - Chẩn đoán và sửa lỗi
- [Cấu hình](/vi/docs/cli/configuration) - Tùy chỉnh các giá trị mặc định
