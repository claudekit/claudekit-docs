---
lang: vi
title: "ckm:storage"
description: "Thao tác lưu trữ S3 - tải lên, đồng bộ, liệt kê"
section: marketing
kit: marketing
category: skills
order: 46
---

# ckm:storage

> Quản lý tài sản marketing trên S3-compatible storage — tải lên, đồng bộ, tìm kiếm và chia sẻ.

## Kỹ Năng Này Làm Gì

Skill `ckm:storage` tích hợp S3-compatible storage (AWS S3, Cloudflare R2, MinIO) để quản lý tài sản marketing. Tải lên ảnh, video, tài liệu; đồng bộ thư mục local với bucket; tạo signed URLs để chia sẻ.

Phù hợp cho team cần lưu trữ tập trung các tài sản sáng tạo, backup dữ liệu chiến dịch và phân phối file lớn.

## Bắt Đầu Nhanh

```
/ckm:storage
```

Tải lên file:

```
/ckm:storage upload assets/campaign/ → s3://my-bucket/campaigns/q2-2025/
```

## Tính Năng Chính

- **Upload/Download**: Tải lên và tải xuống file đơn lẻ hoặc batch
- **Sync thư mục**: Đồng bộ hai chiều giữa local và S3
- **List và search**: Tìm kiếm tài sản theo tên, loại, ngày tạo
- **Signed URLs**: Tạo link chia sẻ có thời hạn cho tài sản
- **Metadata**: Gán tags và metadata cho tổ chức tốt hơn

## Ví Dụ Sử Dụng

**Upload tài sản campaign:**
```
/ckm:storage upload Tải lên toàn bộ tài sản campaign Q2 vào bucket marketing-assets/q2-2025/
```

**Đồng bộ assets:**
```
/ckm:storage sync Đồng bộ thư mục assets/ local với s3://company-marketing/assets/
```

**Chia sẻ tài sản:**
```
/ckm:storage share banner-hero-v3.png Tạo link chia sẻ 7 ngày cho file banner
```

## Điều Kiện Tiên Quyết

Cấu hình trong `.env`:
```bash
S3_BUCKET=your-bucket-name
S3_REGION=ap-southeast-1
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
```

## Liên Quan

- [ckm:brand](/vi/docs/marketing/skills/brand) - Quản lý tài sản thương hiệu
- [ckm:init](/vi/docs/marketing/skills/init) - Thiết lập cấu hình storage
- [ckm:video](/vi/docs/marketing/skills/video) - Lưu trữ video marketing
