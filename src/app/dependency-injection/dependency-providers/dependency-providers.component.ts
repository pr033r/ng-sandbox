import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'ng-sandbox-dependency-providers',
  template: ` <p>dependency-providers works!</p> `,
  styles: []
})
export class DependencyProvidersComponent implements OnInit {

  constructor(private logger: LoggerService) {
  }

  ngOnInit(): void {
    this.logger.prefix = 'DependencyProvidersComponent';
    this.logger.log('DependencyProvidersComponent initialize');
  }
}
