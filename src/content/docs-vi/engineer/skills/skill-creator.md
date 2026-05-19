---
title: "ck:skill-creator"
description: Tạo custom skills mở rộng khả năng của Claude với kiến thức chuyên biệt, workflows và tích hợp công cụ
section: engineer
kit: engineer
category: skills/tools
order: 9
published: true
lang: vi
---

# skill-creator

Biến kiến thức workflow của bạn thành các AI skills có thể tái sử dụng mà Claude có thể kích hoạt tự động.

## Khi Nào Sử Dụng

- **Tích hợp API** - Tạo skills cho Stripe, Twilio hoặc API tùy chỉnh với các pattern phù hợp
- **Kiến thức công ty** - Mã hóa coding standards, schemas hoặc business logic thành skills di động
- **Workflows có thể tái sử dụng** - Biến quy trình deployment, testing hoặc ETL thành hướng dẫn có thể lặp lại
- **Hướng dẫn framework** - Xây dựng skills cho Vue, Django hoặc tech stacks với tài nguyên đi kèm

## Khả Năng Chính

| Tính Năng | Chức Năng |
|---------|-------------|
| Tạo SKILL.md | Tạo file skill có cấu trúc với metadata và hướng dẫn |
| Tài Nguyên Đi Kèm | Thêm scripts, references và assets cho các task phức tạp |
| Progressive Disclosure | Giữ skills dưới 100 dòng, tham chiếu file bên ngoài khi cần |
| Xác Nhận & Đóng Gói | Xác nhận cấu trúc và đóng gói skills dạng ZIP có thể phân phối |

## Các Trường Hợp Sử Dụng Phổ Biến

### API Integration Developer
**Prompt:** "Use skill-creator to make Stripe payment skill with webhooks, subscriptions, and error handling"

### DevOps Engineer
**Prompt:** "Use skill-creator for deployment workflow: build, test staging, smoke tests, production deploy"

### Engineering Lead
**Prompt:** "Use skill-creator for team coding standards: file structure, naming conventions, error patterns, testing requirements"

### Data Engineer
**Prompt:** "Use skill-creator for BigQuery skill with table schemas, join patterns, and optimization rules"

### Frontend Developer
**Prompt:** "Use skill-creator for React skill with component patterns, hooks best practices, and state management"

## Tham Khảo Nhanh

### Gọi Skill

```bash
"Use skill-creator to create skill for [purpose]:
- [capability 1]
- [capability 2]
- [best practices]"
```

### Cấu Trúc Skill

```
.claude/skills/skill-name/
├── SKILL.md              # <100 dòng, hướng dẫn cốt lõi
├── scripts/              # Script Python/Node với tests
├── references/           # Tài liệu được tải khi cần
└── assets/               # Templates, images, boilerplate
```

### Quy Trình Tạo Skill

1. **Làm Rõ** - skill-creator hỏi về use cases và chức năng
2. **Thiết Kế** - Lên kế hoạch cấu trúc: scripts, references, assets cần thiết
3. **Khởi Tạo** - Chạy `init_skill.py` để tạo template
4. **Triển Khai** - Viết SKILL.md, thêm tài nguyên đi kèm, viết tests
5. **Xác Nhận** - Chạy `package_skill.py` để kiểm tra cấu trúc và đóng gói
6. **Lưu** - Xuất ra `.claude/skills/` để dùng ngay

### Yêu Cầu Chính

- **SKILL.md**: <100 dòng, dùng dạng mệnh lệnh ("To do X, run Y")
- **Scripts**: Bao gồm tests, tuân thủ phân cấp `.env`, ưu tiên Python/Node hơn Bash
- **References**: <100 dòng mỗi file, chia tài liệu lớn dùng progressive disclosure
- **Metadata**: `description` cụ thể kích hoạt tự động

## Mẹo Pro

- **Không kích hoạt?** Nói: "Use skill-creator skill to create a [domain] skill"
- **Tài liệu lớn?** Chia thành nhiều reference files, để Claude tải khi cần
- **Code lặp lại?** Chuyển sang scripts có tests thay vì tái tạo
- **Schemas công ty?** Lưu trong `references/` để Claude không phải tái khám phá mỗi lần
- **Boilerplate?** Thêm vào `assets/` dạng templates Claude có thể sao chép và sửa đổi

## Skill Liên Quan

- [/docs/engineer/skills/claude-code-skill](/vi/docs/engineer/skills/skill-creator) - Tạo skills qua lệnh CLI
- [/docs/engineer/skills/plan](/vi/docs/engineer/skills/plan) - Thiết kế workflows phức tạp trước khi xây dựng skills
- [/docs/engineer/skills/use-mcp](/vi/docs/engineer/skills/use-mcp) - Quản lý tích hợp Model Context Protocol

## Điểm Mấu Chốt

skill-creator biến kiến thức thủ tục thành các skills có thể kích hoạt bởi AI. Mô tả những gì bạn cần, nhận gói skill đã được xác nhận sẵn sàng cho nhóm hoặc bộ công cụ cá nhân của bạn.
