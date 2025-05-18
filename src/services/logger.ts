export class Logger {
  formatter: FormattersType;

  constructor(formatter: FormattersType) {
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
