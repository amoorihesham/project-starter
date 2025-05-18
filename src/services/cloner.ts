import degit from 'degit';
import { logger } from '../utils/print.js';

export class degitCloner implements IProjectCloner {
  async clone(projectName: string, repo: string): Promise<void> {
    const emitter = degit(repo, { cache: false, verbose: true, force: true });
    await emitter.clone(projectName);
  }
}

export class Cloner {
  constructor(private cloner: IProjectCloner) {}

  async clone(projectName: string, repo: string) {
    try {
      await this.cloner.clone(projectName, repo);
    } catch (error) {
      logger.error('Error while cloning project');
    }
  }
}
