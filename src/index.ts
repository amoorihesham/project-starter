#!/usr/bin/env node

import fs from 'fs';
import degit from 'degit';
import inq from 'inquirer';
import { repos } from './utils/reposTemplates';
import { execSync } from 'child_process';
import path from 'path';
import chalk from 'chalk';

async function getInitialAnswers() {
  return await inq.prompt([
    { type: 'input', name: 'ProjectName', message: 'Enter Your ProjectName', default: 'my-project' },
    { type: 'list', name: 'ProjectType', message: 'Choose Your Project Type', choices: ['Back-End', 'Front-End'], default: 'Front-End' },
  ]);
}

async function getFrontEndAnswers() {
  return await inq.prompt([
    {
      type: 'list',
      name: 'Framework',
      message: 'Choose Project Template?',
      choices: ['React + Vite', 'Next Js + (Tailwind - Typescript - Shadcn Ui - Zod - React-Hook-Form)', 'Full-Stack Next.js'],
      default: 'React + Vite',
    },
  ]);
}

async function StartProgram() {
  const initialAnswers = await getInitialAnswers();
  if (initialAnswers.ProjectType === 'Front-End') {
    const answers = await getFrontEndAnswers();
    if (answers.Framework === 'Next Js + (Tailwind - Typescript - Shadcn Ui - Zod - React-Hook-Form)') {
      const emitter = degit(repos.frontEnd.nextRegular, { cache: false, force: true, verbose: true });
      console.log(chalk.cyan(`  \n⌛Creating Project ${initialAnswers.ProjectName} From Remote Template ${repos.frontEnd.nextRegular}`));
      emitter.clone(initialAnswers.ProjectName).then(() => {
        console.log(chalk.green(' \n✅Project Cloned Successfully.'));
        process.chdir(initialAnswers.ProjectName);
        console.log(chalk.magenta(' \n📦Installing Required Dependencies...'));
        execSync('npm install', { stdio: 'inherit' });
        console.log(chalk.red(' \n🧹Cleaning Up...'));
        fs.rmSync(path.join(process.cwd(), 'git'), { recursive: true, force: true });
        execSync('git init', { stdio: 'ignore' });
        console.log(chalk.yellow(' \n✅Initialized New git Project.'));
        console.log(chalk.green(' \n🎉Done! Your Project Crafted And Ready!!'));
        console.log(chalk.yellow(`  \nNext steps:`));
        console.log(chalk.blue(`  \ncd ${initialAnswers.ProjectName}`));
        console.log(chalk.blue(`  \nnpm run dev`));
      });
    }
  } else if (initialAnswers.ProjectType === 'Back-End') {
  } else {
    console.log('Unknown Choice');
    process.exit(1);
  }
}

StartProgram();
