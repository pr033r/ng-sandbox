import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerSelfService {
  prefix = 'root';

  log (message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
