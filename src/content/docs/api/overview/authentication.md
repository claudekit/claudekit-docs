---
title: "Authentication & Error Codes"
description: "API authentication methods, error codes, and rate limiting for ClaudeKit API services"
section: docs
category: overview
order: 2
published: true
---

# Authentication & Error Codes

## Authentication

All API requests require authentication via one of two methods:

### API Key Header (Preferred)

```bash
curl -H "X-API-Key: ck_live_your_key" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/info?url=..."
```

### Bearer Token

```bash
curl -H "Authorization: Bearer ck_live_your_key" \
  "https://claudekit.cc/api/proxy/vidcap/v1/youtube/info?url=..."
```

### Getting an API Key

1. Log in to [ClaudeKit](https://claudekit.cc)
2. Go to [API Keys Dashboard](https://claudekit.cc/dashboard/api-keys)
3. Click "Create API Key"
4. Save the key securely (shown only once)

API keys use the format `ck_live_` followed by 32 random characters.

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `MISSING_API_KEY` | 401 | No API key provided in request headers |
| `INVALID_API_KEY` | 401 | API key is invalid or expired |
| `KEY_EXPIRED` | 401 | API key has expired |
| `KEY_REVOKED` | 401 | API key has been revoked |
| `LICENSE_REQUIRED` | 403 | Active ClaudeKit license required |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests, retry after cooldown |
| `INVALID_PATH` | 400 | Invalid proxy path format |
| `UNKNOWN_SERVICE` | 404 | Requested service not found |

### Error Response Format

```json
{
  "error": "INVALID_API_KEY",
  "message": "The provided API key is invalid or has expired"
}
```

## Rate Limits

API requests are rate-limited per API key. Limits are communicated via response headers.

### Response Headers

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Maximum requests per hour |
| `X-RateLimit-Remaining` | Requests remaining in current window |
| `X-RateLimit-Reset` | Unix timestamp when the window resets |

### Rate Limit Exceeded

When rate limited, you receive a `429` response:

```json
{
  "error": "RATE_LIMIT_EXCEEDED",
  "retryAfter": 120
}
```

The `retryAfter` field indicates seconds to wait before retrying.

### Default Limits

| Plan | Requests/Hour |
|------|--------------|
| Standard | 1,000 |
| Premium | 10,000 |

### Best Practices

- **Cache responses** when possible to reduce API calls
- **Implement exponential backoff** for retries on rate limit errors
- **Monitor usage** via the [API Keys Dashboard](https://claudekit.cc/dashboard/api-keys)
- **Use key rotation** to cycle keys without downtime

## Next Steps

- [API Keys Management](/docs/api/keys/api-keys) - Create and manage keys
- [VidCap API](/docs/api/vidcap/youtube-processing) - Video processing endpoints
- [ReviewWeb API](/docs/api/reviewweb/web-scraping) - Web scraping endpoints
