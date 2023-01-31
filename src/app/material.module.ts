import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class MaterialModule {
}
