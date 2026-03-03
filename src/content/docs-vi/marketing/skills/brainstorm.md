---
lang: vi
title: "ckm:brainstorm"
description: "Brainstorm giải pháp với phân tích đánh đổi — khám phá phương án, so sánh và đưa ra quyết định có căn cứ."
section: marketing
kit: marketing
category: skills
order: 112
---

# ckm:brainstorm

> Nhanh chóng khám phá không gian giải pháp, so sánh phương án và đưa ra quyết định có căn cứ trước khi triển khai.

## Kỹ Năng Này Làm Gì

Skill `ckm:brainstorm` kích hoạt chế độ khám phá có cấu trúc: đặt câu hỏi làm rõ, đề xuất 2-3 phương án với phân tích đánh đổi, và chờ xác nhận trước khi tiến hành. KHÔNG triển khai ngay — luôn xác nhận hướng đi trước.

Khác với `ckm:brainstorming` (phiên cộng tác dài), `ckm:brainstorm` tập trung vào việc nhanh chóng đến quyết định.

## Bắt Đầu Nhanh

```
/ckm:brainstorm
```

Hoặc mô tả vấn đề:

```
/ckm:brainstorm Cần xây dựng hệ thống notification — push, email hay in-app?
```

## Quy Trình

1. **Làm rõ** — Đặt 1-2 câu hỏi quan trọng nhất
2. **Đề xuất** — 2-3 phương án với ưu/nhược điểm
3. **Khuyến nghị** — Phương án phù hợp nhất với context
4. **Xác nhận** — Chờ người dùng phê duyệt trước khi tiếp tục

## Ví Dụ Output

```markdown
## Brainstorm: Hệ Thống Notification

### Câu hỏi làm rõ
Quy mô người dùng dự kiến? Real-time hay có thể delay vài phút?

### Phương Án A: In-app + WebSocket
**Ưu**: Real-time, không cần opt-in, UX liền mạch
**Nhược**: Chỉ hoạt động khi user đang online
**Phù hợp**: User base nhỏ (<10K), cần real-time

### Phương Án B: Email + Webhook
**Ưu**: Đến user khi offline, dễ implement
**Nhược**: Độ trễ, email fatigue
**Phù hợp**: Thông báo quan trọng, không cần instant

### Phương Án C: Multi-channel (in-app + email)
**Ưu**: Tốt nhất cả hai thế giới
**Nhược**: Phức tạp hơn, cần user preferences
**Phù hợp**: Production app với nhiều notification types

**Khuyến nghị**: Phương án A cho MVP → thêm email sau

---
Bạn muốn tiến hành với phương án nào?
```

## Ví Dụ Sử Dụng

**Quyết định kiến trúc:**
```
/ckm:brainstorm SQL vs NoSQL cho ứng dụng social platform
```

**Lựa chọn công nghệ:**
```
/ckm:brainstorm Authentication: JWT self-hosted vs Auth0 vs Clerk?
```

**Chiến lược marketing:**
```
/ckm:brainstorm Kênh marketing đầu tiên cho SaaS B2B mới ra mắt
```

## Liên Quan

- [ckm:brainstorming](/vi/docs/marketing/skills/brainstorming) - Phiên brainstorm cộng tác dài hơn
- [ckm:plan](/vi/docs/marketing/skills/plan) - Tạo kế hoạch triển khai sau khi quyết định
- [ckm:sequential-thinking](/vi/docs/marketing/skills/sequential-thinking) - Phân tích từng bước
