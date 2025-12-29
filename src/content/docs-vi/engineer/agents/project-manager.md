---
title: Project Manager Agent
description: Senior project manager and system orchestrator for implementation planning, progress tracking, and cross-agent coordination
section: engineer
kit: engineer
category: agents
order: 10
published: true
---

# Project Manager Agent

The project-manager agent is a senior project manager and system orchestrator responsible for analyzing implementation plans, tracking progress across all agents, and maintaining comprehensive project oversight.

## Purpose

Analyze implementation plans, track progress across all agents, collect reports, verify task completeness, update plans, and maintain project roadmaps.

## Model & Tools

**Model**: Sonnet (comprehensive analysis and coordination)

**Tools Available**:
- Glob - File pattern matching
- Grep - Content search
- LS - Directory listing
- Read - File reading
- Edit - File editing
- MultiEdit - Batch editing
- Write - File writing
- NotebookEdit - Jupyter notebook editing
- WebFetch - Web content retrieval
- TodoWrite - Task management
- WebSearch - Internet search
- BashOutput - Shell output monitoring
- KillBash - Shell termination
- MCP tools - Extended capabilities

## When Activated

The project-manager agent activates when:

- After major feature completion
- Consolidating multi-agent work
- Project status reviews
- Progress tracking needed
- Using `/watzup` command
- Weekly progress reviews
- Milestone completions

## Capabilities

### Implementation Plan Analysis

**Evaluates**:
- Plan completeness and clarity
- Resource allocation
- Timeline estimates
- Risk assessment
- Dependencies identification
- Success criteria definition

**Provides**:
- Plan validation
- Gap identification
- Timeline adjustments
- Risk mitigation strategies

### Progress Tracking & Management

**Monitors**:
- Task completion status
- Agent activity and outputs
- Timeline adherence
- Blocker identification
- Resource utilization

**Reports**:
- Daily progress summaries
- Weekly status reports
- Milestone completion
- Blocker escalation

### Report Collection

**Gathers from All Agents**:
```
./plans/reports/
├── YYMMDD-from-planner-to-pm-research-report.md
├── YYMMDD-from-tester-to-pm-test-results-report.md
├── YYMMDD-from-docs-manager-to-pm-doc-update-report.md
└── YYMMDD-from-git-manager-to-pm-commit-report.md
```

**Analyzes**:
- Cross-agent coordination
- Handoff efficiency
- Quality metrics
- Performance indicators

### Task Completeness Verification

**Validates**:
- All acceptance criteria met
- Tests passing
- Documentation updated
- Code reviewed
- Security checks passed
- Performance requirements met

**Checklist**:
```
✓ Implementation complete
✓ Tests written and passing
✓ Code reviewed and approved
✓ Documentation updated
✓ Security scan passed
✓ Performance benchmarks met
✓ Committed and pushed
```

### Project Roadmap Maintenance

**Maintains**: `./docs/project-roadmap.md`

**Updates After**:
- Feature implementations
- Milestone completions
- Bug fixes
- Security updates
- Weekly progress reviews
- Phase status changes
- Timeline modifications
- Dependency updates

**Roadmap Structure**:
```markdown
# Project Roadmap

## Current Phase: Phase 2 - Core Features

### Completed (Phase 1)
- ✅ Project setup and configuration
- ✅ Authentication system
- ✅ Database schema

### In Progress
- 🔄 Real-time notifications (80%)
- 🔄 API documentation (60%)

### Planned (Phase 2)
- 📋 Payment integration
- 📋 Admin dashboard

### Future (Phase 3+)
- 🚀 Mobile app
- 🚀 Analytics platform
```

## Example Usage

### Feature Completion Review

**Input:**
```bash
/watzup
```

