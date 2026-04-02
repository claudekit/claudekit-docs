---
title: "Quản Lý API Keys"
description: "Tạo, liệt kê, xoay vòng, thu hồi và quản lý API keys ClaudeKit để xác thực dịch vụ"
section: docs
category: keys
order: 1
published: true
lang: vi
---

# Quản Lý API Keys

Quản lý API keys để xác thực với các dịch vụ ClaudeKit.

## Tạo API Key

```
POST /api/keys
```

**Xác thực:** Session cookie (người dùng đã đăng nhập)

**Request:**
```json
{ "name": "My API Key" }
```

**Response (201):**
```json
{
  "id": "uuid",
  "key": "ck_live_xxxx...",
  "name": "My API Key",
  "message": "Save this key securely. It will not be shown again."
}
```

**Lỗi:** 400 (tên bắt buộc, 1-100 ký tự), 401 (chưa xác thực), 403 (yêu cầu giấy phép)

## Liệt Kê API Keys

```
GET /api/keys
```

**Xác thực:** Session cookie. Admin có thể dùng `?viewAs={userId}`.

**Response (200):**
```json
{
  "keys": [{
    "id": "uuid",
    "name": "My API Key",
    "prefix": "ck_live",
    "keyPreview": "ck_live...****",
    "rateLimit": 1000,
    "isActive": true,
    "lastUsedAt": "2024-01-01T00:00:00Z",
    "usageCount": 150,
    "expiresAt": null,
    "createdAt": "2024-01-01T00:00:00Z"
  }]
}
```

## Xem Chi Tiết API Key

```
GET /api/keys/{id}
```

**Response (200):**
```json
{
  "key": {
    "id": "uuid",
    "name": "My API Key",
    "prefix": "ck_live",
    "rateLimit": 1000,
    "isActive": true,
    "rotatedAt": null,
    "gracePeriodEndsAt": null,
    "lastUsedAt": "2024-01-01T00:00:00Z",
    "usageCount": 150,
    "expiresAt": null,
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

## Xóa API Key

```
DELETE /api/keys/{id}
```

**Response (200):**
```json
{ "success": true }
```

## Xoay Vòng API Key

```
POST /api/keys/{id}/rotate
```

Tạo key mới với thời gian ân hạn 24 giờ cho key cũ.

**Response (200):**
```json
{
  "key": "ck_live_new_xxxx...",
  "message": "New key created. Old key valid for 24 hours (grace period).",
  "gracePeriodHours": 24
}
```

**Lỗi:** 400 (không thể xoay vòng key không hoạt động), 404 (không tìm thấy key)

## Thu Hồi API Key

```
POST /api/keys/{id}/revoke
```

Vô hiệu hóa key ngay lập tức, không có thời gian ân hạn.

**Response (200):**
```json
{
  "success": true,
  "message": "API key revoked immediately. No grace period."
}
```

## Xem Thống Kê Sử Dụng

```
GET /api/keys/{id}/usage?days=7
```

**Query:** `days` (1-30, mặc định 7)

**Response (200):**
```json
{
  "dailyUsage": [{ "date": "2024-01-01", "count": 50 }],
  "totalUsageCount": 500,
  "rateLimit": {
    "limit": 1000,
    "used": 25,
    "remaining": 975,
    "windowHours": 1
  }
}
```

## Xác Thực API Key

```
POST /api/keys/validate
```

**Headers:** `X-API-Key` hoặc `Authorization: Bearer`

**Response (200):**
```json
{
  "valid": true,
  "userId": "uuid",
  "rateLimit": 1000,
  "isActive": true
}
```

**Response (401):**
```json
{ "valid": false, "error": "Invalid or expired API key" }
```

## Bảo Mật Key

- Keys được lưu trữ dưới dạng hash SHA-256 với mã hóa AES-256-GCM
- Tiền tố key `ck_live_` được lưu riêng để hiển thị
- Key đầy đủ chỉ hiển thị một lần khi tạo
- Dùng [xoay vòng key](/vi/docs/api/keys/api-keys#xoay-vòng-api-key) để thay key không bị gián đoạn
- Giới hạn tốc độ được thực thi qua cửa sổ trượt Redis (cửa sổ 1 giờ)

## Bước Tiếp Theo

- [Xác Thực](/vi/docs/api/overview/authentication) - Phương thức xác thực và mã lỗi
- [VidCap API](/vi/docs/api/vidcap/youtube-processing) - Xử lý video
- [ReviewWeb API](/vi/docs/api/reviewweb/web-scraping) - Thu thập web
