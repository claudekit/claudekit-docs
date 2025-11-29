---
title: /scout:ext
description: Khám phá codebase sử dụng công cụ agentic bên ngoài như Gemini CLI cho khả năng tìm kiếm nâng cao và context lớn
section: docs
category: commands/core
order: 71
published: true
---

# /scout:ext

Khám phá codebase với công cụ bên ngoài. Sử dụng Gemini CLI, Opencode, và agent Explore cho khả năng tìm kiếm nâng cao, đặc biệt cho codebase lớn vượt quá giới hạn context tiêu chuẩn.

## Cú pháp

```bash
/scout:ext [user-prompt] [scale]
```

## Khi nào sử dụng

- **Codebase lớn**: Dự án vượt quá cửa sổ context tiêu chuẩn
- **Tìm kiếm ngữ nghĩa**: Khi cần AI hiểu ngữ nghĩa
- **Truy vấn phức tạp**: Câu hỏi đa chiều về codebase
- **Khám phá song song**: Khi độ kỹ lưỡng quan trọng hơn tốc độ

## Ví dụ nhanh

```bash
/scout:ext [find all authentication implementations] 5
```

**Kết quả**:
```
Analyzing scale: 5 (Gemini CLI + Explore)

Dispatching tools...
→ Gemini CLI: Loading codebase context (1.2M tokens)
→ Explore Agent 1: src/auth/**
→ Explore Agent 2: src/middleware/**
→ Explore Agent 3: src/api/auth/**

Progress:
[██████████] Gemini CLI: Complete (45s)
[██████████] Explore 1: Complete (12s)
[██████████] Explore 2: Complete (8s)
[██████████] Explore 3: Complete (15s)

Aggregating results...

Report: plans/reports/scout-ext-251129.md
```

## Tham số

- `[user-prompt]`: Nội dung cần tìm kiếm (bắt buộc)
- `[scale]`: Độ kỹ lưỡng tìm kiếm 1-10 (tùy chọn, mặc định: 3)

## Lựa chọn công cụ theo Scale

| Scale | Công cụ sử dụng | Kích thước Context | Phù hợp cho |
|-------|-----------------|-------------------|-------------|
| 1-2 | Chỉ agent Explore | Tiêu chuẩn | Tìm kiếm nhanh |
| 3-5 | Gemini CLI + Explore | 2M tokens | Hầu hết dự án |
| 6-10 | Gemini + Opencode + Explore | 2M+ tokens | Codebase doanh nghiệp |

## Quy trình hoạt động

### Bước 1: Phân tích Scale

Xác định lựa chọn công cụ dựa trên tham số scale:

```
Scale: 5
→ Enable Gemini CLI (large context)
→ Enable Explore agents (parallel)
→ Skip Opencode (scale < 6)
```

### Bước 2: Chọn công cụ

**Gemini CLI**:
- Cửa sổ context 2M token
- Hiểu ngữ nghĩa code
- Phân tích quan hệ cross-file

**Opencode**:
- Tìm kiếm powered by LLM thay thế
- Góc nhìn khác về codebase
- Bổ sung cho Gemini

**Agent Explore**:
- Nhiều tìm kiếm song song
- Khám phá theo thư mục
- Pattern matching nhanh

### Bước 3: Dispatch song song

Tất cả công cụ được chọn chạy đồng thời:

```
Launching parallel tools...

[Gemini CLI] Processing entire codebase...
[Explore 1] Scanning src/auth/**
[Explore 2] Scanning src/api/**
[Explore 3] Scanning lib/**
```

### Bước 4: Tổng hợp kết quả

Kết hợp phát hiện từ tất cả công cụ:

```
Results aggregation:

Gemini CLI found:
- JWT implementation in src/auth/jwt.ts
- Session handling in src/auth/session.ts
- OAuth2 providers in src/auth/providers/

Explore agents found:
- Middleware auth in src/middleware/auth.ts
- API route guards in src/api/auth/guards.ts
- Token refresh in lib/token.ts

Combined: 6 unique auth implementations
```

### Bước 5: Tạo báo cáo

Tạo báo cáo toàn diện:

```
Report saved: plans/reports/scout-ext-251129.md

Contents:
1. Search Query
2. Tools Used
3. Findings by Tool
4. Combined Results
5. Recommendations
```

## Vị trí lưu trữ

**Với kế hoạch đang hoạt động**:
```
{active-plan}/reports/scout-ext-YYMMDD.md
```

**Không có kế hoạch đang hoạt động**:
```
plans/reports/scout-ext-YYMMDD.md
```

