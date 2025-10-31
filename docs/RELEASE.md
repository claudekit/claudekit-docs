# Release Process Documentation

This document explains the automated release system for this project.

## Overview

This project uses [semantic-release](https://semantic-release.gitbook.io/) to automate the entire package release workflow including:

- Determining the next version number based on commit messages
- Generating release notes and changelog
- Publishing to NPM registry (optional, disabled by default)
- Creating GitHub releases
- Updating documentation

## How It Works

### 1. Commit Analysis
- Every commit to the `main` branch is analyzed for release-worthy changes
- Commit messages must follow [Conventional Commits](https://conventionalcommits.org/) format
- Different commit types trigger different version bumps:
  - `feat:` → Minor version bump (e.g., 1.0.0 → 1.1.0)
  - `fix:` → Patch version bump (e.g., 1.0.0 → 1.0.1)  
  - `feat!:` or `BREAKING CHANGE:` → Major version bump (e.g., 1.0.0 → 2.0.0)
  - `docs:`, `refactor:`, `style:` → Patch version bump
  - `ci:`, `test:`, `chore:` → No release (unless configured otherwise)

### 2. Automated Workflow
The release process is triggered on every push to `main` branch via GitHub Actions:

1. **Code Quality Checks**: Run tests and linting
2. **Version Analysis**: Determine if a release is needed
3. **Version Calculation**: Calculate next semantic version
4. **Changelog Generation**: Generate release notes from commits
5. **Package Publishing**: Publish to NPM registry (if enabled)
6. **GitHub Release**: Create GitHub release with assets
7. **Documentation Update**: Update CHANGELOG.md and commit back

### 3. Release Artifacts
Each release creates:
- **NPM Package**: Published to the NPM registry (if npmPublish is enabled)
- **GitHub Release**: With generated release notes
- **Git Tags**: Semantic version tags (e.g., `v1.2.3`)
- **CHANGELOG.md**: Updated with new release notes
- **GitHub Release Assets**: Including the changelog

## Commit Message Guidelines

### Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Examples

#### Feature (Minor Version Bump)
```bash
feat: add user authentication system
feat(auth): implement OAuth2 integration
```

#### Bug Fix (Patch Version Bump)
```bash
fix: resolve memory leak in data processing
fix(api): handle null response from external service
```

#### Breaking Change (Major Version Bump)
```bash
feat!: redesign API response structure
# or
feat: redesign API response structure

BREAKING CHANGE: API response format has changed from array to object
```

#### Documentation (Patch Version Bump)
```bash
docs: update installation instructions
docs(api): add examples for authentication endpoints
```

#### Refactor (Patch Version Bump)
```bash
refactor: simplify user service logic
refactor(database): optimize query performance
```

#### Other Types (No Release by default)
```bash
test: add unit tests for authentication
ci: update GitHub Actions workflow
chore: update dependencies
style: fix code formatting
```

## Configuration Files

### `.releaserc.json`
Main configuration for semantic-release:
- Defines release branches (`main`)
- Configures plugins for analysis, changelog, NPM, GitHub, and git
- Customizes release notes format with emojis

### `.commitlintrc.json`
Configuration for commit message validation:
- Enforces conventional commit format
- Defines allowed commit types
- Sets message length and format rules

### `.github/workflows/release.yml`
GitHub Actions workflow:
- Triggers on push to main branch
- Runs quality checks (tests, linting, security audit)
- Executes semantic-release process

## Manual Release Process

If you need to create a release manually or understand the process:

```bash
# 1. Ensure you're on the main branch with latest changes
git checkout main
git pull origin main

# 2. Install dependencies
npm ci

# 3. Run quality checks
npm test
npm run lint

# 4. Run semantic-release (locally, not recommended for production)
npm run semantic-release
```

**Note**: Manual releases are not recommended. Use the automated GitHub Actions workflow instead.

## Troubleshooting

### No Release Created
**Problem**: Push to main didn't create a release
**Possible Causes**:
- No releasable commits (only `ci:`, `test:`, `chore:` commits)
- Commit messages don't follow conventional format
- Tests or linting failed

**Solution**:
- Check commit messages follow conventional format
- Ensure at least one `feat:`, `fix:`, or breaking change commit
- Verify all checks pass in GitHub Actions

### Release Failed
**Problem**: GitHub Actions workflow failed during release
**Possible Causes**:
- Missing NPM_TOKEN secret
- Insufficient GitHub permissions
- NPM package name already exists
- Network issues

**Solution**:
- Check GitHub Actions logs for specific error
- Verify repository secrets are configured
- Ensure package name is unique in NPM
- Check permissions for GitHub token

### Wrong Version Number
**Problem**: Released version doesn't match expectations
**Possible Causes**:
- Incorrect commit message type
- Missing breaking change indicators
- Previous releases affect version calculation

**Solution**:
- Review commit history and types
- Use `feat!:` or `BREAKING CHANGE:` footer for breaking changes
- Check existing tags and releases

## Best Practices

1. **Commit Frequently**: Small, focused commits with clear messages
2. **Use Conventional Commits**: Always follow the format for automatic releases
3. **Test Before Push**: Ensure code quality before pushing to main
4. **Document Breaking Changes**: Clearly describe breaking changes in commit body
5. **Review Release Notes**: Check generated changelogs for accuracy
6. **Monitor Releases**: Watch GitHub Actions for release status

## Repository Setup Requirements

For the automated release system to work, ensure:

1. **GitHub Repository**:
   - Repository exists and is accessible
   - `main` branch is the default branch
   - GitHub Actions are enabled

2. **NPM Setup** (optional - only if you want to publish to NPM):
   - Set `npmPublish: true` in `.releaserc.json`
   - NPM account with appropriate permissions
   - `NPM_TOKEN` secret configured in GitHub repository settings

3. **Package Configuration**:
   - `package.json` has correct repository URL
   - Package name is unique (if publishing publicly)
   - License and other metadata are complete

4. **Branch Protection** (recommended):
   - Protect `main` branch
   - Require PR reviews
   - Require status checks to pass

## Security Considerations

- **Secrets Management**: Never commit API tokens or secrets
- **NPM Token**: Use automation tokens with minimal required permissions
- **GitHub Token**: Uses built-in `GITHUB_TOKEN` with limited scope
- **Dependency Security**: Regular `npm audit` runs in CI/CD
- **Package Integrity**: Uses npm provenance attestations

---

For more information, see:
- [Semantic Release Documentation](https://semantic-release.gitbook.io/)
- [Conventional Commits Specification](https://conventionalcommits.org/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)