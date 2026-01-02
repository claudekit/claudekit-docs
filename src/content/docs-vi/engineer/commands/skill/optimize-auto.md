---
title: /skill:optimize:auto
description: Tự động tối ưu hóa skill không cần phê duyệt để lặp lại nhanh và cải thiện hiệu quả token
section: engineer
kit: engineer
category: commands/skill
order: 84
published: true
lang: vi
---

# /skill:optimize:auto

Tối ưu hóa skill tự động không có cổng phê duyệt. Áp dụng cải tiến trực tiếp với backup/rollback an toàn để lặp lại nhanh trong quá trình phát triển skill.

## Cú pháp

```bash
/skill:optimize:auto [skill-name] [prompt]
```

## Khi nào sử dụng

- **Lặp lại nhanh**: Trong quá trình phát triển skill tích cực
- **Sửa nhỏ**: Lỗi chính tả, định dạng, điều chỉnh nhỏ
- **Tối ưu token**: Giảm token nhanh chóng
- **Cải tiến đã biết**: Khi biết chính xác cần sửa gì
- **Thay đổi an toàn**: Tối ưu rủi ro thấp

## Ví dụ nhanh

```bash
/skill:optimize:auto better-auth "reduce token usage"
```

**Kết quả**:
```
Creating backup...
Backup: $HOME/.claude/skills/better-auth/.backup-251129-2030/

Analyzing skill: better-auth
Goal: reduce token usage

Applying optimizations...
✓ Consolidated duplicate references (-800 tokens)
✓ Applied progressive disclosure (-1,200 tokens)
✓ Compressed verbose instructions (-400 tokens)

Validating changes...
✓ Skill syntax valid
✓ Activation successful

Results:
- Before: 6,400 tokens
- After: 4,000 tokens
- Reduction: 37.5%

Optimization complete!
```

## Tham số

- `[skill-name]`: Skill mục tiêu cần tối ưu
- `[prompt]`: Mục tiêu tối ưu

## Khác biệt với /skill:optimize

| Tính năng | /skill:optimize | /skill:optimize:auto |
|-----------|-----------------|---------------------|
| Tạo kế hoạch | Có | Không |
| Phê duyệt người dùng | Bắt buộc | Không cần |
| Tốc độ thực thi | Chậm hơn (chờ) | Ngay lập tức |
| Phù hợp cho | Thay đổi lớn | Sửa nhỏ |
| An toàn | Xem xét trước | Backup + rollback |

## Quy trình hoạt động

### Bước 1: Tạo Backup

```
Creating backup...
Source: $HOME/.claude/skills/better-auth/
Backup: $HOME/.claude/skills/better-auth/.backup-251129-2030/

Backed up:
├── prompt.md
├── references/
└── scripts/
```

### Bước 2: Phân tích mục tiêu

```
Goal: "reduce token usage"

Analysis:
- Current tokens: 6,400
- Progressive disclosure: 40%
- Optimization opportunities: 3 found
```

### Bước 3: Áp dụng thay đổi

```
Applying optimizations...

Change 1: Consolidate references
- Merged api-v1.md and api-v2.md
- Saved: 800 tokens

Change 2: Progressive disclosure
- Moved examples to on-demand
- Saved: 1,200 tokens

Change 3: Compress instructions
- Removed redundant phrases
- Saved: 400 tokens
```

### Bước 4: Validate cú pháp

```
Validating skill syntax...

Checking prompt.md... ✓
Checking references... ✓
Checking scripts... ✓

Syntax valid.
```

### Bước 5: Test kích hoạt

```
Testing skill activation...

Loading skill: better-auth
Core instructions: ✓ Loaded
References: ✓ Accessible
Scripts: ✓ Executable

Activation successful.
```

### Bước 6: Báo cáo hoặc Rollback

**Thành công**:
```
═══════════════════════════════════════
        OPTIMIZATION COMPLETE
═══════════════════════════════════════

Skill: better-auth

Changes Applied:
✓ Consolidated duplicate references
✓ Applied progressive disclosure
✓ Compressed verbose instructions

Token Impact:
- Before: 6,400 tokens
- After: 4,000 tokens
- Saved: 2,400 tokens (37.5%)

Backup available at:
.backup-251129-2030/
═══════════════════════════════════════
```

**Thất bại (auto-rollback)**:
```
Optimization failed!

Error: Skill activation failed
Cause: Missing required reference

Rolling back...
Restored from: .backup-251129-2030/

Skill restored to previous state.
```

