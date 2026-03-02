---
title: "ck update"
lang: vi
description: "Cập nhật ClaudeKit CLI lên phiên bản mới nhất với tính năng tự động phát hiện trình quản lý gói"
section: cli
order: 7
---

# ck update

> Cập nhật chính gói ClaudeKit CLI lên phiên bản mới nhất bằng trình quản lý gói của bạn.

## Bắt Đầu Nhanh

```bash
# Kiểm tra cập nhật
ck update --check

# Cập nhật lên phiên bản mới nhất
ck update

# Cập nhật lên phiên bản cụ thể
ck update --release 3.11.0

# Cập nhật lên phiên bản beta
ck update --beta

# Cập nhật không tương tác
ck update --yes
```

**Lưu ý**: Lệnh này cập nhật chính công cụ ClaudeKit CLI, KHÔNG phải dự án ClaudeKit của bạn. Để cập nhật dự án, dùng [`ck init`](/vi/docs/cli/init).

## Chức Năng

Lệnh `ck update`:

1. Phát hiện trình quản lý gói của bạn (npm, bun, pnpm, yarn)
2. Lấy phiên bản mới nhất từ npm registry
3. So sánh phiên bản hiện tại với phiên bản mục tiêu
4. Hỏi xác nhận (trừ khi dùng `--yes`)
5. Thực thi lệnh cập nhật của trình quản lý gói
6. Xác minh cài đặt

## Cú Pháp

```bash
ck update [OPTIONS]
```

### Tùy Chọn

| Cờ | Mô tả | Mặc định |
|------|-------------|---------|
| `--check` | Chỉ kiểm tra cập nhật, không cài đặt | `false` |
| `--release <version>` | Cập nhật lên phiên bản cụ thể | Ổn định mới nhất |
| `--beta` | Cập nhật lên phiên bản beta mới nhất | `false` |
| `--yes` / `-y` | Bỏ qua lời nhắc xác nhận | `false` |
| `--registry <url>` | URL npm registry tùy chỉnh | https://registry.npmjs.org |
| `--verbose` | Bật ghi nhật ký chi tiết | `false` |

## Ví Dụ

### Kiểm Tra Cập Nhật

Xem có phiên bản mới hơn không mà không cài đặt:

```bash
ck update --check
```

**Ví dụ đầu ra:**

```
[>] ClaudeKit CLI - Update

Current CLI version: 3.10.1
Latest version: 3.11.0

[^] upgrade: 3.10.1 -> 3.11.0

Update Check

Update available: 3.10.1 -> 3.11.0

Run 'ck update' to install

Check complete
```

### Cập Nhật Lên Mới Nhất

Cập nhật lên phiên bản ổn định mới nhất:

```bash
ck update
```

**Ví dụ đầu ra:**

```
[>] ClaudeKit CLI - Update

Current CLI version: 3.10.1
Using npm v10.2.4
Latest version: 3.11.0

[^] upgrade: 3.10.1 -> 3.11.0

Update CLI from 3.10.1 to 3.11.0? (y/n) y

Updating CLI...
✓ Update completed
✓ Installed version: 3.11.0

[+] Successfully updated ClaudeKit CLI to 3.11.0
```

### Cập Nhật Lên Phiên Bản Cụ Thể

Hạ cấp hoặc cài đặt phiên bản cụ thể:

```bash
ck update --release 3.9.0
```

Hữu ích để:
- Quay lại phiên bản ổn định đã biết
- Kiểm tra hành vi phiên bản cụ thể
- Khớp phiên bản CLI của nhóm

### Cập Nhật Lên Beta

Lấy phiên bản prerelease mới nhất:

```bash
ck update --beta
```

**Ví dụ đầu ra:**

```
Current CLI version: 3.10.1
Latest beta version: 3.11.0-beta.2

[^] upgrade: 3.10.1 -> 3.11.0-beta.2

Update CLI from 3.10.1 to 3.11.0-beta.2? (y/n)
```

Nếu không có phiên bản beta, sẽ dùng phiên bản ổn định mới nhất.

### Cập Nhật Không Tương Tác

Bỏ qua lời nhắc xác nhận (hữu ích cho script):

```bash
ck update --yes
```

Hoặc dạng ngắn:

```bash
ck update -y
```

