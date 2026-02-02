---
title: Agent Issues
description: "Debug and fix ClaudeKit agent problems - agents not responding or behaving unexpectedly"
section: support
category: support/troubleshooting
order: 4
published: true
---
# Agent Issues

Agents not responding or behaving unexpectedly? Debug and fix agent problems fast.

## Quick Fix: Agent Not Activating

**Symptom**: Command runs but agent never starts or responds

**Solution**:

```bash
# 1. Verify agent file exists
ls .claude/agents/ | grep planner

# 2. Check agent file format
cat .claude/agents/planner.md

# 3. Verify Claude Code is running
claude --version

# 4. Restart Claude Code
# Exit (Ctrl+C), then restart
claude
```

---

## Agent Not Responding

### Command Runs But Agent Silent

**Symptom**: Command starts but no agent output appears

**Diagnosis**:

```bash
# Check agent file exists
ls -la .claude/agents/

# Should show:
# planner.md
# researcher.md
# code-reviewer.md
# tester.md
# copywriter.md
# etc.
```

**Step 1: Verify agent file format**

```bash
# View agent file
cat .claude/agents/planner.md
```

**Required structure**:
```markdown
---
name: planner
description: Creates implementation plans
model: gemini-2.5-flash-agent
---

# Planner Agent

Agent instructions and behaviors...
```

✅ **Correct frontmatter**:
```yaml
---
name: planner
description: Creates implementation plans
model: gemini-2.5-flash-agent
---
```

❌ **Incorrect frontmatter**:
```yaml
# Missing model
---
name: planner
description: Creates implementation plans
---

# Wrong model name
---
name: planner
description: Creates implementation plans
model: gpt-4
---

# Syntax error
---
name planner
description: Creates implementation plans
---
```

**Step 2: Check Claude Code connection**

```bash
# Verify Claude Code CLI is running
ps aux | grep claude

# If not running, start it
claude
```

**Step 3: Check API keys**

Some agents require API keys:

```bash
# Check .env file
cat .env | grep API_KEY

# Required keys:
# GEMINI_API_KEY=...        # For Gemini-powered agents
# SEARCH_API_KEY=...        # For researcher agent
# OPENROUTER_API_KEY=...    # For alternative models
```

See [API Key Setup](/docs/support/troubleshooting/api-key-setup) for configuration.

---

### Agent Starts Then Stops

**Symptom**: Agent begins work but stops mid-execution

**Common causes**:

#### API Rate Limiting

**Error**: "Rate limit exceeded" or "Quota exceeded"

**Solution**:

```bash
# Check API key tier
# Google AI Studio: Free tier = 15 RPM
# Vertex AI: Higher limits

# Wait 1 minute, then retry
/cook implement feature

# Or upgrade to paid tier at aistudio.google.com
```

**Monitor rate limits**:
```bash
# Enable verbose mode
export CLAUDEKIT_VERBOSE=1

# Watch API calls
/cook implement feature

# Look for "Rate limit" messages
```

#### Network Issues

**Error**: Timeout or connection refused

**Solution**:

```bash
# Check internet connection
ping google.com

# Check proxy settings if behind corporate firewall
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080

# Retry command
/cook implement feature
```

#### Memory Issues

**Error**: "Out of memory" or agent hangs

**Solution**:

```bash
# Check available memory
free -h  # Linux
vm_stat  # macOS

# Clear Node cache
npm cache clean --force

# Restart Claude Code with more memory
NODE_OPTIONS="--max-old-space-size=4096" claude
```

---

## Agent Conflicts

### Multiple Agents Interfere

**Symptom**: Two agents try to modify same files simultaneously

**Solution**:

Commands are designed to orchestrate agents sequentially. If conflicts occur:

```bash
# Check command implementation
cat .claude/commands/core/cook.md

# Look for orchestration logic:
# 1. Planner (creates plan)
# 2. Developer (implements code)
# 3. Tester (runs tests)
# 4. Code reviewer (reviews)

# Agents should run in sequence, not parallel
```

**Fix conflicts**:

