---
title: "Kiến Trúc Hệ Thống"
description: "Kiến trúc domain-driven modular của ClaudeKit CLI: các lớp, patterns, bảo mật, và hiệu suất."
section: cli
order: 12
lang: vi
---

# Kiến Trúc Hệ Thống

> ClaudeKit CLI sử dụng thiết kế domain-driven modular với facade patterns. Các concerns tách biệt thành CLI infrastructure, phase-handler commands, domain logic, services, và utilities.

## Tổng Quan Các Lớp

```
┌────────────────────────────────────┐
│    Giao Diện (CLI/Terminal)        │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│   CLI Layer (config, registry)     │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│ Commands (init, new, skills, etc.) │
│ + 3–8 phase handlers per command   │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│  Domains (config, github, skills,  │
│  health-checks, installation, ui)  │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│ Services (file-ops, pkg-installer, │
│ transformers, manifest operations) │
└───────────────┬────────────────────┘
                │
┌───────────────▼────────────────────┐
│ Shared Utils (logger, path-        │
│ resolver, safe-prompts, terminal)  │
└────────────────────────────────────┘
```

## Patterns Kiến Trúc

### Facade Pattern
Mỗi domain expose một file facade duy nhất re-export public API, ẩn submodules nội bộ, và cung cấp interface tương thích ngược.

### Phase Handler Pattern
Commands phức tạp dùng orchestrator điều phối các phase handler riêng biệt. Mỗi handler sở hữu một trách nhiệm (~50–100 LOC) và testable độc lập.

- **`init`** — 8 phases: options-resolver, selection, download, migration, merge, conflict, transform, post-install
- **`new`** — 3 phases: directory-setup, project-creation, post-setup

### Context-Driven Flow
Mỗi command duy trì context object xuyên suốt tất cả phases. Shared state cho phép atomic operations và rollback khi thất bại.

## Domains

| Domain | Trách nhiệm |
|--------|-------------|
| `config/` | Generator, manager, validator; settings merger với conflict resolution |
| `github/` | Octokit wrapper cho releases và auth (chỉ GitHub CLI); asset selection |
| `health-checks/` | Checkers song song cho system, auth, GitHub API, ClaudeKit, platform, network |
| `installation/` | Streaming downloader; ZIP/TAR extraction với bảo vệ path-traversal và 500MB bomb |
| `skills/` | Detection, customization scanning, migration với backup và rollback |
| `ui/` | Prompts cho kit/version selection; ownership display |
| `versioning/` | Version checker với cache 7 ngày; kit version UI với beta filtering |

## Services

| Service | Trách nhiệm |
|---------|-------------|
| `file-operations/` | Manifest reader/writer multi-kit; file ownership tracker |
| `package-installer/` | Cài Node, Python, system dependencies; Gemini MCP linker |
| `transformers/` | `/ck:` command prefix applier; folder path transformer |

## Migration Idempotent (`ck migrate`)

Pipeline reconciliation 3 pha an toàn cho thực thi lặp lại:

1. **RECONCILE** — Pure function, không I/O. Tạo `ReconcilePlan` từ source items + registry + target state. 8 trường hợp: install, update, skip, conflict, delete, rename, path-migration, shared-skip.
2. **EXECUTE** — Áp dụng plan. Interactive conflict resolution với diff preview. Cập nhật Registry v3.0 với SHA-256 checksums mới.
3. **REPORT** — Hiển thị plan kiểu Terraform. Dashboard summary qua API.

## Mô Hình Bảo Mật

### Ngăn Path Traversal
- Canonical path resolution trên tất cả archive extraction
- Reject paths chứa `..`
- Xác minh target nằm trong base directory mong đợi

### Ngăn Archive Bomb
- Kích thước extraction tối đa: 500MB
- Validation path trong streaming extraction
- Size kiểm tra incremental, không phải post-extract

### Xác Thực
- Chỉ GitHub CLI — không prompt raw token
- OS keychain integration cho lưu trữ an toàn
- Token sanitization trong tất cả log output

### Files Được Bảo Vệ (luôn bỏ qua)
`.env`, `.env.local`, `*.key`, `*.pem`, `node_modules/`, `.git/`, `dist/`, `build/`, `CLAUDE.md`, `.mcp.json`

## Kiến Trúc Multi-Kit

Installer hỗ trợ cài song song Engineer + Marketing kit:

- **Selective Merger** — So sánh hybrid size+checksum. Phát hiện shared files, ngăn ghi đè phiên bản mới hơn cross-kit.
- **Copy Executor** — Theo dõi shared files qua `setMultiKitContext()`.
- **Manifest Reader** — `findFileInInstalledKits()` tìm file qua tất cả kits đã cài.

## Hiệu Suất

- **Streaming downloads** — không buffer toàn bộ file vào memory
- **Parallel release fetching** và version checks
- **In-memory token caching** qua các requests
- **SHA-256 hashing** cho change detection không cần đọc toàn file
- **Release cache** — 1hr TTL (cấu hình qua `CK_CACHE_TTL`)
- **Version check cache** — 7-day TTL

## Liên Quan

- [Cài Đặt](/vi/docs/cli/installation)
- [Cấu Hình](/vi/docs/cli/configuration)
- [Tự Động Nội Dung](/vi/docs/cli/content-automation)
- [Watch - Tự Động Phản Hồi Issue](/vi/docs/cli/watch)
