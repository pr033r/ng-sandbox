import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-liskov-principle',
  template: `
    <mat-toolbar color="primary">
      <span>My App</span>
    </mat-toolbar>
    <main class="content">
      <ng-sandbox-widget-component title="Wether">
        <ng-sandbox-liskov-weather-content></ng-sandbox-liskov-weather-content>
      </ng-sandbox-widget-component>
      <ng-sandbox-widget-component title="Velocity">
        <ng-sandbox-liskov-velocity-content></ng-sandbox-liskov-velocity-content>
      </ng-sandbox-widget-component>
      <ng-sandbox-widget-component title="Anything">
        <p>Any content</p>
      </ng-sandbox-widget-component>
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
export class LiskovPrincipleComponent {
}
