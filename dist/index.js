#!/usr/bin/env node
import { handleBackend } from './handlers/backend.js';
import { handleFrontend } from './handlers/frontend.js';
import { getInitialAnswers } from './prompts/initialPrompt.js';
import { logger } from './utils/print.js';
process.on('SIGINT', () => {
    logger.error('Gracefully Exited...!');
    process.exit(0);
});
async function StartProgram() {
    const { ProjectType } = await getInitialAnswers();
    switch (ProjectType) {
        case 'Front-End':
            await handleFrontend();
            break;
        case 'Back-End':
            await handleBackend();
            break;
        default:
            logger.error('Unknown Choice.');
            process.exit(1);
    }
}
StartProgram();