**Process:**
```
1. Recent Changes Analysis (30s)
   Analyzing: git log --since="1 week ago"

   Found:
   - 23 commits across 7 days
   - 3 features implemented
   - 12 bug fixes
   - 45 files changed

   Features:
   ✓ User authentication (completed)
   ✓ Profile management (completed)
   🔄 Real-time notifications (80%)

2. Agent Report Collection (45s)
   Reading: plans/reports/251030-*.md

   Collected:
   - planner: 2 implementation plans
   - tester: 15 test reports (98% passing)
   - code-reviewer: 8 review reports
   - docs-manager: 3 documentation updates
   - git-manager: 23 commit reports

3. Progress Assessment (60s)
   Current Sprint: Week 43 (Oct 23-30)

   Velocity:
   - Planned: 21 story points
   - Completed: 19 story points
   - Carry over: 2 story points

   Quality Metrics:
   - Test coverage: 87% (target: 85%)
   - Code review approval rate: 95%
   - Documentation coverage: 82%
   - Security issues: 0 critical

4. Roadmap Update (30s)
   Updating: docs/project-roadmap.md

   Moved to Completed:
   - User authentication
   - Profile management

   Updated Progress:
   - Real-time notifications: 60% → 80%

   Timeline Adjustments:
   - Phase 2 completion: Nov 15 → Nov 18

5. Summary Generation (20s)
   Creating: plans/reports/251030-week-43-summary.md

Total Time: 3 minutes
```

**Generated Report:**

```markdown
# Week 43 Progress Summary
**Period**: Oct 23-30, 2025
**Generated**: 2025-10-30 14:30:00

## Executive Summary

Strong progress this week with 2 major features completed and
significant advancement on real-time notifications. Team velocity
maintained at 90% of planned capacity with high quality metrics.

## Achievements

### Features Completed ✅
1. **User Authentication System**
   - JWT-based authentication
   - Password hashing with bcrypt
   - Session management
   - Test coverage: 92%
   - Documented in: docs/system-architecture.md

2. **Profile Management**
   - User profile CRUD operations
   - Avatar upload with S3 integration
   - Profile validation
   - Test coverage: 88%

### In Progress 🔄
3. **Real-time Notifications** (80%)
   - WebSocket server implemented
   - Authentication middleware complete
   - Database schema created
   - Remaining: Frontend integration (2 days)

## Metrics

### Development Velocity
- Planned story points: 21
- Completed story points: 19
- Velocity: 90%
- Carry over: 2 points

### Quality Indicators
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Test Coverage | 87% | 85% | ✅ |
| Code Review Rate | 95% | 90% | ✅ |
| Documentation | 82% | 80% | ✅ |
| Security Issues | 0 | 0 | ✅ |

### Code Activity
- Commits: 23
- Files changed: 45
- Lines added: 2,134
- Lines removed: 876
- Net change: +1,258

## Agent Performance

### planner Agent
- Plans created: 2
- Quality score: 9.2/10
- Timeline accuracy: 95%

### tester Agent
- Test suites run: 15
- Tests executed: 847
- Pass rate: 98%
- Coverage increase: +5%

### code-reviewer Agent
- Reviews completed: 8
- Approval rate: 95%
- Average review time: 45 minutes
- Issues found: 12 (11 resolved)

### docs-manager Agent
- Documents updated: 3
- New sections: 8
- Code examples verified: 23
- Coverage: 82%

### git-manager Agent
- Commits: 23
- Conventional format: 100%
- Security blocks: 1 (resolved)
- Average commit time: 12s

## Blockers & Risks

### Current Blockers
None

### Resolved This Week
1. ✅ Redis connection issues
   - Resolution: Updated connection pooling
   - Time to resolve: 4 hours

2. ✅ TypeScript compilation errors
   - Resolution: Updated type definitions
   - Time to resolve: 2 hours

### Risks Identified
1. **Real-time Notifications Frontend**
   - Impact: Medium
   - Likelihood: Low
   - Mitigation: Allocated extra day for integration

## Timeline Updates

### Phase 2 Progress
- Start date: Oct 1, 2025
- Original end date: Nov 15, 2025
- Updated end date: Nov 18, 2025
- Reason: Additional frontend integration time

### Upcoming Milestones
- Nov 1: Real-time notifications complete
- Nov 8: Payment integration start
- Nov 18: Phase 2 completion
- Nov 20: Phase 3 planning

## Documentation Updates

### Updated Documents
1. **system-architecture.md**
   - Added: Authentication layer diagram
   - Added: Profile management flow
   - Updated: Database schema

2. **codebase-summary.md**
   - Updated: File count (45 → 49)
   - Added: Authentication module
   - Updated: Dependencies

3. **code-standards.md**
   - Added: Security protocols
   - Added: Password hashing standard

## Next Week Plan (Week 44)

### Priorities
1. Complete real-time notifications (2 days)
2. Begin payment integration planning (1 day)
3. Security audit preparation (1 day)
4. Documentation review (1 day)

### Scheduled
- Monday: Notifications frontend integration
- Tuesday: Notifications testing & deployment
- Wednesday: Payment integration planning
- Thursday: Security audit prep
- Friday: Documentation review & updates

### Story Points Allocated
- Real-time notifications completion: 5
- Payment planning: 3
- Security audit prep: 5
- Documentation: 2
- **Total**: 15 points

## Recommendations

### High Priority
1. **Complete Notifications**
   - Allocate dedicated frontend developer time
   - Schedule final integration testing
   - Prepare deployment checklist

2. **Security Audit**
   - Schedule penetration testing
   - Review authentication implementation
   - Update security documentation

### Medium Priority
3. **Documentation Coverage**
   - Target 85% by end of Phase 2
   - Focus on API documentation
   - Add more code examples

4. **Test Coverage**
   - Maintain 85%+ coverage
   - Focus on edge cases
   - Add integration tests

### Low Priority
5. **Code Cleanup**
   - Refactor duplicated code
   - Update deprecated dependencies
   - Improve error messages

## Team Notes

### What Went Well ✅
- Strong collaboration between agents
- High quality code review process
- Documentation kept up to date
- No major blockers this week

### What Could Improve 🔄
- Earlier identification of frontend complexity
- More detailed frontend task estimation
- Better WebSocket testing coverage

### Action Items
- [ ] Schedule notifications demo for stakeholders
- [ ] Begin payment integration research
- [ ] Update Phase 3 estimates
- [ ] Review and update risk register

---

**Next Review**: Nov 6, 2025
**Prepared by**: project-manager agent
**Report Version**: 1.0
```

