---
title: /skill:optimize
description: Tạo kế hoạch tối ưu hóa skill với quy trình phê duyệt từ người dùng để cải thiện hiệu quả token
section: docs
category: commands/skill
order: 83
published: true
---

# /skill:optimize

Tối ưu hóa skill dựa trên kế hoạch với phê duyệt từ người dùng. Phân tích skill, xác định cải tiến, tạo kế hoạch, và chờ phê duyệt trước khi thực hiện thay đổi.

## Cú pháp

```bash
/skill:optimize [skill-name] [prompt]
```

## Khi nào sử dụng

- **Tối ưu token**: Giảm sử dụng token của skill
- **Cải thiện độ rõ ràng**: Làm hướng dẫn rõ ràng hơn
- **Xử lý lỗi**: Thêm xử lý lỗi tốt hơn
- **Thay đổi lớn**: Khi bạn muốn xem xét trước khi áp dụng
- **Tài liệu**: Cải thiện tài liệu skill

## Ví dụ nhanh

```bash
/skill:optimize better-auth "reduce token usage by 40%"
```

**Kết quả**:
```
Analyzing skill: better-auth

Current Analysis:
- Total tokens: 8,400
- Progressive disclosure: Partial
- Redundant content: 2,100 tokens

Optimization Plan Created:
Location: plans/skill-optimize-better-auth-251129/plan.md

Proposed Changes:
1. Consolidate duplicate API references (-1,200 tokens)
2. Extract examples to on-demand loading (-600 tokens)
3. Compress instruction format (-300 tokens)

Estimated Impact: -2,100 tokens (25% reduction)

⏸ Waiting for approval...
Review plan and respond with 'approve' or 'reject'
```

## Tham số

- `[skill-name]`: Skill mục tiêu cần tối ưu
- `[prompt]`: Mục tiêu tối ưu (ví dụ: "reduce tokens", "improve clarity")

## Lĩnh vực tối ưu

| Lĩnh vực | Mô tả |
|----------|-------|
| Hiệu quả token | Giảm số token, cải thiện progressive disclosure |
| Độ rõ ràng hướng dẫn | Làm hướng dẫn rõ hơn, loại bỏ mơ hồ |
| Hiệu suất script | Tối ưu thực thi script, giảm runtime |
| Xử lý lỗi | Thêm validation, cải thiện thông báo lỗi |
| Tài liệu | Cập nhật docs, thêm ví dụ |

## Quy trình hoạt động

### Bước 1: Đọc file Skill

```
Reading skill: better-auth

Files found:
├── prompt.md (2,400 tokens)
├── references/
│   ├── api-docs.md (3,200 tokens)
│   └── examples.md (1,800 tokens)
└── scripts/
    └── validate.sh
```

### Bước 2: Phân tích theo mục tiêu

```
Goal: "reduce token usage by 40%"

Analysis:
- Current: 8,400 tokens
- Target: 5,040 tokens
- Required reduction: 3,360 tokens

Opportunities identified:
- Duplicate content: 1,200 tokens
- Non-progressive loading: 1,400 tokens
- Verbose instructions: 800 tokens
- Redundant examples: 600 tokens
```

### Bước 3: Tạo kế hoạch

```
Creating optimization plan...

Plan location:
plans/skill-optimize-better-auth-251129/
├── plan.md
└── analysis.md
```

### Bước 4: Trình bày cho người dùng

```
═══════════════════════════════════════
        OPTIMIZATION PLAN
═══════════════════════════════════════

Skill: better-auth
Goal: Reduce token usage by 40%

Current State:
- Total tokens: 8,400
- Files: 3
- Progressive disclosure: 60%

Proposed Changes:

1. Consolidate API References
   - Merge overlapping docs
   - Impact: -1,200 tokens
   - Risk: Low

2. Implement Full Progressive Disclosure
   - Move examples to on-demand
   - Impact: -1,400 tokens
   - Risk: Low

3. Compress Instructions
   - Remove redundant text
   - Impact: -800 tokens
   - Risk: Medium

Estimated Result:
- New total: 5,000 tokens
- Reduction: 40.5%
- Target: ✓ Met

═══════════════════════════════════════
```

### Bước 5: Chờ phê duyệt (CHẶN)

```
⏸ WAITING FOR APPROVAL

Review the plan at:
plans/skill-optimize-better-auth-251129/plan.md

Respond with:
- 'approve' - Implement changes
- 'reject' - Cancel optimization
- 'modify' - Request changes to plan
```

