import { Component } from '@angular/core';
import { PollingService } from '../polling/polling.service';

@Component({
  selector: 'ng-sandbox-lazy',
  template: ` <p>Polling count times <b>(lazy)</b>: {{ polling.polling$ | async }}</p> `,
  styles: [],
})
export class LazyComponent {
  constructor(public polling: PollingService) {
  }
}
