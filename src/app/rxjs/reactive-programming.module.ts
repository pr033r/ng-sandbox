import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveProgrammingComponent } from './reactive-programming.component';

@NgModule({
  declarations: [ReactiveProgrammingComponent],
  imports: [CommonModule],
  exports: [
    ReactiveProgrammingComponent
  ]
})
export class ReactiveProgrammingModule {}
