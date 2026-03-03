---
title: "ck:gkg"
description: "Phân tích code ngữ nghĩa với AST parsing để thực hiện go-to-definition, find-usages, và trực quan hóa kiến trúc"
section: engineer
kit: engineer
category: skills
order: 50
lang: vi
---

# GKG

Engine phân tích code ngữ nghĩa sử dụng AST parsing và cơ sở dữ liệu đồ thị KuzuDB. Cho phép điều hướng code như IDE cho các AI assistant.

## Skill Này Làm Gì

Skill GitLab Knowledge Graph (GKG) cung cấp hiểu biết ngữ nghĩa về code thông qua phân tích cú pháp abstract syntax tree và lưu trữ cơ sở dữ liệu đồ thị. Nó cung cấp cho ClaudeKit các khả năng giống IDE: go-to-definition, find-all-usages, phân tích tác động, và trực quan hóa kiến trúc.

Hãy coi nó như việc có một LSP server cho AI assistant của bạn — hỏi "hàm này được dùng ở đâu?" sẽ cho bạn câu trả lời chính xác trên toàn codebase, không phải kết quả grep.

## Khi Nào Nên Dùng

- Tìm tất cả nơi sử dụng hàm/class trên codebase
- Go-to-definition cho symbols
- Phân tích tác động trước khi refactor
- Tạo sơ đồ kiến trúc
- Hiểu code nâng cao với RAG

**Dùng repomix thay thế** cho: context dumps nhanh, hỗ trợ mọi ngôn ngữ, remote repos, đếm tokens.

## Khả Năng Cốt Lõi

- Index repositories với AST parsing
- Tìm kiếm ngữ nghĩa trên codebases
- Theo dõi tham chiếu cross-file
- Tra cứu định nghĩa symbol
- Phân tích tác động để refactor
- Tạo sơ đồ kiến trúc
- Tích hợp HTTP API và MCP

## Hỗ Trợ Ngôn Ngữ

| Ngôn ngữ | Cross-file Refs |
|----------|-----------------|
| Ruby | ✅ Đầy đủ |
| Java | ✅ Đầy đủ |
| Kotlin | ✅ Đầy đủ |
| Python | 🚧 Đang phát triển |
| TypeScript | 🚧 Đang phát triển |
| JavaScript | 🚧 Đang phát triển |

## Bắt Đầu Nhanh

```bash
# Index repo hiện tại
gkg index

# Khởi động server (cho API/MCP)
gkg server start

# Dừng trước khi re-index
gkg server stop
```

## Cách Dùng

Kích hoạt khi cần phân tích code ngữ nghĩa, đánh giá tác động, hoặc hiểu kiến trúc.

## Prompt Mẫu

- "Tìm tất cả nơi hàm `authenticate` được gọi"
- "Cho tôi xem định nghĩa của class User"
- "Điều gì sẽ bị hỏng nếu tôi thay đổi API signature này?"
- "Tạo sơ đồ kiến trúc của module authentication"
- "Các file nào import hàm tiện ích này?"

## Các Quy Trình Cốt Lõi

### Index và Query
```bash
gkg index /path/to/project --stats
gkg server start
# Query qua HTTP API tại http://localhost:27495
```

### Tìm Nơi Sử Dụng Symbol
1. Index project: `gkg index`
2. Khởi động server: `gkg server start`
3. Dùng MCP tool `get_references` hoặc HTTP API `/api/graph/search`

### Phân Tích Tác Động
1. Index các repos bị ảnh hưởng
2. Query `get_references` cho các symbols đã thay đổi
3. Xem xét tất cả call sites trước khi refactor

## Ràng Buộc Chính

- Phải dừng server trước khi re-index
- Yêu cầu Git repository đã được khởi tạo
- Các ngôn ngữ chưa được kết nối giữa các repos (hiện tại)
- TS/JS/Python cross-file refs chưa hoàn chỉnh

## Điểm Khác Biệt

GKG cung cấp hiểu biết ngữ nghĩa, không phải khớp văn bản. Nó biết sự khác biệt giữa định nghĩa hàm và biến có cùng tên. Kết quả: điều hướng code chính xác có thể mở rộng cho codebases lớn.

## Trạng Thái

Beta công khai | Yêu cầu Git repository | Lưu trữ: `~/.gkg/`