## Ưu điểm so với /scout

| Tính năng | /scout | /scout:ext |
|-----------|--------|------------|
| Kích thước context | Tiêu chuẩn | 2M tokens |
| Công cụ bên ngoài | Không | Gemini, Opencode |
| Tìm kiếm ngữ nghĩa | Cơ bản | Nâng cao |
| Codebase lớn | Hạn chế | Xuất sắc |
| Công cụ song song | Chỉ nội bộ | Nhiều bên ngoài |

## Ví dụ đầy đủ

### Kịch bản: Hiểu Authentication trong Monorepo lớn

```bash
/scout:ext [how does authentication work across all services?] 7
```

**Thực thi**:

```
Scale: 7 (Full external toolset)

Launching tools:
→ Gemini CLI: Loading monorepo (1.8M tokens)
→ Opencode: Analyzing architecture
→ Explore 1: services/auth/**
→ Explore 2: services/api/**
→ Explore 3: packages/shared/auth/**
→ Explore 4: libs/security/**

Progress:
[██████████] Explore 1: Complete (10s)
[██████████] Explore 2: Complete (12s)
[██████████] Explore 3: Complete (8s)
[██████████] Explore 4: Complete (15s)
[██████████] Opencode: Complete (35s)
[██████████] Gemini CLI: Complete (52s)

═══════════════════════════════════════
        AGGREGATED FINDINGS
═══════════════════════════════════════

Authentication Architecture:
- Central auth service at services/auth/
- Shared JWT library in packages/shared/auth/
- Per-service middleware integration

Implementation Details:
1. JWT tokens (access + refresh)
2. OAuth2 providers (Google, GitHub)
3. API key authentication for services
4. Session fallback for legacy clients

Cross-Service Flow:
User → API Gateway → Auth Service → JWT → Target Service

Files Identified: 23
Services Involved: 5
Shared Libraries: 2

Report: plans/reports/scout-ext-251129.md
═══════════════════════════════════════
```

## Hướng dẫn Scale

### Scale 1-2: Tìm kiếm nhanh

```bash
/scout:ext [find database config] 1
```
- Chỉ dùng agent Explore
- Kết quả nhanh (~10-20s)
- Tốt cho tìm kiếm file cụ thể

### Scale 3-5: Tìm kiếm tiêu chuẩn

```bash
/scout:ext [understand the API architecture] 4
```
- Gemini CLI + Explore
- Cân bằng độ sâu và tốc độ
- Tốt cho hầu hết truy vấn

### Scale 6-10: Phân tích sâu

```bash
/scout:ext [comprehensive security audit of auth flow] 8
```
- Tất cả công cụ được kích hoạt
- Độ kỹ lưỡng tối đa
- Tốt nhất cho phân tích phức tạp

## Giới hạn

### Timeout

Mỗi công cụ có timeout 5 phút:

```
Tool timeout: 5 minutes

⚠️ Gemini CLI timed out
Partial results collected from other tools.
```

### Khả dụng công cụ bên ngoài

Yêu cầu công cụ bên ngoài được cấu hình:

```bash
# Công cụ phải được cài đặt và cấu hình
gemini --version  # Gemini CLI
opencode --version  # Opencode
```

### Chi phí API

Công cụ bên ngoài có thể phát sinh chi phí API:

```
Gemini CLI: Sử dụng credit Gemini API
Opencode: Sử dụng LLM API đã cấu hình
```

## Thực hành tốt nhất

### Phù hợp Scale với Codebase

```bash
# Dự án nhỏ (< 50 files)
/scout:ext [query] 2

# Dự án trung bình (50-500 files)
/scout:ext [query] 4

# Dự án lớn (500+ files)
/scout:ext [query] 7
```

### Cụ thể

```bash
# Tốt: Truy vấn cụ thể
/scout:ext [find all places where user permissions are checked] 5

# Kém hiệu quả: Mơ hồ
/scout:ext [security stuff] 5
```

## Các lệnh liên quan

- [/scout](/vi/docs/commands/core/scout) - Khám phá codebase tiêu chuẩn
- [/review:codebase](/vi/docs/commands/core/review-codebase) - Phân tích code toàn diện
- [/ask](/vi/docs/commands/core/ask) - Câu hỏi kiến trúc

---

**Điểm chính**: `/scout:ext` mở rộng khám phá codebase với công cụ AI bên ngoài, cho phép tìm kiếm ngữ nghĩa trên codebase lớn vượt quá giới hạn context tiêu chuẩn.
