import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-forward-ref',
  template: `
    <ng-sandbox-widget-wrapper-forward-ref>
      <ng-sandbox-weather-widget-forward-ref></ng-sandbox-weather-widget-forward-ref>
    </ng-sandbox-widget-wrapper-forward-ref>
    <ng-sandbox-widget-wrapper-forward-ref>
      <ng-sandbox-velocity-widget-forward-ref></ng-sandbox-velocity-widget-forward-ref>
    </ng-sandbox-widget-wrapper-forward-ref>
  `,
  styles: [],
})
export class ForwardRefComponent {}
