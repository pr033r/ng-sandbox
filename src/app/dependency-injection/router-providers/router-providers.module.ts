import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterProvidersComponent } from './router-providers.component';

@NgModule({
  declarations: [RouterProvidersComponent],
  imports: [CommonModule],
  exports: [
    RouterProvidersComponent
  ]
})
export class RouterProvidersModule {}
