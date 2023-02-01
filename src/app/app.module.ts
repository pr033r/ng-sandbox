import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SolidModule } from './solid/solid.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    MaterialModule,
    SolidModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
