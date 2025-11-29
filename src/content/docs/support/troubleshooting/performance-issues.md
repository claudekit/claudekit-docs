---
title: Performance Issues
description: "Documentation for Performance Issues
description:
section: support
category: support/troubleshooting
order: 6
published: true"
section: support
category: support/troubleshooting
order: 6
published: true
---

# Performance Issues

Commands taking forever? Optimize ClaudeKit for blazing-fast execution.

## Quick Fix: Commands Too Slow

**Symptom**: Commands take 5+ minutes when they should take seconds

**Solution**:

```bash
# 1. Check internet connection
ping google.com

# 2. Verify API keys set (avoid retries)
echo $GEMINI_API_KEY

# 3. Use faster model
# Edit agent file, change model to:
model: gemini-2.5-flash-agent

# 4. Run with verbose to see bottleneck
export CLAUDEKIT_VERBOSE=1
/cook implement feature
```

---

## Slow Command Execution

### General Slowness

**Symptom**: All commands take longer than expected

**Diagnosis**:

```bash
# Time a simple command
time /plan hello world

# Expected: <30 seconds
# If >60 seconds: Investigate below
```

**Common causes & fixes**:

#### Internet Connection

```bash
# Test connection speed
curl -w "@-" -o /dev/null -s https://generativelanguage.googleapis.com <<< "time_total: %{time_total}s\n"

# Should be <1 second
# If slow: Check WiFi, restart router, try ethernet
```

#### API Rate Limiting

**Symptom**: Commands slow after burst of usage

**Google Gemini free tier limits**:
- 15 requests/minute
- 1,500 requests/day
- 1 million tokens/minute

**Solution**:

```bash
# Wait between commands
/plan feature A
# Wait 60 seconds
/cook feature A

# Or upgrade to paid tier
# console.cloud.google.com/billing
```

**Monitor rate limits**:
```bash
# Enable verbose mode
export CLAUDEKIT_VERBOSE=1
/cook implement feature

# Watch for "429" errors or "quota exceeded"
```

#### Wrong Model Selection

**Symptom**: Simple tasks take minutes

**Problem**: Using slow, thorough models for simple tasks

**Solution**:

```bash
# Check agent model
cat .claude/agents/tester.md | grep model:

# Fast models (use for simple tasks):
model: gemini-2.5-flash-agent
model: grok-code

# Slow models (use for complex tasks):
model: claude-sonnet-4
model: claude-opus-4

# Fix: Edit agent file
nano .claude/agents/tester.md
# Change to: model: gemini-2.5-flash-agent
```

**Model speed comparison**:
| Model | Speed | Best For |
|-------|-------|----------|
| gemini-2.5-flash-agent | Fastest | Testing, docs, simple fixes |
| grok-code | Fast | Git ops, quick reviews |
| claude-sonnet-4 | Medium | Code review, design |
| claude-opus-4 | Slow | Architecture, complex planning |

---

### Large Codebase Performance

**Symptom**: Commands slow in projects with 1,000+ files

**Optimization steps**:

#### Exclude Unnecessary Files

```bash
# Create .claudeignore (like .gitignore)
cat > .claudeignore << 'EOF'
node_modules/
dist/
build/
.next/
.cache/
*.log
*.lock
coverage/
.git/
EOF

# Verify exclusions
ls .claudeignore
```

#### Optimize Repomix

Repomix scans your codebase for agent context. Large projects slow it down.

```bash
# Check repomix config
cat repomix.config.json

# Optimize with exclude patterns:
{
  "exclude": [
    "node_modules/**",
    "dist/**",
    "build/**",
    "*.min.js",
    "*.map",
    "coverage/**",
    ".git/**"
  ],
  "include": [
    "src/**",
    "lib/**"
  ]
}

# Test performance
time npx repomix

# Before optimization: 60+ seconds
# After: <10 seconds
```

#### Limit Context Size

```bash
# For agents that use full codebase context
# Limit scope to relevant directories

# ❌ Slow (scans everything)
/cook implement user auth

# ✅ Fast (scoped)
/cook implement user auth in src/auth/

# Or use --scope flag (if available)
/cook implement user auth --scope src/auth/
```

---

## Memory Issues

### Out of Memory Errors

**Symptom**: "JavaScript heap out of memory" or process crashes

