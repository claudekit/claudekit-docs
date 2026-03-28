---
title: "ck watch"
description: "Giám sát GitHub issue tự động, phân tích, lập kế hoạch và triển khai với AI"
section: cli
order: 10
published: true
---

# ck watch

Giám sát GitHub issue tự động chạy dài hạn. Poll issue, phân tích với Claude, tạo kế hoạch, đợi chủ repo phê duyệt, rồi tự động triển khai qua PR.

## Tổng Quan

`ck watch` biến terminal thành trợ lý AI chạy qua đêm. Liên tục theo dõi GitHub issue của repository (hoặc nhiều repo), dùng Claude để phân tích và lập kế hoạch, đăng plan dưới dạng comment, và — khi chủ repo phê duyệt — tạo branch, triển khai code, và mở PR. Thiết kế cho hoạt động không giám sát 6-8+ giờ.

## Cú Pháp

```bash
ck watch [options]
```

### Tùy Chọn

| Flag | Mặc Định | Mô Tả |
|------|----------|-------|
| `--interval <ms>` | `30000` | Khoảng thời gian poll (ms) |
| `--dry-run` | `false` | Phát hiện issue và ghi log, nhưng không đăng lên GitHub |
| `--force` | `false` | Dừng process `ck watch` đang chạy và khởi động lại |
| `--verbose` | `false` | Bật debug output |

## Yêu Cầu

- **GitHub CLI** (`gh`) đã cài đặt và xác thực
- **Git** repository (hoặc thư mục chứa nhiều git repo cho chế độ multi-repo)
- **Node.js 18+** / Bun runtime
- **ClaudeKit Engineer** đã cài đặt trong project

## Cách Hoạt Động

### Vòng Đời Issue

Mỗi issue đi qua các trạng thái:

```
new → brainstorming → clarifying → planning → plan_posted
→ awaiting_approval → implementing → completed
```

### Quy Trình Chi Tiết

1. **Poll** — Lấy danh sách issue mở từ GitHub qua `gh` CLI
2. **Brainstorm** — Gọi Claude phân tích issue, đặt câu hỏi làm rõ
3. **Clarify** — Nếu Claude cần thêm thông tin, đăng câu hỏi dưới dạng comment và đợi tác giả trả lời
4. **Plan** — Khi đã hiểu vấn đề, Claude tạo kế hoạch triển khai
5. **Post Plan** — Đăng plan dưới dạng GitHub comment, chuyển sang `awaiting_approval`
6. **Approval** — Theo dõi comment phê duyệt từ chủ repo (dùng Claude để phát hiện ý định phê duyệt)
7. **Implement** — Tạo branch, chạy `ck cook` với plan, push code
8. **PR** — Mở pull request liên kết với issue gốc
9. **Complete** — Đăng comment hoàn thành kèm link PR

### Single-Repo vs Multi-Repo

- **Single-repo**: Chạy `ck watch` trong git repository. Giám sát issue của repo đó.
- **Multi-repo**: Chạy `ck watch` trong thư mục cha chứa nhiều git repo. Tự động phát hiện và giám sát tất cả sub-repo.

## Cấu Hình

Lưu trong `.ck.json` dưới key `watch`:

```json
{
  "watch": {
    "pollIntervalMs": 30000,
    "maxTurnsPerIssue": 10,
    "maxIssuesPerHour": 10,
    "excludeAuthors": [],
    "showBranding": true,
    "logMaxBytes": 0,
    "timeouts": {
      "brainstormSec": 300,
      "planSec": 600,
      "implementSec": 18000
    }
  }
}
```

| Key | Mặc Định | Mô Tả |
|-----|----------|-------|
| `pollIntervalMs` | `30000` | Tần suất kiểm tra issue mới (tối thiểu 10s) |
| `maxTurnsPerIssue` | `10` | Số lượt hội thoại tối đa trước khi dừng |
| `maxIssuesPerHour` | `10` | Giới hạn số issue xử lý mỗi giờ |
| `excludeAuthors` | `[]` | Danh sách GitHub username bỏ qua |
| `showBranding` | `true` | Hiển thị branding ClaudeKit trong comment |
| `logMaxBytes` | `0` | Giới hạn kích thước log (0 = không giới hạn) |
| `timeouts.brainstormSec` | `300` | Timeout phân tích (5 phút) |
| `timeouts.planSec` | `600` | Timeout tạo plan (10 phút) |
| `timeouts.implementSec` | `18000` | Timeout triển khai (5 giờ) |

