import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PollingService {
  // shareReply() shares the latest value from the stream to the new subscriber
  public polling$ = timer(0, 1000).pipe(shareReplay());
}
