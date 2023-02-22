import { Component } from '@angular/core';
import { PollingService } from '../polling/polling.service';

@Component({
  selector: 'ng-sandbox-home',
  template: ` <p>Polling count times: {{ polling.polling$ | async }}</p> `,
  styles: [],
})
export class HomeComponent {
  constructor(public polling: PollingService) {
  }
}
