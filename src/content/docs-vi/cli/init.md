---
title: "ck init"
description: "Khởi tạo hoặc cập nhật ClaudeKit trong các dự án hiện có với hợp nhất tệp thông minh và bảo tồn tùy chỉnh"
section: cli
order: 4
---

# ck init

> Khởi tạo hoặc cập nhật ClaudeKit trong dự án hiện có với hợp nhất tệp thông minh và bảo tồn tùy chỉnh tự động.

## Bắt đầu nhanh chóng

```bash
# Interactive mode (recommended)
ck init

# Non-interactive with sensible defaults
ck init --yes

# Global installation (user-level config)
ck init --global

# Fresh installation (removes all customizations)
ck init --fresh
```

**Quan trọng**: Chạy `ck init` từ thư mục gốc dự án của bạn.

## Điều gì xảy ra

Lệnh `ck init`:

1. Phát hiện cài đặt ClaudeKit hiện có (cục bộ hoặc toàn cầu)
2. Nhắc lựa chọn bộ và phiên bản
3. Tải xuống bản phát hành đã chọn
4. Hợp nhất các tệp mới trong khi bảo tồn tùy chỉnh của bạn
5. Di chuyển thư mục kỹ năng nếu cấu trúc thay đổi
6. Cập nhật siêu dữ liệu cài đặt
7. Tùy chọn cài đặt các phụ thuộc kỹ năng

## Cú pháp

```bash
ck init [OPTIONS]
```

### Tùy chọn

| Flag | Mô tả | Mặc định |
|------|-------------|---------|
| `--kit <name>` | Bộ để cài đặt (`engineer` hoặc `marketing`) | Interactive prompt |
| `--dir <path>` | Thư mục đích | Current directory |
| `--release <tag>` | Phiên bản bản phát hành cụ thể | Latest stable |
| `--beta` | Bao gồm các phiên bản beta trong lựa chọn | `false` |
| `--refresh` | Buộc làm mới bộ nhớ đệm bản phát hành | `false` |
| `--global` / `-g` | Cài đặt vào thư mục người dùng (`~/.claude/`) | `false` (local) |
| `--yes` / `-y` | Chế độ không tương tác với các giá trị mặc định | `false` |
| `--fresh` | Xóa `.claude/` hiện có trước khi cài đặt | `false` |
| `--exclude <pattern>` | Loại trừ các tệp khớp với mô hình (có thể lặp lại) | None |
| `--only <pattern>` | Chỉ cập nhật thư mục cụ thể (có thể lặp lại) | All |
| `--prefix` | Áp dụng không gian tên `/ck:` cho các lệnh | `false` |
| `--install-skills` | Tự động cài đặt các phụ thuộc kỹ năng | `false` |
| `--skip-setup` | Bỏ qua trình hướng dẫn thiết lập khóa API | `false` |
| `--force-overwrite-settings` | Ghi đè settings.json hoàn toàn | `false` |
| `--docs-dir <name>` | Tên thư mục tài liệu tùy chỉnh | `docs` |
| `--plans-dir <name>` | Tên thư mục kế hoạch tùy chỉnh | `plans` |
| `--dry-run` | Xem trước các thay đổi mà không áp dụng | `false` |
| `--force-overwrite` | Ghi đè các tệp được sửa đổi (sử dụng cẩn thận) | `false` |
| `--verbose` | Bật ghi nhật ký chi tiết | `false` |

## Ví dụ

### Cập nhật dự án hiện có

Cập nhật dự án của bạn lên phiên bản mới nhất:

```bash
cd my-project
ck init
```

**Kết quả mong đợi:**

```
🔧 ClaudeKit - Initialize/Update Project

Selected kit: ClaudeKit Engineer
Target directory: /Users/you/my-project
✓ Repository access verified
✓ Found: v1.17.0

Downloading
████████████████████████████████████████ 100% | 2.5 MB

Scanning for custom .claude files...
✓ Protected 3 custom .claude file(s)

Installing
✓ Files merged successfully
✓ Tracked 245 files

✨ Project initialized successfully
```

### Chế độ không tương tác

Cập nhật với các giá trị mặc định (sử dụng phiên bản mới nhất, bỏ qua tất cả các lời nhắc):

