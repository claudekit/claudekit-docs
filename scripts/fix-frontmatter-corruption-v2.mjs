import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

const files = await glob('src/content/docs/engineer/**/*.md');

console.log(`Fixing frontmatter corruption in ${files.length} files (v2 - robust)...`);

let fixed = 0;
let alreadyClean = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf-8');

  // Extract frontmatter
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    console.log(`  ⊙ Skipping ${file}: No frontmatter found`);
    continue;
  }

  const frontmatterBlock = match[1];
  const bodyContent = content.substring(match[0].length);
  const lines = frontmatterBlock.split('\n');

  // Detect if file has duplicate fields (corruption indicator)
  const fieldCounts = {};
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      fieldCounts[key] = (fieldCounts[key] || 0) + 1;
    }
  }

  const hasDuplicates = Object.values(fieldCounts).some(count => count > 1);

  if (!hasDuplicates) {
    alreadyClean++;
    continue;
  }

  // Parse fields using "LAST occurrence wins" strategy (mimics Zod)
  const fields = {};

  // Method: Parse all lines, keeping last occurrence of each key
  for (const line of lines) {
    // Skip empty lines, quotes-only lines, or lines inside malformed quotes
    if (!line.trim()) continue;
    if (line.trim() === '"') continue;
    if (line.includes('"') && !line.match(/^(title|description|category):/)) {
      // Skip lines that are malformed quote boundaries
      continue;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // Remove quotes and clean value
    value = value.replace(/^["']/, '').replace(/["']$/, '');

    // Skip if value looks like it's inside a malformed multi-line string
    if (key === 'description' && value.startsWith('"')) {
      // This is the corrupted opening - extract the actual description
      value = value.replace(/^"/, '');
    }

    if (key) {
      fields[key] = value; // Last occurrence wins
    }
  }

  // Validate required fields
  if (!fields.title || !fields.section) {
    console.log(`  ⊙ FAILED ${file}: Missing required fields after parsing`);
    console.log(`    Found keys: ${Object.keys(fields).join(', ')}`);
    continue;
  }

  // Ensure description exists
  if (!fields.description) {
    const fileName = file.split(/[\\\/]/).pop().replace('.md', '');
    fields.description = `Documentation for ${fileName}`;
  }

  // Ensure kit exists
  if (!fields.kit) {
    fields.kit = 'engineer';
  }

  // Reconstruct clean frontmatter
  const cleanLines = [
    '---',
    `title: ${fields.title}`,
    `description: ${fields.description}`,
    `section: ${fields.section}`,
    `kit: ${fields.kit}`,
  ];

  if (fields.category) cleanLines.push(`category: ${fields.category}`);
  if (fields.order) cleanLines.push(`order: ${fields.order}`);
  if (fields.published !== undefined) cleanLines.push(`published: ${fields.published}`);

  cleanLines.push('---');

  const cleanFrontmatter = cleanLines.join('\n');
  const newContent = cleanFrontmatter + bodyContent;

  writeFileSync(file, newContent, 'utf-8');
  fixed++;
  console.log(`  ✓ Fixed ${file}`);
}

console.log(`\n✓ Fixed (corrupted → clean): ${fixed} files`);
console.log(`✓ Already clean (skipped): ${alreadyClean} files`);
console.log(`✓ Total processed: ${fixed + alreadyClean}/${files.length}`);
