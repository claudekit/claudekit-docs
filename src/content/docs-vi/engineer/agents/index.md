---
title: Tổng quan Agent
description: 13 agent chuyên biệt của ClaudeKit dành cho quy trình Claude Code
section: engineer
kit: engineer
category: agents
order: 1
published: true
lang: vi
---

# Tổng quan Agent

ClaudeKit Engineer cung cấp 13 agent chuyên biệt cho Claude Code. Bạn có thể chọn agent trực tiếp hoặc để các skill như `/ck:plan`, `/ck:cook`, `/ck:test`, và `/ck:ck-code-review` điều phối.

:::note[Hỗ trợ nhà cung cấp]
Các định nghĩa agent này chỉ có trong Claude Code. Bản cài đặt Codex cung cấp danh mục skill của ClaudeKit, không cung cấp các agent dành riêng cho Claude.
:::

## Danh mục Agent

| Agent | Mục đích |
|-------|----------|
| [brainstormer](/vi/docs/engineer/agents/brainstormer) | Khám phá phương án, thách thức giả định, và so sánh đánh đổi |
| [code-reviewer](/vi/docs/engineer/agents/code-reviewer) | Đánh giá tính đúng đắn, bảo mật, hiệu năng, và khả năng bảo trì |
| [code-simplifier](/vi/docs/engineer/agents/code-simplifier) | Làm rõ mã đã triển khai mà không đổi hành vi |
| [debugger](/vi/docs/engineer/agents/debugger) | Điều tra lỗi và xác định nguyên nhân gốc |
| [docs-manager](/vi/docs/engineer/agents/docs-manager) | Duy trì tài liệu kỹ thuật và tri thức dự án |
| [fullstack-developer](/vi/docs/engineer/agents/fullstack-developer) | Triển khai frontend, backend, và tích hợp |
| [git-manager](/vi/docs/engineer/agents/git-manager) | Chuẩn bị commit tập trung và bàn giao repository |
| [journal-writer](/vi/docs/engineer/agents/journal-writer) | Ghi lại quyết định kỹ thuật, thất bại, và bài học |
| [planner](/vi/docs/engineer/agents/planner) | Nghiên cứu yêu cầu và lập kế hoạch triển khai |
| [project-manager](/vi/docs/engineer/agents/project-manager) | Theo dõi tiến độ, phụ thuộc, và trạng thái bàn giao |
| [researcher](/vi/docs/engineer/agents/researcher) | Thu thập và tổng hợp bằng chứng kỹ thuật |
| [tester](/vi/docs/engineer/agents/tester) | Chạy kiểm thử và xác nhận các cổng chất lượng |
| [ui-ux-designer](/vi/docs/engineer/agents/ui-ux-designer) | Thiết kế giao diện và trải nghiệm dễ dùng, dễ tiếp cận |

## Cách phối hợp

Các skill chọn agent phù hợp cho từng workflow. Một quy trình triển khai điển hình có thể chuyển từ lập kế hoạch sang phát triển, kiểm thử, đánh giá, rồi bàn giao Git.

```text
planner -> fullstack-developer -> tester -> code-reviewer -> git-manager
```

Với các tác vụ nghiên cứu hoặc đánh giá độc lập, Claude Code có thể chạy nhiều agent song song rồi tổng hợp kết quả trước bước tiếp theo.
