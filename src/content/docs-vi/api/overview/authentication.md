---
title: "Xác Thực & Mã Lỗi"
description: "Phương thức xác thực API, mã lỗi và giới hạn tốc độ cho các dịch vụ ClaudeKit API"
section: docs
category: overview
order: 2
published: true
lang: vi
---

# Xác Thực & Mã Lỗi

## Xác Thực

Tất cả các yêu cầu API đều yêu cầu xác thực qua một trong hai phương thức:

### API Key Header (Khuyến Nghị)

```bash
curl -H "X-API-Key: ck_live_your_key" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/info?url=..."
```

### Bearer Token

```bash
curl -H "Authorization: Bearer ck_live_your_key" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/info?url=..."
```

### Lấy API Key

1. Đăng nhập vào [ClaudeKit](https://claudekit.cc)
2. Truy cập [Bảng Điều Khiển API Keys](https://claudekit.cc/dashboard/api-keys)
3. Nhấn "Create API Key"
4. Lưu key an toàn (chỉ hiển thị một lần)

API keys có định dạng `ck_live_` theo sau là 32 ký tự ngẫu nhiên.

## Mã Lỗi

| Mã | HTTP Status | Mô tả |
|----|-------------|-------|
| `MISSING_API_KEY` | 401 | Không có API key trong request headers |
| `INVALID_API_KEY` | 401 | API key không hợp lệ hoặc đã hết hạn |
| `KEY_EXPIRED` | 401 | API key đã hết hạn |
| `KEY_REVOKED` | 401 | API key đã bị thu hồi |
| `LICENSE_REQUIRED` | 403 | Yêu cầu giấy phép ClaudeKit đang hoạt động |
| `RATE_LIMIT_EXCEEDED` | 429 | Quá nhiều yêu cầu, thử lại sau thời gian chờ |
| `INVALID_PATH` | 400 | Định dạng proxy path không hợp lệ |
| `UNKNOWN_SERVICE` | 404 | Dịch vụ yêu cầu không tìm thấy |

### Định Dạng Phản Hồi Lỗi

```json
{
  "error": "INVALID_API_KEY",
  "message": "The provided API key is invalid or has expired"
}
```

## Giới Hạn Tốc Độ

Các yêu cầu API bị giới hạn tốc độ theo từng API key. Giới hạn được thông báo qua response headers.

### Response Headers

| Header | Mô tả |
|--------|-------|
| `X-RateLimit-Limit` | Số yêu cầu tối đa mỗi giờ |
| `X-RateLimit-Remaining` | Số yêu cầu còn lại trong cửa sổ hiện tại |
| `X-RateLimit-Reset` | Unix timestamp khi cửa sổ được đặt lại |

### Vượt Giới Hạn Tốc Độ

Khi bị giới hạn tốc độ, bạn nhận được phản hồi `429`:

```json
{
  "error": "RATE_LIMIT_EXCEEDED",
  "retryAfter": 120
}
```

Trường `retryAfter` cho biết số giây cần chờ trước khi thử lại.

### Giới Hạn Mặc Định

| Gói | Yêu Cầu/Giờ |
|-----|-------------|
| Standard | 1,000 |
| Premium | 10,000 |

### Thực Tiễn Tốt Nhất

- **Lưu cache phản hồi** khi có thể để giảm lời gọi API
- **Áp dụng exponential backoff** khi thử lại sau lỗi giới hạn tốc độ
- **Theo dõi mức sử dụng** qua [Bảng Điều Khiển API Keys](https://claudekit.cc/dashboard/api-keys)
- **Sử dụng key rotation** để xoay vòng keys mà không bị gián đoạn

## Bước Tiếp Theo

- [Quản Lý API Keys](/vi/docs/api/keys/api-keys) - Tạo và quản lý keys
- [VidCap API](/vi/docs/api/vidcap/youtube-processing) - Các endpoint xử lý video
- [ReviewWeb API](/vi/docs/api/reviewweb/web-scraping) - Các endpoint thu thập web
