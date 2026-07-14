---
title: Agent Fullstack Developer
description: Thực thi các phase triển khai song song với ranh giới sở hữu file nghiêm ngặt
section: engineer
kit: engineer
category: agents
order: 90
published: true
lang: vi
---

# Agent Fullstack Developer

Agent `fullstack-developer` triển khai các phase backend, frontend và hạ tầng từ kế hoạch song song. Mỗi agent chỉ sửa các file được giao để tránh xung đột giữa các luồng công việc.

## Khi Nào Sử Dụng

- Thực thi phase từ `/ck:plan --parallel`
- Xây dựng API, UI và test theo ranh giới file rõ ràng
- Chạy nhiều phase độc lập cùng lúc

Agent này chỉ có trong Claude Code. Codex dùng các skill Engineer nhưng không tải định nghĩa agent Claude.
