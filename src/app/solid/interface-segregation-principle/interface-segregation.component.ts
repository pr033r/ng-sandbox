import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-interface-segregation',
  template: `
    <mat-toolbar color="primary">
      <span>My App</span>
    </mat-toolbar>
    <main class="content">
      <ng-sandbox-widget-interface title="Weather">
        <ng-sandbox-weather-content-interface></ng-sandbox-weather-content-interface>
      </ng-sandbox-widget-interface>
      <ng-sandbox-widget-interface title="Velocity">
        <ng-sandbox-velocity-content-interface></ng-sandbox-velocity-content-interface>
      </ng-sandbox-widget-interface>
      <ng-sandbox-widget-interface title="Anything">
        <p>Any content</p>
      </ng-sandbox-widget-interface>
    </main>
  `,
  styles: [
    `
        .content {
            background-color: #fff;
            padding: 2rem;
            height: calc(100vh - 64px);
            display: flex;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
        }
    `
  ]
})
export class InterfaceSegregationComponent {
}
