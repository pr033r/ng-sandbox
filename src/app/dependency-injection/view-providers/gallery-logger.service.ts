import { Injectable } from '@angular/core';
import { ILogger } from './ILogger';

@Injectable({
  providedIn: 'root'
})
export class GalleryLoggerService implements ILogger {
  prefix = 'GalleryLoggerService';

  log(message: string): void {
    console.log(`${this.prefix}: ${message}`);
  }
}
