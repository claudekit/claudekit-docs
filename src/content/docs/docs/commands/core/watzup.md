---
title: /watzup
description: "Documentation for /watzup
description:
section: docs
category: commands/core
order: 7
published: true"
section: docs
category: commands/core
order: 7
published: true
---

# /watzup

Quick review command that analyzes your current branch, recent commits, and code changes to provide a comprehensive summary of all work done. Perfect for stand-ups, code reviews, or understanding recent activity.

## Syntax

```bash
/watzup
```

## What It Does

The `/watzup` command provides a comprehensive overview of:

1. **Current Branch Status**
   - Active branch name
   - Comparison with main/master branch
   - Ahead/behind commit count

2. **Recent Commits**
   - Commit messages
   - Author information
   - Timestamps
   - Files affected

3. **Code Changes Analysis**
   - Files modified, added, or removed
   - Lines added/deleted
   - Change patterns and themes

4. **Overall Impact Assessment**
   - Features added
   - Bugs fixed
   - Refactoring done
   - Breaking changes (if any)

5. **Quality Evaluation**
   - Code organization
   - Test coverage impact
   - Documentation updates
   - Potential concerns

**IMPORTANT**: This command does NOT start implementation. It only analyzes and reports.

## Quick Example

```bash
/watzup
```

**Output:**
```
Analyzing current branch and recent changes...

## Branch Status
Current: feature/payment-integration
Base: main
Status: 5 commits ahead, up to date

## Recent Commits (Last 5)

1. feat: Add Stripe payment processing
   Author: You
   Time: 2 hours ago
   Files: 8 changed (+420, -15)

2. test: Add payment integration tests
   Author: You
   Time: 1 hour ago
   Files: 3 changed (+180, -0)

3. docs: Update payment API documentation
   Author: You
   Time: 30 minutes ago
   Files: 2 changed (+65, -10)

4. fix: Handle payment webhook errors
   Author: You
   Time: 15 minutes ago
   Files: 2 changed (+25, -8)

5. chore: Update Stripe SDK to v12
   Author: You
   Time: 10 minutes ago
   Files: 1 changed (+2, -2)

## Code Changes Summary

### Files Modified (14 total)
- src/payments/stripe.ts (new, +234 lines)
- src/routes/payment-routes.ts (+85 lines)
- src/models/payment.model.ts (+45 lines)
- tests/payments/*.test.ts (new, +180 lines)
- docs/api/payments.md (+55 lines)
- package.json (+2, -2)

### Changes by Category
Features:
- Payment processing with Stripe
- Webhook handling for payment events
- Refund processing API

Tests:
- Payment creation tests (12 tests)
- Webhook handling tests (8 tests)
- Integration tests (5 tests)
- Coverage: 94%

Documentation:
- Payment API endpoints
- Webhook setup guide
- Error handling docs

## Impact Analysis

### Positive Changes
✅ Complete payment integration
✅ Comprehensive test coverage (94%)
✅ Well-documented API
✅ Error handling implemented
✅ No breaking changes

### Quality Assessment
✅ Code follows project conventions
✅ Proper error handling
✅ TypeScript types complete
✅ Tests cover edge cases

### Potential Concerns
⚠ Webhook signature verification needs production testing
⚠ Rate limiting not yet implemented
⚠ Monitoring/alerting for failed payments pending

## Summary

Implemented complete Stripe payment integration including:
- Payment intent creation and processing
- Webhook event handling with signature verification
- Refund processing capability
- 25 new tests with 94% coverage
- Comprehensive API documentation

Ready for: Code review and staging deployment
Next steps: Production testing, monitoring setup, rate limiting

Time invested: ~4 hours
Complexity: Medium-High
Quality: High
```

## When to Use

### Daily Stand-ups

```bash
# Before stand-up meeting
/watzup

# Use output for:
# - What I did yesterday
# - Current progress
# - Any blockers
```

### Code Review Preparation

```bash
# Before requesting review
/watzup

# Share summary with reviewers
# Helps them understand scope and context
```

### Team Handoffs

```bash
# End of day handoff
/watzup

# Provides complete context for next developer
```

### Sprint Reviews

```bash
# End of sprint
/watzup

# Shows all accomplishments
# Demonstrates progress
```

### Mid-Task Check-in

```bash
# Check progress on large feature
/watzup

# See what's been done
# Plan remaining work
```

