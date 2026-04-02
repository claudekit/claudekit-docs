---
title: "API Keys Management"
description: "Create, list, rotate, revoke, and manage ClaudeKit API keys for service authentication"
section: docs
category: keys
order: 1
published: true
---

# API Keys Management

Manage your API keys for authenticating with ClaudeKit services.

## Create API Key

```
POST /api/keys
```

**Auth:** Session cookie (logged-in user)

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

**Errors:** 400 (name required, 1-100 chars), 401 (unauthorized), 403 (license required)

## List API Keys

```
GET /api/keys
```

**Auth:** Session cookie. Admin can use `?viewAs={userId}`.

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

## Get API Key Details

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

## Delete API Key

```
DELETE /api/keys/{id}
```

**Response (200):**
```json
{ "success": true }
```

## Rotate API Key

```
POST /api/keys/{id}/rotate
```

Generates a new key with a 24-hour grace period for the old key.

**Response (200):**
```json
{
  "key": "ck_live_new_xxxx...",
  "message": "New key created. Old key valid for 24 hours (grace period).",
  "gracePeriodHours": 24
}
```

**Errors:** 400 (cannot rotate inactive key), 404 (key not found)

## Revoke API Key

```
POST /api/keys/{id}/revoke
```

Immediately invalidates the key with no grace period.

**Response (200):**
```json
{
  "success": true,
  "message": "API key revoked immediately. No grace period."
}
```

## Get Usage Statistics

```
GET /api/keys/{id}/usage?days=7
```

**Query:** `days` (1-30, default 7)

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

## Validate API Key

```
POST /api/keys/validate
```

**Headers:** `X-API-Key` or `Authorization: Bearer`

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

## Key Security

- Keys are stored as SHA-256 hashes with AES-256-GCM encryption
- Key prefix `ck_live_` is stored separately for display
- Full key is shown only once at creation time
- Use [key rotation](/docs/api/keys/api-keys#rotate-api-key) for zero-downtime key cycling
- Rate limits are enforced via Redis sliding window (1-hour window)

## Next Steps

- [Authentication](/docs/api/overview/authentication) - Auth methods and error codes
- [VidCap API](/docs/api/vidcap/youtube-processing) - Video processing
- [ReviewWeb API](/docs/api/reviewweb/web-scraping) - Web scraping
