import { Component, Injector, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { APP_CONFIG } from './config.token';
import { REPORTERS } from './reporter.token';
import { BrowserReporterService } from './browser-reporter.service';

const LoggerFactory = (injector: Injector) => {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? injector.get(ExperimentalLoggerService) : injector.get(LoggerService);
};

@Component({
  selector: 'ng-sandbox-dependency-providers',
  template: `
    <ul>
      <li>
        <b>useFactory</b> takes a factory function that is expected to return the value and also can have dependencies 
        (require instances of other providers passed as parameter)
      </li>
      See for example the <b>config:ConfigService</b> parameter required by the factory function in 
      <a href="https://stackoverflow.com/questions/37611549/how-to-pass-parameters-rendered-from-backend-to-angular2-bootstrap-method/37611614#37611614" target="_blank">
        How to pass parameters rendered from backend to angular2 bootstrap method</a>
      
      <li><b>useValue</b> is just the value that is injected as is</li>
      <li>
        <b>useClass</b> expects a type name and Angular creates an instance from the passed type and also resolves and 
        passes constructor parameters to the class if there are any
      </li>
      <li>
        <b>useExisting</b> which is like an alias for an already registered provider. The use case is to provide the same instance of a provider with different keys
      </li>
    </ul>
    I want a separate instance rather, because if we'd use 'useExisting'
    for REPORTERS Use Case, it'd use 'already existing' instances from the
    Root Module Injector (both), but here we want to provide only one
    <br>
    <pre>
      <b>useClass</b>: ExperimentalLoggerService
      // useExisting: ExperimentalLoggerService
    </pre>
    Not a best practice, because when we're adding a new deps to the array,
    we also have to add it to the factory function and with the SAME ORDER!
    And this is annoying, therefore 'Injector' comes to help:
    <pre>
      <b>useFactory</b>: (config: AppConfig, dep1: OtherDependency1, dep2: OtherDependency2) => &#x7b;
        return config.experimentalEnabled
        ? new ExperimentalLoggerService() : new LoggerService();
      &#125;,
      deps: [APP_CONFIG, OtherDependency1, OtherDependency2]
    </pre>

    <b>Better, than to use deps[...] by hand.</b><br>
    <u>NOTE</u>: Factory will return existing service
    <pre>
      const <b>LoggerFactory</b> = (injector: Injector) => &#x7b;
      return injector.get(APP_CONFIG).experimentalEnabled
        ? <b>injector</b>.get(ExperimentalLoggerService) : <b>injector</b>.get(LoggerService);
      &#125;;
      // ... In the component decorator
      useFactory: LoggerFactory,
      deps: [<b>Injector</b>],
      multi: true
    </pre><br>
    This isn't created by Angular Injector, so we need to use 'useValue'.
    We're using it for non-class value (legacy code, CONFIG OBJECT, ...)
    and with combination with InjectionToken
    <pre>
      // Some very old legacy logger which is event not class, but we have to use it.
      // It cannot be used for 'useClass' or 'useExisting', because Angular injector
      // simply doesn't know (didn't create an instance) about it - it doesn't have
      // any Angular @Injectable decorator.
      // So, for this case, we have to use 'useValue'
      export const <u>LegacyLogger</u>: ILogger = &#x7b;
            prefix: 'LegacyLogger',
            log(message: string) &#x7b;
          console.log(\`$ &#x7b; this.prefix &#125;: $ &#x7b; message &#125;\`);
        &#125;
      &#125;;
      // ... In the component decorator
      <b>useValue</b>: <u>LegacyLogger</u>
    </pre><br>

    Configuring 'Multi Providers' on component level - other than in module.
    Just to provide providers which we need to this certain component.
    If we'll remove it, there will be resolved reporters from Root Module Injector
    <pre>
      // reporter.token.ts
      export const <b>REPORTERS</b> = new InjectionToken&lt;Reporter&gt;('reporters');
      
      // dependency-providers.module.ts
      providers: [
        // This is not tree-shakable way, so let's set up the 'options' param in the
        // InjectionToken, so it could be used somewhere in the constructor
        // &#x7b;
        //   provide: APP_CONFIG,
        //   useValue: ...
        // &#125;
    
        // There's already existing instance because of 'provideIn:root' in the service
        &#x7b; provide: REPORTERS, useExisting: BrowserReporterService, <b>multi: true</b> &#125;,
        &#x7b; provide: REPORTERS, useExisting: EngagingReporterService, <b>multi: true</b> &#125;
      ]
      
      // ... In the component decorator
      provide: <b>REPORTERS</b>,
      useExisting: BrowserReporterService,
      <b>multi: true</b>
    </pre>
  `,
  styles: [],
  providers: [
    {
      provide: LoggerService,

      // I want a separate instance rather, because if we'd use 'useExisting'
      // for REPORTERS Use Case, it'd use 'already existing' instances from the
      // Root Module Injector (both), but here we want to provide only one
      useClass: ExperimentalLoggerService
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
      // NOTE: Factory will return existing service
      // useFactory: LoggerFactory,
      // deps: [Injector],
      // multi: true

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
    {
      // Check the .MODULE file
      // Configuring 'Multi Providers' on component level - other than in module.
      // Just to provide providers which we need to this certain component.
      // If we'll remove it, there will be resolved reporters from Root Module Injector
      provide: REPORTERS,
      useExisting: BrowserReporterService,
      multi: true
    }
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
