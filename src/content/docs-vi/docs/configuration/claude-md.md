---
title: CLAUDE.md
description: "Documentation for CLAUDE.md
description:
section: docs
category: docs/configuration
order: 2
published: true"
section: docs
category: docs/configuration
order: 2
published: true
---

# CLAUDE.md

File `CLAUDE.md` là file cấu hình chính cung cấp hướng dẫn cho Claude Code khi làm việc với codebase của bạn. Hiểu về file này là rất quan trọng để sử dụng ClaudeKit hiệu quả.

## CLAUDE.md Là Gì?

`CLAUDE.md` đóng vai trò là điểm khởi đầu cho sự hiểu biết của Claude Code về dự án của bạn. Nó chứa:

- Định nghĩa vai trò và trách nhiệm
- Liên kết đến tài liệu workflow chi tiết
- Tham chiếu đến quy tắc phát triển
- Hướng dẫn quản lý tài liệu

## Cấu Trúc File

Một file `CLAUDE.md` điển hình trông như thế này:

```markdown
# CLAUDE.md

File này cung cấp hướng dẫn cho Claude Code khi làm việc với code trong repository này.

## Role & Responsibilities

Vai trò của bạn là phân tích yêu cầu người dùng, phân công nhiệm vụ cho các sub-agents phù hợp,
và đảm bảo cung cấp các tính năng đáp ứng specs và tiêu chuẩn kiến trúc.

## Workflows

- Primary workflow: `./.claude/workflows/primary-workflow.md`
- Development rules: `./.claude/workflows/development-rules.md`
- Orchestration protocols: `./.claude/workflows/orchestration-protocol.md`
- Documentation management: `./.claude/workflows/documentation-management.md`

## Documentation Management

Chúng tôi lưu tất cả docs quan trọng trong thư mục `./docs` và liên tục cập nhật chúng.
```

## Tại Sao Dùng File System Làm Context?

ClaudeKit tuân theo cách tiếp cận Context Engineering của Manus: **Sử Dụng File System Làm Context**.

### Lợi Ích

1. **Hiệu Quả Token**: CLAUDE.md chỉ chứa vài dòng với links đến các file chi tiết
2. **Tải Theo Yêu Cầu**: Hướng dẫn chi tiết chỉ được tải khi cần
3. **Tổ Chức Tốt Hơn**: Tài liệu liên quan được nhóm trong các thư mục logic
4. **Bảo Trì Dễ Dàng Hơn**: Cập nhật các file cụ thể mà không động vào CLAUDE.md

### Ví Dụ

Thay vì đặt tất cả development rules trong CLAUDE.md:

```markdown
❌ Cách Tiếp Cận Xấu (Tất cả trong CLAUDE.md)
# CLAUDE.md
## Development Rules
1. Luôn viết tests
2. Tuân theo TypeScript strict mode
3. Sử dụng conventional commits
... (hàng trăm dòng)
```

ClaudeKit sử dụng tham chiếu:

```markdown
✅ Cách Tiếp Cận Tốt (File System Làm Context)
# CLAUDE.md
## Workflows
- Development rules: `./.claude/workflows/development-rules.md`
```

Điều này giữ CLAUDE.md nhẹ trong khi vẫn duy trì quyền truy cập vào hướng dẫn chi tiết.

## Quan Trọng: Không Sửa Đổi

**[Quan Trọng]** Bạn không nên sửa đổi `CLAUDE.md` trực tiếp, vì nó sẽ bị ghi đè mỗi khi bạn cập nhật ClaudeKit bằng `ck init`.

### Tại Sao?

- Cập nhật ClaudeKit có thể bao gồm cải tiến cho workflows và rules
- Thay đổi thủ công sẽ bị mất khi cập nhật
- Tính nhất quán giữa các dự án ClaudeKit

### Nếu Tôi Cần Tùy Chỉnh Thì Sao?

Nếu bạn muốn sửa đổi `CLAUDE.md` mà không bị ghi đè:

```bash
# Sử dụng cờ exclude khi cập nhật
ck init --exclude CLAUDE.md
```

**Cách tiếp cận tốt hơn**: Thay vì sửa đổi CLAUDE.md, hãy tùy chỉnh các file được tham chiếu trong `.claude/workflows/` vì chúng ít thay đổi hơn khi cập nhật.