## Tính năng an toàn

### Backup tự động

Mỗi tối ưu tạo backup có timestamp:

```
$HOME/.claude/skills/{skill-name}/
├── prompt.md (current)
├── references/
├── scripts/
└── .backup-251129-2030/   ← Backup tự động
    ├── prompt.md
    ├── references/
    └── scripts/
```

### Validation cú pháp

Validate cấu trúc skill sau khi thay đổi:

```
Validation checks:
✓ prompt.md exists and valid
✓ YAML frontmatter correct
✓ References accessible
✓ Scripts executable
```

### Rollback tự động

Nếu kích hoạt thất bại, tự động khôi phục:

```
Activation failed!
Auto-rollback initiated...
Restored from backup.
Skill working again.
```

## Ví dụ đầy đủ

### Kịch bản: Tối ưu token nhanh

```bash
/skill:optimize:auto prisma "optimize for token efficiency"
```

**Thực thi**:

```
Creating backup...
✓ Backup created: .backup-251129-2035/

Analyzing skill: prisma
Current state:
- Tokens: 5,200
- Files: 4
- Progressive disclosure: 30%

Goal: optimize for token efficiency

Identifying optimizations...
1. Large inline examples (1,400 tokens)
2. Redundant schema docs (600 tokens)
3. Verbose error descriptions (400 tokens)

Applying changes...

[1/3] Moving examples to on-demand...
✓ Created references/examples-on-demand.md
✓ Updated prompt.md references

[2/3] Consolidating schema docs...
✓ Merged 3 files into schema-reference.md

[3/3] Compressing error descriptions...
✓ Shortened while keeping key info

Validating...
✓ Syntax valid
✓ Activation successful
✓ All features working

═══════════════════════════════════════
        OPTIMIZATION COMPLETE
═══════════════════════════════════════

Before: 5,200 tokens
After: 2,800 tokens
Saved: 2,400 tokens (46%)

Changes:
- Examples: Now on-demand
- Schemas: Consolidated
- Errors: Compressed

Backup: .backup-251129-2035/
═══════════════════════════════════════
```

### Kịch bản: Thêm xử lý lỗi

```bash
/skill:optimize:auto my-api-skill "add input validation and error handling"
```

**Thực thi**:

```
Creating backup...
✓ Backup created

Analyzing skill: my-api-skill
Goal: add input validation and error handling

Adding error handling...

[1/2] Adding input validation...
✓ Added validation section to prompt.md
✓ Created scripts/validate-input.sh

[2/2] Adding error handling...
✓ Added error handling guide
✓ Included common error patterns

Validating...
✓ All checks passed

Results:
- Added: Input validation instructions
- Added: Error handling guide
- Added: validate-input.sh script
- Token impact: +350 tokens

Optimization complete!
```

## Giới hạn

### Chỉ dùng cho thay đổi an toàn

```
✅ Phù hợp:
- Tối ưu token
- Sửa lỗi chính tả
- Cải thiện định dạng
- Bổ sung nhỏ

❌ Dùng /skill:optimize thay thế:
- Tái cấu trúc lớn
- Thay đổi logic đáng kể
- Bổ sung nội dung lớn
- Sửa đổi rủi ro
```

### Không có bước xem xét kế hoạch

Thay đổi được áp dụng ngay - không có bước xem xét:

```
/skill:optimize     → Plan → Review → Execute
/skill:optimize:auto → Execute immediately
```

### Lưu giữ Backup

Backup được giữ để dọn dẹp thủ công:

```bash
# Liệt kê backup
ls $HOME/.claude/skills/my-skill/.backup-*/

# Dọn backup cũ
rm -rf $HOME/.claude/skills/my-skill/.backup-251128-*/
```

## Các lệnh liên quan

- [/skill:optimize](/vi/docs/engineer/commands/skill/optimize) - Tối ưu với phê duyệt
- [/skill:add](/vi/docs/engineer/commands/skill/add) - Thêm tham chiếu vào skill
- [/skill:create](/vi/docs/engineer/commands/skill/create) - Tạo skill mới
- [/skill:fix-logs](/vi/docs/engineer/commands/skill/fix-logs) - Sửa skill từ log lỗi

---

**Điểm chính**: `/skill:optimize:auto` cung cấp tối ưu hóa skill nhanh chóng không có cổng phê duyệt, được hỗ trợ bởi backup tự động và rollback để lặp lại an toàn.
