---
lang: vi
title: "ck:bootstrap"
description: "Khởi tạo dự án từ đầu đến cuối — từ ý tưởng đến code chạy được với nghiên cứu, chọn tech stack, và triển khai"
section: engineer
kit: engineer
category: skills
order: 50
published: true
---

Bộ điều phối khởi tạo dự án toàn diện. Đưa một yêu cầu từ zero đến code chạy được, đã kiểm thử, đã review bằng cách ủy quyền qua nghiên cứu, lập kế hoạch, và triển khai theo trình tự.

## Chức Năng Của Skill Này

Bootstrap xử lý toàn bộ quy trình "greenfield": git init, nghiên cứu tech stack, thiết kế kiến trúc, lập kế hoạch, triển khai, kiểm thử, review, tài liệu, và hướng dẫn onboarding. Skill không viết code trực tiếp — mà điều phối `/ck:plan` và `/ck:cook` với các flag phù hợp cho chế độ bạn chọn.

## Các Chế Độ

| Flag | Chế Độ | Cổng Phê Duyệt | Skill Lập Kế Hoạch | Skill Cook |
|------|---------|----------------|---------------------|------------|
| `--full` | Tương tác đầy đủ | Mỗi giai đoạn | `--hard` | (tương tác) |
| `--auto` | Tự động (mặc định) | Chỉ thiết kế | `--auto` | `--auto` |
| `--fast` | Nhanh | Không | `--fast` | `--auto` |
| `--parallel` | Đa agent | Chỉ thiết kế | `--parallel` | `--parallel` |

## Cách Dùng

```
/ck:bootstrap <yêu cầu> [flags]
```

**Ví dụ:**
- `/ck:bootstrap "Build a SaaS dashboard with auth and billing"`
- `/ck:bootstrap "REST API for inventory management" --fast`
- `/ck:bootstrap "Real-time collaboration tool like Figma" --full`
- `/ck:bootstrap "E-commerce platform with Stripe + CMS" --parallel`

## Tổng Quan Quy Trình

```
Git Init → Nghiên Cứu → Chọn Tech Stack → Review Thiết Kế
→ Lập Kế Hoạch → Triển Khai → Kiểm Thử → Review Code
→ Tài Liệu → Hướng Dẫn Onboarding → Tổng Kết Cuối
```

**Cổng phê duyệt** (tạm dừng chờ xác nhận) tùy theo chế độ:
- `--full`: mỗi giai đoạn
- `--auto` / `--parallel`: chỉ giai đoạn thiết kế
- `--fast`: không có (hoàn toàn tự động)

## Cách Hoạt Động

Bootstrap là bộ điều phối, không phải người triển khai:

1. **Git Init** — khởi tạo repo nếu chưa phải git project
2. **Nghiên Cứu** — khảo sát các lựa chọn tech stack cho yêu cầu của bạn
3. **Tech Stack** — đề xuất và xác nhận stack (Node/Bun, framework, DB, auth, v.v.)
4. **Thiết Kế** — tổng quan kiến trúc, mô hình dữ liệu, hình dạng API
5. **Lập Kế Hoạch** — ủy quyền cho `/ck:plan` với các flag phù hợp với chế độ
6. **Triển Khai** — ủy quyền cho `/ck:cook` với các flag phù hợp với chế độ
7. **Kiểm Thử** — xác minh bộ test vượt qua (yêu cầu 100%)
8. **Review** — agent code-reviewer xác nhận chất lượng
9. **Tài Liệu** — tạo README, tài liệu API, hướng dẫn cài đặt
10. **Onboarding** — tạo `CONTRIBUTING.md` và hướng dẫn dev nhanh

## Ví Dụ Lệnh

- `/ck:bootstrap "Multi-tenant SaaS with team workspaces" --auto`
- `/ck:bootstrap "CLI tool for managing dotfiles" --fast`
- `/ck:bootstrap "GraphQL API with subscriptions" --parallel`
- `/ck:bootstrap "Mobile app backend with push notifications" --full`

## Skill Liên Quan

- [Lập Kế Hoạch](/vi/docs/engineer/skills/tools/plan) — skill plan được gọi trong quy trình
- [Cook](/vi/docs/engineer/skills/tools/cook) — skill cook được gọi trong quy trình
- [Agent Teams](/vi/docs/engineer/skills/tools/team) — dùng với `--parallel` để thực thi đa agent
