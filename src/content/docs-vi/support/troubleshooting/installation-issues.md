---
title: Cài Đặt Issues
description: "Documentation for Cài Đặt Issues
description:
section: support
category: support/troubleshooting
order: 2
published: true"
section: support
category: support/troubleshooting
order: 2
published: true
---

# Installation Issues

ClaudeKit installation problems? Get unblocked in minutes with platform-specific fixes.

## Sửa Nhanh: Lỗi Đường Dẫn Hook / User Prompt Submit Error

**Triệu chứng**: "User prompt submit error", hooks lỗi với lỗi đường dẫn, hoặc `%CLAUDE_PROJECT_DIR%` không tìm thấy

**Nguyên nhân**: Bạn đã chạy `ck init` (chế độ local) từ thư mục sai—có thể là thư mục home hoặc thư mục user thay vì thư mục dự án.

**Giải pháp**:

```bash
# Bước 1: Xóa cài đặt bị lỗi
# Di chuyển đến nơi bạn đã vô tình cài đặt
cd ~  # hoặc bất cứ nơi nào bạn chạy ck init
rm -rf .claude/  # Xóa cài đặt local bị lỗi

# Bước 2: Cài đặt lại đúng cách
# Cho GLOBAL (khuyến nghị cho đa số người dùng):
ck init -g --kit engineer

# Cho LOCAL (chỉ cho dự án cụ thể):
cd /path/to/your/actual/project
ck init --kit engineer
```

**Phòng ngừa**:
- Dùng `ck init -g` (global) nếu bạn muốn ClaudeKit có sẵn ở mọi nơi
- Chỉ dùng `ck init` (local) khi đang ở trong thư mục dự án thực sự