### Kết Hợp Cờ

Cập nhật lên beta mới nhất mà không cần xác nhận:

```bash
ck update --beta --yes
```

## Phát Hiện Trình Quản Lý Gói

CLI tự động phát hiện trình quản lý gói bạn đã dùng để cài đặt:

### Các Trình Quản Lý Được Phát Hiện

- **npm** - Trình quản lý gói Node.js mặc định
- **bun** - JavaScript runtime nhanh toàn diện
- **pnpm** - Nhanh, tiết kiệm dung lượng đĩa
- **yarn** - Thay thế cho npm

### Thứ Tự Phát Hiện

1. Kiểm tra các mẫu đường dẫn cài đặt toàn cục
2. Xác minh trình quản lý gói đã được cài đặt
3. Dùng npm nếu phát hiện thất bại

### Các Lệnh Cập Nhật Được Dùng

CLI sử dụng lệnh phù hợp với trình quản lý gói của bạn:

| Trình quản lý | Lệnh cập nhật |
|---------|----------------|
| npm | `npm update -g claudekit-cli` |
| bun | `bun update -g claudekit-cli` |
| pnpm | `pnpm update -g claudekit-cli` |
| yarn | `yarn global upgrade claudekit-cli` |

## Thông Báo Cập Nhật

CLI tự động kiểm tra cập nhật khi bạn chạy:

```bash
ck --version
```

**Ví dụ khi có cập nhật:**

```
CLI Version: 3.10.1
Local Kit Version: 1.16.0 (ClaudeKit Engineer)

⚠ Update available: 3.10.1 -> 3.11.0
  Run 'ck update' to install
```

### Bộ Nhớ Đệm Thông Báo

Các kiểm tra cập nhật được lưu đệm trong 7 ngày để giảm thiểu lời gọi API.

**Vị trí cache:**

- **macOS/Linux**: `~/.claudekit/cache/version-check.json`
- **Windows**: `%USERPROFILE%\.claudekit\cache\version-check.json`

### Tắt Thông Báo

Đặt biến môi trường để tắt thông báo cập nhật:

```bash
# Tạm thời (phiên hiện tại)
NO_UPDATE_NOTIFIER=1 ck --version

# Vĩnh viễn (thêm vào ~/.bashrc hoặc ~/.zshrc)
export NO_UPDATE_NOTIFIER=1
```

**Windows (PowerShell):**

```powershell
[System.Environment]::SetEnvironmentVariable("NO_UPDATE_NOTIFIER", "1", [System.EnvironmentVariableTarget]::User)
```

## Các Mẫu Phổ Biến

### Thói Quen Cập Nhật Thường Xuyên

Giữ CLI luôn cập nhật:

```bash
# Kiểm tra hàng tuần
ck update --check

# Nếu có cập nhật, cài đặt
ck update
```

### Đồng Bộ Phiên Bản Nhóm

Đảm bảo nhóm dùng cùng phiên bản CLI:

```bash
# Trong tài liệu nhóm, chỉ định phiên bản
ck update --release 3.10.1
```

### Kiểm Tra Beta

Thử nghiệm các tính năng sắp ra mắt:

```bash
# Cài đặt beta
ck update --beta

# Thử tính năng mới
ck new --help

# Quay lại ổn định nếu có vấn đề
ck update --release 3.10.1
```

### Cập Nhật Tự Động

Thêm vào cron job hoặc tác vụ lên lịch:

```bash
# Tự động cập nhật hàng tuần (thêm vào crontab)
0 9 * * 1 ck update --yes
```

**Windows Task Scheduler:**

```powershell
schtasks /create /tn "ClaudeKit Update" /tr "ck update --yes" /sc weekly /d MON /st 09:00
```

## Xử Lý Sự Cố

### Lỗi "Permission denied"

**Triệu chứng:**

```
EACCES: permission denied
```

**Nguyên nhân:** Không đủ quyền cho thư mục gói toàn cục.

**Giải pháp:**

**Tùy chọn 1: Dùng sudo (Linux/macOS)**

```bash
sudo ck update
```

Hoặc thủ công:

```bash
sudo npm update -g claudekit-cli
```

**Tùy chọn 2: Sửa Quyền npm (Khuyến nghị)**

