#!/usr/bin/env node

import { handleBackend } from './handlers/backend.js';
import { handleFrontend } from './handlers/frontend.js';
import { getInitialAnswers } from './prompts/initialPrompt.js';
import { logger } from './utils/print.js';

async function StartProgram() {
  try {
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
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes('SIGINT')) {
      logger.error('Gracefully exited by user (Ctrl+C).');
      process.exit(0);
    }

    logger.error(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`);
    process.exit(1);
  }
}

StartProgram();
