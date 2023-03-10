import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-solid-principles',
  template: `
    <div>
      <h2>Single Responsibility</h2>
      <div>
        <ul>
          <li>A class should have one, and only, reason to change.</li>
          <li>Normally, all the components <i>(single-responsibility.component and widget.component)</i> with the <i>json-exporter.service</i>
            would be in the one component. Somebody could say - Why not? <b>Because when we're describing an component
              in
              the one sentence
              and we use the 'and' word, it should be most probably divided into sub-components and the services.</b>
          </li>
        </ul>
      </div>
      <ng-sandbox-single-responsibility></ng-sandbox-single-responsibility>
    </div>
    <br>
    <mat-divider></mat-divider>
    <div>
      <h2>Open/Closed Principle</h2>
      <p>Software entities should be open for extensions, closed for modifications.</p>
      <ng-sandbox-main-open-closed></ng-sandbox-main-open-closed>
    </div>
    <br>
    <mat-divider></mat-divider>
    <div>
      <h2>Barbara Liskov Substitution Principle</h2>
      <p>
        Functions that use pointers of reference to base classes must be able to use objects of derived classes
        without
        knowing it.<br>
        If we have parent class T and child class S, where S extends T, then Liskov substitution principle means that
        objects of the T
        class could be <b>replaced</b> by objects of the S class.
      </p>
    </div>
    <br>
    <mat-divider></mat-divider>
    <div>
      <h2>Interface Segregation Service</h2>
      <p>
        Many client-specific interfaces are better than one general-purpose interface.
      </p>
      <table>
        <tr>
          <td>
            <b>Rather then this:</b>
            <pre>
            export interface WidgetContent &#x7b;
              id: string;
              loading: string;
              reload(): void;
            &#125;
          </pre>
          </td>
          <td>
            <b>Use this instead:</b>
            <pre>
            export interface IWidgetContent &#x7b;
              id: string;
            &#125;

            export interface IReloadable &#x7b;
              reload: () => any;
              isLoading: boolean;
            &#125;
          </pre>
          </td>
        </tr>
      </table>
    </div>
    <mat-divider></mat-divider>
    <div>
      <h2>Dependency Inversion Principle</h2>
      <p>
        High-level modules should not depend on low-level modules. Both should depend on <b>abstraction</b>.
      </p>
      <ng-sandbox-dependency-inversion-principle></ng-sandbox-dependency-inversion-principle>
    </div>
  `,
  styles: []
})
export class SolidPrinciplesComponent {
}
