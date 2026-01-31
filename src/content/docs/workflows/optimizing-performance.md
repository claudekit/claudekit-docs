---
title: Optimizing Performance
description: "Documentation for Optimizing Performance
description:
section: workflows
category: workflows
order: 9
published: true"
section: workflows
category: workflows
order: 9
published: true
---

# Optimizing Performance

Learn how to identify and fix performance bottlenecks with ClaudeKit - from profiling and analysis to implementation of caching, database optimization, and code improvements.

## Overview

**Goal**: Identify and resolve performance bottlenecks systematically
**Time**: 30-60 minutes (vs 4-12 hours manually)
**Agents Used**: debugger, code-reviewer, tester
**Commands**: /debug, /cook, /test, /fix

## Prerequisites

- Application with performance issues
- Monitoring/profiling tools installed
- Performance baseline metrics
- Test data representative of production

## Performance Targets

| Metric | Good | Acceptable | Poor |
|--------|------|------------|------|
| API Response Time | <200ms | 200-500ms | >500ms |
| Page Load Time | <2s | 2-4s | >4s |
| Database Query | <50ms | 50-200ms | >200ms |
| Memory Usage | <512MB | 512MB-2GB | >2GB |
| CPU Usage | <30% | 30-70% | >70% |

## Step-by-Step Workflow

### Step 1: Identify Performance Issues

Start by profiling your application:

```bash
# Run performance analysis
/debug [analyze application performance and identify bottlenecks]
```

**Analysis output**:
```
Performance Analysis Report

🔴 Critical Issues (3)

1. Database Query Performance
   Location: src/users/service.js:23
   Issue: N+1 query problem
   Impact: 2,847ms per request
   Queries: 156 individual queries
   Recommendation: Use eager loading

2. Unoptimized Images
   Location: public/uploads/
   Issue: Large image sizes
   Impact: 3.2s additional load time
   Total: 12.4MB transferred
   Recommendation: Image optimization + CDN

3. Missing Cache Layer
   Location: src/products/service.js
   Issue: Repeated expensive operations
   Impact: 95% cache miss rate
   Recommendation: Implement Redis caching

🟡 Warning Issues (5)

4. Inefficient Algorithm
   Location: src/search/index.js:45
   Issue: O(n²) complexity
   Impact: 523ms for 1000 items
   Recommendation: Use hash map (O(n))

5. Blocking Operations
   Location: src/emails/send.js:12
   Issue: Synchronous email sending
   Impact: 890ms blocking
   Recommendation: Use queue (Bull/Redis)

6. Large Bundle Size
   Location: frontend/dist/
   Issue: 4.2MB JavaScript bundle
   Impact: 6s parse time on mobile
   Recommendation: Code splitting

7. No Compression
   Issue: Missing gzip/brotli
   Impact: 2.8x larger transfers
   Recommendation: Enable compression

8. Memory Leaks
   Location: src/websocket/handler.js
   Issue: Event listeners not removed
   Impact: 125MB/hour growth
   Recommendation: Cleanup on disconnect

Performance Score: 34/100 (Poor)
Load Time: 8.2s (Target: <2s)
Time to Interactive: 12.4s (Target: <3.5s)
```

### Step 2: Fix Database Performance

#### N+1 Query Problem

```bash
/cook [fix N+1 query problem in user service with eager loading]
```

**Implementation**:
```
[1/4] Analyzing queries...
  ✓ Identified 156 individual queries
  ✓ Should be 1 query with joins

Before:
const users = await User.findAll();
for (const user of users) {
  user.posts = await Post.findAll({ userId: user.id }); // N queries
}

After:
const users = await User.findAll({
  include: [{ model: Post }] // 1 query with JOIN
});

[2/4] Implementing fix...
  ✓ Added eager loading
  ✓ Optimized includes
  ✓ Added select to limit fields

[3/4] Testing...
  ✓ Query count: 156 → 1
  ✓ Response time: 2,847ms → 87ms
  ✓ 97% improvement

[4/4] Documentation...
  ✓ Added performance notes

✅ N+1 problem fixed
```

#### Add Database Indexes

```bash
/cook [add database indexes for frequently queried fields]
```

**Implementation**:
```
[1/3] Analyzing query patterns...
  ✓ Identified slow queries
  ✓ Found missing indexes

Indexes to add:
- users.email (unique)
- posts.userId (foreign key)
- posts.status (filter)
- posts.createdAt (sorting)
- products.categoryId (foreign key)
- products.price (range queries)

[2/3] Creating indexes...
  ✓ Generated migration
  ✓ Composite indexes for complex queries
  ✓ Partial indexes for filtered queries

[3/3] Testing...
  ✓ Query performance improved:
    - User lookup: 234ms → 3ms
    - Post filtering: 567ms → 12ms
    - Product search: 892ms → 34ms

✅ Indexes added
```

