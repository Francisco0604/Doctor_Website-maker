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

const activemotionRoutes = [
  "conditions",
  "treatments",
  "testimonials",
  "blog",
  "appointment",
  "contact",
  "privacy",
  "terms"
];

function replaceInDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceInDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.txt') || entry.name.endsWith('.json'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      if (content.includes('/samples/')) {
        content = content.replaceAll('/samples/', `${basePath}/samples/`);
        modified = true;
      }

      if (fullPath.includes('activemotion-physio')) {
        for (const route of activemotionRoutes) {
          const targetHref = `href:"/${route}"`;
          const replacementHref = `href:"${basePath}/samples/activemotion-physio/${route}"`;
          if (content.includes(targetHref)) {
            content = content.replaceAll(targetHref, replacementHref);
            modified = true;
          }
          const htmlTargetHref = `href="/${route}"`;
          const htmlReplacementHref = `href="${basePath}/samples/activemotion-physio/${route}"`;
          if (content.includes(htmlTargetHref)) {
            content = content.replaceAll(htmlTargetHref, htmlReplacementHref);
            modified = true;
          }
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

function ensureSubfolderIndexes(sampleRootDir) {
  if (!fs.existsSync(sampleRootDir)) return;
  const sites = fs.readdirSync(sampleRootDir, { withFileTypes: true });
  for (const site of sites) {
    if (site.isDirectory()) {
      const siteDir = path.join(sampleRootDir, site.name);
      const files = fs.readdirSync(siteDir, { withFileTypes: true });
      for (const file of files) {
        if (file.isFile() && file.name.endsWith('.html') && file.name !== 'index.html' && file.name !== '404.html' && file.name !== '_not-found.html') {
          const pageName = file.name.replace(/\.html$/, '');
          const pageDir = path.join(siteDir, pageName);
          if (!fs.existsSync(pageDir)) {
            fs.mkdirSync(pageDir, { recursive: true });
          }
          const indexPath = path.join(pageDir, 'index.html');
          fs.copyFileSync(path.join(siteDir, file.name), indexPath);
          console.log(`Created ${site.name}/${pageName}/index.html from ${file.name}`);
        }
      }
    }
  }
}

console.log(`Updating /samples/ paths in out/ and public/samples with prefix ${basePath}...`);
const outSamplesDir = path.resolve(process.cwd(), "out", "samples");
const publicSamplesDir = path.resolve(process.cwd(), "public", "samples");

replaceInDir(path.resolve(process.cwd(), "out"));
replaceInDir(publicSamplesDir);

ensureSubfolderIndexes(outSamplesDir);
ensureSubfolderIndexes(publicSamplesDir);

console.log("Done updating sample paths and subfolder index files!");
