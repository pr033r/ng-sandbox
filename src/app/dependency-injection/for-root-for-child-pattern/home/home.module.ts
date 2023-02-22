import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollingModule } from '../polling/polling.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,

    // if we'll use forRoot, it will provide services in provided array
    // and also the declarations array. If you do not want to import declarations
    // you can create another NgModule without declarations and return it from static method.
    PollingModule.withConfig()
  ]
})
export class HomeModule {
}
