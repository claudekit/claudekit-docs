---
lang: vi
title: "ckm:persona"
description: "Quản lý và tạo chân dung khách hàng"
section: marketing
kit: marketing
category: skills
order: 41
---

# `ckm:persona`

> Xây dựng và quản lý chân dung khách hàng chi tiết để cá nhân hóa mọi hoạt động marketing.

## Kỹ Năng Này Làm Gì

Skill `ckm:persona` giúp bạn tạo và duy trì customer personas dựa trên dữ liệu thực — không phải giả định. Mỗi persona bao gồm demographics, goals, pain points, hành vi mua hàng và kênh ưa thích.

Personas được lưu trong dự án và tự động đưa vào ngữ cảnh khi tạo nội dung, email hay chiến dịch — đảm bảo mọi thứ đều phù hợp với đối tượng mục tiêu.

## Bắt Đầu Nhanh

```
/ckm:persona
```

Tạo persona từ dữ liệu:

```
/ckm:persona create Tạo persona cho segment "Startup Founder 25-35 tuổi, B2B SaaS, team 5-20 người"
```

## Tính Năng Chính

- **Tạo persona từ dữ liệu**: Dựa trên GA4, CRM, survey, phỏng vấn
- **Profile đầy đủ**: Demographics, psychographics, hành vi, kênh ưa thích
- **Journey mapping**: Hành trình khách hàng theo từng persona
- **Content alignment**: Đề xuất nội dung phù hợp cho từng persona
- **Cập nhật định kỳ**: Phát hiện khi persona thực tế đã thay đổi

## Ví Dụ Sử Dụng

**Tạo persona mới:**
```
/ckm:persona create Dựa trên dữ liệu khách hàng Q1, tạo 3 personas chính cho sản phẩm HR SaaS
```

**Review và cập nhật:**
```
/ckm:persona update Cập nhật persona "Marketing Manager" dựa trên survey NPS mới nhất
```

**Áp dụng vào nội dung:**
```
/ckm:persona apply Viết email cho persona "Startup Founder" tập trung vào pain point tiết kiệm thời gian
```

## Liên Quan

- [ckm:write](/vi/docs/marketing/skills/write) - Viết nội dung theo persona
- [ckm:email](/vi/docs/marketing/skills/email) - Email cá nhân hóa theo persona
- [ckm:funnel](/vi/docs/marketing/skills/funnel) - Phễu theo hành trình persona
