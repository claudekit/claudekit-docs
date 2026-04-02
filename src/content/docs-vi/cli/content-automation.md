---
title: "Tự Động Nội Dung"
description: "Tự động hóa nội dung mạng xã hội từ sự kiện git — ck content giám sát repo và đăng lên X, Facebook qua AI."
section: cli
order: 10
lang: vi
---

# Tự Động Nội Dung

> Daemon giám sát repository git, tạo nội dung mạng xã hội bằng AI, và tự động đăng lên X (Twitter) và Facebook.

## Bắt Đầu Nhanh

```bash
# Thiết lập onboarding tương tác
ck content setup

# Khởi động daemon
ck content start

# Kiểm tra trạng thái daemon
ck content status

# Xem logs gần nhất
ck content logs --tail

# Duyệt nội dung đang chờ
ck content approve <id>

# Dừng daemon
ck content stop
```

## Lệnh Con

| Lệnh | Mục đích | Tuỳ chọn |
|-------|----------|----------|
| `start` | Khởi chạy chu trình scan→create→review→publish | `--force`, `--verbose`, `--dry-run` |
| `stop` | Tắt daemon an toàn qua SIGTERM | — |
| `status` | Hiển thị trạng thái, cấu hình, thời gian quét cuối | — |
| `logs` | Xem hoặc theo dõi file log hôm nay | `--tail` |
| `setup` | Onboarding tương tác — nền tảng, credentials, lịch | — |
| `queue` | Liệt kê nội dung đang chờ duyệt | — |
| `approve <id>` | Duyệt nội dung để đăng | — |
| `reject <id>` | Từ chối nội dung | `--reason <text>` |

## Kiến Trúc

Daemon chạy vòng lặp 6 pha mỗi chu kỳ:

1. **Git Scanner** — Phát hiện commits, PRs đã merge, tags, releases, và plan hoàn thành
2. **Content Creator** — Gửi chi tiết sự kiện tới Claude CLI, parse JSON với 4 chiến lược fallback
3. **Review Manager** — Áp dụng chế độ duyệt (auto/manual/hybrid) và kiểm tra giới hạn bài/ngày
4. **Publisher** — Đăng lên X qua `xurl` CLI hoặc Facebook qua Graph API v21.0
5. **Engagement Tracker** — Theo dõi likes, shares, comments, impressions
6. **Self-Improvement** — Phân tích bài hiệu suất cao để cải thiện prompts tương lai

State lưu tại `~/.claudekit/content.state.json` sau mỗi pha và khi shutdown.

## Cấu Hình

Cấu hình qua `.ck.json` trong thư mục gốc project:

```json
{
  "content": {
    "enabled": true,
    "pollIntervalMs": 60000,
    "reviewMode": "hybrid",
    "maxContentPerDay": 10,
    "platforms": {
      "x": { "enabled": true, "maxPostsPerDay": 5, "threadMaxParts": 6 },
      "facebook": { "enabled": true, "pageId": "YOUR_PAGE_ID", "maxPostsPerDay": 3 }
    },
    "schedule": {
      "timezone": "UTC",
      "quietHoursStart": "23:00",
      "quietHoursEnd": "06:00"
    }
  }
}
```

## Chế Độ Duyệt

### Auto
Đăng ngay sau khi tạo — phù hợp cho testing.

### Manual
Yêu cầu duyệt từng bài:

```bash
ck content queue             # Liệt kê bài đang chờ
ck content approve 42        # Duyệt bài
ck content reject 42 --reason "Quá quảng cáo"
```

### Hybrid (Khuyến nghị)
Tự động đăng bài confidence cao (> 85%), giữ bài uncertain cho duyệt thủ công.

## Nền Tảng

### X / Twitter
**Yêu cầu:** `xurl` CLI đã cài và xác thực. Hỗ trợ threads lên đến 6 phần.

### Facebook
**Yêu cầu:** Page Access Token với scope `pages_manage_metadata`, Page ID trong config. Đăng qua Graph API v21.0.

## Sự Kiện Git

| Loại | Trigger |
|------|---------|
| `commit` | Commits mới kể từ lần quét cuối |
| `pr_merged` | Pull requests đã merge (GitHub API) |
| `plan_completed` | Cập nhật thư mục `.claude/plans/` |
| `tag` | Tags git mới |
| `release` | GitHub releases đã xuất bản |

## Bảo Mật

- **PID lock** tại `~/.claudekit/locks/ck-content.lock` ngăn nhiều instances
- **Không log token** — credentials nền tảng không bao giờ ghi vào logs
- **Database** dùng WAL mode và quyền `0600`
- **State writes** atomic để ngăn cập nhật một phần khi crash

## Liên Quan

- [Watch - Tự Động Phản Hồi Issue](/vi/docs/cli/watch)
- [Kiến Trúc Hệ Thống](/vi/docs/cli/architecture)
- [Cấu Hình](/vi/docs/cli/configuration)
