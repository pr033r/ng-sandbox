import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[ngSandboxWidgetBaseDependency]'
})
export class WidgetBaseDependencyDirective {

  @Input()
  title = '';

  onExportJson() {
    console.log('Export Json logic..');
  }

}
