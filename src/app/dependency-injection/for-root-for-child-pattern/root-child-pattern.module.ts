import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootChildPatternComponent } from './root-child-pattern.component';
import { MaterialModule } from '../../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RootChildPatternRoutingModule } from './root-child-pattern-routing.module';
import { PollingModule } from './polling/polling.module';

@NgModule({
  declarations: [RootChildPatternComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterTestingModule,
    RootChildPatternRoutingModule,

    // provided only what is mentioned in our forRoot() method (in our case
    // it's only service) and because it's in the main module, it will be
    // always singleton
    // PollingModule.forRoot()
    // So, this withConfig will have default value of the interval
    PollingModule.withConfig()
  ],
  exports: [RootChildPatternComponent]
})
export class RootChildPatternModule {}
