import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SolidModule } from './solid/solid.module';
import { MaterialModule } from './material.module';
import { ResolutionModifiersModule } from './dependency-injection/resolution-modifiers/resolution-modifiers.module';
import { DependencyProvidersModule } from './dependency-injection/dependency-providers/dependency-providers.module';
import { ViewProvidersModule } from './dependency-injection/view-providers/view-providers.module';

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
    ViewProvidersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
