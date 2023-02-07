import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyProvidersComponent } from './dependency-providers.component';

@NgModule({
  declarations: [DependencyProvidersComponent],
  imports: [CommonModule],
  exports: [DependencyProvidersComponent]
})
export class DependencyProvidersModule {}
