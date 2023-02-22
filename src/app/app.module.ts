import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SolidModule } from './solid/solid.module';
import { MaterialModule } from './material.module';
import { ResolutionModifiersModule } from './dependency-injection/resolution-modifiers/resolution-modifiers.module';
import { DependencyProvidersModule } from './dependency-injection/dependency-providers/dependency-providers.module';
import { ViewProvidersModule } from './dependency-injection/view-providers/view-providers.module';
import { RootChildPatternModule } from './dependency-injection/for-root-for-child-pattern/root-child-pattern.module';
import { ForwardRefModule } from './dependency-injection/forward-ref/forward-ref.module';

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
    ForwardRefModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
