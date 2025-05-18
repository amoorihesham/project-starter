import fs from 'fs';
import degit from 'degit';
import { execSync } from 'child_process';
import path from 'path';
import { logger } from '../utils/print.js';
import { cloner } from '../utils/cloner.js';

export async function cloneProject(projectName: string, repo: string) {
  try {
    logger.info(` ⌛  Creating Project ${projectName} From Remote Template`);
    await cloner.clone(projectName, repo);
    logger.success(' ✅ Project Cloned Successfully.');
    process.chdir(projectName);
    logger.info(' 📦  Installing Required Dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    logger.warn(' 🧹  Cleaning Up...');
    fs.rmSync(path.join(process.cwd(), 'git'), { recursive: true, force: true });
    execSync('git init', { stdio: 'ignore' });
    logger.success(' ✅ Initialized New git Project.');
    logger.success(' 🎉 Done! Your Project Crafted And Ready!!');
    logger.raw(`  Next steps:`);
    logger.raw(`  cd ${projectName}`);
    logger.raw(`  npm run dev`);
  } catch (error) {
    logger.error('Something went wrong');
  }
}
