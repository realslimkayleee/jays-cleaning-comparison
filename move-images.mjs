import fs from 'fs';
import path from 'path';

const concepts = ['concept-a', 'concept-b', 'concept-c'];
const baseDir = path.join(process.cwd(), 'public', 'images');

for (const concept of concepts) {
  const conceptDir = path.join(baseDir, concept);
  
  if (!fs.existsSync(conceptDir)) continue;

  const traverseAndCopy = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverseAndCopy(fullPath);
      } else if (file === 'screen.png') {
        const parentFolderName = path.basename(dir);
        const newFileName = `${parentFolderName}.png`;
        const destPath = path.join(conceptDir, newFileName);
        
        console.log(`Copying ${fullPath} to ${destPath}`);
        fs.copyFileSync(fullPath, destPath);
      }
    }
  };

  traverseAndCopy(conceptDir);
}
