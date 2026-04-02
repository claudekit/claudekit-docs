---
title: "ReviewWeb - Phân Tích SEO"
description: "API phân tích SEO bao gồm tóm tắt AI, backlink, nghiên cứu từ khóa và chỉ số lưu lượng"
section: docs
category: reviewweb
order: 2
published: true
lang: vi
---

# ReviewWeb - SEO & Phân Tích AI

Tóm tắt nội dung hỗ trợ AI, thông tin chi tiết SEO và tiện ích URL.

**Base path:** `/api/proxy/reviewweb/v1`

## Tóm Tắt AI

### Tóm Tắt URL

```
POST /api/proxy/reviewweb/v1/summarize/url
```

```json
{
  "url": "https://example.com",
  "model": "gemini-1.5-flash"
}
```

Tóm tắt nội dung của một URL bằng AI.

### Tóm Tắt Website

```
POST /api/proxy/reviewweb/v1/summarize/website
```

```json
{
  "url": "https://example.com",
  "depth": 2,
  "model": "gemini-1.5-flash"
}
```

Tóm tắt toàn bộ website bằng cách thu thập các trang đến độ sâu đã chỉ định.

### Tóm Tắt Nhiều URL

```
POST /api/proxy/reviewweb/v1/summarize/urls
```

```json
{
  "urls": ["https://example.com", "https://another.com"],
  "model": "gemini-1.5-flash"
}
```

### AI Models Hiện Có

```
GET /api/proxy/reviewweb/v1/ai/models
```

Liệt kê các AI model hiện có cho tóm tắt.

## Thông Tin Chi Tiết SEO

### Phân Tích Backlink

```
POST /api/proxy/reviewweb/v1/seo-insights/backlinks
```

```json
{
  "domain": "example.com"
}
```

Phân tích hồ sơ backlink của domain bao gồm các domain giới thiệu, phân phối anchor text và chất lượng liên kết.

### Ý Tưởng Từ Khóa

```
POST /api/proxy/reviewweb/v1/seo-insights/keyword-ideas
```

```json
{
  "keyword": "ai tools",
  "country": "US"
}
```

Tạo đề xuất từ khóa dựa trên từ khóa gốc với dữ liệu khối lượng tìm kiếm và độ cạnh tranh.

### Độ Khó Từ Khóa

```
POST /api/proxy/reviewweb/v1/seo-insights/keyword-difficulty
```

```json
{
  "keyword": "ai tools",
  "country": "US"
}
```

Lấy điểm độ khó khi xếp hạng cho một từ khóa cụ thể (thang điểm 0-100).

### Phân Tích Lưu Lượng

```
POST /api/proxy/reviewweb/v1/seo-insights/traffic
```

```json
{
  "domain": "example.com"
}
```

Phân tích chỉ số lưu lượng domain bao gồm ước tính lượt truy cập hàng tháng, nguồn lưu lượng và xu hướng.

## Tiện Ích URL

### Kiểm Tra Trạng Thái URL

```
POST /api/proxy/reviewweb/v1/url/is-alive
```

```json
{
  "url": "https://example.com"
}
```

Kiểm tra xem URL có thể truy cập và trả về phản hồi hợp lệ hay không.

### Giải Quyết Chuyển Hướng

```
POST /api/proxy/reviewweb/v1/url/get-url-after-redirects
```

```json
{
  "url": "https://bit.ly/xxx"
}
```

Theo dõi các chuyển hướng và trả về URL đích cuối cùng.

## Ví Dụ: Kiểm Tra SEO Toàn Diện

```bash
# 1. Phân tích backlink
curl -X POST -H "X-API-Key: ck_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{"domain": "example.com"}' \
  "https://claudekit.cc/api/proxy/reviewweb/v1/seo-insights/backlinks"

# 2. Nghiên cứu từ khóa
curl -X POST -H "X-API-Key: ck_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{"keyword": "your product", "country": "US"}' \
  "https://claudekit.cc/api/proxy/reviewweb/v1/seo-insights/keyword-ideas"

# 3. Kiểm tra lưu lượng
curl -X POST -H "X-API-Key: ck_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{"domain": "example.com"}' \
  "https://claudekit.cc/api/proxy/reviewweb/v1/seo-insights/traffic"
```

## Bước Tiếp Theo

- [Thu Thập Web](/vi/docs/api/reviewweb/web-scraping) - API thu thập & trích xuất
- [VidCap API](/vi/docs/api/vidcap/youtube-processing) - Xử lý video
- [Giới Thiệu API](/vi/docs/api/overview/introduction) - Bắt đầu
