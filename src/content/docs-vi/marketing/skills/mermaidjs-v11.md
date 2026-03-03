---
lang: vi
title: "ckm:mermaidjs-v11"
description: "Tạo sơ đồ với cú pháp Mermaid.js v11 — flowchart, sequence, gantt, er diagram và nhiều loại sơ đồ khác."
section: marketing
kit: marketing
category: skills
order: 92
---

# ckm:mermaidjs-v11

> Tạo sơ đồ trực quan chuyên nghiệp với cú pháp Mermaid.js v11 chính xác và nhất quán.

## Kỹ Năng Này Làm Gì

Skill `ckm:mermaidjs-v11` đảm bảo sử dụng cú pháp Mermaid.js v11 đúng chuẩn khi tạo sơ đồ. Bao gồm quy tắc mới của v11, các loại sơ đồ được hỗ trợ và cách tránh lỗi cú pháp phổ biến.

## Bắt Đầu Nhanh

```
/ckm:mermaidjs-v11
```

Hoặc yêu cầu sơ đồ cụ thể:

```
/ckm:mermaidjs-v11 Tạo flowchart cho quy trình onboarding người dùng
```

## Các Loại Sơ Đồ Hỗ Trợ

### Flowchart
```
flowchart TD
    A[Đăng ký] --> B{Xác minh email?}
    B -- Có --> C[Kích hoạt tài khoản]
    B -- Không --> D[Gửi lại email]
```

### Sequence Diagram
```
sequenceDiagram
    participant U as Người dùng
    participant A as API
    participant DB as Database
    U->>A: POST /login
    A->>DB: Kiểm tra thông tin
    DB-->>A: Kết quả
    A-->>U: JWT token
```

### Gantt Chart
```
gantt
    title Lịch Triển Khai Q1
    dateFormat YYYY-MM-DD
    section Phát triển
    Thiết kế API    :2025-01-01, 7d
    Triển khai      :2025-01-08, 14d
```

### ER Diagram
```
erDiagram
    USER ||--o{ ORDER : "đặt hàng"
    ORDER ||--|{ ITEM : "chứa"
```

## Thay Đổi Trong v11

- Cú pháp `flowchart` thay thế `graph` (vẫn tương thích ngược)
- Hỗ trợ `block` diagram mới
- Cải thiện `mindmap` và `timeline`
- Thuộc tính `classDef` mở rộng hơn

## Liên Quan

- [ckm:preview](/vi/docs/marketing/skills/preview) - Xem trước sơ đồ Mermaid trong trình duyệt
- [ckm:docs](/vi/docs/marketing/skills/docs) - Tích hợp sơ đồ vào tài liệu
