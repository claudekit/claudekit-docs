---
title: /skill:add
description: Thêm file tham chiếu hoặc script thực thi vào skill hiện có với tối ưu hóa progressive disclosure
section: docs
category: commands/skill
order: 82
published: true
---

# /skill:add

Mở rộng skill hiện có với tham chiếu mới hoặc script thực thi. Sử dụng progressive disclosure để tối ưu sử dụng token trong khi mở rộng khả năng skill.

## Cú pháp

```bash
/skill:add [skill-name] [reference-or-script-prompt]
```

## Khi nào sử dụng

- **Thêm tài liệu**: Bao gồm docs mới, hướng dẫn, hoặc tham chiếu API
- **Thêm script**: Tạo công cụ thực thi cho skill
- **Mở rộng khả năng**: Thêm tài liệu tham khảo mới
- **Tích hợp**: Kết nối tài nguyên bên ngoài với skill

## Ví dụ nhanh

```bash
/skill:add better-auth https://better-auth.dev/docs/api
```

**Kết quả**:
```
Validating skill: better-auth
Found: $HOME/.claude/skills/better-auth/

Analyzing reference: https://better-auth.dev/docs/api
Type: URL (documentation)

Fetching content...
Extracted: 45 API endpoints, 12 configuration options

Creating reference: references/api-docs.md
Applying progressive disclosure structure...

✓ Reference added to better-auth skill
Token impact: +2,400 tokens (loaded on-demand)
```

## Tham số

- `[skill-name]`: Tên skill mục tiêu (phải tồn tại trong `$HOME/.claude/skills/`)
- `[reference-or-script-prompt]`: URL, đường dẫn file, hoặc mô tả script

## Loại tham chiếu

### URL

Tài liệu web, bài blog, repo GitHub:

```bash
# Docs chính thức
/skill:add nextjs https://nextjs.org/docs/app/api-reference

# GitHub repo
/skill:add my-skill https://github.com/org/library

# Bài blog
/skill:add react-patterns https://example.com/react-best-practices
```

Xử lý:
- Fetch qua WebFetch
- Trích xuất nội dung liên quan
- Tóm tắt thông tin chính
- Tạo file tham chiếu

### File

Markdown local, mẫu code:

```bash
# Markdown local
/skill:add my-skill /path/to/reference.md

# Mẫu code
/skill:add my-skill /path/to/example.ts
```

Xử lý:
- Đọc nội dung file
- Xác nhận định dạng
- Tích hợp vào cấu trúc skill

### Script

Công cụ thực thi (bash, python, node):

```bash
# Script từ mô tả
/skill:add my-skill "script that validates API responses against OpenAPI spec"

# Script từ template
/skill:add my-skill "bash script to run database migrations"
```

Xử lý:
- Tạo script thực thi
- Thêm vào thư mục `scripts/`
- Đặt quyền phù hợp

## Quy trình hoạt động

### Bước 1: Xác nhận Skill

```
Checking skill existence...
Found: $HOME/.claude/skills/better-auth/
├── prompt.md
├── references/
└── scripts/
```

### Bước 2: Phân tích loại tham chiếu

```
Input: https://better-auth.dev/docs/api
Detected: URL
Content type: API documentation
```

### Bước 3: Xử lý tham chiếu

**Cho URL**:
```
Fetching: https://better-auth.dev/docs/api
Status: 200 OK
Content: 15KB markdown

Extracting:
- API endpoints: 45
- Configuration: 12 options
- Examples: 8 code blocks
```

**Cho File**:
```
Reading: /path/to/reference.md
Size: 8KB
Format: Markdown (valid)
```

**Cho Script**:
```
Creating script: validate-api-response.sh
Language: bash
Dependencies: jq, curl
```

### Bước 4: Áp dụng Progressive Disclosure

