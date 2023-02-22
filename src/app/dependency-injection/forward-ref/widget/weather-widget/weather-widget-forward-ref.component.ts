import { Component } from '@angular/core';
import { WIDGET } from '../widget.token';
import { Widget } from '../widget.interface';

@Component({
  selector: 'ng-sandbox-weather-widget-forward-ref',
  templateUrl: './weather-widget-forward-ref.component.html',
  styleUrls: ['./weather-widget-forward-ref.component.css'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WeatherWidgetForwardRefComponent,
    },
  ],
})
export class WeatherWidgetForwardRefComponent implements Widget {
  isLoading = false;
  load() {
    console.log('Load data from WEATHER API... ');
  }
  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