```bash
ck init --yes
```

**Hành vi mặc định với `--yes`:**

| Lời nhắc | Giá trị mặc định |
|--------|---------------|
| Lựa chọn bộ | `engineer` (cái đầu tiên có sẵn) |
| Thư mục đích | `.` (thư mục hiện tại) |
| Phiên bản | Bản phát hành ổn định mới nhất |
| Thiết lập Gemini | Bỏ qua |
| Tính năng tùy chọn | Bỏ qua |

### Cài đặt toàn cầu

Cài đặt ClaudeKit ở mức người dùng (`~/.claude/`):

```bash
ck init --global
```

**Đường dẫn cụ thể theo nền tảng:**

- **macOS/Linux**: `~/.claude/`
- **Windows**: `%USERPROFILE%\.claude\`

Chế độ toàn cầu hữu ích cho:
- Chia sẻ cấu hình trên các dự án
- Sử dụng các lệnh ClaudeKit ở mọi nơi
- Quản lý kỹ năng tập trung

### Cài đặt Fresh

Xóa tất cả các tệp ClaudeKit hiện có và cài đặt lại:

```bash
ck init --fresh
```

**Cảnh báo**: Cái này xóa vĩnh viễn:
- Thư mục `.claude/` và tất cả nội dung
- Các lệnh, quy trình làm việc và cấu hình tùy chỉnh
- Tùy chỉnh kỹ năng

Các tệp được bảo vệ vẫn được bảo tồn:
- `.env`, `.env.local`
- `*.key`, `*.pem`, `*.p12`
- `settings.json`, `CLAUDE.md`

### Cập nhật lựa chọn

Chỉ cập nhật các thư mục cụ thể:

```bash
ck init --only commands --only workflows
```

Thư mục khả dụng:
- `commands`
- `agents`
- `skills`
- `workflows`
- `hooks`

### Dry Run

Xem trước những gì sẽ thay đổi mà không áp dụng:

```bash
ck init --dry-run
```

Hiển thị:
- Các tệp sẽ được thêm
- Các tệp sẽ được cập nhật
- Các tệp sẽ được bảo tồn
- Trạng thái quyền sở hữu của mỗi tệp

### Cờ kết hợp

Các kết hợp phổ biến:

```bash
# Global + non-interactive
ck init -g -y

# Beta version + skill installation
ck init --beta --install-skills

# Fresh install + specific version
ck init --fresh --release v1.16.0 --yes
```

## Chế độ cục bộ vs toàn cầu

### Chế độ cục bộ (Mặc định)

Cài đặt vào `.claude/` trong thư mục dự án:

```bash
cd my-project
ck init
```

**Cấu trúc:**

```
my-project/
├── .claude/
│   ├── agents/
│   ├── commands/
│   ├── skills/
│   └── ...
└── ...
```

**Sử dụng khi:**
- Làm việc trên một dự án
- Cần cấu hình cụ thể dự án
- Cộng tác với nhóm (cam kết với git)

### Chế độ toàn cầu

Cài đặt vào `~/.claude/` (thư mục người dùng):

```bash
ck init --global
```

**Cấu trúc:**

```
~/.claude/
├── agents/
├── commands/
├── skills/
└── ...
```

**Sử dụng khi:**
- Sử dụng ClaudeKit trên nhiều dự án
- Muốn cấu hình tập trung
- Cần kỹ năng có sẵn trên toàn cầu

**Lưu ý**: Các cài đặt cục bộ có ưu tiên hơn cài đặt toàn cầu nếu cả hai tồn tại.

## Mô hình phổ biến

### Cập nhật lên Beta mới nhất

Nhận các tính năng prerelease mới nhất:

```bash
ck init --beta
```

### Phiên bản cụ thể

Ghim phiên bản ổn định đã biết:

```bash
ck init --release v1.16.0
```

### Chỉ cập nhật lệnh

Làm mới các lệnh trong khi giữ các tùy chỉnh khác:

```bash
ck init --only commands
```

### Cài đặt lại đầy đủ

Lựa chọn hạch nhân - bắt đầu lại từ đầu:

```bash
ck init --fresh --yes --install-skills
```

### Cập nhật CI/CD

Cập nhật tự động trong quy trình CI:

```bash
ck init --yes --release v1.16.0 --skip-setup
```

## Bảo tồn tùy chỉnh

`ck init` bảo tồn tùy chỉnh một cách thông minh trong các cập nhật.

### Được bảo vệ theo mặc định

Luôn được bảo tồn trong các cập nhật:

- `.env`, `.env.local`, `.env.*.local`
- `*.key`, `*.pem`, `*.p12`, `*.pfx`
- `settings.json`, `settings.local.json`
- `CLAUDE.md` (trong chế độ toàn cầu)
- Các tệp trong `node_modules/`, `.git/`, `dist/`, `build/`

### Phát hiện tệp tùy chỉnh

Được phát hiện và bảo tồn tự động:

- Các lệnh gạch chéo tùy chỉnh (không có trong bản kê khai bản phát hành)
- Quy trình làm việc cá nhân
- Kỹ năng do người dùng tạo
- Các tệp ClaudeKit được sửa đổi (phát hiện dựa trên checksum)

### Theo dõi quyền sở hữu

Các tệp được theo dõi với quyền sở hữu:

- **ck-owned**: Các tệp ClaudeKit ban đầu, chưa được sửa đổi (có thể được cập nhật)
- **ck-modified**: Các tệp ClaudeKit bạn đã chỉnh sửa (được bảo tồn theo mặc định)
- **user-created**: Các tệp tùy chỉnh của bạn (luôn được bảo tồn)

### Di chuyển kỹ năng

Di chuyển tự động khi cấu trúc thư mục thay đổi:

**Ví dụ:**

```
Trước (phẳng):
.claude/skills/
  ├── gemini-vision/
  ├── postgresql-psql/
  └── cloudflare-dns/

