---
title: Template Skill
description: Template tham khảo để tạo ClaudeKit Engineer skills mới với cấu trúc, metadata và integration patterns phù hợp
section: engineer
kit: engineer
category: skills/tools
order: 5
published: true
lang: vi
---

# Template Skill

> Điểm khởi đầu để xây dựng custom skills mở rộng khả năng của ClaudeKit Engineer với kiến thức chuyên môn và workflows.

## Skill Này Làm Gì

Template Skill là triển khai tham khảo hiển thị cấu trúc và mẫu phù hợp để tạo skills mới. Nó phục vụ như blueprint cho skill creators, minh họa cách tích hợp kiến thức chuyên môn, công cụ và workflows vào ClaudeKit Engineer.

Skill này không hoạt động độc lập - nó là tài liệu và scaffolding cho developers xây dựng custom skills để mở rộng engineer capabilities cho các domains, frameworks, APIs hoặc workflows cụ thể.

## Yêu Cầu Trước

- ClaudeKit Engineer đã cài đặt (ck init)
- Hiểu biết cơ bản về kiến trúc skill
- Quen thuộc với domain/framework bạn đang xây dựng
- Text editor để tạo skill files

## Kích Hoạt

Skill này được tham chiếu khi:
- User muốn tạo skill mới
- User hỏi về cấu trúc hoặc kiến trúc skill
- User cần ví dụ về skill metadata và patterns

Để tạo skills, sử dụng:
```bash
/skill-creator
```

## Cấu Trúc Thư Mục Skill

Mỗi skill tuân theo cấu trúc này:

```
.claude/skills/your-skill-name/
├── SKILL.md                 # Hướng dẫn skill chính (bắt buộc)
├── README.md               # Tài liệu cho người dùng (tùy chọn)
├── references/             # Tài liệu tham khảo bổ sung (tùy chọn)
│   ├── api-guide.md
│   ├── examples.md
│   └── troubleshooting.md
├── scripts/                # Scripts thực thi (tùy chọn)
│   └── helper.py
├── assets/                 # Static assets (tùy chọn)
│   └── template.html
└── .env.example            # Template biến môi trường (tùy chọn)
```

## Định Dạng SKILL.md

Frontmatter và cấu trúc bắt buộc:

```yaml
---
name: your-skill-name
description: Khi nào Claude nên sử dụng skill này và nó làm gì (150 chars)
version: 1.0.0
license: MIT
---

# Your Skill Name

Tổng quan ngắn gọn về những gì skill này cho phép.

## When to Use This Skill

Các kịch bản cụ thể kích hoạt skill này:
- User cần [capability 1]
- User đề cập [keyword 1, keyword 2]
- User muốn [task description]

## Core Concepts

Thuật ngữ và kiến trúc chính mà skill này xử lý.

## Quick Start

Ví dụ hoạt động tối thiểu để bắt đầu.

## Capabilities

### Capability 1

Mô tả với ví dụ code.

### Capability 2

Mô tả với ví dụ code.

## Best Practices

- Hướng dẫn 1
- Hướng dẫn 2
- Hướng dẫn 3

## Common Patterns

### Pattern 1

Ví dụ code hoặc workflow.

## Troubleshooting

**Problem**: Vấn đề phổ biến

**Solution**: Cách sửa

## Resources

- Tài liệu chính thức
- GitHub repo
- Liên kết cộng đồng
```

## Trường Metadata Skill

### Trường Bắt Buộc

**name**: Định danh skill (lowercase, phân tách bằng gạch ngang)
```yaml
name: google-adk-python
```

**description**: Khi nào Claude nên kích hoạt skill này (dưới 200 chars)
```yaml
description: Build AI agents with Google's Agent Development Kit. Use when creating multi-agent systems, tool integration, or workflow automation.
```

### Trường Tùy Chọn

**version**: Semantic version để theo dõi thay đổi
```yaml
version: 1.0.0
```

**license**: Điều khoản giấy phép
```yaml
license: MIT
```

## Mẫu Kích Hoạt

Skills kích hoạt tự động dựa trên:

**Keywords**: Các thuật ngữ cụ thể trong truy vấn người dùng
```markdown
## When to Use This Skill

Use when user mentions:
- Google ADK
- Agent development
- Multi-agent systems
```

