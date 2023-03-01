import { Component, forwardRef } from '@angular/core';
import { WIDGET } from '../widget.token';
import { Widget } from '../widget.interface';

// FORWARD REF - USE CASE 1
// New re-usable use case, BUT with classical 'useExisting: MyComponent' it has
// an error: "TS2449: Class 'MyComponent' used before its declaration."
// Solution -> use forwardRef. It's also correctly used in build bundle file!
// Reason is, that in time we declare this constant, we didn't declare our class yet.
// Ideally have this in the separate file
const WIDGET_PROVIDER = {
  provide: WIDGET,
  useExisting: forwardRef(() => VelocityWidgetForwardRefComponent),
};

@Component({
  selector: 'ng-sandbox-velocity-widget-forward-ref',
  templateUrl: './velocity-widget-forward-ref.component.html',
  styleUrls: ['./velocity-widget-forward-ref.component.css'],
  providers: [
    WIDGET_PROVIDER,

    // Old Use Case - but not re-usable
    // {
    //   provide: WIDGET,
    //   useExisting: VelocityWidgetForwardRefComponent,
    // }
  ],
})
export class VelocityWidgetForwardRefComponent implements Widget {
  isRefreshing = false;

  load() {
    console.log('Load data from JIRA API... ');
  }
  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
