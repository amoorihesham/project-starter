import chalk from 'chalk';
export class chalkLogger {
    format(level, message, timestamp) {
        const base = `[${level}]==> [${timestamp}]==>`;
        switch (level) {
            case 'INFO':
                return chalk.bgCyan.whiteBright.bold(`\n${base}`) + chalk.whiteBright.bold(message);
            case 'WARNING':
                return chalk.bgYellow.whiteBright.bold(`\n${base}`) + chalk.whiteBright.bold(message);
            case 'SUCCESS':
                return chalk.bgGreen.whiteBright.bold(`\n${base}`) + chalk.whiteBright.bold(message);
            case 'ERROR':
                return chalk.bgRed.whiteBright.bold(`\n${base}`) + chalk.whiteBright.bold(message);
            default:
                return chalk.bgWhite.black.bold(`\n${base}` + message);
        }
    }
}
