---
title: "ck:react-best-practices"
description: "Hướng dẫn tối ưu hóa hiệu suất React và Next.js từ Vercel Engineering"
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# React Best Practices

Hướng dẫn tối ưu hóa hiệu suất toàn diện cho các ứng dụng React và Next.js, được duy trì bởi Vercel. Chứa 45 quy tắc trên 8 danh mục được ưu tiên theo tác động.

## Skill Này Làm Gì

Skill React Best Practices cung cấp các pattern hiệu suất đã được kiểm chứng từ Vercel Engineering. Đây không phải là hướng dẫn lý thuyết — đây là những tối ưu hóa thực sự được sử dụng trong các ứng dụng production phục vụ hàng triệu người dùng.

Hãy coi đó như việc có một kỹ sư Vercel pair-programming với bạn, phát hiện các vấn đề hiệu suất trước khi chúng đến production: loại bỏ waterfalls, tối ưu hóa bundles, ngăn chặn re-renders không cần thiết, và triển khai các tối ưu hóa phía server.

## Khi Nào Áp Dụng

Tham khảo các hướng dẫn này khi:
- Viết các React components hoặc Next.js pages mới
- Triển khai data fetching (client hoặc server-side)
- Review code để tìm vấn đề hiệu suất
- Refactor code React/Next.js hiện có
- Tối ưu hóa kích thước bundle hoặc thời gian tải

## Các Danh Mục Quy Tắc Theo Ưu Tiên

| Ưu tiên | Danh mục | Tác động | Trọng tâm |
|---------|---------|--------|-------|
| 1 | Loại Bỏ Waterfalls | QUAN TRỌNG | Fetch song song, Suspense boundaries |
| 2 | Tối Ưu Kích Thước Bundle | QUAN TRỌNG | Dynamic imports, barrel files, tree-shaking |
| 3 | Hiệu Suất Phía Server | CAO | React.cache(), LRU caching, serialization |
| 4 | Data Fetching Phía Client | TRUNG BÌNH-CAO | SWR deduplication, event listeners |
| 5 | Tối Ưu Re-render | TRUNG BÌNH | Memo, derived state, transitions |
| 6 | Hiệu Suất Rendering | TRUNG BÌNH | Content visibility, SVG optimization |
| 7 | Hiệu Suất JavaScript | THẤP-TRUNG BÌNH | Map lookups, caching, iteration |
| 8 | Các Pattern Nâng Cao | THẤP | Ref patterns, latest callbacks |

## Tối Ưu Hóa Quan Trọng (Ưu Tiên Cao Nhất)

### Loại Bỏ Waterfalls
- Di chuyển await vào các nhánh thực sự sử dụng chúng
- Dùng Promise.all() cho các thao tác độc lập
- Bắt đầu promises sớm, await muộn trong API routes
- Dùng Suspense để stream nội dung

### Kích Thước Bundle
- Import trực tiếp, tránh barrel files
- Dùng next/dynamic cho các component nặng
- Tải analytics/logging sau hydration
- Chỉ tải modules khi tính năng được kích hoạt
- Preload khi hover/focus để tăng tốc độ cảm nhận

## Tham Chiếu Nhanh

**45 quy tắc** với các tiền tố:
- `async-*` - Loại bỏ waterfall
- `bundle-*` - Tối ưu hóa bundle
- `server-*` - Hiệu suất server
- `client-*` - Data fetching client
- `rerender-*` - Tối ưu re-render
- `rendering-*` - Hiệu suất rendering
- `js-*` - Hiệu suất JavaScript
- `advanced-*` - Các pattern nâng cao

## Cách Dùng

Kích hoạt khi viết, review, hoặc refactor code React/Next.js.

## Prompt Mẫu

- "Review component này để tìm vấn đề hiệu suất"
- "Tối ưu hóa logic data fetching này"
- "Tại sao trang này tải chậm?"
- "Giảm kích thước bundle của tính năng này"
- "Sửa các re-renders không cần thiết trong form này"
- "Triển khai data fetching song song cho trang này"

## Cách Sử Dụng

Mỗi file quy tắc chứa:
- Giải thích ngắn gọn tại sao nó quan trọng
- Ví dụ code không đúng với giải thích
- Ví dụ code đúng với giải thích
- Ngữ cảnh bổ sung và tài liệu tham chiếu

Duyệt các quy tắc riêng lẻ tại: `rules/async-parallel.md`, `rules/bundle-barrel-imports.md`, v.v.

## Điểm Khác Biệt

Đây không phải là các mẹo React chung — đây là các pattern đã được chứng minh từ các nhóm đang ship các ứng dụng hiệu suất cao ở quy mô lớn. Các quy tắc được ưu tiên theo tác động thực tế đến Core Web Vitals và trải nghiệm người dùng, không phải tầm quan trọng lý thuyết.

## Skills Liên Quan

- [Cook](/vi/docs/engineer/skills/cook) - Để triển khai tính năng với các pattern này
- [Web Testing](/vi/docs/engineer/skills/web-testing) - Để kiểm thử hiệu suất và Core Web Vitals
