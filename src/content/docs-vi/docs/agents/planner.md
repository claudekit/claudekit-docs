---
title: Planner Agent
description: Research, analyze, and create comprehensive implementation plans before coding
section: docs
category: agents
order: 3
published: true
---

# Planner Agent

The planner agent researches, analyzes, and creates detailed implementation plans before any code is written. It ensures features are well-thought-out and follows best practices.

## Purpose

Research, analyze, and create comprehensive implementation plans for features, refactoring, and technical decisions.

## When Activated

The planner agent activates when:

- Using `/plan [description]` command
- Using `/bootstrap` (research phase)
- Using `/fix:hard` (complex issues needing strategy)
- Before major refactoring
- When evaluating technical trade-offs

## Capabilities

### Research

- **Best Practices**: Searches for industry standards and patterns
- **Documentation**: Reviews official docs and guides
- **Solutions**: Finds proven approaches to common problems
- **Trade-offs**: Analyzes pros/cons of different approaches

### Analysis

- **Codebase Understanding**: Reads existing code and patterns
- **Dependency Analysis**: Evaluates library options
- **Architecture Review**: Assesses current system design
- **Impact Assessment**: Identifies affected components

### Planning

- **Implementation Steps**: Breaks down work into clear tasks
- **File Changes**: Lists files to create/modify
- **Test Strategy**: Defines testing approach
- **Timeline Estimates**: Provides realistic time estimates
- **Rollback Plan**: Includes recovery procedures

## Example Usage

### Feature Planning

**Input:**
```bash
/plan [add real-time notifications with WebSocket]
```

**Process:**
```
1. Research Phase (30s)
   Searching: WebSocket best practices
   Searching: Socket.io vs native WebSocket
   Searching: Notification patterns
   Searching: Authentication with WebSockets

   Found:
   - Socket.io recommended for production
   - Need heartbeat for connection health
   - Store notifications in database
   - Use Redis for scaling

2. Analysis Phase (45s)
   Reading: src/server.ts
   Reading: src/auth/middleware.ts
   Reading: docs/system-architecture.md

   Current State:
   - Express server on port 3000
   - JWT authentication in place
   - PostgreSQL database
   - No real-time features yet

   Integration Points:
   - Auth middleware can validate JWT
   - User model has ID for targeting
   - Existing error handling compatible

3. Planning Phase (30s)
   Creating implementation plan...

   Plan saved: plans/websocket-notifications-20241020.md
```

**Generated Plan:**

```markdown
# Implementation Plan: Real-time Notifications

## Overview
Add WebSocket-based real-time notifications to the application
using Socket.io for reliability and scalability.

## Approach: Socket.io with Redis Adapter

### Why Socket.io?
- Automatic reconnection
- Room-based messaging
- Fallback to polling if needed
- Production-ready

### Why Redis?
- Multiple server instances support
- Shared state across servers
- Pub/sub for notifications

## Implementation Steps

### 1. Install Dependencies (5 min)
```bash
npm install socket.io socket.io-redis-adapter ioredis
npm install --save-dev @types/socket.io
```

### 2. WebSocket Server Setup (15 min)

**Files to create:**
- `src/websocket/server.ts` - Socket.io server setup
- `src/websocket/middleware.ts` - Auth middleware for WS
- `src/websocket/handlers.ts` - Event handlers

**Implementation:**
```typescript
// src/websocket/server.ts
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

export const initWebSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: { origin: process.env.FRONTEND_URL }
  });

  // Redis adapter for scaling
  const pubClient = createClient({ url: process.env.REDIS_URL });
  const subClient = pubClient.duplicate();

  io.adapter(createAdapter(pubClient, subClient));

  // Auth middleware
  io.use(authMiddleware);

  // Connection handling
  io.on('connection', handleConnection);

  return io;
};
```

### 3. Authentication (10 min)

**Files to modify:**
- `src/auth/jwt.ts` - Add token verification helper

**Implementation:**
```typescript
// Verify JWT from Socket.io handshake
export const authMiddleware = async (socket, next) => {
  const token = socket.handshake.auth.token;
  try {
    const user = await verifyToken(token);
    socket.user = user;
    next();
  } catch (err) {
    next(new Error('Authentication failed'));
  }
};
```

### 4. Notification Model (15 min)

**Files to create:**
- `src/models/notification.model.ts`
- `prisma/migrations/XXX_add_notifications.sql`

**Database Schema:**
```prisma
model Notification {
  id        String   @id @default(uuid())
  userId    String
  type      String   // 'info', 'success', 'warning', 'error'
  title     String
  message   String
  read      Boolean  @default(false)
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id])

  @@index([userId, createdAt])
  @@index([userId, read])
}
```

### 5. Notification Service (20 min)

**Files to create:**
- `src/services/notification.service.ts`

**Key functions:**
- `sendNotification(userId, notification)` - Send to user
- `sendToAll(notification)` - Broadcast to all users
- `markAsRead(notificationId)` - Mark read
- `getUnreadCount(userId)` - Get unread count

### 6. Integration with Existing Features (15 min)

**Files to modify:**
- `src/services/order.service.ts` - Notify on order status
- `src/services/payment.service.ts` - Notify on payment
- `src/controllers/user.controller.ts` - Notify on updates

**Example Integration:**
```typescript
// After order is placed
await notificationService.sendNotification(order.userId, {
  type: 'success',
  title: 'Order Placed',
  message: `Order #${order.id} confirmed`
});
```

### 7. Frontend Integration Guide (10 min)

**Files to create:**
- `docs/websocket-client-guide.md`

**Client Example:**
```typescript
import io from 'socket.io-client';

