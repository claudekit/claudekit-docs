---
title: "ck migrate"
description: "Di chuyển agents, commands, skills, config, rules và hooks sang các AI coding provider khác với hệ thống đối soát thông minh"
section: cli
order: 9
lang: vi
---

# ck migrate

> Di chuyển toàn bộ nội dung portable của ClaudeKit (agents, commands, skills, config, rules, hooks) sang các AI coding provider khác với hệ thống đối soát thông minh và xử lý xung đột.

## Bắt Đầu Nhanh

```bash
# Chế độ tương tác (tự phát hiện provider đã cài)
ck migrate

# Di chuyển sang provider cụ thể
ck migrate --agent cursor --agent codex

# Di chuyển sang tất cả provider, cài global
ck migrate --all --global

# Xem trước kế hoạch di chuyển mà không ghi file
ck migrate --dry-run

# Chế độ không tương tác
ck migrate --yes
```

## Quy Trình Hoạt Động

Lệnh `ck migrate`:

1. **Phát hiện** tất cả portable items từ thư mục `.claude/` (agents, commands, skills, config, rules, hooks)
2. **Dò tìm** các AI coding provider đã cài trên hệ thống
3. **Tính toán** kế hoạch đối soát so sánh source vs target
4. **Giải quyết** xung đột tương tác (hoặc tự động với `--yes`)
5. **Cài đặt** nội dung đã chuyển đổi sang định dạng của từng provider
6. **Gộp** cấu hình hooks vào `settings.json` của provider
7. **Dọn dẹp** registry cũ và đường dẫn deprecated

## Provider Được Hỗ Trợ

| Provider | Agents | Commands | Skills | Config | Rules | Hooks |
|----------|--------|----------|--------|--------|-------|-------|
| Claude Code | Co | Co | Co | Co | Co | Co |
| OpenCode | Co | Co | Co | Co | Co | Co |
| GitHub Copilot | Co | Co | Co | Co | Co | - |
| Codex | Co | Co | Co | Co | Co | - |
| Droid | Co | Co | Co | Co | Co | - |
| Cursor | Co | Co | Co | Co | Co | - |
| Roo Code | Co | Co | Co | Co | Co | - |
| Kilo Code | Co | Co | Co | Co | Co | - |
| Windsurf | Co | Co | Co | Co | Co | - |
| Goose | Co | - | - | Co | Co | - |
| Gemini CLI | Co | - | - | Co | Co | - |
| Amp | Co | - | - | Co | Co | - |
| Antigravity | - | Co | Co | Co | Co | - |
| Cline | Co | - | - | Co | Co | - |
| OpenHands | Co | - | - | Co | Co | - |

## Tùy Chọn

### Tùy Chọn Target

| Flag | Mô tả |
|------|-------|
| `-a, --agent <provider>` | Provider đích, có thể chỉ định nhiều lần |
| `--all` | Di chuyển sang tất cả provider |
| `-g, --global` | Cài global thay vì project-level |
| `-y, --yes` | Bỏ qua xác nhận |
| `-f, --force` | Buộc cài lại các item đã xóa/chỉnh sửa |
| `--dry-run` | Xem trước kế hoạch, không ghi file |

### Chọn Nội Dung

| Flag | Mô tả |
|------|-------|
| `--config` | Chỉ di chuyển config CLAUDE.md |
| `--rules` | Chỉ di chuyển `.claude/rules/` |
| `--hooks` | Chỉ di chuyển `.claude/hooks/` |
| `--skip-config` | Bỏ qua config |
| `--skip-rules` | Bỏ qua rules |
| `--skip-hooks` | Bỏ qua hooks |
| `--source <path>` | Đường dẫn CLAUDE.md tùy chỉnh |

## Logic Chọn Nội Dung

Các flag chọn nội dung tuân theo bảng logic chính xác:

