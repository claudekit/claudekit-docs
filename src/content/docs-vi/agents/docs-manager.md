---
title: Docs Manager Agent
description: Senior technical documentation specialist for creating, maintaining, and organizing developer documentation
category: agents
order: 9
published: true
---

# Docs Manager Agent

The docs-manager agent is a senior technical documentation specialist responsible for creating, maintaining, and organizing all developer documentation. It ensures documentation stays accurate, comprehensive, and synchronized with the codebase.

## Purpose

Create, maintain, and organize developer documentation to ensure accuracy with the codebase, establish implementation standards, and maximize developer productivity.

## Model & Expertise

**Model**: Sonnet (full-featured for comprehensive analysis)

**Expertise Areas**:
- Implementation standards and guidelines
- API documentation and specifications
- Product Development Requirements (PDRs)
- System architecture documentation
- Code standards and conventions
- Codebase analysis and summarization

## When Activated

The docs-manager agent activates when:

- After implementing features
- After code changes requiring doc updates
- Using `/docs:init` command (initial setup)
- Using `/docs:update` command (update docs)
- Using `/docs:summarize` command (codebase summary)
- Reviewing entire `docs/` folder
- Establishing coding standards

## Capabilities

### Documentation Analysis & Maintenance

**Systematic Review**:
- Reads all docs in `./docs` directory
- Identifies gaps and inconsistencies
- Cross-references with actual code
- Ensures documentation hierarchy
- Updates outdated information

**Quality Assurance**:
- Verifies technical accuracy
- Checks code examples work
- Validates links and references
- Ensures consistent formatting
- Confirms correct case usage (PascalCase, camelCase, snake_case)

### Codebase Summarization

**Uses Repomix**:
```bash
repomix
# Generates: ./repomix-output.xml
```

**Creates Summary**:
- Analyzes compacted codebase
- Generates `./docs/codebase-summary.md`
- Includes file statistics
- Documents architecture patterns
- Lists key components

### Implementation Standards

**Documents**:
- Codebase structure patterns
- Error handling best practices
- API design conventions
- Testing strategies
- Security protocols

### Product Development Requirements (PDRs)

**Creates and Maintains**:
- Functional requirements
- Non-functional requirements
- Acceptance criteria
- Success metrics
- Technical constraints
- Implementation guidance

### Scout Agent Orchestration

**Parallel Exploration**:
```
/scout "authentication files" 3
/scout "API endpoints" 5
/scout "database models" 4
↓
Aggregates results → Updates documentation
```

## Documentation Structure

The docs-manager maintains this structure:

```
./docs/
├── project-overview-pdr.md    # Product requirements & roadmap
├── code-standards.md           # Coding standards & conventions
├── codebase-summary.md         # Repomix-generated summary
├── design-guidelines.md        # Design system specification
├── deployment-guide.md         # Production deployment guide
├── system-architecture.md      # Technical architecture
└── project-roadmap.md          # Project timeline & milestones
```

## Example Usage

### Initial Documentation Setup

**Input:**
```bash
/docs:init
```

**Process:**
```
1. Codebase Analysis (60s)
   Running: repomix
   Generating: repomix-output.xml
   Analyzing: 49 source files, 44K+ tokens

   Found:
   - 12 AI agents
   - 30+ slash commands
   - 6 MCP servers
   - Technology stack: TypeScript, Node.js, Astro

2. Parallel Scout Operations (45s)
   /scout "agent files" 5
   /scout "command files" 5
   /scout "config files" 3

   Discovered:
   - Agent architecture patterns
   - Command orchestration
   - Configuration structure

3. Documentation Generation (90s)
   Creating: docs/codebase-summary.md
   Creating: docs/project-overview-pdr.md
   Creating: docs/code-standards.md
   Creating: docs/system-architecture.md

4. Validation (30s)
   ✓ All code examples valid
   ✓ Links verified
   ✓ Formatting consistent
   ✓ Case usage correct

Total Time: 3.5 minutes
Files Created: 4 documentation files
```

**Generated Files:**

```markdown
# docs/codebase-summary.md

## Overview
Complete overview of ClaudeKit Engineer - a comprehensive
development toolkit with 49 source files across 12 AI agents,
30+ slash commands, and 6 MCP servers.

## File Statistics
- Total Files: 49
- Total Tokens: 44,235
- Languages: TypeScript (90%), Markdown (10%)

## Architecture
### Agents (12)
1. planner - Research and planning
2. scout - File location
3. debugger - Issue diagnosis
...

### Commands (30+)
- /cook - Feature implementation
- /plan - Create implementation plans
- /fix:hard - Complex issue resolution
...

## Technology Stack
- Runtime: Node.js 20+
- Language: TypeScript 5.7+
- Framework: Custom agent orchestration
...
```

