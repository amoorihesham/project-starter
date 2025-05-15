#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const degit_1 = __importDefault(require("degit"));
const inquirer_1 = __importDefault(require("inquirer"));
const reposTemplates_1 = require("./utils/reposTemplates");
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
async function getInitialAnswers() {
    return await inquirer_1.default.prompt([
        { type: 'input', name: 'ProjectName', message: 'Enter Your ProjectName', default: 'my-project' },
        { type: 'list', name: 'ProjectType', message: 'Choose Your Project Type', choices: ['Back-End', 'Front-End'], default: 'Front-End' },
    ]);
}
async function getFrontEndAnswers() {
    return await inquirer_1.default.prompt([
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
            const emitter = (0, degit_1.default)(reposTemplates_1.repos.frontEnd.nextRegular, { cache: false, force: true, verbose: true });
            console.log(chalk_1.default.cyan(`  ⌛Creating Project ${initialAnswers.ProjectName} From Remote Template ${reposTemplates_1.repos.frontEnd.nextRegular}`));
            emitter.clone(initialAnswers.ProjectName).then(() => {
                console.log(chalk_1.default.green(' ✅Project Cloned Successfully.'));
                process.chdir(initialAnswers.ProjectName);
                console.log(chalk_1.default.magenta(' 📦Installing Required Dependencies...'));
                (0, child_process_1.execSync)('npm install', { stdio: 'inherit' });
                console.log(chalk_1.default.red(' 🧹Cleaning Up...'));
                fs_1.default.rmSync(path_1.default.join(process.cwd(), 'git'), { recursive: true, force: true });
                (0, child_process_1.execSync)('git init', { stdio: 'ignore' });
                console.log(chalk_1.default.yellow(' ✅Initialized New git Project.'));
                console.log(chalk_1.default.green(' 🎉Done! Your Project Crafted And Ready!!'));
                console.log(chalk_1.default.yellow(`\nNext steps:`));
                console.log(chalk_1.default.blue(`  cd ${initialAnswers.ProjectName}`));
                console.log(chalk_1.default.blue(`npm run dev`));
            });
        }
    }
    else if (initialAnswers.ProjectType === 'Back-End') {
    }
    else {
        console.log('Unknown Choice');
        process.exit(1);
    }
}
StartProgram();
