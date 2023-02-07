import { InjectionToken } from '@angular/core';

export interface AppConfig {
  experimentalEnabled: boolean
}

// After using the second param (options) we can use it somewhere in a constructor
export const APP_CONFIG = new InjectionToken<AppConfig>('app-config', {
  providedIn: 'root',
  factory: () => ({
    experimentalEnabled:  true
  })
});
