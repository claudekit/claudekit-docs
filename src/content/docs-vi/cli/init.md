---
title: "ck init"
lang: vi
description: "Khởi tạo hoặc cập nhật ClaudeKit trong các dự án hiện có với tính năng hợp nhất tệp thông minh và bảo toàn tùy chỉnh"
section: cli
order: 4
---

# ck init

> Khởi tạo hoặc cập nhật ClaudeKit trong các dự án hiện có với tính năng hợp nhất tệp thông minh và bảo toàn tùy chỉnh tự động.

## Bắt Đầu Nhanh

```bash
# Chế độ tương tác (khuyến nghị)
ck init

# Không tương tác với các giá trị mặc định hợp lý
ck init --yes

# Cài đặt toàn cục (cấu hình cấp người dùng)
ck init --global

# Cài đặt mới hoàn toàn (xóa tất cả tùy chỉnh)
ck init --fresh
```

**Quan trọng**: Chạy `ck init` từ thư mục gốc của dự án.

## Quá Trình Thực Hiện

Lệnh `ck init`:

1. Phát hiện cài đặt ClaudeKit hiện có (cục bộ hoặc toàn cục)
2. Hỏi về kit và lựa chọn phiên bản
3. Tải xuống bản phát hành đã chọn
4. Hợp nhất tệp mới trong khi bảo toàn tùy chỉnh của bạn
5. Di chuyển thư mục skills nếu cấu trúc thay đổi
6. Cập nhật metadata cài đặt
7. Tùy chọn cài đặt các phụ thuộc skill

## Cú Pháp

```bash
ck init [OPTIONS]
```

### Tùy Chọn

| Cờ | Mô tả | Mặc định |
|------|-------------|---------|
| `--kit <name>` | Kit để cài đặt (`engineer` hoặc `marketing`) | Lời nhắc tương tác |
| `--dir <path>` | Thư mục đích | Thư mục hiện tại |
| `--release <tag>` | Phiên bản phát hành cụ thể | Ổn định mới nhất |
| `--beta` | Bao gồm phiên bản beta trong lựa chọn | `false` |
| `--refresh` | Buộc làm mới cache cho các bản phát hành | `false` |
| `--global` / `-g` | Cài đặt vào thư mục người dùng (`~/.claude/`) | `false` (cục bộ) |
| `--yes` / `-y` | Chế độ không tương tác với giá trị mặc định | `false` |
| `--fresh` | Xóa `.claude/` hiện có trước khi cài đặt | `false` |
| `--exclude <pattern>` | Loại trừ tệp khớp với mẫu (có thể lặp lại) | Không có |
| `--only <pattern>` | Chỉ cập nhật các thư mục cụ thể (có thể lặp lại) | Tất cả |
| `--prefix` | Áp dụng namespace `/ck:` cho các lệnh | `false` |
| `--install-skills` | Tự động cài đặt phụ thuộc skill | `false` |
| `--skip-setup` | Bỏ qua trình hướng dẫn thiết lập API key | `false` |
| `--force-overwrite-settings` | Ghi đè hoàn toàn settings.json | `false` |
| `--docs-dir <name>` | Tên thư mục docs tùy chỉnh | `docs` |
| `--plans-dir <name>` | Tên thư mục plans tùy chỉnh | `plans` |
| `--dry-run` | Xem trước các thay đổi mà không áp dụng | `false` |
| `--force-overwrite` | Ghi đè tệp đã sửa đổi (dùng thận trọng) | `false` |
| `--verbose` | Bật ghi nhật ký chi tiết | `false` |

## Ví Dụ

### Cập Nhật Dự Án Hiện Có

Cập nhật dự án lên phiên bản mới nhất:

```bash
cd my-project
ck init
```

**Đầu ra mong đợi:**

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

### Chế Độ Không Tương Tác

Cập nhật với giá trị mặc định (dùng phiên bản mới nhất, bỏ qua tất cả lời nhắc):

```bash
ck init --yes
```

**Hành vi mặc định với `--yes`:**

| Lời nhắc | Giá trị mặc định |
|--------|---------------|
| Chọn kit | `engineer` (đầu tiên có sẵn) |
| Thư mục đích | `.` (thư mục hiện tại) |
| Phiên bản | Bản phát hành ổn định mới nhất |
| Thiết lập Gemini | Bỏ qua |
| Tính năng tùy chọn | Bỏ qua |

### Cài Đặt Toàn Cục

Cài đặt ClaudeKit ở cấp người dùng (`~/.claude/`):

```bash
ck init --global
```

**Đường dẫn theo nền tảng:**

- **macOS/Linux**: `~/.claude/`
- **Windows**: `%USERPROFILE%\.claude\`

Chế độ toàn cục hữu ích cho:
- Chia sẻ cấu hình giữa các dự án
- Sử dụng lệnh ClaudeKit ở mọi nơi
- Quản lý skill tập trung

### Cài Đặt Mới Hoàn Toàn

Xóa tất cả tệp ClaudeKit hiện có và cài đặt lại:

```bash
ck init --fresh
```

**Cảnh báo**: Thao tác này xóa vĩnh viễn:
- Thư mục `.claude/` và toàn bộ nội dung
- Các lệnh tùy chỉnh, workflow và cấu hình
- Tùy chỉnh skill

Các tệp được bảo vệ vẫn được giữ lại:
- `.env`, `.env.local`
- `*.key`, `*.pem`, `*.p12`
- `settings.json`, `CLAUDE.md`

### Cập Nhật Có Chọn Lọc

Chỉ cập nhật các thư mục cụ thể:

```bash
ck init --only commands --only workflows
```

Các thư mục có sẵn:
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
- Các tệp sẽ được giữ lại
- Trạng thái quyền sở hữu của từng tệp

### Kết Hợp Cờ

Các kết hợp phổ biến:

```bash
# Toàn cục + không tương tác
ck init -g -y

