import chalk from 'chalk';

export const logInfo = (msg: string) => console.log(chalk.yellow(msg));
export const logSuccess = (msg: string) => console.log(chalk.green(msg));
export const logError = (msg: string, err: unknown) => {
  console.log(chalk.red(msg));
  if (err) console.error(err);
};

export type msgLevels = 'INFO' | 'WARNING' | 'SUCCESS' | 'ERROR' | 'RAW';

export class Logger {
  formatter: { format: (level: msgLevels, message: string, timestamp: string) => string };

  constructor(formatter: { format: (level: msgLevels, message: string, timestamp: string) => string }) {
    this.formatter = formatter;
  }

  _log(level: msgLevels, message: string) {
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    const formatted = this.formatter.format(level, message, timestamp!);
    console.log(formatted);
  }

  info(message: string) {
    this._log('INFO', message);
  }
  success(message: string) {
    this._log('SUCCESS', message);
  }

  warn(message: string) {
    this._log('WARNING', message);
  }

  error(message: string) {
    this._log('ERROR', message);
  }

  raw(message: string) {
    this._log('RAW', message);
  }
}
