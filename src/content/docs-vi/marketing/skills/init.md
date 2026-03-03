---
lang: vi
title: "ckm:init"
description: "Khởi tạo dự án marketing với thiết lập đầy đủ"
section: marketing
kit: marketing
category: skills
order: 38
---

# Init

> Khởi động dự án marketing mới với thiết lập hoàn chỉnh trong vài phút thay vì vài giờ.

## Kỹ Năng Này Làm Gì

Skill `ckm:init` tự động hóa toàn bộ quá trình thiết lập dự án marketing mới — từ cấu trúc thư mục, file cấu hình, tài liệu brand guidelines đến kết nối API và scripts. Một lệnh thay thế hàng chục bước thủ công.

Kết quả là dự án sẵn sàng hoạt động với đầy đủ context cho AI agents làm việc hiệu quả ngay từ đầu.

## Bắt Đầu Nhanh

```
/ckm:init
```

Hoặc với thông tin dự án:

```
/ckm:init Khởi tạo dự án marketing cho SaaS startup trong lĩnh vực HR tech
```

## Tính Năng Chính

- **Cấu trúc thư mục chuẩn**: `docs/`, `assets/`, `scripts/`, `references/`
- **Brand guidelines template**: File mẫu để điền thông tin thương hiệu
- **Cấu hình API**: `.env` template với tất cả biến môi trường cần thiết
- **Scripts cơ bản**: Các script thường dùng được cài sẵn
- **CLAUDE.md dự án**: Ngữ cảnh AI-ready cho tất cả agents

## Ví Dụ Sử Dụng

**Khởi tạo từ đầu:**
```
/ckm:init Tạo dự án marketing mới cho thương hiệu thời trang cao cấp, tập trung Instagram và TikTok
```

**Thêm component vào dự án có sẵn:**
```
/ckm:init --add-analytics Thêm tích hợp GA4 và dashboard analytics vào dự án hiện tại
```

**Review sau khởi tạo:**
```
/ckm:init --status Kiểm tra trạng thái thiết lập và những gì còn cần cấu hình
```

## Liên Quan

- [ckm:docs](/vi/docs/marketing/skills/docs) - Quản lý tài liệu dự án
- [ckm:brand](/vi/docs/marketing/skills/brand) - Thiết lập brand guidelines
- [ckm:hub](/vi/docs/marketing/skills/hub) - Trung tâm điều phối marketing