#### Query Optimization

```bash
/cook [optimize database queries to reduce execution time]
```

### Step 3: Implement Caching

#### Redis Cache

```bash
/cook [implement Redis caching for frequently accessed data]
```

**Implementation**:
```
[1/5] Setting up Redis...
  ✓ Installed Redis client
  ✓ Configuration added
  ✓ Connection pool setup

[2/5] Cache strategy...
  ✓ Cache-aside pattern
  ✓ Write-through for updates
  ✓ TTL configuration

[3/5] Implementing cache...
  ✓ User data (TTL: 1 hour)
  ✓ Product catalog (TTL: 15 min)
  ✓ Search results (TTL: 5 min)
  ✓ API responses (TTL: 1 min)

[4/5] Cache invalidation...
  ✓ On update operations
  ✓ On delete operations
  ✓ Manual invalidation API

[5/5] Testing...
  ✓ Cache hit rate: 0% → 87%
  ✓ Response time: 456ms → 23ms
  ✓ Database load: -76%

✅ Redis caching implemented

Performance improvement:
- Average response: 95% faster
- Database queries: 76% reduction
- Server load: 64% reduction
```

#### In-Memory Cache

```bash
/cook [add in-memory LRU cache for hot data]
```

#### CDN Integration

```bash
/cook [integrate CloudFlare CDN for static assets]
```

### Step 4: Optimize Frontend

#### Code Splitting

```bash
/cook [implement code splitting and lazy loading]
```

**Implementation**:
```
[1/4] Analyzing bundle...
  ✓ Current size: 4.2MB
  ✓ Identified heavy modules
  ✓ Found unused dependencies

Heavy modules:
- moment.js: 287KB (use date-fns instead)
- lodash: 531KB (use individual imports)
- chart.js: 456KB (lazy load)

[2/4] Code splitting...
  ✓ Route-based splitting
  ✓ Component lazy loading
  ✓ Vendor chunk optimization

[3/4] Tree shaking...
  ✓ Removed unused code
  ✓ Optimized imports
  ✓ Replaced heavy libraries

[4/4] Results...
  ✓ Bundle size: 4.2MB → 687KB (84% reduction)
  ✓ Initial load: 6s → 1.2s
  ✓ Time to interactive: 12.4s → 2.8s

✅ Frontend optimized
```

#### Image Optimization

```bash
/cook [optimize images with compression and lazy loading]
```

**Implementation**:
```
[1/4] Image analysis...
  ✓ Total images: 342
  ✓ Total size: 12.4MB
  ✓ Average size: 36KB

[2/4] Optimization...
  ✓ Convert to WebP format
  ✓ Compress with quality 85
  ✓ Generate responsive sizes
  ✓ Add lazy loading

[3/4] Implementation...
  ✓ Picture element with fallbacks
  ✓ Intersection Observer for lazy load
  ✓ Placeholder images

[4/4] Results...
  ✓ Image size: 12.4MB → 2.1MB (83% reduction)
  ✓ Load time: 3.2s → 0.6s
  ✓ Bandwidth: -10.3MB per page

✅ Images optimized
```

#### Bundle Compression

```bash
/cook [enable gzip and brotli compression]
```

### Step 5: Optimize Algorithms

#### Replace Inefficient Algorithm

```bash
/cook [replace O(n²) algorithm with O(n) hash map solution]
```

**Before** (O(n²) - 523ms):
```javascript
function findDuplicates(items) {
  const duplicates = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i] === items[j]) {
        duplicates.push(items[i]);
      }
    }
  }
  return duplicates;
}
```

**After** (O(n) - 4ms):
```javascript
function findDuplicates(items) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of items) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicates);
}
```

**Result**: 99.2% faster (523ms → 4ms)

### Step 6: Async Operations

#### Background Jobs

```bash
/cook [move email sending to background queue with Bull]
```

**Implementation**:
```
[1/4] Setting up Bull queue...
  ✓ Redis queue configured
  ✓ Worker processes setup
  ✓ Job processing logic

[2/4] Moving operations to queue...
  ✓ Email sending (was 890ms blocking)
  ✓ Report generation (was 2.3s blocking)
  ✓ Image processing (was 1.2s blocking)

[3/4] Implementing retry logic...
  ✓ Automatic retry on failure
  ✓ Exponential backoff
  ✓ Dead letter queue

[4/4] Results...
  ✓ API response: 890ms → 45ms
  ✓ Non-blocking operations
  ✓ Better error handling

✅ Background jobs implemented
```

