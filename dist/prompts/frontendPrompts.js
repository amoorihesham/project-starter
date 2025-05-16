import inquirer from 'inquirer';
export async function getFrontEndAnswers() {
    return await inquirer.prompt([
        { type: 'input', name: 'ProjectName', message: 'Enter Your ProjectName', default: 'my-project' },
        {
            type: 'list',
            name: 'Framework',
            message: 'Choose Project Template?',
            choices: ['React + Vite', 'Next Js + (Tailwind - Typescript - Shadcn Ui - Zod - React-Hook-Form)', 'Full-Stack Next.js'],
            default: 'React + Vite',
        },
    ]);
}
