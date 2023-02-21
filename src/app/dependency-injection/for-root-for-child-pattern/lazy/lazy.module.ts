import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { PollingModule } from '../polling/polling.module';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule, PollingModule],
})
export class LazyModule {}
