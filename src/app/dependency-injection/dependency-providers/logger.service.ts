import { Injectable } from '@angular/core';
import { ILogger } from './ILogger';

@Injectable({
  providedIn: 'root'
  // @Injectable: root -- we're providing it in Root Injector, so 'useClass'
  // will be applied in the whole application, until we break the rule
  // with 'useClass' somewhere in the child (for example as we do in the
  // DependencyProvidersComponent)
  // useClass: ExperimentalLoggerService
  // ...
  // useExisting: ExperimentalLoggerService (if we want to use already created
  // instance, and we prefer tree-shakable service)
})
export class LoggerService implements ILogger {
  prefix = 'root';

  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
