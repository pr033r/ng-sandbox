import { Inject, Injectable } from '@angular/core';
import { ILogger } from './ILogger';
import { REPORTERS } from './reporter.token';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements ILogger {
  prefix = 'root';

  // Way how to inject the InjectionToken
  // constructor(@Inject(APP_CONFIG) private conf: AppConfig) {
  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {
    // console.log(conf);
  }

  log(message: string) {
    this.reporters.forEach(r => r.report());
    console.log(`${this.prefix} (experimental): ${message}`);
  }
}
