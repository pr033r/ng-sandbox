import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from './gallery-logger.service';

@Component({
  selector: 'ng-sandbox-gallery',
  template: `
    <div class="gallery-wrap">
      <h1 class="gallery-wrapper-text">Gallery</h1>
      <div class="gallery-content">
        <ng-content></ng-content>
      </div>
    </div>`,
  styles: [],
  providers: [GalleryLoggerService]
})
export class GalleryComponent implements OnInit {
  constructor(private logger: GalleryLoggerService) {
  }

  ngOnInit() {
    this.logger.log('GalleryComponent initialization...');
  }
}
