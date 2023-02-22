import { Component } from '@angular/core';
import { WIDGET } from '../widget.token';
import { Widget } from '../widget.interface';

@Component({
  selector: 'ng-sandbox-velocity-widget-forward-ref',
  templateUrl: './velocity-widget-forward-ref.component.html',
  styleUrls: ['./velocity-widget-forward-ref.component.css'],
  providers: [
    {
      provide: WIDGET,
      useExisting: VelocityWidgetForwardRefComponent,
    },
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
