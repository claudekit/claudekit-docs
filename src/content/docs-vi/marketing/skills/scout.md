---
lang: vi
title: "ckm:scout"
description: "Quét codebase nhanh với nhiều agent song song — phân tích cấu trúc, tìm patterns và tạo báo cáo codebase."
section: marketing
kit: marketing
category: skills
order: 101
---

# `ckm:scout`

> Khám phá codebase lớn trong vài giây với agent song song chạy đồng thời trên nhiều phần code.

## Kỹ Năng Này Làm Gì

Skill `ckm:scout` spawn nhiều subagent song song để quét và phân tích codebase. Thay vì đọc tuần tự từng file, nhiều agent đọc đồng thời các phần khác nhau và tổng hợp findings. Phù hợp để hiểu nhanh codebase mới hoặc lớn.

## Bắt Đầu Nhanh

```
/ckm:scout
```

Hoặc chỉ định phạm vi:

```
/ckm:scout Quét toàn bộ src/ và tạo báo cáo tổng quan kiến trúc
```

## Tính Năng Chính

- **Parallel scanning**: Nhiều agent đọc đồng thời — nhanh hơn 5-10x so với tuần tự
- **Pattern detection**: Phát hiện anti-patterns, code smells, deprecated usage
- **Architecture mapping**: Tạo sơ đồ phụ thuộc module và luồng dữ liệu
- **Summary report**: Tổng hợp findings theo mức độ ưu tiên
- **Targeted search**: Tìm kiếm cụ thể (security issues, TODO comments, unused code)

## Ví Dụ Sử Dụng

**Khám phá codebase mới:**
```
/ckm:scout Tôi vừa join dự án này — tóm tắt kiến trúc, stack và conventions
```

**Tìm vấn đề bảo mật:**
```
/ckm:scout Quét toàn bộ code để tìm hardcoded secrets, SQL injection risks và XSS vulnerabilities
```

**Phân tích tech debt:**
```
/ckm:scout Tìm tất cả TODO/FIXME comments và deprecated API calls trong codebase
```

**Trước khi refactor:**
```
/ckm:scout Phân tích module auth/ — tìm dependencies, callers và potential breaking changes
```

## Cấu Trúc Báo Cáo Scout

```markdown
## Scout Report — [Tên Dự Án]

### Tổng Quan
- Stack: Next.js 14, TypeScript, PostgreSQL
- Files: 342 | LOC: ~18,500 | Test coverage: 67%

### Kiến Trúc
[Sơ đồ module và dependencies]

### Findings
#### Critical
- [ ] Hardcoded API key trong src/config.ts:23
#### Warning
- [ ] 15 TODO comments cần xử lý
#### Info
- [ ] Deprecated `getServerSideProps` — có thể migrate sang App Router
```

## Liên Quan

- [ckm:repomix](/vi/docs/marketing/skills/repomix) - Đóng gói repo cho context LLM
- [ckm:analyze](/vi/docs/marketing/skills/analyze) - Phân tích chuyên sâu sau khi scout