Làm theo [hướng dẫn sửa quyền của npm](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

**Tùy chọn 3: Dùng Node Version Manager**

- **nvm** (Linux/macOS): [cài đặt nvm](https://github.com/nvm-sh/nvm)
- **nvm-windows** (Windows): [nvm-windows](https://github.com/coreybutler/nvm-windows)

### "Version X does not exist"

**Triệu chứng:**

```
Version 3.99.0 does not exist on npm registry
```

**Nguyên nhân:** Phiên bản được chỉ định chưa được publish hoặc gõ sai.

**Giải pháp:**

```bash
# Kiểm tra các phiên bản có sẵn
npm view claudekit-cli versions

# Sau đó cài đặt phiên bản đúng
ck update --release 3.11.0
```

### "Already on the latest version"

**Triệu chứng:**

```
[+] Already on the latest version (3.11.0)
```

**Ý nghĩa:** Bạn đã cập nhật. Không cần thao tác nào.

**Để bắt buộc cài đặt lại:**

```bash
npm uninstall -g claudekit-cli
npm install -g claudekit-cli
```

### Cập Nhật Thất Bại Không Có Lỗi

**Triệu chứng:** Không có lỗi, nhưng phiên bản không thay đổi.

**Nguyên nhân:** Sự cố cache của trình quản lý gói.

**Giải pháp:**

```bash
# Xóa cache npm
npm cache clean --force

# Thử lại cập nhật
ck update

# Hoặc cài đặt lại
npm uninstall -g claudekit-cli
npm install -g claudekit-cli@latest
```

### "Please restart your terminal"

**Triệu chứng:** Cập nhật thành công nhưng `ck --version` vẫn hiển thị phiên bản cũ.

**Nguyên nhân:** Shell chưa tải lại PATH.

**Giải pháp:**

**Tùy chọn 1: Khởi động lại terminal** (dễ nhất)

**Tùy chọn 2: Tải lại cấu hình shell**

```bash
source ~/.bashrc  # hoặc ~/.zshrc
```

**Tùy chọn 3: Dùng đường dẫn đầy đủ**

```bash
$(npm config get prefix)/bin/ck --version
```

## Ghi Chú Theo Nền Tảng

### Windows

- Sử dụng PowerShell hoặc Windows Terminal
- Có thể yêu cầu quyền Administrator
- Phần mềm diệt virus có thể gây cản trở cập nhật

### macOS

- Người dùng Homebrew: Nếu đã cài đặt qua Homebrew, dùng `brew upgrade`
- System Integrity Protection có thể yêu cầu sudo

### Linux

- Trình quản lý gói thay đổi theo bản phân phối
- WSL được hỗ trợ đầy đủ
- Có thể cần sudo cho cài đặt toàn cục

## Xác Minh Phiên Bản

Sau khi cập nhật, xác minh phiên bản mới:

```bash
ck --version
```

Đầu ra mong đợi:

```
CLI Version: 3.11.0
```

Nếu vẫn hiển thị phiên bản cũ, khởi động lại terminal hoặc tải lại cấu hình shell.

## Quay Lại Phiên Bản Cũ

Để quay lại phiên bản trước:

```bash
# Cài đặt phiên bản cũ hơn cụ thể
ck update --release 3.10.0

# Xác minh
ck --version
```

## Các Bước Tiếp Theo

Sau khi cập nhật CLI:

1. **Cập nhật dự án** lên phiên bản kit mới nhất:

```bash
cd my-project
ck init
```

2. **Kiểm tra các thay đổi không tương thích** trong ghi chú phát hành
3. **Kiểm tra các lệnh** để đảm bảo tương thích
4. **Chạy kiểm tra tình trạng:**

```bash
ck doctor
```

## Các Lệnh Liên Quan

- [`ck --version`](/vi/docs/cli#verify-installation) - Kiểm tra phiên bản hiện tại
- [`ck init`](/vi/docs/cli/init) - Cập nhật dự án ClaudeKit (không phải CLI)
- [`ck doctor`](/vi/docs/cli/doctor) - Chẩn đoán sự cố CLI
- [`ck versions`](/vi/docs/cli/versions) - Liệt kê phiên bản kit (không phải phiên bản CLI)
- [Cài đặt](/vi/docs/cli/installation) - Thiết lập ban đầu
