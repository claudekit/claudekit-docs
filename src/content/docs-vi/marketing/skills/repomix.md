---
lang: vi
title: "ckm:repomix"
description: "Đóng gói toàn bộ repository thành một file duy nhất thân thiện với AI để phân tích codebase và context sharing."
section: marketing
kit: marketing
category: skills
order: 100
---

# ckm:repomix

> Chuyển đổi codebase thành context AI-ready — gộp toàn bộ repository thành một file để phân tích chuyên sâu.

## Kỹ Năng Này Làm Gì

Skill `ckm:repomix` sử dụng công cụ Repomix để đóng gói toàn bộ hoặc một phần repository thành file XML/Markdown tối ưu cho LLM. Hữu ích khi cần cung cấp context codebase đầy đủ cho phân tích, code review hoặc tài liệu hóa.

## Bắt Đầu Nhanh

```
/ckm:repomix
```

Hoặc chỉ định repository:

```
/ckm:repomix Đóng gói repo hiện tại để phân tích kiến trúc
```

## Cài Đặt

```bash
npm install -g repomix
# hoặc dùng npx (không cần cài)
npx repomix
```

## Cách Sử Dụng

```bash
# Đóng gói repo hiện tại
npx repomix

# Đóng gói thư mục cụ thể
npx repomix --include "src/**,tests/**"

# Loại trừ files
npx repomix --ignore "node_modules,dist,*.lock"

# Xuất định dạng XML (tốt hơn cho Claude)
npx repomix --style xml --output repo-context.xml

# Từ GitHub URL
npx repomix --remote https://github.com/user/repo
```

## Tính Năng Chính

- **Smart filtering**: Tự động loại trừ binary files, node_modules, secrets
- **Multiple formats**: XML, Markdown, plain text
- **Token estimation**: Ước tính số token cho LLM context window
- **Custom ignore**: Thêm `.repomixignore` để kiểm soát files được đóng gói
- **Security check**: Phát hiện và cảnh báo về potential secrets

## Ví Dụ Sử Dụng

**Phân tích kiến trúc:**
```
/ckm:repomix Đóng gói repo và phân tích kiến trúc hiện tại, điểm mạnh/yếu
```

**Code review toàn bộ:**
```
/ckm:repomix Chuẩn bị context để review toàn bộ codebase trước khi merge PR lớn
```

**Tài liệu hóa:**
```
/ckm:repomix Gộp src/ để tạo tài liệu API đầy đủ tự động
```

## Cấu Hình `.repomixignore`

```
# Bỏ qua các thư mục không cần thiết
dist/
.next/
coverage/
*.test.ts
*.spec.ts
```

## Liên Quan

- [ckm:scout](/vi/docs/marketing/skills/scout) - Quét codebase nhanh với agents song song
- [ckm:docs](/vi/docs/marketing/skills/docs) - Tạo tài liệu từ codebase
