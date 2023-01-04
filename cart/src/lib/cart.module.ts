import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { UiModule } from '@ng-sandbox/ui';

@NgModule({
  imports: [
    CommonModule,
    UiModule
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule {
}
        