### Multi-Agent Coordination

**Scenario**: Complex feature requiring multiple agents

**Process:**
```
1. Feature Request Received
   User: "Add payment processing with Stripe"

2. Project Manager: Initial Analysis (20s)
   Complexity: High
   Agents needed: 5
   Estimated time: 2 days

3. Orchestration Plan
   Sequential phases:

   Phase 1: Planning (60 min)
   - planner: Research Stripe integration
   - planner: Create implementation plan
   - docs-manager: Review security requirements

   Phase 2: Implementation (4 hours)
   - Code: Implement Stripe SDK integration
   - Code: Create payment endpoints
   - Code: Add webhook handlers

   Phase 3: Testing (2 hours)
   - tester: Unit tests
   - tester: Integration tests
   - tester: Security tests

   Phase 4: Review (1 hour)
   - code-reviewer: Code quality check
   - code-reviewer: Security review

   Phase 5: Documentation (45 min)
   - docs-manager: Update API docs
   - docs-manager: Add payment guide

   Phase 6: Deployment (30 min)
   - git-manager: Commit changes
   - git-manager: Push to remote

4. Execution & Monitoring
   Project Manager tracks each phase:

   ✓ Phase 1: Complete (58 min)
   ✓ Phase 2: Complete (4.2 hours)
   ✓ Phase 3: Complete (1.8 hours)
   ✓ Phase 4: Complete (55 min)
   🔄 Phase 5: In Progress (30/45 min)
   ⧗ Phase 6: Pending

5. Real-time Updates
   Project Manager provides status:

   "Payment integration: 85% complete
    Current phase: Documentation
    ETA: 25 minutes
    No blockers"

6. Completion & Report
   All phases complete
   ↓
   Project Manager:
   - Collects all agent reports
   - Verifies acceptance criteria
   - Updates roadmap
   - Generates summary report
```

## Documentation Triggers

The project-manager delegates documentation updates to docs-manager when:

### Phase Status Changes
```
Phase 1 Complete → Phase 2 Started
↓
Trigger: Update roadmap
docs-manager: Update project-roadmap.md
```

### Major Features Completed
```
Feature: Payment integration complete
↓
Trigger: Update documentation
docs-manager: Update system-architecture.md
docs-manager: Update codebase-summary.md
docs-manager: Create payment-guide.md
```

### Bugs Resolved
```
Critical bug fixed
↓
Trigger: Document fix
docs-manager: Add to troubleshooting.md
docs-manager: Update known-issues.md
```

### Timeline/Scope Modifications
```
Timeline extended: +3 days
↓
Trigger: Update project docs
docs-manager: Update project-roadmap.md
docs-manager: Update project-overview-pdr.md
```