Sau (được phân loại):
.claude/skills/
  ├── ai-multimodal/
  │   └── gemini-vision/
  ├── databases/
  │   └── postgresql-psql/
  └── devops/
      └── cloudflare-dns/
```

Các tùy chỉnh trong bất kỳ kỹ năng nào đều được phát hiện và bảo tồn trong quá trình di chuyển.

## Xử lý sự cố

### "Directory does not exist"

**Vấn đề:** Thư mục đích không tìm thấy.

**Giải pháp:**

Sử dụng `ck new` để tạo dự án mới:

```bash
ck new --kit engineer --dir ./my-project
```

Hoặc tạo thư mục trước:

```bash
mkdir my-project && cd my-project
ck init
```

### "Local .claude/settings.json detected" (Chế độ toàn cầu)

**Vấn đề:** Cài đặt cục bộ tồn tại khi cố gắng cài đặt toàn cầu.

**Giải pháp:**

Chọn một trong các tùy chọn được nhắc:

1. **Xóa cục bộ** - Xóa `.claude/` và sử dụng toàn cầu
2. **Giữ cả hai** - Cài đặt cục bộ sẽ có ưu tiên
3. **Hủy** - Hủy bỏ cài đặt

Hoặc sử dụng cờ để buộc:

```bash
# Xóa cục bộ trước khi cài đặt toàn cầu
rm -rf .claude
ck init --global
```

## Bước tiếp theo

Sau khi khởi tạo:

1. **Xác minh cài đặt:**

```bash
ck --version
```

2. **Chạy kiểm tra sức khỏe:**

```bash
ck doctor
```

3. **Xem xét các tệp được cập nhật:**

```bash
ls -la .claude/
```

4. **Kiểm tra một lệnh:**

Mở dự án của bạn trong Claude Code và thử lệnh gạch chéo như `/plan`.

5. **Cài đặt các phụ thuộc kỹ năng (nếu chưa thực hiện):**

```bash
ck init --install-skills
```

## Lệnh liên quan

- [`ck new`](/vi/docs/cli/new) - Tạo dự án mới
- [`ck doctor`](/vi/docs/cli/doctor) - Chẩn đoán các vấn đề
- [`ck versions`](/vi/docs/cli/versions) - Duyệt các phiên bản
- [`ck uninstall`](/vi/docs/cli/uninstall) - Xóa cài đặt
- [Configuration](/vi/docs/cli/configuration) - Cấu hình các giá trị mặc định
