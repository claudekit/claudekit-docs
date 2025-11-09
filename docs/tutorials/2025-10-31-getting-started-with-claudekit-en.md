# Getting Started with ClaudeKit: Your AI Development Team in 5 Minutes

**For:** Beginners, non-tech users, and anyone who wants to ship features 10x faster

**Time:** 5-15 minutes to your first feature

**What you'll learn:** How to use ClaudeKit to build, test, and deploy production-ready features without writing code manually

---

## Why ClaudeKit?

Imagine having a team of 14 specialized developers working for you 24/7:
- A planner who researches best practices
- A coder who writes production-quality code
- A tester who creates comprehensive test suites
- A reviewer who catches security issues
- A designer who builds beautiful UIs
- A DBA who optimizes your database
- A tech writer who maintains documentation
- A git expert who creates professional commits

**That's ClaudeKit.**

Instead of spending 8-12 hours implementing a feature, you describe what you need in plain English, and ClaudeKit delivers production-ready code in 5-20 minutes—complete with tests, code review, and documentation.

### Real Results

- **Authentication system**: 6 minutes (vs 8 hours manually)
- **Payment integration**: 15 minutes (vs 12 hours manually)
- **API endpoint with tests**: 5 minutes (vs 4 hours manually)
- **UI component from screenshot**: 3 minutes (vs 2 hours manually)

---

## What is ClaudeKit?