### Dependency Updates
```
New dependency added: Stripe SDK
↓
Trigger: Update documentation
docs-manager: Update codebase-summary.md
docs-manager: Update deployment-guide.md
```

## Roadmap Maintenance

### Update Frequency

**MUST update after**:
- Each feature implementation
- Milestone completions
- Bug fixes (critical/high)
- Security updates
- Weekly progress reviews

**Example Updates**:

```markdown
Before:
### In Progress
- 🔄 User authentication (70%)
- 🔄 Profile management (40%)

After Feature Completion:
### Completed
- ✅ User authentication (Oct 28)

### In Progress
- 🔄 Profile management (85%)
```

### Roadmap Structure

```markdown
# Project Roadmap

## Project Overview
- **Project**: ClaudeKit Platform
- **Version**: 2.0.0
- **Current Phase**: Phase 2 - Core Features
- **Last Updated**: 2025-10-30

## Timeline

### Phase 1: Foundation ✅ (Sep 1 - Sep 30)
**Status**: Completed Oct 1, 2025

Completed:
- ✅ Project setup and configuration
- ✅ Database schema design
- ✅ Basic API structure
- ✅ Authentication foundation

**Metrics**:
- Duration: 30 days (planned: 30 days)
- Story points: 34/34 (100%)
- Quality: 94% test coverage

### Phase 2: Core Features 🔄 (Oct 1 - Nov 18)
**Status**: In Progress (70% complete)

Completed:
- ✅ User authentication (Oct 15)
- ✅ Profile management (Oct 28)

In Progress:
- 🔄 Real-time notifications (80%, ETA: Nov 1)

Planned:
- 📋 Payment integration (Nov 5-12)
- 📋 Admin dashboard (Nov 13-18)

**Metrics**:
- Completed: 19/27 story points (70%)
- On track: Yes
- Risks: Low

### Phase 3: Advanced Features 📋 (Nov 20 - Dec 31)
**Status**: Planned

Planned:
- 📋 Analytics dashboard
- 📋 Reporting system
- 📋 Advanced search
- 📋 API rate limiting

### Phase 4: Scale & Optimize 🚀 (Jan 2026+)
**Status**: Future

Future:
- 🚀 Performance optimization
- 🚀 Horizontal scaling
- 🚀 Mobile app
- 🚀 Internationalization

## Milestones

### Q4 2025
- ✅ Oct 1: Phase 2 kickoff
- ✅ Oct 15: Authentication complete
- ✅ Oct 28: Profile management complete
- 🎯 Nov 1: Notifications complete
- 🎯 Nov 12: Payment integration complete
- 🎯 Nov 18: Phase 2 completion

### Q1 2026
- 🎯 Jan 15: Analytics complete
- 🎯 Feb 1: Reporting complete
- 🎯 Mar 1: Phase 3 completion

## Dependencies

### External
- Stripe SDK v12.0+ (payment processing)
- Socket.io v4.5+ (real-time features)
- Redis v7.0+ (caching, pub/sub)

### Internal
- Authentication → Profile management
- Notifications → Payment integration
- Admin dashboard → All core features

## Risks & Mitigations

### Active Risks
1. **Frontend Integration Complexity**
   - Impact: Medium
   - Likelihood: Medium
   - Mitigation: Extra time allocated, dedicated frontend focus

2. **Third-party API Changes**
   - Impact: High
   - Likelihood: Low
   - Mitigation: Version pinning, regular update reviews

### Retired Risks
- ✅ Database performance (mitigated with indexes)
- ✅ Authentication security (resolved with JWT + refresh tokens)

## Team Velocity

### Historical
- Week 40: 18 story points
- Week 41: 17 story points
- Week 42: 20 story points
- Week 43: 19 story points

### Average: 18.5 points/week
### Phase 2 Target: 27 points remaining / 3 weeks = 9 points/week

## Change Log

### 2025-10-30
- Moved user authentication to completed
- Moved profile management to completed
- Updated notifications progress: 60% → 80%
- Adjusted Phase 2 end date: Nov 15 → Nov 18

### 2025-10-23
- Added real-time notifications to in-progress
- Updated timeline estimates
- Added frontend integration risk

### 2025-10-15
- Completed user authentication
- Updated Phase 2 progress to 50%
```

## Output Format

### Progress Reports

