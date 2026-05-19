/**
 * check-command-syntax.ts
 *
 * Linter that detects colon-chained command patterns in MDX/MD documentation.
 *
 * INVALID (flags): /ckm:write:blog, /ck:fix:auto, /plan:hard
 *   These are old sub-command syntax. Current syntax uses --flag style:
 *   /ckm:content --type blog, /ck:fix --auto, /ck:plan --hard
 *
 * VALID (not flagged): /ck:cook, /ckm:content, /ck:plan
 *   Single-colon skill invocations are correct ClaudeKit syntax.
 *
 * Usage:
 *   bun run scripts/check-command-syntax.ts [--mode warn|fail] [--dir <path>]
 *
 * Exit codes:
 *   0 — no violations found, or mode=warn (always 0)
 *   1 — violations found and mode=fail
 */

import { readdirSync, readFileSync, statSync } from 'fs';
import { join, relative } from 'path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ColonSyntaxViolation {
  file: string;
  line: number;
  col: number;
  match: string;
}

// ---------------------------------------------------------------------------
// Core detection logic (exported for tests)
// ---------------------------------------------------------------------------

/**
 * Two patterns catch invalid colon-syntax command invocations:
 *
 * DOUBLE_COLON_PATTERN — flags any slash-command with two or more colon segments:
 *   /ckm:write:blog, /ck:fix:auto:deep, /ckm:youtube:social
 *   These always represent invalid sub-command syntax regardless of prefix.
 *
 * NONSTANDARD_PREFIX_PATTERN — flags single-colon commands whose prefix is NOT a
 *   known ClaudeKit kit prefix (ck, ckm). Examples: /plan:hard, /code:auto, /fix:quick
 *   Valid single-colon forms: /ck:cook, /ckm:content (these are NOT flagged).
 *
 * Both patterns exclude:
 *   - URLs (preceded by "://")
 *   - Markdown link targets (preceded by "(")
 *   - Content inside fenced code blocks (stripped before scanning)
 */
const DOUBLE_COLON_PATTERN =
  /(?<!:\/\/)(?<!\()\/[a-z][a-z0-9-]*:[a-z][a-z0-9-]+(:[a-z][a-z0-9-]+)+(?![:/])/g;

// Valid kit prefixes — single-colon invocations with these prefixes are correct syntax
const VALID_PREFIXES_RE = /^\/(?:ck|ckm):/;

const NONSTANDARD_PREFIX_PATTERN =
  /(?<!:\/\/)(?<!\()\/([a-z][a-z0-9-]*):[a-z][a-z0-9-]+(?!:[a-z])/g;

/**
 * Strip fenced code blocks (``` ... ```) from content.
 * We preserve line count by replacing block contents with blank lines.
 */
function stripFencedCodeBlocks(content: string): string {
  // Replace contents of ``` fenced blocks with newlines to preserve line numbers
  return content.replace(/```[\s\S]*?```/g, (match) => {
    const lineCount = (match.match(/\n/g) || []).length;
    return '\n'.repeat(lineCount);
  });
}

/**
 * Strip YAML front matter (--- ... ---) from content.
 * Preserves line count by replacing with blank lines.
 */
function stripFrontMatter(content: string): string {
  return content.replace(/^---\n[\s\S]*?\n---\n/, (match) => {
    const lineCount = (match.match(/\n/g) || []).length;
    return '\n'.repeat(lineCount);
  });
}

/**
 * Find all colon-chained command violations in a markdown file's content.
 *
 * @param filePath - used only for reporting in the output
 * @param content  - raw file content
 */
export function findColonSyntaxViolations(
  filePath: string,
  content: string
): ColonSyntaxViolation[] {
  const violations: ColonSyntaxViolation[] = [];

  // Strip front matter and fenced code blocks before scanning
  const stripped = stripFencedCodeBlocks(stripFrontMatter(content));

  const lines = stripped.split('\n');

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const rawLine = lines[lineIdx];

    // Track col positions already reported to avoid double-counting when both
    // patterns match the same token (e.g. /plan:hard:deep matches both).
    const reportedCols = new Set<number>();

    function addViolation(matchObj: RegExpExecArray) {
      const col = matchObj.index + 1;
      if (reportedCols.has(col)) return;
      reportedCols.add(col);
      violations.push({
        file: filePath,
        line: lineIdx + 1,
        col,
        match: matchObj[0],
      });
    }

    // Pattern 1: double-colon (always invalid regardless of prefix)
    let match: RegExpExecArray | null;
    DOUBLE_COLON_PATTERN.lastIndex = 0;
    while ((match = DOUBLE_COLON_PATTERN.exec(rawLine)) !== null) {
      addViolation(match);
    }

    // Pattern 2: single-colon with non-standard prefix (e.g. /plan:hard, /code:auto)
    NONSTANDARD_PREFIX_PATTERN.lastIndex = 0;
    while ((match = NONSTANDARD_PREFIX_PATTERN.exec(rawLine)) !== null) {
      const fullMatch = match[0];
      if (!VALID_PREFIXES_RE.test(fullMatch)) {
        addViolation(match);
      }
    }
  }

  return violations;
}

// ---------------------------------------------------------------------------
// File system scanner
// ---------------------------------------------------------------------------

/**
 * Recursively collect all .md and .mdx files under a directory.
 */
function collectMarkdownFiles(dir: string): string[] {
  const files: string[] = [];
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        files.push(...collectMarkdownFiles(fullPath));
      } else if (entry.endsWith('.md') || entry.endsWith('.mdx')) {
        files.push(fullPath);
      }
    }
  } catch {
    // Non-existent or unreadable directory — skip silently
  }
  return files;
}

