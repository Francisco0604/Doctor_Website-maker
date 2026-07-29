import fs from 'fs';
import path from 'path';

const isVercel = process.env.VERCEL || false;
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
}

const basePath = isVercel ? "" : (repo ? `/${repo}` : "");

const siteRoutesMap = {
  "activemotion-physio": ["conditions", "treatments", "testimonials", "blog", "appointment", "contact", "privacy", "terms"],
  "brightsmile-dental": ["treatments", "pricing", "testimonials", "gallery", "faq", "contact", "appointment", "privacy", "terms"],
  "familycare-clinic": ["services", "about", "appointment", "contact", "privacy", "terms"]
};

// Copy built output from Sample/ to public/samples/ if available
function copySamplesFromSource() {
  const rootDir = path.resolve(process.cwd(), "..");
  const samplesSourceDir = path.resolve(rootDir, "Sample");
  const targetPublicSamples = path.resolve(process.cwd(), "public", "samples");

  if (!fs.existsSync(samplesSourceDir)) return;

  for (const siteName of Object.keys(siteRoutesMap)) {
    const siteOutDir = path.join(samplesSourceDir, siteName, "out");
    const siteTargetDir = path.join(targetPublicSamples, siteName);

    if (fs.existsSync(siteOutDir)) {
      if (!fs.existsSync(siteTargetDir)) {
        fs.mkdirSync(siteTargetDir, { recursive: true });
      }
      copyRecursiveSync(siteOutDir, siteTargetDir);
      console.log(`Copied ${siteName} build from Sample/${siteName}/out to public/samples/${siteName}`);
    }
  }
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

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

      // Replace /Doctor_Website-maker/samples/ with target ${basePath}/samples/
      if (content.includes('/Doctor_Website-maker/samples/')) {
        content = content.replaceAll('/Doctor_Website-maker/samples/', `${basePath}/samples/`);
        modified = true;
      }

      // Ensure /samples/ has correct basePath prefix without duplication
      if (basePath) {
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
      }

      for (const [siteName, routes] of Object.entries(siteRoutesMap)) {
        if (fullPath.includes(siteName)) {
          // Replace Home links to point to index.html explicitly
          const homeTargets = [
            `href="/samples/${siteName}"`,
            `href="/samples/${siteName}/"`,
            `href:"/samples/${siteName}"`,
            `href:"/samples/${siteName}/"`
          ];
          for (const target of homeTargets) {
            if (content.includes(target)) {
              content = content.replaceAll(target, target.includes('href:') ? `href:"${basePath}/samples/${siteName}/index.html"` : `href="${basePath}/samples/${siteName}/index.html"`);
              modified = true;
            }
          }

          for (const route of routes) {
            const targets = [
              `href="/samples/${siteName}/${route}"`,
              `href="/samples/${siteName}/${route}/"`,
              `href:"/samples/${siteName}/${route}"`,
              `href:"/samples/${siteName}/${route}/"`,
              `href="/${route}"`,
              `href="/${route}/"`,
              `href:"/${route}"`,
              `href:"/${route}/"`
            ];

            for (const target of targets) {
              if (content.includes(target)) {
                const isColon = target.includes('href:');
                const replacement = isColon 
                  ? `href:"${basePath}/samples/${siteName}/${route}.html"`
                  : `href="${basePath}/samples/${siteName}/${route}.html"`;
                content = content.replaceAll(target, replacement);
                modified = true;
              }
            }
          }
        }
      }

      if (modified) {
        try {
          fs.writeFileSync(fullPath, content, 'utf8');
        } catch (e) {}
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

console.log("Copying latest sample builds...");
copySamplesFromSource();

console.log(`Updating /samples/ paths with prefix '${basePath}'...`);
const outSamplesDir = path.resolve(process.cwd(), "out", "samples");
const publicSamplesDir = path.resolve(process.cwd(), "public", "samples");

replaceInDir(path.resolve(process.cwd(), "out"));
replaceInDir(publicSamplesDir);

ensureSubfolderIndexes(outSamplesDir);
ensureSubfolderIndexes(publicSamplesDir);

console.log("Done updating sample paths and subfolder index files!");

