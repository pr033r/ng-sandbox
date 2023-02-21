import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootChildPatternComponent } from './root-child-pattern.component';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RootChildPatternComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [RootChildPatternComponent]
})
export class RootChildPatternModule {}
