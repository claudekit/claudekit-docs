---
title: /journal
description: Documentation for journal
section: engineer
kit: engineer
category: commands/core
order: 6
published: true
---

# /journal

Development documentation command. Creates structured journal entries documenting work sessions, code changes, technical decisions, and project memories.

## Syntax

```bash
/journal
```

## When to Use

- **End of Day**: Document work completed during the session
- **After Major Changes**: Record significant code changes and rationale
- **Decision Documentation**: Capture architectural and technical decisions
- **Knowledge Transfer**: Create memory logs for team handoffs
- **Session Summaries**: Track progress across multiple work sessions

## Quick Example

```bash
/journal
```

**Output**:
```
Exploring memories and recent code changes...

Journal Entry Created: journals/session-2025-10-30.md

## Session Summary
Date: 2025-10-30
Duration: 3.5 hours
Focus: Payment integration

## Work Completed

### Features Implemented
1. Stripe payment processing (src/payments/stripe.js)
   - Payment intent creation
   - Webhook handling for payment confirmation
   - Refund processing

2. Payment API endpoints (src/routes/payments.js)
   - POST /api/payments/create-intent
   - POST /api/payments/webhook
   - POST /api/payments/refund

### Tests Added
- tests/payments/stripe.test.js (12 tests)
- tests/integration/payment-flow.test.js (8 tests)
- Coverage: 94%

### Documentation Updated
- docs/api/payments.md - Payment API documentation
- docs/guides/payment-integration.md - Integration guide

## Technical Decisions

1. Chose Stripe over PayPal
   - Better API design
   - Stronger TypeScript support
   - Lower transaction fees for our volume

2. Webhook security approach
   - Signature verification using Stripe SDK
   - Idempotency keys for duplicate prevention
   - Retry logic with exponential backoff

## Challenges & Solutions

Challenge: Webhook testing in development
Solution: Used Stripe CLI for local webhook forwarding

Challenge: Handling partial refunds
Solution: Store refund history in database, check before processing

## Code Changes

Files Modified: 8
Files Created: 6
Tests Added: 20
Lines Changed: +742, -23

Key Files:
- src/payments/stripe.js (new, 234 lines)
- src/routes/payments.js (new, 123 lines)
- src/models/payment.js (modified, +45 lines)
- .env.example (modified, +3 lines)

## Next Steps

1. Deploy to staging for testing
2. Test webhook handling in staging environment
3. Add monitoring for failed payments
4. Implement payment notification emails

## Notes

- Stripe test keys configured in .env
- Webhook secret stored in config/secrets
- Production deployment requires PCI compliance review
```

**Result**: Comprehensive session documentation saved for future reference.

## Arguments

None required. Command automatically:
- Explores recent commits and changes
- Reads project memories
- Analyzes modified files
- Generates structured journal entry

## What Happens

When you run this command:

1. **Memory Exploration**: Delegates to `journal-writer` subagent
2. **Change Analysis**: Agent examines:
   - Recent git commits
   - Modified files (git diff)
   - Created files
   - Test additions
   - Documentation updates
   - Configuration changes
3. **Context Gathering**: Reviews:
   - Project documentation in `./docs`
   - Recent commands executed
   - Agent reports in `./plans`
   - Error logs if any
4. **Entry Generation**: Creates structured journal entry
5. **Save**: Writes to `journals/` directory with timestamp

**Agents Invoked**: `journal-writer` subagent

## Complete Example

### Scenario: Multi-Day Feature Development

After completing a complex feature over several work sessions.

```bash
/journal
```

**Generated Journal Entry**:

```markdown
# Development Journal Entry
Date: 2025-10-30
Session: 5 (of ongoing feature work)
Author: ClaudeKit Engineer

## Context

### Previous Sessions Recap
- Session 1-2: Real-time chat architecture and planning
- Session 3: WebSocket server implementation
- Session 4: Room management and broadcasting
- Session 5 (today): Message persistence and testing

### Current Sprint Goal
Implement real-time chat feature with message history, typing indicators, and read receipts

## Today's Work (Session 5)

### Features Completed

#### 1. Message Persistence
Location: src/models/message.js, src/services/message-store.js
Description:
- Messages saved to PostgreSQL database
- Indexes on room_id and created_at for fast retrieval
- Automatic cleanup of messages older than 90 days

Implementation Details:
- Used Prisma ORM for type-safe database access
- Batch inserts for performance (max 100 messages/batch)
- Connection pooling to handle high concurrent writes

Code Snippet:
src/services/message-store.js:34-56
  async saveMessage(message) {
    return await this.prisma.message.create({
      data: {
        roomId: message.roomId,
        userId: message.userId,
        content: message.content,
        createdAt: new Date()
      }
    });
  }

#### 2. Message History API
Location: src/routes/messages.js
Endpoints:
- GET /api/rooms/:roomId/messages - Retrieve message history
- GET /api/rooms/:roomId/messages?before=:timestamp - Pagination
- GET /api/rooms/:roomId/messages/unread - Unread count

Features:
- Cursor-based pagination (50 messages per page)
- Efficient unread message counting
- Permission checks (user must be in room)

Performance:
- 20ms average response time
- Supports 1000+ concurrent requests
- Index scan (not full table)

#### 3. Real-Time Delivery Confirmation
Location: src/websocket/handlers/message.js
Description:
- Server acknowledges message receipt
- Broadcasts to room members
- Sends delivery confirmation to sender

Flow:
1. Client sends message via WebSocket
2. Server persists to database
3. Server broadcasts to room
4. Server sends confirmation to sender
5. Recipients send read receipts

### Testing Completed

#### Unit Tests
File: tests/unit/message-store.test.js
Coverage: 96%
Tests: 18
Focus:
- Message creation validation
- Batch insert edge cases
- Query performance
- Error handling

#### Integration Tests
File: tests/integration/message-api.test.js
Coverage: 92%
Tests: 24
Focus:
- API endpoint functionality
- Pagination correctness
- Permission enforcement
- Error responses

#### End-to-End Tests
File: tests/e2e/chat-flow.test.js
Coverage: 88%
Tests: 12
Scenarios:
- Complete message send/receive flow
- Multiple users in room
- Message history retrieval
- Unread message counting
- WebSocket reconnection

Overall Test Results:
- 54 tests total
- All passing
- Total coverage: 91%
- No flaky tests

### Documentation

#### Updated
- docs/api/messages.md - Message API documentation
- docs/websocket.md - WebSocket event protocol
- docs/database-schema.md - Message table schema

#### Created
- docs/guides/chat-implementation.md - Chat feature guide
- docs/troubleshooting/websocket.md - Common issues and fixes

### Configuration & Infrastructure

#### Database Migration
File: prisma/migrations/20251030_add_messages/migration.sql
Changes:
- Created messages table
- Added indexes on roomId, userId, createdAt
- Foreign keys to rooms and users tables

#### Environment Variables
Added to .env.example:
- MESSAGE_RETENTION_DAYS=90
- MESSAGE_PAGE_SIZE=50
- WEBSOCKET_MESSAGE_MAX_LENGTH=5000

## Technical Decisions

### Decision 1: Message Storage Strategy
Options Considered:
A. Store all messages in PostgreSQL
B. Use Redis for recent messages, PostgreSQL for archive
C. Use separate message database (MongoDB)

Chosen: Option A (PostgreSQL only)

Rationale:
- Simpler architecture (single database)
- PostgreSQL handles our message volume (<1M messages/day)
- Excellent query performance with proper indexes
- ACID guarantees important for message integrity
- Team familiar with PostgreSQL

Trade-offs:
- May need to revisit at 10M+ messages/day
- Redis layer could reduce database load
- Plan migration path if needed

### Decision 2: Pagination Strategy
Options Considered:
A. Offset-based pagination (LIMIT/OFFSET)
B. Cursor-based pagination (timestamp)
C. Keyset pagination (composite key)

Chosen: Option B (Cursor-based)

Rationale:
- Consistent results even with new messages
- Better performance (no offset scan)
- Natural ordering by timestamp
- Works well with infinite scroll UI

Implementation:
- Use createdAt timestamp as cursor
- Client passes last message timestamp
- Query: WHERE createdAt < :cursor ORDER BY createdAt DESC LIMIT 50

### Decision 3: Real-Time Delivery Confirmation
Approach: Three-stage confirmation
1. Server ACK (message received)
2. Delivery confirmation (broadcast complete)
3. Read receipts (user saw message)

Rationale:
- Provides detailed delivery status
- Handles offline users gracefully
- Similar to WhatsApp/Signal UX
- Minimal additional complexity

## Challenges & Solutions

### Challenge 1: Race Condition in Unread Counts
Problem:
- Multiple WebSocket connections for same user
- Unread count inconsistent across devices
- Concurrent updates causing incorrect counts

Solution:
- Use database-level counters with atomic updates
- Last-read timestamp per user per room
- Calculate unread on-demand rather than storing count
- Broadcast count updates to all user devices

Code: src/services/unread-counter.js:23-45

Result: Eliminated race condition, consistent counts

### Challenge 2: WebSocket Message Ordering
Problem:
- Messages sometimes delivered out of order
- Multiple server instances (load balancing)
- Network latency variations

Solution:
- Add sequence numbers to messages
- Client reorders based on sequence
- Server assigns sequence atomically (Redis INCR)
- Fallback to timestamp if sequence missing

Code: src/websocket/sequencer.js:12-34

Result: Guaranteed message ordering

### Challenge 3: Large Message Handling
Problem:
- Some users sending very long messages
- Overwhelming WebSocket buffer
- Database performance impact

Solution:
- Enforce 5000 character limit
- Client-side validation with user feedback
- Server-side validation (reject oversized)
- Suggest splitting into multiple messages

Code: src/middleware/message-validator.js:8-20

Result: Better performance, clearer limits

## Code Quality

### Metrics
- Cyclomatic complexity: 4.2 (target <10)
- Function length: avg 12 lines (target <20)
- Test coverage: 91% (target >80%)
- No linting errors

### Code Review Notes
Self-review findings:
- ✓ Error handling comprehensive
- ✓ Input validation thorough
- ✓ Logging appropriate
- ⚠ Consider extracting message validation rules to config
- ⚠ Add JSDoc comments to public functions

### Refactoring Done
- Extracted message broadcasting logic to utility
- Created reusable pagination helper
- Consolidated error responses

## Performance

### Benchmarks
Test: 1000 concurrent users sending 10 messages/minute each
Results:
- Average message latency: 45ms
- 99th percentile latency: 120ms
- Database connections: 18/20 (peak)
- CPU usage: 35%
- Memory usage: 340MB (stable)

### Optimizations Applied
1. Message batching for database writes
2. Connection pooling (20 max connections)
3. Query result caching (5 second TTL)
4. Index on (roomId, createdAt) for pagination queries

## Security

### Implemented
- ✓ Input sanitization (XSS prevention)
- ✓ Room membership verification
- ✓ Rate limiting (30 messages/minute per user)
- ✓ Message content validation
- ✓ SQL injection prevention (parameterized queries)

### Pending
- [ ] End-to-end encryption (Phase 2)
- [ ] Message reporting/moderation (Phase 2)
- [ ] Audit logging for admin actions

## Known Issues

### Issue 1: Typing Indicators
Status: Not implemented yet
Reason: Deprioritized for launch
Plan: Implement in Phase 2
Effort: 4 hours estimated

### Issue 2: File Attachments
Status: Planned for Phase 2
Dependencies: Need S3 setup
Timeline: Next sprint

### Issue 3: Message Search
Status: Basic implementation only
Limitations: Searches message content, not performant at scale
Future: Consider Elasticsearch for full-text search

## Dependencies

### New Dependencies Added
- prisma@5.7.0 - ORM for database access
- @prisma/client@5.7.0 - Prisma client
- ws@8.14.2 - WebSocket library

### Updated Dependencies
- express@4.18.2 → 4.18.3 (security patch)

## Deployment Notes

### Staging Deployment
- [ ] Run database migration
- [ ] Update environment variables
- [ ] Deploy application
- [ ] Verify WebSocket connectivity
- [ ] Test message send/receive
- [ ] Monitor for 24 hours

### Production Checklist
- [ ] All staging tests passing
- [ ] Performance benchmarks met
- [ ] Security review completed
- [ ] Documentation updated
- [ ] Rollback plan documented
- [ ] Monitoring alerts configured

## Next Steps

### Immediate (Today)
1. Deploy to staging
2. Run smoke tests
3. Update team on progress

### Short-Term (This Week)
1. User acceptance testing on staging
2. Fix any bugs discovered
3. Prepare production deployment
4. Write deployment runbook

### Medium-Term (Next Sprint)
1. Implement typing indicators
2. Add file attachment support
3. Enhance message search
4. Add message reactions (emoji)

## Lessons Learned

1. **Plan for scale early**: Added indexes from start, avoided performance refactor
2. **Test WebSocket edge cases**: Reconnection, connection drops, concurrent connections
3. **Database migrations careful**: Test migrations on production-like data volume
4. **Documentation concurrent**: Wrote docs as I implemented, not after

## References

- Original design doc: docs/design/chat-feature-design.md
- Architecture decision records: docs/adr/
- WebSocket protocol spec: docs/websocket-protocol.md

## Time Breakdown

- Implementation: 2.5 hours
- Testing: 1 hour
- Documentation: 0.5 hours
- Code review & cleanup: 0.5 hours
- Total: 4.5 hours

---

**End of Journal Entry**
```

