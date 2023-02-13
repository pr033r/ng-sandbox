import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from './logger.service';
import { LoggerSelfService } from './logger-self.service';
import { LoggerSkipSelfService } from './logger-skip-self.service';

@Component({
  selector: 'ng-sandbox-resolution-modifiers',
  template: `
    Angular uses Injector guy for creating instances of the services which we're
    injecting somewhere. For that, it's using some Map() container where the data
    are stored as &#x7b;key; value;&#125; where key is Class Reference and value is the
    instance which was created. That works fine for classical services. But if we
    got some external object, config, etc. we cannot reference non-class object.
    In this case InjectionToken comes to help, and he creates the KEY for us, so
    the instance will be stored in this container.
    Then we can inject the token like this (for example): <i>constructor(@Inject(APP_CONFIG) private conf: AppConfig) &#x7b;...&#125;</i>

    <pre>
    // config.token.ts
    export interface AppConfig &#x7b;
      experimentalEnabled: boolean
    &#125;
      
    // After using the second param (options) we can use it somewhere in a constructor
    export const APP_CONFIG = new <b>InjectionToken</b>&lt;AppConfig&gt;('app-config', &#x7b;
      providedIn: 'root',
      factory: () => (&#x7b;
        experimentalEnabled:  true
      &#125;)
    &#125;);
    </pre>
      
    If we remove LoggerHostService from provides here, it will throw the error.
    Because, in the ChildDirective there's @Host() modifier, so searching for
    the provider will end up just right here - and here there's no providers!
    <pre>
      constructor(<b>@Optional() @Self()</b> private logger: LoggerHostService) &#x7b;
        if (this.logger) &#x7b;
        this.logger.prefix = 'Parent Directive';
        &#125;
      &#125;
    </pre>
  `,
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
      this.logger.log('LoggerOptional injected successfully.');
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
