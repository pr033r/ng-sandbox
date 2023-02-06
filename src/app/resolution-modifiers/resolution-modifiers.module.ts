import { NgModule, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolutionModifiersComponent } from './resolution-modifiers.component';
import { LoggerSelfService } from './logger-self.service';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';

@NgModule({
  declarations: [ResolutionModifiersComponent, ParentDirective, ChildDirective],
  imports: [CommonModule],
  exports: [ResolutionModifiersComponent, ParentDirective, ChildDirective]
})
export class ResolutionModifiersModule {
  constructor(@Self() private loggerSelf: LoggerSelfService) {
    if (loggerSelf) {
      // Different instance than in the ResolutionModifiersComponent
      loggerSelf.log('LoggerSelf called from Module.');
    }
  }
}
