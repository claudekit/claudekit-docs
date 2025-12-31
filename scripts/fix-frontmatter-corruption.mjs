import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

const files = await glob('src/content/docs/engineer/**/*.md');

console.log(`Fixing frontmatter corruption in ${files.length} files...`);

let fixed = 0;
let skipped = 0;

for (const file of files) {
  let content = readFileSync(file, 'utf-8');

  // Extract frontmatter
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    console.log(`  ⊙ Skipping ${file}: No frontmatter found`);
    skipped++;
    continue;
  }

  const frontmatterBlock = match[1];
  const bodyContent = content.substring(match[0].length);

  // Strategy: Extract the LAST occurrence of each key (after any malformed quotes)
  // This mimics Zod's "last field wins" behavior
  const fields = {};
  const lines = frontmatterBlock.split('\n');

  // First pass: find the closing quote position (if any)
  let closingQuoteLine = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Look for a line ending with a quote that's not a field definition
    if (line.trim().endsWith('"') && !line.includes(':')) {
      closingQuoteLine = i;
      break;
    }
    // Or a field value ending with quote
    if (line.includes(':') && line.trim().endsWith('"') && !line.startsWith('description:')) {
      closingQuoteLine = i;
      break;
    }
  }

  // Second pass: parse fields AFTER the closing quote (or all fields if no quote)
  const startParsing = closingQuoteLine >= 0 ? closingQuoteLine + 1 : 0;

  for (let i = startParsing; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();

    // Remove surrounding quotes
    value = value.replace(/^["']|["']$/g, '');

    if (key) {
      fields[key] = value;
    }
  }

  // Fallback: if no fields found after quote, try parsing the first occurrence
  if (Object.keys(fields).length === 0) {
    for (const line of lines) {
      if (!line.trim() || line.trim() === '"') continue;

      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) continue;

      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      value = value.replace(/^["']|["']$/g, '');

      if (key && !fields[key]) {
        fields[key] = value;
      }
    }
  }

  // Validate required fields
  if (!fields.title || !fields.section) {
    console.log(`  ⊙ Skipping ${file}: Missing required fields (title or section)`);
    skipped++;
    continue;
  }

  // Handle missing description - extract from file name if needed
  if (!fields.description || fields.description.includes('Documentation for')) {
    const fileName = file.split(/[\\\/]/).pop().replace('.md', '');
    fields.description = fields.description || `Documentation for ${fileName}`;
  }

  // Ensure kit field exists
  if (!fields.kit) {
    fields.kit = 'engineer';
  }

  // Reconstruct clean frontmatter in proper order
  const cleanLines = [
    '---',
    `title: ${fields.title}`,
    `description: ${fields.description}`,
    `section: ${fields.section}`,
    `kit: ${fields.kit}`,
  ];

  // Add optional fields if present
  if (fields.category) cleanLines.push(`category: ${fields.category}`);
  if (fields.order) cleanLines.push(`order: ${fields.order}`);
  if (fields.published !== undefined) cleanLines.push(`published: ${fields.published}`);

  cleanLines.push('---');

  const cleanFrontmatter = cleanLines.join('\n');
  const newContent = cleanFrontmatter + bodyContent;

  // Write fixed content
  writeFileSync(file, newContent, 'utf-8');
  fixed++;
  console.log(`  ✓ Fixed ${file}`);
}

console.log(`\n✓ Fixed: ${fixed} files`);
console.log(`⊙ Skipped: ${skipped} files`);
