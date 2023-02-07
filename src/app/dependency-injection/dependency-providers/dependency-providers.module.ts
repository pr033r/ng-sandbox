import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyProvidersComponent } from './dependency-providers.component';
import { APP_CONFIG } from './config.token';

@NgModule({
  declarations: [DependencyProvidersComponent],
  imports: [CommonModule],
  exports: [DependencyProvidersComponent],
  providers: [
    // This is not tree-shakable way, so let's set up the 'options' param in the
    // InjectionToken, so it could be used somewhere in the constructor
    // {
    //   provide: APP_CONFIG,
    //   useValue: ...
    // }
  ]
})
export class DependencyProvidersModule {}
