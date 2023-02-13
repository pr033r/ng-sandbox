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
import { VelocityContentInterfaceComponent } from './interface-segregation-principle/widget/velocity-content-interface.component';
import { WeatherContentInterfaceComponent } from './interface-segregation-principle/widget/weather-content-interface.component';
import { WidgetBaseInterfaceDirective } from './interface-segregation-principle/widget/widget-base-interface.directive';
import { WidgetInterfaceComponent } from './interface-segregation-principle/widget/widget-interface.component';
import { InterfaceSegregationComponent } from './interface-segregation-principle/interface-segregation.component';
import { VelocityContentDependencyComponent } from './dependency-inversion-principle/widget/velocity-content-dependency.component';
import { WidgetBaseDependencyDirective } from './dependency-inversion-principle/widget/widget-base-dependency.directive';
import { WeatherContentDependencyComponent } from './dependency-inversion-principle/widget/weather-content-dependency.component';
import { WidgetDependencyComponent } from './dependency-inversion-principle/widget/widget-dependency.component';
import { DependencyInversionPrincipleComponent } from './dependency-inversion-principle/dependency-inversion-principle.component';
import { SolidPrinciplesComponent } from './solid-principles.component';

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
    VelocityContentInterfaceComponent,
    WeatherContentInterfaceComponent,
    WidgetBaseInterfaceDirective,
    WidgetInterfaceComponent,
    InterfaceSegregationComponent,
    VelocityContentDependencyComponent,
    WidgetBaseDependencyDirective,
    WeatherContentDependencyComponent,
    WidgetDependencyComponent,
    DependencyInversionPrincipleComponent,
    SolidPrinciplesComponent,
  ],
  exports: [
    SolidPrinciplesComponent
  ],
  imports: [BrowserModule, MaterialModule],
})
export class SolidModule {}
