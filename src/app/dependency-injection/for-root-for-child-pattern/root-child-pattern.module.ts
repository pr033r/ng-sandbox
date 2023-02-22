import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootChildPatternComponent } from './root-child-pattern.component';
import { MaterialModule } from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RootChildPatternRoutingModule } from './root-child-pattern-routing.module';

@NgModule({
  declarations: [RootChildPatternComponent],
  imports: [CommonModule, MaterialModule, RouterTestingModule, RootChildPatternRoutingModule],
  exports: [RootChildPatternComponent]
})
export class RootChildPatternModule {}
