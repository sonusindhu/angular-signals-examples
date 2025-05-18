// tools/copy-examples.js

const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, '../src/app/examples');
const targetDir = path.resolve(__dirname, '../src/assets/examples');

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.readdirSync(src).forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else if (/\.(ts|html|scss)$/.test(file)) {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

console.log('🔄 Copying example files...');
copyRecursive(sourceDir, targetDir);
console.log('✅ Done copying examples to assets.');