```
Structuring for token efficiency...

Core (always loaded):
- Skill name and description
- Key capabilities summary

References (on-demand):
- api-docs.md: Loaded when API questions asked
- examples.md: Loaded when examples needed

Scripts (executed when needed):
- validate-api.sh: Called for validation tasks
```

### Bước 5: Kiểm tra kích hoạt

```
Testing skill activation...
Skill: better-auth
Status: ✓ Loads correctly
New references: ✓ Accessible
```

## Progressive Disclosure

Chiến lược tải hiệu quả token:

```
┌─────────────────────────────────────┐
│ prompt.md (Core)                    │ ← Luôn được tải (~500 tokens)
├─────────────────────────────────────┤
│ references/                         │
│ ├── api-docs.md                     │ ← Theo yêu cầu (~2,400 tokens)
│ ├── examples.md                     │ ← Theo yêu cầu (~1,200 tokens)
│ └── config-guide.md                 │ ← Theo yêu cầu (~800 tokens)
├─────────────────────────────────────┤
│ scripts/                            │
│ ├── validate-api.sh                 │ ← Thực thi khi cần
│ └── generate-types.py               │ ← Thực thi khi cần
└─────────────────────────────────────┘
```

**Lợi ích**:
- Core luôn sẵn sàng
- Tham chiếu chỉ tải khi liên quan
- Script chỉ thực thi khi cần
- Tiết kiệm đáng kể token

## Ví dụ đầy đủ

### Kịch bản: Thêm API Reference vào Authentication Skill

```bash
/skill:add better-auth https://better-auth.dev/docs/authentication
```

**Thực thi**:

```
Validating skill: better-auth
Found at: $HOME/.claude/skills/better-auth/

Current structure:
├── prompt.md (core instructions)
├── references/
│   └── getting-started.md
└── scripts/
    └── check-config.sh

Analyzing reference...
URL: https://better-auth.dev/docs/authentication
Type: Documentation
Topic: Authentication flows

Fetching content...
Downloaded: 12KB
Processing: Extracting key sections

Creating reference file...
Path: references/authentication-flows.md
Content:
- Email/password flow
- OAuth providers setup
- Session management
- Token handling
- MFA configuration

Applying progressive disclosure...
- Added to references index
- Configured on-demand loading
- Updated skill metadata

Testing activation...
✓ Skill loads correctly
✓ New reference accessible
✓ Progressive disclosure working

Summary:
- Reference added: authentication-flows.md
- Token impact: +1,800 (on-demand only)
- Total skill size: 4,500 tokens potential
- Typical load: 500 tokens (core only)
```

## Ví dụ

### Thêm URL Reference

```bash
/skill:add prisma https://www.prisma.io/docs/reference/api-reference
```

Thêm tham chiếu API Prisma cho database query.

### Thêm Local File

```bash
/skill:add my-framework ./docs/internal-patterns.md
```

Tích hợp tài liệu nội bộ vào skill.

### Thêm Script

```bash
/skill:add docker "script to check container health and restart if unhealthy"
```

Tạo script kiểm tra health thực thi.

## Hiệu quả Token

Trước `/skill:add` với progressive disclosure:
```
Tất cả nội dung tải trước: ~8,000 tokens
```

Sau progressive disclosure:
```
Chỉ core: ~500 tokens
Với một reference: ~2,900 tokens
Tất cả nội dung: ~8,000 tokens (hiếm)

Sử dụng trung bình: ~1,500 tokens (giảm 81%)
```

## Các lệnh liên quan

- [/skill:create](/vi/docs/commands/skill/create) - Tạo skill mới
- [/skill:optimize](/vi/docs/commands/skill/optimize) - Tối ưu skill hiện có
- [/skill:fix-logs](/vi/docs/commands/skill/fix-logs) - Sửa skill từ logs

---

**Điểm chính**: `/skill:add` mở rộng skill với tham chiếu hoặc script mới trong khi sử dụng progressive disclosure để duy trì hiệu quả token.
