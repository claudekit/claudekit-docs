---
title: Cài Đặt
description: "Documentation for Cài Đặt"
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

- **Node.js** v18 trở lên
- **npm** v10 trở lên (hoặc bun, pnpm, yarn)
- **Git** để quản lý phiên bản
- **Claude Code CLI** đã cài đặt (`claude`)
- **Google Gemini API Key** từ [Google AI Studio](https://aistudio.google.com)

## Phương Pháp 1: Cài Đặt Thủ Công

Phương pháp này cho bạn quyền kiểm soát hoàn toàn quá trình cài đặt.

### Bước 1: Clone hoặc Tải ClaudeKit Engineer

```bash
# Tùy chọn A: Clone repo (yêu cầu quyền truy cập GitHub)
git clone https://github.com/claudekit/claudekit-engineer.git

# Tùy chọn B: Tải từ GitHub Releases
# Truy cập: https://github.com/claudekit/claudekit-engineer/releases
```

### Bước 2: Sao Chép Các File ClaudeKit

Sao chép các thư mục và file sau từ `claudekit-engineer` vào thư mục gốc dự án:

| Đường dẫn | Mô tả |
|-----------|-------|
| `.claude/` | Cấu hình chính - hooks, skills, commands, workflows |
| `docs/` | Mẫu tài liệu |
| `plans/` | Mẫu kế hoạch |
| `CLAUDE.md` | Hướng dẫn dự án cho Claude |

**Các file ẩn quan trọng trong `.claude/`:**
- `.ck.json` - Cấu hình ClaudeKit (đặt tên plan, đường dẫn, ngôn ngữ)
- `.ckignore` - Thư mục loại trừ khỏi context (giống `.gitignore` cho LLM)

**Linux/macOS:**
```bash
cp -r claudekit-engineer/.claude your-project/
cp -r claudekit-engineer/docs your-project/
cp -r claudekit-engineer/plans your-project/
cp claudekit-engineer/CLAUDE.md your-project/

# Xác minh file ẩn đã được sao chép
ls -la your-project/.claude/
# Phải thấy: .ck.json, .ckignore, settings.json, v.v.
```

**Windows (PowerShell):**
```powershell
Copy-Item -Recurse claudekit-engineer\.claude your-project\
Copy-Item -Recurse claudekit-engineer\docs your-project\
Copy-Item -Recurse claudekit-engineer\plans your-project\
Copy-Item claudekit-engineer\CLAUDE.md your-project\

# Xác minh file ẩn đã được sao chép
Get-ChildItem -Force your-project\.claude\
# Phải thấy: .ck.json, .ckignore, settings.json, v.v.
```

> ⚠️ **Lưu ý:** Trình quản lý file có thể ẩn dotfiles (`.ck.json`, `.ckignore`). Sử dụng terminal/PowerShell hoặc bật "hiển thị file ẩn".

### Bước 3: Cấu Hình API Key Gemini (Tuỳ Chọn)

**TẠI SAO?**  
ClaudeKit từng sử dụng [Human MCP](https://www.npmjs.com/package/@goonnguyen/human-mcp) để phân tích hình ảnh và video vì Gemini có khả năng xử lý vision tốt. Tuy nhiên, Anthropic đã ra mắt [**Agent Skills**](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) hỗ trợ context engineering tốt hơn, nên toàn bộ công cụ Human MCP đã được chuyển thành Agent Skills.

**Lưu ý:** Gemini API hiện đang có hạn mức miễn phí khá rộng rãi.

1. Vào [Google AI Studio](https://aistudio.google.com) và lấy API Key của bạn
2. Sao chép file `.claude/skills/.env.example` thành `.claude/skills/.env` rồi dán key vào biến môi trường `GEMINI_API_KEY`

Vậy là bạn đã sẵn sàng sử dụng.

### Bước 4: Khởi Động Claude Code

Khởi động Claude Code trong dự án làm việc của bạn:

```bash
# Chế độ tiêu chuẩn
claude

# Bỏ qua permissions (sử dụng cẩn thận)
claude --dangerously-skip-permissions
```

### Bước 5: Khởi Tạo Tài Liệu

Chạy lệnh `/docs:init` để quét và tạo specs cho dự án:

```bash
/docs:init
```

Lệnh này tạo ra các file markdown trong thư mục `docs`:
- `codebase-summary.md`
- `code-standards.md`
- `system-architecture.md`
- Và nhiều hơn nữa...

Bây giờ dự án của bạn đã sẵn sàng để phát triển!

## Phương Pháp 2: ClaudeKit CLI

CLI cung cấp cách tự động để thiết lập các dự án ClaudeKit.

### Cài Đặt

Cài đặt ClaudeKit CLI toàn cục:

```bash
# npm
npm install -g claudekit-cli

# bun
bun add -g claudekit-cli

# Xác minh cài đặt
ck --version
```

### Nên Chọn Chế Độ Cài Đặt Nào?

| Trường hợp | Chế độ | Lệnh |
|------------|--------|------|
| **Cài đặt lần đầu** | Global ⭐ | `ck init -g --kit engineer` |
| **Muốn dùng ClaudeKit cho TẤT CẢ dự án** | Global ⭐ | `ck init -g --kit engineer` |
| **Chỉ cho một dự án cụ thể** | Local | `ck init --kit engineer` |
| **Môi trường CI/CD** | Local | `ck init --kit engineer` |

---

### Tùy Chọn A: Cài Đặt Global ⭐ Khuyến Nghị Cho Đa Số Người Dùng

> **Sử dụng khi:** Bạn muốn ClaudeKit có sẵn cho TẤT CẢ dự án mà không cần copy file vào từng dự án.
>
> **Chạy từ:** Bất kỳ thư mục nào (ví dụ: home folder, desktop, bất cứ đâu)

```bash
# Chế độ tương tác
ck init -g

# Với lựa chọn kit
ck init -g --kit engineer

# Phiên bản cụ thể
ck init -g --kit engineer --version v1.0.0
```

**File được cài đặt ở đâu:**
- **macOS/Linux**: `~/.claude/`
- **Windows**: `%LOCALAPPDATA%\.claude\`

> ✅ **Mẹo:** Chế độ global lý tưởng cho phát triển cá nhân. Cài một lần, dùng mọi nơi.

---

### Tùy Chọn B: Cài Đặt Local (Dành Riêng Cho Dự Án)

> **Sử dụng khi:** Bạn muốn file ClaudeKit CHỈ trong một dự án cụ thể.
>
> **Chạy từ:** Thư mục gốc của dự án (ví dụ: `/projects/my-app/`)

```bash
# Di chuyển đến dự án trước!
cd /path/to/your/project

# Chế độ tương tác
ck init

# Với lựa chọn kit
ck init --kit engineer

# Với mẫu loại trừ
ck init --exclude "local-config/**" --exclude "*.local"
```

**File được cài đặt ở đâu:** Trong thư mục dự án hiện tại (`./.claude/`)

> ⚠️ **Cảnh báo:** Chạy `ck init` (không có `-g`) từ **thư mục home** hoặc **thư mục user** sẽ cài ClaudeKit tại đó, có thể gây lỗi đường dẫn hook. Nếu muốn ClaudeKit có sẵn ở mọi nơi, hãy dùng `ck init -g`.

---

### Cập Nhật CLI

Để cập nhật công cụ dòng lệnh `ck` lên phiên bản mới nhất:

```bash
ck update
```

**Lưu ý:** Lệnh này chỉ cập nhật CLI, không cập nhật file ClaudeKit Engineer. Dùng `ck init` (local) hoặc `ck init -g` (global) để cập nhật file ClaudeKit Engineer.

### Xác Thực

CLI yêu cầu **GitHub Personal Access Token (PAT)** để tải xuống các bản phát hành từ repository riêng tư (`claudekit-engineer` và `claudekit-marketing`).

**Chuỗi Dự Phòng Xác Thực:**

1. **GitHub CLI**: Sử dụng `gh auth token` nếu GitHub CLI đã cài đặt và xác thực
2. **Biến Môi Trường**: Kiểm tra `GITHUB_TOKEN` hoặc `GH_TOKEN`
3. **OS Keychain**: Lấy token đã lưu từ keychain hệ thống
4. **Nhắc Người Dùng**: Nhắc nhập token và đề nghị lưu an toàn

**Tạo Personal Access Token:**

1. Vào GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Tạo token mới với scope `repo` (cho repository riêng tư)
3. Sao chép token

**Thiết Lập Token Qua Biến Môi Trường:**

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

## Xác Minh Cài Đặt

Sau khi cài đặt (bất kỳ phương pháp nào), xác minh mọi thứ đã được thiết lập đúng:

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

**Loại trừ các file cụ thể khi cập nhật:**

```bash
# Không ghi đè CLAUDE.md
ck init --exclude CLAUDE.md
```

**Cập nhật CLI:**

```bash
# Cập nhật công cụ dòng lệnh ck
ck update
```

## Khắc Phục Sự Cố

### Lỗi Quyền

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

### Không Tìm Thấy Claude Code

Nếu lệnh `claude` không được tìm thấy:

1. Cài đặt Claude Code CLI từ [claude.ai/code](https://claude.ai/code)
2. Khởi động lại terminal
3. Xác minh với `claude --version`

### Xác Thực GitHub Thất Bại

Nếu CLI không thể xác thực:

1. Cài đặt GitHub CLI: `brew install gh` (macOS) hoặc xem [cli.github.com](https://cli.github.com)
2. Xác thực: `gh auth login`
3. Xác minh: `gh auth status`
4. Hoặc thiết lập biến môi trường: `export GITHUB_TOKEN=your_token`

## Bước Tiếp Theo

Bây giờ ClaudeKit đã được cài đặt, tiếp tục với:

- [Hướng Dẫn Bắt Đầu Nhanh](/docs/getting-started/quick-start) - Xây dựng dự án đầu tiên
- [Giải Thích CLAUDE.md](/docs/core-concepts/claude-md) - Hiểu file cấu hình
- [Workflows](/docs/core-concepts/workflows) - Tìm hiểu về quy trình phát triển
