import { Component, ContentChild, OnInit } from '@angular/core';
import { WIDGET } from '../widget.token';
import { Widget } from '../widget.interface';

@Component({
  selector: 'ng-sandbox-widget-wrapper-forward-ref',
  templateUrl: './widget-wrapper-forward-ref.component.html',
  styleUrls: ['./widget-wrapper-forward-ref.component.css'],
})
export class WidgetWrapperForwardRefComponent implements OnInit {
  // Use to get the first element or the directive matching the selector from
  // the content DOM. If the content DOM changes, and a new child matches
  // the selector, the property will be updated.
  @ContentChild(WIDGET, { static: true })
  widget!: Widget;

  ngOnInit() {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }
}
