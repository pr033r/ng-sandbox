import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './logger.service';
import { LoggerSelfService } from './logger-self.service';
import { LoggerSkipSelfService } from './logger-skip-self.service';

@Component({
  selector: 'ng-sandbox-resolution-modifiers',
  template: ``,
  styles: [],
  providers: [LoggerSelfService]
})
export class ResolutionModifiersComponent {
  constructor(
    @Optional() private logger: LoggerService,
    @Self() private loggerSelf: LoggerSelfService,
    @SkipSelf() private loggerSkipSelf: LoggerSkipSelfService
  ) {
    if (this.logger && this.loggerSelf) {
      this.logger.log('LoggerOptional injected successfully.')
    }
    if (this.loggerSelf) {
      // Different instance than in ResolutionModifiersModule
      this.loggerSelf.prefix = 'ResolutionModifiersComponent';
      this.loggerSelf.log('LoggerSelf injected successfully.');
    }
    if (this.loggerSkipSelf) {
      this.loggerSkipSelf.log('LoggerSkipSelf injected successfully.');
    }
  }
}