ClaudeKit is a suite of 14 AI agents built on top of Claude Code (Anthropic's official coding assistant) that automates your entire development workflow.

**Not a boilerplate**. Not a template. It's a living system that:
- Works with ANY tech stack (Next.js, Django, Laravel, React Native, etc.)
- Improves automatically as Claude gets smarter
- Never becomes outdated like traditional boilerplates
- Adapts to your coding style and project structure

**Think of it as:** Your personal development team that lives in your terminal.

---

## What You Get

### 14 Specialized AI Agents

1. **planner** - Creates detailed implementation plans with research
2. **researcher** - Finds best practices and solutions
3. **scout** - Searches your codebase intelligently
4. **brainstormer** - Explores solution options
5. **tester** - Writes and runs comprehensive tests
6. **debugger** - Diagnoses and fixes bugs systematically
7. **code-reviewer** - Checks security, performance, and quality
8. **docs-manager** - Maintains technical documentation
9. **project-manager** - Tracks progress and coordinates tasks
10. **journal-writer** - Documents technical decisions
11. **ui-ux-designer** - Designs interfaces and wireframes
12. **copywriter** - Creates conversion-optimized copy
13. **git-manager** - Creates professional commits and PRs
14. **database-admin** - Optimizes queries and manages databases

### 30+ Slash Commands

Quick shortcuts for common tasks:

**Development:**
- `/bootstrap` - Start a new project
- `/cook` - Implement a feature end-to-end
- `/plan` - Create an implementation plan
- `/ask` - Query your codebase
- `/test` - Run test suite

**Bug Fixing:**
- `/fix:fast` - Quick fixes
- `/fix:hard` - Complex bug investigation
- `/fix:ci` - Fix GitHub Actions failures
- `/fix:ui` - Fix UI issues

**Design:**
- `/design:screenshot` - Turn screenshots into code
- `/design:video` - Turn videos into code
- `/design:good` - Create polished designs

**Git:**
- `/git:cm` - Stage and commit
- `/git:cp` - Commit and push
- `/git:pr` - Create pull request

### 46+ Built-in Skills

Pre-configured expertise in popular frameworks and tools:
- **Frontend**: Next.js, shadcn/ui, Tailwind CSS, Remix Icon
- **Backend**: PostgreSQL, MongoDB, Better Auth
- **DevOps**: Docker, Turborepo, Google Cloud
- **Cloud**: Cloudflare Workers/R2, Browser Rendering
- **AI**: Gemini (vision, audio, video, documents)
- **Media**: FFmpeg, ImageMagick
- **E-commerce**: Shopify
- **And 30+ more...**

---

## Before You Start

### What You Need

1. **Claude Code** - The AI coding assistant (free during beta)
   - Install from: https://claude.ai/download
   - Requires: macOS, Windows, or Linux

2. **Basic Tools** (you probably have these):
   - Node.js 18+ (check: `node --version`)
   - Git (check: `git --version`)

3. **ClaudeKit License** - $99 one-time payment
   - Get it from: https://claudekit.cc
   - Lifetime access, all updates included

4. **API Keys** (optional, for enhanced features):
   - Google Gemini API (free tier available)
   - SearchAPI (for web research)

### Time Investment

- **Installation**: 2 minutes
- **Your first feature**: 5-10 minutes
- **Learning curve**: Minimal (if you can describe what you want, you can use ClaudeKit)

---

## Installation (2 Minutes)

ClaudeKit offers two installation methods. We recommend the CLI method for beginners.

### Method 1: ClaudeKit CLI (Recommended)

**Step 1:** Install Claude Code CLI
```bash
# macOS/Linux
curl -fsSL https://claude.ai/install.sh | bash

# Windows (PowerShell)
irm https://claude.ai/install.ps1 | iex
```

**Step 2:** Authenticate with GitHub

You need a GitHub Personal Access Token (PAT) to download ClaudeKit:

1. Go to: https://github.com/settings/tokens/new
2. Set these permissions:
   - `repo` (full control)
   - Expiration: 90 days
3. Copy the token
4. Run: `gh auth login` OR set environment variable: `GITHUB_TOKEN=your_token`

**Step 3:** Create your project with ClaudeKit

```bash
# For a new project
ck new my-awesome-app --kit engineer

# For an existing project
cd my-existing-project
ck new . --kit engineer
```

**That's it!** ClaudeKit is now installed in your project.

### Method 2: Manual Installation

If you prefer manual setup:

1. Download the latest release from your purchase email
2. Extract to your project directory
3. Run: `cp -r claudekit/.claude ./`
4. Configure Claude Code MCP settings (see docs)

---

## Your First 5 Minutes with ClaudeKit

Let's build something real: a user authentication system with OAuth.

### Step 1: Initialize Your Project (2 min)

```bash
# Create a new Next.js project with ClaudeKit
ck new my-app --kit engineer
cd my-app
```

**What just happened?**
- ClaudeKit downloaded and installed to `.claude/` directory
- 14 agents are now available
- 30+ commands are ready to use
- 46+ skills are configured

### Step 2: Plan Your Feature (30 seconds)

```bash
claude /plan add user authentication with email/password and Google OAuth
```

**Expected output:**
```
✓ planner agent activated
✓ Researching authentication best practices...
✓ Analyzing your tech stack (Next.js detected)
✓ Creating implementation plan...

Plan saved to: plans/251031-user-authentication.md

Summary:
- Use Better Auth (framework-agnostic)
- Email/password with verification
- Google OAuth integration
- Protected routes with middleware
- 12 test cases
- Estimated time: 6 minutes
```

**Review the plan:**
```bash
cat plans/251031-user-authentication.md
```

The plan includes:
- Step-by-step implementation
- Security considerations
- Testing strategy
- File changes needed

### Step 3: Implement the Feature (4 min)

```bash
claude /cook implement the authentication plan
```

**What happens behind the scenes:**

1. **planner** confirms the approach (30s)
2. **researcher** finds latest Better Auth patterns (30s)
3. **Multiple agents work in parallel**:
   - Install dependencies
   - Create auth routes
   - Set up database schema
   - Build login/signup pages
   - Add protected route middleware
   - Create OAuth configuration
4. **tester** writes and runs tests (1 min)
5. **code-reviewer** checks for security issues (30s)
6. **docs-manager** updates documentation (30s)

**Expected output:**
```
✓ Installing better-auth dependencies...
✓ Creating database schema...
✓ Building authentication routes...
✓ Creating login/signup components...
✓ Setting up Google OAuth...
✓ Adding route protection...
✓ Writing 12 test cases...
✓ Running tests... 12/12 passed ✓
✓ Code review: No issues found
✓ Documentation updated

Feature complete! 🎉

Files changed: 15
Tests: 12/12 passed
Security: No vulnerabilities
Documentation: Updated
```

### Step 4: Verify It Works (30 seconds)

```bash
claude /test
```

**Expected output:**
```
Running test suite...

✓ Email signup creates user
✓ Email login authenticates user
✓ Invalid credentials rejected
✓ Google OAuth redirects correctly
✓ Protected routes require authentication
✓ Unauthorized requests redirect to login
... 6 more tests passed

12/12 tests passed (100%)
Coverage: 87%
```

### Step 5: Commit Your Changes (30 seconds)

```bash
claude /git:cm
```

**Expected output:**
```
✓ git-manager agent activated
✓ Analyzing changes...
✓ Generating commit message...
✓ Creating commit...

Commit created:
feat: add user authentication with email and Google OAuth

- Implement Better Auth for authentication
- Add email/password signup and login
- Integrate Google OAuth provider
- Create protected route middleware
- Add 12 comprehensive test cases
- Update documentation with auth setup guide

Files: 15 changed
```

### Congratulations! 🎉

In 6 minutes, you built a production-ready authentication system that would take 8+ hours manually.

You now have:
- ✅ Email/password authentication
- ✅ Google OAuth integration
- ✅ Protected routes
- ✅ 12 passing tests
- ✅ Security best practices
- ✅ Complete documentation
- ✅ Professional git commit

---

## Common Workflows

### Adding Any Feature

```bash
# 1. Plan (optional but recommended)
claude /plan [describe feature]

# 2. Implement
claude /cook [describe feature]

# 3. Test
claude /test

# 4. Commit
claude /git:cm
```

**Examples:**
```bash
# Add a blog
claude /cook create a blog with markdown support and syntax highlighting

# Add payments
claude /integrate:polar add subscription payments with Polar.sh

# Add a dashboard
claude /cook create an admin dashboard with user analytics
```

### Fixing Bugs

```bash
# Quick fix
claude /fix:fast the login button doesn't work on mobile

# Complex investigation
claude /fix:hard users getting timeout errors on checkout

# CI/CD failures
claude /fix:ci https://github.com/user/repo/actions/runs/123456
```

### Design Workflows

```bash
# Screenshot to code
claude /design:screenshot path/to/design.png

# Video to code
claude /design:video path/to/demo.mp4

# Create from scratch
claude /design:good create a modern pricing page with 3 tiers
```

### Working with Existing Projects

```bash
# Understand the codebase
claude /ask what does the payment processing module do?

# Find files
claude /scout find all API routes

# Refactor
claude /cook refactor the user service to use dependency injection

# Update docs
claude /docs:update
```

---

## Understanding ClaudeKit's Architecture

### How It Works

1. **You describe** what you want in plain English
2. **planner** researches and creates a plan
3. **Specialized agents** execute in parallel or sequence:
   - **researcher** finds best practices
   - **Multiple agents** write code, tests, docs simultaneously
   - **tester** validates everything works
   - **code-reviewer** checks quality and security
4. **Results delivered** with tests, docs, and professional commits

### The `.claude/` Directory

After installation, your project has:

```
.claude/
├── agents/           # 14 agent definitions
│   ├── planner.md
│   ├── tester.md
│   ├── code-reviewer.md
│   └── ... 11 more
├── commands/         # 30+ slash commands
│   ├── bootstrap.md
│   ├── cook.md
│   ├── fix/
│   ├── design/
│   └── ...
├── skills/           # 46+ framework expertise
│   ├── nextjs.md
│   ├── postgresql.md
│   ├── better-auth.md
│   └── ...
└── workflows/        # Core processes
    ├── development-rules.md
    ├── orchestration-protocol.md
    └── ...
```

**Key files:**
- `CLAUDE.md` - Project instructions for Claude Code
- `workflows/development-rules.md` - Code quality standards
- `workflows/orchestration-protocol.md` - How agents work together

### Context Engineering (The Magic Behind ClaudeKit)

**What is it?** The practice of providing the right information to Claude Code at the right time.

**Why it matters:** Claude Code has a 200,000 token context window (about 150,000 words). ClaudeKit ensures this space is filled with:
- Your project's tech stack
- Code quality standards
- Best practices for your frameworks
- Project-specific conventions
- Relevant documentation

**Result:** Claude Code makes better decisions because it understands YOUR project.

**Example:**

Without ClaudeKit:
```
You: "Add authentication"
Claude: "Here's a basic auth with localStorage" ❌
```

With ClaudeKit:
```
You: "Add authentication"
Claude: "I see you're using Next.js 15 with App Router.
Based on your code standards in development-rules.md,
I'll implement Better Auth with:
- Email verification
- OAuth (Google/GitHub)
- Server-side sessions
- Protected routes via middleware
- Rate limiting
- 12 test cases
- Security best practices from OWASP" ✅
```

---

## Customizing ClaudeKit

### Adding Your Code Standards

Edit `.claude/CLAUDE.md`:

```markdown
## Code Style

- Use TypeScript strict mode
- Prefer functional components
- Use Tailwind CSS for styling
- Follow conventional commits
- Write tests for all features

## Prohibited Actions

- Never use `any` type
- Never commit secrets
- Never skip error handling
- Always validate user input
```

### Creating Custom Commands

Create `.claude/commands/my-command.md`:

```markdown
# My Custom Feature

Build a custom component with:
1. TypeScript
2. Tailwind CSS
3. Tests
4. Storybook story
```

Use it:
```bash
claude /my-command
```

### Adding Custom Skills

Create `.claude/skills/my-framework.md`:

```markdown
# My Framework Skill

Guide for implementing features with MyFramework:

## Installation
npm install my-framework

## Best Practices
- Use hooks
- Optimize performance
- Follow framework conventions

## Common Patterns
[Your patterns here]
```

---

## Tips for Success

### 1. Be Specific

❌ **Vague:** "Add auth"
✅ **Specific:** "Add email/password authentication with Google OAuth using Better Auth"

### 2. Use Planning Mode for Complex Features

```bash
# For simple tasks
claude /cook add a contact form

# For complex tasks
claude /plan add real-time chat with WebSocket
claude /cook implement the chat plan
```

### 3. Build Iteratively

Instead of:
```bash
claude /cook build a complete e-commerce platform
```

Do:
```bash
claude /cook create product listing page
claude /cook add shopping cart
claude /cook add checkout flow
claude /cook integrate payment
```

### 4. Review Before Committing

```bash
# See what changed
git diff

# Review tests
npm test

# Review code quality
claude /ask review the recent changes for security issues
```

### 5. Let ClaudeKit Handle the Details

You don't need to specify:
- Which files to create
- How to write tests
- Code formatting rules
- Documentation structure
- Commit message format

ClaudeKit knows your project structure and standards from `.claude/` configuration.

---

## Common Questions

### Q: Do I need to know how to code?

**A:** No! If you can describe what you want, ClaudeKit can build it. However, basic understanding helps you verify results and make better decisions.

### Q: What tech stacks does ClaudeKit support?

**A:** All of them! ClaudeKit is framework-agnostic. It has pre-built skills for:
- Next.js, React, Vue
- Node.js, Python, Rust
- PostgreSQL, MongoDB
- Cloudflare, Google Cloud
- And 40+ more

For frameworks without pre-built skills, ClaudeKit researches best practices on the fly.

### Q: Will it work with my existing project?

**A:** Yes! Install ClaudeKit in any project:
```bash
cd your-project
ck new . --kit engineer
```

ClaudeKit analyzes your codebase and adapts to your existing patterns.

### Q: How much does it cost?

**A:** $99 one-time payment for lifetime access. No subscriptions, no per-feature charges.

### Q: What if I don't like the generated code?

**A:** You can:
1. Ask for revisions: `claude /cook refactor the auth module to use hooks`
2. Review and edit manually
3. Use `/fix:fast` or `/fix:hard` for specific issues

### Q: Is the code production-ready?

**A:** Yes! ClaudeKit includes:
- Comprehensive testing
- Security code review
- Error handling
- Input validation
- Best practices enforcement

However, always review before deploying to production.

### Q: Can I use it in a team?

**A:** Absolutely! ClaudeKit's `.claude/` directory is version-controlled. Your entire team benefits from:
- Shared code standards
- Consistent quality
- Documented workflows
- Same AI capabilities

### Q: How does it compare to GitHub Copilot or Cursor?

| Feature | ClaudeKit | Copilot | Cursor |
|---------|-----------|---------|--------|
| Code completion | ✓ | ✓ | ✓ |
| Full feature implementation | ✓ | ✗ | Partial |
| Automated testing | ✓ | ✗ | ✗ |
| Code review | ✓ | ✗ | ✗ |
| Documentation | ✓ | ✗ | ✗ |
| Multi-agent orchestration | ✓ | ✗ | ✗ |
| Production-ready output | ✓ | ✗ | Partial |
| Tech stack agnostic | ✓ | ✓ | ✓ |

ClaudeKit complements these tools by handling complete workflows, not just code snippets.

---

## Troubleshooting

### Installation Issues

**Problem:** `ck: command not found`

**Solution:**
```bash
# Add to PATH (macOS/Linux)
echo 'export PATH="$HOME/.claudekit/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Windows: Add to Environment Variables manually
```

**Problem:** "GitHub authentication failed"

**Solution:**
1. Create a Personal Access Token: https://github.com/settings/tokens/new
2. Give it `repo` access
3. Set environment variable: `export GITHUB_TOKEN=your_token`
4. OR use GitHub CLI: `gh auth login`

### Command Errors

**Problem:** "Agent not found: planner"

**Solution:**
```bash
# Ensure .claude/ directory exists
ls -la .claude/

# Reinstall if missing
ck update --kit engineer
```

**Problem:** "Context limit exceeded"

**Solution:**
ClaudeKit manages context automatically, but for very large projects:
```bash
# Use focused commands
claude /scout find auth-related files  # Instead of asking about entire codebase

# Break down large tasks
claude /plan [task]  # Review plan before executing
```

### API Key Issues

**Problem:** "Gemini API key not configured"

**Solution:**
1. Get free API key: https://makersuite.google.com/app/apikey
2. Add to `.env`:
```bash
GEMINI_API_KEY=your_key_here
```

### Performance Issues

**Problem:** Commands running slowly

**Solution:**
- Check internet connection (agents research online)
- Reduce scope: break large tasks into smaller ones
- Use `/cook:auto:fast` for simpler tasks

---

## Next Steps

### Level 1: Master the Basics (Week 1)

Day 1-2: **Core commands**
```bash
claude /cook [simple features]
claude /fix:fast [minor bugs]
claude /test
```

Day 3-4: **Design workflows**
```bash
claude /design:screenshot [turn designs to code]
claude /design:good [create from scratch]
```

Day 5-7: **Advanced features**
```bash
claude /plan [complex features]
claude /integrate:polar [payments]
claude /git:pr [create PRs]
```

### Level 2: Optimize Your Workflow (Week 2)

- Customize `.claude/CLAUDE.md` with your code standards
- Create custom slash commands
- Add team-specific skills
- Set up automated testing workflows

### Level 3: Team Collaboration (Week 3+)

- Share `.claude/` directory with team
- Establish team-wide code standards
- Create project-specific workflows
- Document technical decisions with `/journal`

### Real-World Projects

Try these progressively complex projects:

**Beginner:**
```bash
claude /cook create a todo app with local storage
```

**Intermediate:**
```bash
claude /bootstrap a blog with markdown support, syntax highlighting, and dark mode
```

**Advanced:**
```bash
claude /bootstrap a SaaS starter with auth, payments, admin dashboard, and email notifications
```

---

## Learning Resources

### Official Documentation
- ClaudeKit Docs: https://claudekit.cc/docs
- Claude Code Docs: https://docs.claude.ai/code
- Getting Started Guide: https://claudekit.cc/docs/getting-started

### Video Tutorials (Coming Soon)
- Installation walkthrough
- Building your first feature
- Advanced workflows
- Team collaboration

### Community
- GitHub Discussions: https://github.com/claudekit/claudekit/discussions
- Discord: https://discord.gg/claudekit
- Twitter: @claudekit

### Support
- Email: support@claudekit.cc
- Documentation: https://claudekit.cc/docs/troubleshooting
- GitHub Issues: https://github.com/claudekit/claudekit/issues

---

## Conclusion

ClaudeKit transforms how you build software:

**Before ClaudeKit:**
- 8-12 hours to implement a feature
- Manual test writing
- Inconsistent code quality
- Outdated boilerplates
- Tech stack lock-in

**With ClaudeKit:**
- 5-20 minutes to production-ready features
- Automated comprehensive testing
- Enforced best practices
- Living system that improves automatically
- Works with any tech stack

**Your next step:** Install ClaudeKit and ship your first feature in 5 minutes.

```bash
ck new my-first-project --kit engineer
cd my-first-project
claude /cook create a landing page with hero section and contact form
```

Welcome to 10x productivity. 🚀

---

## Appendix: Command Quick Reference

### Development
```bash
/bootstrap [description]   # Start new project
/cook [feature]           # Implement feature
/plan [feature]           # Create plan
/ask [question]           # Query codebase
/test                     # Run tests
/debug [issue]            # Debug problems
```

### Bug Fixing
```bash
/fix:fast [issue]         # Quick fixes
/fix:hard [issue]         # Complex bugs
/fix:ci [url]             # Fix CI failures
/fix:ui [issue]           # UI issues
/fix:test                 # Fix failing tests
```

### Design
```bash
/design:screenshot [path] # Screenshot → code
/design:video [path]      # Video → code
/design:good [desc]       # Polished design
/design:fast [desc]       # Quick design
```

### Git
```bash
/git:cm                   # Stage & commit
/git:cp                   # Commit & push
/git:pr [branch]          # Create PR
```

### Documentation
```bash
/docs:init                # Initialize docs
/docs:update              # Update docs
/docs:summarize           # Summarize docs
```

### Integration
```bash
/integrate:polar          # Polar.sh payments
/integrate:sepay          # SePay.vn payments
```

---

**Published:** October 31, 2025
**Version:** 1.0
**Author:** ClaudeKit Team
**License:** MIT