```bash
# Backup work in progress
git stash

# Restart command with clean state
/cook implement feature

# Expected: Agents run one at a time
```

### Agent Loop

**Symptom**: Agent keeps repeating same action

**Solution**:

```bash
# Stop Claude Code (Ctrl+C)
^C

# Check if agent file has infinite loop logic
cat .claude/agents/problematic-agent.md

# Look for:
# - Missing completion conditions
# - Recursive calls without exit
# - Incorrect workflow logic

# Report to ClaudeKit if core agent
# Or fix custom agent logic
```

---

## Delegation Problems

### Agent Doesn't Spawn Sub-Agents

**Symptom**: Planner should spawn researchers but doesn't

**Expected behavior**:
```
Planner agent starts
├── Spawns researcher #1 (Google search)
├── Spawns researcher #2 (Documentation)
└── Waits for results, creates plan
```

**Diagnosis**:

```bash
# Check planner agent file
cat .claude/agents/planner.md | grep -i "spawn\|delegate"

# Should contain instructions like:
# "Spawn researcher agents in parallel"
# "Delegate research tasks"
```

**Solution**:

```bash
# Update ClaudeKit to latest version
ck init --kit engineer

# Verify planner agent updated
cat .claude/agents/planner.md | head -20

# Test delegation
/plan implement user authentication

# Expected: Multiple agents activate
```

### Sub-Agent Results Not Used

**Symptom**: Sub-agents complete but parent ignores results

**Solution**:

```bash
# Check if results written to file system
ls -la plans/reports/

# Should show:
# research-*.md
# plan-*.md
# review-*.md

# If missing, agents not writing reports correctly
# Update ClaudeKit
ck init --kit engineer
```

---

## Slow Agent Performance

### Agent Takes Too Long

**Symptom**: Agent runs for minutes without completing

**Optimization steps**:

**Step 1: Use appropriate agent for task**

```bash
# ✅ Correct: Fast tasks with fast agents
/fix --quick typo in button text  # Uses fast model

# ❌ Wrong: Simple task with complex agent
/fix typo in button text  # Overkill, uses slow model
```

**Step 2: Check model configuration**

```bash
# View agent model
cat .claude/agents/planner.md | grep model:

# Fast models:
# - gemini-2.5-flash-agent
# - grok-code

# Slow but thorough models:
# - claude-sonnet-4
# - claude-opus-4
```

**Step 3: Optimize task description**

```bash
# ✅ Specific task
/cook implement JWT authentication with refresh tokens

# ❌ Vague task (agent spends time clarifying)
/cook add auth stuff
```

**Step 4: Check network latency**

```bash
# Test API response time
time curl -X POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent \
  -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"Hello"}]}]}'

# Should complete in <2 seconds
# If slow, check internet connection
```

See [Performance Issues](/docs/support/troubleshooting/performance-issues) for optimization.

---

## Agent-Specific Issues

### Planner Agent

**Issue**: Plan too vague or missing details

**Solution**:

```bash
# Provide more context in task description
/plan implement user authentication system with:
- JWT tokens
- Refresh token rotation
- Email/password login
- OAuth (Google, GitHub)
- 2FA support

# More context = better plan
```

**Issue**: Plan missing research

**Solution**:

```bash
# Check researcher agent exists
cat .claude/agents/researcher.md

# Review researcher agent logic
```

### Researcher Agent

**Issue**: No search results returned

**Solution**:

```bash
# Check SearchAPI key
echo $SEARCH_API_KEY

# If missing:
export SEARCH_API_KEY=your-key-here

# Or add to .env
echo 'SEARCH_API_KEY=your-key' >> .env

# Test manually
curl "https://www.searchapi.io/api/v1/search?q=test&api_key=$SEARCH_API_KEY"
```

### Code Reviewer Agent

**Issue**: Review too strict or missing issues

**Solution**:

```bash
# Check review criteria in agent file
cat .claude/agents/code-reviewer.md

# Adjust sensitivity if needed (custom agent):
# - Set review_level: strict/moderate/lenient
# - Configure security rules
# - Enable/disable specific checks
```

