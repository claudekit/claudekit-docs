---
title: "ck content"
description: "Daemon tạo content tự động từ hoạt động git và đăng lên mạng xã hội"
section: cli
order: 11
published: true
---

# ck content

Daemon tạo content tự động. Quét hoạt động git (commit, PR, release), tạo bài đăng mạng xã hội với Claude, và publish lên X/Twitter và Facebook.

## Tổng Quan

`ck content` là daemon chạy nền biến hoạt động phát triển thành nội dung mạng xã hội. Giám sát git event trên các repository, dùng Claude tạo bài đăng phù hợp từng nền tảng, và đăng theo lịch cấu hình. Hỗ trợ quy trình review (auto, manual, hybrid) và theo dõi engagement để tự cải thiện.

## Cú Pháp

```bash
ck content <subcommand> [options]
```

### Subcommand

| Lệnh | Mô Tả |
|-------|-------|
| `ck content start` | Khởi động content daemon |
| `ck content stop` | Dừng daemon đang chạy |
| `ck content status` | Hiển thị trạng thái, cấu hình, thời gian scan gần nhất |
| `ck content logs` | In log content hôm nay |
| `ck content setup` | Wizard cài đặt tương tác cho cấu hình platform |
| `ck content queue` | Liệt kê nội dung chờ review |
| `ck content approve <id>` | Phê duyệt nội dung |
| `ck content reject <id> [reason]` | Từ chối nội dung |

### Tùy Chọn Chung

| Flag | Mặc Định | Mô Tả |
|------|----------|-------|
| `--dry-run` | `false` | Tạo content nhưng không publish |
| `--verbose` | `false` | Bật debug output |
| `--force` | `false` | Dừng daemon hiện tại và khởi động lại |
| `--tail` | `false` | Theo dõi log realtime (cho subcommand `logs`) |

## Yêu Cầu

- **GitHub CLI** (`gh`) đã cài đặt và xác thực
- **Git** repository (hoặc thư mục chứa nhiều git repo)
- **API credential của platform** cấu hình qua `ck content setup`:
  - X/Twitter: API key, API secret, access token, access secret
  - Facebook: Page access token, Page ID

## Cách Hoạt Động

### Pipeline Tạo Content

```
Git Scan → Phân Loại Event → Tạo Content → Review → Publish → Engagement
```

### Quy Trình Chi Tiết

1. **Git Scan** — Quét repository tìm commit mới, PR đã merge, tag, release, plan hoàn thành
2. **Phân Loại Event** — Lọc nhiễu, phân loại event theo mức độ quan trọng (high/medium/low)
3. **Tạo Content** — Claude tạo bài đăng theo từng platform kèm hashtag, hook line, CTA
4. **Review** — Tùy theo `reviewMode`:
   - `auto` — Đăng ngay nếu qua kiểm tra chất lượng
   - `manual` — Xếp hàng chờ duyệt qua `ck content queue/approve/reject`
   - `hybrid` — Tự đăng content chất lượng cao, xếp hàng content cần xem xét
5. **Publish** — Đăng lên platform đã bật, tuân thủ rate limit và giờ nghỉ
6. **Theo Dõi Engagement** — Định kỳ kiểm tra hiệu suất bài đăng và phản hồi để cải thiện

### Git Event Được Hỗ Trợ

| Loại Event | Trigger | Ví Dụ |
|-----------|---------|-------|
| `commit` | Commit mới trên nhánh mặc định | Feature commit, bug fix |
| `pr_merged` | Pull request được merge | Feature PR, dependency update |
| `tag` | Git tag mới | Phát hành phiên bản |
| `release` | GitHub release | Phát hành lớn |
| `plan_completed` | ClaudeKit plan hoàn thành | Mốc dự án hoàn thành |

### Platform Được Hỗ Trợ

| Platform | Loại Bài | Giới Hạn |
|----------|---------|----------|
| **X/Twitter** | Bài đơn, thread (tối đa 6 phần) | 280 ký tự/bài, cấu hình max bài/ngày |
| **Facebook** | Bài trên Page | Cấu hình max bài/ngày |

## Cấu Hình

Lưu trong `.ck.json` dưới key `content`:

```json
{
  "content": {
    "enabled": false,
    "pollIntervalMs": 60000,
    "platforms": {
      "x": {
        "enabled": false,
        "maxPostsPerDay": 5,
        "threadMaxParts": 6
      },
      "facebook": {
        "enabled": false,
        "maxPostsPerDay": 3
      }
    },
    "reviewMode": "auto",
    "schedule": {
      "timezone": "UTC",
      "quietHoursStart": "23:00",
      "quietHoursEnd": "06:00"
    },
    "selfImprovement": {
      "enabled": true,
      "engagementCheckIntervalHours": 6,
      "topPerformingCount": 10
    },
    "firstScanLookbackDays": 30,
    "maxContentPerDay": 10,
    "contentDir": "~/.claudekit/content/",
    "dbPath": "~/.claudekit/content.db"
  }
}
```

