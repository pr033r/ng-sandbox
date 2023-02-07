import { Directive, Optional, Self } from '@angular/core';
import { LoggerHostService } from './logger-host.service';

@Directive({
  selector: '[ngSandboxParent]',
  providers: [LoggerHostService]
})
export class ParentDirective {

  // If we remove LoggerHostService from provides here, it will throw the error.
  // Because, in the ChildDirective there's @Host() modifier, so searching for
  // the provider will end up just right here - and here there's no providers!
  constructor(@Optional() @Self() private logger: LoggerHostService) {
    if (this.logger) {
      this.logger.prefix = 'Parent Directive';
    }
  }

}
