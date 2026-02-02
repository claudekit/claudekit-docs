---
title: CLAUDE.md
description: Tài liệu hướng dẫn sử dụng file CLAUDE.md
section: engineer
kit: engineer
category: docs/configuration
order: 2
published: true
lang: vi
---

# CLAUDE.md

File `CLAUDE.md` là file cấu hình chính cung cấp hướng dẫn cho Claude Code khi làm việc với codebase của bạn. Hiểu về file này là rất quan trọng để sử dụng ClaudeKit hiệu quả.

## CLAUDE.md Là Gì?

`CLAUDE.md` đóng vai trò là điểm khởi đầu cho sự hiểu biết của Claude Code về dự án của bạn. Nó chứa:

- Định nghĩa vai trò và trách nhiệm
- Liên kết đến tài liệu quy trình làm việc (workflow) chi tiết
- Tham chiếu đến các quy tắc phát triển
- Hướng dẫn quản lý tài liệu

## Cấu Trúc File

Một file `CLAUDE.md` điển hình trông như thế này:

```markdown
# CLAUDE.md

File này cung cấp hướng dẫn cho Claude Code khi làm việc với code trong repository này.

## Role & Responsibilities

Vai trò của bạn là phân tích yêu cầu người dùng, phân công nhiệm vụ cho các sub-agents phù hợp,
và đảm bảo cung cấp các tính năng đáp ứng thông số kỹ thuật (specs) và tiêu chuẩn kiến trúc.

## Workflows

- Primary workflow: `./.claude/workflows/primary-workflow.md`
- Development rules: `./.claude/workflows/development-rules.md`
- Orchestration protocols: `./.claude/workflows/orchestration-protocol.md`
- Documentation management: `./.claude/workflows/documentation-management.md`

## Documentation Management

Chúng tôi lưu tất cả tài liệu quan trọng trong thư mục `./docs` và liên tục cập nhật chúng.
```

## Tại Sao Dùng File System Làm Context?

ClaudeKit tuân theo cách tiếp cận Context Engineering của Manus: **Sử Dụng File System Làm Context**.

### Lợi Ích

1. **Hiệu Quả Token**: CLAUDE.md chỉ chứa vài dòng với các liên kết đến các file chi tiết.
2. **Tải Theo Yêu Cầu**: Hướng dẫn chi tiết chỉ được tải khi cần thiết.
3. **Tổ Chức Tốt Hơn**: Tài liệu liên quan được nhóm trong các thư mục logic.
4. **Bảo Trì Dễ Dàng Hơn**: Cập nhật các file cụ thể mà không cần tác động vào CLAUDE.md.

### Ví Dụ

Thay vì đặt tất cả các quy tắc phát triển trong CLAUDE.md:

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
✅ Cách Tiếp Cận Tốt (Sử dụng File System làm Context)
# CLAUDE.md
## Workflows
- Development rules: `./.claude/workflows/development-rules.md`
```

Điều này giúp CLAUDE.md luôn nhẹ nhàng trong khi vẫn duy trì quyền truy cập vào các hướng dẫn chi tiết.

## Quan Trọng: Không Sửa Đổi

**[Quan Trọng]** Bạn không nên sửa đổi `CLAUDE.md` trực tiếp, vì nó sẽ bị ghi đè mỗi khi bạn cập nhật ClaudeKit bằng lệnh `ck init`.

### Tại Sao?

- Các bản cập nhật ClaudeKit có thể bao gồm những cải tiến cho quy trình làm việc và các quy tắc.
- Các thay đổi thủ công sẽ bị mất khi cập nhật.
- Đảm bảo tính nhất quán giữa các dự án ClaudeKit.

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

Chứa hướng dẫn chi tiết về quy trình làm việc:

- `development-rules.md` - Tiêu chuẩn chất lượng code, điều phối subagent, quy trình pre-commit.
- `documentation-management.md` - Tiêu chuẩn và thực hành quản lý tài liệu.
- `orchestration-protocol.md` - Phương pháp điều phối agent.
- `primary-workflow.md` - Quy trình phát triển từ khi viết code đến khi triển khai.

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

- Tránh ảo tưởng (hallucinations).
- Ngăn chặn việc tạo code trùng lặp.
- Hiểu các mẫu (patterns) cụ thể của dự án.
- Tuân theo các quy ước đã thiết lập.

## Claude Code Sử Dụng CLAUDE.md Như Thế Nào

### Tải Ban Đầu

1. Claude Code đọc `CLAUDE.md` khi khởi động.
2. Hiểu vai trò và cấu trúc của dự án.
3. Biết nơi tìm các hướng dẫn chi tiết.

### Trong Các Tác Vụ

Khi thực hiện các tác vụ cụ thể, Claude Code:

1. Tham chiếu các file workflow được liên kết.
2. Đọc tài liệu liên quan từ thư mục `docs/`.
3. Tuân theo các patterns và quy tắc đã thiết lập.
4. Cập nhật tài liệu khi cần thiết.

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
Triển khai theo các patterns
  ↓
Cập nhật tài liệu
```

## Best Practices

### Nên Làm

✅ Giữ CLAUDE.md ngắn gọn với các liên kết đến tài liệu chi tiết.
✅ Cập nhật các file workflow trong `.claude/workflows/` khi cần thiết.
✅ Duy trì tài liệu dự án trong thư mục `docs/`.
✅ Sử dụng `ck init --exclude CLAUDE.md` nếu bắt buộc phải tùy chỉnh.

### Không Nên Làm

❌ Đừng đặt tất cả tài liệu vào trong CLAUDE.md.
❌ Đừng sửa đổi CLAUDE.md mà không hiểu rõ hậu quả khi cập nhật.
❌ Đừng bỏ qua các file workflow được liên kết.
❌ Đừng bỏ qua việc quản lý tài liệu.

## Tiêu Thụ Token

Sử dụng File System làm Context giúp giảm đáng kể việc sử dụng token:

**Không có File System làm Context:**
- Tải ban đầu: ~5000 tokens (mọi thứ nằm trong CLAUDE.md).
- Mỗi tác vụ: Cùng 5000 tokens được tải lại.

**Với File System làm Context (cách tiếp cận của ClaudeKit):**
- Tải ban đầu: ~500 tokens (chỉ tải CLAUDE.md).
- Tác vụ cụ thể: +1000 tokens (chỉ tải các file liên quan).
- Tổng cộng: 1500 tokens so với 5000 tokens (tiết kiệm 70%).

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

Bây giờ bạn đã hiểu về CLAUDE.md:

- [Workflows](/docs/engineer/configuration/workflows) - Tìm hiểu về các file workflow.
- [Agents](/docs/engineer/agents/) - Hiểu về hệ thống agent.
- [Commands](/docs/engineer/commands/) - Khám phá các lệnh có sẵn.

---

**Điểm Chính**: CLAUDE.md là một điểm khởi đầu nhẹ nhàng sử dụng file system làm context, giúp ClaudeKit hoạt động hiệu quả và dễ bảo trì.