**Chế độ "Only"** — khi chỉ định `--config`, `--rules`, `--hooks`:
- `--config` — chỉ config (không agents/commands/skills/rules/hooks)
- `--rules` — chỉ rules
- `--hooks` — chỉ hooks
- `--config --rules` — chỉ config VÀ rules
- `--config --hooks` — chỉ config VÀ hooks
- `--config --rules --hooks` — chỉ config, rules VÀ hooks

**Chế độ "Skip"** — khi sử dụng `--skip-*`:
- `--skip-config` — mọi thứ trừ config
- `--skip-rules` — mọi thứ trừ rules
- `--skip-hooks` — mọi thứ trừ hooks

**Mặc định** (không flag) — di chuyển tất cả.

## Hệ Thống Đối Soát (Reconciliation)

Lệnh migrate sử dụng engine đối soát phức tạp:

1. **Tính checksum** cho cả source items và target files
2. **So sánh trạng thái** với portable registry để phát hiện:
   - Items mới cần cài
   - Items đã cập nhật cần refresh
   - Items không đổi, bỏ qua
   - Items đã xóa cần dọn
   - Xung đột cần giải quyết
3. **Tạo kế hoạch** hiển thị mọi action trước khi thực thi

### Giải Quyết Xung Đột

Khi target file bị chỉnh sửa bên ngoài, lệnh đưa ra các lựa chọn:
- **Overwrite** — ghi đè bằng nội dung source
- **Smart merge** — thử gộp thay đổi
- **Skip** — giữ nguyên nội dung hiện tại
- **View diff** — xem khác biệt trước khi quyết định

## Ví Dụ

### Di chuyển tất cả sang Cursor

```bash
ck migrate --agent cursor
```

### Di chuyển config và rules sang tất cả provider

```bash
ck migrate --all --config --rules
```

### Buộc di chuyển lại hooks globally

```bash
ck migrate --all --global --hooks --force
```

### Xem trước thay đổi

```bash
ck migrate --dry-run
```

### Di chuyển sang nhiều provider cụ thể

```bash
ck migrate --agent droid --agent codex --agent cursor
```

### Bỏ qua hooks khi di chuyển

```bash
ck migrate --all --skip-hooks
```

### Dùng CLAUDE.md tùy chỉnh

```bash
ck migrate --agent cursor --source ./custom/CLAUDE.md
```

## Các Giai Đoạn Di Chuyển

### Giai đoạn 1: Phát Hiện
Quét `.claude/agents/`, `.claude/commands/`, `.claude/skills/`, `.claude/rules/`, `.claude/hooks/`, và `CLAUDE.md` tìm nội dung portable.

### Giai đoạn 2: Chọn Provider
Tự phát hiện provider đã cài hoặc hiển thị prompt chọn. Dùng `--agent` hoặc `--all` để bỏ qua.

### Giai đoạn 3: Chọn Phạm Vi
Chọn project-level (`.claude/` trong CWD) hoặc global (`~/.claude/`).

### Giai đoạn 4: Đối Soát
Tính toán kế hoạch di chuyển dùng checksums và trạng thái registry. Hiển thị các action (install, update, skip, delete, conflict).

### Giai đoạn 5: Thực Thi
Cài items, gộp hook settings, xử lý metadata deletions, dọn entries cũ.

### Giai đoạn 6: Tổng Kết
Hiển thị kết quả với số lượng thành công/bỏ qua/thất bại và đề xuất rollback khi lỗi một phần.

## Rollback Khi Lỗi

Nếu một số items lỗi trong khi số khác thành công, lệnh đề xuất rollback:
- **File mới** được xóa
- **File đã ghi đè** được giữ (không thể rollback)
- Registry entries được dọn dẹp

## Lệnh Liên Quan

- [ck init](/vi/docs/cli/init) — Khởi tạo hoặc cập nhật ClaudeKit
- [ck uninstall](/vi/docs/cli/uninstall) — Gỡ cài đặt ClaudeKit
- [ck doctor](/vi/docs/cli/doctor) — Chẩn đoán vấn đề cài đặt
