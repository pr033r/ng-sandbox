import { Component, OnInit } from '@angular/core';
import { ConfigService } from './dependency-injection/initializer/config.service';
import { switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ng-sandbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-sandbox';
  constructor(private http: HttpClient, private config: ConfigService) {
  }

  ngOnInit() {
    console.log('AppComponent init.');

    // .subscribe() for execute the operator - or use 'async' is even better
    // Old approach without using getter in ConfigService
    // this.config.api$.pipe(
    //   switchMap(url => this.http.get(`${url}/test`))
    // ).subscribe();

    // Reactive approach which should be followed
    this.http.get(`${this.config.api}/test`).subscribe();
  }
}
