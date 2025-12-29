---
title: "Installation"
description: "Hướng dẫn cài đặt ClaudeKit CLI với xác thực GitHub"
section: cli
order: 2
---

# Installation

> Cài đặt ClaudeKit CLI toàn cầu và thiết lập xác thực GitHub để bắt đầu tạo dự án.

## Prerequisites

Trước khi cài đặt ClaudeKit CLI, hãy đảm bảo bạn có:

### 1. Node.js

ClaudeKit CLI yêu cầu Node.js 18.0.0 hoặc cao hơn.

**Kiểm tra phiên bản của bạn:**

```bash
node --version
```

**Cài đặt Node.js:**

- **Windows**: [Download từ nodejs.org](https://nodejs.org/)
- **macOS**: `brew install node`
- **Linux**: `sudo apt install nodejs npm` (Ubuntu/Debian) hoặc kiểm tra trình quản lý gói của distro của bạn

### 2. Git

Cần thiết cho các hoạt động kho lưu trữ.

**Kiểm tra phiên bản của bạn:**

```bash
git --version
```

**Cài đặt Git:**

- **Windows**: [Download từ git-scm.com](https://git-scm.com/)
- **macOS**: `brew install git` (hoặc sử dụng Xcode Command Line Tools)
- **Linux**: `sudo apt install git` (Ubuntu/Debian)

### 3. Purchase ClaudeKit

Bạn phải mua một ClaudeKit Starter Kit từ [ClaudeKit.cc](https://claudekit.cc) để truy cập kho lưu trữ GitHub riêng tư chứa các mẫu kit.

Sau khi mua, bạn sẽ nhận được:

- Truy cập vào kho lưu trữ GitHub riêng tư
- Khóa cấp phép (nếu có)
- Hướng dẫn thiết lập

## Install ClaudeKit CLI

Cài đặt CLI toàn cầu bằng trình quản lý gói ưa thích của bạn:

### npm (Recommended)

```bash
npm install -g claudekit-cli
```

### Bun

```bash
bun add -g claudekit-cli
```

### pnpm

```bash
pnpm add -g claudekit-cli
```

### Yarn

```bash
yarn global add claudekit-cli
```

## Verify Installation

Sau khi cài đặt, hãy xác minh CLI đang hoạt động:

```bash
ck --version
```

Đầu ra dự kiến:

```
CLI Version: 3.10.1
```

Nếu bạn thấy lỗi "command not found", hãy đảm bảo thư mục bin toàn cầu của trình quản lý gói của bạn nằm trong PATH:

- **npm**: `npm config get prefix` (nên nằm trong PATH)
- **bun**: `~/.bun/bin` (thêm vào PATH nếu cần)
- **pnpm**: `pnpm config get global-bin-dir` (thêm vào PATH nếu cần)
- **yarn**: `yarn global bin` (thêm vào PATH nếu cần)

## Authentication Setup {#authentication}

ClaudeKit CLI yêu cầu xác thực GitHub để tải xuống các bản phát hành từ kho lưu trữ riêng tư.

### Install GitHub CLI

**Bước 1: Cài đặt GitHub CLI**

- **Windows**: `winget install GitHub.cli`
- **macOS**: `brew install gh`
- **Linux**: `sudo apt install gh` (Ubuntu/Debian)

Đối với các bản phân phối Linux khác, hãy xem [GitHub CLI installation guide](https://github.com/cli/cli#installation).

**Bước 2: Xác minh cài đặt**

```bash
gh --version
```

### Authenticate with GitHub CLI

**Chạy lệnh xác thực:**

```bash
gh auth login
```

**Làm theo các lời nhắc:**

1. Chọn **GitHub.com**
2. Chọn **HTTPS** (hoặc SSH nếu bạn thích)
3. Xác thực Git? → **Yes**
4. Chọn **Login with a web browser** (recommended)
5. Sao chép mã một lần được hiển thị
6. Nhấn Enter để mở trình duyệt
7. Dán mã trong trình duyệt
8. Ủy quyền GitHub CLI

**Quan trọng**: Sử dụng tùy chọn "Login with a web browser". KHÔNG sử dụng "Paste an authentication token" vì xác thực PAT không còn được hỗ trợ để truy cập các kho lưu trữ riêng tư.

### Verify Authentication

Kiểm tra trạng thái xác thực của bạn:

```bash
gh auth status
```

Đầu ra dự kiến:

```
github.com
  ✓ Logged in to github.com as your-username (oauth_token)
  ✓ Git operations for github.com configured to use https protocol.
  ✓ Token: *******************
```

### Accept Repository Invitation

Sau khi mua ClaudeKit, bạn sẽ nhận được lời mời qua email để truy cập kho lưu trữ GitHub riêng tư.

1. **Kiểm tra email của bạn** để nhận lời mời GitHub
2. **Chấp nhận lời mời** bằng cách nhấp vào liên kết
3. **Đợi 2-5 phút** để quyền được truyền bá

Nếu không chấp nhận lời mời, bạn sẽ gặp lỗi "Access denied" khi chạy `ck new` hoặc `ck init`.

## Troubleshooting

### "Access denied" Error

**Symptoms:**

```
Access denied to repository
```

**Solutions:**

1. Chạy `ck doctor` để chẩn đoán vấn đề
2. Đảm bảo bạn đã chấp nhận lời mời kho lưu trữ GitHub
3. Chạy lại `gh auth login` và chọn "Login with a web browser"
4. Đợi 2-5 phút sau khi chấp nhận lời mời để quyền được truyền bá

### "GitHub CLI not authenticated" Error

**Symptoms:**

```
GitHub CLI not authenticated
```

**Solutions:**

```bash
# Re-authenticate with web browser method
gh auth login
```

Chọn "Login with a web browser" (NOT "Paste token").

### Permission Denied During Installation

**Symptoms:**

```
EACCES: permission denied
```

**Solutions:**

**Option 1: Sử dụng sudo (Linux/macOS)**

```bash
sudo npm install -g claudekit-cli
```

**Option 2: Khắc phục quyền npm (Recommended)**

Làm theo [npm's guide to fix permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

### Command Not Found

**Symptoms:**

```bash
ck: command not found
```

**Solutions:**

Thêm thư mục bin toàn cầu của trình quản lý gói của bạn vào PATH:

**npm:**

```bash
# Find npm prefix
npm config get prefix

# Add to PATH (add to ~/.bashrc or ~/.zshrc)
export PATH="$(npm config get prefix)/bin:$PATH"
```

**Bun:**

```bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$HOME/.bun/bin:$PATH"
```

**pnpm:**

```bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$(pnpm config get global-bin-dir):$PATH"
```

Sau khi chỉnh sửa cấu hình shell, hãy khởi động lại terminal hoặc chạy:

```bash
source ~/.bashrc  # or ~/.zshrc
```

## Platform-Specific Notes

### Windows

- Sử dụng PowerShell hoặc Windows Terminal (không phải Command Prompt)
- Các dấu phân cách đường dẫn sử dụng dấu gạch chéo ngược (`\`) nhưng CLI xử lý tự động
- Một số lệnh có thể yêu cầu quyền quản trị viên

### macOS

- GitHub CLI có thể được cài đặt thông qua Homebrew
- Các gói npm toàn cầu cài đặt vào `/usr/local/bin` theo mặc định
- Cần Xcode Command Line Tools cho Git (cài đặt qua `xcode-select --install`)

### Linux

- Tên gói khác nhau theo distro (sử dụng trình quản lý gói của distro của bạn)
- Các gói npm toàn cầu có thể yêu cầu sudo hoặc khắc phục quyền npm
- WSL (Windows Subsystem for Linux) được hỗ trợ đầy đủ

## Next Steps

Bây giờ ClaudeKit CLI được cài đặt và xác thực:

1. **Tạo một dự án mới**: [`ck new`](/docs/cli/new)
2. **Chạy kiểm tra sức khỏe**: [`ck doctor`](/docs/cli/doctor)
3. **Duyệt các phiên bản có sẵn**: [`ck versions`](/docs/cli/versions)
4. **Cấu hình mặc định**: [Configuration](/docs/cli/configuration)

## Related Commands

- [`ck doctor`](/docs/cli/doctor) - Chẩn đoán các vấn đề cài đặt
- [`ck update`](/docs/cli/update) - Cập nhật CLI lên phiên bản mới nhất
- [`ck uninstall`](/docs/cli/uninstall) - Xóa cài đặt ClaudeKit