**Task descriptions**: Những gì user muốn thực hiện
```markdown
Use when user needs to:
- Build AI agents with tool integration
- Deploy agents to Cloud Run or Vertex AI
```

**Domain references**: Công nghệ hoặc frameworks
```markdown
Use when working with:
- Gemini models
- Agent orchestration
- LLM-powered workflows
```

## Mẫu Tích Hợp

### Python Scripts

Cho skills với Python tools:

```python
#!/usr/bin/env python3
"""
Skill: your-skill-name
Description: Script này làm gì
"""

import os
import sys

def main():
    # Logic script
    pass

if __name__ == "__main__":
    main()
```

### Node.js Scripts

Cho skills với Node tools:

```javascript
#!/usr/bin/env node
/**
 * Skill: your-skill-name
 * Description: Script này làm gì
 */

function main() {
  // Logic script
}

if (require.main === module) {
  main();
}
```

### Biến Môi Trường

Cho skills yêu cầu API keys hoặc config:

```bash
# .env.example
SKILL_API_KEY=your-api-key-here
SKILL_ENDPOINT=https://api.example.com
```

Tài liệu trong SKILL.md:

```markdown
## Prerequisites

**Environment Variables**:
- `SKILL_API_KEY`: API key từ [provider](https://example.com/keys)
- `SKILL_ENDPOINT`: Endpoint tùy chỉnh tùy chọn
```

## File Tham Chiếu

Cho skills phức tạp, chia nội dung thành file tham chiếu tập trung:

```
references/
├── installation.md       # Thiết lập và dependencies
├── api-reference.md      # Tài liệu API
├── examples.md          # Ví dụ code
├── patterns.md          # Mẫu phổ biến
└── troubleshooting.md   # Vấn đề thường gặp
```

Tham chiếu từ SKILL.md:

```markdown
## Installation

Xem [installation.md](references/installation.md) để thiết lập chi tiết.

## Examples

Xem [examples.md](references/examples.md) cho mẫu code đầy đủ.
```

## Thực Hành Tốt Nhất

**Tiêu chí kích hoạt rõ ràng**: Chỉ định keywords và kịch bản chính xác kích hoạt skill.

**Ví dụ tối thiểu**: Cung cấp code snippets hoạt động mà users có thể copy-paste.

**Progressive disclosure**: Bắt đầu đơn giản, liên kết đến tài liệu chi tiết cho chủ đề phức tạp.

**Tài liệu dependencies**: Liệt kê tất cả công cụ, packages, API keys cần thiết trước.

**Bao gồm troubleshooting**: Giải quyết vấn đề phổ biến một cách chủ động.

**Version skills của bạn**: Theo dõi thay đổi với semantic versioning.

**Test kích hoạt**: Xác minh skill kích hoạt cho các truy vấn mong đợi.

**Tránh trùng lặp**: Kiểm tra skills hiện có trước khi tạo chức năng chồng chéo.

## Khắc Phục Sự Cố

**Vấn đề**: Skill không kích hoạt như mong đợi.

**Giải pháp**: Thêm keywords thiếu vào phần "When to Use This Skill". Test với truy vấn thực tế của user.

---

**Vấn đề**: Hướng dẫn skill quá dài, làm chậm Claude.

**Giải pháp**: Chuyển nội dung chi tiết sang file tham chiếu. Giữ SKILL.md dưới 1000 dòng.

---

**Vấn đề**: Scripts thất bại với permission errors.

**Giải pháp**: Làm cho scripts executable: `chmod +x .claude/skills/your-skill/scripts/*.py`

---

**Vấn đề**: Dependencies chưa được cài đặt.

**Giải pháp**: Tài liệu cài đặt trong Prerequisites. Cân nhắc thêm install script hoặc danh sách dependency npm/pip.

## Các Kỹ Năng Liên Quan

- [Skill Creator](/vi/docs/engineer/skills/tools/skill-creator) - Workflow tạo skill tương tác
- [Common Utilities](/vi/docs/engineer/skills/tools/common-utilities) - Utilities chia sẻ cho phát triển skill

## Tài Nguyên

- ClaudeKit Engineer GitHub: https://github.com/claudekit/claudekit-engineer
- Hướng dẫn tạo skill: Sử dụng `/skill-creator` cho quy trình tương tác
- Ví dụ skills: Duyệt thư mục `.claude/skills/`
