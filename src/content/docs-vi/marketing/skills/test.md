---
lang: vi
title: "ckm:test"
description: "Chạy kiểm thử UI và kiểm tra workflow"
section: marketing
kit: marketing
category: skills
order: 47
---

# Test

> Kiểm thử tự động cho landing pages, email workflows và marketing automation pipelines.

## Kỹ Năng Này Làm Gì

Skill `ckm:test` chạy kiểm thử tự động để đảm bảo các thành phần marketing hoạt động đúng — từ UI landing page, form submission, email delivery đến automation workflow. Phát hiện lỗi trước khi ra mắt chiến dịch.

Bao gồm kiểm thử giao diện với Playwright, kiểm tra link hỏng, validate email templates và test API integrations.

## Bắt Đầu Nhanh

```
/ckm:test
```

Kiểm thử trang cụ thể:

```
/ckm:test Kiểm tra landing page campaign Q2 — form, CTA, mobile responsive
```

## Tính Năng Chính

- **UI testing**: Kiểm tra landing pages, forms, CTAs với Playwright
- **Link validation**: Phát hiện link hỏng trong email và landing pages
- **Email preview**: Xem trước email trên các email clients
- **Workflow testing**: Validate automation trigger và sequence
- **Performance check**: Đo tốc độ tải trang và Core Web Vitals

## Ví Dụ Sử Dụng

**Test trước launch:**
```
/ckm:test pre-launch Kiểm tra toàn diện landing page và email trước khi ra mắt campaign ngày mai
```

**Kiểm tra form:**
```
/ckm:test form Kiểm tra form đăng ký — validation, submission, confirmation email
```

**Smoke test:**
```
/ckm:test smoke Chạy smoke test nhanh các trang chính sau deploy mới
```

## Liên Quan

- [ckm:campaign](/vi/docs/marketing/skills/campaign) - Danh sách kiểm tra ra mắt
- [ckm:funnel](/vi/docs/marketing/skills/funnel) - Tối ưu hóa phễu
- [ckm:analyze](/vi/docs/marketing/skills/analyze) - Phân tích sau test
