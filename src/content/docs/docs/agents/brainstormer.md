---
title: Brainstormer Agent
description: Solution architect and technical advisor for exploring approaches, challenging assumptions, and debating decisions
section: docs
category: agents
order: 6
published: true
---

# Brainstormer Agent

The brainstormer agent is your technical advisor and solution architect who explores multiple approaches, challenges assumptions, questions requirements, and provides brutally honest assessments before any code is written.

## What Brainstormer Does

- Explores multiple technical approaches with detailed pros/cons analysis
- Challenges assumptions and questions unclear requirements
- Provides honest assessments about implementation feasibility
- Evaluates trade-offs between competing solutions
- Considers UX/DX implications of architectural decisions
- Identifies technical debt and maintenance concerns
- Applies YAGNI, KISS, and DRY principles to solution design

## When to Use

Use brainstormer when:
- Evaluating multiple architectural approaches before committing
- Debating technical decisions with competing trade-offs
- Challenging existing assumptions about requirements
- Solving complex problems requiring creative solutions
- Assessing feasibility of ambitious feature requests
- Planning major refactoring efforts
- Designing system architecture for new features
- Need a "second opinion" on technical direction

## Quick Example

```bash
# Debate approaches for a feature
/brainstorm [should we use REST API or GraphQL for our mobile app?]
```

**What happens**:
1. Brainstormer analyzes both approaches thoroughly
2. Brainstormer evaluates pros/cons for your specific context
3. Brainstormer challenges assumptions about requirements
4. Result: Comprehensive analysis with recommendation

## How It Works

### Step 1: Requirement Analysis

Brainstormer starts by questioning and clarifying:

```
User Request: "Add caching to improve performance"
    ↓
Brainstormer Questions:
- What performance problem are we solving?
- Where is the bottleneck? (Database, API, frontend?)
- What are current response times?
- What's the acceptable response time?
- How often does data change?
- How many users are we serving?
```

This ensures solutions address real problems, not imagined ones.

### Step 2: Approach Exploration

Brainstormer explores multiple valid approaches:

```
Problem: "Slow API responses"
    ↓
Approach A: In-Memory Cache (Redis)
Approach B: Database Query Optimization
Approach C: CDN for Static Content
Approach D: Response Caching (HTTP)
Approach E: Do Nothing (Measure First)
```

### Step 3: Trade-Off Analysis

For each approach, brainstormer evaluates:

- **Implementation Complexity**: Time and effort required
- **Maintenance Burden**: Long-term upkeep costs
- **Performance Impact**: Actual speed improvements
- **Cost Implications**: Infrastructure and operational costs
- **Technical Debt**: Future flexibility and refactoring
- **UX/DX Impact**: User and developer experience changes
- **Risk Assessment**: What could go wrong

### Step 4: Brutal Honesty

Brainstormer provides unfiltered assessment:

✅ "This is overengineering. Start with database indexes first."
⚠️ "This will work but creates tight coupling. Consider this risk."
❌ "This approach will cause more problems than it solves."
💡 "Have you considered this simpler alternative?"

## Tools & Capabilities

Brainstormer has access to:

- **Planner Agent**: Consults for implementation details
- **Docs-Manager Agent**: Reviews current architecture documentation
- **WebSearch**: Researches architectural patterns and case studies
- **docs-seeker Skill**: Finds relevant technology documentation
- **gemini-vision Skill**: Analyzes architecture diagrams
- **psql**: Queries database for current state analysis
- **sequential-thinking Skill**: Breaks down complex problems systematically
- **repomix**: Understands full codebase context
- **scout Agents**: Locates relevant files across codebase

## Output Format

Brainstormer creates comprehensive markdown summary reports with clear structure.

**Example Output**:

