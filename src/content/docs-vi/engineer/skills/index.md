---
title: Tổng Quan Skills
description: 89 skill được phát hành cùng ClaudeKit Engineer cho phát triển, thiết kế, tài liệu và công cụ
section: engineer
kit: engineer
category: skills
order: 1
published: true
lang: vi
---

# Tổng Quan Skills

ClaudeKit Engineer phát hành **89 skills**. Namespace plugin `ck` cung cấp các skill dưới dạng `/ck:<skill>` trong cả Claude Code và Codex.

:::note[Hỗ trợ theo provider]
Cả hai provider đều tải các skill bên dưới. Claude Code còn tải [các Engineer agent](/vi/docs/engineer/agents); Codex hiện chỉ cung cấp Engineer skills.
:::

Các khả năng tài liệu được lưu trong một nhóm lồng nhau của payload nhưng xuất hiện dưới dạng bốn skill riêng: `/ck:docx`, `/ck:pdf`, `/ck:pptx` và `/ck:xlsx`.

## Danh Mục Đầy Đủ

| Skill | Skill | Skill |
|---|---|---|
| [agent-browser](/vi/docs/engineer/skills/agent-browser) | [agentize](/vi/docs/engineer/skills/agentize) | [ai-artist](/vi/docs/engineer/skills/ai-artist) |
| [ai-multimodal](/vi/docs/engineer/skills/ai-multimodal) | [ask](/vi/docs/engineer/skills/ask) | [backend-development](/vi/docs/engineer/skills/backend-development) |
| [better-auth](/vi/docs/engineer/skills/better-auth) | [bootstrap](/vi/docs/engineer/skills/bootstrap) | [brainstorm](/vi/docs/engineer/skills/brainstorm) |
| [chrome-profile](/vi/docs/engineer/skills/chrome-profile) | [autoresearch](/vi/docs/engineer/skills/ck-autoresearch) | [code-review](/vi/docs/engineer/skills/ck-code-review) |
| [debug](/vi/docs/engineer/skills/ck-debug) | [graphify](/vi/docs/engineer/skills/ck-graphify) | [loop](/vi/docs/engineer/skills/ck-loop) |
| [plan](/vi/docs/engineer/skills/ck-plan) | [predict](/vi/docs/engineer/skills/ck-predict) | [scenario](/vi/docs/engineer/skills/ck-scenario) |
| [security](/vi/docs/engineer/skills/ck-security) | [coding-agent-orchestration](/vi/docs/engineer/skills/coding-agent-orchestration) | [coding-level](/vi/docs/engineer/skills/coding-level) |
| [context-engineering](/vi/docs/engineer/skills/context-engineering) | [cook](/vi/docs/engineer/skills/cook) | [copywriting](/vi/docs/engineer/skills/copywriting) |
| [cti-expert](/vi/docs/engineer/skills/cti-expert) | [databases](/vi/docs/engineer/skills/databases) | [deploy](/vi/docs/engineer/skills/deploy) |
| [design](/vi/docs/engineer/skills/design) | [devops](/vi/docs/engineer/skills/devops) | [docs](/vi/docs/engineer/skills/docs) |
| [docs-seeker](/vi/docs/engineer/skills/docs-seeker) | [docx](/vi/docs/engineer/skills/docx) | [excalidraw](/vi/docs/engineer/skills/excalidraw) |
| [find-skills](/vi/docs/engineer/skills/find-skills) | [fix](/vi/docs/engineer/skills/fix) | [frontend-design](/vi/docs/engineer/skills/frontend-design) |
| [frontend-development](/vi/docs/engineer/skills/frontend-development) | [ghpm](/vi/docs/engineer/skills/ghpm) | [git](/vi/docs/engineer/skills/git) |
| [gkg](/vi/docs/engineer/skills/gkg) | [google-adk-python](/vi/docs/engineer/skills/google-adk-python) | [html-video](/vi/docs/engineer/skills/html-video) |
| [journal](/vi/docs/engineer/skills/journal) | [llms](/vi/docs/engineer/skills/llms) | [markdown-novel-viewer](/vi/docs/engineer/skills/markdown-novel-viewer) |
| [mcp-builder](/vi/docs/engineer/skills/mcp-builder) | [media-processing](/vi/docs/engineer/skills/media-processing) | [mermaidjs-v11](/vi/docs/engineer/skills/mermaidjs-v11) |
| [mintlify](/vi/docs/engineer/skills/mintlify) | [mobile-development](/vi/docs/engineer/skills/mobile-development) | [payment-integration](/vi/docs/engineer/skills/payment-integration) |
| [pdf](/vi/docs/engineer/skills/pdf) | [plans-kanban](/vi/docs/engineer/skills/plans-kanban) | [pptx](/vi/docs/engineer/skills/pptx) |
| [preview](/vi/docs/engineer/skills/preview) | [problem-solving](/vi/docs/engineer/skills/problem-solving) | [project-management](/vi/docs/engineer/skills/project-management) |
| [project-organization](/vi/docs/engineer/skills/project-organization) | [react-best-practices](/vi/docs/engineer/skills/react-best-practices) | [remotion](/vi/docs/engineer/skills/remotion) |
| [repomix](/vi/docs/engineer/skills/repomix) | [research](/vi/docs/engineer/skills/research) | [retro](/vi/docs/engineer/skills/retro) |
| [review-pr](/vi/docs/engineer/skills/review-pr) | [scout](/vi/docs/engineer/skills/scout) | [security-scan](/vi/docs/engineer/skills/security-scan) |
| [sequential-thinking](/vi/docs/engineer/skills/sequential-thinking) | [shader](/vi/docs/engineer/skills/shader) | [ship](/vi/docs/engineer/skills/ship) |
| [shopify](/vi/docs/engineer/skills/shopify) | [show-off](/vi/docs/engineer/skills/show-off) | [skill-creator](/vi/docs/engineer/skills/skill-creator) |
| [stitch](/vi/docs/engineer/skills/stitch) | [tanstack](/vi/docs/engineer/skills/tanstack) | [team](/vi/docs/engineer/skills/team) |
| [tech-graph](/vi/docs/engineer/skills/tech-graph) | [test](/vi/docs/engineer/skills/test) | [threejs](/vi/docs/engineer/skills/threejs) |
| [ui-styling](/vi/docs/engineer/skills/ui-styling) | [ui-ux-pro-max](/vi/docs/engineer/skills/ui-ux-pro-max) | [use-mcp](/vi/docs/engineer/skills/use-mcp) |
| [vibe](/vi/docs/engineer/skills/vibe) | [watzup](/vi/docs/engineer/skills/watzup) | [web-design-guidelines](/vi/docs/engineer/skills/web-design-guidelines) |
| [web-frameworks](/vi/docs/engineer/skills/web-frameworks) | [web-testing](/vi/docs/engineer/skills/web-testing) | [worktree](/vi/docs/engineer/skills/worktree) |
| [xia](/vi/docs/engineer/skills/xia) | [xlsx](/vi/docs/engineer/skills/xlsx) | |

## Sử Dụng Skills

Gọi skill trực tiếp hoặc mô tả tác vụ phù hợp:

```text
/ck:plan thiết kế hệ thống subscription billing
Sử dụng PDF skill để trích xuất mọi bảng từ report.pdf.
```

Với custom skill cục bộ, tạo `.claude/skills/<name>/SKILL.md`. Dùng `ck doctor` để kiểm tra plugin Engineer toàn cục và catalog đang hoạt động.