## Ví Dụ

### Sử Dụng Cơ Bản

```bash
# Bắt đầu giám sát repo hiện tại
ck watch

# Tùy chỉnh khoảng thời gian poll (60 giây)
ck watch --interval 60000

# Test mà không đăng lên GitHub
ck watch --dry-run

# Khởi động lại nếu đã chạy
ck watch --force
```

### Chạy Qua Đêm

```bash
# Bắt đầu watch trước khi đi ngủ
ck watch --verbose 2>&1 | tee watch-session.log

# Sáng hôm sau: kiểm tra kết quả
cat ~/.claudekit/logs/ck-watch-*.log
```

### Multi-Repo

```bash
# Cấu trúc thư mục:
# ~/projects/
#   ├── api-server/      (git repo)
#   ├── web-frontend/    (git repo)
#   └── shared-utils/    (git repo)

cd ~/projects
ck watch
# Giám sát cả 3 repo đồng thời
```

## Bảo Mật

- **Process Lock** — Chỉ một instance `ck watch` chạy cùng lúc (`~/.claudekit/locks/ck-watch.lock`)
- **Quét Credential** — Chặn đăng nếu phát hiện secret trong nội dung tạo ra
- **Sanitize Input** — Cắt input xuống 8K ký tự, loại bỏ injection pattern
- **Phát Hiện Comment Của Bot** — Dùng HTML marker (`<!-- ck-watch-bot -->`) để tránh trả lời chính mình
- **Loại Bỏ Mention** — Xóa `@mention` khỏi output AI để tránh notification không mong muốn
- **stdin-Only Claude** — Truyền prompt qua stdin, không qua command-line argument

## Lưu Trữ Trạng Thái

Trạng thái runtime lưu trong `.ck.json` dưới `watch.state`:

- Issue đang hoạt động kèm trạng thái lifecycle
- Lịch sử hội thoại (tối đa 10 tin nhắn mỗi issue)
- Hàng đợi triển khai (issue đã phê duyệt chờ implement)
- Danh sách issue đã xử lý (tối đa 500)

Khi shutdown (Ctrl+C), issue đang xử lý được revert về trạng thái an toàn để tiếp tục lần chạy sau.

## Log

File log được ghi vào `~/.claudekit/logs/`:

```
~/.claudekit/logs/ck-watch-20260327.log
```

## Xử Lý Sự Cố

### "Watch daemon already running"

Có process `ck watch` khác đang chạy. Dùng `--force` để restart:

```bash
ck watch --force
```

### Issue không được phát hiện

- Kiểm tra xác thực `gh`: `gh auth status`
- Kiểm tra repo có issue mở: `gh issue list`
- Xem danh sách `excludeAuthors` trong `.ck.json`

### Triển khai thất bại

- Kiểm tra `timeouts.implementSec` — issue phức tạp có thể cần hơn 5 giờ
- Xem chi tiết lỗi trong log file
- Issue sẽ revert về `awaiting_approval` để thử lại

### Comment không được đăng

- Đảm bảo `gh` có quyền write vào repository
- Kiểm tra `--dry-run` không bật
- Xem log để kiểm tra credential scanning block

## Khi Nào Nên Dùng

- **Xử lý qua đêm** — Tạo issue trước khi ngủ, sáng dậy có PR
- **Triage liên tục** — Để Claude phân tích và lập kế hoạch trong khi bạn tập trung việc khác
- **Giám sát multi-repo** — Theo dõi tất cả repo của team từ một terminal
- **Hackathon mode** — Prototyping nhanh với AI hỗ trợ triển khai

## Giới Hạn

- Triển khai tuần tự (một issue mỗi lần)
- Yêu cầu chủ repo phê duyệt cho mỗi lần triển khai
- Giới hạn GitHub API rate limit qua `gh` CLI
- Claude CLI phải khả dụng và đã xác thực

## Liên Quan

- [CLI Tổng Quan](/docs/cli)
- [ck content](/docs/cli/content) — Tạo content tự động từ hoạt động git