### Documentation Update After Feature

**Scenario**: Added authentication feature

**Input:**
```bash
/docs:update
```

**Process:**
```
1. Change Detection (15s)
   Analyzing: git diff main

   Modified:
   - src/auth/login.ts (NEW)
   - src/auth/middleware.ts (NEW)
   - src/routes/auth.ts (MODIFIED)
   - tests/auth/* (NEW)

   Feature: Authentication system added

2. Documentation Analysis (30s)
   Reading: docs/project-overview-pdr.md
   Reading: docs/system-architecture.md
   Reading: docs/code-standards.md

   Updates needed:
   - Add auth to system architecture
   - Update API documentation
   - Add security protocols
   - Update codebase summary

3. Scout for Context (20s)
   /scout "authentication" 5

   Found:
   - JWT implementation
   - Password hashing
   - Session management
   - Auth middleware

4. Documentation Updates (45s)
   Updating: docs/system-architecture.md
   Section: Authentication Layer
   - Add auth architecture diagram
   - Document JWT flow
   - Explain middleware chain

   Updating: docs/code-standards.md
   Section: Security Protocols
   - Add password hashing standard
   - Document token validation
   - Add rate limiting patterns

   Updating: docs/codebase-summary.md
   Section: Features
   - Add authentication module
   - Update file count
   - List new dependencies

Total Time: 110 seconds
Files Updated: 3
New Sections: 5
```

**Updated Content:**

```markdown
# docs/system-architecture.md

## Authentication Layer (NEW)

### Overview
JWT-based authentication with secure password hashing
and session management.

### Architecture
┌─────────────┐      ┌──────────────┐      ┌─────────┐
│   Client    │─────>│ Auth         │─────>│  JWT    │
│   Request   │      │ Middleware   │      │ Verify  │
└─────────────┘      └──────────────┘      └─────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │  Protected   │
                     │  Route       │
                     └──────────────┘

### Components
1. **Login Handler** (`src/auth/login.ts`)
   - Validates credentials
   - Generates JWT tokens
   - Sets secure cookies

2. **Auth Middleware** (`src/auth/middleware.ts`)
   - Verifies JWT tokens
   - Extracts user context
   - Handles token refresh

3. **Password Service** (`src/auth/password.ts`)
   - bcrypt hashing (10 rounds)
   - Salt generation
   - Comparison validation

### Security Measures
- ✓ Password hashing with bcrypt
- ✓ JWT token expiration (1 hour)
- ✓ Refresh token rotation
- ✓ Rate limiting on auth endpoints
- ✓ HTTPS required in production

### Example Usage
\`\`\`typescript
// Protected route
app.get('/api/profile',
  authMiddleware,
  async (req, res) => {
    // req.user available from middleware
    const user = await getUserProfile(req.user.id);
    res.json(user);
  }
);
\`\`\`
```

### Codebase Summary Generation

**Input:**
```bash
/docs:summarize
```

**Process:**
```
1. Repomix Execution (20s)
   Running: repomix
   Output: repomix-output.xml
   Size: 44,235 tokens

2. Analysis (40s)
   Parsing: XML structure

   Statistics:
   - 49 files analyzed
   - 12 agents identified
   - 30 commands found
   - 6 MCP servers detected

3. Categorization (30s)
   Grouping by:
   - File type (agents, commands, configs)
   - Functionality (auth, UI, database)
   - Dependencies (npm packages)

4. Summary Generation (60s)
   Writing: docs/codebase-summary.md

   Sections:
   - Overview
   - File Statistics
   - Architecture
   - Agents
   - Commands
   - MCP Servers
   - Technology Stack
   - Dependencies

Total Time: 2.5 minutes
Summary Size: ~2,000 lines
```

## Output Format

### Documentation Files

All documentation uses consistent Markdown formatting:

**Headers**:
```markdown
# H1: Document Title (one per file)
## H2: Major sections
### H3: Subsections
#### H4: Details
```

**Code Blocks**:
```markdown
\`\`\`typescript
// Always specify language
const example: string = "Hello";
\`\`\`

\`\`\`bash
# Shell commands
npm install
\`\`\`
```

