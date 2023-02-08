import { InjectionToken } from '@angular/core';

export interface AppConfig {
  experimentalEnabled: boolean
}

/*
* Angular uses Injector guy for creating instances of the services which we're
* injecting somewhere. For that, it's using some Map() container where the data
* are stored as {key; value;} where key is Class Reference and value is the
* instance which was created. That works fine for classical services. But if we
* got some external object, config, etc. we cannot reference non-class object.
* In this case InjectionToken comes to help, and he creates the KEY for us, so
* the instance will be stored in this container.
* Then we can inject the token like this (for example):
* constructor(@Inject(APP_CONFIG) private conf: AppConfig) {...}
* */
// After using the second param (options) we can use it somewhere in a constructor
export const APP_CONFIG = new InjectionToken<AppConfig>('app-config', {
  providedIn: 'root',
  factory: () => ({
    experimentalEnabled:  true
  })
});
