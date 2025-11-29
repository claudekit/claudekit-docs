---
title: /fix:types
description: "Documentation for /fix:types
description:
section: docs
category: docs/commands/fix
order: 25
published: true"
section: docs
category: docs/commands/fix
order: 25
published: true
---

# /fix:types

Automatically identify and fix all type errors in your TypeScript or Dart codebase. The command runs type checkers iteratively until all type errors are resolved, ensuring type safety without resorting to `any` types.

## Syntax

```bash
/fix:types
```

No arguments needed - the command automatically detects your project type and runs the appropriate type checker.

## How It Works

The `/fix:types` command follows an iterative workflow:

### 1. Type Check Execution

- Detects project type (TypeScript or Dart)
- Runs appropriate type checker:
  - TypeScript: `bun run typecheck` or `npm run typecheck`
  - Dart: `dart analyze` or `flutter analyze`
- Captures all type errors with file locations and descriptions

### 2. Error Analysis

- Categorizes errors by type and severity
- Identifies patterns across multiple errors
- Determines fix strategies for each error category
- Prioritizes fixes by dependency order

### 3. Fix Implementation

- Applies type fixes systematically
- Adds proper type annotations
- Fixes type mismatches and incompatibilities
- Updates function signatures and interfaces
- Resolves generic type constraints

### 4. Verification Loop

- Re-runs type checker after fixes
- Identifies any remaining errors
- Continues fixing until clean type check
- Ensures no regressions introduced

## When to Use

### ✅ Perfect For

**After Refactoring**
```bash
# Just refactored user service
/fix:types
```

**Adding New Features**
```bash
# Added new API endpoints
/fix:types
```

**Upgrading Dependencies**
```bash
# Updated TypeScript from 4.9 to 5.0
npm install typescript@latest
/fix:types
```

**Converting JavaScript to TypeScript**
```bash
# Renamed .js files to .ts
/fix:types
```

**Strict Mode Migration**
```bash
# Enabled strict mode in tsconfig.json
/fix:types
```

### ❌ Don't Use For

**Runtime Errors**
```bash
❌ /fix:types  # For runtime errors
✅ /fix:logs [runtime error description]
```

**Logic Bugs**
```bash
❌ /fix:types  # For incorrect calculations
✅ /fix:fast [fix calculation logic]
```

**No Type Checker Configured**
```bash
❌ /fix:types  # No typecheck script exists
✅ First add type checker to project
```

## Examples

### Simple Type Errors

```bash
/fix:types
```

**What happens:**
```
1. Running type checker
   $ bun run typecheck

   Found 5 type errors:
   - src/auth/login.ts:45 - Type 'string | undefined' not assignable to 'string'
   - src/api/users.ts:89 - Property 'email' missing in type
   - src/utils/format.ts:23 - Argument of type 'number' not assignable to 'string'
   - src/models/user.ts:12 - Type 'null' not assignable to 'User'
   - src/services/auth.ts:67 - Cannot invoke object which is possibly 'undefined'

2. Fixing errors
   ✓ Added null check for login.ts
   ✓ Added required email field to User interface
   ✓ Fixed type mismatch in format function
   ✓ Updated User type to allow null
   ✓ Added optional chaining for auth service

3. Verifying fixes
   $ bun run typecheck

   ✓ No type errors found

✓ All type errors fixed (1m 23s)
```

### After Strict Mode Migration

```bash
# Enable strict mode
cat > tsconfig.json <<EOF
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true
  }
}
EOF

/fix:types
```

**What happens:**
```
1. Type checking with strict mode
   Found 47 type errors across 23 files

   Common issues:
   - 23 errors: Implicit 'any' types
   - 15 errors: Possible 'null' or 'undefined'
   - 9 errors: Missing return types

2. Systematic fixes (iteration 1)
   ✓ Added explicit types to function parameters (23 fixes)
   ✓ Added null checks and optional chaining (15 fixes)
   ✓ Added return type annotations (9 fixes)

3. Re-checking
   Found 3 remaining errors (nested types)

4. Fixing remaining errors (iteration 2)
   ✓ Fixed generic type constraints
   ✓ Updated interface definitions
   ✓ Fixed union type handling

5. Final verification
   $ bun run typecheck
   ✓ No type errors found

✓ 47 type errors fixed in 2 iterations (3m 45s)
```

### Dependency Update Fixes

```bash
# Update React and TypeScript
npm update react @types/react typescript

/fix:types
```

**What happens:**
```
1. Checking types after dependency update
   Found 12 type errors:
   - React.FC deprecated patterns (8 errors)
   - Updated prop type definitions (3 errors)
   - Changed utility types (1 error)

2. Applying fixes
   ✓ Migrated from React.FC to explicit children props
   ✓ Updated ComponentProps usage
   ✓ Fixed Omit and Pick utility type usage
   ✓ Updated event handler types

3. Verification
   $ bun run typecheck
   ✓ No type errors found

✓ Updated to new type definitions (2m 11s)
```

### Flutter/Dart Type Fixes

```bash
/fix:types
```

**What happens:**
```
1. Running Dart analyzer
   $ flutter analyze

   Found 8 type errors:
   - lib/models/user.dart:23 - The return type 'String?' isn't a 'String'
   - lib/services/api.dart:45 - A value of type 'Future<dynamic>' can't be assigned to 'Future<User>'
   - lib/widgets/profile.dart:67 - The argument type 'int' can't be assigned to 'String'

2. Fixing Dart type errors
   ✓ Added null safety operators (!)
   ✓ Fixed generic type parameters in Future
   ✓ Added toString() conversion for int to String
   ✓ Updated nullable type annotations

3. Re-running analyzer
   $ flutter analyze
   ✓ No issues found!

✓ Dart type errors fixed (1m 34s)
```

