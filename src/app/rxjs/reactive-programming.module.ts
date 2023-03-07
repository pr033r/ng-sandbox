import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveProgrammingComponent } from './reactive-programming.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [ReactiveProgrammingComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    ReactiveProgrammingComponent
  ]
})
export class ReactiveProgrammingModule {}