**Daily Standup Format**:
```markdown
# Daily Standup - Oct 30, 2025

## Yesterday
- ✅ Completed profile management feature
- ✅ Updated system architecture docs
- ✅ Fixed 3 security vulnerabilities

## Today
- 🔄 Real-time notifications frontend (6h)
- 🔄 Security audit preparation (2h)

## Blockers
None
```

**Weekly Summary Format**:
```markdown
# Week 43 Summary

## Key Metrics
- Velocity: 19/21 points (90%)
- Quality: 87% test coverage
- Security: 0 critical issues

## Highlights
- 2 major features completed
- 12 bugs fixed
- Documentation 82% complete

## Next Week
- Complete notifications
- Start payment integration
```

## Best Practices

### Do's ✅

**Regular Updates**
```bash
✓ Review progress daily
✓ Update roadmap weekly
✓ Collect agent reports continuously
✓ Generate summaries at milestones
```

**Proactive Monitoring**
```bash
✓ Track blockers immediately
✓ Identify risks early
✓ Communicate timeline changes promptly
✓ Escalate critical issues
```

**Clear Communication**
```bash
✓ Use consistent report format
✓ Provide actionable insights
✓ Include metrics and data
✓ Highlight both successes and issues
```

### Don'ts ❌

**Delayed Updates**
```bash
✗ Wait until end of week for updates
✗ Let roadmap become stale
✗ Ignore minor timeline slips
```

**Incomplete Tracking**
```bash
✗ Miss agent reports
✗ Forget to update roadmap
✗ Overlook quality metrics
```

**Poor Communication**
```bash
✗ Vague status updates
✗ Missing context in reports
✗ No recommendations provided
```

## Troubleshooting

### Problem: Roadmap Out of Date

**Symptoms**: Roadmap doesn't reflect current state

**Solutions:**
1. Review git commits since last update
2. Collect latest agent reports
3. Update completed/in-progress sections
4. Adjust timelines based on velocity

**Command:**
```bash
/watzup  # Generates comprehensive update
```

### Problem: Missing Agent Reports

**Symptoms**: Reports directory incomplete

**Solutions:**
1. Check agent execution logs
2. Verify report file naming convention
3. Manually request reports from agents
4. Update documentation triggers

**File Check:**
```bash
ls -la plans/reports/YYMMDD-*
```

### Problem: Velocity Tracking Inaccurate

**Symptoms**: Estimates don't match actual time

**Solutions:**
1. Review historical velocity data
2. Adjust story point estimates
3. Account for complexity factors
4. Update planning assumptions

**Analysis:**
```markdown
Historical velocity:
- Week 40: 18 points
- Week 41: 17 points
- Week 42: 20 points

Average: 18.3 points
Use for future planning
```

## Integration with Other Agents

### Receives Reports From

**All Agents**:
```
planner → Implementation plans
scout → File discoveries
debugger → Issue diagnoses
tester → Test results
code-reviewer → Review reports
docs-manager → Documentation updates
git-manager → Commit summaries
```

### Delegates To

**docs-manager**:
```
project-manager: "Update roadmap"
↓
docs-manager: Updates project-roadmap.md
```

**planner**:
```
project-manager: "Create Phase 3 plan"
↓
planner: Creates detailed implementation plan
```

### Coordinates With

**All Agents** for:
- Timeline alignment
- Resource allocation
- Priority setting
- Risk management

## Important Notes

### Always Update Roadmap

**CRITICAL**: Must update roadmap after:
- Feature implementations
- Milestones
- Bug fixes (critical/high)
- Security updates
- Weekly reviews

### Report File System

**Convention**: `./plans/reports/YYMMDD-from-[agent]-to-[agent]-[task]-report.md`

**Example**: `251030-from-planner-to-pm-auth-research-report.md`

### Delegation to docs-manager

**Never directly updates documentation**:
- ✅ Identifies documentation needs
- ✅ Delegates to docs-manager
- ❌ Never edits docs directly

**Exception**: Only updates `project-roadmap.md`

## Next Steps

Learn more about related topics:

- [Docs Manager](/docs/agents/docs-manager) - Documentation management
- [Git Manager](/docs/agents/git-manager) - Version control operations
- [Planner](/docs/agents/planner) - Implementation planning
- [Commands](/docs/commands/) - Project management commands

---

**Key Takeaway**: The project-manager agent provides comprehensive project oversight through implementation analysis, progress tracking, report collection, and roadmap maintenance while delegating specialized tasks to appropriate agents.
