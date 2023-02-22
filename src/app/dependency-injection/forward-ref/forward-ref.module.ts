import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForwardRefComponent } from './forward-ref.component';
import { WidgetModule } from './widget/widget.module';

@NgModule({
  declarations: [ForwardRefComponent],
  imports: [CommonModule, WidgetModule],
  exports: [ForwardRefComponent]
})
export class ForwardRefModule {}
