import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class GalleryLoggerService implements Logger{
  prefix = 'GalleryLoggerService';

  log(message: string): void {
    console.log(`${this.prefix}: ${message}`);
  }
}
