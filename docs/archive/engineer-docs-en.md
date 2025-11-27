# ClaudeKit - Docs (Full)

---

## Getting Started

### Method 1: Manual Setup

1. Copy all directories and files of `claudekit-engineer` repo to your project:
   - .claude/*
   - docs/*
   - plans/*
   - CLAUDE.md
2. ClaudeKit utilized [Human MCP](https://www.npmjs.com/package/@goonnguyen/human-mcp) to analyze images and videos since Gemini models have better vision capabilities. But Anthropic already released [**Agent Skills**](https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview) which is much better for context engineering, so we already converted all tools of Human MCP to Agent Skills.
   **Notes:** Gemini API have a pretty generous free requests limit at the moment.
   - Go to [Google AI Studio](https://aistudio.google.com) and grab your API Key
   - Copy `.claude/skills/.env.example` to `.claude/skills/.env` and paste the key into the `GEMINI_API_KEY` environment variable
3. Start Claude Code in your working project: `claude` (or `claude --dangerously-skip-permissions`)
4. Run command: `/docs:init` to trigger CC scan and create specs for the whole project. You will see some markdown files generated in `docs` directory, such as "codebase-summary.md", "code-standards.md", "system-architecture.md",...)
5. Now your project is ready to start development, explore the commands below.

### Method 2: ClaudeKit CLI

#### Installation

```bash
npm install -g claudekit-cli
bun add -g claudekit-cli
ck --version
```

#### Create a new project

```bash
# Interactive mode
ck new

# With options
ck new --dir my-project --kit engineer

# Specific version
ck new --kit engineer --version v1.0.0
```

#### Update Existing Project

```bash
# Interactive mode
ck init

# With options
ck init --kit engineer

# Specific version
ck init --kit engineer --version v1.0.0
```

#### Authentication

The CLI requires a **GitHub Personal Access Token (PAT)** to download releases from private repositories (`claudekit-engineer` and `claudekit-marketing`). The authentication flow follows a multi-tier fallback:

1. GitHub CLI: Uses `gh auth token` if GitHub CLI is installed and authenticated
2. Environment Variables: Checks `GITHUB_TOKEN` or `GH_TOKEN`
3. OS Keychain: Retrieves stored token from system keychain
4. User Prompt: Prompts for token input and offers to save it securely

**Creating a Personal Access Token**

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope (for private repositories)
3. Copy the token

**Setting Token via Environment Variable**

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

Now you're good to go!

---

## CLAUDE.md

**[Important]** You should not modify this file, as it will be overwritten each time you update ClaudeKit (`ck init`). If you want to modify this file without it being overwritten, use the following flag during updates: `ck init --exclude CLAUDE.md`

I've read all the documentation about Context Engineering and tested everything. I learned that Manus's approach is extremely effective: Use File System As Context. That's why I recommend you keep everything as it is: just a few lines in `CLAUDE.md` linking to more detailed files in the `.claude/workflows/` and `docs/` directories.

This is good for Claude Code because CLAUDE.md won't consume too many tokens initially when loaded in the project. Only when performing tasks will it look for more specific instructions (e.g., `development-rules.md`).

---

## Workflows

`.claude/workflows/*`
This is where detailed instructions for Claude Code and subagents are stored. It ensures the system coordinates well together and adheres to development rules:

`development-rules.md`
Contains comprehensive development guidelines including code quality standards, subagent orchestration rules, pre-commit/push procedures, and implementation principles to ensure consistent and maintainable code across the project.

`documentation-management.md`
Contains documentation standards for the project. These documents help Claude Code avoid hallucinations and creating redundant code.

`orchestration-protocol.md`
Contains methods for orchestrating agents, such as: initializing multiple subagents to work in parallel, or initializing subagents sequentially one type at a time.

`primary-workflow.md`
Contains the development workflow from code implementation → testing → code review → integration → debugging → report.

---

## Agents

Number: **14 subagents**

1. brainstormer
2. code-reviewer
3. copywriter
4. database-admin
5. debugger
6. docs-manager
7. git-manager
8. journal-writer
9. planner
10. project-manager
11. researcher
12. scout
13. tester
14. ui-ux-designer

**Why only 14 subagents and not more?**

- I've optimized these subagents for my daily workflow to ensure they can be maximally effective.
- Of course, this has a downside: some agents may be effective for me but not yet effective for your workflow. If you feel this way, please contact me and we'll find a solution together.

You don't actually need to learn about these agents, as they're already optimized and tuned based on practical experience. The agents will be **automatically orchestrated by ClaudeKit** based on predefined workflows.

But if you want to, feel free to check out the markdown files in `.claude/agents/` to learn more!

> Ps. If you're looking for new subagent, you can always request at: https://discord.gg/x7SwTSf3wc

---

## Commands

These are the commands I use most frequently in this kit:

`/bootstrap [prompt]`
When starting a new project, you can use this command. It's built with spec-driven and test-driven development, so it will ask you questions one by one to fully understand what you want it to build. After understanding the requirements, it will start with "Researcher" agents to search the internet and provide necessary information for the "Planner" agent to create an execution plan. Then it will begin implementation and testing until everything runs smoothly.

`/bootstrap:auto [prompt]`
Similar to the above command, this is used to initialize a project, but this time you'll completely trust Claude Code. It will use your prompt to start researching, planning, and implementing until completion. To use this command effectively, you should prepare a detailed prompt.

`/cook [prompt]`
Main purpose: develop new features.

`/fix:fast [prompt]`
Fix minor bugs (fast mode). It will skip scouting the codebase and planning, then get straight to work and test after completion.
**[Important]** Only use this command for small bugs and minor updates, as this saves time. If you see Claude Code starting to make mistakes, use the next command: `/fix:hard`

`/fix:hard [prompt]`
Fix hard bugs. When you're unsure about the bug you want to fix, use this command and describe the current situation you're facing. It will use multiple scout subagents to scan the entire codebase, then analyze and find the root cause, while also searching the internet or reading documentation for thorough solutions. Finally, it will create a meticulous plan on how to resolve it.

`/fix:ci [github-ci-url]`
Typically in each AI-assisted project, we SHOULD have a testing process via CI, specifically GitHub Actions - a cloud environment to run the entire test suite to check all project features. If this process fails, just copy the workflow URL and provide it to this command. It will automatically read the logs and find a way to fix it.
**[Note]** You'll need to install the `gh` package on your machine. If you don't have it yet, don't worry - when you run this command, Claude Code will automatically detect it and guide you through the setup step by step.

`/fix:logs`
When using this command, all development logs will be piped to `logs.txt`, and CC will read this file directly without you having to manually copy and paste errors. Quite useful for daily development.

`/fix:test`
Claude Code will launch agents to test all tests in the project. If errors are found, it will plan and fix them until there are no more errors.

`/fix:ui [prompt]`
This command is used to fix UI errors. You can describe the error you're experiencing or simply provide a screenshot or video of the error, and it will help you investigate the cause, then fix it and perform testing.

`/fix:types`
Occasionally when working with TypeScript projects, you'll encounter "type" errors. Just type this command and Claude Code will check what the type error is and help you fix it.

`/docs:init`
If you want to use ClaudeKit with an existing project, this will be the command you should start with. This command will have subagents read your entire codebase and create spec files for the project such as: codebase-summary, project-overview-pdr, code-standards, system-architecture,... These files will help Claude Code understand the codebase better, avoid hallucinations, and prevent creating duplicate code during later development.

`/docs:update`
During development, although there are rules forcing Claude Code to stick to project spec documents, sometimes it forgets to update documentation when developing new features or refactoring (LLM still has many shortcomings). That's why I created this command - use it to update necessary project documentation.

`/docs:summarize`
This time it's used to read all project development documentation and then summarize it so we can understand better. This command is quite useful for onboarding new team members.

`/plan`
When developing new features, planning is essential. With this command, Claude Code will start summoning subagents to search the internet for relevant information, then report back to the planning agent to draft a detailed implementation plan. You should carefully review the plan file in the "plans/" directory and continue prompting the AI to adjust according to your wishes.

`/brainstorm`
Sometimes you want to develop a feature but don't know where to start - use this command. With its understanding of the project context, this command will start discussing with you sincerely about the feature's feasibility and how it proposes to develop the feature most effectively. If necessary, it can summon subagents like "Researcher" to search the internet for best practices and advise you. It's optimized to be honest and straightforward, so it will always stick to "YAGNI - KISS - DRY" principles to make the implementation plan realistic and maintainable later.

`/watzup`
You return to the project after a few weeks - you probably won't remember what you did recently or what's in this codebase. This is when this command comes in handy. It will scan the entire source code, even recent commit history, and report back a summary so you can grasp the current situation.

`/git:cm`
Stage all files and commit changes with a meaningful commit message following conventional commit standards.

`/git:cp`
Stage all files, commit changes with a meaningful commit message following conventional commit standards, and push to origin.

`/git:pr [to-branch] [from-branch]`
Create a GitHub pull request with detailed content about the changes. By default, it will create a PR to the default branch (main) if you don't provide arguments.

**There are also other commands such as:**

`/ask`
Simple - with this command you can ask anything about the current codebase, and it will answer concisely and straightforwardly.

`/plan:ci [github-ci-url]`
This command helps you analyze errors that occur during CI. Just provide the path to the GitHub Actions workflow containing the error message, and Claude will create a detailed plan to fix them.

`/plan:two`
Similar to the planning command, but this time it will provide 2 best approaches for you to choose from.

`/plan:cro`
If you're developing a software service product, this command will help you analyze the entire project source code and provide a plan to improve conversion rates.

`/debug [issues]`
Use this command along with a description of the error you're experiencing. It will summon the "Debugger" subagent to find the root cause and report back to you. You can also provide screenshots or videos for better context understanding.

`/journal`
If you're an indie developer, building in public is always necessary, but sometimes you focus on development and forget what you did that day or what challenges you faced. Use this command - it will help you write a journal about what it and you have done recently, so you can use it for social media posts or blog writing.

`/scout [prompt] [amount]`
For a very large codebase, this command can summon multiple agents running in parallel to scan every corner of the project source code and find what you're looking for.

`/test`
This command will run the entire project test suite and report back the results. If errors occur, it will also suggest some approaches to fix them.

`/design:3d`
Use this command when you want to implement an interface with 3D components (e.g., Three.js), because it's trained to be proficient in 3D processing skills.

`/design:describe [screenshot]`
Use this command to extract components and descriptions related to the design from a screenshot input.

`/design:fast`
Use this command to summon the "ui-ux-designer" agent to design something quickly.

`/design:good`
If you want to create a more complete and refined design, you can use this command. It will scour the internet to find trending designs, learn from practical lessons, and then start creating the UI design.

`/design:screenshot [screenshots]`
This command is used to turn screenshots into UI (screenshot-to-code). It uses Gemini's image recognition technology, so it can accurately analyze screenshots - resulting in 80-90% similarity. Especially: it can also use the Gemini Imagen model to generate images used in the UI. Isn't that great?

`/design:video`
Similar to the screenshot-to-code command, this command turns screen recording videos into UI. With Gemini model's video understanding capabilities, ClaudeKit is probably the only tool on the market with this capability!

`/content:cro`
Use this command to write conversion-optimizing content for your project.

`/content:enhance`
Use this command to analyze all project content and provide optimization suggestions to make the content better.

`/content:fast`
Use this command to write content quickly.

`/content:good`
Use this command to summon subagents like Researcher and Planner to create a detailed plan for producing really good content.

`/integrate:polar`
Use this command to integrate Polar payment gateway into your project.

`/integrate:sepay`
Use this command to integrate SePay payment gateway into your project.
Note: this is a payment gateway specifically for the Vietnamese market.

---

## Skills

`skill-creator`
To create new skills

`canvas-design`
To generate canvas design

`document-skills`
To read and understand documents

`mcp-builder`
To build efficient MCP servers.

More coming soon!

---

## Use cases

### Starting a new project
*[coming soon]*

### Maintaining an old project
*[coming soon]*

### Screenshot to code
*[coming soon]*
