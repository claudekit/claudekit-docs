---
title: "ck:web-design-guidelines"
description: "Xem xét code UI để tuân thủ Web Interface Guidelines và tiêu chuẩn accessibility"
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# Web Design Guidelines

Xem xét các file để tuân thủ Web Interface Guidelines—kiểm tra accessibility, UX best practices và tiêu chuẩn thiết kế.

## Skill Này Làm Gì

Skill Web Design Guidelines kiểm toán code UI của bạn theo các Web Interface Guidelines mới nhất được duy trì bởi Vercel. Nó tải các quy tắc mới trước mỗi lần review, kiểm tra code của bạn theo tất cả guidelines và xuất kết quả dưới dạng ngắn gọn, có thể thực hiện.

Hãy nghĩ đây như review thiết kế tự động của bạn—phát hiện vấn đề accessibility, UX và vi phạm guidelines trước khi đến production.

## Khi Nào Sử Dụng

Kích hoạt khi được yêu cầu:
- "Review UI của tôi"
- "Kiểm tra accessibility"
- "Kiểm toán design"
- "Review UX"
- "Kiểm tra site của tôi theo best practices"

## Cách Hoạt Động

1. Tải guidelines mới nhất từ URL nguồn
2. Đọc các file được chỉ định (hoặc nhắc người dùng cung cấp files/pattern)
3. Kiểm tra theo tất cả quy tắc trong guidelines đã tải
4. Xuất kết quả dạng ngắn gọn `file:line`

## Nguồn Guidelines

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Skill tải guidelines mới trước mỗi lần review để đảm bảo bạn đang kiểm tra theo các tiêu chuẩn mới nhất.

## Cách Dùng

Kích hoạt bằng cách đề cập đến UI review, design audit, accessibility check hoặc UX best practices.

## Ví Dụ Prompt

- "Review landing page để tìm vấn đề accessibility"
- "Kiểm tra component này theo Web Interface Guidelines"
- "Kiểm toán dashboard UI để tìm vấn đề UX"
- "Review tất cả file .tsx trong thư mục components"
- "Kiểm tra form này có tuân theo best practices không"

## Những Gì Được Kiểm Tra

Web Interface Guidelines bao gồm:
- Accessibility (tuân thủ WCAG, semantic HTML, ARIA)
- UX patterns (điều hướng, forms, phản hồi, loading states)
- Visual design (typography, spacing, color contrast)
- Interaction design (hover states, focus indicators, touch targets)
- Hiệu suất (tối ưu hình ảnh, lazy loading)

## Định Dạng Xuất

Kết quả dạng ngắn gọn `file:line` để dễ điều hướng:
```
components/Header.tsx:42: Missing alt text on <img>
pages/signup.tsx:78: Form missing <label> elements
components/Button.tsx:23: Insufficient color contrast (3.2:1)
```

## Điều Gì Làm Skill Này Khác Biệt

Skill này không dùng quy tắc tĩnh—nó tải guidelines mới nhất từ Vercel trước mỗi lần review. Khi guidelines phát triển, các reviews của bạn tự động dùng các tiêu chuẩn mới nhất mà không cần cập nhật skill.

## Skill Liên Quan

- [React Best Practices](/vi/docs/engineer/skills/react-best-practices) - Cho các pattern hiệu suất React/Next.js
- [Web Testing](/vi/docs/engineer/skills/web-testing) - Cho accessibility testing với axe-core
