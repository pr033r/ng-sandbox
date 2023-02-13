import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerySlideComponent } from './gallery-slide.component';
import { GalleryComponent } from './gallery.component';
import { ViewProvidersComponent } from './view-providers.component';

@NgModule({
  declarations: [
    GallerySlideComponent,
    GalleryComponent,
    ViewProvidersComponent
  ],
  imports: [CommonModule],
  exports: [
    ViewProvidersComponent
  ]
})
export class ViewProvidersModule {}