### Tester Agent

**Issue**: Tests fail to run

**Solution**:

```bash
# Check test framework installed
npm list jest  # or vitest, mocha, etc.

# Install if missing
npm install --save-dev jest

# Verify test command in package.json
cat package.json | grep test

# Should show:
# "test": "jest" or similar

# Run tests manually
npm test
```

### Copywriter Agent

**Issue**: Generated copy is off-brand

**Solution**:

```bash
# Add brand guidelines to project
cat > docs/brand-voice.md << 'EOF'
# Brand Voice Guidelines

- Tone: Professional but approachable
- Avoid: Jargon, corporate speak
- Use: Active voice, short sentences
- Examples: [Include brand examples]
EOF

# Reference in copywriter prompt
"Create homepage hero section using brand voice from docs/brand-voice.md"
# Use copywriting skill (quality mode)
```

---

## Debugging Agents

### Enable Agent Logging

```bash
# Method 1: Environment variable
export CLAUDEKIT_DEBUG=1
export CLAUDEKIT_VERBOSE=1

# Method 2: Check agent output files
ls -la plans/reports/

# View latest agent report
cat plans/reports/$(ls -t plans/reports/ | head -1)
```

### Monitor Agent Activity

```bash
# Watch plans directory for new reports
watch -n 1 'ls -lh plans/reports/'

# Or use continuous tail
tail -f plans/reports/*.md
```

### Test Agent Directly

```bash
# View agent prompt
cat .claude/agents/planner.md

# Test with minimal command
/plan hello world feature

# Expected: Quick plan generation
# If fails: Check agent file syntax
```

---

## Verify Agent Setup

### Check All Agents

```bash
# List all agents
ls -1 .claude/agents/

# Expected output (12 agents):
# code-reviewer.md
# copywriter.md
# database-admin.md
# debugger.md
# designer.md
# docs-manager.md
# git-manager.md
# journal-writer.md
# planner.md
# project-manager.md
# researcher.md
# tester.md

# Verify count
ls .claude/agents/*.md | wc -l
# Should show: 12
```

### Validate Agent Files

```bash
# Check each agent has required frontmatter
for agent in .claude/agents/*.md; do
  echo "Checking $agent..."
  grep -q "^name:" "$agent" && echo "✅ Has name" || echo "❌ Missing name"
  grep -q "^model:" "$agent" && echo "✅ Has model" || echo "❌ Missing model"
  echo ""
done
```

---

## Prevention Tips

✅ **Do**:
- Keep agents updated: `ck init`
- Use appropriate agents for task complexity
- Provide clear, specific task descriptions
- Monitor API rate limits
- Check agent reports after execution

❌ **Don't**:
- Modify core agent files directly
- Run multiple commands simultaneously
- Use slow models for simple tasks
- Ignore agent error messages
- Delete agent reports prematurely

---

## Related Issues

- [Command Errors](/docs/support/troubleshooting/command-errors) - Commands not triggering agents
- [API Key Setup](/docs/support/troubleshooting/api-key-setup) - Agent API credentials
- [Performance Issues](/docs/support/troubleshooting/performance-issues) - Slow agent execution

---

## Still Stuck?

### Create Agent Debug Report

```bash
# Collect agent diagnostics
{
  echo "=== Agent Files ==="
  ls -lh .claude/agents/

  echo -e "\n=== Agent Reports ==="
  ls -lh plans/reports/

  echo -e "\n=== API Keys ==="
  env | grep API_KEY | sed 's/=.*/=***/'

  echo -e "\n=== Recent Agent Output ==="
  tail -100 plans/reports/$(ls -t plans/reports/ | head -1)
} > agent-debug.txt
```

### Get Help

1. **GitHub Issues**: [Report agent problems](https://github.com/claudekit/claudekit-engineer/issues)
2. **Discord**: [Agent troubleshooting channel](https://claudekit.cc/discord)
3. **Include**: Agent debug report, specific agent name, command used, expected vs actual behavior

---

**Most agent issues resolve with updated ClaudeKit.** Run `ck init --kit engineer` first, then retest your command.
