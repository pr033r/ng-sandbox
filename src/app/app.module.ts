import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from '@ng-sandbox/cart';
import { UiModule } from '@ng-sandbox/ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ShopComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot([
        { path: '/', component: ShopComponent },
        { path: 'cart', component: CartComponent }
      ]
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