### Bước 6: Thực thi nếu được phê duyệt

```
User: approve

Executing optimization plan...

Step 1/3: Consolidating API references...
✓ Merged 3 files into 1

Step 2/3: Implementing progressive disclosure...
✓ Moved examples to on-demand loading

Step 3/3: Compressing instructions...
✓ Reduced verbose text

Optimization complete.
```

### Bước 7: Test Skill đã tối ưu

```
Testing optimized skill...

Activation: ✓ Success
Core load: 1,200 tokens (was 2,400)
Full load: 5,000 tokens (was 8,400)
All features: ✓ Working

Optimization successful!
```

## Cấu trúc kế hoạch

Kế hoạch được tạo bao gồm:

```markdown
# Skill Optimization Plan

## Target
- Skill: better-auth
- Goal: reduce token usage by 40%

## Current Issues
1. [Mô tả vấn đề]
2. [Mô tả vấn đề]

## Proposed Changes
### Change 1: [Tiêu đề]
- Mô tả
- File bị ảnh hưởng
- Tác động token
- Mức độ rủi ro

### Change 2: [Tiêu đề]
...

## Token Impact Summary
| Before | After | Change |
|--------|-------|--------|
| 8,400  | 5,000 | -40.5% |

## Risk Assessment
- Overall risk: Low
- Rollback: Available

## Implementation Steps
1. [Mô tả bước]
2. [Mô tả bước]
```

## Ví dụ đầy đủ

### Kịch bản: Cải thiện độ rõ ràng hướng dẫn

```bash
/skill:optimize docker "improve instruction clarity for container management"
```

**Thực thi**:

```
Analyzing skill: docker

Current Analysis:
- Instructions: Technically accurate but verbose
- Examples: Scattered across files
- Common tasks: Not prioritized

Creating optimization plan...

═══════════════════════════════════════
        OPTIMIZATION PLAN
═══════════════════════════════════════

Skill: docker
Goal: Improve instruction clarity

Current Issues:
1. Instructions assume advanced knowledge
2. Common tasks buried in reference docs
3. Examples not grouped by use case
4. Error handling missing

Proposed Changes:

1. Restructure Instructions
   - Add beginner-friendly intro
   - Prioritize common tasks
   - Impact: +200 tokens (worth it for clarity)
   - Risk: Low

2. Group Examples by Use Case
   - Development: dev containers
   - Production: deployment
   - Debugging: logs and shell access
   - Impact: Neutral
   - Risk: Low

3. Add Error Handling Guide
   - Common errors and fixes
   - Troubleshooting flowchart
   - Impact: +400 tokens
   - Risk: Low

Net Impact: +600 tokens (acceptable for clarity gains)

═══════════════════════════════════════

⏸ Waiting for approval...
```

**Người dùng**: approve

```
Executing plan...

✓ Restructured instructions
✓ Grouped examples by use case
✓ Added error handling guide

Testing skill...
✓ Clarity improved
✓ All features working

Optimization complete!
New clarity score: 8.5/10 (was 6/10)
```

## Quy trình phê duyệt

```
/skill:optimize
      │
      ▼
┌─────────────┐
│ Analyze     │
└─────────────┘
      │
      ▼
┌─────────────┐
│ Create Plan │
└─────────────┘
      │
      ▼
┌─────────────┐
│ Present     │
└─────────────┘
      │
      ▼
┌─────────────────────────────────────┐
│ ⏸ WAIT FOR USER APPROVAL           │
│                                      │
│ 'approve' → Execute plan            │
│ 'reject'  → Cancel                  │
│ 'modify'  → Edit plan               │
└─────────────────────────────────────┘
      │
      ▼
┌─────────────┐
│ Execute     │
└─────────────┘
      │
      ▼
┌─────────────┐
│ Test        │
└─────────────┘
```

## Các lệnh liên quan

- [/skill:optimize:auto](/vi/docs/commands/skill/optimize-auto) - Tối ưu không cần phê duyệt
- [/skill:add](/vi/docs/commands/skill/add) - Thêm tham chiếu vào skill
- [/skill:create](/vi/docs/commands/skill/create) - Tạo skill mới

---

**Điểm chính**: `/skill:optimize` cung cấp cải tiến skill có kiểm soát với quy trình lập kế hoạch và phê duyệt, đảm bảo bạn xem xét thay đổi trước khi áp dụng.
