---
title: skill-creator
description: "Documentation for skill-creator
description:
section: docs
category: skills/tools
order: 15
published: true"
section: docs
category: skills/tools
order: 15
published: true
---

# skill-creator

Create custom skills that extend Claude's capabilities with specialized knowledge, workflows, and tool integrations.

## What Are Skills?

Skills are packages that give Claude:
- Specialized knowledge
- Step-by-step workflows
- Tool integrations
- Domain expertise
- Bundled resources

## When to Use

Use skill-creator when you need:
- Project-specific skill
- Custom workflow
- Domain knowledge
- Reusable process
- Tool integration
- Company-specific logic

## Quick Start

### Invoke the Skill

```
"Use skill-creator to create skill for Stripe integration that:
- Handles webhooks
- Manages subscriptions
- Processes payments
- Follows best practices"
```

### What You Get

The skill-creator will:
1. Ask clarifying questions
2. Design skill structure
3. Create SKILL.md file
4. Add bundled resources
5. Write documentation
6. Save to `.claude/skills/`

## Common Use Cases

### API Integration Skill

```
"Use skill-creator to make skill for Twilio API:
- Send SMS
- Make calls
- Handle responses
- Manage errors"
```

### Workflow Automation

```
"Use skill-creator for deployment workflow:
- Build application
- Run tests
- Deploy to staging
- Smoke tests
- Deploy to production"
```

### Company Knowledge

```
"Use skill-creator for company coding standards:
- Code structure
- Naming conventions
- Error handling patterns
- Testing requirements"
```

### Data Processing

```
"Use skill-creator for ETL pipeline:
- Extract from sources
- Transform data
- Validate format
- Load to destination"
```

## Skill Anatomy

### SKILL.md Structure

```markdown
---
name: skill-name
description: What skill does and when to use it
---

# Skill Name

Instructions Claude follows when skill is active.

## When to Use
Specific scenarios

## Examples
Real usage examples

## Best Practices
Guidelines to follow
```

### Bundled Resources

**Scripts** (`scripts/`)
- Executable code
- Reusable functions
- Automation tools

**References** (`references/`)
- Documentation
- API specs
- Examples
- Guides

**Assets** (`assets/`)
- Templates
- Images
- Boilerplate
- Configuration files

## Example Skills to Create

### Framework Integration

```
"Use skill-creator for Vue.js skill:
- Component patterns
- Composition API
- State management
- Best practices
- Common pitfalls"
```

### Database Operations

```
"Use skill-creator for MongoDB skill:
- Schema design
- Query optimization
- Aggregation pipelines
- Index strategies
- Migration patterns"
```

### Testing Workflows

```
"Use skill-creator for E2E testing:
- Playwright setup
- Page objects
- Test scenarios
- Assertions
- CI integration"
```

### Security Practices

```
"Use skill-creator for security skill:
- Input validation
- SQL injection prevention
- XSS protection
- CSRF tokens
- Secure headers"
```

## Design Process

### Step 1: Define Purpose

```
"Use skill-creator to plan skill for:
- What problem does it solve?
- Who will use it?
- What outcomes are expected?
- What knowledge is needed?"
```

### Step 2: Gather Examples

```
"Use skill-creator to collect examples:
- Working code samples
- Common patterns
- Error scenarios
- Edge cases"
```

### Step 3: Structure Content

```
"Use skill-creator to organize:
- Core instructions
- Reference materials
- Reusable scripts
- Example assets"
```

### Step 4: Test & Refine

```
"Use skill-creator to validate:
- Test on real tasks
- Gather feedback
- Update content
- Improve clarity"
```

## Best Practices

### Clear Description

**Good:**
```yaml
description: Guide for implementing Stripe payments with TypeScript, including webhooks, subscriptions, and error handling. Use when adding payment processing to applications.
```

**Bad:**
```yaml
description: Stripe skill
```

### Specific Instructions

**Good:**
```markdown
## Creating a Customer

To create a Stripe customer:
1. Import stripe client
2. Call stripe.customers.create()
3. Pass email and metadata
4. Store customer ID in database
5. Handle errors with try/catch
```

**Bad:**
```markdown
Create customers as needed.
```

### Include Examples

**Good:**
```markdown
## Example: Create Subscription

```typescript
const subscription = await stripe.subscriptions.create({
  customer: customerId,
  items: [{ price: priceId }],
  payment_behavior: 'default_incomplete',
  expand: ['latest_invoice.payment_intent']
});
```
```

### Provide Context

**Good:**
```markdown
## When to Use

Use this skill when:
- Implementing payment processing
- Handling recurring billing
- Managing customer subscriptions
- Processing webhook events
```

## Advanced Features

### Multi-File Skills

```
"Use skill-creator to build complex skill:
- Main SKILL.md
- scripts/helper.py
- references/api-docs.md
- assets/template.json"
```

### Dynamic Content

```
"Use skill-creator with:
- Parameterized instructions
- Conditional logic
- Environment-specific configs
- Template variables"
```

### Skill Dependencies

```
"Use skill-creator to reference other skills:
- Build on existing skills
- Combine capabilities
- Share resources
- Avoid duplication"
```

## Testing Skills

### Validate Structure

```
"Use skill-creator to check:
- YAML frontmatter correct
- Required fields present
- Markdown formatting valid
- File structure proper"
```

### Test Usage

```
"Use skill-creator then test the new skill:
1. Invoke skill in conversation
2. Verify Claude follows instructions
3. Check output quality
4. Gather feedback
5. Iterate improvements"
```

## Skill Categories

### Technical Skills

- Framework guides (React, Vue, Django)
- Database operations (PostgreSQL, MongoDB)
- DevOps tools (Docker, Kubernetes)
- API integrations (Stripe, Twilio)

### Business Skills

- Company processes
- Industry standards
- Compliance requirements
- Brand guidelines

### Workflow Skills

- Deployment procedures
- Testing protocols
- Code review checklists
- Documentation standards

## Quick Examples

**Simple Skill:**
```
"Use skill-creator for API error handling patterns"
```

**Complex Skill:**
```
"Use skill-creator for complete authentication system:
- User registration
- Login/logout
- Password reset
- Session management
- OAuth integration
- 2FA support"
```

**Domain Skill:**
```
"Use skill-creator for financial calculations:
- Interest computation
- Amortization schedules
- Currency conversion
- Tax calculations"
```

## Iteration & Improvement

### Gather Feedback

```
"Use skill-creator to improve existing skill:
- Test on real tasks
- Note pain points
- Collect suggestions
- Update content"
```

### Version Control

```
"Use skill-creator to manage versions:
- Track changes
- Document updates
- Maintain compatibility
- Deprecate old patterns"
```

### Share Skills

```
"Use skill-creator then:
- Export as ZIP
- Share with team
- Contribute to community
- Document usage"
```

## Skill Storage

### Project Skills

Located in `.claude/skills/`
- Shared with team
- Version controlled
- Project-specific

### Personal Skills

Located in `~/.claude/skills/`
- Available everywhere
- Personal workflows
- Cross-project use

## Next Steps

- [Existing Skills](/docs/skills/)
- [Skill Examples](/docs/use-cases/)
- [Advanced Patterns](/docs/use-cases/)

---

**Bottom Line:** skill-creator transforms your knowledge into reusable skills. Describe what you need and let the skill-creator build it.
