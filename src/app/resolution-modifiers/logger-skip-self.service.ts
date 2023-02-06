import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerSkipSelfService {
  prefix = 'root';

  log (message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
