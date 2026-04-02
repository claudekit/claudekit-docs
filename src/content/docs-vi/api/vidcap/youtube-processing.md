---
title: "VidCap - Xử Lý YouTube"
description: "API xử lý video YouTube hỗ trợ AI để lấy metadata, phụ đề, tóm tắt và ảnh chụp màn hình"
section: docs
category: vidcap
order: 1
published: true
lang: vi
---

# VidCap - Xử Lý Video YouTube

Dịch vụ xử lý video YouTube hỗ trợ AI. Trích xuất metadata, phụ đề, tóm tắt AI, ảnh chụp màn hình và nhiều hơn nữa.

**Base path:** `/api/proxy/vidcap/v1`

## Kiểm Tra Trạng Thái

```
GET /api/proxy/vidcap/v1/healthz
```

Trả về trạng thái dịch vụ.

## AI Models

```
GET /api/proxy/vidcap/v1/ai/models
```

Liệt kê các AI model hiện có cho tóm tắt và phân tích.

## Thông Tin Video

```
GET /api/proxy/vidcap/v1/youtube/info?url={youtube_url}
```

Trả về metadata video bao gồm tiêu đề, thời lượng, thumbnail, thông tin kênh.

```bash
curl -H "X-API-Key: ck_live_xxx" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/info?url=https://youtube.com/watch?v=dQw4w9WgXcQ"
```

## Định Dạng Media

```
GET /api/proxy/vidcap/v1/youtube/media?url={youtube_url}
```

Trả về các tùy chọn chất lượng video/audio và định dạng hiện có.

## Tải Xuống

```
GET /api/proxy/vidcap/v1/youtube/download?url={youtube_url}&format={format}
```

Trả về URL tải xuống. Tham số `format` là tùy chọn.

## Phụ Đề

```
GET /api/proxy/vidcap/v1/youtube/caption?url={youtube_url}&lang={lang}
```

Trích xuất phụ đề/bản ghi video. `lang` mặc định là `en`.

```bash
curl -H "X-API-Key: ck_live_xxx" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/caption?url=https://youtube.com/watch?v=xxx&lang=vi"
```

## Tóm Tắt AI

```
GET /api/proxy/vidcap/v1/youtube/summary?url={youtube_url}
```

Tạo tóm tắt video bằng AI sử dụng model mặc định.

### Tóm Tắt Tùy Chỉnh

```
POST /api/proxy/vidcap/v1/youtube/summary-custom
```

**Body:**
```json
{
  "url": "https://youtube.com/watch?v=...",
  "prompt": "Summarize the key technical points",
  "model": "gemini-1.5-flash"
}
```

Tạo tóm tắt AI tùy chỉnh với prompt và lựa chọn model riêng.

## Bài Viết

```
GET /api/proxy/vidcap/v1/youtube/article?url={youtube_url}
```

Chuyển đổi nội dung video sang định dạng bài viết.

## Ảnh Chụp Màn Hình

### Chụp Một Khung Hình

```
GET /api/proxy/vidcap/v1/youtube/screenshot?url={youtube_url}&timestamp={seconds}
```

Chụp một khung hình tại mốc thời gian cụ thể. `timestamp` mặc định là 0.

### Chụp Nhiều Khung Hình

```
GET /api/proxy/vidcap/v1/youtube/screenshot-multiple?url={youtube_url}&count={count}
```

Chụp nhiều ảnh màn hình tại các khoảng thời gian phân phối đều.

## Bình Luận

```
GET /api/proxy/vidcap/v1/youtube/comments?url={youtube_url}&limit={limit}
```

Lấy bình luận video. `limit` là tùy chọn.

## Tìm Kiếm

```
GET /api/proxy/vidcap/v1/youtube/search?q={query}&limit={limit}
```

Tìm kiếm video YouTube theo chương trình.

```bash
curl -H "X-API-Key: ck_live_xxx" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/search?q=claude+ai+tutorial&limit=10"
```

## Bước Tiếp Theo

- [ReviewWeb API](/vi/docs/api/reviewweb/web-scraping) - Thu thập web & SEO
- [API Keys](/vi/docs/api/keys/api-keys) - Quản lý API keys
- [Xác Thực](/vi/docs/api/overview/authentication) - Xác thực và giới hạn tốc độ
