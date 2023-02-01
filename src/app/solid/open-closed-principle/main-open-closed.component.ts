import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-main-open-closed',
  template: `
    <ng-sandbox-widget-open-closed-principle>

      <ng-sandbox-weather-content></ng-sandbox-weather-content>

    </ng-sandbox-widget-open-closed-principle>

    <ng-sandbox-widget-open-closed-principle>

      <ng-sandbox-velocity-content></ng-sandbox-velocity-content>

    </ng-sandbox-widget-open-closed-principle>
  `,
  styles: []
})
export class MainOpenClosedComponent {
}
