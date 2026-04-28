---
title: "ck:graphify"
description: "Build queryable knowledge graphs from code, docs, papers, images for architecture understanding"
section: engineer
kit: engineer
category: skills
order: 42
---

# Graphify

Turn any folder of code, documentation, papers, or images into a queryable knowledge graph. Uses tree-sitter AST for code (20+ languages), Whisper for audio/video, and LLM agents for documents.

Think of it as building a semantic index of your codebase—one you can search by concept instead of grepping for filenames.

## What This Skill Does

Graphify builds interactive knowledge graphs that reveal architecture, dependencies, and cross-file relationships. Instead of jumping between files, ask the graph "what calls this function?" or "which modules depend on X?" and get visual connection maps.

The skill produces three artifacts: an interactive HTML visualization, a structured markdown report highlighting key insights, and a persistent JSON graph for programmatic queries.

## Quick Start

```bash
# Build knowledge graph from current directory
graphify .

# Build from specific path
graphify /path/to/project

# Watch mode — auto-rebuild on file changes
graphify . --watch

# Expose graph as MCP server for Claude to query
python -m graphify.serve graphify-out/graph.json
```

## When to Use Graphify

**Before planning** — Build the graph first to understand architecture, then plan with visual context.

**Architecture analysis** — Find god nodes (most-connected concepts), surprising dependencies, and architectural anti-patterns.

**Codebase navigation** — Prefer structure-based navigation over grepping when entering unfamiliar projects.

**Token-efficient context** — 71.5x fewer tokens than raw files — crucial for large codebases.

**Cross-domain understanding** — Combine code AST + documents + papers + images for complete context.

## Output Artifacts

| File | Purpose |
|------|---------|
| `graphify-out/graph.html` | Interactive visualization with search, filtering, community detection |
| `graphify-out/GRAPH_REPORT.md` | God nodes, surprising connections, architecture insights, suggested questions |
| `graphify-out/graph.json` | Persistent graph for queries across sessions |
| `graphify-out/cache/` | SHA256-based incremental updates (only reprocesses changed files) |

## Interactive Visualization

Open `graphify-out/graph.html` in your browser to:

- **Search for concepts** — Type a class name, function, or topic
- **Filter by community** — See related concepts grouped automatically
- **Explore neighbors** — Click a node to see everything connected
- **Query shortest path** — Find the connection route between two concepts

## Supported Input Types

### Code Files (Tree-Sitter AST)

20+ languages supported with deterministic parsing:

Python, JavaScript, TypeScript, Go, Rust, Java, C, C++, Ruby, C#, Kotlin, Scala, PHP, Swift, Lua, Zig, PowerShell, Elixir, Objective-C, Julia

For each language, the graph extracts:
- Function and class definitions
- Imports and dependencies
- Call chains and inheritance hierarchies
- Variable assignments and mutations
- Type annotations (where available)

**No API calls for code** — Tree-sitter runs locally. File contents never leave your machine.

### Audio & Video (Whisper)

Transcribe podcasts, talks, and videos:

```bash
# Builds knowledge graph from audio transcript + timestamps
graphify ./videos/*.mp4 --watch
```

**Local transcription** — Uses Whisper on-device. No files sent to external APIs.

### Documents & Papers (LLM-Powered)

PDFs, Markdown, Office documents — LLM agents extract key concepts, relationships, and summaries:

```bash
# Extract from all PDFs and markdown
graphify ./docs ./papers/*.pdf
```

**Semantic extraction** — Processes via your configured model provider (Claude/OpenAI).

### Images (Vision Models)

Screenshots, diagrams, photographs — extract text and describe visual elements:

```bash
graphify ./screenshots/*.png
```

## Graph Report Insights

The auto-generated `GRAPH_REPORT.md` includes:

- **God nodes** — Most-connected concepts in the graph (likely core abstractions)
- **Surprising connections** — Unexpected dependencies or architectural patterns
- **Community detection** — Automatically grouped concepts and modules
- **Suggested questions** — Intelligent queries to explore based on graph structure

## Relationship Confidence Tags

Every relationship is tagged by how it was discovered:

| Tag | Meaning | Reliability |
|-----|---------|------------|
| `EXTRACTED` | Directly from AST (imports, calls, inheritance) | 100% |
| `INFERRED` | LLM-derived from semantic analysis | 85–95% |
| `AMBIGUOUS` | Uncertain — requires human verification | <85% |

## MCP Server Mode

Expose the graph as an MCP server so Claude can query it directly:

```bash
# Start server from graph file
python -m graphify.serve graphify-out/graph.json
```

### Available MCP Tools

