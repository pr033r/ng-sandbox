import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ConfigService } from './dependency-injection/initializer/config.service';

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
          config.
        }
      },
      deps: [ConfigService]
    },
  ],
})
export class InitializerModule {}
