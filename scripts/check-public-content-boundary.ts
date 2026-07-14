import { readdirSync, readFileSync, statSync } from 'fs';
import { join, relative } from 'path';

export interface PublicBoundaryViolation {
  file: string;
  line: number | null;
  signature: number;
}

const ENCODED_FORBIDDEN_SIGNATURES = [
  'YWdlbnRraXQ=',
  'YmVzdGFnZW50a2l0cw==',
] as const;

export const DEFAULT_FORBIDDEN_SIGNATURES = ENCODED_FORBIDDEN_SIGNATURES.map(value =>
  Buffer.from(value, 'base64').toString('utf8')
);

const PUBLIC_TEXT_EXTENSIONS = ['.html', '.json', '.md', '.mdx', '.txt', '.xml'] as const;

function collectPublicTextFiles(dir: string): string[] {
  const files: string[] = [];

  try {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...collectPublicTextFiles(fullPath));
      } else if (PUBLIC_TEXT_EXTENSIONS.some(extension => entry.endsWith(extension))) {
        files.push(fullPath);
      }
    }
  } catch {
    return files;
  }

  return files;
}

export function findPublicBoundaryViolations(
  file: string,
  content: string,
  forbiddenSignatures: readonly string[] = DEFAULT_FORBIDDEN_SIGNATURES
): PublicBoundaryViolation[] {
  const violations: PublicBoundaryViolation[] = [];
  const normalizedFile = file.toLowerCase();
  const lines = content.split('\n');

  forbiddenSignatures.forEach((value, signature) => {
    const normalizedValue = value.toLowerCase();

    if (normalizedFile.includes(normalizedValue)) {
      violations.push({ file, line: null, signature });
    }

    lines.forEach((line, index) => {
      if (line.toLowerCase().includes(normalizedValue)) {
        violations.push({ file, line: index + 1, signature });
      }
    });
  });

  return violations;
}

export function scanPublicContent(
  dirs: string[],
  rootDir: string,
  forbiddenSignatures: readonly string[] = DEFAULT_FORBIDDEN_SIGNATURES
): PublicBoundaryViolation[] {
  const violations: PublicBoundaryViolation[] = [];

  for (const dir of dirs) {
    for (const file of collectPublicTextFiles(dir)) {
      const relativePath = relative(rootDir, file);
      violations.push(
        ...findPublicBoundaryViolations(
          relativePath,
          readFileSync(file, 'utf8'),
          forbiddenSignatures
        )
      );
    }
  }

  return violations;
}

if (import.meta.main) {
  const rootDir = process.cwd();
  const publicContentDirs = [
    join(rootDir, 'src', 'content', 'docs'),
    join(rootDir, 'src', 'content', 'docs-vi'),
    join(rootDir, 'public'),
  ];
  const violations = scanPublicContent(publicContentDirs, rootDir);

  if (violations.length === 0) {
    console.log('[OK] Public content boundary check passed.');
    process.exit(0);
  }

  console.error(`[X] Public content boundary violations found (${violations.length} total):`);
  for (const violation of violations) {
    const location = violation.line === null ? violation.file : `${violation.file}:${violation.line}`;
    console.error(`  ${location}  forbidden signature ${violation.signature + 1}`);
  }
  process.exit(1);
}
