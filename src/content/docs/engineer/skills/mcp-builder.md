---
title: MCP Builder
description: Build high-quality Model Context Protocol servers that enable LLMs to interact with external services through well-designed tools in Python or TypeScript
section: engineer
kit: engineer
category: skills
order: 18
---

Want to give AI agents access to external APIs and services? That's exactly what MCP servers do, and this skill shows you how to build them properly.

## What This Skill Does

MCP Builder guides you through creating Model Context Protocol (MCP) servers that allow AI agents to interact with external services. Think of MCP servers as translators: they take natural language requests from AI agents and turn them into API calls, then return results in formats agents can understand.

This skill walks you through a complete four-phase process: deep research and planning, implementation with best practices, code review and refinement, and creating comprehensive evaluations to test your server's effectiveness. You'll learn to design tools that enable complete workflows (not just individual API calls), optimize for limited context windows, and create actionable error messages that guide agents.

Whether you're integrating a weather API, building tools for a project management system, or exposing database operations to AI agents, this skill ensures you create servers that actually work well with AI agents.

## Prerequisites

Before building MCP servers, you need:

**For Python Implementation:**
- Python 3.9 or higher
- Familiarity with async/await patterns
- Basic understanding of Pydantic for data validation

**For TypeScript Implementation:**
- Node.js 18 or higher
- TypeScript knowledge
- Understanding of Zod schemas

**General Requirements:**
- Understanding of the API/service you're integrating
- Familiarity with JSON-RPC protocol (the skill provides documentation)
- Willingness to read comprehensive API documentation

## The Four-Phase Process

### Phase 1: Deep Research and Planning

Before writing any code, you need to deeply understand what you're building.

**Study MCP Protocol Documentation**

Load the official MCP specification:

```bash
# Fetch the MCP protocol docs
# Use WebFetch to load: https://modelcontextprotocol.io/llms-full.txt
```

This comprehensive document contains the complete MCP specification.

**Understand Agent-Centric Design Principles**

MCP tools are different from traditional API wrappers. Key principles:

- **Build for Workflows, Not Just Endpoints**: Don't simply wrap API endpoints. Create tools that enable complete tasks. For example, `schedule_event` that both checks availability AND creates the event, not separate `check_availability` and `create_event` tools.

- **Optimize for Limited Context**: Agents have constrained context windows. Return high-signal information, not data dumps. Provide "concise" vs "detailed" response format options.

- **Design Actionable Error Messages**: Errors should guide agents toward correct usage. Instead of "Invalid filter", say "Try using filter='active_only' to reduce results".

- **Follow Natural Task Subdivisions**: Tool names should reflect how humans think about tasks. Group related tools with consistent prefixes for discoverability.

**Study the API Documentation**

Read through ALL available API documentation:

- Official API reference
- Authentication and authorization requirements
- Rate limiting and pagination patterns
- Error responses and status codes
- Available endpoints and parameters
- Data models and schemas

Use web search and WebFetch tool as needed to gather comprehensive information.

**Create an Implementation Plan**

Document your plan covering:

- **Tool Selection**: Which endpoints to implement, prioritized by value
- **Shared Utilities**: Common request patterns, pagination helpers, error handling
- **Input/Output Design**: Validation models, response formats (JSON or Markdown), detail levels (concise or detailed)
- **Error Handling Strategy**: Graceful failures, actionable error messages, rate limiting scenarios

### Phase 2: Implementation

With a solid plan, begin implementation following language-specific best practices.

**Choose Your Framework**

**Python**: Use the MCP Python SDK with FastMCP
**TypeScript**: Use the MCP TypeScript SDK

Load the appropriate implementation guide:

- For Python: `reference/python_mcp_server.md`
- For TypeScript: `reference/node_mcp_server.md`

**Set Up Project Structure**

For Python:

```python
# server.py
from mcp import FastMCP
from pydantic import BaseModel, Field

mcp = FastMCP("my-service")

# Define models, tools, implement logic
```

For TypeScript:

```typescript
// src/index.ts
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { z } from "zod";

const server = new Server({
  name: "my-service",
  version: "1.0.0",
});
```

**Implement Core Infrastructure First**

Build shared utilities before implementing tools:

- API request helper functions
- Error handling utilities
- Response formatting functions (JSON and Markdown)
- Pagination helpers
- Authentication/token management

**Implement Tools Systematically**

