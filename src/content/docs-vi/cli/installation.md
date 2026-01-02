---
title: "Installation"
description: "Hướng dẫn cài đặt ClaudeKit CLI với xác thực GitHub"
lang: vi
section: cli
order: 2
---

# Cài đặt

> Cài đặt ClaudeKit CLI trên toàn cầu và thiết lập xác thực GitHub để bắt đầu tạo dự án.

## Yêu cầu tiên quyết

Trước khi cài đặt ClaudeKit CLI, hãy đảm bảo bạn đã có:

### 1. Node.js

ClaudeKit CLI yêu cầu Node.js phiên bản 18.0.0 hoặc cao hơn.

**Kiểm tra phiên bản của bạn:**

```bash
node --version
```

**Cài đặt Node.js:**

- **Windows**: [Tải về từ nodejs.org](https://nodejs.org/)
- **macOS**: `brew install node`
- **Linux**: `sudo apt install nodejs npm` (Ubuntu/Debian) hoặc kiểm tra trình quản lý gói của bản phân phối bạn đang dùng

### 2. Git

Cần thiết cho các thao tác với kho lưu trữ.

**Kiểm tra phiên bản của bạn:**

```bash
git --version
```

**Cài đặt Git:**

- **Windows**: [Tải về từ git-scm.com](https://git-scm.com/)
- **macOS**: `brew install git` (hoặc sử dụng Xcode Command Line Tools)
- **Linux**: `sudo apt install git` (Ubuntu/Debian)

### 3. Mua ClaudeKit

Bạn phải mua ClaudeKit Starter Kit từ [ClaudeKit.cc](https://claudekit.cc) để truy cập vào kho lưu trữ GitHub riêng tư chứa các mẫu (kits).

Sau khi mua, bạn sẽ nhận được:

- Quyền truy cập vào kho lưu trữ GitHub riêng tư
- Khóa bản quyền (nếu có)
- Hướng dẫn thiết lập

## Cài đặt ClaudeKit CLI

Cài đặt CLI trên toàn cầu bằng trình quản lý gói yêu thích của bạn:

### npm (Khuyên dùng)

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

## Xác minh cài đặt

Sau khi cài đặt, hãy kiểm tra xem CLI đã hoạt động chưa:

```bash
ck --version
```

Kết quả mong đợi:

```
CLI Version: 3.10.1
```

Nếu bạn gặp lỗi "command not found", hãy đảm bảo thư mục bin toàn cầu của trình quản lý gói đã được thêm vào PATH:

- **npm**: `npm config get prefix` (thường đã có trong PATH)
- **bun**: `~/.bun/bin` (thêm vào PATH nếu cần)
- **pnpm**: `pnpm config get global-bin-dir` (thêm vào PATH nếu cần)
- **yarn**: `yarn global bin` (thêm vào PATH nếu cần)

## Thiết lập xác thực {#authentication}

ClaudeKit CLI yêu cầu xác thực GitHub để tải về các bản phát hành từ kho lưu trữ riêng tư.

### Cài đặt GitHub CLI

**Bước 1: Cài đặt GitHub CLI**

- **Windows**: `winget install GitHub.cli`
- **macOS**: `brew install gh`
- **Linux**: `sudo apt install gh` (Ubuntu/Debian)

Đối với các bản phân phối Linux khác, vui lòng xem [hướng dẫn cài đặt GitHub CLI](https://github.com/cli/cli#installation).

**Bước 2: Xác minh cài đặt**

```bash
gh --version
```

### Xác thực với GitHub CLI

**Chạy lệnh xác thực:**

```bash
gh auth login
```

**Làm theo các bước hướng dẫn:**

1. Chọn **GitHub.com**
2. Chọn **HTTPS** (hoặc SSH nếu bạn muốn)
3. Xác thực Git? → **Yes**
4. Chọn **Login with a web browser** (khuyên dùng)
5. Sao chép mã dùng một lần được hiển thị
6. Nhấn Enter để mở trình duyệt
7. Dán mã vào trình duyệt
8. Ủy quyền cho GitHub CLI

**Quan trọng**: Hãy sử dụng tùy chọn "Login with a web browser". KHÔNG sử dụng "Paste an authentication token" vì xác thực qua PAT không còn được hỗ trợ để truy cập các kho lưu trữ riêng tư.

### Xác minh xác thực

Kiểm tra trạng thái xác thực của bạn:

```bash
gh auth status
```

Kết quả mong đợi:

```
github.com
  ✓ Logged in to github.com as your-username (oauth_token)
  ✓ Git operations for github.com configured to use https protocol.
  ✓ Token: *******************
```

### Chấp nhận lời mời kho lưu trữ

Sau khi mua ClaudeKit, bạn sẽ nhận được một email mời truy cập vào kho lưu trữ GitHub riêng tư.

1. **Kiểm tra email** để nhận lời mời từ GitHub
2. **Chấp nhận lời mời** bằng cách nhấp vào liên kết
3. **Đợi 2-5 phút** để quyền hạn được cập nhật hệ thống

Nếu không chấp nhận lời mời, bạn sẽ gặp lỗi "Access denied" khi chạy lệnh `ck new` hoặc `ck init`.

## Xử lý sự cố

### Lỗi "Access denied"

**Triệu chứng:**

```
Access denied to repository
```

**Cách khắc phục:**

1. Chạy `ck doctor` để chẩn đoán vấn đề
2. Đảm bảo bạn đã chấp nhận lời mời tham gia kho lưu trữ GitHub
3. Chạy lại `gh auth login` và chọn "Login with a web browser"
4. Đợi 2-5 phút sau khi chấp nhận lời mời để quyền hạn được cập nhật

### Lỗi "GitHub CLI not authenticated"

**Triệu chứng:**

```
GitHub CLI not authenticated
```

**Cách khắc phục:**

```bash
# Xác thực lại bằng phương pháp trình duyệt web
gh auth login
```

Chọn "Login with a web browser" (KHÔNG chọn "Paste token").

### Lỗi từ chối quyền (Permission Denied) khi cài đặt

**Triệu chứng:**

```
EACCES: permission denied
```

**Cách khắc phục:**

**Lựa chọn 1: Sử dụng sudo (Linux/macOS)**

```bash
sudo npm install -g claudekit-cli
```

**Lựa chọn 2: Sửa lỗi quyền hạn của npm (Khuyên dùng)**

Làm theo [hướng dẫn của npm để sửa lỗi quyền hạn](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

### Lỗi lệnh không tìm thấy (Command Not Found)

**Triệu chứng:**

```bash
ck: command not found
```

**Cách khắc phục:**

Thêm thư mục bin toàn cầu của trình quản lý gói vào biến môi trường PATH:

**npm:**

```bash
# Tìm tiền tố (prefix) của npm
npm config get prefix

# Thêm vào PATH (thêm vào ~/.bashrc hoặc ~/.zshrc)
export PATH="$(npm config get prefix)/bin:$PATH"
```

**Bun:**

```bash
# Thêm vào ~/.bashrc hoặc ~/.zshrc
export PATH="$HOME/.bun/bin:$PATH"
```

**pnpm:**

```bash
# Thêm vào ~/.bashrc hoặc ~/.zshrc
export PATH="$(pnpm config get global-bin-dir):$PATH"
```

Sau khi sửa file cấu hình shell, hãy khởi động lại terminal hoặc chạy lệnh:

```bash
source ~/.bashrc  # hoặc ~/.zshrc
```

## Ghi chú theo nền tảng

### Windows

- Sử dụng PowerShell hoặc Windows Terminal (không dùng Command Prompt)
- Đường dẫn tệp sử dụng dấu gạch chéo ngược (`\`) nhưng CLI sẽ tự động xử lý
- Một số lệnh có thể yêu cầu quyền Quản trị viên (Administrator)

### macOS

- GitHub CLI có thể cài đặt qua Homebrew
- Các gói npm toàn cầu mặc định được cài đặt vào `/usr/local/bin`
- Cần có Xcode Command Line Tools cho Git (cài đặt qua `xcode-select --install`)

### Linux

- Tên các gói có thể khác nhau tùy bản phân phối (sử dụng trình quản lý gói tương ứng)
- Cài đặt npm toàn cầu có thể cần dùng `sudo` hoặc sửa lại quyền hạn npm
- WSL (Windows Subsystem for Linux) được hỗ trợ đầy đủ

## Bước tiếp theo

Bây giờ ClaudeKit CLI đã được cài đặt và xác thực:

1. **Tạo dự án mới**: [`ck new`](/vi/docs/cli/new)
2. **Kiểm tra trạng thái hệ thống**: [`ck doctor`](/vi/docs/cli/doctor)
3. **Xem các phiên bản có sẵn**: [`ck versions`](/vi/docs/cli/versions)
4. **Cấu hình mặc định**: [Cấu hình](/vi/docs/cli/configuration)

## Các lệnh liên quan

- [`ck doctor`](/vi/docs/cli/doctor) - Chẩn đoán các vấn đề cài đặt
- [`ck update`](/vi/docs/cli/update) - Cập nhật CLI lên phiên bản mới nhất
- [`ck uninstall`](/vi/docs/cli/uninstall) - Gỡ bỏ cài đặt ClaudeKit