```markdown
# Brainstorming Session: API Architecture Decision

**Question**: Should we use REST API or GraphQL for our mobile app?

**Context**: Building iOS/Android mobile app that displays user profiles, posts, comments, and notifications. Backend is Node.js + PostgreSQL. Team has REST experience, no GraphQL experience.

---

## Challenged Assumptions

Before diving into solutions, let's question the premise:

❓ **Assumption**: "We need to choose one"
**Reality**: You can use both. Start with REST, add GraphQL for specific use cases later.

❓ **Assumption**: "GraphQL is always better for mobile"
**Reality**: GraphQL adds complexity. REST can be excellent for mobile with proper API design.

❓ **Assumption**: "Performance is the primary concern"
**Reality**: Developer productivity and maintenance might matter more at this stage.

---

## Approach A: REST API (Recommended)

### Description
Traditional RESTful API with versioned endpoints, JSON responses, and standard HTTP methods.

### Pros
✅ **Team Knowledge**: Your team already knows REST well
✅ **Tooling**: Mature ecosystem (Swagger, Postman, etc.)
✅ **Simplicity**: Straightforward request/response model
✅ **Caching**: Built-in HTTP caching, CDN-friendly
✅ **Monitoring**: Standard APM tools work out-of-box
✅ **Quick Start**: Can ship MVP in 1-2 weeks

### Cons
❌ **Over-fetching**: Mobile app gets more data than needed
❌ **Multiple Requests**: Need separate calls for related data
❌ **Versioning**: API versioning can become complex
❌ **Flexibility**: Changing requirements means API changes

### Implementation Complexity
**Low** - 2-3 days for experienced team

### Maintenance Burden
**Low-Medium** - Versioning can become burden as API grows

### Best For
- Teams with limited GraphQL experience
- MVPs requiring fast delivery
- Public APIs consumed by many clients
- Systems requiring extensive caching

---

## Approach B: GraphQL API

### Description
Single endpoint with GraphQL query language allowing clients to request exactly the data they need.

### Pros
✅ **Precise Data**: Mobile app requests only what it needs
✅ **Single Request**: Fetch related data in one query
✅ **Introspection**: Auto-generated API documentation
✅ **Type Safety**: Strong typing prevents errors
✅ **Developer Experience**: Playground for API exploration

### Cons
❌ **Learning Curve**: Team needs to learn GraphQL
❌ **Complexity**: Requires resolvers, schema design, N+1 query handling
❌ **Caching**: HTTP caching doesn't work, need custom solution
❌ **Monitoring**: Harder to monitor and debug
❌ **Performance**: Easy to write expensive queries
❌ **Implementation Time**: 3-4 weeks for team to learn and implement

### Implementation Complexity
**High** - 3-4 weeks for inexperienced team

### Maintenance Burden
**Medium** - Need to manage schema, resolvers, and query optimization

### Best For
- Teams with GraphQL experience
- Complex data relationships and deep nesting
- Frequent UI changes requiring API flexibility
- Internal APIs with controlled clients

---

## Approach C: Hybrid (Pragmatic)

### Description
Start with REST API for simple endpoints, add GraphQL for complex data fetching later.

### Implementation
```
Phase 1 (Weeks 1-2): REST API
- POST /auth/login
- GET /users/:id
- GET /posts
- GET /posts/:id

