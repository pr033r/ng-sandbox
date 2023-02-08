import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root'
})
export class EngagingReporterService implements Reporter {

  report(): void {
    console.log(`%cEngaging report: User has been using app ... seconds.`, 'color: orange;');
  }
}
