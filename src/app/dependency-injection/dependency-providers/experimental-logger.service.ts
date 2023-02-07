import { Injectable } from '@angular/core';
import { ILogger } from './ILogger';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements ILogger {
  prefix = 'root';

  log(message: string) {
    console.log(`${this.prefix} (experimental): ${message}`);
  }
}
