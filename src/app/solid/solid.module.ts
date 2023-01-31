import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SingleResponsibilityComponent } from './single-responsibility/single-responsibility.component';
import { WidgetComponent } from './single-responsibility/widget.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    SingleResponsibilityComponent,
    WidgetComponent
  ],
  exports: [
    SingleResponsibilityComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ]
})
export class SolidModule {
}
