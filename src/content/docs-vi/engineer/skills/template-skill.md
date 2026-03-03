---
title: "ck:template-skill"
description: Template tham chiếu để tạo ClaudeKit Engineer skills mới với cấu trúc, metadata và các pattern tích hợp phù hợp
section: engineer
kit: engineer
category: skills
order: 50
published: true
lang: vi
---

# Template Skill

> Điểm khởi đầu để xây dựng custom skills mở rộng khả năng của ClaudeKit Engineer với kiến thức và workflows chuyên biệt.

## Skill Này Làm Gì

Template Skill là một triển khai tham chiếu thể hiện cấu trúc và pattern phù hợp để tạo skills mới. Nó đóng vai trò là bản thiết kế cho những người tạo skill, minh họa cách tích hợp kiến thức chuyên biệt, công cụ và workflows vào ClaudeKit Engineer.

Skill này không có chức năng độc lập—nó là tài liệu và scaffolding cho các developer xây dựng custom skills để mở rộng khả năng engineer cho các domain, framework, API hoặc workflow cụ thể.

## Điều Kiện Tiên Quyết

- ClaudeKit Engineer đã cài đặt (ck init)
- Hiểu biết cơ bản về kiến trúc skill
- Quen thuộc với domain/framework bạn đang xây dựng
- Trình soạn thảo văn bản để tạo file skill

## Kích Hoạt

Skill này được tham chiếu khi:
- Người dùng muốn tạo skill mới
- Người dùng hỏi về cấu trúc hoặc kiến trúc skill
- Người dùng cần ví dụ về metadata và pattern skill

Để tạo skills, dùng:
```bash
/ck:skill-creator
```

## Cấu Trúc Thư Mục Skill

Mỗi skill tuân theo cấu trúc này:

```
.claude/skills/your-skill-name/
├── SKILL.md                 # Hướng dẫn skill chính (bắt buộc)
├── README.md               # Tài liệu cho người dùng (tùy chọn)
├── references/             # Tài liệu tham chiếu bổ sung (tùy chọn)
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
description: Khi nào Claude nên dùng skill này và nó làm gì (150 ký tự)
version: 1.0.0
license: MIT
---

# Tên Skill Của Bạn

Tổng quan ngắn gọn về skill này cho phép làm gì.

## Khi Nào Dùng Skill Này

Các tình huống cụ thể kích hoạt skill này:
- Người dùng cần [capability 1]
- Người dùng đề cập [keyword 1, keyword 2]
- Người dùng muốn [task description]

## Khái Niệm Cốt Lõi

Thuật ngữ và kiến trúc chính mà skill này xử lý.

## Bắt Đầu Nhanh

Ví dụ hoạt động tối thiểu để bắt đầu.

## Khả Năng

### Khả Năng 1

Mô tả với ví dụ code.

### Khả Năng 2

Mô tả với ví dụ code.

## Phương Pháp Tốt Nhất

- Hướng dẫn 1
- Hướng dẫn 2
- Hướng dẫn 3

## Các Pattern Phổ Biến

### Pattern 1

Ví dụ code hoặc workflow.

## Khắc Phục Sự Cố

**Vấn đề**: Vấn đề phổ biến

**Giải pháp**: Cách khắc phục

## Tài Nguyên

- Docs chính thức
- GitHub repo
- Liên kết cộng đồng
```

## Các Trường Metadata Skill

### Các Trường Bắt Buộc

**name**: Định danh skill (chữ thường, phân cách bằng dấu gạch ngang)
```yaml
name: google-adk-python
```

**description**: Khi nào Claude nên kích hoạt skill này (dưới 200 ký tự)
```yaml
description: Build AI agents with Google's Agent Development Kit. Use when creating multi-agent systems, tool integration, or workflow automation.
```

### Các Trường Tùy Chọn

**version**: Phiên bản semantic để theo dõi thay đổi
```yaml
version: 1.0.0
```

**license**: Điều khoản bản quyền
```yaml
license: MIT
```

## Các Pattern Kích Hoạt

Skills kích hoạt tự động dựa trên:

**Keywords**: Các thuật ngữ cụ thể trong truy vấn người dùng
```markdown
## Khi Nào Dùng Skill Này

Dùng khi người dùng đề cập:
- Google ADK
- Agent development
- Multi-agent systems
```

**Task descriptions**: Người dùng muốn hoàn thành gì
```markdown
Dùng khi người dùng cần:
- Build AI agents với tích hợp công cụ
- Deploy agents lên Cloud Run hoặc Vertex AI
```

**Domain references**: Công nghệ hoặc frameworks
```markdown
Dùng khi làm việc với:
- Gemini models
- Agent orchestration
- LLM-powered workflows
```

## Các Pattern Tích Hợp

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

Cho skills cần API keys hoặc config:

```bash
# .env.example
SKILL_API_KEY=your-api-key-here
SKILL_ENDPOINT=https://api.example.com
```

Ghi lại trong SKILL.md:

