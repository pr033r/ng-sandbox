import { Directive, inject, Input } from '@angular/core';
import { StateMgmtService } from './state-mgmt.service';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[ngSandboxBaseWidget]',
})
export class BaseWidgetDirective {
  @Input() id = '';
  @Input() title = '';

  // New usage of inject() - It's mostly useful when injected dep has its own
  // deps - hence we won't need to inject it also here in the 'child'
  state = inject(StateMgmtService);
  httpClient = inject(HttpClient);
  // constructor(
  //   private state: StateMgmtService,
  //   private httpClient: HttpClient
  // ) {}
}
