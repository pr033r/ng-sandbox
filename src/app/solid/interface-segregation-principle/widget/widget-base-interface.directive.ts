import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ngSandboxWidgetBaseInterface]'
})
export class WidgetBaseInterfaceDirective {

  @Input()
  title = '';

  onExportJson() {
    console.log('Export Json logic..');
  }

}