For each tool:

**Define Input Schema**

```python
# Python with Pydantic
class SearchInput(BaseModel):
    query: str = Field(description="Search query text")
    limit: int = Field(default=10, ge=1, le=100, description="Max results")
    format: str = Field(default="concise", pattern="^(concise|detailed)$")
```

```typescript
// TypeScript with Zod
const SearchInputSchema = z.object({
  query: z.string().describe("Search query text"),
  limit: z.number().int().min(1).max(100).default(10).describe("Max results"),
  format: z.enum(["concise", "detailed"]).default("concise"),
}).strict();
```

**Write Comprehensive Docstrings**

```python
@mcp.tool()
async def search_items(query: str, limit: int = 10, format: str = "concise") -> str:
    """
    Search for items matching the query.

    This tool searches across all indexed items and returns matching results.
    Use 'concise' format for quick overviews, 'detailed' for complete information.

    Args:
        query: Search terms (supports AND/OR operators)
        limit: Maximum results to return (1-100)
        format: Response format - 'concise' or 'detailed'

    Returns:
        JSON array of matching items with id, title, description

    Examples:
        - Find active projects: query="status:active type:project"
        - Recent updates: query="updated:>2024-01-01"

    Errors:
        - If no results: Returns empty array
        - If limit exceeded: Suggest reducing limit or narrowing query
    """
```

**Add Tool Annotations**

```python
@mcp.tool(
    readOnlyHint=True,  # Read-only operation
    destructiveHint=False,  # Non-destructive
    idempotentHint=True,  # Repeated calls have same effect
    openWorldHint=True,  # Interacts with external system
)
```

### Phase 3: Review and Refine

After initial implementation, ensure quality.

**Code Quality Review**

Check for:

- **DRY Principle**: No duplicated code between tools
- **Composability**: Shared logic extracted into functions
- **Consistency**: Similar operations return similar formats
- **Error Handling**: All external calls have error handling
- **Type Safety**: Full type coverage
- **Documentation**: Every tool has comprehensive docstrings

**Test and Build**

**Important**: MCP servers are long-running processes. Don't run them directly in your main process or they'll hang indefinitely.

**Safe Testing Approaches**:

- Use the evaluation harness (see Phase 4) - recommended
- Run server in tmux to keep it outside your main process
- Use timeout when testing: `timeout 5s python server.py`

**For Python**:

```bash
# Verify syntax
python -m py_compile server.py

# Test with evaluation harness
# (harness manages server lifecycle)
```

**For TypeScript**:

```bash
# Build must succeed
npm run build

# Verify dist/index.js created
ls dist/index.js

# Test with evaluation harness
```

**Use Quality Checklist**

Load the quality checklist from your language-specific guide and verify each item.

### Phase 4: Create Evaluations

Create comprehensive evaluations to test your MCP server's effectiveness with real AI agents.

Load the evaluation guide: `reference/evaluation.md`

**Understand Evaluation Purpose**

Evaluations test whether LLMs can effectively use your MCP server to answer realistic, complex questions.

**Create 10 Evaluation Questions**

Follow this process:

1. **Tool Inspection**: List available tools and their capabilities
2. **Content Exploration**: Use READ-ONLY operations to explore available data
3. **Question Generation**: Create 10 complex, realistic questions
4. **Answer Verification**: Solve each question yourself to verify answers

**Evaluation Requirements**

Each question must be:

- **Independent**: Not dependent on other questions
- **Read-only**: Only non-destructive operations required
- **Complex**: Requiring multiple tool calls and exploration
- **Realistic**: Based on real use cases
- **Verifiable**: Single, clear answer for string comparison
- **Stable**: Answer won't change over time

**Example Evaluation Question**

```xml
<qa_pair>
  <question>Find discussions about AI model launches with animal codenames. One model needed a specific safety designation that uses the format ASL-X. What number X was being determined for the model named after a spotted wild cat?</question>
  <answer>3</answer>
</qa_pair>
```

This question requires:

- Searching discussions about AI models
- Filtering for animal-themed codenames
- Identifying safety designation format
- Finding specific model (cheetah/leopard)
- Extracting the ASL number

**Output Format**

Create XML file with this structure:

```xml
<evaluation>
  <qa_pair>
    <question>Your complex question here</question>
    <answer>Single verifiable answer</answer>
  </qa_pair>
  <!-- 9 more qa_pairs -->
</evaluation>
```

