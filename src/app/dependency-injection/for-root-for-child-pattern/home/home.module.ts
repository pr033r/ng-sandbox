import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollingModule } from '../polling/polling.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,

    // because it's without using .forRoot(), then only the things inside the
    // declarations[] will be imported - not the service!
    PollingModule.withConfig()
  ]
})
export class HomeModule {
}
