---
title: mcp-builder
description: "Documentation for mcp-builder
description:
section: docs
category: skills/tools
order: 13
published: true"
section: docs
category: skills/tools
order: 13
published: true
---

# mcp-builder Skill

Build high-quality MCP (Model Context Protocol) servers that enable Claude to interact with external services through well-designed tools.

## What is MCP?

Model Context Protocol allows Claude to:
- Call external APIs
- Access databases
- Read/write files
- Interact with services
- Execute tools
- Fetch resources

## When to Use

Use mcp-builder when creating MCP servers for:
- Custom API integrations
- Database access
- File system operations
- External service connections
- Custom tools for Claude
- Resource providers

## Quick Start

### Invoke the Skill

```
"Use mcp-builder to create MCP server for Stripe API with:
- Payment tools
- Subscription management
- Webhook handling
- TypeScript implementation"
```

### What You Get

The skill will help you:
1. Design server architecture
2. Create tool definitions
3. Implement handlers
4. Add authentication
5. Handle errors properly
6. Write documentation
7. Set up testing

## Common Use Cases

### API Integration

```
"Use mcp-builder to create MCP server for GitHub API:
- Repository management
- Issue tracking
- Pull request tools
- Authentication with tokens"
```

### Database Access

```
"Use mcp-builder for PostgreSQL MCP server:
- Query execution
- Schema introspection
- Connection pooling
- Read-only safety"
```

### File System

```
"Use mcp-builder to create file management MCP server:
- Read/write files
- Directory operations
- Search functionality
- Safe path handling"
```

### Custom Tools

```
"Use mcp-builder for custom business logic:
- Invoice generation
- Report creation
- Data transformation
- Workflow automation"
```

## MCP Server Types

### Python (FastMCP)

```
"Use mcp-builder to create Python MCP server with FastMCP:
- Tool decorators
- Resource handlers
- Type hints
- Async operations"
```

**Best for:**
- Data processing
- ML/AI integration
- Scientific computing
- Python ecosystem tools

### TypeScript (MCP SDK)

```
"Use mcp-builder to create TypeScript MCP server:
- Type safety
- Modern async/await
- NPM ecosystem
- Easy deployment"
```

**Best for:**
- API wrappers
- Web services
- Node.js integrations
- JavaScript tooling

## Key Components

### Tools

Functions Claude can call:
- Input schema
- Output format
- Error handling
- Documentation

### Resources

Data Claude can read:
- URIs
- Content types
- Dynamic updates
- Metadata

### Prompts

Templates Claude can use:
- Pre-defined prompts
- Parameter injection
- Context building

## Example Implementations

### Stripe Integration

```
"Use mcp-builder to create Stripe MCP server with tools for:
- Create customer
- Create subscription
- Process payment
- Handle webhooks
- List transactions"
```

### Slack Integration

```
"Use mcp-builder for Slack MCP server:
- Send messages
- List channels
- Search messages
- Upload files
- React to messages"
```

### Database Tools

```
"Use mcp-builder for database MCP server:
- Execute queries
- Get schema info
- Run migrations
- Backup data
- Safety checks"
```

### File Processing

```
"Use mcp-builder to create document processor:
- PDF extraction
- Image conversion
- Text analysis
- Format conversion"
```

## Best Practices

### Tool Design

The skill ensures:
- Clear tool names
- Descriptive parameters
- Proper input validation
- Good error messages
- Complete documentation

### Security

Implements:
- Authentication
- Authorization
- Input sanitization
- Rate limiting
- Safe defaults

### Error Handling

Provides:
- Clear error messages
- Proper error codes
- Recovery suggestions
- Logging
- Graceful failures

### Documentation

Creates:
- Tool descriptions
- Parameter docs
- Usage examples
- Setup guide
- Troubleshooting

## Advanced Features

### Authentication

```
"Use mcp-builder to add authentication:
- API key validation
- OAuth2 flow
- Token refresh
- Session management"
```

### Caching

```
"Use mcp-builder to implement caching:
- Response caching
- Cache invalidation
- TTL configuration
- Performance optimization"
```

### Rate Limiting

```
"Use mcp-builder to add rate limiting:
- Per-user limits
- Endpoint limits
- Retry logic
- Backoff strategy"
```

### Webhooks

```
"Use mcp-builder to handle webhooks:
- Signature verification
- Event processing
- Async handling
- Error recovery"
```

## Development Workflow

### 1. Design Phase

```
"Use mcp-builder to design MCP server:
- Define tools needed
- Specify inputs/outputs
- Plan authentication
- Document API"
```

### 2. Implementation

```
"Use mcp-builder to implement:
- Create server structure
- Implement tools
- Add error handling
- Write tests"
```

### 3. Testing

```
"Use mcp-builder to test server:
- Unit tests for tools
- Integration tests
- Error scenarios
- Performance tests"
```

### 4. Deployment

```
"Use mcp-builder to deploy:
- Package server
- Configuration
- Monitoring
- Documentation"
```

## Testing

### Unit Tests

```
"Use mcp-builder to create tests for:
- Each tool function
- Error conditions
- Input validation
- Output format"
```

### Integration Tests

```
"Use mcp-builder to test integration:
- Real API calls
- Authentication flow
- Error handling
- Edge cases"
```

## Configuration

### Claude Desktop

```json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["path/to/server.js"]
    }
  }
}
```

### Environment Variables

```
"Use mcp-builder to configure:
- API keys
- Database URLs
- Service endpoints
- Feature flags"
```

## Troubleshooting

### Common Issues

**Server not connecting**
- Check configuration path
- Verify server starts
- Review logs

**Tools not appearing**
- Check tool definitions
- Verify schema format
- Review documentation

**Authentication failing**
- Verify credentials
- Check token format
- Review auth flow

## Quick Examples

**Simple API Wrapper:**
```
"Use mcp-builder to wrap REST API as MCP server"
```

**Database Tools:**
```
"Use mcp-builder for PostgreSQL query tools with read-only safety"
```

**Custom Business Logic:**
```
"Use mcp-builder to create MCP server for:
- Generate invoices
- Calculate taxes
- Send notifications
- Update records"
```

**Multi-Service Integration:**
```
"Use mcp-builder to combine:
- GitHub API
- Jira API
- Slack notifications
- Into single MCP server"
```

## Resources

- [MCP Specification](https://modelcontextprotocol.io)
- [FastMCP (Python)](https://github.com/jlowin/fastmcp)
- [MCP SDK (TypeScript)](https://github.com/modelcontextprotocol/typescript-sdk)

## Next Steps

- [Custom Tools Examples](/docs/use-cases/)
- [API Integration Guide](/docs/use-cases/)
- [Database Skills](/docs/skills/postgresql-psql)

---

**Bottom Line:** mcp-builder creates production-ready MCP servers. Just describe the tools you need and the skill handles the implementation.
