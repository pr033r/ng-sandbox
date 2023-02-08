import { Component, Injector, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { APP_CONFIG } from './config.token';
import { LegacyLogger } from './logger.legacy';

const LoggerFactory = (injector: Injector) => {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? injector.get(ExperimentalLoggerService) : injector.get(LoggerService);
};

@Component({
  selector: 'ng-sandbox-dependency-providers',
  template: ` <p>dependency-providers works!</p> `,
  styles: [],
  providers: [
    {
      provide: LoggerService,
      // useExisting: ExperimentalLoggerService

      // Not a best practice, because when we're adding a new deps to the array,
      // we also have to add it to the factory function and with the SAME ORDER!
      // And this is annoying, therefore 'Injector' comes to help
      // useFactory: (config: AppConfig) => {
      //   return config.experimentalEnabled
      //     ? new ExperimentalLoggerService() : new LoggerService();
      // },
      // deps: [APP_CONFIG]

      // Better, than to use deps[...] by hand
      useFactory: LoggerFactory,
      deps: [Injector],
      multi: true

      // This isn't created by Angular Injector, so we need to use 'useValue'.
      // We're using it for non-class value (legacy code, CONFIG OBJECT, ...)
      // and with combination with InjectionToken
      // useValue: LegacyLogger
    },
    // {
    //   provide: LoggerService,
    //   useValue: LegacyLogger,
    //   multi: true
    // }
  ]
})
export class DependencyProvidersComponent implements OnInit {

  constructor(private logger: LoggerService,
              private exLogger: ExperimentalLoggerService) {
  }

  ngOnInit(): void {
    // this.logger.prefix = 'DependencyProvidersComponent';
    console.log('------------------------------------------------------------');
    this.logger.log('DependencyProvidersComponent initialize');
    console.log('What is logger: ', this.logger);

    // false for useClass, true for useExisting
    // if we wouldn't use ExperimentalLoggerService at all, Root Injector still
    // creates the instance, so we can easily 'use already existing' instance :-)
    console.log('LoggerService and ExperimentalLoggerService instances are same: ',
      this.logger === this.exLogger);

  }
}
