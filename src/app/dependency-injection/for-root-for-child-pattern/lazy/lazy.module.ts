import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { PollingModule } from '../polling/polling.module';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,

    // using forChild pattern we'll provide PollingService at is defined inside
    // the polling.module - which means with INTERVAL InjectionToken also
    // provided (using for external configuration)
    // PollingModule.forChild({
    //   interval: 3000
    // })
    // This withConfig will have configured value for the interval
    PollingModule.withConfig({
      interval: 3000
    })
  ]
})
export class LazyModule {
}
