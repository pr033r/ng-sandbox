import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root'
})
export class BrowserReporterService implements Reporter {

  report(): void {
    console.log(`Browser report: 
      Browser width - ${window.outerWidth}
      Browser height - ${window.outerHeight}`, 'color: orange;');
  }
}