**Solution**:

**Increase Node.js memory**:

```bash
# Method 1: Environment variable
export NODE_OPTIONS="--max-old-space-size=4096"
claude

# Method 2: Direct command
node --max-old-space-size=4096 $(which claude)

# Method 3: Permanent (add to shell profile)
echo 'export NODE_OPTIONS="--max-old-space-size=4096"' >> ~/.bashrc
source ~/.bashrc
```

**Memory allocation guide**:
- Small projects (<100 files): 2048 MB
- Medium projects (100-1,000 files): 4096 MB
- Large projects (1,000+ files): 8192 MB

**Verify change**:
```bash
node -e "console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))"
# Should show: 4096 or your set value
```

### Memory Leaks

**Symptom**: Claude Code slows down over time, eventually crashes

**Solution**:

```bash
# Monitor memory usage
# Linux
watch -n 1 "ps aux | grep claude"

# macOS
watch -n 1 "ps aux | grep claude | grep -v grep"

# If memory grows continuously:
# 1. Restart Claude Code
exit
claude

# 2. Clear npm cache
npm cache clean --force

# 3. Update ClaudeKit
ck init --kit engineer

# 4. Update Node.js
node --version  # Should be 18+
```

---

## Timeout Issues

### Commands Timeout

**Symptom**: "Request timeout" or command hangs forever

**Solutions**:

#### Increase Timeout

```bash
# If command takes >5 minutes, split into smaller tasks

# ❌ Slow (tries to do everything)
/cook implement entire authentication system

# ✅ Fast (incremental)
/plan implement authentication
/cook implement login endpoint
/cook implement signup endpoint
/cook implement password reset
```

#### Check API Endpoint

```bash
# Test API connectivity
curl -w "time: %{time_total}s\n" -o /dev/null -s \
  https://generativelanguage.googleapis.com/v1beta/models?key=$GEMINI_API_KEY

# Should complete in <2 seconds
# If timeout: Check firewall, VPN, proxy
```

#### Corporate Firewall/Proxy

**Symptom**: Timeouts only at work/school

**Solution**:

```bash
# Configure proxy
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080

# Or in .env
echo 'HTTP_PROXY=http://proxy.company.com:8080' >> .env
echo 'HTTPS_PROXY=http://proxy.company.com:8080' >> .env

# Restart Claude Code
claude
```

---

## Debugging Performance

### Enable Verbose Mode

```bash
# Method 1: Environment variable
export CLAUDEKIT_VERBOSE=1
/cook implement feature

# Method 2: Command flag
/cook implement feature --verbose

# Watch for slow operations:
# - "Generating repomix..." (should be <10s)
# - "Calling API..." (should be <5s)
# - "Reading files..." (should be <2s)
```

### Profile Command Execution

```bash
# Time each command
time /plan implement authentication
# Note the "real" time

time /cook implement authentication
# Compare times

# Identify bottleneck:
# - Planning: >2 minutes = researcher agent slow
# - Cooking: >5 minutes = codebase too large
# - Testing: >3 minutes = test suite issues
```

### Check API Latency

```bash
# Test API response time
for i in {1..5}; do
  curl -w "time: %{time_total}s\n" -o /dev/null -s \
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$GEMINI_API_KEY" \
    -H 'Content-Type: application/json' \
    -d '{"contents":[{"parts":[{"text":"Hi"}]}]}'
done

# Average should be <2 seconds
# If >5 seconds consistently: Check network
```

### Monitor Resource Usage

**Linux**:
```bash
# CPU and memory
htop

# Or basic version
top
# Look for "claude" or "node" process
```

**macOS**:
```bash
# Activity Monitor (GUI)
open -a "Activity Monitor"

# Or command line
top -o cpu
# Look for "claude" or "node"
```

**Windows**:
```powershell
# Task Manager (GUI)
taskmgr

# Or PowerShell
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Select-Object ProcessName, CPU, WorkingSet
```

---

## Optimization Tips

### Project-Level Optimizations

#### Optimize Dependencies

```bash
# Remove unused dependencies
npm prune

# Update to latest versions (often faster)
npm update

# Use faster package manager
npm install -g pnpm
pnpm install  # 2-3x faster than npm
```

#### Cache Optimization

