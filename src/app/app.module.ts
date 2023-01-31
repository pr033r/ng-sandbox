import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { SolidModule } from './solid/solid.module';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    SolidModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