## Type Check Commands

The command automatically detects and runs:

### TypeScript Projects

**Bun:**
```bash
bun run typecheck
```

**npm:**
```bash
npm run typecheck
```

**Yarn:**
```bash
yarn typecheck
```

**pnpm:**
```bash
pnpm typecheck
```

### Dart/Flutter Projects

**Flutter:**
```bash
flutter analyze
```

**Dart:**
```bash
dart analyze
```

## Common Fix Patterns

### Null Safety

**Before:**
```typescript
function getUserName(user: User) {
  return user.profile.name; // Error: profile possibly undefined
}
```

**After:**
```typescript
function getUserName(user: User) {
  return user.profile?.name ?? 'Unknown';
}
```

### Type Annotations

**Before:**
```typescript
function calculateTotal(items) { // Error: Parameter implicitly has 'any' type
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

**After:**
```typescript
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

### Generic Constraints

**Before:**
```typescript
function findById<T>(items: T[], id: string) { // Error: Property 'id' does not exist on type 'T'
  return items.find(item => item.id === id);
}
```

**After:**
```typescript
function findById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}
```

### Union Type Handling

**Before:**
```typescript
function processValue(value: string | number) {
  return value.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'
}
```

**After:**
```typescript
function processValue(value: string | number): string {
  return typeof value === 'string' ? value.toUpperCase() : value.toString();
}
```

### Interface Completeness

**Before:**
```typescript
const user: User = { // Error: Property 'email' is missing
  name: 'John Doe',
  age: 30
};
```

**After:**
```typescript
const user: User = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com'
};
```

## Best Practices

### No `any` Types

✅ **Good - Proper types:**
```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
}

function fetchUser(): Promise<ApiResponse<User>> {
  // ...
}
```

❌ **Bad - Using any:**
```typescript
function fetchUser(): Promise<any> { // Defeats type safety!
  // ...
}
```

### Iterative Fixing

✅ **Command handles iterations:**
```bash
# Just run once
/fix:types

# Command will iterate until all errors fixed
```

❌ **Don't run manually repeatedly:**
```bash
# Inefficient
/fix:types
/fix:types
/fix:types
```

### After Major Changes

✅ **Fix types after refactoring:**
```bash
# 1. Refactor code
/cook [refactor user service to use new API]

# 2. Fix resulting type errors
/fix:types

# 3. Test
/test
```

## Project Setup

### TypeScript Configuration

Ensure `package.json` has typecheck script:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit"
  }
}
```

Or with `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Dart Configuration

Ensure `analysis_options.yaml` exists:

```yaml
analyzer:
  strong-mode:
    implicit-casts: false
    implicit-dynamic: false
  errors:
    missing_return: error
    invalid_assignment: error
```

## Workflow

### Standard Development Flow

```bash
# 1. Implement feature
/cook [add user profile feature]

# 2. Fix type errors
/fix:types

# 3. Run tests
/test

# 4. Commit
/git:cm
```

### Refactoring Workflow

```bash
# 1. Refactor
/cook [refactor authentication to use OAuth]

# 2. Fix types
/fix:types

# 3. Fix any remaining issues
/fix:hard [if complex issues remain]

# 4. Test thoroughly
/test

# 5. Commit
/git:cm
```

### Strict Mode Migration

```bash
# 1. Enable strict mode
echo '{"compilerOptions": {"strict": true}}' > tsconfig.json

# 2. Fix all resulting errors
/fix:types

# 3. Verify with tests
/test

# 4. Commit strict mode migration
/git:cm
```

## Troubleshooting

### Too Many Errors

**Problem:** Hundreds of type errors overwhelming

**Solution:**
```bash
# Fix in stages
# 1. Fix strict mode errors first
/fix:types

# 2. Then enable additional checks gradually
# Update tsconfig.json one option at a time
```

### Circular Dependencies

**Problem:** Type errors due to circular imports

**Solution:**
```bash
# Command will identify circular dependencies
# Manually restructure imports to break cycles
# Then run again
/fix:types
```

### Generic Type Complexity

**Problem:** Complex generic types causing issues

**Solution:**
```bash
# Let command handle first pass
/fix:types

# If issues remain, simplify generics manually
# Then run again to verify
/fix:types
```

### External Types Missing

**Problem:** Missing type definitions for packages

**Solution:**
```bash
# Install type definitions
npm install --save-dev @types/package-name

# Then fix remaining errors
/fix:types
```

## Error Categories

Common error types fixed:

### Implicit Any
- Missing parameter types
- Missing return types
- Missing variable types

### Null Safety
- Possible undefined values
- Possible null values
- Optional chaining needed

### Type Mismatches
- Wrong return types
- Incompatible assignments
- Generic constraint violations

### Missing Properties
- Incomplete interface implementations
- Missing required fields
- Incorrect property names

### Function Signatures
- Wrong parameter types
- Wrong parameter count
- Wrong return type

## Metrics

Typical `/fix:types` performance:

- **Time**: 1-5 minutes (depending on error count)
- **Errors per iteration**: 15-30
- **Average iterations**: 1-3
- **Success rate**: ~98% (some manual intervention may be needed)
- **No `any` types added**: 100% of fixes use proper types

## Next Steps

After using `/fix:types`:

- [/test](/docs/commands/core/test) - Run tests to verify fixes
- [/fix:fast](/docs/commands/fix/fast) - For remaining simple issues
- [/git:cm](/docs/commands/git/commit) - Commit type fixes
- [/cook](/docs/commands/core/cook) - Continue feature development

---

**Key Takeaway**: `/fix:types` provides automated type error resolution without compromising type safety by avoiding `any` types and implementing proper type annotations, null checks, and interface completeness.
