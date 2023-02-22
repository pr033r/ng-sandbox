import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-root-child-pattern',
  template: ` 
    <h1>For Root &amp; For Child pattern</h1>
    <main>
      <router-outlet></router-outlet>
      <button mat-raised-button color="primary" routerLink="/lazy">Lazy Load</button>
    </main>
  `,
  styles: [],
})
export class RootChildPatternComponent {}
