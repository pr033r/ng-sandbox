import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-dependency-inversion-principle',
  template: `
    <ng-sandbox-widget-dependency title="Weather">
      <ng-sandbox-weather-content-dependency></ng-sandbox-weather-content-dependency>
    </ng-sandbox-widget-dependency>
    <ng-sandbox-widget-dependency title="Velocity">
      <ng-sandbox-velocity-content-dependency></ng-sandbox-velocity-content-dependency>
    </ng-sandbox-widget-dependency>
    <ng-sandbox-widget-dependency title="Anything">
      <p>Any content</p>
    </ng-sandbox-widget-dependency>
  `,
  styles: [``]
})
export class DependencyInversionPrincipleComponent {
}
