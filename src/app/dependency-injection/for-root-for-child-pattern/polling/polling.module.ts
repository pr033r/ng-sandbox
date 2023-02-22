import { ModuleWithProviders, NgModule } from '@angular/core';
import { PollingComponent } from './polling.component';
import { INTERVAL, PollingConfig, PollingService } from './polling.service';

@NgModule({
  declarations: [PollingComponent],
  imports: [],
  exports: [PollingComponent],
  // providers: [PollingService]
})
export class PollingModule {

  // before 'providedIn' was used in Angular. With it, we don't need to use
  // forRoot & forChild pattern anymore - but it's also useful for other features like
  // external configurations and managing InjectionTokens
  // forRoot is just a name-convention, it could have the name of whatever
  static forRoot(): ModuleWithProviders<PollingModule> {
    return {
      // so provide PollingService same instance inside the all inherited modules
      ngModule: PollingModule,
      providers: [PollingService]
    }
  }
  static forChild(config: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config.interval || 2000
        }
      ]
    }
  }
  static withConfig(config?: PollingConfig): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config?.interval || 2000
        }
      ]
    }
  }
}
