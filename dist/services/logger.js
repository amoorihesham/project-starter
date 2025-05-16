import chalk from 'chalk';
export const logInfo = (msg) => console.log(chalk.yellow(msg));
export const logSuccess = (msg) => console.log(chalk.green(msg));
export const logError = (msg, err) => {
    console.log(chalk.red(msg));
    if (err)
        console.error(err);
};
export class Logger {
    formatter;
    constructor(formatter) {
        this.formatter = formatter;
    }
    _log(level, message) {
        const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
        const formatted = this.formatter.format(level, message, timestamp);
        console.log(formatted);
    }
    info(message) {
        this._log('INFO', message);
    }
    success(message) {
        this._log('SUCCESS', message);
    }
    warn(message) {
        this._log('WARNING', message);
    }
    error(message) {
        this._log('ERROR', message);
    }
    raw(message) {
        this._log('RAW', message);
    }
}