**Report Saved**: `journals/session-2025-10-30-complete.md`

## Journal Entry Structure

Typical sections included:

### Automatically Generated
- Date and session metadata
- Code changes summary (files, lines, commits)
- Test coverage statistics
- Documentation updates

### Agent-Written
- Work completed description
- Technical decisions and rationale
- Challenges encountered and solutions
- Performance metrics
- Security considerations
- Known issues and future work
- Lessons learned

## Common Use Cases

### Daily Standup Preparation

```bash
# Before standup meeting
/journal

# Review journal entry
cat journals/session-latest.md

# Use in standup:
# - What I did: [from Work Completed]
# - Challenges: [from Challenges section]
# - Today's plan: [from Next Steps]
```

### Team Handoff

```bash
# End of your work session
/journal

# Share with team
# Journal provides complete context for next developer
```

### Sprint Retrospective

```bash
# Review week's journals
ls journals/

# Analyze:
# - Velocity (time breakdowns)
# - Common challenges
# - Technical debt accumulated
# - Decisions made
```

### Audit Trail

```bash
# For compliance or review
/journal

# Documents:
# - What changed
# - Why decisions made
# - Who made changes (git author)
# - When (timestamps)
```

## Best Practices

### Run Regularly

✅ **Good cadence:**
- End of each work session
- After completing major feature
- Before team handoffs
- After significant decisions

