/**
 * Tests for check-command-syntax.ts
 *
 * The linter detects colon-chained command patterns like `/ckm:write:blog` or `/ck:fix:auto`
 * which represent invalid sub-command syntax (should use `--flag` style instead).
 *
 * Valid single-colon skill invocations like `/ck:cook` or `/ckm:content` are NOT flagged.
 */
import { describe, test, expect } from 'bun:test';
import {
  findColonSyntaxViolations,
  type ColonSyntaxViolation,
} from '../scripts/check-command-syntax';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function violation(file: string, line: number, col: number, match: string): ColonSyntaxViolation {
  return { file, line, col, match };
}

// ---------------------------------------------------------------------------
// Unit tests — findColonSyntaxViolations
// ---------------------------------------------------------------------------

describe('findColonSyntaxViolations', () => {
  test('flags double-colon command pattern', () => {
    const content = 'Use `/ckm:write:blog` to create blog posts.';
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(1);
    expect(violations[0].match).toBe('/ckm:write:blog');
    expect(violations[0].line).toBe(1);
  });

  test('flags triple-colon command pattern', () => {
    const content = 'Run `/ck:fix:auto:deep` for thorough fix.';
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(1);
    expect(violations[0].match).toBe('/ck:fix:auto:deep');
  });

  test('does NOT flag valid single-colon skill invocation', () => {
    const content = 'Use `/ck:cook` to implement features, or `/ckm:content` for marketing.';
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(0);
  });

  test('does NOT flag URLs with ://', () => {
    const content = 'See https://docs.claudekit.cc/ck:cook for more.';
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(0);
  });

  test('does NOT flag code blocks (triple-backtick fenced)', () => {
    const content = [
      '```bash',
      '/ckm:write:blog "My Post"',
      '```',
    ].join('\n');
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(0);
  });

  test('does NOT flag content inside fenced code blocks (triple-backtick)', () => {
    // Violations shown as examples of what NOT to do, inside a code block, are exempt
    const content = [
      'Avoid this old syntax:',
      '```',
      '/ckm:write:blog "My Post"',
      '```',
      '',
      'Use `/ckm:content --type blog` instead.',
    ].join('\n');
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(0);
  });

  test('flags multiple violations in one file', () => {
    const content = [
      '- `/ckm:write:blog` for blogs',
      '- `/ckm:youtube:social` for social',
      '- `/ck:cook` is fine',
    ].join('\n');
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(2);
    expect(violations[0].match).toBe('/ckm:write:blog');
    expect(violations[1].match).toBe('/ckm:youtube:social');
  });

  test('reports correct line numbers', () => {
    const content = [
      'Line one is clean.',
      'Line two has `/ckm:seo:audit` violation.',
      'Line three is clean.',
    ].join('\n');
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(1);
    expect(violations[0].line).toBe(2);
  });

  test('reports correct column numbers', () => {
    const content = 'Start `/ckm:write:blog` end.';
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(1);
    // "Start " is 6 chars; backtick is col 7; slash starts at col 8
    expect(violations[0].col).toBe(8);
  });

  test('does not flag YAML front matter colons', () => {
    const content = [
      '---',
      'title: "My Page"',
      'section: getting-started',
      '---',
      '',
      'Valid content here.',
    ].join('\n');
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(0);
  });

  test('does not flag markdown link targets', () => {
    const content = 'See [blog post](/docs/marketing/skills/content-marketing) for more.';
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(0);
  });

  test('flags the /plan:hard pattern (old flag syntax)', () => {
    const content = 'Use `/plan:hard "Feature X"` to plan.';
    const violations = findColonSyntaxViolations('test.md', content);
    expect(violations).toHaveLength(1);
    expect(violations[0].match).toBe('/plan:hard');
  });
});