## Tổng Quan Cấu Trúc

CLAUDE.md liên kết đến một số thư mục chính:

### `.claude/workflows/`

Chứa hướng dẫn workflow chi tiết:

- `development-rules.md` - Tiêu chuẩn chất lượng code, điều phối subagent, quy trình pre-commit
- `documentation-management.md` - Tiêu chuẩn và thực hành tài liệu
- `orchestration-protocol.md` - Phương pháp điều phối agent
- `primary-workflow.md` - Workflow phát triển từ code đến deployment

### `docs/`

Tài liệu cụ thể cho dự án:

```
docs/
├── project-overview-pdr.md
├── code-standards.md
├── codebase-summary.md
├── design-guidelines.md
├── deployment-guide.md
├── system-architecture.md
└── project-roadmap.md
```

Các file này giúp Claude Code:
- Tránh hallucinations
- Ngăn tạo code trùng lặp
- Hiểu các pattern cụ thể của dự án
- Tuân theo các quy ước đã thiết lập

## Claude Code Sử Dụng CLAUDE.md Như Thế Nào

### Tải Ban Đầu

1. Claude Code đọc `CLAUDE.md` khi khởi động
2. Hiểu vai trò và cấu trúc của dự án
3. Biết nơi tìm hướng dẫn chi tiết

### Trong Các Tác Vụ

Khi thực hiện các tác vụ cụ thể, Claude Code:

1. Tham chiếu các file workflow được liên kết
2. Đọc tài liệu liên quan từ `docs/`
3. Tuân theo các pattern và rules đã thiết lập
4. Cập nhật tài liệu khi cần

### Ví Dụ Luồng

```
Người dùng: "Thêm xác thực người dùng"
  ↓
Claude đọc CLAUDE.md
  ↓
Tải development-rules.md
  ↓
Kiểm tra code-standards.md
  ↓
Xem xét system-architecture.md
  ↓
Triển khai theo patterns
  ↓
Cập nhật tài liệu
```

## Best Practices

### Nên Làm

✅ Giữ CLAUDE.md ngắn gọn với links đến docs chi tiết
✅ Cập nhật các file workflow trong `.claude/workflows/` khi cần
✅ Duy trì docs dự án trong thư mục `docs/`
✅ Sử dụng `ck init --exclude CLAUDE.md` nếu phải tùy chỉnh

### Không Nên Làm

❌ Đừng đặt tất cả tài liệu trong CLAUDE.md
❌ Đừng sửa đổi CLAUDE.md mà không hiểu hậu quả cập nhật
❌ Đừng bỏ qua các file workflow được liên kết
❌ Đừng bỏ qua quản lý tài liệu

## Tiêu Thụ Token

Sử dụng File System Làm Context giảm đáng kể việc sử dụng token:

**Không có File System Làm Context:**
- Tải ban đầu: ~5000 tokens (mọi thứ trong CLAUDE.md)
- Mỗi tác vụ: Cùng 5000 tokens được tải

**Với File System Làm Context (cách tiếp cận ClaudeKit):**
- Tải ban đầu: ~500 tokens (chỉ CLAUDE.md)
- Tác vụ cụ thể: +1000 tokens (chỉ file liên quan)
- Tổng: 1500 tokens vs 5000 tokens (tiết kiệm 70%)

## Xác Thực

Đảm bảo CLAUDE.md được cấu hình đúng:

```bash
# Kiểm tra CLAUDE.md tồn tại
cat CLAUDE.md

# Xác minh các file được liên kết tồn tại
ls .claude/workflows/

# Kiểm tra cấu trúc tài liệu
ls docs/
```

## Bước Tiếp Theo

Bây giờ bạn đã hiểu CLAUDE.md:

- [Workflows](/docs/core-concepts/workflows) - Tìm hiểu về các file workflow
- [Agents](/docs/agents/) - Hiểu hệ thống agent
- [Commands](/docs/commands/) - Khám phá các lệnh có sẵn

---

**Điểm Chính**: CLAUDE.md là điểm khởi đầu nhẹ sử dụng file system làm context, làm cho ClaudeKit hiệu quả và dễ bảo trì.
