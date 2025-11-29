---
title: "Understanding Codebases with GitLab Knowledge Graph"
description: "Documentation for Understanding Codebases with GitLab Knowledge Graph"
section: workflows
category: workflows
published: true
lastUpdated: 2025-11-21
---

# GitLab Knowledge Graph MCP

GitLab Knowledge Graph is a powerful code analysis tool that creates a queryable map of your repositories. It enables deep codebase exploration, impact analysis, and AI-driven code understanding through the Model Context Protocol (MCP).

## What is GitLab Knowledge Graph?

GitLab Knowledge Graph (gkg) transforms your code into structured knowledge by:

1. **Scanning Code Structure**: Identifies files, directories, classes, functions, methods, and modules
2. **Extracting Relationships**: Discovers function calls, inheritance hierarchies, and dependencies
3. **Building Graph Database**: Stores everything in Kuzu (high-performance graph database) for fast queries
4. **Enabling AI Integration**: Provides MCP tools for AI agents to understand codebase deeply

**Key Benefits:**

- RAG (Retrieval-Augmented Generation) for code context
- Architecture visualization and dependency analysis
- Impact analysis before refactoring
- Intelligent code navigation and exploration

## Installation

### Install GitLab Knowledge Graph CLI

```bash
# One-line installation (Linux/macOS)
curl -fsSL https://gitlab.com/gitlab-org/rust/knowledge-graph/-/raw/main/install.sh | bash

# Add to PATH (if not already done)
export PATH="$HOME/.local/bin:$PATH"

# Verify installation
gkg --version
```

### Start the Server

```bash
# Start the knowledge graph server (runs on http://localhost:27495)
gkg server start

# In another terminal, index your project
gkg index /path/to/project
```

## How to Use GKG MCP

### 1. Index Your Project

Before using GKG, create the knowledge graph for your project:

```bash
# Index current directory
gkg index

# Or index a specific project
gkg index /path/to/your/project
```

This command:

- Discovers all Git repositories
- Parses code structure
- Extracts relationships
- Stores in local graph database

**Example output:**

```
✅ Workspace indexing completed in 12.34 seconds
Workspace Statistics:
- Projects indexed: 3
- Files processed: 1,247
- Code entities extracted: 5,832
- Relationships found: 12,156
```

### 2. Use GKG MCP Tools with ClaudeKit

Once indexed, use GKG MCP tools in your Claude Code sessions:

#### List All Projects

```bash
# See all indexed projects in knowledge graph
gkg_list_projects
```

Returns absolute paths to all indexed projects.

#### Search for Code Definitions

```bash
# Find function/class definitions
gkg_search_codebase_definitions \
  --project_absolute_path /path/to/project \
  --search_terms "MyFunction" "MyClass" "handleSubmit"
```

**Useful for:**

- Finding class definitions before refactoring
- Locating API endpoints
- Discovering utility functions
- Understanding code structure

**Returns:**

- Definition name and type (Function, Class, Method, etc.)
- File location and line numbers
- Fully qualified names
- Code context snippets

#### Get All References to a Symbol

```bash
# Find everywhere a function/class is used
gkg_get_references \
  --absolute_file_path /path/to/project/src/utils.ts \
  --definition_name calculateTotal
```

**Perfect for:**

- Impact analysis before changes
- Finding all callers of a function
- Dependency mapping
- Safe refactoring

**Returns:**

- All definitions that reference the symbol
- Reference type (CALLS, PropertyReference, etc.)
- File locations and line numbers
- Code context around each reference

#### Jump to Definition

```bash
# Go directly to function/method definition
gkg_get_definition \
  --absolute_file_path /path/to/file.ts \
  --line "const result = calculateTotal(items);" \
  --symbol_name calculateTotal
```

**Perfect for:**

- Understanding what a function does
- Verifying implementations
- Quick code exploration

**Returns:**

- Definition location (file path and line)
- Full code snippet
- Type of definition

#### Read Definition Bodies

```bash
# Get complete code of multiple definitions
gkg_read_definitions \
  --definitions "[
    {
      \"names\": [\"handleSubmit\", \"validateForm\"],
      \"file_path\": \"src/components/Form.tsx\"
    },
    {
      \"names\": [\"calculateTotal\"],
      \"file_path\": \"src/utils/math.ts\"
    }
  ]"
```