# Phiên bản beta + cài đặt skill
ck init --beta --install-skills

# Cài đặt mới + phiên bản cụ thể
ck init --fresh --release v1.16.0 --yes
```

## Chế Độ Cục Bộ vs Toàn Cục

### Chế Độ Cục Bộ (Mặc Định)

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

**Dùng khi:**
- Làm việc trên một dự án duy nhất
- Cần cấu hình theo từng dự án
- Cộng tác với nhóm (commit vào git)

### Chế Độ Toàn Cục

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

**Dùng khi:**
- Sử dụng ClaudeKit trên nhiều dự án
- Muốn cấu hình tập trung
- Cần các skill có sẵn toàn cục

**Lưu ý**: Cài đặt cục bộ có ưu tiên cao hơn toàn cục nếu cả hai cùng tồn tại.

## Các Mẫu Phổ Biến

### Cập Nhật Lên Beta Mới Nhất

Lấy các tính năng prerelease mới nhất:

```bash
ck init --beta
```

### Phiên Bản Cụ Thể

Ghim vào phiên bản ổn định đã biết:

```bash
ck init --release v1.16.0
```

### Chỉ Cập Nhật Lệnh

Làm mới các lệnh trong khi giữ các tùy chỉnh khác:

```bash
ck init --only commands
```

### Cài Đặt Lại Hoàn Toàn

Tùy chọn triệt để - bắt đầu lại từ đầu:

```bash
ck init --fresh --yes --install-skills
```

### Cập Nhật CI/CD

Cập nhật tự động trong CI pipeline:

```bash
ck init --yes --release v1.16.0 --skip-setup
```

## Bảo Toàn Tùy Chỉnh

`ck init` thông minh bảo toàn các tùy chỉnh qua các lần cập nhật.

### Được Bảo Vệ Theo Mặc Định

Luôn được giữ lại trong quá trình cập nhật:

- `.env`, `.env.local`, `.env.*.local`
- `*.key`, `*.pem`, `*.p12`, `*.pfx`
- `settings.json`, `settings.local.json`
- `CLAUDE.md` (ở chế độ global)
- Các tệp trong `node_modules/`, `.git/`, `dist/`, `build/`

### Phát Hiện Tệp Tùy Chỉnh

Tự động phát hiện và bảo toàn:

- Lệnh slash tùy chỉnh (không có trong manifest phát hành)
- Workflow cá nhân
- Skill do người dùng tạo
- Tệp ClaudeKit đã sửa đổi (phát hiện dựa trên checksum)

### Theo Dõi Quyền Sở Hữu

Các tệp được theo dõi với quyền sở hữu:

- **ck-owned**: Tệp ClaudeKit gốc, chưa sửa đổi (có thể cập nhật)
- **ck-modified**: Tệp ClaudeKit mà bạn đã chỉnh sửa (được bảo toàn theo mặc định)
- **user-created**: Tệp tùy chỉnh của bạn (luôn được bảo toàn)

### Di Chuyển Skill

Tự động di chuyển khi cấu trúc thư mục thay đổi:

**Ví dụ:**

```
Trước (phẳng):
.claude/skills/
  ├── gemini-vision/
  ├── postgresql-psql/
  └── cloudflare-dns/

Sau (phân loại):
.claude/skills/
  ├── ai-multimodal/
  │   └── gemini-vision/
  ├── databases/
  │   └── postgresql-psql/
  └── devops/
      └── cloudflare-dns/
```

Các tùy chỉnh trong bất kỳ skill nào được phát hiện và bảo toàn trong quá trình di chuyển.

## Xử Lý Sự Cố

### "Directory does not exist"

**Vấn đề:** Thư mục đích không tìm thấy.

**Giải pháp:**

Dùng `ck new` để tạo dự án mới:

```bash
ck new --kit engineer --dir ./my-project
```

Hoặc tạo thư mục trước:

```bash
mkdir my-project && cd my-project
ck init
```

### "Local .claude/settings.json detected" (Chế Độ Toàn Cục)

**Vấn đề:** Cài đặt cục bộ tồn tại khi cố gắng cài đặt toàn cục.

**Giải pháp:**

Chọn một trong các tùy chọn được hiển thị:

1. **Xóa cục bộ** - Xóa `.claude/` và dùng toàn cục
2. **Giữ cả hai** - Cài đặt cục bộ sẽ có ưu tiên cao hơn
3. **Hủy** - Hủy bỏ cài đặt

Hoặc dùng cờ để bắt buộc:

```bash
# Xóa cục bộ trước khi cài đặt toàn cục
rm -rf .claude
ck init --global
```

## Các Bước Tiếp Theo

Sau khi khởi tạo:

1. **Xác minh cài đặt:**

```bash
ck --version
```

2. **Chạy kiểm tra tình trạng:**

```bash
ck doctor
```

3. **Xem lại các tệp đã cập nhật:**

```bash
ls -la .claude/
```

4. **Thử một lệnh:**

Mở dự án trong Claude Code và thử lệnh slash như `/ck:plan`.

5. **Cài đặt phụ thuộc skill (nếu chưa làm):**

```bash
ck init --install-skills
```

## Các Lệnh Liên Quan

- [`ck new`](/vi/docs/cli/new) - Tạo dự án mới
- [`ck doctor`](/vi/docs/cli/doctor) - Chẩn đoán sự cố
- [`ck versions`](/vi/docs/cli/versions) - Duyệt các phiên bản
- [`ck uninstall`](/vi/docs/cli/uninstall) - Xóa cài đặt
- [Configuration](/vi/docs/cli/configuration) - Cấu hình mặc định
