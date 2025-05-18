import degit from 'degit';
import { logger } from '../utils/print.js';
export class degitCloner {
    async clone(projectName, repo) {
        const emitter = degit(repo, { cache: false, verbose: true, force: true });
        await emitter.clone(projectName);
    }
}
export class Cloner {
    cloner;
    constructor(cloner) {
        this.cloner = cloner;
    }
    async clone(projectName, repo) {
        try {
            await this.cloner.clone(projectName, repo);
        }
        catch (error) {
            logger.error('Error while cloning project');
        }
    }
}
