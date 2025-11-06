---
title: "Brownfield Projects"
description: "Learn how to integrate ClaudeKit into existing projects with minimal disruption to your current workflow."
category: "getting-started"
order: 3
published: true
lastUpdated: 2025-11-06
---

# Brownfield Projects

Integrate ClaudeKit into your existing projects without disrupting your current development workflow. Perfect for legacy codebases, team collaborations, and gradual adoption scenarios.

## Quick Integration

### 1. Installation

```bash
# Install ClaudeKit CLI
npm install -g @claudekit/cli

# Or use npx for temporary usage
npx @claudekit/cli init
```

### 2. Initialize ClaudeKit

Navigate to your existing project directory:

```bash
cd your-existing-project
claudekit init
```

This will:
- Analyze your project structure
- Detect your tech stack automatically
- Create `.claude/` directory with minimal configuration
- Preserve all existing files and workflows

### 3. Configure for Your Stack

ClaudeKit automatically detects common frameworks and libraries:

```bash
# For React projects
claudekit bootstrap --framework react

# For Next.js projects
claudekit bootstrap --framework nextjs

# For Node.js/Express projects
claudekit bootstrap --framework express

# For generic projects
claudekit bootstrap --framework generic
```

## Project Analysis

### Understanding Your Codebase

```bash
# Analyze project structure
claudekit scout

# Generate project summary
claudekit ask "What is the architecture of this project?"

# Identify potential issues
claudekit debug
```

### Workflow Integration

Gradually integrate ClaudeKit into your existing workflow:

```bash
# Code review existing files
claudekit /review src/components/Header.tsx

# Enhance documentation
claudekit /docs update

# Optimize performance
claudekit /fix performance
```

## Team Collaboration

### Sharing ClaudeKit Configuration

```bash
# Export configuration
claudekit config export > claudekit-config.json

# Share with team
git add claudekit-config.json .claude/
git commit -m "Add ClaudeKit configuration"
git push
```

### Team Setup Instructions

1. Clone the repository with ClaudeKit config
2. Install dependencies: `npm install`
3. Initialize with shared config: `claudekit init --import claudekit-config.json`

## Common Integration Patterns

### Legacy Code Migration

```bash
# Analyze legacy module
claudekit ask "Explain this legacy module and suggest improvements"

# Refactor gradually
claudekit /refactor src/legacy/module.js --strategy incremental

# Add tests to legacy code
claudekit /test src/legacy/module.js
```

### Build System Integration

```bash
# Analyze build configuration
claudekit scout --config webpack.config.js

# Optimize build process
claudekit /fix build --target production

# Add CI/CD integration
claudekit /plan ci --platform github
```

### Database Integration

```bash
# Analyze database schema
claudekit scout --database

# Create migration scripts
claudekit /migration create --description "Add user_preferences table"

# Optimize queries
claudekit /fix database --target performance
```

## Best Practices

### 1. Gradual Adoption
- Start with documentation tasks
- Move to code analysis and reviews
- Implement small refactoring tasks
- Gradually increase AI-assisted development

### 2. Configuration Management
```bash
# Create environment-specific configs
claudekit config set env development
claudekit config set env production
```

### 3. Code Quality Standards
```bash
# Enforce coding standards
claudekit /review --strict

# Run automated tests
claudekit /test --coverage

# Performance monitoring
claudekit /debug --performance
```

### 4. Documentation Maintenance
```bash
# Keep docs in sync
claudekit /docs update --auto

# Generate API documentation
claudekit /docs api --output docs/api/
```

## Troubleshooting

### Common Issues

**Issue**: ClaudeKit conflicts with existing tools
```bash
# Check for conflicts
claudekit doctor --check-conflicts

# Resolve automatically
claudekit fix --resolve-conflicts
```

**Issue**: Large repository performance
```bash
# Optimize for large repos
claudekit config set scanDepth 2
claudekit config set exclude "node_modules,dist,build"
```

**Issue**: Team configuration sync
```bash
# Reset and re-import
claudekit config reset
claudekit init --import team-config.json
```

## Migration Examples

### React Project Example

```bash
# 1. Analyze existing React app
claudekit init --framework react

# 2. Review component structure
claudekit ask "Analyze the React component architecture"

# 3. Enhance existing components
claudekit /enhance src/components/UserProfile.tsx

# 4. Add missing tests
claudekit /test src/components/

# 5. Optimize build
claudekit /fix build --target production
```

### Node.js API Example

```bash
# 1. Initialize for API project
claudekit init --framework express

# 2. Analyze API endpoints
claudekit scout --api

# 3. Document API routes
claudekit /docs api --format openapi

# 4. Add error handling
claudekit /fix api --target error-handling

# 5. Performance optimization
claudekit /fix performance --target api
```

## Next Steps

After successful integration:

1. **Explore Agents**: Use specialized agents for specific tasks
2. **Custom Commands**: Create commands for your workflow
3. **Team Training**: Share best practices with your team
4. **Advanced Features**: Implement custom skills and workflows

---

**Need help?** Check our [Troubleshooting Guide](../troubleshooting/) or [Community Forums](https://github.com/mrgoonie/claudekit-cli/discussions)