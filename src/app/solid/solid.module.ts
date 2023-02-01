import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SingleResponsibilityComponent } from './single-responsibility/single-responsibility.component';
import { WidgetComponent } from './single-responsibility/widget.component';
import { MaterialModule } from '../material.module';
import { VelocityContentComponent } from './open-closed-principle/widget/velocity-content.component';
import { WeatherContentComponent } from './open-closed-principle/widget/weather-content.component';
import { WidgetOpenClosedPrincipleComponent } from './open-closed-principle/widget/widget-open-closed-principle.component';
import { MainOpenClosedComponent } from './open-closed-principle/main-open-closed.component';

@NgModule({
  declarations: [
    SingleResponsibilityComponent,
    WidgetComponent,
    VelocityContentComponent,
    WeatherContentComponent,
    WidgetOpenClosedPrincipleComponent,
    MainOpenClosedComponent,
  ],
  exports: [SingleResponsibilityComponent, MainOpenClosedComponent],
  imports: [BrowserModule, MaterialModule],
})
export class SolidModule {}
