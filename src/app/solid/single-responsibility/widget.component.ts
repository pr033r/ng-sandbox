import { Component } from '@angular/core';
import { JsonExporterService } from './json-exporter.service';

@Component({
  selector: 'ng-sandbox-widget',
  template: `
    <div class="header">
      <h1>Weather</h1>
      <button mat-stroked-button (click)="onExportJson()">
        Export as JSON
      </button>
    </div>
    <mat-divider></mat-divider>
    <h2>Single Responsibility</h2>
    Normally, all the components <i>(single-responsibility.component and widget.component)</i> with the <i>json-exporter.service</i>
    would be in the one component. Somebody could say - Why not? <b>Because when we're describing an component in the one sentence
      and we use the 'and' word, it should be most probably divided into sub-components and the services.</b><br>
    <h5>Currently</h5>
    <section class="weather-widget">
      <mat-icon class="widget-icon">wb_sunny</mat-icon>
      <div class="value">+25</div>
    </section>
  `,
  styles: [
    `
        :host {
            display: block;
            border: #f0ebeb solid 1px;
            border-radius: 5px;
            padding: 15px;
            background-color: #fafafa;
            width: 400px;
            margin-left: 20px;
        }

        .weather-widget {
            display: block;
            text-align: center;
            position: relative;
            min-width: 190px;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .widget-icon {
            font-size: 64px;
            width: 64px;
            height: 64px;
            color: orange;
        }

        .value {
            font-size: 24px;
            opacity: 0.7;
        }
    `
  ]
})
export class WidgetComponent {
  constructor(private jsonExporter: JsonExporterService) {
  }

  onExportJson() {
    this.jsonExporter.export();
  }
}