**Optimized for:**

- Reading multiple related functions
- Understanding function implementations
- Analyzing code patterns

**Returns:**

- Full definition bodies
- Qualified names
- Line ranges

#### Generate Repository Map

```bash
# Get compact overview of code structure
gkg_repo_map \
  --project_absolute_path /path/to/project \
  --relative_paths ["src/components", "src/utils/helpers.ts"] \
  --depth 2
```

**Useful for:**

- Understanding folder structure
- API-style mapping of codebase segments
- Token-efficient codebase overview
- Finding related files

**Returns:**

- Directory tree structure
- File listings with definitions
- Line ranges and context
- Token-optimized format

#### Rebuild Project Index

```bash
# Update knowledge graph after code changes
gkg_index_project \
  --project_absolute_path /path/to/project
```

Use after:

- Major file changes
- Adding/deleting files
- Architecture refactoring
- Long development sessions

## Common Workflows

### Refactoring with Impact Analysis

```bash
# 1. Find all references to function before changing
gkg_get_references \
  --absolute_file_path /path/to/project/src/api.ts \
  --definition_name fetchUserData

# 2. Review all call sites and understand impact

# 3. Make the change safely knowing full scope
```

### Onboarding: Understanding New Codebase

```bash
# 1. Get structure overview
gkg_repo_map \
  --project_absolute_path /path/to/project \
  --relative_paths ["src"] \
  --depth 2

# 2. Search for key components
gkg_search_codebase_definitions \
  --project_absolute_path /path/to/project \
  --search_terms "App" "Router" "Controller" "Service"

# 3. Explore connections between components
gkg_get_references \
  --absolute_file_path src/components/App.tsx \
  --definition_name App
```

### Feature Implementation

```bash
# 1. Find similar features/patterns
gkg_search_codebase_definitions \
  --project_absolute_path /path/to/project \
  --search_terms "Form" "Validation" "Submit"

# 2. Read implementation patterns
gkg_read_definitions \
  --definitions "[
    {
      \"names\": [\"UserForm\", \"validateEmail\"],
      \"file_path\": \"src/components/UserForm.tsx\"
    }
  ]"

# 3. Use patterns for new feature
```

### Bug Investigation

```bash
# 1. Search for error location
gkg_search_codebase_definitions \
  --project_absolute_path /path/to/project \
  --search_terms "handleError" "ErrorBoundary"

# 2. Find all references
gkg_get_references \
  --absolute_file_path src/components/ErrorHandler.tsx \
  --definition_name handleError

# 3. Understand error flow and dependencies
```

## MCP Tools Reference

### Tools Available via MCP

| Tool                          | Purpose                   | Use Case                           |
| ----------------------------- | ------------------------- | ---------------------------------- |
| `list_projects`               | Get indexed projects      | Know current project paths         |
| `search_codebase_definitions` | Find definitions by name  | Find functions, classes, constants |
| `get_references`              | Find all uses of symbol   | Impact analysis, refactoring       |
| `read_definitions`            | Read full definition code | Understand implementation          |
| `get_definition`              | Jump to definition        | Quick exploration                  |
| `repo_map`                    | Get structure overview    | Understand architecture            |
| `index_project`               | Rebuild index             | Update after changes               |

### Input Parameters

**project_absolute_path**

- Absolute filesystem path to project root
- Required for most tools
- Use `list_projects` to discover

**relative_paths** (for repo_map)

- Project-relative file/directory paths
- Can be multiple paths
- Example: `["src/components", "src/utils.ts"]`

**search_terms**

- Function/class/constant names to find
- Case-sensitive
- Supports partial matches
- Multiple terms in single call

**definition_name**

- Exact identifier name as it appears in code
- No namespace prefixes
- Used with file_path for precise location

**page** (pagination)

- Starting from 1
- Check `next_page` in response for more results
- Default: 1

## Best Practices

### 1. Always Index Before Exploring

```bash
# Stale index = inaccurate results
gkg index /path/to/project

# Then explore with confidence
gkg_search_codebase_definitions ...
```

### 2. Use Right Tool for Task

