import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ConfigService } from './dependency-injection/initializer/config.service';
import { take } from 'rxjs';

@NgModule({
  providers: [
    {
      // return value for APP_INITIALIZER must be function
      provide: APP_INITIALIZER,
      multi: true, // must be also
      useFactory: (config: ConfigService) => {
        console.log('app initialization...');

        // If we'd return Observable or Promise, Angular will wait until it will
        // be resolved/completed, then it'll proceed with bootstrapping the module
        // through .bootstrapModule(AppModule) in main.ts. So we have to resolve it
        // via for example pipe(take(1))
        // return interval(1000).pipe(take(1));

        return () => {
          // bootstrap process will be blocked until the 'fetch' data will be completed
          config.fetchEndpoints();

          // bootstrap will be blocked until we get the very first value from the stream
          return config.api$.pipe((take(1)));
        }
      },
      deps: [ConfigService]
    },
  ],
})
export class InitializerModule {}
