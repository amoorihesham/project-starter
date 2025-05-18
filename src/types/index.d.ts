declare type msgLevels = 'INFO' | 'WARNING' | 'SUCCESS' | 'ERROR' | 'RAW';

declare type FormattersType = {
  format: (level: msgLevels, msg: string, timestamp: string) => string;
};

declare interface IProjectCloner {
  clone: (projectName: string, repo: string) => Promise<void>;
}
