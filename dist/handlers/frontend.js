import { getFrontEndAnswers } from '../prompts/frontendPrompts.js';
import { cloneProject } from '../services/projectCloner.js';
import { repos } from '../utils/reposTemplates.js';
export async function handleFrontend() {
    const { ProjectName, Framework } = await getFrontEndAnswers();
    switch (Framework) {
        case 'Next Js + (Tailwind - Typescript - Shadcn Ui - Zod - React-Hook-Form)':
            await cloneProject(ProjectName, repos.frontEnd.nextRegular);
            break;
        default:
            console.log('Other frameworks are not yet implemented.!!');
    }
}
