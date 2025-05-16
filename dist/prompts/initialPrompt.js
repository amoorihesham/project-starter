import inquirer from 'inquirer';
export async function getInitialAnswers() {
    return await inquirer.prompt([
        { type: 'list', name: 'ProjectType', message: 'Choose Your Project Type', choices: ['Back-End', 'Front-End'], default: 'Front-End' },
    ]);
}
