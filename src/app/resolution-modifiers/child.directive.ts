import { Directive, Host, Optional } from '@angular/core';
import { LoggerHostService } from './logger-host.service';

@Directive({
  selector: '[ngSandboxChild]'
})
export class ChildDirective {

  // Searching for providers will end up in the parent, if there won't be any
  // providers, it will throw the error! In error case, we can use @Optional()
  constructor(@Host() private logger: LoggerHostService) {
    if (logger) {
      this.logger.log('ChildDirective');
    }
  }
}