```bash
# Clear all caches
npm cache clean --force
rm -rf node_modules/.cache
rm -rf .next  # If using Next.js
rm -rf .nuxt  # If using Nuxt

# Reinstall
npm install
```

#### Use .claudeignore

```bash
# Exclude performance-killing directories
cat > .claudeignore << 'EOF'
# Dependencies
node_modules/
vendor/
.pnp.*

# Build outputs
dist/
build/
out/
.next/
.nuxt/
.cache/

# Large assets
*.mp4
*.mov
*.zip
*.tar.gz
public/videos/
public/images/originals/

# Logs and temp files
*.log
*.tmp
.DS_Store

# Version control
.git/
.svn/

# IDE
.idea/
.vscode/
*.swp
EOF
```

---

### Command-Level Optimizations

#### Use Faster Commands

```bash
# ✅ Fast commands (seconds)
/fix:fast small bug         # Uses fast model
/git:cm                     # Simple git operations

# ❌ Slow commands (minutes)
/fix:hard complex issue     # Uses thorough model
/bootstrap full project     # Creates entire structure
```

#### Scope Tasks Narrowly

```bash
# ❌ Slow (vague, agent explores everything)
/cook add feature

# ✅ Fast (specific, agent focuses)
/cook implement GET /api/users endpoint with pagination

# ❌ Slow (entire codebase)
/fix:ui button styling

# ✅ Fast (scoped)
/fix:ui button styling in src/components/Button.tsx
```

#### Run Commands Sequentially

```bash
# ✅ Correct (one at a time)
/plan implement auth
# Wait for completion
/cook implement auth

# ❌ Wrong (compete for resources)
/plan implement auth
/cook implement auth  # Don't run simultaneously!
```

---

## Performance Benchmarks

### Expected Command Times

**With fast models (gemini-2.5-flash-agent)**:

| Command | Small Project | Medium Project | Large Project |
|---------|---------------|----------------|---------------|
| /plan | 10-20s | 20-40s | 40-90s |
| /cook | 30-60s | 60-120s | 120-300s |
| /test | 15-30s | 30-60s | 60-120s |
| /fix:fast | 10-20s | 20-30s | 30-60s |
| /git:cm | 5-10s | 10-20s | 20-30s |

**If commands take 2x longer**: Check optimizations above

**If commands take 5x+ longer**: Critical performance issue, see [Still Stuck](#still-stuck)

---

## Prevention Tips

✅ **Do**:
- Use .claudeignore for large projects
- Choose appropriate models for task complexity
- Scope commands narrowly
- Monitor API rate limits
- Keep dependencies updated
- Use verbose mode when debugging

❌ **Don't**:
- Scan entire codebase for small changes
- Use slow models for simple tasks
- Run multiple commands simultaneously
- Ignore timeout warnings
- Let npm cache grow indefinitely
- Process unnecessary files

---

## Related Issues

- [Installation Issues](/docs/support/troubleshooting/installation-issues) - Slow installation problems
- [Command Errors](/docs/support/troubleshooting/command-errors) - Commands failing vs hanging
- [Agent Issues](/docs/support/troubleshooting/agent-issues) - Specific agent slowness

---

## Still Stuck?

### Create Performance Report

```bash
# Collect performance diagnostics
{
  echo "=== System Info ==="
  node --version
  npm --version
  claude --version
  uname -a

  echo -e "\n=== Project Size ==="
  find . -type f | wc -l
  du -sh .

  echo -e "\n=== Memory ==="
  free -h 2>/dev/null || vm_stat

  echo -e "\n=== Disk Space ==="
  df -h .

  echo -e "\n=== API Latency ==="
  curl -w "time: %{time_total}s\n" -o /dev/null -s \
    "https://generativelanguage.googleapis.com/v1beta/models?key=$GEMINI_API_KEY"

  echo -e "\n=== Command Timing ==="
  time /plan hello world 2>&1 | tail -3
} > performance-report.txt
```

### Get Help

1. **GitHub Issues**: [Report performance problems](https://github.com/claudekit/claudekit-engineer/issues)
2. **Discord**: [Performance optimization channel](https://discord.gg/claudekit)
3. **Include**: Performance report, project size, specific slow command, expected vs actual time

---

**Most performance issues resolve with proper .claudeignore and model selection.** Start there, then optimize deeper if needed.