/**
 * Scan all markdown files in the given directories and return all violations.
 */
export function scanDirectories(
  dirs: string[],
  rootDir: string
): ColonSyntaxViolation[] {
  const allViolations: ColonSyntaxViolation[] = [];

  for (const dir of dirs) {
    const files = collectMarkdownFiles(dir);
    for (const file of files) {
      const content = readFileSync(file, 'utf-8');
      const relPath = relative(rootDir, file);
      const violations = findColonSyntaxViolations(relPath, content);
      allViolations.push(...violations);
    }
  }

  return allViolations;
}

// ---------------------------------------------------------------------------
// CLI entrypoint
// ---------------------------------------------------------------------------

function parseArgs(args: string[]): { mode: 'warn' | 'fail'; dirs: string[] } {
  let mode: 'warn' | 'fail' = 'warn';
  const dirs: string[] = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--mode' && args[i + 1]) {
      const val = args[i + 1];
      if (val === 'warn' || val === 'fail') {
        mode = val;
      }
      i++;
    } else if (args[i] === '--dir' && args[i + 1]) {
      dirs.push(args[i + 1]);
      i++;
    } else if (!args[i].startsWith('--')) {
      dirs.push(args[i]);
    }
  }

  return { mode, dirs };
}

// Run as CLI when executed directly
if (import.meta.main) {
  const { mode, dirs: argDirs } = parseArgs(process.argv.slice(2));

  const rootDir = process.cwd();
  const scanDirs = argDirs.length > 0
    ? argDirs.map(d => (d.startsWith('/') ? d : join(rootDir, d)))
    : [
        join(rootDir, 'src', 'content', 'docs'),
        join(rootDir, 'src', 'content', 'docs-vi'),
      ];

  const violations = scanDirectories(scanDirs, rootDir);

  if (violations.length === 0) {
    console.log('[OK] No colon-syntax violations found.');
    process.exit(0);
  }

  const label = mode === 'fail' ? '[X]' : '[!]';
  console.log(`${label} Colon-syntax violations found (${violations.length} total):`);
  console.log('    These use old sub-command syntax. Replace with --flag style.\n');

  for (const v of violations) {
    console.log(`  ${v.file}:${v.line}:${v.col}  ${v.match}`);
  }

  console.log(`\n  Total: ${violations.length} violation(s)`);

  if (mode === 'warn') {
    console.log('\n[!] Running in warn mode — not failing build.');
    console.log('    Switch to --mode fail after Track 1 content fixes are merged.');
    process.exit(0);
  } else {
    console.log('\n[X] Running in fail mode — build failed.');
    process.exit(1);
  }
}
