---
title: "GitLab Knowledge Graph"
description: "Semantic code analysis with AST parsing for go-to-definition, find-usages, and architecture visualization"
section: engineer
kit: engineer
category: skills
order: 29
---

Semantic code analysis engine using AST parsing and KuzuDB graph database. Enables IDE-like code navigation for AI assistants.

## What This Skill Does

The GitLab Knowledge Graph (GKG) skill provides semantic code understanding through abstract syntax tree parsing and graph database storage. It gives ClaudeKit IDE-like capabilities: go-to-definition, find-all-usages, impact analysis, and architecture visualization.

Think of it as having an LSP server for your AI assistant—asking "where is this function used?" gets you precise answers across the entire codebase, not grep results.

## When to Use

- Find all usages of a function/class across codebase
- Go-to-definition for symbols
- Impact analysis before refactoring
- Generate architecture diagrams
- RAG-enhanced code understanding

**Use repomix instead** for: quick context dumps, any-language support, remote repos, token counting.

## Core Capabilities

- Index repositories with AST parsing
- Semantic search across codebases
- Cross-file reference tracking
- Symbol definition lookup
- Impact analysis for refactoring
- Architecture diagram generation
- HTTP API and MCP integration

## Language Support

| Language | Cross-file Refs |
|----------|-----------------|
| Ruby | ✅ Full |
| Java | ✅ Full |
| Kotlin | ✅ Full |
| Python | 🚧 In progress |
| TypeScript | 🚧 In progress |
| JavaScript | 🚧 In progress |

## Quick Start

```bash
# Index current repo
gkg index

# Start server (for API/MCP)
gkg server start

# Stop before re-indexing
gkg server stop
```

## Usage

Activate when needing semantic code analysis, impact assessment, or architecture understanding.

## Example Prompts

- "Find all places where the `authenticate` function is called"
- "Show me the definition of the User class"
- "What would break if I change this API signature?"
- "Generate an architecture diagram of the authentication module"
- "Which files import this utility function?"

## Core Workflows

### Index and Query
```bash
gkg index /path/to/project --stats
gkg server start
# Query via HTTP API at http://localhost:27495
```

### Find Symbol Usages
1. Index project: `gkg index`
2. Start server: `gkg server start`
3. Use MCP tool `get_references` or HTTP API `/api/graph/search`

### Impact Analysis
1. Index affected repos
2. Query `get_references` for changed symbols
3. Review all call sites before refactoring

## Key Constraints

- Must stop server before re-indexing
- Requires initialized Git repository
- Languages not connected across repos (yet)
- TS/JS/Python cross-file refs incomplete

## What Makes This Different

GKG provides semantic understanding, not text matching. It knows the difference between a function definition and a variable with the same name. The result: precise code navigation that scales to large codebases.

## Status

Public beta | Requires Git repository | Storage: `~/.gkg/`
