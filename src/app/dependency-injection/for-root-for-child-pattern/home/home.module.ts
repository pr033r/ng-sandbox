import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollingModule } from '../polling/polling.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PollingModule],
})
export class HomeModule {}