#### Parallel Processing

```bash
/cook [process multiple operations in parallel instead of sequential]
```

### Step 7: Database Connection Pool

```bash
/cook [optimize database connection pooling]
```

**Configuration**:
```javascript
// Before: Default settings
pool: {
  max: 5,
  min: 0,
  idle: 10000
}

// After: Optimized
pool: {
  max: 20,          // More connections
  min: 5,           // Keep minimum ready
  idle: 30000,      // Longer idle time
  acquire: 60000,   // Longer acquire timeout
  evict: 1000       // Cleanup interval
}

Result: 45% faster during peak load
```

### Step 8: API Rate Limiting & Throttling

```bash
/cook [implement intelligent rate limiting and request throttling]
```

### Step 9: Memory Optimization

#### Fix Memory Leaks

```bash
/fix [fix memory leak in WebSocket handler]
```

**Implementation**:
```
[1/4] Identifying leak...
  ✓ Memory growing 125MB/hour
  ✓ Event listeners not cleaned up
  ✓ Socket references retained

[2/4] Implementing fixes...
  ✓ Remove event listeners on disconnect
  ✓ Clear socket references
  ✓ Implement cleanup function

[3/4] Memory management...
  ✓ WeakMap for temporary data
  ✓ Clear timers on disconnect
  ✓ Garbage collection hints

[4/4] Testing...
  ✓ 24-hour test: stable memory
  ✓ 1000 connections: no growth
  ✓ Stress test: passed

✅ Memory leak fixed
```

#### Reduce Memory Usage

```bash
/cook [optimize memory usage by using streams for large data]
```

### Step 10: Monitoring & Profiling

```bash
/cook [implement performance monitoring with metrics and alerts]
```

**Monitoring setup**:
```
✓ Response time tracking
✓ Database query monitoring
✓ Memory usage alerts
✓ CPU usage tracking
✓ Error rate monitoring
✓ Cache hit rate metrics
✓ Custom business metrics
✓ Real-user monitoring (RUM)

Alerts configured:
- Response time >500ms
- Error rate >1%
- Memory usage >80%
- CPU usage >75%
- Cache hit rate <70%
```

### Step 11: Load Testing

```bash
/test
```

**Performance test results**:
```
Load Test Report (1000 concurrent users)

Before optimization:
- Avg response time: 2,847ms
- 95th percentile: 5,234ms
- Requests/sec: 23
- Error rate: 12.4%
- Failed requests: 124/1000

After optimization:
- Avg response time: 87ms (97% faster)
- 95th percentile: 156ms (97% faster)
- Requests/sec: 892 (38x more)
- Error rate: 0.1%
- Failed requests: 1/1000

Database:
- Query time: 234ms → 8ms (97% faster)
- Queries per request: 156 → 1
- Connection pool usage: 95% → 34%

Memory:
- Usage: 2.1GB → 487MB (77% reduction)
- Leak rate: 125MB/hour → 0MB/hour
- GC pauses: 89/hour → 12/hour

Frontend:
- Bundle size: 4.2MB → 687KB (84% smaller)
- Load time: 8.2s → 1.2s (85% faster)
- Time to interactive: 12.4s → 2.8s (77% faster)

Overall Performance Score: 34/100 → 94/100

✅ All performance targets met
```

## Complete Example: Slow E-Commerce API

### Initial Issues

```
Performance problems:
- Product listing: 4.2s response time
- Search: 6.8s with 1000 products
- Cart update: 1.8s
- Checkout: 3.4s
- Homepage: 9.2s load time
- High database load: 89% CPU
```

### Optimization Steps

```bash
# 1. Profile application
/debug [analyze e-commerce API performance]

# 2. Database optimization
/cook [fix N+1 queries and add indexes]
/cook [optimize product search queries]

# 3. Caching
/cook [implement Redis caching for products and categories]
/cook [add query result caching]

# 4. Frontend optimization
/cook [implement code splitting and lazy loading]
/cook [optimize product images with WebP and lazy loading]

# 5. API optimization
/cook [move image processing to background queue]
/cook [implement response compression]

# 6. Algorithm optimization
/cook [optimize search algorithm with inverted index]

# 7. Test improvements
/test

# 8. Monitor in production
/cook [set up performance monitoring with alerts]
```

### Results

```
After optimization (1 hour work):

Product listing: 4.2s → 124ms (97% faster)
Search: 6.8s → 89ms (99% faster)
Cart update: 1.8s → 34ms (98% faster)
Checkout: 3.4s → 187ms (95% faster)
Homepage: 9.2s → 1.4s (85% faster)
Database CPU: 89% → 23%

Customer impact:
- 94% faster page loads
- 10x more concurrent users
- 87% lower server costs
- 45% increase in conversions
```

