import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SolidModule } from './solid/solid.module';
import { MaterialModule } from './material.module';
import { ResolutionModifiersModule } from './dependency-injection/resolution-modifiers/resolution-modifiers.module';
import { DependencyProvidersModule } from './dependency-injection/dependency-providers/dependency-providers.module';
import { ViewProvidersModule } from './dependency-injection/view-providers/view-providers.module';
import { RootChildPatternModule } from './dependency-injection/for-root-for-child-pattern/root-child-pattern.module';
import { ForwardRefModule } from './dependency-injection/forward-ref/forward-ref.module';
import { InjectFunctionModule } from './dependency-injection/inject-function/inject-function.module';
import { RouterProvidersModule } from './dependency-injection/router-providers/router-providers.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    MaterialModule,
    SolidModule,
    ResolutionModifiersModule,
    DependencyProvidersModule,
    ViewProvidersModule,
    RootChildPatternModule,
    ForwardRefModule,
    InjectFunctionModule,
    RouterProvidersModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true, // must be
      useValue: () => {
        console.log('app initialization...');

        // If we'd return Observable or Promise, Angular will wait until it will
        // be resolved/completed, then it'll proceed with bootstrapping the module
        // through .bootstrapModule(AppModule) in main.ts. So we have to resolve it
        // via for example pipe(take(1))
        // return interval(1000).pipe(take(1));
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
