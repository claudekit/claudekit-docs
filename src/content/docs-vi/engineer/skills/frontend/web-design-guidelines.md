---
title: "Web Design Guidelines"
description: "Review UI code để tuân thủ Web Interface Guidelines và accessibility standards"
section: engineer
kit: engineer
category: skills/frontend
order: 35
lang: vi
---

Review files để tuân thủ Web Interface Guidelines—kiểm tra accessibility, UX best practices và design standards.

## Kỹ Năng Này Làm Gì

Kỹ năng Web Design Guidelines audit UI code của bạn dựa trên Web Interface Guidelines mới nhất được duy trì bởi Vercel. Nó fetch các quy tắc mới trước mỗi review, kiểm tra code của bạn với tất cả guidelines và xuất findings theo định dạng ngắn gọn, có thể hành động.

Hãy nghĩ về nó như design review tự động của bạn—phát hiện accessibility issues, UX problems và guideline violations trước khi chúng đến production.

## Khi Nào Sử Dụng

Kích hoạt khi được yêu cầu:
- "Review my UI"
- "Check accessibility"
- "Audit design"
- "Review UX"
- "Check my site against best practices"

## Cách Hoạt Động

1. Fetch guidelines mới nhất từ source URL
2. Đọc các files được chỉ định (hoặc prompt user cho files/pattern)
3. Kiểm tra với tất cả quy tắc trong guidelines đã fetch
4. Xuất findings theo định dạng ngắn gọn `file:line`

## Nguồn Guidelines

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Skill fetch guidelines mới trước mỗi review để đảm bảo bạn kiểm tra với standards mới nhất.

## Sử Dụng

Kích hoạt bằng cách đề cập UI review, design audit, accessibility check hoặc UX best practices.

## Prompt Ví Dụ

- "Review landing page cho accessibility issues"
- "Kiểm tra component này với Web Interface Guidelines"
- "Audit dashboard UI cho UX problems"
- "Review tất cả .tsx files trong components directory"
- "Kiểm tra form này có tuân theo best practices không"

## Những Gì Nó Kiểm Tra

Web Interface Guidelines bao gồm:
- Accessibility (WCAG compliance, semantic HTML, ARIA)
- UX patterns (navigation, forms, feedback, loading states)
- Visual design (typography, spacing, color contrast)
- Interaction design (hover states, focus indicators, touch targets)
- Performance (image optimization, lazy loading)

## Định Dạng Output

Findings theo định dạng ngắn gọn `file:line` để dễ navigation:
```
components/Header.tsx:42: Missing alt text on <img>
pages/signup.tsx:78: Form missing <label> elements
components/Button.tsx:23: Insufficient color contrast (3.2:1)
```

## Điểm Khác Biệt

Skill này không sử dụng quy tắc tĩnh—nó fetch guidelines mới nhất từ Vercel trước mỗi review. Khi guidelines phát triển, các reviews của bạn tự động sử dụng standards mới nhất mà không cần cập nhật skill.

## Các Kỹ Năng Liên Quan

- [React Best Practices](/vi/docs/engineer/skills/frontend/react-best-practices) - Cho React/Next.js performance patterns
- [Web Testing](/vi/docs/engineer/skills/tools/web-testing) - Cho accessibility testing với axe-core
