## Method 1: Manual Setup  
  
1. Copy all directories and files of `claudekit-engineer` repo to your project:  
    * `.claude/*`  
    * `docs/*`  
    * `plans/*`  
    * `CLAUDE.md`  
    * `.mcp.json`  
2. Go to Google AI Studio and grab the API Key, then open `.mcp.json` to paste into “human-mcp” environment variable.  
    * Recommend: install “Human MCP” with `user` scope to be able to use it in every projects without re-installing: `claude mcp add-json human -s user '{"command": "npx", "args": ["@goonnguyen/human-mcp@latest", "-e", "GOOGLE_GEMINI_API_KEY"], "env": { "GOOGLE_GEMINI_API_KEY": "..." }}'`  
3. Start Claude Code in your working project: `claude` (or `claude --dangerously-skip-permissions`)  
4. Run command: `/docs:init` to trigger CC scan and create specs for the whole project.You will see some markdown files generated in `docs` directory, such as “codebase-summary.md”, “code-standards.md”, “system-architecture.md”,...)  
5. Now your project is ready to start development, explore these commands:  
    * `/cook` : develop new feature  
    * `/fix:fast` : fix minor bugs (fast mode)  
    * `/fix:hard` : fix hard bugs  
    * `/plan` : let CC scan, analyze and plan for implementing something  
    * `/bootstrap` : CC will help you bootstrap any new project step by step  
    * `/brainstorm` : brainstorm with CC about anything with project-aware context  
    * `/ask` : just ask any questions  
    * ...  

---

## Method 2: ClaudeKit CLI  
  
### Installation  
```
npm install -g claudekit-cli
```

```
bun add -g claudekit-cli
ck --version
```
  
### Create a new project  
```
# Interactive mode
ck new

# With options
ck new --dir my-project --kit engineer

# Specific version
ck new --kit engineer --version v1.0.0
```
  
### Update Existing Project
  
```
# Interactive mode
ck update

# With options
ck update --kit engineer

# Specific version
ck update --kit engineer --version v1.0.0
```
  
### Authentication
  
The CLI requires a GitHub Personal Access Token (PAT) to download releases from private repositories. The authentication flow follows a multi-tier fallback:  
1. **GitHub CLI**: Uses `gh auth token` if GitHub CLI is installed and authenticated  
2. **Environment Variables**: Checks `GITHUB_TOKEN` or `GH_TOKEN`  
3. **OS Keychain**: Retrieves stored token from system keychain  
4. **User Prompt**: Prompts for token input and offers to save it securely  

**Creating a Personal Access Token**    
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)  
2. Generate new token with repo scope (for private repositories)  
3. Copy the token  

**Setting Token via Environment Variable**    
```
export GITHUB_TOKEN=ghp_your_token_here
```
