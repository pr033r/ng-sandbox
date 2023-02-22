import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { timer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

// some config stuff for the user of our 'library'
// ideally have it the separate file
export interface PollingConfig {
  interval: number;
}
export const INTERVAL = new InjectionToken<number>('interval');

@Injectable()
export class PollingService {
  // shareReply() shares the latest value from the stream to the new subscriber
  public polling$ = timer(0, this.interval || 1000).pipe(shareReplay());

  constructor(@Optional() @Inject(INTERVAL) private interval: number) {
  }
}
