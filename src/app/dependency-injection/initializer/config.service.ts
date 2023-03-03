import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, of } from 'rxjs';

interface Endpoints {
  api: string;
  licenseCheck: string;
}

const MOCK_DATA: Endpoints = {
  api: 'http://localhost:3000/api/',
  licenseCheck: 'http://localhost:3000/identity',
};

// Topic: APP_INITIALIZER for Dependency Injection
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // BehaviorSubject because it has always some value, by default here 'null'
  private endpoints = new BehaviorSubject<Endpoints | null>(null);
  readonly api$ = this.endpoints.asObservable().pipe(
    filter((endpoints) => !!endpoints),
    map((endpoints) => endpoints?.api)
  );

  fetchEndpoints() {
    of(MOCK_DATA).subscribe({
      // if it succeeds, call next(...)
      next: (endpoints) => this.endpoints.next(endpoints),
      error: () => this.endpoints.next({api: 'http://fallback', licenseCheck: 'http://fallback'})
    });
  }
}
