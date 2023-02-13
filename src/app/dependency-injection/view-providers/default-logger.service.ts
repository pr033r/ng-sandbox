import { Injectable } from '@angular/core';
import { ILogger } from './ILogger';

@Injectable({
  providedIn: 'root'
})
export class DefaultLoggerService implements ILogger {
  prefix = 'DefaultLoggerService';

  log(message: string): void {
    console.log(`${this.prefix}: ${message}`);
  }
}