```markdown
## Điều Kiện Tiên Quyết

**Biến Môi Trường**:
- `SKILL_API_KEY`: API key từ [provider](https://example.com/keys)
- `SKILL_ENDPOINT`: Endpoint tùy chỉnh tùy chọn
```

## Reference Files

Cho skills phức tạp, chia nội dung thành các reference file tập trung:

```
references/
├── installation.md       # Cài đặt và dependencies
├── api-reference.md      # API docs
├── examples.md          # Ví dụ code
├── patterns.md          # Các pattern phổ biến
└── troubleshooting.md   # Các vấn đề thường gặp
```

Tham chiếu từ SKILL.md:

```markdown
## Cài Đặt

Xem [installation.md](references/installation.md) để biết hướng dẫn chi tiết.

## Ví Dụ

Xem [examples.md](references/examples.md) để biết các code mẫu đầy đủ.
```

## Ví Dụ

### Ví Dụ 1: Skill Tối Giản

Skill cơ bản không có dependencies bên ngoài:

```yaml
---
name: markdown-formatter
description: Format and validate markdown files. Use when user needs to lint, format, or validate markdown syntax.
---

# Markdown Formatter

Format file markdown theo phương pháp tốt nhất.

## Khi Nào Dùng

- Người dùng muốn format file markdown
- Người dùng cần xác nhận cú pháp markdown
- Người dùng đề cập markdown linting

## Bắt Đầu Nhanh

Quy tắc format markdown chuẩn:
- Dùng ATX-style headers (`#` không dùng underlines)
- Dòng trắng trước/sau code blocks
- Ký tự list nhất quán (`-` không dùng `*`)

## Khả Năng

### Xác Nhận Cú Pháp

Kiểm tra các vấn đề markdown phổ biến.

### Tự Động Format

Áp dụng quy tắc format nhất quán.
```

### Ví Dụ 2: Skill Với Scripts

Skill có Python helper thực thi:

```yaml
---
name: image-optimizer
description: Optimize images for web with compression and resizing. Use when user needs to reduce image file sizes.
---

# Image Optimizer

Nén và thay đổi kích thước hình ảnh để tối ưu web.

## Điều Kiện Tiên Quyết

```bash
pip install pillow
```

## Bắt Đầu Nhanh

```bash
python .claude/skills/image-optimizer/scripts/optimize.py \
  --input image.jpg \
  --output optimized.jpg \
  --quality 85
```

## Khả Năng

### Nén

Giảm kích thước file trong khi duy trì chất lượng.

### Thay Đổi Kích Thước

Scale hình ảnh về kích thước mục tiêu.
```

## Phương Pháp Tốt Nhất

**Tiêu chí kích hoạt rõ ràng**: Chỉ định chính xác keywords và tình huống kích hoạt skill.

**Ví dụ tối giản**: Cung cấp code snippets hoạt động mà người dùng có thể copy-paste.

**Progressive disclosure**: Bắt đầu đơn giản, liên kết đến references chi tiết cho chủ đề phức tạp.

**Ghi lại dependencies**: Liệt kê tất cả công cụ, gói, API keys cần thiết từ đầu.

**Bao gồm khắc phục sự cố**: Giải quyết các vấn đề thường gặp một cách chủ động.

**Version skills của bạn**: Theo dõi thay đổi bằng semantic versioning.

**Kiểm tra kích hoạt**: Xác minh skill kích hoạt cho các truy vấn mong đợi.

**Tránh trùng lặp**: Kiểm tra các skills hiện có trước khi tạo chức năng chồng lấp.

## Khắc Phục Sự Cố

**Vấn đề**: Skill không kích hoạt khi mong đợi.

**Giải pháp**: Thêm keywords còn thiếu vào phần "When to Use This Skill". Kiểm tra với các truy vấn người dùng thực tế.

---

**Vấn đề**: Hướng dẫn skill quá dài, làm chậm Claude.

**Giải pháp**: Chuyển nội dung chi tiết vào reference files. Giữ SKILL.md dưới 1000 dòng.

---

**Vấn đề**: Scripts thất bại với lỗi permission.

**Giải pháp**: Làm scripts thực thi được: `chmod +x .claude/skills/your-skill/scripts/*.py`

---

**Vấn đề**: Dependencies chưa được cài đặt.

**Giải pháp**: Ghi lại cài đặt trong Prerequisites. Cân nhắc thêm install script hoặc danh sách npm/pip dependency.

## Skill Liên Quan

- [Skill Creator](/vi/docs/engineer/skills/skill-creator) - Workflow tạo skill tương tác
- [Common Utilities](/vi/docs/engineer/skills) - Tiện ích chia sẻ cho phát triển skill

## Tài Nguyên

- ClaudeKit Engineer GitHub: https://github.com/claudekit/claudekit-engineer
- Hướng dẫn tạo skill: Dùng `/ck:skill-creator` cho quy trình tương tác
- Ví dụ skills: Duyệt thư mục `.claude/skills/`
