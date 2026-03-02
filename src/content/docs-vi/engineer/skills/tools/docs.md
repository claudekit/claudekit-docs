---
lang: vi
title: "ck:docs"
description: "Quản lý tài liệu dự án — khởi tạo, cập nhật, và tóm tắt tài liệu với sự hỗ trợ của AI"
section: engineer
kit: engineer
category: skills
order: 11
---

Quản lý tài liệu dự án với phân tích hỗ trợ AI. Khởi tạo tài liệu cho dự án mới, cập nhật sau các thay đổi, hoặc tạo tóm tắt.

## Cách Dùng

```
/ck:docs init          # Khởi tạo tài liệu cho dự án
/ck:docs update        # Cập nhật tài liệu sau khi thay đổi code
/ck:docs summarize     # Tạo tóm tắt tài liệu
```

## Các Lệnh Con

| Lệnh Con | Mô Tả |
|---------|--------|
| `init` | Phân tích codebase và tạo bộ tài liệu ban đầu |
| `update` | Quét các thay đổi và cập nhật tài liệu hiện có |
| `summarize` | Tạo tóm tắt dự án ngắn gọn |

## Các File Được Tạo

```
docs/
├── project-overview-pdr.md
├── codebase-summary.md
├── system-architecture.md
├── code-standards.md
└── project-roadmap.md
```
