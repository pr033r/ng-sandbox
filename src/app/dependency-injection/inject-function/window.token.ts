import { inject, InjectFlags, InjectionToken, PLATFORM_ID } from '@angular/core';

// Use case for using inject() - wherever we need to inject some external
// token or service, we can inject it through the inject function
// The 'providedIn' here is for alternative to defining a providing the token
// in the module like providers: [ {provide: WINDOW, useClass: ...} ]
export const WINDOW = new InjectionToken<Window>('global Window object', {
  providedIn: 'root',
  factory: () => {
    // DEPRECATED: as second param you can provide resolution modifiers if you want
    const platform = inject(PLATFORM_ID, InjectFlags.Optional);
    return platform === 'browser' ? window : {} as Window;
  }
});