### PR Description

```bash
# Before creating pull request
/watzup

# Use summary for PR description
# Then: /git:pr [branch] [base]
```

## Complete Example

### Scenario: Multi-Day Feature Work

You've been working on a real-time chat feature for several days. Time to check progress.

```bash
/watzup
```

**Detailed Output:**

```markdown
# Work Summary: feature/realtime-chat

## Branch Information
Current Branch: feature/realtime-chat
Base Branch: main
Status: 12 commits ahead of main
Last Updated: 5 minutes ago
Branch Age: 3 days

## Commit History (Last 12 commits)

### Day 1: Foundation (4 commits)
1. feat: Add WebSocket server setup
   - Time: 3 days ago
   - Files: 5 (+320, -0)
   - New: src/websocket/server.ts, config/websocket.ts

2. feat: Implement room management
   - Time: 3 days ago
   - Files: 4 (+180, -0)
   - New: src/models/room.ts, src/services/room-manager.ts

3. feat: Add user connection handling
   - Time: 3 days ago
   - Files: 3 (+145, -0)
   - New: src/websocket/connection-handler.ts

4. test: Add WebSocket connection tests
   - Time: 3 days ago
   - Files: 2 (+95, -0)
   - New: tests/websocket/*.test.ts

### Day 2: Core Features (5 commits)
5. feat: Implement message broadcasting
   - Time: 2 days ago
   - Files: 3 (+165, -12)
   - Modified: src/websocket/message-handler.ts

6. feat: Add message persistence to database
   - Time: 2 days ago
   - Files: 4 (+220, -0)
   - New: src/models/message.ts, migrations/add_messages_table.sql

7. feat: Implement typing indicators
   - Time: 2 days ago
   - Files: 2 (+85, -5)
   - Modified: src/websocket/events.ts

8. test: Add message handling tests
   - Time: 2 days ago
   - Files: 3 (+140, -0)
   - New: tests/messages/*.test.ts

9. docs: Document WebSocket protocol
   - Time: 2 days ago
   - Files: 2 (+120, -0)
   - New: docs/websocket-protocol.md

### Day 3: Polish & Testing (3 commits)
10. fix: Handle disconnection edge cases
    - Time: 1 day ago
    - Files: 3 (+45, -15)
    - Modified: src/websocket/connection-handler.ts

11. feat: Add unread message counters
    - Time: 1 day ago
    - Files: 4 (+95, -8)
    - New: src/services/unread-counter.ts

12. test: Add integration tests for chat flow
    - Time: 1 day ago
    - Files: 2 (+180, -0)
    - New: tests/integration/chat-flow.test.ts

## Comprehensive Code Changes

### New Files Created (15 files)
Core Implementation:
- src/websocket/server.ts (234 lines)
- src/websocket/connection-handler.ts (178 lines)
- src/websocket/message-handler.ts (245 lines)
- src/websocket/events.ts (156 lines)
- src/models/room.ts (89 lines)
- src/models/message.ts (112 lines)
- src/services/room-manager.ts (198 lines)
- src/services/unread-counter.ts (87 lines)

Configuration:
- config/websocket.ts (45 lines)

Database:
- migrations/20251030_add_messages_table.sql (23 lines)
- migrations/20251030_add_rooms_table.sql (18 lines)

Tests:
- tests/websocket/connection.test.ts (142 lines)
- tests/messages/persistence.test.ts (165 lines)
- tests/integration/chat-flow.test.ts (223 lines)

Documentation:
- docs/websocket-protocol.md (187 lines)

### Modified Files (8 files)
- src/routes/index.ts (+12, -2)
- src/app.ts (+25, -5)
- package.json (+5, -1)
- .env.example (+3, -0)
- tsconfig.json (+1, -0)
- docs/api/index.md (+45, -8)
- README.md (+15, -3)
- tests/setup.ts (+8, -2)

### Statistics
- Total Files Changed: 23
- New Files: 15
- Modified Files: 8
- Lines Added: 2,547
- Lines Removed: 44
- Net Change: +2,503 lines

## Feature Analysis

### Major Features Implemented

#### 1. WebSocket Server Infrastructure
Status: ✅ Complete
Components:
- Connection management
- Room-based message routing
- Automatic reconnection handling
- Connection pooling

#### 2. Real-Time Messaging
Status: ✅ Complete
Features:
- Message broadcasting within rooms
- Delivery confirmation
- Message persistence to database
- Message history retrieval

#### 3. Room Management
Status: ✅ Complete
Capabilities:
- Create/join/leave rooms
- Room member tracking
- Permission management
- Room metadata

#### 4. Typing Indicators
Status: ✅ Complete
Functionality:
- Real-time typing status
- Automatic timeout
- Per-room indicators

#### 5. Unread Counters
Status: ✅ Complete
Features:
- Per-room unread counts
- Atomic counter updates
- Real-time synchronization

## Testing Coverage

### Unit Tests
Files: 8 test files
Tests: 42 tests
Coverage: 94%
Status: ✅ All passing

Key test areas:
- WebSocket connection handling (12 tests)
- Message broadcasting (10 tests)
- Room management (8 tests)
- Typing indicators (5 tests)
- Unread counters (7 tests)

### Integration Tests
Files: 2 test files
Tests: 12 tests
Coverage: 89%
Status: ✅ All passing

Scenarios covered:
- Complete message flow (4 tests)
- Multi-user rooms (3 tests)
- Reconnection handling (3 tests)
- Error scenarios (2 tests)

### Overall Test Metrics
Total Tests: 54
Passing: 54 (100%)
Coverage: 92%
Test Time: 8.3 seconds

## Documentation Updates

### New Documentation
- docs/websocket-protocol.md - Complete WebSocket event protocol
- WebSocket setup guide in README
- API documentation for message endpoints

### Updated Documentation
- README.md - Added WebSocket feature section
- docs/api/index.md - Added message API endpoints
- .env.example - Added WebSocket configuration

## Quality Assessment

### Code Quality
✅ Excellent
- Consistent TypeScript usage
- Proper error handling throughout
- Clean separation of concerns
- Well-structured modules

### Architecture
✅ Solid
- Event-driven design
- Scalable room management
- Efficient message routing
- Database optimization with indexes

### Test Quality
✅ Comprehensive
- High coverage (92%)
- Edge cases tested
- Integration scenarios covered
- No flaky tests

### Documentation
✅ Well-documented
- Clear protocol specification
- Setup instructions complete
- API endpoints documented
- Code comments thorough

## Potential Issues & Concerns

### Performance Considerations
⚠️ May need attention:
- WebSocket connection limit (currently 1000)
- Message throughput not benchmarked
- Database query optimization needed at scale
- Memory usage with many concurrent rooms

### Security Considerations
⚠️ Needs review:
- WebSocket authentication mechanism
- Message content sanitization
- Rate limiting not implemented
- Room access control validation

### Missing Features (Future Work)
📋 Planned but not implemented:
- File attachments in messages
- Message reactions (emoji)
- Message search functionality
- End-to-end encryption

## Impact on Codebase

### Dependencies Added
- ws@8.14.2 - WebSocket library
- socket.io-adapter@2.5.2 - Room adapter

### Configuration Changes
- Added WebSocket server port (3001)
- Added CORS configuration for WebSocket
- Database migrations for messages and rooms

### Breaking Changes
⚠️ None - All additions, no modifications to existing APIs

## Overall Assessment

### Summary
Implemented a complete real-time chat system with WebSocket support over 3 days. The implementation includes robust message handling, room management, typing indicators, and unread message tracking. Test coverage is excellent at 92%, and documentation is comprehensive.

### Strengths
1. Comprehensive feature set
2. Excellent test coverage
3. Well-documented protocol
4. Clean, maintainable code
5. No breaking changes

### Areas for Improvement
1. Need performance benchmarking
2. Security review required
3. Rate limiting implementation
4. Monitoring and alerting setup

### Readiness Assessment
✅ Ready for: Code review
✅ Ready for: Staging deployment
⚠️ Not ready for: Production (needs security review, performance testing)

### Recommended Next Steps

#### Immediate (Today)
1. Request code review
2. Deploy to staging
3. Run smoke tests

#### Short-term (This Week)
1. Performance benchmarking
2. Security review
3. Add rate limiting
4. Setup monitoring

#### Medium-term (Next Sprint)
1. File attachments
2. Message search
3. Message reactions
4. Enhanced security (E2E encryption)

## Time & Effort Analysis

Total Commits: 12
Days Active: 3
Estimated Effort: 24-28 hours
Complexity: High
Value Delivered: High

Breakdown:
- Day 1: Foundation & Architecture (8 hours)
- Day 2: Core Features & Testing (10 hours)
- Day 3: Polish & Integration (6 hours)

---

**End of Summary**
Generated: 2025-11-13 14:30:00
Branch: feature/realtime-chat
Commits Analyzed: 12
```