| Tool | Query Type |
|------|-----------|
| `query_graph` | Search for concepts by name or type |
| `get_node` | Details of a specific node (definition, references) |
| `get_neighbors` | Find all connected concepts |
| `shortest_path` | Find minimum hops between two concepts |

### Claude Code Integration

Add to `.claude/.mcp.json`:

```json
{
  "mcpServers": {
    "graphify": {
      "command": "python",
      "args": ["-m", "graphify.serve", "graphify-out/graph.json"]
    }
  }
}
```

Then query within Claude Code:

```
Use the graphify MCP tool to find how AuthService connects to UserRepository
```

## Installation

```bash
# Core install (code parsing only)
pip install graphifyy

# Download language grammars
graphify install

# With MCP server support
pip install 'graphifyy[mcp]'

# Full install (MCP + PDF + video + office + community detection)
pip install 'graphifyy[all]'
```

**Note:** Package name is `graphifyy` (double-y) on PyPI.

**Requirements:** Python 3.10+

## Architecture: Three-Pass Processing

### Pass 1: AST Extraction (Local, Deterministic)

Tree-sitter parses code in 20+ languages. Extraction is:
- **Deterministic** — same input → same output every time
- **Local** — no API calls, file contents stay private
- **Fast** — parallel processing across files

### Pass 2: Audio/Video (Local via Whisper)

Transcription runs on-device:
- **Private** — audio never uploaded
- **Timestamped** — preserves temporal markers
- **Fallback-safe** — missing audio → gap in graph, not a blocker

### Pass 3: Semantic Extraction (API-Based)

LLM agents process documents, papers, and images:
- **Parallel** — multiple documents processed simultaneously
- **Configurable** — choose model, context window, temperature
- **Privacy-aware** — send only what's necessary

## Incremental Updates

Graph rebuilds are optimized:
- **SHA256 file hashing** — unchanged files skipped
- **Caching** — previous results reused
- **Partial updates** — only changed files reprocessed

Perfect for watch mode during active development.

## Privacy & Data Handling

| Input Type | Processing | Privacy |
|-----------|-----------|---------|
| Code files | Tree-sitter (local) | Private |
| Audio/video | Whisper (local) | Private |
| Documents | LLM API (configurable) | Depends on provider |
| Images | Vision model (configurable) | Depends on provider |

**No data leaves your machine unless you explicitly send it via LLM API calls.**

## Workflow Integration

### Before Planning

```bash
graphify /path/to/target
# Read GRAPH_REPORT.md for architecture insights
/ck:plan "Implement feature X"  # now informed by graph
```

### With Scout

Use graphify for high-level structure, scout for specific file details:

```bash
graphify .                      # build architecture graph
/ck:scout "auth module"          # find specific files
```

### Active Development

```bash
graphify . --watch              # rebuild graph as you work
# Use graph.html as live architecture reference
```

## Limitations

- **First build** on large codebases can be slow (AST parsing + LLM calls)
- **Semantic extraction quality** depends on the underlying model
- **Neo4j integration** requires separate setup (`pip install 'graphifyy[neo4j]'`)
- **Leiden community detection** requires `pip install 'graphifyy[leiden]'`

For very large codebases (1000+ files), consider:
- Scoping to a subdirectory (`graphify ./src/core`)
- Running in watch mode to incrementally build the graph
- Using the cache (`graphify-out/cache/`) for faster rebuilds

## Related Skills

- [Scout](/docs/engineer/skills/scout) — Quick file search for specific capabilities
- [Repomix](/docs/engineer/skills/repomix) — Full context dump for raw codebase data
- [GKG](/docs/engineer/skills/gkg) — Semantic symbol navigation with go-to-definition
- [Plan](/docs/engineer/skills/ck-plan) — Plan implementation after understanding architecture

## Best Practices

**Build early** — Run graphify before planning complex features. Architecture understanding saves time.

**Use watch mode** — Enable `--watch` during exploratory coding to keep the graph fresh.

**Combine with scout** — Use graphify for overview, scout for drill-down into specific files.

**Export for sharing** — Copy `graphify-out/graph.html` and `GRAPH_REPORT.md` to share architecture with teammates.

**Verify ambiguous edges** — Relationships tagged `AMBIGUOUS` need human verification. Don't assume them without checking the code.

## Examples

### Understanding a Django Project

```bash
graphify . --watch
# Opens graph.html → see models, views, middleware connections
# GRAPH_REPORT.md → lists god nodes (core models, middleware)
```

### Mapping a Microservices Architecture

```bash
graphify ./services
# Graph shows service boundaries and external dependencies
# Shortest path queries reveal call chains across services
```

### Learning a Codebase Before Contributing

```bash
graphify /external/project
# Read GRAPH_REPORT.md for architecture
# Query graph for "where are authentication checks?"
# Browse visualizations to plan contribution
```
