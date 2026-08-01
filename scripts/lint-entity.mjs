import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, '..', 'src');

console.log('\n🔒 VYTAL HOUSE — CPOM & LEGAL ARCHITECTURE AUDITOR\n=================================================');

let errors = 0;
let warnings = 0;

// Prohibited ecosystem brand names (Rule #7)
const BANNED_BRANDS = ['Bossy Claws', 'Break Vault', 'Cosmo Contour'];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const fileList = [];
walkDir(srcDir, filePath => {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    fileList.push(filePath);
  }
});

fileList.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(srcDir, file);

  // Rule 7: Brand Exclusivity
  BANNED_BRANDS.forEach(brand => {
    if (content.includes(brand)) {
      console.error(`❌ CPOM VIOLATION in [${relPath}]: Prohibited external brand "${brand}" found.`);
      errors++;
    }
  });

  // Rule 2: Clinical Disclaimer on Medical pages
  if (relPath.startsWith('pages/Medical') && !content.includes('ClinicalDisclaimer')) {
    console.error(`❌ CPOM VIOLATION in [${relPath}]: Medical page must import and render <ClinicalDisclaimer />.`);
    errors++;
  }

  // Rule 4: Medical PDP viewport check - Warning if Medical page imports membership card directly inside main section
  if (relPath.startsWith('pages/Medical') && content.includes('MembershipCard') && !content.includes('separated-viewport')) {
    console.warn(`⚠️  CPOM WARNING in [${relPath}]: Ensure Medical PDP separates clinical services from Membership CTA.`);
    warnings++;
  }
});

console.log('\n-------------------------------------------------');
if (errors > 0) {
  console.error(`❌ AUDIT FAILED: ${errors} CPOM error(s), ${warnings} warning(s) found.`);
  process.exit(1);
} else {
  console.log(`✅ CPOM AUDIT PASSED: 0 errors, ${warnings} warning(s). Entity separation verified.`);
}