## Output Sections Explained

### 1. Branch Status
- Current vs base branch
- Commits ahead/behind
- Last update time
- Branch age

### 2. Commit History
- Recent commits (default: last 10)
- Organized by day or theme
- Files affected per commit
- Author and timestamp

### 3. Code Changes
- New files created
- Modified files
- Files deleted
- Line count statistics

### 4. Feature Analysis
- Major features implemented
- Feature status and completion
- Components affected

### 5. Testing Coverage
- Test files and count
- Coverage percentage
- Test status (passing/failing)

### 6. Documentation
- New docs created
- Updated documentation
- README changes

### 7. Quality Assessment
- Code quality evaluation
- Architecture assessment
- Test quality review
- Documentation completeness

### 8. Concerns & Issues
- Performance considerations
- Security concerns
- Missing features
- Technical debt

### 9. Impact Analysis
- Dependencies changed
- Configuration updates
- Breaking changes
- Migration requirements

### 10. Recommendations
- Next steps
- Priority actions
- Timeline suggestions

## Best Practices

### Run Before Key Events

```bash
# Before stand-up
/watzup

# Before code review request
/watzup

# Before PR creation
/watzup

# End of day/sprint
/watzup
```

### Compare with Previous State

```bash
# See what changed today
git log --since="1 day ago"
/watzup

# Compare to main
git diff main
/watzup
```

