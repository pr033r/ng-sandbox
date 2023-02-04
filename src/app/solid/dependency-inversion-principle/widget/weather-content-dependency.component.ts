import { Component } from '@angular/core';
import { RELOADABLE_CONTENT } from './widget-content.token';
import { IReloadable } from './IWidgetContent';
import { IWidgetContent } from '../../interface-segregation-principle/widget/IWidgetContent';

@Component({
  selector: 'ng-sandbox-weather-content-dependency',
  template: `
    <h5>Currently</h5>
    <section class="widget-content">
      <mat-icon class="widget-icon">wb_sunny</mat-icon>
      <div class="value">+25</div>
    </section>
  `,
  styleUrls: ['./widget-content.css'],
  providers: [
    { provide: RELOADABLE_CONTENT, useExisting: WeatherContentDependencyComponent },
  ],
})
export class WeatherContentDependencyComponent implements IWidgetContent, IReloadable {
  id = 'random-string';
  isLoading = false;
  reload() {
    console.log('...reloading is happening...');
  }
}
