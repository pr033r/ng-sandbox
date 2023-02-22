import { Component, ContentChild, OnInit } from '@angular/core';
import { WIDGET } from '../widget.token';
import { Widget } from '../widget.interface';

@Component({
  selector: 'ng-sandbox-widget-wrapper-forward-ref',
  templateUrl: './widget-wrapper-forward-ref.component.html',
  styleUrls: ['./widget-wrapper-forward-ref.component.css'],
})
export class WidgetWrapperForwardRefComponent implements OnInit {
  @ContentChild(WIDGET, { static: true })
  widget!: Widget;

  ngOnInit() {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }
}
