---
lang: vi
title: "ckm:template-skill"
description: "Template chuẩn để tạo Claude skill mới — scaffold nhanh với cấu trúc và sections đầy đủ."
section: marketing
kit: marketing
category: skills
order: 106
---

# ckm:template-skill

> Điểm khởi đầu nhanh cho mọi Claude skill mới với cấu trúc chuẩn và hướng dẫn rõ ràng.

## Kỹ Năng Này Làm Gì

Skill `ckm:template-skill` cung cấp template SKILL.md chuẩn để tạo skills mới cho ClaudeKit. Scaffold đầy đủ sections cần thiết với placeholder text và hướng dẫn điền nội dung.

## Bắt Đầu Nhanh

```
/ckm:template-skill
```

Hoặc chỉ định tên skill:

```
/ckm:template-skill Tạo template cho skill "notion-sync"
```

## Template SKILL.md

```markdown
# [Skill Name]

> [Một dòng mô tả giá trị chính của skill]

## Trigger

**Tường minh**: `/ckm:[skill-name]` hoặc `Activate [skill-name] skill`

**Ngầm định**: Tự động khi [điều kiện kích hoạt]

## Instructions

### Khi được kích hoạt:
1. [Bước đầu tiên]
2. [Bước tiếp theo]
3. [Tiếp tục...]

### Hành vi cốt lõi:
- [Hành vi 1]
- [Hành vi 2]

### KHÔNG làm:
- [Hạn chế 1]
- [Hạn chế 2]

## Examples

**Ví dụ 1:**
Input: [mô tả input]
Output: [mô tả output mong đợi]

## Prerequisites

- [Yêu cầu 1]
- [Yêu cầu 2]

## Configuration

```bash
# Biến môi trường cần thiết
SKILL_API_KEY=your_key_here
```

## Notes

[Ghi chú quan trọng về edge cases hoặc gotchas]
```

## Tính Năng Chính

- **Complete scaffold**: Tất cả sections cần thiết cho một skill hoàn chỉnh
- **Placeholder guidance**: Hướng dẫn cụ thể cho từng section
- **Best practices**: Patterns được kiểm chứng từ skills hiện có
- **Quick customization**: Chỉ cần thay thế placeholders

## Ví Dụ Sử Dụng

**Skill mới nhanh:**
```
/ckm:template-skill Tạo template cho skill xử lý CSV data transformation
```

**Tham khảo cấu trúc:**
```
/ckm:template-skill Hiển thị template đầy đủ với comments giải thích từng section
```

## Liên Quan

- [ckm:skill-creator](/vi/docs/marketing/skills/skill-creator) - Tạo skill hoàn chỉnh từ đầu
- [ckm:docs](/vi/docs/marketing/skills/docs) - Tài liệu hóa skill sau khi tạo
