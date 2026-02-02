---
title: Cài Đặt
description: "Tài liệu hướng dẫn Cài Đặt ClaudeKit"
lang: vi
section: getting-started
category: getting-started
order: 2
published: true
---

# Cài Đặt

Hướng dẫn này sẽ giúp bạn cài đặt ClaudeKit và thiết lập môi trường phát triển. Bạn có thể chọn giữa cài đặt thủ công hoặc sử dụng ClaudeKit CLI.

## Yêu Cầu

Trước khi cài đặt ClaudeKit, đảm bảo bạn có:

- **Node.js** v18 hoặc cao hơn
- **npm** v10 hoặc cao hơn (hoặc bun, pnpm, yarn)
- **Git** cho version control
- **Claude Code CLI** đã cài đặt (`claude`)
- **Google Gemini API Key** từ [Google AI Studio](https://aistudio.google.com)

## Phương Pháp 1: Cài Đặt Thủ Công

Phương pháp này cho bạn toàn quyền kiểm soát quá trình cài đặt.

### Bước 1: Clone hoặc Download ClaudeKit Engineer

```bash
# Lựa chọn A: Clone repo (yêu cầu GitHub access)
git clone https://github.com/claudekit/claudekit-engineer.git

# Lựa chọn B: Download từ GitHub Releases
# Truy cập: https://github.com/claudekit/claudekit-engineer/releases
```

### Bước 2: Copy ClaudeKit Files

Copy các thư mục và files sau từ `claudekit-engineer` vào project root của bạn:

| Path | Mô tả |
|-----------|-------|
| `.claude/` | Cấu hình chính - hooks, skills, commands, workflows |
| `docs/` | Documentation templates |
| `plans/` | Planning templates |
| `CLAUDE.md` | Project instructions cho Claude |

**Files ẩn quan trọng trong `.claude/`:**
- `.ck.json` - Cấu hình ClaudeKit (plan naming, paths, language)
- `.ckignore` - Thư mục loại trừ khỏi context (giống `.gitignore` cho LLM)

**Linux/macOS:**
```bash
cp -r claudekit-engineer/.claude your-project/
cp -r claudekit-engineer/docs your-project/
cp -r claudekit-engineer/plans your-project/
cp claudekit-engineer/CLAUDE.md your-project/

# Xác minh files ẩn đã được copy
ls -la your-project/.claude/
# Nên thấy: .ck.json, .ckignore, settings.json, etc.
```

**Windows (PowerShell):**
```powershell
Copy-Item -Recurse claudekit-engineer\.claude your-project\
Copy-Item -Recurse claudekit-engineer\docs your-project\
Copy-Item -Recurse claudekit-engineer\plans your-project\
Copy-Item claudekit-engineer\CLAUDE.md your-project\

# Xác minh files ẩn đã được copy
Get-ChildItem -Force your-project\.claude\
# Nên thấy: .ck.json, .ckignore, settings.json, etc.
```

> ⚠️ **Lưu ý:** File managers có thể ẩn dotfiles (`.ck.json`, `.ckignore`). Sử dụng terminal/PowerShell hoặc bật "show hidden files".

### Bước 3: Cấu Hình Gemini API Key (Tùy Chọn)

**TẠI SAO?**
ClaudeKit trước đây sử dụng [Human MCP](https://www.npmjs.com/package/@goonnguyen/human-mcp) để phân tích hình ảnh và video vì Gemini có khả năng vision tốt hơn. Tuy nhiên, Anthropic đã ra mắt [**Agent Skills**](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) với hỗ trợ context engineering tốt hơn, nên tất cả công cụ Human MCP đã được chuyển đổi sang Agent Skills.

**Lưu ý:** Gemini API hiện tại cung cấp free tier hào phóng.

1. Truy cập [Google AI Studio](https://aistudio.google.com) và lấy API Key của bạn
2. Copy `.claude/skills/.env.example` thành `.claude/skills/.env` và dán key của bạn vào biến môi trường `GEMINI_API_KEY`

Bạn đã sẵn sàng sử dụng.

### Bước 4: Khởi Động Claude Code

Khởi chạy Claude Code trong project của bạn:

```bash
# Chế độ tiêu chuẩn
claude

# Bỏ qua permissions (sử dụng cẩn thận)
claude --dangerously-skip-permissions
```

### Bước 5: Khởi Tạo Documentation

Chạy lệnh `/docs:init` để quét và tạo specs cho project của bạn:

```bash
/docs:init
```

Lệnh này tạo markdown files trong thư mục `docs`:
- `codebase-summary.md`
- `code-standards.md`
- `system-architecture.md`
- Và nhiều hơn nữa...

Project của bạn giờ đã sẵn sàng cho phát triển!

## Phương Pháp 2: ClaudeKit CLI

CLI cung cấp cách tự động để thiết lập ClaudeKit projects.

### Cài Đặt

Cài đặt ClaudeKit CLI globally:

```bash
# npm
npm install -g claudekit-cli

# bun
bun add -g claudekit-cli

# Xác minh cài đặt
ck --version
```

### Nên Chọn Chế Độ Cài Đặt Nào?

| Use Case | Mode | Command |
|------------|--------|------|
| **Cài đặt lần đầu** | Global ⭐ | `ck init -g --kit engineer` |
| **Muốn sử dụng ClaudeKit cho TẤT CẢ projects** | Global ⭐ | `ck init -g --kit engineer` |
| **Chỉ cho một project cụ thể** | Local | `ck init --kit engineer` |
| **Môi trường CI/CD** | Local | `ck init --kit engineer` |

---

### Lựa Chọn A: Cài Đặt Global ⭐ Khuyến Nghị Cho Hầu Hết Người Dùng

> **Sử dụng khi:** Bạn muốn ClaudeKit có sẵn cho TẤT CẢ projects mà không cần copy files vào từng project.
>
> **Chạy từ:** Bất kỳ thư mục nào (ví dụ: home folder, desktop, bất kỳ đâu)

```bash
# Chế độ interactive
ck init -g

# Với lựa chọn kit
ck init -g --kit engineer

# Phiên bản cụ thể
ck init -g --kit engineer --version v1.0.0
```

**Nơi files được cài đặt:**
- **macOS/Linux**: `~/.claude/`
- **Windows**: `%LOCALAPPDATA%\.claude\`

> ✅ **Mẹo:** Chế độ global lý tưởng cho phát triển cá nhân. Cài đặt một lần, sử dụng mọi nơi.

---

### Lựa Chọn B: Cài Đặt Local (Project-Specific)

> **Sử dụng khi:** Bạn chỉ muốn ClaudeKit files trong một project cụ thể.
>
> **Chạy từ:** Thư mục root của project (ví dụ: `/projects/my-app/`)

```bash
# Di chuyển đến project trước!
cd /path/to/your/project

# Chế độ interactive
ck init

# Với lựa chọn kit
ck init --kit engineer

# Với exclude patterns
ck init --exclude "local-config/**" --exclude "*.local"
```

**Nơi files được cài đặt:** Trong thư mục project hiện tại (`./.claude/`)

> ⚠️ **Cảnh báo:** Chạy `ck init` (không có `-g`) từ **home directory** hoặc **user directory** sẽ cài đặt ClaudeKit ở đó, có thể gây lỗi hook path. Nếu bạn muốn ClaudeKit có sẵn mọi nơi, sử dụng `ck init -g`.

---

### Cập Nhật CLI

Để cập nhật công cụ command-line `ck` lên phiên bản mới nhất:

```bash
ck update
```

**Lưu ý:** Lệnh này chỉ cập nhật CLI, không phải ClaudeKit Engineer files. Sử dụng `ck init` (local) hoặc `ck init -g` (global) để cập nhật ClaudeKit Engineer files.

### Xác Thực

CLI yêu cầu **GitHub Personal Access Token (PAT)** để tải releases từ private repositories (`claudekit-engineer` và `claudekit-marketing`).

**Chuỗi Dự Phòng Xác Thực:**

1. **GitHub CLI**: Sử dụng `gh auth token` nếu GitHub CLI đã cài đặt và xác thực
2. **Environment Variables**: Kiểm tra `GITHUB_TOKEN` hoặc `GH_TOKEN`
3. **OS Keychain**: Lấy token đã lưu từ system keychain
4. **User Prompt**: Nhắc nhập token và đề nghị lưu an toàn

**Tạo Personal Access Token:**

1. Truy cập GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Tạo token mới với scope `repo` (cho private repositories)
3. Copy token

**Thiết Lập Token Qua Environment Variable:**

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

## Xác Minh Cài Đặt

Sau khi cài đặt (bất kỳ phương pháp nào), xác minh mọi thứ đã thiết lập đúng:

```bash
# Kiểm tra Claude Code có sẵn
claude --version

# Kiểm tra thư mục .claude tồn tại
ls -la .claude/
```

## Cập Nhật ClaudeKit

Giữ ClaudeKit Engineer luôn cập nhật:

```bash
# Cập nhật ClaudeKit Engineer lên phiên bản mới nhất
ck init

# Cập nhật lên phiên bản cụ thể
ck init --version v1.2.0
```

**Loại trừ files cụ thể khi cập nhật:**

```bash
# Không ghi đè CLAUDE.md
ck init --exclude CLAUDE.md
```

**Cập nhật CLI:**

```bash
# Cập nhật công cụ command-line ck
ck update
```

## Khắc Phục Sự Cố

### Lỗi Permission

Trên macOS/Linux, bạn có thể cần sudo:

```bash
sudo npm install -g claudekit-cli
```

Hoặc cấu hình npm để sử dụng thư mục khác:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

### Claude Code Không Tìm Thấy

Nếu lệnh `claude` không được tìm thấy:

1. Cài đặt Claude Code CLI từ [claude.ai/code](https://claude.ai/code)
2. Khởi động lại terminal
3. Xác minh với `claude --version`

### GitHub Authentication Failed

Nếu CLI không thể xác thực:

1. Cài đặt GitHub CLI: `brew install gh` (macOS) hoặc xem [cli.github.com](https://cli.github.com)
2. Xác thực: `gh auth login`
3. Xác minh: `gh auth status`
4. Hoặc thiết lập environment variable: `export GITHUB_TOKEN=your_token`

## Bước Tiếp Theo

Giờ ClaudeKit đã được cài đặt, tiếp tục với:

- [Hướng Dẫn Bắt Đầu Nhanh](/vi/docs/getting-started/quick-start) - Xây dựng project đầu tiên
- [Giải Thích CLAUDE.md](/vi/docs/engineer/configuration/claude-md) - Hiểu file cấu hình
- [Workflows](/vi/docs/engineer/configuration/workflows) - Tìm hiểu về development workflows
