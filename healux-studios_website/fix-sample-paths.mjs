import fs from 'fs';
import path from 'path';

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
}

const basePath = repo ? `/${repo}` : "";
if (!basePath) {
  console.log("No basePath required. Skipping sample paths update.");
  process.exit(0);
}

const targetDir = path.resolve(process.cwd(), "out");

function replaceInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceInDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.txt') || entry.name.endsWith('.json'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('/samples/')) {
        content = content.replaceAll('/samples/', `${basePath}/samples/`);
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

console.log(`Updating /samples/ paths in out/ with prefix ${basePath}...`);
replaceInDir(targetDir);
console.log("Done updating sample paths!");
