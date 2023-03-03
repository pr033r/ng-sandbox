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
import { InitializerModule } from './initializer.module';
import { HttpClientModule } from '@angular/common/http';

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
    RouterProvidersModule,
    HttpClientModule,
    InitializerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
