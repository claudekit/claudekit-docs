---
lang: vi
title: "ckm:markdown-novel-viewer"
description: "Xem markdown với trải nghiệm đọc giống sách — beautiful typography, Mermaid rendering và dark mode."
section: marketing
kit: marketing
category: skills
order: 116
---

# `ckm:markdown-novel-viewer`

> Biến file markdown thành tài liệu đẹp với trải nghiệm đọc chuyên nghiệp, Mermaid diagrams và dark mode.

## Kỹ Năng Này Làm Gì

Skill `ckm:markdown-novel-viewer` mở file markdown trong trình duyệt với layout kiểu sách — typography đẹp, syntax highlighting, Mermaid.js diagrams rendered và dark/light mode. Phù hợp để review tài liệu, kế hoạch và technical specs.

## Bắt Đầu Nhanh

```
/ckm:markdown-novel-viewer
```

Hoặc chỉ định file:

```
/ckm:markdown-novel-viewer ./plans/current-plan.md
```

## Tính Năng Chính

- **Novel-style layout**: Typography tối ưu cho đọc dài — font size, line height, margins
- **Mermaid rendering**: Tự động render Mermaid.js diagrams (flowchart, sequence, gantt...)
- **Syntax highlighting**: Code blocks với highlight cho 100+ ngôn ngữ
- **Dark/Light mode**: Tự động theo system preference hoặc toggle thủ công
- **Table of contents**: Tự động generate từ headings
- **Print-friendly**: CSS tối ưu khi in hoặc export PDF

## Ví Dụ Sử Dụng

**Xem kế hoạch dự án:**
```
/ckm:markdown-novel-viewer ./plans/2025-q1-roadmap.md
```

**Review tài liệu kỹ thuật:**
```
/ckm:markdown-novel-viewer ./docs/system-architecture.md
```

**Xem báo cáo:**
```
/ckm:markdown-novel-viewer ./plans/reports/analytics-report.md
```

**Preview trước khi chia sẻ:**
```
/ckm:markdown-novel-viewer Mở README.md trong novel viewer để kiểm tra formatting
```

## Tích Hợp Với Workflow

Skill thường được dùng kết hợp với:
- `/preview --diagram` — Tạo diagram rồi xem trong novel viewer
- `/ckm:plan` — Xem kế hoạch vừa tạo
- `/ckm:docs` — Preview tài liệu trước khi publish

## Phím Tắt

| Phím | Chức Năng |
|------|----------|
| `T` | Toggle table of contents |
| `D` | Toggle dark/light mode |
| `P` | Print/Export PDF |
| `F` | Fullscreen mode |

## Liên Quan

- [ckm:docs](/vi/docs/marketing/skills/docs) - Tạo và quản lý tài liệu
- [ckm:preview](/vi/docs/marketing/skills/preview) - Preview với diagrams và slides
- [ckm:mermaidjs-v11](/vi/docs/marketing/skills/mermaidjs-v11) - Tạo Mermaid diagrams
