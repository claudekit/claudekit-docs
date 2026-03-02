---
lang: vi
title: "ck:worktree"
description: "Tạo git worktree cô lập để phát triển song song mà không cần chuyển nhánh"
section: engineer
kit: engineer
category: skills
order: 59
---

Tạo git worktree cô lập để phát triển song song. Làm việc trên nhiều tính năng cùng lúc mà không cần chuyển nhánh.

## Cách Dùng

```
/ck:worktree [tên-tính-năng]
```

## Ví Dụ

```bash
/ck:worktree add-auth           # Tạo worktree cho tính năng auth
/ck:worktree fix-login-bug      # Tạo worktree cho bug fix
```

## Chức Năng

- Tạo git worktree mới với nhánh chuyên dụng
- Dùng quy ước đặt tên dự án (ví dụ: `kai/feat/add-auth`)
- Mặc định nhánh từ `dev`
- Cung cấp không gian làm việc cô lập để phát triển song song
