---
title: "ck:worktree"
description: "Tạo git worktrees cô lập cho phát triển song song mà không cần chuyển nhánh"
section: engineer
kit: engineer
category: skills
order: 59
lang: vi
---

# `ck:worktree`

Tạo git worktrees cô lập cho phát triển song song. Làm việc trên nhiều tính năng đồng thời mà không cần chuyển nhánh.

## Cách Dùng

```
/ck:worktree [feature-name]
```

## Ví Dụ

```bash
/ck:worktree add-auth           # Tạo worktree cho tính năng auth
/ck:worktree fix-login-bug      # Tạo worktree để sửa lỗi
```

## Chức Năng

- Tạo git worktree mới với nhánh riêng
- Dùng quy ước đặt tên của dự án (ví dụ: `kai/feat/add-auth`)
- Phân nhánh từ `dev` theo mặc định
- Cung cấp workspace cô lập cho công việc song song
