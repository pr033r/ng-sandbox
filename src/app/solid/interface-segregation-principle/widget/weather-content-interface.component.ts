import { Component } from '@angular/core';
import { IReloadable, IWidgetContent } from './IWidgetContent';

@Component({
  selector: 'ng-sandbox-weather-content-interface',
  template: `
    <h5>Currently</h5>
    <section class="widget-content">
      <mat-icon class="widget-icon">wb_sunny</mat-icon>
      <div class="value">+25</div>
    </section>
  `,
  styleUrls: ['./widget-content.css'],
})
export class WeatherContentInterfaceComponent implements IWidgetContent, IReloadable {
  id = '';
  loading = false;
  reload(): void {
    console.log('... do polling ....');
  }
}
