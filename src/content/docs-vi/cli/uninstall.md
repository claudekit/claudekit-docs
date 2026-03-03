---
title: "ck uninstall"
lang: vi
description: "Xóa cài đặt ClaudeKit với quản lý tệp thông minh theo quyền sở hữu và bảo toàn tùy chỉnh"
section: cli
order: 8
---

# ck uninstall

> Xóa cài đặt ClaudeKit khỏi hệ thống của bạn với tính năng bảo toàn tùy chỉnh thông minh và quản lý tệp theo quyền sở hữu.

## Bắt Đầu Nhanh

```bash
# Chế độ tương tác (hỏi về phạm vi và xác nhận)
ck uninstall

# Chỉ gỡ cài đặt cục bộ
ck uninstall --local

# Chỉ gỡ cài đặt toàn cục
ck uninstall --global

# Gỡ cài đặt cả hai mà không cần xác nhận
ck uninstall --yes

# Xem trước những gì sẽ bị xóa
ck uninstall --dry-run
```

## Chức Năng

Lệnh `ck uninstall`:

1. Phát hiện các cài đặt ClaudeKit (cục bộ `.claude/` và/hoặc toàn cục `~/.claude/`)
2. Hỏi bạn chọn phạm vi (cục bộ, toàn cục hoặc cả hai)
3. Phân tích tệp bằng cách theo dõi quyền sở hữu
4. Hiển thị xem trước các tệp sẽ xóa và bảo toàn
5. Xóa các tệp thuộc quyền sở hữu của ClaudeKit
6. Bảo toàn các tùy chỉnh và cấu hình của người dùng
7. Dọn dẹp các thư mục trống

## Cú Pháp

```bash
ck uninstall [OPTIONS]
```

### Tùy Chọn

| Cờ | Mô tả | Mặc định |
|------|-------------|---------|
| `--local` / `-l` | Chỉ gỡ cài đặt cục bộ (`.claude/`) | Hỏi |
| `--global` / `-g` | Chỉ gỡ cài đặt toàn cục (`~/.claude/`) | Hỏi |
| `--all` | Gỡ cài đặt cả cục bộ và toàn cục | Hỏi |
| `--yes` / `-y` | Bỏ qua lời nhắc xác nhận | `false` |
| `--kit <name>` | Chỉ gỡ cài đặt kit cụ thể (cài đặt nhiều kit) | Tất cả kit |
| `--dry-run` | Xem trước thay đổi mà không xóa tệp | `false` |
| `--force-overwrite` | Xóa cả tệp đã sửa đổi (dùng thận trọng) | `false` |
| `--verbose` | Bật ghi nhật ký chi tiết | `false` |

## Phạm Vi Cài Đặt

### Cài Đặt Cục Bộ

Nằm trong thư mục `.claude/` của dự án:

```
my-project/
└── .claude/
    ├── agents/
    ├── commands/
    ├── skills/
    └── ...
```

**Khi nào nên gỡ:**
- Xóa ClaudeKit khỏi dự án cụ thể
- Chuyển sang cài đặt toàn cục
- Dự án không còn cần ClaudeKit

### Cài Đặt Toàn Cục

Nằm trong thư mục home của người dùng:

**macOS/Linux:** `~/.claude/`
**Windows:** `%USERPROFILE%\.claude\`

**Khi nào nên gỡ:**
- Không còn sử dụng ClaudeKit
- Chuyển sang chỉ cài đặt cục bộ
- Cần cài đặt lại sạch

### Cài Đặt Nhiều Kit

Nếu có nhiều kit được cài đặt (Engineer + Marketing), bạn có thể:

- Gỡ cài đặt kit cụ thể: `ck uninstall --kit engineer`
- Gỡ cài đặt tất cả kit: `ck uninstall`

## Ví Dụ

### Gỡ Cài Đặt Tương Tác

Để CLI hướng dẫn bạn qua quá trình:

```bash
ck uninstall
```

**Ví dụ đầu ra:**

```
ClaudeKit Uninstaller

Detected ClaudeKit installations (both)
  Local : /Users/you/my-project/.claude
  Global: /Users/you/.claude

[!] This will permanently delete ClaudeKit files from the above paths.

Which installation(s) do you want to uninstall?
> Local only
  Global only
  Both

Local only selected

Continue with uninstalling local ClaudeKit installation? (y/n) y

Removing local ClaudeKit files...
✓ Removed 245 files, cleaned 15 empty directories, preserved 8 customizations

Preserved customizations:
  - .env (user-created)
  - commands/custom-cmd/ (user-created)
  - workflows/my-workflow.md (modified by user)
  ...

ClaudeKit uninstalled successfully!
```

### Chỉ Gỡ Cài Đặt Cục Bộ

Xóa ClaudeKit khỏi dự án hiện tại:

```bash
ck uninstall --local
```

Dạng ngắn tương đương:

```bash
ck uninstall -l
```

### Chỉ Gỡ Cài Đặt Toàn Cục

Xóa ClaudeKit khỏi thư mục người dùng:

```bash
ck uninstall --global
```

Dạng ngắn tương đương:

```bash
ck uninstall -g
```

### Gỡ Cài Đặt Không Tương Tác

Bỏ qua tất cả lời nhắc (hữu ích cho script):

```bash
# Chỉ cục bộ, không xác nhận
ck uninstall --local --yes

