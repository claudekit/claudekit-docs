---
title: "CCS - Claude Code Switch"
description: "Chuyển đổi giữa nhiều tài khoản Claude và mô hình AI ngay lập tức. Tránh giới hạn tốc độ và tối ưu chi phí với ủy quyền thông minh."
section: tools
category: tools
order: 2
published: true
---

# CCS - Claude Code Switch

**Một lệnh duy nhất, không downtime, nhiều tài khoản**

Chuyển đổi tức thì giữa các tài khoản Claude, GLM, Kimi và nhiều mô hình khác. Không còn đụng giới hạn. Công việc luôn liền mạch.

## Vấn đề

Bạn đang triển khai rất tập trung. Ngữ cảnh đã nạp. Giải pháp đang hình thành. Rồi đột nhiên:

🔴 **"Bạn đã đạt giới hạn sử dụng."**

Mất hứng. Mất ngữ cảnh. Năng suất tụt dốc.

Giới hạn phiên không nên phá vỡ trạng thái tập trung của bạn.

## Giải pháp

CCS cho phép bạn chạy **đa luồng công việc song song**, thay vì phải chuyển đổi tuần tự:

```bash
# Terminal 1: Công việc chính (Tài khoản Công ty)
ccs work "triển khai hệ thống xác thực"

# Terminal 2: Tác vụ phụ (Tài khoản Cá nhân)
ccs personal "review PR #123"

# Terminal 3: Tác vụ tối ưu chi phí (GLM - rẻ hơn 81%)
ccs glm "thêm tests cho tất cả service files"
```

Tất cả chạy đồng thời. Không chuyển ngữ cảnh. Không downtime.

## Cài đặt

```bash
# Cài đặt global
npm install -g @kaitranntt/ccs

# Kiểm tra cài đặt
ccs --version
```

## Bắt đầu nhanh

### Cách dùng cơ bản

```bash
ccs                    # Claude subscription (mặc định)
ccs glm                # GLM (tối ưu chi phí)
ccs kimi               # Kimi (hỗ trợ thinking)
```

### Ủy quyền với flag `-p`

```bash
# Ủy quyền task cho GLM
ccs glm -p "sửa lỗi linting trong src/"

# Ủy quyền cho Kimi để phân tích
ccs kimi -p "phân tích cấu trúc dự án và tài liệu hóa"

# Tiếp tục phiên trước
ccs glm:continue -p "chạy tests và sửa lỗi"
```

### Thiết lập đa tài khoản

```bash
# Tạo account profiles
ccs auth create work
ccs auth create personal

# Chạy đồng thời trong các terminal riêng
# Terminal 1 - Công việc
ccs work "triển khai tính năng"

# Terminal 2 - Cá nhân (đồng thời)
ccs personal "review code"
```

## Tính năng cốt lõi

### 1. Chuyển đổi mô hình

Chuyển đổi tức thì giữa các mô hình AI:

```bash
ccs           # Claude (mặc định)
ccs glm       # GLM-4.6 (tối ưu chi phí)
ccs kimi      # Kimi (long-context)
ccs gemini    # Gemini 2.5 Pro (OAuth)
ccs codex     # GPT-5.1 Codex Max (OAuth)
```

### 2. Uỷ nhiệm thông minh bằng AI

Uỷ nhiệm tác vụ cho mô hình tối ưu chi phí với `-p`:

```bash
# Task đơn giản (GLM)
ccs glm -p "thêm tests cho UserService"

# Task long-context (Kimi)
ccs kimi -p "phân tích tất cả files trong src/ và tài liệu hóa"

# Tiếp tục phiên trước
ccs glm:continue -p "chạy tests và sửa lỗi"
```

### 3. Hỗ trợ Slash Commands

Dùng slash commands bên trong phiên uỷ nhiệm:

```bash
# Thực thi lệnh /cook trong phiên GLM
ccs glm -p "/cook tạo landing page responsive"

# Sử dụng lệnh ClaudeKit
ccs glm -p "/fix:test chạy tất cả tests và sửa lỗi"
```

### 4. Quy trình song song

Chạy nhiều phiên cùng lúc:

```bash
# Terminal 1: Lập kế hoạch (Claude)
ccs "Lập kế hoạch REST API với xác thực"

# Terminal 2: Thực thi (GLM, tối ưu chi phí)
ccs glm "Triển khai user authentication endpoints"

# Terminal 3: Phân tích (Kimi)
ccs kimi "Thiết kế chiến lược caching với phân tích trade-off"
```

## Cấu hình

Vị trí: `~/.ccs/config.json`

### Cấu trúc tự động tạo