### Time Comparison

**Manual optimization**: 8-16 hours
- Profiling: 1-2 hours
- Database optimization: 2-3 hours
- Caching: 2-3 hours
- Frontend: 2-4 hours
- Testing: 1-2 hours
- Debugging: 1-2 hours

**With ClaudeKit**: 58 minutes
- Profiling: 8 minutes
- Database: 15 minutes
- Caching: 12 minutes
- Frontend: 18 minutes
- Testing: 5 minutes

**Time saved**: 7-15 hours (88% faster)

## Performance Optimization Patterns

### Pattern 1: Progressive Enhancement

```bash
/cook [implement progressive enhancement for slow connections]
```

### Pattern 2: Predictive Prefetching

```bash
/cook [add predictive prefetching for likely user actions]
```

### Pattern 3: Service Worker Caching

```bash
/cook [implement service worker for offline-first experience]
```

### Pattern 4: Database Read Replicas

```bash
/cook [set up database read replicas for scaling reads]
```

## Best Practices

### 1. Measure First

Always profile before optimizing:
```bash
✅ Profile → Identify → Fix → Measure
❌ Guess → Optimize → Hope
```

### 2. Focus on Biggest Impact

Optimize high-impact issues first:
```
Priority order:
1. Critical path operations
2. High-frequency operations
3. User-facing operations
4. Background operations
```

### 3. Cache Aggressively

But invalidate correctly:
```javascript
// Cache layers
1. Browser cache (static assets)
2. CDN cache (global content)
3. Application cache (Redis)
4. Database query cache
5. Result memoization
```

### 4. Use Appropriate Data Structures

```javascript
✅ Hash map for lookups: O(1)
✅ Set for uniqueness: O(1)
✅ Binary search: O(log n)

❌ Array loops: O(n)
❌ Nested loops: O(n²)
```

### 5. Monitor Continuously

```bash
/cook [implement continuous performance monitoring]
```

## Troubleshooting

### Issue: Still Slow After Optimization

**Solution**:
```bash
# Re-profile
/debug [deep performance analysis with detailed metrics]

# Check for new bottlenecks
# Optimize further
```

### Issue: Cache Not Hitting

**Solution**:
```bash
/fix --quick [Redis cache hit rate below 50%]
```

### Issue: Memory Still Growing

**Solution**:
```bash
/fix [memory still growing despite fixes]
```

### Issue: Database Timeout

**Solution**:
```bash
/cook [increase connection pool and optimize slow queries]
```

## Performance Checklist

```bash
Backend:
✓ Database queries optimized
✓ Indexes on frequently queried fields
✓ N+1 queries eliminated
✓ Caching implemented (Redis)
✓ Connection pooling optimized
✓ Background jobs for slow operations
✓ API response compression
✓ Rate limiting configured

Frontend:
✓ Code splitting implemented
✓ Lazy loading for routes
✓ Images optimized (WebP, lazy load)
✓ Bundle size minimized
✓ Tree shaking enabled
✓ CDN for static assets
✓ Service worker caching
✓ Critical CSS inlined

Infrastructure:
✓ Load balancing configured
✓ Auto-scaling enabled
✓ CDN integration
✓ Database read replicas
✓ Monitoring and alerts
✓ Performance budgets set
✓ Regular load testing

Metrics:
✓ Response time <200ms
✓ Page load <2s
✓ Time to interactive <3.5s
✓ Cache hit rate >80%
✓ Error rate <0.1%
```

## Next Steps

### Related Use Cases
- [Fixing Bugs](/docs/workflows/fixing-bugs) - Debug issues
- [Refactoring Code](/docs/workflows/refactoring-code) - Code quality
- [Building a REST API](/docs/workflows/building-api) - API development

### Related Commands
- [/debug](/docs/engineer/commands/core/debug) - Performance profiling
- [/cook](/docs/engineer/commands/core/cook) - Implement optimizations
- [/fix](/docs/engineer/commands/fix/hard) - Complex fixes
- [/test](/docs/engineer/commands/core/test) - Performance testing

### Further Reading
- [Web.dev Performance](https://web.dev/performance/)
- [Database Indexing](https://use-the-index-luke.com/)
- [Redis Caching Patterns](https://redis.io/docs/manual/patterns/)

---

**Key Takeaway**: ClaudeKit enables systematic performance optimization with profiling, analysis, and implementation of best practices - turning slow applications into fast ones in under an hour with measurable improvements.
