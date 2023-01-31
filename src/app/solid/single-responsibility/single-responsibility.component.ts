import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-single-responsibility',
  template: `
    <mat-toolbar color="primary">
      <span>My App</span>
    </mat-toolbar>
    <main class="content">
      <ng-sandbox-widget></ng-sandbox-widget>
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
export class SingleResponsibilityComponent {
}