```json
{
  "profiles": {
    "glm": "~/.ccs/glm.settings.json",
    "glmt": "~/.ccs/glmt.settings.json",
    "kimi": "~/.ccs/kimi.settings.json",
    "default": "~/.claude/settings.json"
  }
}
```

### Thiết lập API keys

Trước khi dùng mô hình thay thế, hãy cập nhật API key:

**GLM:**
```bash
# Chỉnh sửa ~/.ccs/glm.settings.json
# Thêm Z.AI Coding Plan API Key của bạn
```

**Kimi:**
```bash
# Chỉnh sửa ~/.ccs/kimi.settings.json
# Thêm Kimi API key của bạn
```

### Tuỳ chỉnh đường dẫn Claude CLI

Cập nhật lại đường dẫn đến thư mục tuỳ chỉnh của bạn:

```bash
# Unix/macOS
export CCS_CLAUDE_PATH="/path/to/claude"

# Windows
$env:CCS_CLAUDE_PATH = "D:\Tools\Claude\claude.exe"
```

## Ví dụ sử dụng

### Chuyển đổi cơ bản

```bash
# Dùng Claude (mặc định)
ccs "triển khai xác thực người dùng"

# Dùng GLM (tối ưu chi phí)
ccs glm "thêm tests cho tất cả controllers"

# Dùng Kimi (long-context)
ccs kimi "phân tích toàn bộ cấu trúc dự án"
```

### Quy trình tối ưu chi phí

```bash
# Lập kế hoạch phức tạp (dùng Claude)
ccs "Lập kế hoạch hệ thống xác thực với OAuth và JWT"

# Thực thi đơn giản (ủy quyền cho GLM - rẻ hơn 81%)
ccs glm -p "Triển khai user login endpoint"

# Kiểm thử (ủy quyền cho GLM)
ccs glm -p "Thêm unit tests cho auth service"

# Review (dùng Claude)
ccs "Review triển khai authentication"
```

### Tiếp tục phiên

```bash
# Bắt đầu task
ccs glm -p "refactor auth.js để dùng async/await"

# Tiếp tục trong phiên tiếp theo
ccs glm:continue -p "cũng cập nhật ví dụ trong README"

# Tiếp tục lại
ccs glm:continue -p "thêm error handling"
```

## Tích hợp với ClaudeKit

### Quy trình khuyến nghị

```bash
# 1. Lập kế hoạch với Claude
ccs "/plan thêm tích hợp thanh toán"

# 2. Triển khai với GLM (tối ưu chi phí)
ccs glm -p "/cook triển khai Stripe payment flow"

# 3. Kiểm thử với GLM
ccs glm -p "/fix:test chạy payment tests"

# 4. Review với Claude
ccs "/review kiểm tra triển khai payment"
```

### Chiến lược tối ưu chi phí

**Dùng Claude cho:**
- Lập kế hoạch phức tạp (`/plan`)
- Quyết định kiến trúc
- Review code (`/review`)
- Giải quyết vấn đề sáng tạo

**Dùng GLM cho:**
- Triển khai đơn giản
- Chạy test, sửa lỗi (`/fix:test`)
- Cập nhật tài liệu
- Công việc lặp lại

**Dùng Kimi cho:**
- Phân tích long-context
- Review toàn bộ codebase
- Tài liệu hóa kiến trúc
- Refactoring nhiều files

## Gỡ cài đặt

```bash
# Xóa CCS
npm uninstall -g @kaitranntt/ccs

# Xóa cấu hình (tùy chọn)
rm -rf ~/.ccs
```

## Tài nguyên

- **GitHub:** [kaitranntt/ccs](https://github.com/kaitranntt/ccs)
- **Tài liệu:** [Docs đầy đủ](https://github.com/kaitranntt/ccs#readme)
- **Issues:** [Báo cáo lỗi](https://github.com/kaitranntt/ccs/issues)
- **Xử lý sự cố:** [Hướng dẫn](https://github.com/kaitranntt/ccs/blob/main/docs/en/troubleshooting.md)

## Bước tiếp theo

- [Hướng Dẫn Cài Đặt](/vi/docs/getting-started/installation) - Thiết lập ClaudeKit
- [Quy Trình](/vi/docs/workflows/) - Học quy trình ClaudeKit
- [FAQ](/vi/docs/support/troubleshooting) - Câu hỏi thường gặp

---

**Tóm lại**: CCS biến giới hạn rate limit từ rào cản thành cơ hội tối ưu chi phí và vận hành song song. Giữ trạng thái tập trung và giảm chi phí AI đến 81%.

