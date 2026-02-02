---
title: "Git"
description: "Thao tác Git với conventional commits, tách commit tự động và phát hiện thông tin nhạy cảm"
section: engineer
kit: engineer
category: skills
order: 28
lang: vi
---

Thực thi các quy trình làm việc git với định dạng conventional commit, tách commit thông minh và quét bảo mật để phát hiện thông tin nhạy cảm.

## Kỹ năng này làm gì

Kỹ năng Git xử lý tất cả các thao tác git với tiêu chuẩn conventional commit, tách commit tự động theo type/scope và quét bảo mật để phát hiện thông tin nhạy cảm bị commit nhầm.

Hãy nghĩ về nó như người bảo vệ git của bạn—đảm bảo lịch sử commit sạch sẽ, ngăn chặn rò rỉ bảo mật và xử lý các quy trình phức tạp như PR và merge với tích hợp GitHub CLI đúng cách.

## Khả năng cốt lõi

- Stage file và tạo conventional commits
- Tự động tách commit theo type/scope để có lịch sử sạch
- Quét bảo mật tìm API keys, tokens, passwords
- Push với xử lý lỗi và giải quyết xung đột
- Tạo Pull Request với phân tích remote diff
- Merge branch với kiểm tra an toàn
- Tích hợp GitHub CLI cho issues và PRs

## Tham số

- `cm`: Stage file và tạo commits
- `cp`: Stage file, tạo commits và push
- `pr`: Tạo Pull Request [to-branch] [from-branch]
- `merge`: Merge [to-branch] [from-branch]

## Quy trình cốt lõi

### 1. Stage + Phân tích
```bash
git add -A && git diff --cached --stat && git diff --cached --name-only
```

### 2. Kiểm tra bảo mật
Quét tìm thông tin nhạy cảm trước khi commit:
```bash
git diff --cached | grep -iE "(api[_-]?key|token|password|secret|credential)"
```
**Nếu tìm thấy thông tin nhạy cảm**: DỪNG, cảnh báo người dùng, đề xuất `.gitignore`.

### 3. Quyết định tách commit

**Tách commit nếu:**
- Nhiều type khác nhau (feat + fix, code + docs)
- Nhiều scope (auth + payments)
- Config/deps + code lẫn lộn
- FILES > 10 không liên quan

**Commit đơn nếu:**
- Cùng type/scope, FILES ≤ 3, LINES ≤ 50

### 4. Commit
```bash
git commit -m "type(scope): description"
```

## Cách sử dụng

Kích hoạt bằng cách gõ `/git` theo sau là các tham số hoặc đề cập đến thao tác git.

## Ví dụ

- "/git cm" - Tạo commits
- "/git cp" - Tạo commits và push
- "/git pr main dev" - Tạo PR từ dev đến main
- "/git merge dev feature-branch" - Merge feature vào dev

## Định dạng Conventional Commit

```
type(scope): description

[optional body]

[optional footer]
```

**Types**: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `style`

**Lưu ý**: Chỉ sử dụng `feat`, `fix`, hoặc `perf` cho file trong thư mục `.claude` (không phải `docs`).

## Định dạng đầu ra

```
✓ staged: N files (+X/-Y lines)
✓ security: passed
✓ commit: HASH type(scope): description
✓ pushed: yes/no
```

## Xử lý lỗi

| Lỗi | Hành động |
|-------|--------|
| Phát hiện thông tin nhạy cảm | Chặn commit, hiển thị file |
| Không có thay đổi | Thoát sạch sẽ |
| Push bị từ chối | Đề xuất `git pull --rebase` |
| Xung đột merge | Đề xuất giải quyết thủ công |

## Điểm khác biệt

Kỹ năng Git không chỉ thực thi lệnh—nó thực thi các phương pháp tốt nhất, ngăn chặn rò rỉ bảo mật và duy trì lịch sử commit sạch tự động. Việc tách commit thông minh đảm bảo git log của bạn kể một câu chuyện rõ ràng.

## Kỹ năng liên quan

- [Cook](/docs/engineer/skills/cook) - Để triển khai tính năng cần commits
- [Fix](/docs/engineer/skills/fix) - Để sửa lỗi cần commits
