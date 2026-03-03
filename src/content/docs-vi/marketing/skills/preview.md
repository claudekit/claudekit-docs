---
lang: vi
title: "ckm:preview"
description: "Xem trước tệp markdown, thư mục kế hoạch"
section: marketing
kit: marketing
category: skills
order: 43
---

# ckm:preview

> Xem trước file markdown và kế hoạch dự án ngay trong terminal hoặc trình duyệt.

## Kỹ Năng Này Làm Gì

Skill `ckm:preview` render file markdown thành HTML có định dạng đẹp, hỗ trợ Mermaid.js diagrams và mở trực tiếp trong trình duyệt. Đặc biệt hữu ích khi xem báo cáo, kế hoạch chiến dịch hay tài liệu kỹ thuật có biểu đồ.

Hỗ trợ xem đơn file, toàn bộ thư mục kế hoạch hoặc tạo slides trình bày từ markdown.

## Bắt Đầu Nhanh

```
/ckm:preview plan.md
```

Xem toàn bộ thư mục kế hoạch:

```
/ckm:preview plans/q2-campaign/
```

## Tính Năng Chính

- **Markdown rendering**: Render đẹp với syntax highlighting và tables
- **Mermaid.js support**: Hiển thị diagrams, flowcharts, Gantt charts
- **Slides mode**: Chuyển markdown thành slide deck trình bày
- **ASCII mode**: Hiển thị diagrams trong terminal (không cần browser)
- **Auto-reload**: Cập nhật khi file thay đổi

## Ví Dụ Sử Dụng

**Xem báo cáo:**
```
/ckm:preview reports/campaign-q1-analysis.md
```

**Xem với chú thích:**
```
/ckm:preview --explain reports/funnel-analysis.md Giải thích các biểu đồ trong báo cáo này
```

**Tạo slides:**
```
/ckm:preview --slides plans/product-launch/plan.md
```

**ASCII mode cho terminal:**
```
/ckm:preview --ascii plans/architecture.md
```

## Liên Quan

- [ckm:slides](/vi/docs/marketing/skills/slides) - Tạo slides thuyết trình
- [ckm:plan](/vi/docs/marketing/skills/plan) - Tạo kế hoạch có diagrams
- [ckm:docs](/vi/docs/marketing/skills/docs) - Quản lý tài liệu
