---
title: "ck:team"
description: "Điều phối cộng tác đa phiên song song với các Claude Code teammates độc lập"
section: engineer
kit: engineer
category: skills
order: 50
published: true
lang: vi
---

# `ck:team`

Engine điều phối CK-native (v2.1.0) tạo ra các phiên Claude Code độc lập làm teammates, mỗi phiên có cửa sổ context riêng, quyền sở hữu task và bộ nhớ xuyên phiên.

## Skill Này Làm Gì

Agent Teams cho phép bạn chạy nhiều instance Claude Code song song—mỗi instance giải quyết một workstream khác nhau đồng thời. Teammates chia sẻ danh sách task và giao tiếp qua messaging. Không giống subagents (fire-and-forget), teammates là liên tục, hướng sự kiện và có khả năng thảo luận.

Templates tự động thực thi khi spawn (thay đổi từ v2.1.0—là thủ công trong v1.x).

## Templates

| Template | Teammates | Phù Hợp Nhất | Token Budget |
|----------|-----------|----------|--------------|
| `research` | 2-4 researchers | Phân tích cạnh tranh, điều tra đa nguồn | 150-300K (haiku) |
| `cook` | 1 lead + N devs | Triển khai tính năng song song | 400-800K (sonnet+haiku) |
| `review` | 2-3 reviewers | Chất lượng code, bảo mật, kiểm toán hiệu suất | 100-200K (haiku) |
| `debug` | 3 debuggers (mặc định) | Phân tích nguyên nhân gốc qua giả thuyết cạnh tranh | 200-400K (sonnet) |

## Cách Dùng

```
/ck:team <template> <context> [flags]
```

**Flags:**
- `--devs N` — số lượng developer teammates
- `--researchers N` — số lượng researcher teammates
- `--reviewers N` — số lượng reviewer teammates
- `--debuggers N` — số lượng debugger teammates
- `--plan-approval` — yêu cầu lead approve trước khi bắt đầu triển khai
- `--delegate` — lead chỉ điều phối, không trực tiếp chạm vào code

**Ví dụ:**
- `/ck:team cook "implement auth + notifications + dashboard" --devs 3`
- `/ck:team research "compare React state management options" --researchers 2`
- `/ck:team review --reviewers 2`
- `/ck:team debug "race condition in payment flow" --plan-approval`

## Yêu Cầu

Agent Teams phải được bật trong môi trường Claude Code của bạn:

```bash
# Claude Code < 2.1.33 (dùng env var)
CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 claude

# Claude Code >= 2.1.33 (được bật mặc định)
```

## Giám Sát Hướng Sự Kiện

Teams kích hoạt hooks bạn có thể quan sát:

| Sự Kiện | Khi Nào | Dùng Cho |
|-------|------|---------|
| `TaskCompleted` | Teammate hoàn thành task | Theo dõi tiến trình, kích hoạt dependents |
| `TeammateIdle` | Teammate không có task đang chờ | Phân công lại công việc, kết thúc |

## Bộ Nhớ Agent

Teammates lưu trữ kiến thức xuyên phiên qua `.claude/agent-memory/<name>/`. Mỗi teammate duy trì:
- Context và phát hiện trước đó
- Các quyết định đã đưa ra
- Files được sở hữu

Bộ nhớ được giới hạn theo phạm vi teammate—không chia sẻ giữa các teammates trừ khi được chuyển tường minh.

## Khi Nào Dùng So Với Subagents

| Tình Huống | Agent Teams | Subagents |
|-----------|-------------|-----------|
| 3+ workstreams song song độc lập | Có | Không |
| Workers cần thảo luận phát hiện | Có | Không |
| Các giả thuyết cạnh tranh cần đánh giá | Có | Không |
| Công việc đa lớp (API + UI + DB) | Có | Có |
| Task tập trung đơn lẻ | Không | Có |
| Chuỗi tuần tự (A rồi B rồi C) | Không | Có |
| Ngân sách token hạn chế | Không | Có |

## Chế Độ Hiển Thị

Teams render dựa trên terminal của bạn:

- **auto** — phát hiện chế độ tốt nhất cho môi trường của bạn
- **in-process** — output inline (điều hướng bằng Shift+Up/Down)
- **tmux** — chế độ xem split-pane mỗi teammate
- **split** — cửa sổ terminal riêng

## Phục Hồi Lỗi

Nếu teammate bị crash hoặc idle bất ngờ:
1. Kiểm tra `TaskList` để tìm các task in-progress bị bỏ rơi
2. Phân công lại qua `TaskUpdate` cho teammate khác hoặc tự nhận
3. Bộ nhớ agent teammate lưu giữ context để bàn giao

## Skill Liên Quan

- [Cook](/vi/docs/engineer/skills/cook) — implementation engine được dùng bởi cook teams
- [Planning](/vi/docs/engineer/skills/plan) — tạo plans trước khi giao cho teams
