---
title: "ReviewWeb - Thu Thập Web"
description: "API thu thập web, trích xuất nội dung và chuyển đổi markdown cho dịch vụ ReviewWeb của ClaudeKit"
section: docs
category: reviewweb
order: 1
published: true
lang: vi
---

# ReviewWeb - Thu Thập Web & Trích Xuất

Dịch vụ thu thập web, trích xuất nội dung và chuyển đổi toàn diện.

**Base path:** `/api/proxy/reviewweb/v1`

## Kiểm Tra Trạng Thái

```
GET /api/proxy/reviewweb/v1/healthz
```

## Hồ Sơ Tài Khoản

```
GET /api/proxy/reviewweb/v1/profile
```

Lấy hồ sơ tài khoản và thống kê sử dụng.

## Thu Thập Web

### Thu Thập Một URL

```
POST /api/proxy/reviewweb/v1/scrape
```

```json
{
  "url": "https://example.com",
  "waitFor": "networkidle",
  "timeout": 30000
}
```

Trả về nội dung HTML thô của trang.

### Thu Thập Nhiều URL

```
POST /api/proxy/reviewweb/v1/scrape/urls
```

```json
{
  "urls": ["https://example.com", "https://another.com"]
}
```

### Bản Đồ Liên Kết

```
POST /api/proxy/reviewweb/v1/scrape/links-map
```

```json
{
  "url": "https://example.com",
  "depth": 1
}
```

Trích xuất tất cả các liên kết từ một trang với độ sâu thu thập có thể cấu hình.

## Trích Xuất Nội Dung

### Trích Xuất Nội Dung

```
POST /api/proxy/reviewweb/v1/extract
```

```json
{
  "url": "https://example.com"
}
```

Trích xuất nội dung chính (tiêu đề, văn bản, hình ảnh) từ một trang.

### Trích Xuất Nhiều Trang

```
POST /api/proxy/reviewweb/v1/extract/urls
```

```json
{
  "urls": ["https://example.com", "https://another.com"]
}
```

## Chuyển Đổi Markdown

### Chuyển Sang Markdown

```
POST /api/proxy/reviewweb/v1/convert/markdown
```

```json
{
  "url": "https://example.com"
}
```

Chuyển đổi bất kỳ trang web nào sang markdown sạch, thân thiện với LLM.

### Chuyển Đổi Nhiều Trang

```
POST /api/proxy/reviewweb/v1/convert/markdown/urls
```

```json
{
  "urls": ["https://example.com", "https://another.com"]
}
```

## Ảnh Chụp Màn Hình

### Chụp Màn Hình

```
POST /api/proxy/reviewweb/v1/screenshot
```

```json
{
  "url": "https://example.com",
  "fullPage": false,
  "width": 1920,
  "height": 1080
}
```

### Lấy Ảnh Chụp Màn Hình

```
GET /api/proxy/reviewweb/v1/screenshot/{id}
```

Lấy ảnh chụp màn hình đã chụp trước đó theo ID.

## Đánh Giá Website

### Tạo Đánh Giá

```
POST /api/proxy/reviewweb/v1/review
```

```json
{
  "url": "https://example.com"
}
```

Tạo đánh giá website toàn diện.

### Xem Đánh Giá

```
GET /api/proxy/reviewweb/v1/review/{reviewId}
```

## Bước Tiếp Theo

- [Phân Tích SEO](/vi/docs/api/reviewweb/seo-analysis) - Backlink, từ khóa, lưu lượng
- [VidCap API](/vi/docs/api/vidcap/youtube-processing) - Xử lý video
- [API Keys](/vi/docs/api/keys/api-keys) - Quản lý keys
