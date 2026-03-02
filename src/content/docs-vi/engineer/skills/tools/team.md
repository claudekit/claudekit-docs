---
lang: vi
title: "ck:team"
description: "Điều phối cộng tác đa phiên song song với các đồng nghiệp Claude Code độc lập"
section: engineer
kit: engineer
category: skills
order: 50
published: true
---

Engine điều phối native của CK (v2.1.0) — khởi động các phiên Claude Code độc lập làm đồng nghiệp, mỗi phiên có cửa sổ ngữ cảnh riêng, quyền sở hữu tác vụ riêng, và bộ nhớ xuyên phiên.

## Chức Năng Của Skill Này

Agent Teams cho phép bạn chạy nhiều instance Claude Code song song — mỗi instance xử lý một luồng công việc khác nhau cùng lúc. Các đồng nghiệp chia sẻ danh sách tác vụ và giao tiếp qua tin nhắn. Khác với subagent (fire-and-forget), đồng nghiệp là liên tục, theo hướng sự kiện, và có khả năng thảo luận.

Template tự động thực thi khi khởi động (thay đổi v2.1.0 — thủ công trong v1.x).

## Template

| Template | Đồng Nghiệp | Tốt Nhất Cho | Ngân Sách Token |
|----------|-------------|--------------|-----------------|
| `research` | 2-4 nhà nghiên cứu | Phân tích cạnh tranh, điều tra đa nguồn | 150-300K (haiku) |
| `cook` | 1 lead + N dev | Triển khai tính năng song song | 400-800K (sonnet+haiku) |
| `review` | 2-3 reviewer | Chất lượng code, kiểm toán bảo mật, hiệu năng | 100-200K (haiku) |
| `debug` | 3 debugger (mặc định) | Phân tích nguyên nhân gốc rễ qua các giả thuyết cạnh tranh | 200-400K (sonnet) |

## Cách Dùng

```
/ck:team <template> <ngữ cảnh> [flags]
```

**Flags:**
- `--devs N` — số lượng đồng nghiệp developer
- `--researchers N` — số lượng đồng nghiệp nhà nghiên cứu
- `--reviewers N` — số lượng đồng nghiệp reviewer
- `--debuggers N` — số lượng đồng nghiệp debugger
- `--plan-approval` — yêu cầu phê duyệt lead trước khi bắt đầu triển khai
- `--delegate` — lead chỉ phối hợp, không trực tiếp chạm vào code

**Ví dụ:**
- `/ck:team cook "implement auth + notifications + dashboard" --devs 3`
- `/ck:team research "compare React state management options" --researchers 2`
- `/ck:team review --reviewers 2`
- `/ck:team debug "race condition in payment flow" --plan-approval`

## Yêu Cầu

Agent Teams phải được bật trong môi trường Claude Code của bạn:

```bash
# Claude Code < 2.1.33 (dùng biến môi trường)
CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1 claude

# Claude Code >= 2.1.33 (bật mặc định)
```

## Giám Sát Theo Hướng Sự Kiện

Các nhóm kích hoạt hook mà bạn có thể quan sát:

| Sự Kiện | Khi Nào | Dùng Cho |
|---------|---------|----------|
| `TaskCompleted` | Đồng nghiệp hoàn thành tác vụ | Theo dõi tiến độ, kích hoạt phụ thuộc |
| `TeammateIdle` | Đồng nghiệp không có tác vụ pending | Phân công lại công việc, kết thúc |

## Bộ Nhớ Agent

Đồng nghiệp lưu giữ kiến thức xuyên phiên qua `.claude/agent-memory/<name>/`. Mỗi đồng nghiệp duy trì:
- Ngữ cảnh và phát hiện trước đó
- Các quyết định đã đưa ra
- Các file được sở hữu

Bộ nhớ theo phạm vi đồng nghiệp — không được chia sẻ giữa các đồng nghiệp trừ khi được truyền tường minh.

## Khi Nào Dùng vs Subagent

| Tình Huống | Agent Teams | Subagent |
|-----------|-------------|---------|
| 3+ luồng song song độc lập | Có | Không |
| Các worker cần thảo luận phát hiện | Có | Không |
| Các giả thuyết cạnh tranh để đánh giá | Có | Không |
| Công việc đa tầng (API + UI + DB) | Có | Có |
| Tác vụ đơn tập trung | Không | Có |
| Chuỗi tuần tự (A rồi B rồi C) | Không | Có |
| Ngân sách token hạn chế | Không | Có |

## Các Chế Độ Hiển Thị

Nhóm render dựa trên terminal của bạn:

- **auto** — phát hiện chế độ tốt nhất cho môi trường của bạn
- **in-process** — output inline (điều hướng bằng Shift+Up/Down)
- **tmux** — xem chia pane theo từng đồng nghiệp
- **split** — cửa sổ terminal riêng biệt

## Khôi Phục Lỗi

Nếu đồng nghiệp bị crash hoặc idle bất ngờ:
1. Kiểm tra `TaskList` cho các tác vụ in-progress mồ côi
2. Phân công lại qua `TaskUpdate` cho đồng nghiệp khác hoặc tự nhận
3. Bộ nhớ agent đồng nghiệp lưu giữ ngữ cảnh để bàn giao

## Skill Liên Quan

- [Cook](/vi/docs/engineer/skills/tools/cook) — engine triển khai được sử dụng bởi các nhóm cook
- [Lập Kế Hoạch](/vi/docs/engineer/skills/tools/plan) — tạo kế hoạch trước khi ủy quyền cho nhóm
