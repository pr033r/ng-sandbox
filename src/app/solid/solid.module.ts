import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SingleResponsibilityComponent } from './single-responsibility/single-responsibility.component';
import { WidgetComponent } from './single-responsibility/widget.component';
import { MaterialModule } from '../material.module';
import { VelocityContentComponent } from './open-closed-principle/widget/velocity-content.component';
import { WeatherContentComponent } from './open-closed-principle/widget/weather-content.component';
import { WidgetOpenClosedPrincipleComponent } from './open-closed-principle/widget/widget-open-closed-principle.component';
import { MainOpenClosedComponent } from './open-closed-principle/main-open-closed.component';
import { LiskovPrincipleComponent } from './liskov-substitution-principle/liskov-principle.component';
import { LiskovVelocityContentComponent } from './liskov-substitution-principle/widget/liskov-velocity-content.component';
import { LiskovWeatherContentComponent } from './liskov-substitution-principle/widget/liskov-weather-content.component';
import { WidgetBaseDirective } from './liskov-substitution-principle/widget/widget-base.directive';
import { WidgetComponentComponent } from './liskov-substitution-principle/widget/widget-component.component';

@NgModule({
  declarations: [
    SingleResponsibilityComponent,
    WidgetComponent,
    VelocityContentComponent,
    WeatherContentComponent,
    WidgetOpenClosedPrincipleComponent,
    MainOpenClosedComponent,
    LiskovPrincipleComponent,
    LiskovVelocityContentComponent,
    LiskovWeatherContentComponent,
    WidgetBaseDirective,
    WidgetComponentComponent,
  ],
  exports: [SingleResponsibilityComponent, MainOpenClosedComponent],
  imports: [BrowserModule, MaterialModule],
})
export class SolidModule {}
