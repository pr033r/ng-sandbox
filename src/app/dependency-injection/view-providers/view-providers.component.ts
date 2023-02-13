import { Component } from '@angular/core';
import { DefaultLoggerService } from './default-logger.service';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'ng-sandbox-view-providers',
  template: `
    <ng-sandbox-gallery>
      <ng-sandbox-gallery-slide></ng-sandbox-gallery-slide>
      <ng-sandbox-gallery-slide></ng-sandbox-gallery-slide>
    </ng-sandbox-gallery>
  `,
  styles: [],
  providers: [{
    provide: GalleryLoggerService,
    useExisting: DefaultLoggerService
  }]
})
export class ViewProvidersComponent {

}
