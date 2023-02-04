import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-dependency-inversion-principle',
  template: `
    <mat-toolbar color="primary">
      <span>My App</span>
    </mat-toolbar>
    <main class="content">
      <ng-sandbox-widget-dependency title="Weather">
        <ng-sandbox-weather-content-dependency></ng-sandbox-weather-content-dependency>
      </ng-sandbox-widget-dependency>
      <ng-sandbox-widget-dependency title="Velocity">
        <ng-sandbox-velocity-content-dependency></ng-sandbox-velocity-content-dependency>
      </ng-sandbox-widget-dependency>
      <ng-sandbox-widget-dependency title="Anything">
        <p>Any content</p>
      </ng-sandbox-widget-dependency>
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
    `,
  ],
})
export class DependencyInversionPrincipleComponent {}
