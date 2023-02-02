import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ngSandboxWidgetBase]'
})
export class WidgetBaseDirective {

  @Input()
  title = '';

  onExportJson(): void {
    console.log('Export Json logic..');
  }

}