Xem [Hướng Dẫn Cài Đặt - Nên Chọn Chế Độ Nào?](/vi/docs/getting-started/installation#nên-chọn-chế-độ-cài-đặt-nào) để biết thêm chi tiết.

---

## Sửa Nhanh: Không Tìm Thấy Lệnh

**Triệu chứng**: `ck: command not found` hoặc `claudekit-cli: command not found`

**Solution**:

```bash
# Verify global installation
npm list -g claudekit-cli

# If not found, install globally
npm install -g claudekit-cli

# Verify installation
ck --version
```

If still not working, check your PATH (see [PATH issues](#path-issues) below).

---

## Platform-Specific Issues

### Windows

#### PowerShell Execution Policy

**Symptom**: "cannot be loaded because running scripts is disabled"

**Solution**:

```powershell
# Check current policy
Get-ExecutionPolicy

# Set policy (run as Administrator)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Verify
ck --version
```

**Expected output**:
```
claudekit-cli/1.0.0
```

#### Windows PATH Not Updated

**Symptom**: `ck` works in some terminals but not others

**Solution**:

1. Find npm global path:
   ```bash
   npm config get prefix
   ```

2. Add to System PATH:
   - Open "Environment Variables" (Win + X → System → Advanced → Environment Variables)
   - Under "User variables", select "Path" → Edit
   - Add: `C:\Users\YourName\AppData\Roaming\npm` (or your npm prefix path)
   - Click OK, restart terminal

3. Verify:
   ```bash
   ck --version
   ```

#### Node.js Version Too Old

**Symptom**: "Error: ClaudeKit requires Node.js 18 or higher"

**Solution**:

```bash
# Check current version
node --version

# If < 18, install latest Node.js from nodejs.org

# Or use nvm (Node Version Manager)
nvm install 20
nvm use 20

# Reinstall ClaudeKit
npm install -g claudekit-cli
```

---

### macOS

#### Permission Denied

**Symptom**: "EACCES: permission denied" during `npm install -g`

**Solution 1**: Fix npm permissions (recommended)

```bash
# Create npm global directory
mkdir ~/.npm-global

# Configure npm to use new directory
npm config set prefix '~/.npm-global'

# Add to PATH
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc

# Reinstall ClaudeKit
npm install -g claudekit-cli
```

**Solution 2**: Use sudo (not recommended)

```bash
sudo npm install -g claudekit-cli
```

**Solution 3**: Use nvm (best practice)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload shell
source ~/.zshrc

# Install Node 20
nvm install 20
nvm use 20

# Install ClaudeKit (no sudo needed)
npm install -g claudekit-cli
```

#### Command Not Found After Install

**Symptom**: Installation succeeds but `ck` command not found

**Solution**:

```bash
# Check npm global bin path
npm config get prefix

# Add to PATH in ~/.zshrc (or ~/.bash_profile)
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Verify
ck --version
```

#### Apple Silicon (M1/M2/M3) Issues

**Symptom**: Architecture mismatch errors

**Solution**:

```bash
# Ensure using native ARM64 Node
arch

# Should show "arm64", not "i386"

# If wrong architecture, reinstall Node
# Download ARM64 version from nodejs.org

# Or use nvm
nvm install 20
nvm alias default 20

# Reinstall ClaudeKit
npm install -g claudekit-cli
```

---

### Linux

#### Permission Denied

**Symptom**: "EACCES: permission denied" during global install

**Solution**:

```bash
# Option 1: Use nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
npm install -g claudekit-cli

# Option 2: Change npm global directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g claudekit-cli
```

#### Missing Dependencies

**Symptom**: "node-gyp rebuild" fails or native module errors

**Solution**:

```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install -y build-essential python3

# Fedora/RHEL
sudo dnf install -y gcc-c++ make python3

# Arch
sudo pacman -S base-devel python

# Reinstall ClaudeKit
npm install -g claudekit-cli
```

#### PATH Not Set

**Symptom**: `ck` command not found after successful install

**Solution**:

```bash
# Find npm global bin directory
npm config get prefix

# Add to PATH in ~/.bashrc (or ~/.zshrc)
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Verify
which ck
ck --version
```

---

## Common Installation Errors

### NPM Registry Issues

**Symptom**: "Unable to resolve dependency tree" or "ERESOLVE" errors

**Solution**:

```bash
# Clear npm cache
npm cache clean --force

# Update npm
npm install -g npm@latest

# Retry installation
npm install -g claudekit-cli
```

### Network/Proxy Issues

**Symptom**: Timeout or connection refused during install

**Solution**:

```bash
# Check npm registry
npm config get registry

# If behind proxy, configure
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

# Or use different registry
npm config set registry https://registry.npmjs.org/

# Retry installation
npm install -g claudekit-cli
```

### Version Conflicts

**Symptom**: "Incompatible peer dependencies" or version mismatch errors

**Solution**:

```bash
# Uninstall old version
npm uninstall -g claudekit-cli

# Clear cache
npm cache clean --force

# Install latest version
npm install -g claudekit-cli@latest

# Verify
ck --version
```

---

## PATH Issues

### Verify Global npm Location

```bash
# Check where npm installs global packages
npm config get prefix

# Common locations:
# Windows: C:\Users\YourName\AppData\Roaming\npm
# macOS: /usr/local or ~/.npm-global
# Linux: /usr/local or ~/.npm-global
```

### Add npm to PATH

**Windows**:
```powershell
# PowerShell (permanent)
$env:Path += ";C:\Users\YourName\AppData\Roaming\npm"
[System.Environment]::SetEnvironmentVariable("Path", $env:Path, "User")
```

**macOS/Linux (bash)**:
```bash
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

**macOS/Linux (zsh)**:
```bash
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Verify PATH Update

```bash
# Check if npm global bin is in PATH
echo $PATH | grep npm

# Should show npm bin directory
```

---

## Verify Complete Installation

After fixing installation issues, verify everything works:

```bash
# Check CLI version
ck --version

# Expected: claudekit-cli/1.0.0

# Check available commands
ck --help

# Expected: Lists new, update, diagnose commands

# Test with demo project
mkdir test-project
cd test-project
ck new --kit engineer

# Expected: Downloads ClaudeKit Engineer successfully
```

---

## Prevention Tips

✅ **Do**:
- Use nvm (Node Version Manager) to avoid permission issues
- Keep Node.js updated (18+)
- Use npm global directory in home folder
- Check PATH after installation
- Update ClaudeKit regularly: `ck init`

❌ **Don't**:
- Use sudo with npm (except as last resort)
- Install with old Node.js versions (<18)
- Ignore permission warnings
- Mix package managers (npm, yarn, pnpm, bun)

---

## Related Issues

- [Command Errors](/docs/troubleshooting/command-errors) - After installation, commands not working
- [API Key Setup](/docs/troubleshooting/api-key-setup) - Configure credentials after install
- [Performance Issues](/docs/troubleshooting/performance-issues) - Slow installation or downloads

---

## Still Stuck?

### Run Diagnostics

```bash
# System info
node --version
npm --version
which node
which npm

# npm configuration
npm config list
npm config get prefix

# Installation status
npm list -g claudekit-cli
which ck
```

### Get Help

1. **Check logs**: Look for errors during `npm install -g claudekit-cli`
2. **GitHub Issues**: [Report installation problems](https://github.com/claudekit/claudekit-engineer/issues)
3. **Discord**: [Join ClaudeKit community](https://claudekit.cc/discord)

Include in your report:
- Operating system and version
- Node.js version (`node --version`)
- npm version (`npm --version`)
- Full error message
- Steps you've already tried

---

**90% of installation issues resolve with proper PATH configuration.** Follow platform-specific steps above to get unblocked fast.