# Chỉ toàn cục, không xác nhận
ck uninstall --global --yes

# Cả hai, không xác nhận
ck uninstall --yes
```

### Dry Run

Xem trước những gì sẽ bị xóa mà không thực sự xóa:

```bash
ck uninstall --dry-run
```

**Ví dụ đầu ra:**

```
DRY RUN MODE - No files will be deleted

DRY RUN - Preview for local installation:

Files to DELETE (245):
  ✖ agents/planner/
  ✖ commands/plan/
  ✖ skills/ai-multimodal/
  ...
  ... and 235 more

Files to PRESERVE (8):
  ✓ .env (user-created)
  ✓ commands/custom-cmd/ (user-created)
  ✓ workflows/my-workflow.md (modified by user)
  ...

Dry-run complete. No changes were made.
```

### Gỡ Cài Đặt Kit Cụ Thể

Với cài đặt nhiều kit, xóa một kit trong khi giữ các kit khác:

```bash
ck uninstall --kit engineer
```

**Ví dụ đầu ra:**

```
Kit-scoped uninstall: engineer kit only

Removing local engineer kit files...
✓ Removed 150 files, marketing kit preserved

Remaining kits after uninstall: marketing
```

### Bắt Buộc Ghi Đè Tệp Đã Sửa Đổi

Xóa cả tệp bạn đã sửa đổi (dùng thận trọng):

```bash
ck uninstall --force-overwrite --yes
```

**Cảnh báo:** Thao tác này xóa vĩnh viễn các tùy chỉnh của bạn. Chỉ dùng khi:
- Bạn muốn bảng sạch hoàn toàn
- Các tùy chỉnh đã được sao lưu ở nơi khác
- Bắt đầu cài đặt mới

## Quyền Sở Hữu và Bảo Toàn Tệp

CLI sử dụng theo dõi quyền sở hữu để bảo toàn thông minh công việc của bạn.

### Danh Mục Quyền Sở Hữu

| Quyền sở hữu | Mô tả | Hành động mặc định |
|-----------|-------------|----------------|
| **ck-owned** | Tệp ClaudeKit gốc, chưa sửa đổi | XÓA |
| **ck-modified** | Tệp ClaudeKit bạn đã chỉnh sửa | GIỮ LẠI |
| **user-created** | Tệp bạn đã tạo | GIỮ LẠI |

### Luôn Được Bảo Toàn

Bất kể quyền sở hữu:

- `.env`, `.env.local`, `.env.*.local`
- `*.key`, `*.pem`, `*.p12`, `*.pfx`
- `settings.json`, `settings.local.json`
- `CLAUDE.md` (ở chế độ global)
- Các tệp trong `node_modules/`, `.git/`, `dist/`, `build/`

### Phát Hiện Tùy Chỉnh

CLI phát hiện tùy chỉnh qua:

1. **So sánh manifest** - Tệp không có trong manifest phát hành là do người dùng tạo
2. **Xác minh checksum** - Tệp đã sửa đổi được phát hiện qua SHA-256 hash
3. **Khớp mẫu** - Các tệp cấu hình người dùng đã biết được bảo toàn

## Các Mẫu Phổ Biến

### Gỡ Cài Đặt Dự Án Sạch

Xóa ClaudeKit khỏi dự án trong khi giữ cấu hình:

```bash
cd my-project
ck uninstall --local
```

Bảo toàn:
- Các tệp `.env`
- Lệnh tùy chỉnh
- Workflow đã sửa đổi

### Xóa Hoàn Toàn

Xóa tất cả cài đặt ClaudeKit trên toàn hệ thống:

```bash
ck uninstall --yes
```

Khi được hỏi, chọn "Both" để xóa cả cục bộ và toàn cục.

### Gỡ Cài Đặt An Toàn Với Xem Trước

Kiểm tra những gì sẽ bị xóa trước khi xác nhận:

```bash
ck uninstall --dry-run
ck uninstall  # Tiến hành nếu hài lòng
```

### Chuyển từ Cục Bộ sang Toàn Cục

```bash
# Xóa cài đặt cục bộ
cd my-project
ck uninstall --local --yes

# Cài đặt toàn cục
ck init --global
```

### Chuyển từ Toàn Cục sang Cục Bộ

```bash
# Xóa cài đặt toàn cục
ck uninstall --global --yes

