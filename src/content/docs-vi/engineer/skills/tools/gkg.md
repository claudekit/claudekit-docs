---
title: "GitLab Knowledge Graph"
description: "Phân tích semantic code với AST parsing cho go-to-definition, find-usages và architecture visualization"
section: engineer
kit: engineer
category: skills
order: 29
lang: vi
---

Engine phân tích semantic code sử dụng AST parsing và KuzuDB graph database. Cung cấp khả năng code navigation giống IDE cho AI assistants.

## Skill Này Làm Gì

GitLab Knowledge Graph (GKG) skill cung cấp khả năng hiểu code semantic thông qua abstract syntax tree parsing và lưu trữ graph database. Nó mang đến cho ClaudeKit các khả năng giống IDE: go-to-definition, find-all-usages, impact analysis và architecture visualization.

Hãy nghĩ về nó như việc có một LSP server cho AI assistant của bạn—khi hỏi "function này được dùng ở đâu?" bạn nhận được câu trả lời chính xác trên toàn bộ codebase, không phải kết quả grep.

## Khi Nào Sử Dụng

- Tìm tất cả usages của function/class trong codebase
- Go-to-definition cho symbols
- Impact analysis trước khi refactor
- Generate architecture diagrams
- RAG-enhanced code understanding

**Dùng repomix thay thế** cho: quick context dumps, hỗ trợ mọi ngôn ngữ, remote repos, đếm token.

## Khả Năng Cốt Lõi

- Index repositories với AST parsing
- Semantic search trên codebases
- Cross-file reference tracking
- Symbol definition lookup
- Impact analysis cho refactoring
- Architecture diagram generation
- HTTP API và MCP integration

## Hỗ Trợ Ngôn Ngữ

| Ngôn Ngữ | Cross-file Refs |
|------------|-----------------|
| Ruby | ✅ Full |
| Java | ✅ Full |
| Kotlin | ✅ Full |
| Python | 🚧 Đang phát triển |
| TypeScript | 🚧 Đang phát triển |
| JavaScript | 🚧 Đang phát triển |

## Bắt Đầu Nhanh

```bash
# Index repo hiện tại
gkg index

# Start server (cho API/MCP)
gkg server start

# Stop trước khi re-index
gkg server stop
```

## Sử Dụng

Kích hoạt khi cần phân tích semantic code, đánh giá impact hoặc hiểu architecture.

## Ví Dụ Prompts

- "Tìm tất cả nơi mà function `authenticate` được gọi"
- "Hiển thị định nghĩa của User class"
- "Cái gì sẽ bị hỏng nếu tôi thay đổi API signature này?"
- "Generate architecture diagram của authentication module"
- "File nào import utility function này?"

## Workflows Cốt Lõi

### Index và Query
```bash
gkg index /path/to/project --stats
gkg server start
# Query qua HTTP API tại http://localhost:27495
```

### Tìm Symbol Usages
1. Index project: `gkg index`
2. Start server: `gkg server start`
3. Dùng MCP tool `get_references` hoặc HTTP API `/api/graph/search`

### Impact Analysis
1. Index các repos bị ảnh hưởng
2. Query `get_references` cho các symbols đã thay đổi
3. Review tất cả call sites trước khi refactor

## Ràng Buộc Chính

- Phải stop server trước khi re-index
- Yêu cầu Git repository đã được khởi tạo
- Ngôn ngữ chưa được kết nối giữa các repos (chưa)
- TS/JS/Python cross-file refs chưa hoàn thiện

## Điểm Khác Biệt

GKG cung cấp hiểu biết semantic, không phải text matching. Nó biết sự khác biệt giữa function definition và variable cùng tên. Kết quả: code navigation chính xác mở rộng được cho large codebases.

## Trạng Thái

Public beta | Yêu cầu Git repository | Storage: `~/.gkg/`
