import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInitializerComponent } from './app-initializer.component';

@NgModule({
  declarations: [AppInitializerComponent],
  imports: [CommonModule],
  exports: [
    AppInitializerComponent
  ]
})
export class AppInitializerModule {}
