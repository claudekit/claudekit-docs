---
title: "ck:git"
description: "Các thao tác git với conventional commits, logic tự động tách commit, và phát hiện secret"
section: engineer
kit: engineer
category: skills
order: 6
lang: vi
---

# Git

Thực thi các quy trình git với định dạng conventional commit, tự động tách commit theo type/scope, và quét bảo mật để tìm secret.

## Skill Này Làm Gì

Skill Git xử lý tất cả các thao tác git với tiêu chuẩn conventional commit, tự động tách commit theo type/scope, và quét bảo mật để tìm secret vô tình được commit.

Hãy nghĩ về nó như người bảo vệ git của bạn — đảm bảo lịch sử commit sạch sẽ, ngăn chặn rò rỉ bảo mật, và xử lý các quy trình phức tạp như PRs và merges với tích hợp GitHub CLI phù hợp.

## Khả Năng Cốt Lõi

- Stage files và tạo conventional commits
- Tự động tách commit theo type/scope để lịch sử sạch
- Quét bảo mật tìm API keys, tokens, passwords
- Push với xử lý lỗi và giải quyết xung đột
- Tạo Pull Requests với phân tích remote diff
- Merge branches với kiểm tra an toàn
- Tích hợp GitHub CLI cho issues và PRs

## Đối Số

- `cm`: Stage files & tạo commits
- `cp`: Stage files, tạo commits, và push
- `pr`: Tạo Pull Request [to-branch] [from-branch]
- `merge`: Merge [to-branch] [from-branch]

## Quy Trình Cốt Lõi

### 1. Stage + Phân Tích
```bash
git add -A && git diff --cached --stat && git diff --cached --name-only
```

### 2. Kiểm Tra Bảo Mật
Quét secret trước khi commit:
```bash
git diff --cached | grep -iE "(api[_-]?key|token|password|secret|credential)"
```
**Nếu tìm thấy secret**: DỪNG, cảnh báo người dùng, đề xuất `.gitignore`.

### 3. Quyết Định Tách

**Tách commits nếu:**
- Có nhiều types khác nhau (feat + fix, code + docs)
- Nhiều scopes (auth + payments)
- Config/deps + code lẫn lộn
- FILES > 10 không liên quan

**Commit đơn nếu:**
- Cùng type/scope, FILES ≤ 3, LINES ≤ 50

### 4. Commit
```bash
git commit -m "type(scope): description"
```

## Cách Dùng

Kích hoạt bằng cách gõ `/ck:git` theo sau là đối số hoặc đề cập đến thao tác git.

## Prompt Mẫu

- "/ck:git cm" - Tạo commits
- "/ck:git cp" - Tạo commits và push
- "/ck:git pr main dev" - Tạo PR từ dev đến main
- "/ck:git merge dev feature-branch" - Merge feature vào dev

## Định Dạng Conventional Commit

```
type(scope): description

[body tùy chọn]

[footer tùy chọn]
```

**Types**: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `style`

**Lưu ý**: Chỉ dùng `feat`, `fix`, hoặc `perf` cho các file trong thư mục `.claude` (không dùng `docs`).

## Định Dạng Đầu Ra

```
✓ staged: N files (+X/-Y lines)
✓ security: passed
✓ commit: HASH type(scope): description
✓ pushed: yes/no
```

## Xử Lý Lỗi

| Lỗi | Hành động |
|-----|-----------|
| Phát hiện secret | Chặn commit, hiển thị files |
| Không có thay đổi | Thoát sạch |
| Push bị từ chối | Đề xuất `git pull --rebase` |
| Xung đột merge | Đề xuất giải quyết thủ công |

## Điểm Khác Biệt

Skill Git không chỉ thực thi lệnh — nó thực thi best practices, ngăn chặn rò rỉ bảo mật, và tự động duy trì lịch sử commit sạch sẽ. Việc tách commit thông minh đảm bảo git log của bạn kể một câu chuyện rõ ràng.

## Skills Liên Quan

- [Cook](/vi/docs/engineer/skills/cook) - Để triển khai features cần commit
- [Fix](/vi/docs/engineer/skills/fix) - Để sửa lỗi cần commit
