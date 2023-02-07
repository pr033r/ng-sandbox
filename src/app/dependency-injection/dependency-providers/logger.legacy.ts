import { ILogger } from './ILogger';

// Some very old legacy logger which is event not class, but we have to use it
export const LegacyLogger: ILogger = {
  prefix: 'root',
  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
};
