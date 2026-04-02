---
title: "Giới Thiệu API"
description: "ClaudeKit API cung cấp dịch vụ xử lý video và thu thập dữ liệu web qua lớp proxy thống nhất"
section: docs
category: overview
order: 1
published: true
lang: vi
---

# ClaudeKit API

> Dịch vụ API hỗ trợ AI qua lớp proxy thống nhất. Truy cập xử lý video và khả năng thu thập dữ liệu web/SEO thông qua hai dịch vụ tích hợp.

## Tổng Quan

ClaudeKit API cung cấp quyền truy cập vào hai dịch vụ mạnh mẽ:

| Dịch vụ | Mô tả | Khả năng |
|---------|-------|----------|
| **VidCap** | Xử lý video YouTube | Metadata, phụ đề, tóm tắt AI, ảnh chụp màn hình, tìm kiếm |
| **ReviewWeb** | Thu thập web & SEO | Scraping, trích xuất nội dung, chuyển đổi markdown, phân tích SEO |

## Base URL

```
https://claudekit.cc
```

Tất cả các yêu cầu API đều đi qua lớp proxy thống nhất tại `/api/proxy/{service}/{path}`.

## Các Dịch Vụ Hiện Có

### VidCap - Xử Lý Video

Phân tích video YouTube hỗ trợ AI:

- **Video Info** - Lấy metadata (tiêu đề, thời lượng, thumbnail)
- **Captions** - Trích xuất bản ghi trong nhiều ngôn ngữ
- **AI Summaries** - Tạo tóm tắt với prompt tùy chỉnh
- **Screenshots** - Chụp khung hình tại mốc thời gian cụ thể
- **Search** - Tìm kiếm video YouTube theo chương trình
- **Comments** - Lấy bình luận video

### ReviewWeb - Thu Thập Web & SEO

Bộ công cụ thu thập web và SEO toàn diện:

- **Web Scraping** - Thu thập một hoặc nhiều URL
- **Content Extraction** - Trích xuất nội dung chính từ trang
- **Markdown Conversion** - Chuyển đổi trang web sang markdown
- **AI Summaries** - Tóm tắt nội dung web bằng AI
- **SEO Insights** - Backlink, phân tích từ khóa, chỉ số lưu lượng
- **URL Utilities** - Kiểm tra trạng thái URL, xử lý chuyển hướng

## Bắt Đầu Nhanh

### 1. Lấy API Key

Tạo API key từ [Bảng Điều Khiển API Keys](https://claudekit.cc/dashboard/api-keys).

### 2. Thực Hiện Yêu Cầu Đầu Tiên

```bash
curl -H "X-API-Key: ck_live_your_key" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/info?url=https://youtube.com/watch?v=dQw4w9WgXcQ"
```

### 3. Khám Phá Tài Liệu

- [Xác Thực & Mã Lỗi](/vi/docs/api/overview/authentication) - Phương thức xác thực, lỗi, giới hạn tốc độ
- [Quản Lý API Keys](/vi/docs/api/keys/api-keys) - Tạo, xoay vòng, thu hồi keys
- [VidCap API](/vi/docs/api/vidcap/youtube-processing) - Xử lý video YouTube
- [ReviewWeb API](/vi/docs/api/reviewweb/web-scraping) - Thu thập web & trích xuất

## Định Dạng Proxy Service

```
GET/POST /api/proxy/{service}/{path}
```

**Headers:** `X-API-Key: your_key` hoặc `Authorization: Bearer your_key`

**Liệt kê các dịch vụ hiện có:**

```bash
GET /api/proxy/services
```

```json
{
  "services": [
    {
      "id": "vidcap",
      "name": "VidCap.xyz",
      "baseUrl": "https://vidcap.xyz/api",
      "timeout": 120000
    },
    {
      "id": "reviewweb",
      "name": "ReviewWeb.site",
      "baseUrl": "https://reviewweb.site/api",
      "timeout": 120000
    }
  ]
}
```

## Bước Tiếp Theo

- [Xác Thực](/vi/docs/api/overview/authentication) - Thiết lập xác thực
- [API Keys](/vi/docs/api/keys/api-keys) - Quản lý API keys
- [VidCap](/vi/docs/api/vidcap/youtube-processing) - Bắt đầu xử lý video
- [ReviewWeb](/vi/docs/api/reviewweb/web-scraping) - Bắt đầu thu thập web
