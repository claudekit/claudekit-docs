# System Architecture

**Last Updated**: 2025-10-30
**Version**: 1.0
**Status**: Production Ready

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [System Components](#system-components)
3. [Agent Architecture](#agent-architecture)
4. [Command Orchestration](#command-orchestration)
5. [Data Flow](#data-flow)
6. [Communication Protocols](#communication-protocols)
7. [Technology Stack](#technology-stack)
8. [Integration Architecture](#integration-architecture)
9. [Security Architecture](#security-architecture)
10. [Scalability & Performance](#scalability--performance)
11. [Deployment Architecture](#deployment-architecture)

---

## Architecture Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Interface                          │
│                    (Claude Code CLI / Terminal)                 │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Command Router Layer                        │
│  • Slash command parsing                                        │
│  • Argument extraction                                          │
│  • Workflow orchestration                                       │
└────────────────────────────┬────────────────────────────────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
            ▼                ▼                ▼
┌──────────────────┐ ┌──────────────┐ ┌─────────────────┐
│  Agent Layer     │ │  MCP Servers │ │ External Tools  │
│  (12 Agents)     │ │  (6 Servers) │ │ (Git, npm, etc) │
└────────┬─────────┘ └──────┬───────┘ └────────┬────────┘
         │                  │                  │
         └──────────────────┼──────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    File System Layer                            │
│  • Plans & reports                                              │
│  • Documentation                                                │
│  • Codebase files                                               │
└─────────────────────────────────────────────────────────────────┘
```

---

### Design Philosophy

**1. Separation of Concerns**
- Each agent has a single, well-defined responsibility
- Commands orchestrate agents without implementing logic
- Clear boundaries between layers

**2. Loose Coupling**
- Agents communicate via file system (no direct dependencies)
- Commands are independent and composable
- MCP servers are optional and replaceable

**3. Composability**
- Small, focused agents combine for complex workflows
- Commands can be chained and nested
- Reusable patterns across different contexts

**4. Extensibility**
- Easy to add new agents and commands
- Plugin architecture for MCP servers
- Skill system for specialized capabilities

---

## System Components

### 1. Command Router

**Purpose**: Parse user commands and route to appropriate workflows

**Components**:
```
.opencode/command/
├── core/
│   ├── cook.md      # Feature implementation
│   ├── plan.md      # Planning workflow
│   ├── debug.md     # Debugging workflow
│   └── test.md      # Testing workflow
├── design/          # Design workflows
├── docs/            # Documentation workflows
├── fix/             # Fix workflows
├── git/             # Git workflows
└── plan/            # Advanced planning
```

**Responsibilities**:
- Parse slash commands
- Extract and validate arguments
- Load command definitions
- Orchestrate agent execution
- Handle errors and timeouts

---

### 2. Agent System

**Purpose**: Execute specialized development tasks

**Agent Categories**:

**Planning & Research** (3 agents):
- `planner` - Implementation planning
- `planner-researcher` - Architectural analysis
- `researcher` - Technical research

**Development** (2 agents):
- `ui-ux-designer` - Design system creation
- `ui-ux-developer` - Frontend implementation

**Quality Assurance** (3 agents):
- `tester` - Testing and validation
- `code-reviewer` - Quality assessment
- `debugger` - Issue analysis

**Operations** (4 agents):
- `git-manager` - Version control
- `docs-manager` - Documentation
- `project-manager` - Coordination
- `journal-writer` - Development diary

---

### 3. MCP Server Integration

**Purpose**: Extend agent capabilities with external services

**MCP Servers**:

```
┌──────────────────────────────────────────────────────────────┐
│                       MCP Servers                            │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────┐  ┌─────────────┐  ┌──────────────┐        │
│  │ Context7   │  │   Human     │  │  SearchAPI   │        │
│  │ (Upstash)  │  │  (Gemini)   │  │   (Search)   │        │
│  └────────────┘  └─────────────┘  └──────────────┘        │
│                                                              │
│  ┌────────────┐  ┌─────────────┐  ┌──────────────┐        │
│  │  VidCap    │  │ Sequential  │  │    Eyes      │        │
│  │ (Captions) │  │  Thinking   │  │  (Analysis)  │        │
│  └────────────┘  └─────────────┘  └──────────────┘        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Integration Patterns**:
- **Context7**: Documentation context for agents
- **Human**: Image generation and editing
- **SearchAPI**: Google and YouTube search
- **VidCap**: Video transcript extraction
- **Sequential Thinking**: Problem decomposition
- **Eyes**: Visual content analysis

---

### 4. File System Layer

**Purpose**: Persistent storage for plans, reports, and documentation

**Directory Structure**:
```
Project Root/
├── plans/
│   ├── templates/           # Reusable plan templates
│   ├── reports/             # Agent-to-agent communication
│   └── *.md                 # Implementation plans
├── docs/
│   ├── project-overview-pdr.md
│   ├── codebase-summary.md
│   ├── code-standards.md
│   ├── system-architecture.md
│   └── research/            # Research reports
├── src/content/docs/        # Documentation site content (79 pages)
│   ├── getting-started/     # Introduction, installation, quick-start
│   ├── agents/             # 14 agent pages (100% coverage)
│   ├── commands/           # 25 command pages (83% coverage)
│   ├── skills/             # 3 skill pages (7% coverage)
│   ├── use-cases/          # 7 use case pages
│   └── troubleshooting/    # 6 troubleshooting pages
└── [project files]
```

**File-Based Communication**:
- Plans: `./plans/YYMMDD-feature-name-plan.md`
- Reports: `./plans/reports/YYMMDD-from-to-task-report.md`
- Docs: `./docs/*.md`
- Content: `./src/content/docs/**/*.md` (public documentation)

---

## Agent Architecture

### Agent Lifecycle

```
┌──────────────┐
│ Command      │
│ Triggered    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Agent        │
│ Spawned      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Context      │
│ Loaded       │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Task         │
│ Execution    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Report       │
│ Generation   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Handoff to   │
│ Next Agent   │
└──────────────┘
```

---

### Agent Definition Schema

```yaml
# Frontmatter (YAML)
---
name: agent-name              # Unique identifier
description: |                # Multi-line description
  When to use this agent...
  Examples...
mode: subagent               # or "all" for main agents
model: provider/model-id     # AI model to use
temperature: 0.1             # Sampling temperature (optional)
---

# Agent Prompt (Markdown)
You are a [role]...

## Core Responsibilities
- Responsibility 1
- Responsibility 2

## Working Process
1. Step 1
2. Step 2

## Output Format
[Template or description]

## Quality Standards
[Requirements]
```

---

### Agent Communication Flow

```
┌─────────────┐     Creates Plan      ┌──────────────┐
│   Planner   │ ──────────────────> │ Plan File    │
│   Agent     │                      │ (.md)        │
└─────────────┘                      └──────┬───────┘
                                             │
                                             │ Reads
                                             │
                                             ▼
┌─────────────┐     Implements       ┌──────────────┐
│    Main     │ <─────────────────── │ Plan File    │
│   Agent     │                      └──────────────┘
└──────┬──────┘
       │
       │ Delegates
       ▼
┌─────────────┐     Creates Report   ┌──────────────┐
│   Tester    │ ──────────────────> │ Report File  │
│   Agent     │                      │ (.md)        │
└─────────────┘                      └──────┬───────┘
                                             │
                                             │ Reads
                                             │
                                             ▼
┌─────────────┐     Reads Report     ┌──────────────┐
│    Main     │ <─────────────────── │ Report File  │
│   Agent     │                      └──────────────┘
└─────────────┘
```

---

### Model Selection Strategy

**Decision Matrix**:

| Agent Type | Complexity | Model | Rationale |
|------------|-----------|--------|-----------|
| Code Review | High | Claude Sonnet 4 | Deep reasoning for security |
| Debugging | High | Claude Sonnet 4 | Root cause analysis |
| Planning | Very High | Gemini 2.5 Flash | Fast, cost-effective |
| Architectural | Critical | Claude Opus 4 | Maximum reasoning |
| Testing | Medium | Grok Code | Specialized for code execution |
| Git Ops | Low | Grok Code | Simple, deterministic tasks |
| Documentation | Medium | Gemini 2.5 Flash | Fast generation |

**Cost Optimization**:
- Use fastest/cheapest model that meets requirements
- Reserve Opus 4 for critical architectural decisions
- Parallelize when possible to reduce wall-clock time

---

## Command Orchestration

### Sequential Workflow Pattern

**Use Case**: Dependent tasks must execute in order

**Example: /cook Command**

```
User: /cook "implement user authentication"
  │
  ▼
┌─────────────────────────────────────────┐
│ 1. Planner Agent                        │
│    • Creates implementation plan        │
│    • Saves to ./plans/251030-auth.md    │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ 2. Main Agent                           │
│    • Reads plan file                    │
│    • Implements features step-by-step   │
│    • Writes code files                  │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ 3. Tester Agent                         │
│    • Runs test suite                    │
│    • Generates coverage report          │
│    • Saves to ./plans/reports/...       │
└────────────┬────────────────────────────┘
             │
             ▼ (if tests pass)
┌─────────────────────────────────────────┐
│ 4. Code Reviewer Agent                  │
│    • Reviews code quality               │
│    • Checks security                    │
│    • Validates standards                │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ 5. Docs Manager Agent                   │
│    • Updates documentation              │
│    • Syncs codebase summary             │
└────────────┬────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────┐
│ 6. Git Manager Agent                    │
│    • Stages changes                     │
│    • Creates conventional commit        │
│    • Pushes to remote                   │
└─────────────────────────────────────────┘
```

---

### Parallel Workflow Pattern

**Use Case**: Independent tasks can execute simultaneously

**Example: /plan Command with Research**

```
User: /plan "implement real-time notifications"
  │
  ▼
┌─────────────────────────────────────────┐
│ Planner Agent                           │
│ • Identifies research topics            │
│ • Spawns multiple researchers           │
└────────┬────────────────────────────────┘
         │
         ├─────────────┬─────────────┬────────────┐
         ▼             ▼             ▼            ▼
    ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
    │Research │  │Research │  │Research │  │Research │
    │WebSocket│  │ Redis   │  │ Server  │  │ Client  │
    │ Techs   │  │ PubSub  │  │ Sent    │  │ Libs    │
    │         │  │         │  │ Events  │  │         │
    └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘
         │            │            │            │
         └────────────┴────────────┴────────────┘
                         │
                         ▼
              ┌─────────────────┐
              │ Planner Agent   │
              │ • Synthesizes   │
              │ • Creates plan  │
              └─────────────────┘
```

---

### Conditional Workflow Pattern

**Use Case**: Branching logic based on results

**Example: /fix:test Command**

```
┌─────────────────────┐
│ Tester Agent        │
│ • Runs test suite   │
└──────────┬──────────┘
           │
           ▼
     ┌──────────┐
     │ Tests    │
     │ Status?  │
     └────┬─────┘
          │
     ┌────┴─────┐
     │          │
   PASS       FAIL
     │          │
     ▼          ▼
┌─────────┐  ┌──────────────┐
│ Code    │  │ Debugger     │
│ Review  │  │ Agent        │
│ Agent   │  │ • Analyzes   │
└─────────┘  └──────┬───────┘
                    │
                    ▼
             ┌──────────────┐
             │ Main Agent   │
             │ • Fixes      │
             └──────┬───────┘
                    │
                    ▼
             [Loop back to Tester]
```

---

## Data Flow

### Plan Creation Flow

```
┌──────────────┐
│ User Request │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ /plan cmd    │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│ Planner Agent                    │
│ • Reads ./docs/codebase-summary  │
│ • Reads ./docs/code-standards    │
│ • Spawns researcher agents       │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ Research Phase                   │
│ • Google search                  │
│ • YouTube tutorials              │
│ • Documentation scraping         │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ Plan Generation                  │
│ • Synthesize research            │
│ • Create TODO tasks              │
│ • Write plan markdown            │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ Save Plan                        │
│ ./plans/YYMMDD-feature-plan.md   │
└──────────────────────────────────┘
```

---

### Implementation Flow

```
┌──────────────┐
│ Plan File    │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│ Main Agent                       │
│ • Reads plan                     │
│ • Extracts TODO tasks            │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ Code Implementation              │
│ • Creates/modifies files         │
│ • Follows code standards         │
│ • Handles errors                 │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ Validation                       │
│ • Compile check                  │
│ • Syntax validation              │
│ • Type checking                  │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ Updated Codebase                 │
└──────────────────────────────────┘
```

---

### Testing Flow

```
┌──────────────┐
│ Codebase     │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│ Tester Agent                     │
│ • Identifies test command        │
│ • Runs test suite                │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ Test Execution                   │
│ • Unit tests                     │
│ • Integration tests              │
│ • E2E tests                      │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ Coverage Analysis                │
│ • Line coverage                  │
│ • Branch coverage                │
│ • Function coverage              │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────────────────────────┐
│ Report Generation                │
│ ./plans/reports/YYMMDD-test.md   │
└──────────────────────────────────┘
```

---

## Communication Protocols

### File-Based Communication

**Advantages**:
- No runtime dependencies between agents
- Persistent communication history
- Easy to debug and audit
- Human-readable formats

**File Types**:

1. **Plans** (`./plans/*.md`)
   - Implementation roadmaps
   - TODO task lists
   - Architectural decisions

2. **Reports** (`./plans/reports/*.md`)
   - Agent findings
   - Test results
   - Code review feedback

3. **Documentation** (`./docs/*.md`)
   - Project overview
   - Code standards
   - System architecture

---

### Naming Conventions

**Plans**:
```
Format: YYMMDD-feature-name-plan.md
Example: 251030-authentication-system-plan.md
```

**Reports**:
```
Format: YYMMDD-from-agent-to-agent-task-report.md
Example: 251030-from-tester-to-main-test-results-report.md
```

**Research**:
```
Format: YYMMDD-research-topic.md
Example: 251030-websocket-libraries-research.md
```

---

### Standard Report Structure

```markdown
# Report: [Task Name]

**From**: [Source Agent]
**To**: [Recipient Agent or Main]
**Date**: YYYY-MM-DD
**Status**: [In Progress / Complete / Blocked]

## Summary
[2-3 sentence overview of findings]

## Details
[Comprehensive information]

## Key Findings
1. Finding 1
2. Finding 2
3. Finding 3

## Recommendations
- Recommendation 1
- Recommendation 2

## Next Steps
1. Step 1
2. Step 2

## Unresolved Questions
- Question 1 (if any)
- Question 2 (if any)

---

**Generated by**: [Agent Name]
**Model Used**: [Model Identifier]
**Execution Time**: [Duration]
```

---

## Technology Stack

### Core Technologies

```
┌─────────────────────────────────────────┐
│ Runtime Environment                     │
│ • Node.js 20+                           │
│ • npm 10+ (Package manager)             │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ AI Platform                             │
│ • Claude Code (Orchestration)           │
│ • Open Code CLI (Agent framework)       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Version Control                         │
│ • Git (Version control)                 │
│ • GitHub (Repository hosting)           │
│ • Conventional Commits (Standards)      │
└─────────────────────────────────────────┘
```

---

### AI Models

**Primary Models**:

```
┌──────────────────────┬──────────────┬─────────────┐
│ Model                │ Provider     │ Usage       │
├──────────────────────┼──────────────┼─────────────┤
│ Claude Sonnet 4      │ Anthropic    │ Code review │
│                      │              │ Debugging   │
│                      │              │ UI design   │
├──────────────────────┼──────────────┼─────────────┤
│ Claude Opus 4        │ Anthropic    │ Architecture│
│                      │              │ Planning    │
├──────────────────────┼──────────────┼─────────────┤
│ Gemini 2.5 Flash     │ Google       │ Docs        │
│                      │              │ Planning    │
├──────────────────────┼──────────────┼─────────────┤
│ Grok Code            │ X.AI         │ Testing     │
│                      │              │ Git ops     │
└──────────────────────┴──────────────┴─────────────┘
```

---

### MCP Servers

**Integration Architecture**:

```
Agent <──> MCP Protocol <──> MCP Server <──> External Service

Example:
Researcher <──> MCP <──> SearchAPI <──> Google Search
```

**Server Configuration**:
```bash
# Context7 Setup
export UPSTASH_API_KEY="..."
claude mcp add context7 -s user -- npx -y @upstash/context7-mcp

# Human MCP Setup
export GOOGLE_GEMINI_API_KEY="..."
claude mcp add-json human -s user '{"command": "npx", "args": ["@goonnguyen/human-mcp@latest"]}'
```

---

### Development Tools

**Code Analysis**:
- **Repomix** - Codebase compaction for AI analysis
- **Commitlint** - Commit message validation
- **Husky** - Git hooks

**Media Processing**:
- **ImageMagick** - Image manipulation
- **FFmpeg** - Video/audio processing

**Release Management**:
- **Semantic Release** - Automated versioning
- **Conventional Changelog** - Release notes generation

---

## Integration Architecture

### GitHub Integration

**Capabilities**:
- Read GitHub Actions logs
- Create pull requests
- Manage issues
- Access repository metadata

**Integration Pattern**:
```
Agent ──> gh CLI ──> GitHub API ──> Repository
```

**Example Usage**:
```bash
# In debugger agent
gh run view $RUN_ID --log
gh pr create --title "feat: add auth" --body "..."
```

---

### Database Integration

**Capabilities**:
- Query optimization analysis
- Schema design
- Data migration planning

**Integration Pattern**:
```
Database Admin Agent ──> psql CLI ──> PostgreSQL
```

**Example Usage**:
```bash
# In database-admin agent
psql $DATABASE_URL -c "EXPLAIN ANALYZE SELECT ..."
```

---

### External API Integration

**Pattern: MCP Server Wrapper**

```
┌──────────────┐
│ Agent        │
│ Needs Data   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ MCP Server   │
│ (Middleware) │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ External API │
│ (REST/GraphQL)│
└──────────────┘
```

**Benefits**:
- Standardized interface
- Error handling
- Rate limiting
- Caching

---

## Security Architecture

### Secret Management

**Environment Variable Hierarchy**:

```
1. Process Environment (highest priority)
   export GEMINI_API_KEY="..."

2. Project Root .env
   /project/.env

3. Claude Config .env
   /project/.claude/.env

4. Skills Config .env
   /project/.claude/skills/.env

5. Individual Skill .env (lowest priority)
   /project/.claude/skills/gemini-audio/.env
```

**Secret Detection**:

```
Pre-Commit Hook:
  │
  ▼
┌──────────────────────┐
│ Git Manager Agent    │
│ • Scans staged files │
│ • Pattern matching   │
│ • .env detection     │
└──────┬───────────────┘
       │
    ┌──┴──┐
    │     │
  PASS   FAIL
    │     │
    ▼     ▼
 Commit  Abort
         + Warn User
```

---

### Code Security

**OWASP Top 10 Coverage**:

```
Code Reviewer Agent
  │
  ├─> SQL Injection Detection
  ├─> XSS Vulnerability Scanning
  ├─> Authentication Issues
  ├─> Sensitive Data Exposure
  ├─> Access Control Validation
  ├─> Security Misconfiguration
  ├─> Deserialization Flaws
  ├─> Component Vulnerabilities
  ├─> Logging & Monitoring
  └─> Known CVEs
```

---

### Access Control

**Principle of Least Privilege**:
- Agents only access files they need
- MCP servers isolated per agent
- API keys scoped to minimum permissions
- No cross-agent data sharing (except via files)

---

## Scalability & Performance

### Horizontal Scalability

**Parallel Agent Execution**:

```
Single Command:
/plan "complex feature"
  │
  ├─> Researcher 1 (WebSocket techs)
  ├─> Researcher 2 (Authentication)
  ├─> Researcher 3 (Database options)
  └─> Researcher 4 (UI frameworks)
       │
       └─> All run in parallel
           └─> Results aggregated by Planner
```

**Benefits**:
- Reduced wall-clock time
- Better resource utilization
- Independent failure domains

---

### Performance Optimization

**Caching Strategies**:

1. **Repomix Output Caching**
   - Cache codebase summaries
   - Invalidate on file changes
   - Reduces generation time from 30s to <1s

2. **MCP Server Response Caching**
   - Cache search results (15 min TTL)
   - Cache documentation fetches
   - Reduces API calls and costs

3. **Documentation Caching**
   - Reuse docs <1 day old
   - Avoid redundant generation
   - Faster agent initialization

---

### Resource Management

**Memory Optimization**:
- Stream large files instead of loading entirely
- Clean up temporary files after agent completion
- Limit concurrent agent execution (configurable)

**Token Optimization**:
- Use smaller models when appropriate
- Compress prompts without losing context
- Batch operations when possible

---

## Deployment Architecture

### Local Development

```
Developer Machine:
├── Claude Code CLI
├── Node.js Runtime
├── Git Repository
├── MCP Servers (optional)
└── Environment Variables
```

**Setup**:
```bash
# Clone repository
git clone https://github.com/claudekit/claudekit-engineer.git
cd claudekit-engineer

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with API keys

# Initialize Claude Code
claude

# Run first command
/plan "your feature"
```

---

### Team Collaboration

**Shared Resources**:
- Git repository (shared codebase)
- Documentation (synced via git)
- Plans and reports (version controlled)
- Standards and templates (team-wide)

**Individual Resources**:
- API keys (developer-specific)
- Local MCP servers
- Development environment
- Git branches

**Workflow**:
```
Developer A                Developer B
    │                          │
    ├─> /plan "feature"       │
    ├─> /cook plan            │
    ├─> /test                 │
    ├─> /git:cp               │
    │                          │
    │                      ├─> git pull
    │                      ├─> /plan "fix bug"
    │                      ├─> /fix:fast issue
    │                      └─> /git:cp
    │                          │
    └─> git pull               │
```

---

### CI/CD Integration

**GitHub Actions Example**:

```yaml
name: ClaudeKit Quality Check
on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'

      # Run tests
      - run: npm test

      # Validate commit messages
      - run: npx commitlint --from=HEAD~1

      # Check for secrets
      - run: |
          if grep -r "sk-[a-zA-Z0-9]" .; then
            echo "Secret detected!"
            exit 1
          fi
```

**Agent-Assisted CI/CD**:
```bash
# When CI fails
/fix:ci https://github.com/user/repo/actions/runs/123456

# Debugger agent:
# 1. Fetches action logs via gh CLI
# 2. Analyzes failure root cause
# 3. Creates fix plan
# 4. Main agent implements fixes
# 5. Tester validates
# 6. Git manager commits
```

---

## Monitoring & Observability

### Agent Performance Metrics

**Tracked Metrics**:
- Agent execution time
- Success/failure rates
- Token usage per agent
- File I/O operations
- API call counts

**Logging**:
```
./logs/
├── 251030-planner-execution.log
├── 251030-tester-results.log
└── 251030-system-events.log
```

---

### Error Tracking

**Error Handling Levels**:

1. **Agent-Level Errors**
   - Logged to agent report
   - Included in output to main agent
   - Actionable error messages

2. **Command-Level Errors**
   - User-facing error display
   - Troubleshooting guidance
   - Recovery suggestions

3. **System-Level Errors**
   - Critical failures logged
   - User notification
   - Graceful degradation

---

## Disaster Recovery

### Data Backup

**Version Controlled**:
- All plans (in git)
- All documentation (in git)
- Code changes (in git)

**Not Version Controlled**:
- Temporary files
- Cache data
- Log files

**Recovery**:
```bash
# Restore from git
git reset --hard HEAD
git pull origin main

# Regenerate summaries
/docs:summarize
```

---

### Failure Scenarios

**Scenario 1: MCP Server Down**
- **Impact**: Limited (optional features)
- **Mitigation**: Graceful degradation, local fallbacks
- **Recovery**: Automatic retry, user notification

**Scenario 2: AI Model Unavailable**
- **Impact**: High (core functionality)
- **Mitigation**: Fallback to alternative models
- **Recovery**: Queue requests, retry with backoff

**Scenario 3: Corrupted Plan File**
- **Impact**: Medium (single feature affected)
- **Mitigation**: Git history recovery
- **Recovery**: Restore from git, regenerate if needed

---

## Future Architecture Considerations

### Cloud-Hosted Agents (Future)

```
┌──────────────────────────────────────────┐
│ User Machine                             │
│ • Claude Code CLI                        │
│ • Lightweight client                     │
└────────────┬─────────────────────────────┘
             │ HTTPS
             ▼
┌──────────────────────────────────────────┐
│ ClaudeKit Cloud Platform                 │
│ • Agent orchestration                    │
│ • Shared MCP servers                     │
│ • Centralized caching                    │
│ • Team collaboration                     │
└────────────┬─────────────────────────────┘
             │ WebSocket
             ▼
┌──────────────────────────────────────────┐
│ External Services                        │
│ • GitHub, GitLab, Bitbucket              │
│ • Cloud providers                        │
│ • Third-party APIs                       │
└──────────────────────────────────────────┘
```

---

### Multi-Language Support (Future)

**Current**: Markdown-based agents
**Future**: Multi-language agent implementations

```
Agent Implementations:
├── Python/           # For data science tasks
├── JavaScript/       # For web development
├── Go/              # For systems programming
└── Rust/            # For performance-critical tasks
```

---

## Summary

ClaudeKit Engineer's architecture is built on proven principles:

1. **Separation of Concerns** - Each component has clear responsibility
2. **Loose Coupling** - File-based communication enables independence
3. **Composability** - Small agents combine for complex workflows
4. **Extensibility** - Easy to add agents, commands, and integrations

The system is designed for:
- **Local-first development** with optional cloud features
- **Team collaboration** via version-controlled artifacts
- **Security by default** with secret detection and scanning
- **Performance at scale** through parallelization and caching

---

**Version**: 1.0
**Last Review**: 2025-10-30
**Next Review**: Q1 2025
**Owner**: ClaudeKit Team
