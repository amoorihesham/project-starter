import { chalkLogger } from '../lib/chalk.js';
import { Logger } from '../services/logger.js';

const formatter = new chalkLogger();
export const logger = new Logger(formatter);
