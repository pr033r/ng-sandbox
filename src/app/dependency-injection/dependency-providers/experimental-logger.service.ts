import { Inject, Injectable } from '@angular/core';
import { ILogger } from './ILogger';
import { APP_CONFIG, AppConfig } from './config.token';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements ILogger {
  prefix = 'root';

  constructor(@Inject(APP_CONFIG) private conf: AppConfig) {
    console.log(conf);
  }
  log(message: string) {
    console.log(`${this.prefix} (experimental): ${message}`);
  }
}
