import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VelocityWidgetForwardRefComponent } from './velocity-widget/velocity-widget-forward-ref.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { WeatherWidgetForwardRefComponent } from './weather-widget/weather-widget-forward-ref.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { WidgetWrapperForwardRefComponent } from './widget-wrapper/widget-wrapper-forward-ref.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    VelocityWidgetForwardRefComponent,
    WeatherWidgetForwardRefComponent,
    WidgetWrapperForwardRefComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  exports: [
    VelocityWidgetForwardRefComponent,
    WeatherWidgetForwardRefComponent,
    WidgetWrapperForwardRefComponent,
  ]
})
export class WidgetModule {}
