---
title: "ck:bootstrap"
description: "Scaffolding dự án end-to-end từ ý tưởng đến code hoạt động với nghiên cứu, lựa chọn tech stack và implementation"
section: engineer
kit: engineer
category: skills
order: 50
published: true
lang: vi
---

# `ck:bootstrap`

Orchestrator scaffolding dự án end-to-end. Đưa một yêu cầu từ con số không đến code đã chạy, đã test, đã review bằng cách điều phối qua research, planning và implementation theo trình tự.

## Skill Này Làm Gì

Bootstrap xử lý toàn bộ workflow "greenfield": git init, nghiên cứu tech stack, thiết kế kiến trúc, planning, implementation, tests, review, docs và onboarding. Nó không viết code trực tiếp — nó điều phối `/ck:plan` và `/ck:cook` với các flags phù hợp cho mode bạn chọn.

## Các Modes

| Flag | Mode | User Gates | Planning Skill | Cook Skill |
|------|------|-----------|----------------|------------|
| `--full` | Full interactive | Mỗi phase | `--hard` | (interactive) |
| `--auto` | Tự động (mặc định) | Chỉ Design | `--auto` | `--auto` |
| `--fast` | Nhanh | Không có | `--fast` | `--auto` |
| `--parallel` | Multi-agent | Chỉ Design | `--parallel` | `--parallel` |

## Sử Dụng

```
/ck:bootstrap <requirements> [flags]
```

**Ví dụ:**
- `/ck:bootstrap "Build a SaaS dashboard with auth and billing"`
- `/ck:bootstrap "REST API for inventory management" --fast`
- `/ck:bootstrap "Real-time collaboration tool like Figma" --full`
- `/ck:bootstrap "E-commerce platform with Stripe + CMS" --parallel`

## Tổng Quan Workflow

```
Git Init → Research → Tech Stack Selection → Design Review
→ Planning → Implementation → Tests → Code Review
→ Docs → Onboarding Guide → Final Summary
```

**User gates** (dừng để phê duyệt) tùy thuộc vào mode:
- `--full`: mỗi phase
- `--auto` / `--parallel`: chỉ design phase
- `--fast`: không có (hoàn toàn tự động)

## Cách Hoạt Động

Bootstrap là orchestrator, không phải implementer:

1. **Git Init** — khởi tạo repo nếu chưa phải git project
2. **Research** — điều tra các options tech stack cho yêu cầu của bạn
3. **Tech Stack** — đề xuất và xác nhận stack (Node/Bun, framework, DB, auth, v.v.)
4. **Design** — tổng quan kiến trúc, data model, API shape
5. **Plan** — delegates to `/ck:plan` với flags phù hợp mode
6. **Implement** — delegates to `/ck:cook` với flags phù hợp mode
7. **Test** — xác minh test suite passes (yêu cầu 100%)
8. **Review** — code-reviewer agent xác nhận chất lượng
9. **Docs** — tạo README, API docs, setup guide
10. **Onboard** — tạo `CONTRIBUTING.md` và dev quickstart

## Câu Lệnh Mẫu

- `/ck:bootstrap "Multi-tenant SaaS with team workspaces" --auto`
- `/ck:bootstrap "CLI tool for managing dotfiles" --fast`
- `/ck:bootstrap "GraphQL API with subscriptions" --parallel`
- `/ck:bootstrap "Mobile app backend with push notifications" --full`

## Các Skills Liên Quan

- [Planning](/vi/docs/engineer/skills/plan) — planning skill được gọi trong workflow
- [Cook](/vi/docs/engineer/skills/cook) — cook skill được gọi trong workflow
- [Agent Teams](/vi/docs/engineer/skills/team) — dùng với `--parallel` để thực thi multi-agent
