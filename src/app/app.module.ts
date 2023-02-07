import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SolidModule } from './solid/solid.module';
import { MaterialModule } from './material.module';
import { ResolutionModifiersModule } from './dependency-injection/resolution-modifiers/resolution-modifiers.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    MaterialModule,
    SolidModule,
    ResolutionModifiersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