**Links**:
```markdown
[Descriptive Text](/path/to/file)
NOT: [click here](/path)
```

**Case Sensitivity**:
```markdown
✓ camelCase for variables: userName
✓ PascalCase for classes: UserService
✓ snake_case for database: user_name
✓ kebab-case for files: user-service.ts
```

### Summary Reports

After each documentation update:

```
DOCS-MANAGER SUMMARY REPORT

Current State Assessment:
- Documentation coverage: 85%
- Last updated: 2025-10-30
- Total docs: 7 files
- Outdated sections: 2

Changes Made:
✓ Updated: system-architecture.md
  - Added: Authentication Layer section
  - Updated: Architecture diagram
  - Added: Security measures

✓ Updated: code-standards.md
  - Added: Password hashing standard
  - Added: Token validation patterns

✓ Updated: codebase-summary.md
  - Added: Authentication module
  - Updated: File count (45 → 49)

Gaps Identified:
- API reference incomplete (60% coverage)
- Missing: Deployment rollback procedures
- Need: Error handling documentation

Recommendations:
1. Complete API documentation (Priority: High)
2. Add rollback guide (Priority: Medium)
3. Document error patterns (Priority: Medium)
4. Update dependency list (Priority: Low)

Metrics:
- Coverage: 85% (target: 90%)
- Update frequency: Weekly
- Last major update: 3 days ago
```

## Workflow Integration

### After Feature Implementation

```
Implementation Complete
↓
1. docs-manager: Analyze changes
2. docs-manager: Update relevant docs
3. docs-manager: Generate summary
↓
Documentation Updated
```

### During Code Review

```
code-reviewer: Review code
↓
If architecture changes detected:
1. docs-manager: Update system-architecture.md
2. docs-manager: Update code-standards.md
↓
Documentation Synchronized
```

### Regular Maintenance

```
Weekly:
1. /docs:update
   - Scan for outdated content
   - Verify code examples
   - Update statistics

Monthly:
1. /docs:summarize
   - Regenerate codebase summary
   - Update dependency list
   - Refresh architecture diagrams

Quarterly:
1. Complete documentation audit
   - Review all sections
   - Update PDRs
   - Revise standards
```

## Advanced Features

### Scout Integration

**Parallel Scouting**:
```bash
# docs-manager automatically uses scout agents
/docs:update

# Behind the scenes:
/scout "authentication files" 5
/scout "API endpoints" 5
/scout "database models" 4
# Results aggregated for documentation
```

### Repomix Integration

**Automatic Compaction**:
```bash
# docs-manager runs repomix automatically
/docs:summarize

# Executes:
repomix
# Creates: repomix-output.xml
# Generates: docs/codebase-summary.md
```

### Case Sensitivity Validation

**Automatic Checking**:
- Variables: camelCase
- Classes: PascalCase
- Database fields: snake_case
- API endpoints: kebab-case
- File names: kebab-case

**Example:**
```markdown
Before (incorrect):
- UserName (should be userName)
- user_service (should be UserService for class)
- UserProfile (should be user_profile for DB)

After (corrected):
✓ userName (variable)
✓ UserService (class)
✓ user_profile (database)
```

## Documentation Standards

### Code Examples

**Always include**:
- Working code snippets
- Comments explaining logic
- Import statements
- Type annotations
- Error handling

**Example:**
```typescript
// Good example
import { UserService } from './user.service';

async function createUser(data: CreateUserDTO): Promise<User> {
  try {
    // Validate input
    const validated = await validateUserData(data);

    // Create user
    const user = await UserService.create(validated);

    return user;
  } catch (error) {
    throw new Error(`User creation failed: ${error.message}`);
  }
}
```

### API Documentation

**Required sections**:
- Endpoint path
- HTTP method
- Request parameters
- Request body schema
- Response schema
- Error responses
- Example request/response
- Authentication requirements

**Example:**
```markdown
### POST /api/auth/login

Authenticate user and return JWT token.

**Request Body:**
\`\`\`typescript
{
  email: string;      // Valid email address
  password: string;   // Minimum 8 characters
}
\`\`\`

**Response (200):**
\`\`\`typescript
{
  token: string;      // JWT access token
  expiresIn: number;  // Token expiration (seconds)
  user: {
    id: string;
    email: string;
    name: string;
  }
}
\`\`\`

**Errors:**
- 400: Invalid email or password format
- 401: Invalid credentials
- 429: Too many login attempts

**Example:**
\`\`\`bash
curl -X POST http://localhost:3000/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"user@example.com","password":"secret123"}'
\`\`\`
```

