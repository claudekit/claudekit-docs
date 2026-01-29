---
title: API Key Setup
description: "Configure API keys for ClaudeKit - Gemini, SearchAPI, and OpenRouter credentials setup"
section: support
category: support/troubleshooting
order: 5
published: true
---

# API Key Setup

Fix API key errors and configure credentials for ClaudeKit's AI-powered features.

## Quick Fix: Missing API Key

**Symptom**: "API key not found" or "GEMINI_API_KEY is not set"

**Solution**:

```bash
# Add to .env file (recommended)
echo 'GEMINI_API_KEY=your-key-here' >> .env

# Or export for current session
export GEMINI_API_KEY=your-key-here

# Verify
echo $GEMINI_API_KEY

# Restart Claude Code
claude
```

---

## Google Gemini API Key

### Get Your API Key

**Step 1: Visit Google AI Studio**

Go to [aistudio.google.com](https://aistudio.google.com)

**Step 2: Create API Key**

1. Click "Get API key" in top nav
2. Select "Create API key in new project" (or use existing project)
3. Copy the generated key (starts with `AIza...`)

**Step 3: Configure ClaudeKit**

**Method 1: .env file (recommended)**

```bash
# Create or edit .env in project root
echo 'GEMINI_API_KEY=AIza...' >> .env

# Verify
cat .env | grep GEMINI
```

**Method 2: Export (session only)**

```bash
# Add to current terminal session
export GEMINI_API_KEY=AIza...

# Verify
echo $GEMINI_API_KEY

# Make permanent (add to shell profile)
echo 'export GEMINI_API_KEY=AIza...' >> ~/.bashrc
source ~/.bashrc
```


### Verify Gemini Setup

```bash
# Test API key directly
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$GEMINI_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Hello"}]}]}'

# Expected: JSON response with generated text
# If error: Check key validity
```

### Gemini API Issues

#### Invalid API Key

**Error**: "API key not valid" or "403 Forbidden"

**Solutions**:

1. **Check key format**:
   ```bash
   # Correct format: AIza... (39 characters)
   echo $GEMINI_API_KEY | wc -c
   # Should show: 39
   ```

2. **Check for spaces/quotes**:
   ```bash
   # ❌ Wrong
   export GEMINI_API_KEY='AIza...'  # Has quotes
   export GEMINI_API_KEY=AIza ...    # Has space

   # ✅ Correct
   export GEMINI_API_KEY=AIza...
   ```

3. **Regenerate key**:
   - Go to [aistudio.google.com](https://aistudio.google.com)
   - Delete old key
   - Create new key
   - Update configuration

#### API Not Enabled

**Error**: "API not enabled" or "Permission denied"

**Solution**:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. Enable "Generative Language API"
4. Wait 1-2 minutes for propagation
5. Retry

#### Rate Limit Exceeded

**Error**: "429 Resource exhausted" or "Quota exceeded"

**Free tier limits**:
- 15 requests per minute
- 1,500 requests per day
- 1 million tokens per minute

**Solutions**:

```bash
# Wait 1 minute between commands
/plan implement feature
# Wait 60 seconds...
/clear
/cook "Implement feature as planned"

# Or upgrade to paid tier
# Visit: console.cloud.google.com/billing
```

**Monitor usage**:
```bash
# Enable verbose mode
export CLAUDEKIT_VERBOSE=1

# Watch API calls
/cook implement feature

# Count requests in output
```

---

## SearchAPI Key

SearchAPI powers the researcher agent for Google/YouTube search.

### Get Your API Key

**Step 1: Visit SearchAPI**

Go to [searchapi.io](https://www.searchapi.io)

**Step 2: Sign Up**

1. Create free account (100 searches/month)
2. Verify email
3. Copy API key from dashboard

**Step 3: Configure ClaudeKit**

```bash
# Add to .env
echo 'SEARCH_API_KEY=your-searchapi-key' >> .env

# Or export
export SEARCH_API_KEY=your-searchapi-key

# Verify
echo $SEARCH_API_KEY
```

### Verify SearchAPI Setup

```bash
# Test API key
curl "https://www.searchapi.io/api/v1/search?engine=google&q=test&api_key=$SEARCH_API_KEY"

# Expected: JSON with search results
# If error: Check key validity
```

### SearchAPI Issues

#### Free Tier Limit Reached

**Error**: "Monthly quota exceeded"

**Free tier**: 100 searches/month

**Solution**:

```bash
# Check usage at searchapi.io dashboard

# Wait until next month
# Or upgrade to paid plan
```

#### Search Returns No Results

**Error**: Empty results or "No results found"

**Solutions**:

1. **Check query format**:
   ```bash
   # Test manually
   curl "https://www.searchapi.io/api/v1/search?engine=google&q=react+hooks&api_key=$SEARCH_API_KEY"
   ```

2. **Try different search terms**:
   ```bash
   # More specific query
   /plan implement authentication with JWT tokens
   # Better than:
   /plan add auth
   ```

---

## OpenRouter API Key

Optional: Use alternative models like Claude Opus, GPT-4, etc.

### Get Your API Key

**Step 1: Visit OpenRouter**

Go to [openrouter.ai](https://openrouter.ai)

**Step 2: Sign Up**

1. Create account
2. Add credits (pay-as-you-go)
3. Generate API key

**Step 3: Configure ClaudeKit**

```bash
# Add to .env
echo 'OPENROUTER_API_KEY=sk-or-...' >> .env

# Or export
export OPENROUTER_API_KEY=sk-or-...

# Verify
echo $OPENROUTER_API_KEY
```

### Configure Agent Models

Edit agent files to use OpenRouter models:

```bash
# Example: Use Claude Opus for planning
cat > .claude/agents/planner.md << 'EOF'
---
name: planner
description: Creates implementation plans
model: anthropic/claude-opus-4
---

# Planner Agent

...
EOF
```

**Available models**:
- `anthropic/claude-opus-4` - Most capable
- `anthropic/claude-sonnet-4` - Balanced
- `openai/gpt-4-turbo` - Fast, high quality
- `meta-llama/llama-3-70b` - Open source

See [openrouter.ai/models](https://openrouter.ai/models) for full list.

### Verify OpenRouter Setup

```bash
# Test API key
curl https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "anthropic/claude-sonnet-4",
    "messages": [{"role": "user", "content": "Hello"}]
  }'

# Expected: JSON response with completion
```

---

## Environment Variable Management

### .env File Setup

**Create .env in project root**:

```bash
# .env file
GEMINI_API_KEY=AIza...
SEARCH_API_KEY=searchapi-key-here
OPENROUTER_API_KEY=sk-or-...

# Optional
CLAUDEKIT_VERBOSE=0
CLAUDEKIT_DEBUG=0
```

**Add to .gitignore**:

```bash
# Prevent committing secrets
echo '.env' >> .gitignore

# Verify
cat .gitignore | grep .env
```

### Shell Profile Setup

**Make keys permanent** (add to shell profile):

**Bash** (~/.bashrc or ~/.bash_profile):
```bash
echo 'export GEMINI_API_KEY=AIza...' >> ~/.bashrc
echo 'export SEARCH_API_KEY=searchapi-key' >> ~/.bashrc
source ~/.bashrc
```

**Zsh** (~/.zshrc):
```bash
echo 'export GEMINI_API_KEY=AIza...' >> ~/.zshrc
echo 'export SEARCH_API_KEY=searchapi-key' >> ~/.zshrc
source ~/.zshrc
```

**Fish** (~/.config/fish/config.fish):
```bash
echo 'set -x GEMINI_API_KEY AIza...' >> ~/.config/fish/config.fish
echo 'set -x SEARCH_API_KEY searchapi-key' >> ~/.config/fish/config.fish
source ~/.config/fish/config.fish
```

### Verify All Keys

```bash
# Check all required keys
{
  echo "GEMINI_API_KEY: ${GEMINI_API_KEY:0:10}..."
  echo "SEARCH_API_KEY: ${SEARCH_API_KEY:0:10}..."
  echo "OPENROUTER_API_KEY: ${OPENROUTER_API_KEY:0:10}..."
} | grep -v "^.*:  *$"

# Should show truncated keys (not empty)
```

---

## Security Best Practices

### Protect Your Keys

✅ **Do**:
- Store keys in .env file
- Add .env to .gitignore
- Use environment variables
- Rotate keys periodically
- Use different keys per project

❌ **Don't**:
- Commit keys to git
- Share keys publicly
- Store keys in code files
- Use keys in URLs
- Hardcode keys in scripts

### Check for Leaked Keys

```bash
# Scan git history for keys
git log -p | grep -i "api.*key"

# Check if .env is tracked
git ls-files | grep .env

# If .env is tracked, remove it:
git rm --cached .env
git commit -m "Remove .env from tracking"
```

### Revoke Compromised Keys

**If key is leaked**:

1. **Gemini**: Go to [aistudio.google.com](https://aistudio.google.com) → Delete key
2. **SearchAPI**: Go to [searchapi.io/dashboard](https://www.searchapi.io/dashboard) → Revoke key
3. **OpenRouter**: Go to [openrouter.ai/keys](https://openrouter.ai/keys) → Delete key

Then generate new keys and update configuration.

---

## Verify Complete Setup

After configuring all keys:

```bash
# Test Gemini
curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=$GEMINI_API_KEY" \
  -H 'Content-Type: application/json' \
  -d '{"contents":[{"parts":[{"text":"Test"}]}]}' | grep -q "candidates" && echo "✅ Gemini works" || echo "❌ Gemini failed"

# Test SearchAPI
curl -s "https://www.searchapi.io/api/v1/search?q=test&api_key=$SEARCH_API_KEY" | grep -q "search_results" && echo "✅ SearchAPI works" || echo "❌ SearchAPI failed"

# Test with ClaudeKit
/plan implement hello world
# Should complete without API key errors
```

---

## Common Issues

### Keys Not Loading

**Symptom**: Keys set but still "not found" error

**Solutions**:

```bash
# 1. Check .env location
ls -la .env
# Must be in project root

# 2. Restart Claude Code
# Exit and restart to reload environment

# 3. Check for typos
cat .env | grep API_KEY
# Verify spelling: GEMINI_API_KEY (not GEMINI_KEY)

# 4. Check for spaces
cat .env | cat -A
# Look for trailing spaces or tabs
```

### Keys Expiring

**Symptom**: Keys worked before, now invalid

**Solution**:

```bash
# Regenerate key at provider:
# - Gemini: aistudio.google.com
# - SearchAPI: searchapi.io
# - OpenRouter: openrouter.ai

# Update .env with new key
nano .env

# Restart Claude Code
```

---

## Prevention Tips

✅ **Do**:
- Document which keys are required
- Use .env.example template (without real keys)
- Test keys after configuration
- Monitor API usage/quotas
- Set up billing alerts

❌ **Don't**:
- Share keys between projects
- Commit keys to version control
- Ignore rate limit warnings
- Use production keys for testing
- Store keys in cloud config

---

## Related Issues

- [Agent Issues](/docs/troubleshooting/agent-issues) - Agents failing due to missing keys
- [Command Errors](/docs/troubleshooting/command-errors) - Commands failing silently
- [Performance Issues](/docs/troubleshooting/performance-issues) - Rate limiting causing slowness

---

## Still Stuck?

### Create API Debug Report

```bash
# Collect API diagnostics (masks real keys)
{
  echo "=== Environment Variables ==="
  env | grep -i api_key | sed 's/=.*/=***/'

  echo -e "\n=== .env File ==="
  [ -f .env ] && cat .env | sed 's/=.*/=***/' || echo "No .env file"

  echo -e "\n=== API Tests ==="
  curl -s "https://generativelanguage.googleapis.com/v1beta/models?key=$GEMINI_API_KEY" > /dev/null && echo "✅ Gemini reachable" || echo "❌ Gemini failed"
} > api-debug.txt
```

### Get Help

1. **GitHub Issues**: [Report API key problems](https://github.com/claudekit/claudekit-engineer/issues)
2. **Discord**: [API configuration help](https://claudekit.cc/discord)
3. **Include**: API debug report (keys masked), error messages, provider (Gemini/SearchAPI/OpenRouter)

---

**Most API key issues resolve with proper .env configuration and Claude Code restart.** Set up keys once, use everywhere.
