---
title: Common Utilities
description: Shared utility modules for Gemini-based skills including API key management, client configuration, and Vertex AI support
section: engineer
kit: engineer
category: skills
order: 6
published: true
---

# Common Utilities

> Shared utilities used across multiple ClaudeKit Engineer skills for consistent API key management and client configuration.

## What This Skill Does

Common Utilities provides standardized helper modules for skills that integrate with Google's Gemini API. The primary utilities handle API key lookup across multiple sources, support both Google AI Studio and Vertex AI endpoints, and provide consistent error handling with actionable user guidance.

This is not a standalone skill users interact with directly - it's infrastructure that other skills (like AI Multimodal, Google ADK Python) depend on for configuration management.

## Prerequisites

**Python Environment**:
- Python 3.8+
- Skills using these utilities handle their own dependency installation

**API Access** (for skills using these utilities):
- Google AI Studio API key (https://aistudio.google.com/apikey)
- OR Google Cloud Project with Vertex AI enabled

## Architecture

```
.claude/skills/common/
├── README.md              # Documentation
├── api_key_helper.py      # API key lookup and client config
└── api_key_rotator.py     # API key rotation (for rate limit handling)
```

## Core Components

### api_key_helper.py

Provides three main functions:

**get_api_key_or_exit()**: Retrieve API key with automatic error handling
**get_client()**: Get configured Gemini client (AI Studio or Vertex AI)
**get_vertex_config()**: Check Vertex AI configuration

### api_key_rotator.py

Manages API key rotation for rate limit scenarios (advanced use case).

## API Key Lookup Order

The helper checks for `GEMINI_API_KEY` in priority order:

1. **Process environment variable** (highest priority)
   ```bash
   export GEMINI_API_KEY='your-api-key'
   ```

2. **Project root `.env` file**
   ```bash
   echo 'GEMINI_API_KEY=your-api-key' > .env
   ```

3. **.claude/.env file**
   ```bash
   echo 'GEMINI_API_KEY=your-api-key' > .claude/.env
   ```

4. **.claude/skills/.env file** (shared across all Gemini skills)
   ```bash
   echo 'GEMINI_API_KEY=your-api-key' > .claude/skills/.env
   ```

5. **Skill directory `.env` file** (skill-specific)
   ```bash
   echo 'GEMINI_API_KEY=your-api-key' > .claude/skills/your-skill/.env
   ```

**Recommendation**: Use `.claude/skills/.env` for all Gemini skills, or process environment variable for temporary overrides.

## Capabilities

### API Key Retrieval

Skills import and use the helper for consistent API key management:

```python
import sys
from pathlib import Path

# Add common directory to Python path
common_dir = Path(__file__).parent.parent.parent / 'common'
sys.path.insert(0, str(common_dir))

from api_key_helper import get_api_key_or_exit

# Get API key with automatic error handling
api_key = get_api_key_or_exit()

# Use with Gemini SDK
import google.generativeai as genai
genai.configure(api_key=api_key)
```

**When to use**: Every Gemini-based skill should use this for consistent configuration.

### Vertex AI Support

Enable Vertex AI instead of AI Studio:

```bash
# Set environment variables
export GEMINI_USE_VERTEX=true
export VERTEX_PROJECT_ID=your-gcp-project-id
export VERTEX_LOCATION=us-central1  # Optional, defaults to us-central1
```

Or in `.env` file:
```
GEMINI_USE_VERTEX=true
VERTEX_PROJECT_ID=your-gcp-project-id
VERTEX_LOCATION=us-central1
```

Skills using the helper automatically switch to Vertex AI when configured.

### Client Selection

Get appropriate client based on configuration:

```python
from api_key_helper import get_client

# Get client (AI Studio or Vertex AI based on env)
client_info = get_client()

if client_info['type'] == 'vertex':
    # Using Vertex AI
    from vertexai.generative_models import GenerativeModel
    model = GenerativeModel('gemini-2.5-flash')
    response = model.generate_content("Hello")
else:
    # Using AI Studio
    client = client_info['client']
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents="Hello"
    )
```

**When to use**: Skills that need to support both AI Studio and Vertex AI endpoints.

### Configuration Validation

Check Vertex AI configuration:

```python
from api_key_helper import get_vertex_config

vertex_config = get_vertex_config()
if vertex_config['use_vertex']:
    print(f"Using Vertex AI")
    print(f"Project: {vertex_config['project_id']}")
    print(f"Location: {vertex_config['location']}")
else:
    print("Using AI Studio")
```

**When to use**: Skills that need to display configuration information or validate setup.

## Error Handling

If API key is missing, helper provides actionable guidance:

```
Error: GEMINI_API_KEY not found

Set your Gemini API key using one of these methods:

1. Environment variable (recommended for dev):
   export GEMINI_API_KEY='your-api-key'

2. Project .env file:
   echo 'GEMINI_API_KEY=your-api-key' > .env

3. ClaudeKit .env file:
   echo 'GEMINI_API_KEY=your-api-key' > .claude/.env

4. Skills shared .env:
   echo 'GEMINI_API_KEY=your-api-key' > .claude/skills/.env

Get your API key: https://aistudio.google.com/apikey
```

For Vertex AI, if `VERTEX_PROJECT_ID` is missing when `GEMINI_USE_VERTEX=true`:

```
Error: Vertex AI enabled but VERTEX_PROJECT_ID not set

Set your GCP project ID:
   export VERTEX_PROJECT_ID=your-project-id

Or add to .env file:
   VERTEX_PROJECT_ID=your-project-id
```

## Examples

### Example 1: Simple API Key Usage

Skill that needs Gemini API access:

```python
#!/usr/bin/env python3
import sys
from pathlib import Path

# Import common utilities
common_dir = Path(__file__).parent.parent.parent / 'common'
sys.path.insert(0, str(common_dir))

from api_key_helper import get_api_key_or_exit
import google.generativeai as genai

# Configure API key
api_key = get_api_key_or_exit()
genai.configure(api_key=api_key)

# Use Gemini
model = genai.GenerativeModel('gemini-2.5-flash')
response = model.generate_content("Explain quantum computing")
print(response.text)
```

### Example 2: Vertex AI Support

Skill supporting both AI Studio and Vertex AI:

```python
from api_key_helper import get_client

client_info = get_client()

if client_info['type'] == 'vertex':
    # Vertex AI path
    from vertexai.generative_models import GenerativeModel
    model = GenerativeModel('gemini-2.5-flash')
    response = model.generate_content("Hello")
    print(response.text)
else:
    # AI Studio path
    import google.generativeai as genai
    api_key = get_api_key_or_exit()
    genai.configure(api_key=api_key)

    model = genai.GenerativeModel('gemini-2.5-flash')
    response = model.generate_content("Hello")
    print(response.text)
```

## Best Practices

**Use shared .env for all Gemini skills**: Place `GEMINI_API_KEY` in `.claude/skills/.env` to share across all skills.

**Validate in development**: Test both AI Studio and Vertex AI paths if skill supports both.

**Import early**: Import helper at top of skill scripts for fast-fail on missing API keys.

**Document requirements**: Skills should document API key requirement in their own SKILL.md.

**Handle errors gracefully**: Helper exits with status code 1 on error - ensure calling scripts handle this.

**Don't commit API keys**: Add `.env` files to `.gitignore`. Provide `.env.example` instead.

## Integration in Skills

To use common utilities in your skill:

1. **Import helper in skill script**:
```python
import sys
from pathlib import Path

common_dir = Path(__file__).parent.parent.parent / 'common'
sys.path.insert(0, str(common_dir))

from api_key_helper import get_api_key_or_exit
```

2. **Document API key requirement in SKILL.md**:
```markdown
## Prerequisites

**API Key**:
- Gemini API key from Google AI Studio: https://aistudio.google.com/apikey
- Set via `GEMINI_API_KEY` environment variable or `.env` file
```

3. **Optional: Support Vertex AI**:
```markdown
**Vertex AI Support** (optional):
- Enable with `GEMINI_USE_VERTEX=true`
- Set `VERTEX_PROJECT_ID=your-project-id`
```

## Troubleshooting

**Problem**: Import fails with `ModuleNotFoundError: No module named 'api_key_helper'`.

**Solution**: Ensure path is correctly set:
```python
common_dir = Path(__file__).parent.parent.parent / 'common'
sys.path.insert(0, str(common_dir))
```
Verify `.claude/skills/common/api_key_helper.py` exists.

---

**Problem**: API key not found despite setting environment variable.

**Solution**: Check environment variable is actually set:
```bash
echo $GEMINI_API_KEY
```
If empty, re-export or add to shell profile. Restart terminal if needed.

---

**Problem**: Vertex AI fails with authentication error.

**Solution**: Ensure you're authenticated with GCP:
```bash
gcloud auth application-default login
gcloud config set project your-project-id
```
Verify Vertex AI API is enabled in GCP project.

---

**Problem**: API key works in one skill but not another.

**Solution**: Check if skill-specific `.env` file overrides global config. Remove skill-specific `.env` to use shared config.

## Related Skills

Skills that use these utilities:
- [AI Multimodal](/docs/engineer/skills/ai-multimodal) - Image, audio, video processing with Gemini
- [Google ADK Python](/docs/engineer/skills/google-adk-python) - AI agent development
- Any Gemini-based skill in Engineer Kit

## Related Commands

No direct commands - this is a utility module used by other skills.

## Resources

- Google AI Studio: https://aistudio.google.com
- Vertex AI docs: https://cloud.google.com/vertex-ai/docs
- Gemini API reference: https://ai.google.dev/api
