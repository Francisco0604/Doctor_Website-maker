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

const siteRoutesMap = {
  "activemotion-physio": ["conditions", "treatments", "testimonials", "blog", "appointment", "contact", "privacy", "terms"],
  "brightsmile-dental": ["treatments", "pricing", "testimonials", "gallery", "faq", "contact", "appointment"],
  "familycare-clinic": ["services", "about", "appointment", "contact"]
};

function replaceInDir(dir) {
  if (!fs.existsSync(dir)) return;
  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceInDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.txt') || entry.name.endsWith('.json'))) {
      if (!fs.existsSync(fullPath)) continue;
      let content = "";
      try {
        content = fs.readFileSync(fullPath, 'utf8');
      } catch (e) {
        continue;
      }
      let modified = false;

      // Safely replace /samples/ without duplicating basePath
      const doubleBase = `${basePath}${basePath}`;
      if (content.includes('/samples/')) {
        content = content.replaceAll(`${basePath}/samples/`, '__TEMP_SAMPLES_PREFIX__');
        content = content.replaceAll('/samples/', `${basePath}/samples/`);
        content = content.replaceAll('__TEMP_SAMPLES_PREFIX__', `${basePath}/samples/`);
        modified = true;
      }

      if (content.includes(doubleBase)) {
        content = content.replaceAll(doubleBase, basePath);
        modified = true;
      }

      for (const [siteName, routes] of Object.entries(siteRoutesMap)) {
        if (fullPath.includes(siteName)) {
          for (const route of routes) {
            const targetHref = `href:"/${route}"`;
            const replacementHref = `href:"${basePath}/samples/${siteName}/${route}"`;
            if (content.includes(targetHref)) {
              content = content.replaceAll(targetHref, replacementHref);
              modified = true;
            }
            const htmlTargetHref = `href="/${route}"`;
            const htmlReplacementHref = `href="${basePath}/samples/${siteName}/${route}"`;
            if (content.includes(htmlTargetHref)) {
              content = content.replaceAll(htmlTargetHref, htmlReplacementHref);
              modified = true;
            }
          }
        }
      }

      if (modified) {
        try {
          fs.writeFileSync(fullPath, content, 'utf8');
        } catch (e) {
          // ignore
        }
      }
    }
  }
}

function ensureSubfolderIndexes(sampleRootDir) {
  if (!fs.existsSync(sampleRootDir)) return;
  let sites = [];
  try {
    sites = fs.readdirSync(sampleRootDir, { withFileTypes: true });
  } catch (e) {
    return;
  }
  for (const site of sites) {
    if (site.isDirectory()) {
      const siteDir = path.join(sampleRootDir, site.name);
      let files = [];
      try {
        files = fs.readdirSync(siteDir, { withFileTypes: true });
      } catch (e) {
        continue;
      }
      for (const file of files) {
        if (file.isFile() && file.name.endsWith('.html') && file.name !== 'index.html' && file.name !== '404.html' && file.name !== '_not-found.html') {
          const pageName = file.name.replace(/\.html$/, '');
          const pageDir = path.join(siteDir, pageName);
          if (!fs.existsSync(pageDir)) {
            try {
              fs.mkdirSync(pageDir, { recursive: true });
            } catch (e) {}
          }
          const indexPath = path.join(pageDir, 'index.html');
          try {
            fs.copyFileSync(path.join(siteDir, file.name), indexPath);
          } catch (e) {}
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

console.log("Done updating sample paths and subfolder index files across all sample sites!");