Phase 2 (Weeks 3-4): Add GraphQL for complex queries
- User feed with posts, comments, likes (single query)
- Search across multiple entities
- Real-time subscriptions
```

### Pros
✅ **Progressive Adoption**: Learn GraphQL gradually
✅ **Risk Mitigation**: Fallback to REST if GraphQL issues
✅ **Flexibility**: Use right tool for each use case
✅ **Team Growth**: Upskill team over time

### Cons
❌ **Complexity**: Maintaining two API styles
❌ **Inconsistency**: Clients need to know which to use
❌ **Documentation**: Need to document both approaches

---

## Brutal Honesty Assessment

### The Truth About Your Situation

🎯 **What Matters Most**: Shipping the mobile app in 6 weeks

⚠️ **Real Risk**: Team learning GraphQL while building MVP will cause delays

💡 **Overlooked Option**: Good REST API design solves 90% of your concerns

🔍 **Hidden Assumption**: You think GraphQL is necessary because big tech companies use it. They also have 100+ engineers and different constraints.

### The Over-Engineering Trap

GraphQL is powerful but might be overkill if:
- You have <5 different types of API clients
- Data relationships aren't deeply nested
- Team has limited GraphQL experience
- MVP timeline is tight

### What Would I Do?

If this were my project:

1. **Week 1-2**: Build REST API with good design
   - Use pagination (`limit`, `offset`)
   - Support field filtering (`?fields=id,name,email`)
   - Enable embedding (`?embed=posts,comments`)
   - Implement proper caching headers

2. **Week 3-4**: Build mobile app against REST API
   - Measure actual API performance
   - Identify real pain points
   - Document what's slow or awkward

3. **Week 5-6**: Optimize based on data
   - If over-fetching is real problem, add GraphQL
   - If not, improve REST with lessons learned

---

## Recommendation

### For Your Context

**Go with REST API** for these reasons:

1. ⏰ **Time Pressure**: 6-week deadline favors known technology
2. 👥 **Team Experience**: Leverage existing REST expertise
3. 📱 **Mobile Use Case**: Not complex enough to justify GraphQL learning curve
4. 🎯 **MVP Goals**: Get to market fast, optimize later

### Success Criteria

REST API will succeed if:
- Response times <200ms for 95th percentile
- Mobile app makes <5 API calls per screen
- Over-fetching is <30% of response payload
- Development velocity stays high

If these criteria aren't met after MVP launch, then reconsider GraphQL.

### Migration Path

If you need GraphQL later:

```typescript
// You can add GraphQL alongside REST
app.use('/api/v1', restRoutes);      // Keep existing REST
app.use('/graphql', graphqlRouter);   // Add GraphQL
```

No need to rewrite everything. Progressive enhancement.

---

## Core Principles Applied

### YAGNI (You Aren't Gonna Need It)
Don't add GraphQL complexity until you have concrete evidence you need it.

### KISS (Keep It Simple, Stupid)
REST is simpler for your team right now. Simple ships faster.

### DRY (Don't Repeat Yourself)
Both approaches can be DRY. This isn't the deciding factor.

---

## Open Questions for You

Before finalizing decision:

1. What's your actual performance requirement? (e.g., "95th percentile <200ms")
2. How much over-fetching is acceptable? (e.g., "30% waste is fine")
3. Is the team willing to delay MVP to learn GraphQL properly?
4. Do you have budget for GraphQL tooling and monitoring?
5. What's your plan if GraphQL performance issues arise?

---

## Next Steps

**Recommended Path**:

1. **Accept the REST decision** ✅
2. **Run**: `/plan [build REST API for mobile app]`
3. **Design endpoints** with good practices (pagination, filtering, embedding)
4. **Measure** API usage patterns post-launch
5. **Revisit** GraphQL decision with real data in 3 months

**Alternative Path** (if you insist on GraphQL):

1. **Allocate 1 week** for team GraphQL training
2. **Build simple prototype** with Apollo Server
3. **Assess complexity** before committing to full implementation
4. **Extend timeline** by 2-3 weeks to account for learning curve

---

**My Confidence**: High (similar projects, experienced with both approaches)
**Key Risk**: Underestimating GraphQL learning curve
**Success Factor**: Choose based on constraints (time, team, complexity), not hype
```

## Best Practices

✅ **Do**:
- Present specific constraints (timeline, budget, team skills)
- Be open to challenging your assumptions
- Consider maintenance costs, not just implementation
- Think about team capabilities and learning curves
- Ask "do we really need this complexity?"

❌ **Don't**:
- Start with "I already decided, just validate it"
- Ignore the brutally honest assessment
- Skip the "open questions" section
- Choose solutions based on hype or trends
- Dismiss simpler alternatives prematurely

## Common Issues

### Issue: Defensive About Existing Ideas

**Problem**: Getting defensive when brainstormer challenges your approach

**Solution**:
Remember brainstormer's role is to save you from costly mistakes. Challenging ideas early is cheaper than fixing wrong decisions later.

### Issue: Analysis Paralysis

**Problem**: Too many options, can't decide

**Solution**:
- Focus on "recommendation" section
- Use "success criteria" to guide decision
- Start with simplest approach
- Plan migration path if you need to change later

### Issue: Ignoring YAGNI Principle

**Problem**: Want to build complex solution "just in case"

**Solution**:
Brainstormer will call this out. Trust the YAGNI assessment. Build what you need now, not what you might need someday.

## Related

- [Planner Agent](/docs/agents/planner) - Creates detailed implementation plans after approach is decided
- [Researcher Agent](/docs/agents/researcher) - Provides data for brainstorming decisions
- [Docs-Manager Agent](/docs/agents/docs-manager) - Maintains architectural decision records
- [/brainstorm Command](/docs/commands/core/brainstorm) - Triggers brainstorming session

---

**Next**: Once approach is decided, use [planner agent](/docs/agents/planner) to create implementation plan

**Remember**: Brainstormer doesn't implement anything. It only advises, challenges, and recommends. Implementation comes after you've made informed decisions.
