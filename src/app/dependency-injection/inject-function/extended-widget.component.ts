import { Component } from '@angular/core';
import { BaseWidgetDirective } from './base-widget.directive';
import { HttpStateService } from './http-state.service';
import { StateMgmtService } from './state-mgmt.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ng-sandbox-extended-widget',
  template: ` <p>extended-widget works!</p> `,
  styles: [],
})
export class ExtendedWidgetComponent extends BaseWidgetDirective {
  // state = injectState('users');

  // New usage of inject() - It's mostly useful when injected dep has its own
  // deps - hence we won't need to inject it also here in the 'child'
  constructor(
    private actions: HttpStateService,
    // state: StateMgmtService,
    // httpClient: HttpClient
  ) {
    super();
    // super(state, httpClient);
  }
}