### Architecture Diagrams

**Use ASCII art for clarity**:
```
┌─────────────┐      ┌──────────────┐      ┌─────────┐
│   Client    │─────>│   API        │─────>│Database │
└─────────────┘      └──────────────┘      └─────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │   Cache      │
                     │   (Redis)    │
                     └──────────────┘
```

## Best Practices

### Do's ✅

**Keep Documentation Current**
```bash
✓ Update docs immediately after code changes
✓ Run /docs:update weekly
✓ Regenerate summary monthly
```

**Provide Context**
```markdown
✓ Explain why, not just what
✓ Include architectural decisions
✓ Document trade-offs made
✓ Add troubleshooting guides
```

**Use Consistent Format**
```markdown
✓ Follow established structure
✓ Use consistent terminology
✓ Maintain same heading hierarchy
✓ Keep examples up to date
```

### Don'ts ❌

**Outdated Documentation**
```markdown
✗ Leave old examples
✗ Keep deprecated information
✗ Ignore broken links
```

**Vague Descriptions**
```markdown
✗ "Configure the system"
✓ "Set DATABASE_URL in .env to postgres://..."

✗ "Handle errors properly"
✓ "Wrap async calls in try-catch and return 500..."
```

**Inconsistent Formatting**
```markdown
✗ Mixed heading styles
✗ Inconsistent code block languages
✗ Different case conventions
```

## Troubleshooting

### Problem: Documentation Out of Sync

**Symptoms**: Docs don't match current codebase

**Solutions:**
1. Run `/docs:update` to sync
2. Use repomix to regenerate summary
3. Review git diff for changes
4. Update specific sections manually

**Command:**
```bash
# Full documentation sync
/docs:update

# Or regenerate from scratch
/docs:init
```

### Problem: Missing API Documentation

**Symptoms**: API endpoints not documented

**Solutions:**
1. Use scout to find all endpoints
2. Document each endpoint systematically
3. Include request/response examples
4. Add error handling documentation

**Example:**
```bash
# Find all API endpoints
/scout "API endpoints" 10

# Document each one systematically
```

### Problem: Broken Code Examples

**Symptoms**: Code snippets don't work

**Solutions:**
1. Test all code examples
2. Include necessary imports
3. Add type annotations
4. Verify examples run successfully

**Testing:**
```bash
# Extract code examples
grep -A 10 "```typescript" docs/*.md

# Test each example
```

## Integration with Other Agents

### After Planning

```
planner → creates implementation plan
↓
docs-manager: Reviews plan
docs-manager: Updates project-overview-pdr.md
```

### After Implementation

```
Code implementation complete
↓
docs-manager: Detects changes
docs-manager: Updates relevant docs
docs-manager: Generates summary
```

### Before Code Review

```
code-reviewer: Reviews code
↓
If standards violated:
docs-manager: Updates code-standards.md
code-reviewer: Re-reviews against updated standards
```

### With Project Manager

```
project-manager: Requests status
↓
docs-manager: Provides documentation coverage
docs-manager: Lists gaps and recommendations
↓
project-manager: Updates roadmap
```

## Important Notes

### Progressive Documentation

**Don't document everything upfront**:
- ✓ Start with essentials (PDR, standards, architecture)
- ✓ Expand as features are added
- ✓ Keep documentation lean and relevant
- ❌ Don't create documentation debt

### Documentation as Code

**Treat docs like code**:
- Version control all documentation
- Review documentation changes
- Test code examples
- Automate documentation generation where possible

### Developer-Centric

**Always consider the reader**:
- Make information easy to find
- Provide quick reference guides
- Include troubleshooting sections
- Use examples liberally

## Next Steps

Learn more about related topics:

- [Project Manager](/docs/agents/project-manager) - Overall project coordination
- [Code Standards](/docs/core-concepts/code-standards) - Coding conventions
- [System Architecture](/docs/core-concepts/system-architecture) - Technical design
- [Commands](/docs/commands/) - Documentation-related commands

---

**Key Takeaway**: The docs-manager agent ensures documentation remains accurate, comprehensive, and synchronized with the codebase through automated analysis, repomix integration, and systematic maintenance workflows.
