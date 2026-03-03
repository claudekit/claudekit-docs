---
lang: vi
title: "ckm:git"
description: "Thao tác Git với conventional commits, quét bí mật và workflow an toàn cho team development."
section: marketing
kit: marketing
category: skills
order: 115
---

# Git

> Quản lý Git workflow chuyên nghiệp với conventional commits, bảo vệ secrets và best practices an toàn.

## Kỹ Năng Này Làm Gì

Skill `ckm:git` xử lý tất cả thao tác Git — từ commit, branch management, PR creation đến conflict resolution. Tự động kiểm tra secrets trước khi commit, enforce conventional commit format và hướng dẫn Git workflow chuẩn cho team.

## Bắt Đầu Nhanh

```
/ckm:git
```

Hoặc chỉ định thao tác:

```
/ckm:git Commit tất cả thay đổi với message phù hợp
```

## Conventional Commits

```
<type>(<scope>): <description>

Types:
feat:     Tính năng mới
fix:      Sửa lỗi
docs:     Cập nhật tài liệu
refactor: Tái cấu trúc code
test:     Thêm/sửa tests
chore:    Build, dependencies, config
perf:     Cải thiện performance
```

**Ví dụ**:
```bash
git commit -m "feat(auth): add OAuth2 login with Google"
git commit -m "fix(payment): handle failed webhook retries"
git commit -m "docs(api): update endpoint documentation"
```

## Tính Năng Chính

- **Secret scanning**: Phát hiện API keys, tokens trước khi commit
- **Conventional commits**: Format chuẩn với type, scope, description
- **Branch strategy**: feature/, fix/, docs/ naming conventions
- **PR creation**: Tạo PR với description đầy đủ qua `gh` CLI
- **Conflict resolution**: Hướng dẫn giải quyết merge conflicts

## Ví Dụ Sử Dụng

**Commit thay đổi:**
```
/ckm:git Review staged changes và tạo commit message phù hợp
```

**Tạo PR:**
```
/ckm:git Tạo PR từ branch feature/payment-integration vào dev
```

**Quét secrets:**
```
/ckm:git Kiểm tra toàn bộ staged files có chứa secrets không trước khi push
```

**Branch management:**
```
/ckm:git Tạo branch mới từ dev cho tính năng user-notifications
```

## An Toàn Git

- **KHÔNG** commit file `.env`, credentials, API keys
- **KHÔNG** force push lên `main` hoặc `master`
- **LUÔN** review diff trước khi commit
- **LUÔN** pull trước push để tránh conflicts

## Lệnh Git Thường Dùng

```bash
# Xem trạng thái
git status && git diff --staged

# Commit an toàn
git add src/specific-file.ts
git commit -m "feat: add feature description"

# Push và tạo PR
git push -u origin feature/my-feature
gh pr create --title "feat: my feature" --base dev
```

## Liên Quan

- [ckm:cook](/vi/docs/marketing/skills/cook) - Triển khai trước khi commit
- [ckm:worktree](/vi/docs/marketing/skills/worktree) - Làm việc với nhiều branches song song
