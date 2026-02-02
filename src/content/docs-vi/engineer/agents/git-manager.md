---
title: Agent Git Manager
description: Chuyên gia thao tác Git tối ưu hóa token để staging, commit và push với thông điệp chuẩn và quét bảo mật.
section: engineer
kit: engineer
category: agents
order: 13
published: true
lang: vi
---

# Agent Git Manager

Agent git-manager là một agent DevOps chuyên biệt được tối ưu hóa cho các thao tác Git với hiệu quả sử dụng token cao. Nó xử lý việc lưu tạm (staging), chuyển giao (committing) và đẩy mã nguồn (pushing) với các thông điệp commit chuyên nghiệp theo chuẩn conventional commits, đồng thời ngăn chặn rò rỉ bảo mật.

## Mục đích

Lưu tạm, chuyển giao và đẩy thay đổi mã nguồn với các thông điệp commit chuẩn, quét bảo mật và tối ưu hóa việc sử dụng token (giảm 81% chi phí so với cơ bản).

## Mô hình & Hiệu suất

**Mô hình**: Haiku (được tối ưu hóa cho hiệu quả token)

**Chỉ số hiệu suất:**
- **Số lần gọi công cụ**: 2-3 mỗi lần commit
- **Sử dụng Token**: 5-8K token
- **Thời gian thực thi**: 10-15 giây
- **Chi phí**: ~$0.015 mỗi lần commit

## Khi nào được kích hoạt

Agent git-manager kích hoạt khi:
- Người dùng nói "commit" hoặc "push"
- Sử dụng lệnh `/git cm` (commit)
- Sử dụng lệnh `/git cp` (commit và push)
- Sử dụng lệnh `/git pr` (tạo pull request)
- Sau khi triển khai các tính năng hoặc bản sửa lỗi

## Khả năng

### Conventional Commits
Tạo các thông điệp commit ngữ nghĩa theo định dạng: `type(scope): description`.
Các loại (`type`) phổ biến: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `build`, `ci`.

### Quét bảo mật
Tự động quét các thay đổi (diff) để tìm dữ liệu nhạy cảm:
- Khóa API và token
- Mật khẩu và bí mật (secrets)
- Khóa riêng tư (private keys)
- Thông tin xác thực đám mây (AWS, v.v.)
- Chuỗi kết nối cơ sở dữ liệu
**Hành động**: Chặn commit và cảnh báo người dùng nếu phát hiện bí mật.

### Thông điệp tự động tạo
- **Thay đổi đơn giản**: Do Haiku xử lý (chỉnh sửa một tệp, refactor nhỏ, cập nhật tài liệu).
- **Thay đổi phức tạp**: Chuyển giao cho Gemini (nhiều tệp, thay đổi kiến trúc, tính năng mới).

### Lưu tạm thông minh (Smart Staging)
- Tự động phát hiện các thay đổi liên quan.
- Loại trừ các tệp tạm thời và tuân thủ `.gitignore`.

## Ví dụ sử dụng

### Commit cơ bản
```bash
/git cm
```
**Quy trình**: Quét bảo mật (không thấy bí mật) -> Phân tích thay đổi -> Tạo thông điệp -> Commit thành công.

### Commit và Push
```bash
/git cp
```
**Quy trình**: Thực hiện quy trình commit -> Đẩy lên nhánh remote (ví dụ: `origin/main`).

### Trường hợp bị chặn do bảo mật
Nếu phát hiện bí mật trong mã nguồn, agent sẽ chặn commit và yêu cầu người dùng xóa các bí mật được mã hóa cứng trước khi tiếp tục.

## Tối ưu hóa Token

Agent sử dụng các chiến lược để giảm chi phí:
1. **Tải bối cảnh tối thiểu**: Chỉ đọc `git diff`, không đọc toàn bộ lịch sử tệp.
2. **Phân tích tập trung**: Tập trung vào đường dẫn tệp, loại thay đổi và số dòng thay đổi.
3. **Chiến lược ủy quyền**: Chỉ sử dụng các mô hình lớn hơn (Gemini) khi thay đổi thực sự phức tạp.

## Thực hành tốt nhất

- **Phạm vi commit rõ ràng**: Chỉ `git add` các tệp liên quan đến một tính năng hoặc lỗi.
- **Nhóm logic**: Tách biệt các thay đổi tính năng khỏi các bản sửa lỗi.
- **Kiểm tra trước khi đẩy**: Sử dụng `/git cm` để xem thông điệp trước khi dùng `/git cp`.

## Xử lý sự cố

- **Commit bị chặn**: Kiểm tra các cảnh báo bảo mật, xóa bí mật và thử lại.
- **Thông điệp quá dài**: Rút gọn mô tả hoặc di chuyển chi tiết vào phần thân (body) của commit.
- **Sai loại commit**: Thêm các tệp cụ thể hơn hoặc tách thành nhiều commit nhỏ.

## Các bước tiếp theo

Tìm hiểu thêm về các chủ đề liên quan:
- [Git Skill](/docs/engineer/skills/git) - Commit, push, và pull request
- [Xem xét mã nguồn](/vi/docs/engineer/agents/code-reviewer)
- [Project Manager](/vi/docs/engineer/agents/project-manager)

---

**Thông điệp chính**: Agent git-manager cung cấp các thao tác Git bảo mật, tối ưu hóa token với thông điệp chuẩn chuyên nghiệp, giúp giảm 81% chi phí so với các phương pháp thông thường.