### Tùy Chọn Cấu Hình Chính

| Key | Mặc Định | Mô Tả |
|-----|----------|-------|
| `enabled` | `false` | Công tắc chính (thiết lập qua `ck content setup`) |
| `pollIntervalMs` | `60000` | Khoảng thời gian quét git (1 phút) |
| `reviewMode` | `auto` | Chế độ duyệt content: `auto`, `manual`, `hybrid` |
| `schedule.timezone` | `UTC` | Múi giờ cho giờ nghỉ |
| `schedule.quietHoursStart` | `23:00` | Không đăng sau giờ này |
| `schedule.quietHoursEnd` | `06:00` | Tiếp tục đăng sau giờ này |
| `firstScanLookbackDays` | `30` | Số ngày quét lại lần chạy đầu |
| `maxContentPerDay` | `10` | Giới hạn bài đăng hàng ngày trên tất cả platform |
| `selfImprovement.enabled` | `true` | Học từ engagement metric |

## Ví Dụ

### Bắt Đầu

```bash
# Setup tương tác — cấu hình platform và API key
ck content setup

# Khởi động daemon
ck content start

# Kiểm tra trạng thái
ck content status
```

### Quy Trình Review Thủ Công

```bash
# Đặt reviewMode thành "manual" trong .ck.json, sau đó:
ck content start

# Kiểm tra content chờ duyệt
ck content queue

# Phê duyệt hoặc từ chối
ck content approve 42
ck content reject 43 "Quá quảng cáo"
```

### Giám Sát

```bash
# Xem log hôm nay
ck content logs

# Theo dõi log realtime
ck content logs --tail

# Test mà không đăng
ck content start --dry-run --verbose
```

### Quản Lý Daemon

```bash
# Dừng daemon
ck content stop

# Khởi động lại
ck content start --force
```

## Vòng Đời Content

Mỗi nội dung đi qua các trạng thái:

```
draft → scheduled → reviewing → approved → publishing → published
                                                      → failed (retry tối đa 3 lần trong 24h)
```

## Cơ Sở Dữ Liệu

Dữ liệu content lưu trong SQLite tại `~/.claudekit/content.db`:

- **git_events** — Hoạt động git được theo dõi kèm phân loại mức độ quan trọng
- **content_items** — Bài đăng đã tạo kèm platform, text, hashtag, trạng thái
- **publications** — Tham chiếu bài đã đăng (post ID, URL, timestamp)

Dọn dẹp data tự động chạy mỗi 24 giờ.

## Bảo Mật

- **Process Lock** — Chỉ một daemon chạy cùng lúc (`~/.claudekit/locks/ck-content.lock`)
- **Cách Ly Credential** — API key platform lưu riêng, không trong git
- **Rate Limiting** — Giới hạn hàng ngày theo platform và giờ nghỉ cấu hình
- **Bảo Vệ Retry** — Tạo content thất bại retry tối đa 3 lần, publish thất bại retry trong 24h

## Xử Lý Sự Cố

### "Content engine not enabled"

Chạy setup wizard:

```bash
ck content setup
```

### "Content daemon already running"

Dừng hoặc restart:

```bash
ck content stop
# hoặc
ck content start --force
```

### Bài không được đăng

- Kiểm tra API credential qua `ck content setup`
- Kiểm tra giờ nghỉ trong config — bài không đăng trong giờ nghỉ
- Xem giới hạn `maxPostsPerDay`
- Kiểm tra log: `ck content logs --tail`

### Không tạo được content

- Đảm bảo repo có hoạt động git gần đây
- Kiểm tra `firstScanLookbackDays` nếu là lần chạy đầu
- Xem phân loại event trong log — một số event có thể bị lọc là nhiễu

## Khi Nào Nên Dùng

- **Developer advocacy** — Tự động chia sẻ tốc độ ship của team
- **Open source** — Cập nhật follower về release và tính năng mới
- **Changelog broadcasting** — Biến release thành thông báo mạng xã hội
- **Content marketing** — Tạo bài đăng nháp từ hoạt động phát triển

## Giới Hạn

- Platform hiện hỗ trợ X/Twitter và Facebook
- Yêu cầu API key platform (tài khoản developer)
- Chất lượng content phụ thuộc vào chất lượng commit message
- Self-improvement cần lịch sử bài đăng đủ lớn

## Liên Quan

- [CLI Tổng Quan](/docs/cli)
- [ck watch](/docs/cli/watch) — Giám sát GitHub issue tự động