❌ **Too infrequent:**
- Once per sprint (loses detail)
- Only when asked (missing context)

### Commit Journals

```bash
# Create journal
/journal

# Add to git
git add journals/

# Commit with code
/git:cm
```

Benefits:
- Journals version-controlled with code
- Team can see decision history
- Future developers understand why

### Review Old Journals

```bash
# Before similar work
grep -r "authentication" journals/

# Understand past decisions
cat journals/session-2025-09-15.md

# Avoid repeating mistakes
```

## Generated Artifacts

Journals saved to:
```
journals/
├── session-2025-10-30.md
├── session-2025-10-29.md
├── session-2025-10-28.md
└── ...
```

Naming convention:
- `session-YYYY-MM-DD.md` - One per day
- `session-YYYY-MM-DD-HH-MM.md` - Multiple sessions per day

## Integration with Other Commands

### After /cook

```bash
# Implement feature
/cook [add payment processing]

# Document the work
/journal

# Commit everything
/git:cm
```

### With /watzup

```bash
# See what changed
/watzup

# Create detailed journal
/journal

# Both commands complement each other:
# - /watzup: Quick summary
# - /journal: Detailed documentation
```

### Before /git:pr

```bash
# Complete feature work
/cook [feature]

# Document
/journal

# Review changes
git diff main

# Create PR with journal as context
/git:pr feature-branch main
```

## What Journal Captures

### Code Changes
- Files modified/created/deleted
- Lines added/removed
- Commits made
- Branches worked on

### Technical Decisions
- Architectural choices
- Technology selections
- Trade-off analysis
- Alternatives considered

### Work Progress
- Features implemented
- Tests written
- Documentation updated
- Bugs fixed

### Challenges
- Problems encountered
- Solutions attempted
- Successful resolutions
- Open issues

### Future Work
- Next steps identified
- TODOs created
- Known limitations
- Enhancement ideas

## Common Issues

### Empty Journal

**Problem**: Journal has minimal content

**Cause**: No recent code changes or commits

**Solution**: Make commits before running journal
```bash
# Make changes
# ...

# Commit first
git add .
git commit -m "Implement feature"

# Then journal
/journal
```

### Too Much Detail

**Problem**: Journal extremely long

**Cause**: Many changes across multiple features

**Solution**: Journal more frequently
```bash
# After each major feature
/cook [feature 1]
/journal

/cook [feature 2]
/journal
```

### Missing Context

**Problem**: Journal doesn't explain why decisions made

**Solution**: Add comments in code explaining rationale
```javascript
// Using exponential backoff because linear retry
// caused thundering herd in production incident 2025-09
async function retryWithBackoff() { ... }
```

Journal will pick up these comments.

## Advanced Usage

### Custom Journal Sections

Add file: `.claude/journal-template.md`
```markdown
# Custom Section

## Business Value Delivered
[Automatically filled by agent]

## Customer Impact
[Automatically filled by agent]
```

### Integration with Task Tracking

Journal automatically references:
- GitHub issues (if mentioned in commits)
- JIRA tickets (if in commit messages)
- TODO comments in code

### Metrics Tracking

Journals include metrics over time:
- Code velocity (lines/day)
- Test coverage trend
- Bug fix rate
- Feature completion rate

## Related Commands

- [/watzup](/docs/engineer/commands/core/watzup) - Quick summary of recent changes
- [/cook](/docs/engineer/commands/core/cook) - Implement features (document with journal after)
- [/git:cm](/docs/engineer/commands/git/commit) - Commit changes (journal first for context)

---

**Key Takeaway**: `/journal` creates comprehensive, structured documentation of your development sessions, preserving technical decisions, challenges, and context for future reference and team collaboration.