# Cài đặt cục bộ
cd my-project
ck init
```

## Xử Lý Sự Cố

### "No ClaudeKit installations found"

**Nguyên nhân:** Không phát hiện cài đặt ClaudeKit hợp lệ nào.

**Giải thích:**

CLI chỉ gỡ cài đặt các thư mục:
- Chứa `metadata.json` (dấu hiệu cài đặt ClaudeKit)
- Là các cài đặt ClaudeKit hợp lệ

Các thư mục `.claude` thông thường từ Claude Desktop KHÔNG bị ảnh hưởng.

**Giải pháp:**

Nếu bạn cho rằng ClaudeKit đã được cài đặt:

```bash
# Kiểm tra metadata
cat .claude/metadata.json
cat ~/.claude/metadata.json

# Chạy doctor để chẩn đoán
ck doctor
```

### "Kit engineer is not installed"

**Nguyên nhân:** Kit được chỉ định không tìm thấy trong cài đặt.

**Giải pháp:**

```bash
# Kiểm tra các kit đã cài đặt
ck doctor

# Gỡ cài đặt tất cả kit
ck uninstall  # Không dùng cờ --kit
```

### Tệp Vẫn Còn Sau Khi Gỡ Cài Đặt

**Điều này được mong đợi:** Các tùy chỉnh người dùng được bảo toàn có chủ ý.

**Để xem những gì đã được bảo toàn:**

```bash
ck uninstall --dry-run
```

**Để bắt buộc xóa hoàn toàn:**

```bash
# CẢNH BÁO: Xóa TẤT CẢ tùy chỉnh
ck uninstall --force-overwrite --yes
```

Hoặc thủ công:

```bash
rm -rf .claude/  # Cục bộ
rm -rf ~/.claude/  # Toàn cục
```

### Permission Denied

**Triệu chứng:**

```
Failed to remove files from /path: EACCES: permission denied
```

**Giải pháp:**

**Linux/macOS:**

```bash
sudo ck uninstall
```

**Windows:**

Chạy PowerShell với tư cách Administrator, sau đó:

```powershell
ck uninstall
```

## Những Gì Bị Xóa

Sau khi gỡ cài đặt, các tệp thuộc quyền sở hữu của ClaudeKit bị xóa:

### Bị Xóa

- Thư mục `agents/` (agent thuộc ClaudeKit)
- Thư mục `commands/` (lệnh thuộc ClaudeKit)
- Thư mục `skills/` (skill thuộc ClaudeKit)
- Thư mục `workflows/` (workflow thuộc ClaudeKit)
- Thư mục `hooks/`
- `metadata.json`
- Các thư mục cha trống

### Được Bảo Toàn

- Các tệp `.env`
- Lệnh tùy chỉnh (không có trong manifest)
- Workflow đã sửa đổi
- Skill do người dùng tạo
- `settings.json`, `CLAUDE.md`

## Cài Đặt Lại

Để cài đặt lại ClaudeKit sau khi gỡ:

### Cài Đặt Mới

```bash
ck init --fresh
```

Hoặc cho dự án mới:

```bash
ck new --kit engineer
```

### Với Tùy Chỉnh Đã Bảo Toàn

Sau khi gỡ cài đặt (đã bảo toàn tùy chỉnh), đơn giản chỉ cần:

```bash
ck init
```

Các tệp đã bảo toàn sẽ được hợp nhất với cài đặt mới.

## Ghi Chú Theo Nền Tảng

### Windows

- Đường dẫn toàn cục: `%USERPROFILE%\.claude\`
- Sử dụng PowerShell hoặc Windows Terminal
- Có thể yêu cầu quyền Administrator

### macOS

- Đường dẫn toàn cục: `~/.claude/`
- Các tệp đã bảo toàn hiển thị trong Finder
- Sử dụng các thao tác tệp native

### Linux

- Đường dẫn toàn cục: `~/.claude/`
- WSL được hỗ trợ đầy đủ
- Có thể cần sudo cho các thư mục hệ thống

## Thay Thế: Xóa Thủ Công

Nếu CLI gỡ cài đặt thất bại, xóa thủ công:

### Cài Đặt Cục Bộ

```bash
rm -rf .claude/
```

### Cài Đặt Toàn Cục

```bash
# macOS/Linux
rm -rf ~/.claude/

# Windows (PowerShell)
Remove-Item -Recurse -Force $env:USERPROFILE\.claude
```

**Cảnh báo:** Xóa thủ công bỏ qua theo dõi quyền sở hữu và xóa mọi thứ, bao gồm cả tùy chỉnh.

## Các Bước Tiếp Theo

Sau khi gỡ cài đặt:

1. **Cài đặt lại nếu cần:**

```bash
ck init
```

2. **Cài đặt kit khác:**

```bash
ck new --kit marketing
```

3. **Gỡ cài đặt chính CLI:**

```bash
npm uninstall -g claudekit-cli
```

## Các Lệnh Liên Quan

- [`ck init`](/vi/docs/cli/init) - Cài đặt lại ClaudeKit
- [`ck new`](/vi/docs/cli/new) - Tạo dự án mới
- [`ck doctor`](/vi/docs/cli/doctor) - Chẩn đoán cài đặt
- [Cài đặt](/vi/docs/cli/installation) - Hướng dẫn thiết lập
