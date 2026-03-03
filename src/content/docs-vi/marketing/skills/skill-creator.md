---
lang: vi
title: "ckm:skill-creator"
description: "Tạo hoặc cập nhật Claude skills cho ClaudeKit — từ thiết kế SKILL.md đến tích hợp với hệ thống."
section: marketing
kit: marketing
category: skills
order: 105
---

# Skill Creator

> Tạo skills mới cho ClaudeKit với cấu trúc chuẩn, prompt engineering tối ưu và tích hợp đầy đủ.

## Kỹ Năng Này Làm Gì

Skill `ckm:skill-creator` hướng dẫn quy trình tạo hoặc cập nhật Claude skills cho hệ sinh thái ClaudeKit. Từ thiết kế SKILL.md, viết instructions, định nghĩa triggers đến kiểm thử và đăng ký skill.

## Bắt Đầu Nhanh

```
/ckm:skill-creator
```

Hoặc mô tả skill cần tạo:

```
/ckm:skill-creator Tạo skill mới cho tích hợp với Notion API — quản lý tasks và pages
```

## Cấu Trúc Skill

```
skills/
└── my-skill/
    ├── SKILL.md        # Main skill definition
    ├── README.md       # Documentation
    └── scripts/        # Helper scripts (nếu cần)
```

## Cấu Trúc SKILL.md

```markdown
# Skill Name

## Trigger
Điều kiện kích hoạt skill (explicit hoặc implicit)

## Instructions
Hướng dẫn chi tiết cho Claude khi skill được kích hoạt

## Examples
Ví dụ sử dụng cụ thể

## Prerequisites
- Yêu cầu môi trường
- Dependencies cần thiết

## Configuration
Cách cấu hình skill
```

## Tính Năng Chính

- **Skill template**: Scaffold cấu trúc chuẩn với sections đầy đủ
- **Prompt engineering**: Hướng dẫn viết instructions rõ ràng và hiệu quả
- **Trigger design**: Explicit commands (`/skill-name`) và implicit activation
- **Testing guide**: Cách kiểm thử skill trước khi publish
- **Integration**: Đăng ký skill trong hệ thống ClaudeKit

## Ví Dụ Sử Dụng

**Tạo skill mới:**
```
/ckm:skill-creator Skill cho Airtable integration — CRUD operations và formula builder
```

**Cập nhật skill hiện có:**
```
/ckm:skill-creator Cập nhật skill analytics để thêm support cho Mixpanel
```

**Review skill:**
```
/ckm:skill-creator Review SKILL.md này và đề xuất cải tiến clarity và effectiveness
```

## Liên Quan

- [ckm:template-skill](/vi/docs/marketing/skills/template-skill) - Template trống để tạo skill mới
- [ckm:docs](/vi/docs/marketing/skills/docs) - Viết tài liệu cho skill
