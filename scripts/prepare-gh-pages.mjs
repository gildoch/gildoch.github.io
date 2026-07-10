import { copyFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const distDir = resolve(process.cwd(), 'dist/public');
const indexPath = resolve(distDir, 'index.html');
const notFoundPath = resolve(distDir, '404.html');
const noJekyllPath = resolve(distDir, '.nojekyll');

await copyFile(indexPath, notFoundPath);
await writeFile(noJekyllPath, '');

console.log('GitHub Pages artifacts prepared: 404.html and .nojekyll created.');
