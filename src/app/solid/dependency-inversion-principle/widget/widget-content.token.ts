import { InjectionToken } from '@angular/core';
import { IReloadable } from './IWidgetContent';
export const RELOADABLE_CONTENT = new InjectionToken<IReloadable>(
  'reloadable-content'
);