| Task                          | Tool                          |
| ----------------------------- | ----------------------------- |
| Find where function is called | `get_references`              |
| Understand implementation     | `read_definitions`            |
| Explore codebase structure    | `repo_map`                    |
| Quick definition lookup       | `get_definition`              |
| Find by name pattern          | `search_codebase_definitions` |

### 3. Pagination for Large Results

```bash
# If next_page > 1, more results available
response = gkg_search_codebase_definitions(
  search_terms=["handler"],
  page=1
)

if response.next_page:
  # Fetch page 2
  response2 = gkg_search_codebase_definitions(
    search_terms=["handler"],
    page=response.next_page
  )
```

### 4. Combine Tools for Depth

```bash
# Search → Read → Analyze Pattern

# 1. Find
search_results = search_codebase_definitions(terms=["FormHandler"])

# 2. Read full code
definitions = read_definitions(
  file_path=search_results[0].location.file
  names=["FormHandler"]
)

# 3. Find uses
references = get_references(
  file_path=search_results[0].location.file
  definition_name="FormHandler"
)
```

## Troubleshooting

### Knowledge Graph Not Finding Definitions

**Problem**: `search_codebase_definitions` returns no results

**Solutions:**

1. Ensure project is indexed: `gkg index /path/to/project`
2. Check exact naming (case-sensitive)
3. Verify project path is absolute
4. Try partial search terms
5. Check language is supported (Rust, TypeScript, Python, Ruby, Java, Kotlin)

### Server Not Running

**Problem**: Cannot connect to localhost:27495

**Solution:**

```bash
# Ensure server is running
gkg server start

# Check if running on different port
gkg server start --port 27495

# View logs for errors
gkg server logs
```

### Stale Results

**Problem**: Recent changes not showing up

**Solution:**

```bash
# Rebuild index
gkg index_project /path/to/project

# Or restart server
gkg server stop
gkg server start
```

## Integration with ClaudeKit

### Using GKG in `/code` Commands

```bash
# When implementing from plan, use GKG for context
/cook Add user authentication system

# Claude Code uses GKG to:
# 1. Search for existing auth patterns
# 2. Understand current architecture
# 3. Find integration points
# 4. Analyze impact of changes
```

### Using GKG in Refactoring

```bash
# Before major refactoring
/plan Refactor authentication module

# Claude Code uses GKG to:
# 1. Map all auth-related code
# 2. Find all usages
# 3. Identify dependencies
# 4. Suggest safe refactoring approach
```

## Example: Complete Workflow

```bash
# 1. Index the project
gkg index /Users/dev/my-app

# 2. Start exploring
gkg_search_codebase_definitions \
  --project_absolute_path /Users/dev/my-app \
  --search_terms "handleSubmit"

# 3. See where it's used
gkg_get_references \
  --absolute_file_path /Users/dev/my-app/src/forms.ts \
  --definition_name handleSubmit

# 4. Read full implementation
gkg_read_definitions \
  --definitions "[{
    \"names\": [\"handleSubmit\"],
    \"file_path\": \"src/forms.ts\"
  }]"

# 5. Understand connections
gkg_get_references \
  --absolute_file_path /Users/dev/my-app/src/api.ts \
  --definition_name apiCall

# 6. Get architecture overview
gkg_repo_map \
  --project_absolute_path /Users/dev/my-app \
  --relative_paths ["src"] \
  --depth 2
```

## Resources

- [GitLab Knowledge Graph Docs](https://gitlab-org.gitlab.io/rust/knowledge-graph/)
- [MCP Tools Reference](https://gitlab-org.gitlab.io/rust/knowledge-graph/mcp/tools/)
- [Supported Languages](https://gitlab-org.gitlab.io/rust/knowledge-graph/languages/overview/)
- [Repository on GitLab](https://gitlab.com/gitlab-org/rust/knowledge-graph)

## Next Steps

1. **Install GKG**: Follow installation guide above
2. **Index Your Project**: `gkg index /path/to/project`
3. **Explore**: Use MCP tools to understand codebase
4. **Integrate with ClaudeKit**: Use GKG context in `/code` and refactoring commands
5. **Automate**: Build workflows with GKG data

---

**GitLab Knowledge Graph** enables AI agents to truly understand your codebase, making code analysis, refactoring, and implementation more intelligent and context-aware.
