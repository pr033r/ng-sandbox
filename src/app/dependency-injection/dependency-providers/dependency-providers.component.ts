import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { APP_CONFIG, AppConfig } from './config.token';

@Component({
  selector: 'ng-sandbox-dependency-providers',
  template: ` <p>dependency-providers works!</p> `,
  styles: [],
  providers: [{
    provide: LoggerService,
    // useExisting: ExperimentalLoggerService
    useFactory: (config: AppConfig) => {
      return config.experimentalEnabled
        ? new ExperimentalLoggerService() : new LoggerService();
    },
    deps: [APP_CONFIG]
    // This isn't created by Angular Injector, so we need to use 'useValue'.
    // We're using it for non-class value (legacy code, CONFIG OBJECT, ...)
    // and with combination with InjectionToken
    // useValue: LegacyLogger
  }]
})
export class DependencyProvidersComponent implements OnInit {

  constructor(private logger: LoggerService,
              private exLogger: ExperimentalLoggerService) {
  }

  ngOnInit(): void {
    this.logger.prefix = 'DependencyProvidersComponent';
    console.log('------------------------------------------------------------');
    this.logger.log('DependencyProvidersComponent initialize');

    // false for useClass, true for useExisting
    // if we wouldn't use ExperimentalLoggerService at all, Root Injector still
    // creates the instance, so we can easily 'use already existing' instance :-)
    console.log('LoggerService and ExperimentalLoggerService instances are same: ',
      this.logger === this.exLogger);

  }
}
