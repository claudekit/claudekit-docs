---
title: "ck:repomix"
description: Đóng gói repository thành file thân thiện với AI với các pattern tùy chỉnh, đếm token và kiểm tra bảo mật
section: engineer
kit: engineer
category: skills/tools
order: 50
published: true
lang: vi
---

# Repomix Skill

Đóng gói toàn bộ repository thành file đơn tối ưu cho LLM context.

## Khi Nào Sử Dụng

- Đóng gói codebase để phân tích AI hoặc code review
- Phân tích thư viện bên thứ ba trước khi tích hợp
- Tạo snapshot repository với quản lý token
- Chuẩn bị context kiểm toán bảo mật với lọc dữ liệu nhạy cảm

## Khả Năng Chính

| Khả Năng | Mô Tả |
|-----------|-------------|
| **Nhiều Định Dạng** | Xuất XML, Markdown, JSON, Plain text |
| **Đếm Token** | Đếm tự động với phân tích theo file/thư mục |
| **Hỗ Trợ Remote** | Đóng gói GitHub repo mà không cần clone |
| **Xóa Comment** | Loại bỏ comment từ 20+ ngôn ngữ |
| **Kiểm Tra Bảo Mật** | Tích hợp Secretlint cho API keys, mật khẩu, thông tin xác thực |
| **Tích Hợp Git** | Tuân thủ các pattern .gitignore |

## Các Trường Hợp Sử Dụng Phổ Biến

### Chuẩn Bị Code Review
**Ai dùng**: Senior developer chuẩn bị feature branch
```
"Đóng gói module src/auth với type definitions để code review. Xóa comment, xuất dạng markdown."
```

### Kiểm Toán Bảo Mật
**Ai dùng**: Security engineer đánh giá thư viện bên thứ ba
```
"Đóng gói repo owner/suspicious-library từ GitHub. Kiểm tra bảo mật cho credentials và API keys."
```

### Điều Tra Lỗi
**Ai dùng**: Backend developer debug auth flow
```
"Đóng gói thư mục src/auth và src/api với tất cả file TypeScript. Bao gồm token count tree để xem file lớn nhất."
```

### Context Tài Liệu
**Ai dùng**: Tech writer tạo API reference
```
"Đóng gói thư mục src và tất cả file markdown. Xuất dạng file markdown đơn với cấu trúc file được giữ nguyên."
```

### Tối Ưu Token
**Ai dùng**: AI engineer quản lý giới hạn LLM context
```
"Hiển thị token count tree cho repo này. Tập trung vào các thư mục trên 1000 token. Giúp tôi quyết định nên bao gồm gì."
```

## Tham Khảo Nhanh

### Lệnh Cơ Bản
```bash
# Đóng gói thư mục hiện tại (tạo repomix-output.xml)
repomix

# Chỉ định định dạng xuất
repomix --style markdown
repomix --style json

# Đóng gói repository remote
npx repomix --remote owner/repo

# Xuất tùy chỉnh với bộ lọc
repomix --include "src/**/*.ts" --remove-comments -o output.md
```

### Chọn File
```bash
# Các pattern include
repomix --include "src/**/*.ts,*.md"

# Các pattern ignore
repomix -i "tests/**,*.test.js"

# Tắt quy tắc .gitignore
repomix --no-gitignore
```

### Tùy Chọn Xuất
```bash
# Định dạng xuất: markdown, xml, json, plain
repomix --style markdown -o output.md

# Xóa comment
repomix --remove-comments

# Sao chép vào clipboard
repomix --copy
```

### Quản Lý Token
```bash
# Hiển thị token count tree
repomix --token-count-tree

# Chỉ hiển thị file 1000+ token
repomix --token-count-tree 1000
```

**Giới Hạn Context LLM:**
- Claude Sonnet 4.5: ~200K tokens
- GPT-4: ~128K tokens
- GPT-3.5: ~16K tokens

## Mẹo Pro

- **Xem lại output trước khi chia sẻ** - Luôn kiểm tra secrets được hardcode
- **Dùng .repomixignore** - Thêm các pattern file nhạy cảm
- **Đếm token trước** - Chạy `--token-count-tree` để tối ưu includes
- **Tắt kiểm tra bảo mật** - Dùng `--no-security-check` cho repo đã biết an toàn
- **Không kích hoạt?** Nói: "Use repomix skill to package this repo for AI analysis"

## Skill Liên Quan

- [Code Review](/vi/docs/engineer/skills/code-review) - Phân tích code bằng AI
- [Research](/vi/docs/engineer/skills/research) - Khám phá codebase không quen thuộc
- [Debugging](/vi/docs/engineer/skills/debug) - Cô lập lỗi có hệ thống

## Điểm Mấu Chốt

Repomix đóng gói repository thành file sẵn sàng cho LLM với đếm token, kiểm tra bảo mật và linh hoạt định dạng. Thiết yếu để chuẩn bị codebase lớn cho AI.
