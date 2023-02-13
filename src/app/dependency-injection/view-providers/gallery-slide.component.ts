import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'ng-sandbox-gallery-slide',
  template: ` <p>gallery-slide works!</p> `,
  styles: []
})
export class GallerySlideComponent implements OnInit {

  constructor(private logger: GalleryLoggerService) {
  }

  ngOnInit() {
    this.logger.log('GallerySlideComponent initialization...');
  }
}
