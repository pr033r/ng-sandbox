import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectFunctionComponent } from './inject-function.component';
import { BaseWidgetDirective } from './base-widget.directive';
import { ExtendedWidgetComponent } from './extended-widget.component';

@NgModule({
  declarations: [
    InjectFunctionComponent,
    BaseWidgetDirective,
    ExtendedWidgetComponent,
  ],
  imports: [CommonModule],
  exports: [InjectFunctionComponent],
})
export class InjectFunctionModule {}