const socket = io('http://localhost:3000', {
  auth: { token: userToken }
});

socket.on('notification', (data) => {
  showToast(data.title, data.message);
  updateNotificationBadge();
});
```

### 8. Testing (30 min)

**Files to create:**
- `tests/websocket/connection.test.ts` - Connection tests
- `tests/websocket/notification.test.ts` - Notification tests
- `tests/integration/websocket-auth.test.ts` - Auth tests

**Test Coverage:**
- Connection with valid token
- Connection with invalid token
- Receiving notifications
- Room-based messaging
- Reconnection handling
- Multiple server instances

### 9. Monitoring & Health Checks (10 min)

**Files to modify:**
- `src/health/health.controller.ts` - Add WS health check

**Metrics to track:**
- Active connections count
- Messages per second
- Failed authentications
- Average latency

## File Changes Summary

**Files to create: 15**
- src/websocket/server.ts
- src/websocket/middleware.ts
- src/websocket/handlers.ts
- src/services/notification.service.ts
- src/models/notification.model.ts
- tests/* (8 test files)
- docs/websocket-client-guide.md

**Files to modify: 6**
- src/server.ts
- src/auth/jwt.ts
- src/services/order.service.ts
- src/services/payment.service.ts
- prisma/schema.prisma
- src/health/health.controller.ts

## Timeline Estimate

| Phase | Time |
|-------|------|
| Setup & Config | 20 min |
| Core Implementation | 60 min |
| Integration | 25 min |
| Testing | 30 min |
| Documentation | 15 min |
| **Total** | **2.5 hours** |

## Rollback Plan

If issues occur:

1. **Disable WebSocket server:**
   ```typescript
   // src/server.ts
   // Comment out: initWebSocket(httpServer)
   ```

2. **Revert database migration:**
   ```bash
   npx prisma migrate resolve --rolled-back XXX
   ```

3. **Remove Socket.io dependencies:**
   ```bash
   npm uninstall socket.io socket.io-redis-adapter
   ```

4. **Restore previous code:**
   ```bash
   git revert HEAD
   ```

## Security Considerations

✅ **Implemented:**
- JWT verification on connection
- Rate limiting per socket
- Input validation on all events
- CORS configuration
- Heartbeat for stale connections

⚠ **To Monitor:**
- Connection count (prevent DoS)
- Message size limits
- Authentication failures

## Performance Considerations

- Use Redis adapter for horizontal scaling
- Implement connection pooling
- Add message queuing for high volume
- Monitor memory usage
- Set max connections limit

## Next Steps After Implementation

1. Load testing
2. Monitor connection metrics
3. Tune connection limits
4. Add more notification types
5. Implement notification preferences

## Questions to Resolve

- [ ] Should we support notification preferences?
- [ ] Max notifications to store per user?
- [ ] Retention policy for old notifications?
- [ ] Push notifications for offline users?

---

Ready to implement? Run: `/cook [implement WebSocket notifications]`
```

## Output Format

All plans are saved to `plans/` directory with format:
```
plans/[feature-name]-YYYYMMDD-HHMMSS.md
```

## Plan Quality

Good plans include:

✅ **Research findings** - Not reinventing the wheel
✅ **Clear steps** - Actionable tasks
✅ **Code examples** - Concrete implementation details
✅ **File changes** - What will be modified
✅ **Timeline** - Realistic estimates
✅ **Tests** - How to validate
✅ **Security** - What to watch for
✅ **Rollback** - How to undo if needed
✅ **Open questions** - What needs decisions

## Workflow Integration

### Before Coding

```bash
# 1. Create plan
/plan [feature description]

# 2. Review plan
cat plans/latest-plan.md

# 3. Provide feedback
"Use PostgreSQL instead of Redis for notifications"

# 4. Regenerate if needed
/plan [updated requirements]

# 5. Implement (use /code since plan exists)
/code @plans/your-feature-plan.md
```

### During Implementation

The planner agent ensures:
- Implementation follows the plan
- All security considerations addressed
- Test coverage meets requirements
- Documentation is created

### After Implementation

Plans serve as:
- Implementation documentation
- Decision record (ADR)
- Onboarding material
- Refactoring guide

## Advanced Features

### Multiple Approaches

```bash
/plan:two [feature description]
```

Generates two different approaches with pros/cons.

### CI/CD Planning

```bash
/plan:ci [github-actions-url]
```

Analyzes CI failures and creates fix plan.

### CRO Planning

```bash
/plan:cro [conversion optimization needs]
```

Creates conversion rate optimization plan.

## Success Metrics

A good plan results in:
- ✅ Implementation matches plan (>90%)
- ✅ No major surprises during coding
- ✅ Timeline estimate accurate (±20%)
- ✅ Security issues prevented
- ✅ Team understands the approach

## Next Steps

- [Implementation](/docs/commands/core/code) - Execute the plan
- [Testing](/docs/commands/core/test) - Validate the implementation
- [Documentation](/docs/commands/docs/update) - Update docs

---

**Key Takeaway**: The planner agent ensures well-researched, thoroughly-planned implementations that save time and prevent mistakes.
