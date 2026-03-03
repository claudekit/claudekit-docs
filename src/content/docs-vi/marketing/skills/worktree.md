---
lang: vi
title: "ckm:worktree"
description: "Tạo git worktree riêng biệt cho phát triển song song"
section: marketing
kit: marketing
category: skills
order: 51
---

# ckm:worktree

> Tạo git worktrees riêng biệt để nhiều AI agents có thể làm việc song song mà không xung đột.

## Kỹ Năng Này Làm Gì

Skill `ckm:worktree` sử dụng git worktrees để tạo môi trường làm việc độc lập cho mỗi agent hoặc luồng công việc. Đặc biệt hữu ích khi chạy nhiều agents song song — mỗi agent có worktree riêng, không xung đột file, commit độc lập.

Khi hoàn thành, merge worktrees lại và xóa để giữ repo gọn gàng.

## Bắt Đầu Nhanh

```
/ckm:worktree
```

Tạo worktree mới:

```
/ckm:worktree create feature/q2-campaign-content
```

## Tính Năng Chính

- **Tạo worktree**: Branch mới với thư mục làm việc độc lập
- **List worktrees**: Xem tất cả worktrees đang active
- **Merge và cleanup**: Merge branch và xóa worktree khi xong
- **Parallel workflows**: Điều phối nhiều agents trên các worktrees khác nhau
- **Conflict prevention**: Ngăn chặn xung đột file giữa agents

## Ví Dụ Sử Dụng

**Tạo worktree cho agent:**
```
/ckm:worktree create content-agent/email-campaign Tạo worktree cho agent viết email campaign
```

**Parallel development:**
```
/ckm:worktree create-parallel 3 Tạo 3 worktrees cho 3 agents làm việc song song: content, SEO, social
```

**Cleanup sau merge:**
```
/ckm:worktree cleanup Merge tất cả worktrees hoàn thành và dọn dẹp
```

## Liên Quan

- [ckm:kanban](/vi/docs/marketing/skills/kanban) - Điều phối tác vụ giữa các agents
- [ckm:plan](/vi/docs/marketing/skills/plan) - Lập kế hoạch phân công agents
- [ckm:watzup](/vi/docs/marketing/skills/watzup) - Tổng kết tiến độ các worktrees
