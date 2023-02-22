import { Component, forwardRef } from '@angular/core';
import { WIDGET } from '../widget.token';
import { Widget } from '../widget.interface';

// FORWARD REF - USE CASE 1
// New re-usable use case, BUT with classical 'useExisting: MyComponent' it has
// an error: "TS2449: Class 'MyComponent' used before its declaration."
// Solution -> use forwardRef. It's also correctly used in build bundle file!
// Reason is, that in time we declare this constant, we didn't declare our class yet.
const WIDGET_PROVIDER = {
  provide: WIDGET,
  useExisting: forwardRef(() => WeatherWidgetForwardRefComponent)
};

@Component({
  selector: 'ng-sandbox-weather-widget-forward-ref',
  templateUrl: './weather-widget-forward-ref.component.html',
  styleUrls: ['./weather-widget-forward-ref.component.css'],
  providers: [
    WIDGET_PROVIDER

    // Old Use Case - but not re-usable
    //   {
    //     provide: WIDGET,
    //     useExisting: WeatherWidgetForwardRefComponent
    //   }
  ]
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
