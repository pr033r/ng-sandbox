import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyProvidersComponent } from './dependency-providers.component';
import { REPORTERS } from './reporter.token';
import { BrowserReporterService } from './browser-reporter.service';
import { EngagingReporterService } from './engaging-reporter.service';

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

    // There's already existing instance because of 'provideIn:root' in the service
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporterService, multi: true }
  ]
})
export class DependencyProvidersModule {
}
