import { ILogger } from './ILogger';

// Some very old legacy logger which is event not class, but we have to use it.
// It cannot be used for 'useClass' or 'useExisting', because Angular injector
// simply doesn't know (didn't create an instance) about it - it doesn't have
// any Angular @Injectable decorator.
// So, for this case, we have to use 'useValue'
export const LegacyLogger: ILogger = {
  prefix: 'root',
  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
};