## Language-Specific Implementation Guides

The skill provides detailed guides for both Python and TypeScript:

**Python Implementation** (`reference/python_mcp_server.md`):

- FastMCP server initialization
- Pydantic models for validation
- Tool registration with `@mcp.tool`
- Async/await patterns
- Complete working examples
- Quality checklist

**TypeScript Implementation** (`reference/node_mcp_server.md`):

- Server setup with TypeScript SDK
- Zod schemas for validation
- Tool registration with `server.registerTool`
- Project structure and build process
- Complete working examples
- Quality checklist

**MCP Best Practices** (`reference/mcp_best_practices.md`):

- Server and tool naming conventions
- Response format guidelines (JSON vs Markdown)
- Pagination best practices
- Character limits and truncation
- Security and error handling

**Evaluation Guide** (`reference/evaluation.md`):

- Question creation process
- Answer verification strategies
- Running evaluations
- Example questions

## Real-World Example

Let's walk through building a simple weather MCP server:

**Phase 1: Research**

- Study weather API documentation (OpenWeatherMap, WeatherAPI, etc.)
- Identify key endpoints: current weather, forecast, alerts
- Plan tools: `get_current_weather`, `get_forecast`, `search_location`
- Design response formats: concise (temperature, conditions) vs detailed (full data)

**Phase 2: Implementation (Python)**

```python
from mcp import FastMCP
from pydantic import BaseModel, Field
import httpx

mcp = FastMCP("weather-service")

class WeatherInput(BaseModel):
    location: str = Field(description="City name or coordinates")
    format: str = Field(default="concise", pattern="^(concise|detailed)$")

@mcp.tool(readOnlyHint=True)
async def get_current_weather(location: str, format: str = "concise") -> str:
    """
    Get current weather for a location.

    Args:
        location: City name (e.g., "London, UK") or coordinates
        format: 'concise' for temp/conditions, 'detailed' for full data

    Returns:
        JSON with temperature, conditions, humidity, wind

    Examples:
        - get_current_weather("Paris, France", "concise")
        - get_current_weather("40.7128,-74.0060", "detailed")
    """
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://api.weather.com/v1/current", params={
            "location": location,
            "apikey": os.getenv("WEATHER_API_KEY")
        })
        data = response.json()

        if format == "concise":
            return json.dumps({
                "temperature": data["temp"],
                "conditions": data["weather"],
                "location": location
            })
        else:
            return json.dumps(data)
```

**Phase 3: Review**

- Check error handling for invalid locations
- Ensure API key is required
- Test with timeout scenarios
- Verify response format consistency

**Phase 4: Evaluations**

```xml
<qa_pair>
  <question>What is the current temperature in Tokyo, Japan in Celsius?</question>
  <answer>15</answer>  <!-- Verify manually before creating eval -->
</qa_pair>
```

## Best Practices Summary

**Build for Workflows**: Create tools that enable complete tasks, not just individual API calls.

**Optimize for Context**: Return high-signal information. Offer concise vs detailed response formats.

**Actionable Errors**: Error messages should guide agents toward correct usage with specific suggestions.

**Comprehensive Documentation**: Every tool needs detailed docstrings with examples, parameter descriptions, and error scenarios.

**Type Safety**: Use Pydantic (Python) or Zod (TypeScript) for input validation with proper constraints.

**Test with Evaluations**: Create 10 complex questions that test real-world usage patterns.

## Reference Documentation

All reference files are in the Engineer Kit at `../claudekit-engineer/.claude/skills/mcp-builder/reference/`:

- `mcp_best_practices.md` - Universal MCP guidelines
- `python_mcp_server.md` - Complete Python implementation guide
- `node_mcp_server.md` - Complete TypeScript implementation guide
- `evaluation.md` - Creating and running evaluations

Load these during the appropriate phase of development.

## Related Skills and Commands

When building MCP servers, you might also use:

- [MCP Management](/docs/engineer/skills/mcp-management) - Test and interact with your MCP server once built
- [Backend Development](/docs/engineer/skills/backend-development) - If building API wrapper tools

## Key Principle

The quality of an MCP server is measured by how well it enables AI agents to accomplish real-world tasks. Design for workflows, not just API endpoints. Optimize for the agent's context budget. Create error messages that teach proper usage. Test with realistic evaluations.

Build MCP servers that AI agents actually want to use.