### Share with Team

```bash
# Generate summary
/watzup > work-summary.md

# Share in Slack/Teams
cat work-summary.md
```

## Common Use Cases

### Daily Stand-up

```bash
/watzup

# Answer:
# - What did I do?
# - What am I doing today?
# - Any blockers?
```

### Code Review Request

```bash
# See full scope
/watzup

# Use summary in review request
# Helps reviewers understand changes
```

### Sprint Demo

```bash
/watzup

# Show accomplishments
# Demonstrate progress
# Discuss next steps
```

### Knowledge Transfer

```bash
# Before vacation/handoff
/watzup

# Provides complete context
# Documents decisions
# Lists pending work
```

### Progress Check

```bash
# Mid-feature development
/watzup

# Assess progress
# Plan remaining work
# Identify blockers
```

## Integration with Other Commands

### With /journal

```bash
# Quick summary
/watzup

# Detailed documentation
/journal

# /watzup: Overview
# /journal: Deep dive with context
```

### With /git:pr

```bash
# Analyze changes
/watzup

# Create PR with summary
/git:pr feature-branch main
```

### With /git:cm

```bash
# See uncommitted changes
git status

# Review all work
/watzup

# Commit
/git:cm
```

## Customization

### Focus on Specific Time Range

```bash
# Last 24 hours
git log --since="1 day ago"
/watzup

# Last week
git log --since="1 week ago"
/watzup
```

### Include Specific Files

```bash
# See changes to specific area
git log -- src/payments/
/watzup
```

## Limitations

### What /watzup Does NOT Do

❌ Does not start implementation
❌ Does not modify code
❌ Does not create commits
❌ Does not deploy code
❌ Does not run tests

✅ Only analyzes and reports

### When NOT to Use

**Before Starting Work:**
```bash
❌ /watzup
✅ /plan [feature]
```

**When Implementing:**
```bash
❌ /watzup
✅ /cook [feature]
```

**When Fixing Bugs:**
```bash
❌ /watzup
✅ /fix [issue]
```

## Related Commands

- [/journal](/docs/commands/core/journal) - Detailed work documentation
- [/git:cm](/docs/commands/git/commit) - Commit changes
- [/git:pr](/docs/commands/git/pull-request) - Create pull request
- [/cook](/docs/commands/core/cook) - Implement features
- [/plan](/docs/commands/core/plan) - Plan implementations

---

**Key Takeaway**: `/watzup` gives you instant visibility into recent work - perfect for stand-ups, code reviews, and understanding what's been done. It's analysis-only and never modifies your code.
