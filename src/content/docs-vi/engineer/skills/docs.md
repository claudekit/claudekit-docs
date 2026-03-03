---
title: "ck:docs"
description: "Quản lý tài liệu dự án — khởi tạo, cập nhật và tóm tắt docs với sự hỗ trợ của AI"
section: engineer
kit: engineer
category: skills
order: 11
lang: vi
---

# Docs

Quản lý tài liệu dự án với phân tích được hỗ trợ bởi AI. Khởi tạo docs cho các dự án mới, cập nhật sau khi có thay đổi hoặc tạo tóm tắt.

## Sử Dụng

```
/ck:docs init          # Khởi tạo tài liệu cho một dự án
/ck:docs update        # Cập nhật docs sau khi thay đổi code
/ck:docs summarize     # Tạo tóm tắt tài liệu
```

## Các Subcommands

| Subcommand | Mô Tả |
|-----------|--------|
| `init` | Phân tích codebase và tạo bộ tài liệu ban đầu |
| `update` | Quét các thay đổi và cập nhật docs hiện có |
| `summarize` | Tạo tóm tắt dự án ngắn gọn |

## Những Gì Nó Tạo Ra

```
docs/
├── project-overview-pdr.md
├── codebase-summary.md
├── system-architecture.md
├── code-standards.md
└── project-roadmap.md
```
