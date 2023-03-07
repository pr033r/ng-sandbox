import { Component, OnInit } from '@angular/core';
import { combineLatest, map, mergeMap, Observable, Subject, take, tap, zip } from 'rxjs';

type Durum = ['flat bread', 'meat', 'sauce', 'tomato', 'cabbage'];

interface Order {
  amount: number;
  customerId: number;
}

interface Product {
  product: Durum;
  customerId: number;
}

@Component({
  selector: 'ng-sandbox-reactive-programming',
  template: `
    We can imagine Observables as a <b>water pipes</b> in the house. So for
    example if we want to drink a water, we have to turn the trigger to get a
    water from the source - .subscribe(). But we also must not to forget about
    turn it off - unsubscribe(). The whole pipe system could be represented with
    some source of data - <b>of(...), from(...)</b>, etc.
    <pre>
      <span style="color: green;">
      // It is important to note the difference between of and from when passing an array-like structure (including strings):
      </span>
      Observable.of([1, 2, 3]).subscribe(x => console.log(x));
      <span style="color: green;">
      // would print the whole array at once. On the other hand:
      </span>
      Observable.from([1, 2, 3]).subscribe(x => console.log(x));
      <span style="color: green;">
      // prints the elements 1 by 1. For strings the behaviour is the same, but at character level.
      </span>
    </pre>

    Also, when we need to filter the water from source, we have to use some
    filter - same in RxJS <b>filter(...)</b>. If we want to boil the water, also
    use another operator - <b>map(...)</b> to transform all incoming data. When
    in real life will be pipe broken or some another issue will come, it will
    break the whole pipe system. Same with Observables - once there'll be some
    issues in one operator, the whole Observable will fail and it'll jump to the
    catchError(...) <br /><br />
    <b>Side Effects</b> - to log something or do something else -
    <b>tap(...)</b> operator <br /><br />
    We can also merge different streams with merge operators -
    <b>switchMap(...), mergeMap(...), concatMap(...)</b>
    for better usage and avoid to nest-subscription hell.
    <img style="width: 60%;" src="../../assets/rxjs-1.png" />
    <br /><br /><br />

    This would happen when we won't use the switchMap, mergeMap, concatMap, etc
    - subscription hell, therefore we need to use merge operators.
    <img style="width: 40%;" src="../../assets/rxjs-2.png" />

    <h1>Zip & combineLatest Operator</h1>
    <u><b>Zip operator:</b></u> waits until every stream emits an value and then it emits an
    array which contains value from every of this stream.<br>
    <u><b>combineLatest:</b></u> almost the same as Zip, but we don't need to emit <b>all</b>
    values again. So once some stream emits a new value, then it emits an array
    which contains value from every of this stream.
    <img style="width: 40%;" src="../../assets/rxjs-3.png" alt="RxJs 3">
    <br><br>
    <button mat-raised-button color="secondary" (click)="dispatchOrder()">Order Durum</button>
    <button mat-raised-button color="primary" (click)="_flatBread.next('flat bread')">Add Flat Bread</button>
    <button mat-raised-button color="primary" (click)="_meat.next('meat')">Add Meat</button>
    <button mat-raised-button color="primary" (click)="_sauce.next('sauce')">Add Sauce</button>
    <button mat-raised-button color="primary" (click)="_tomato.next('tomato')">Add Tomato</button>
    <button mat-raised-button color="primary" (click)="_cabbage.next('cabbage')">Add Cabbage</button>
    <ng-container *ngIf="delivery$ | async as product">
      <section *ngIf="product.product">
        <h2>Enjoy!</h2>
        <img style="width: 30%;" src="../../assets/durum.jpg" alt="Durum">
        <h3>Ingredients:</h3>
        <pre>{{ product | json }}</pre>
      </section>
    </ng-container>
    <br><br>
    <h1>SwitchMap vs MergeMap - Flattening Operators</h1>
    Both of them will subscribe the stream under the hood.<br>
    <u><b>mergeMap:</b></u> <i>(flatMap in the past)</i> it will create a queue or requests. New requests will not cancel
        the previous requests. It will finish it gradually one by one. It's
        useful in Logger - for example we want to send logs to the server and
        don't want to miss some. So don't cancel previous.<br><br>
    <u><b>switchMap:</b></u> it will cancel the previous request and start subscribing
        the new one. It's useful within HTTP requests. We obviously want to
        resolve the new HTTP request than the old one.<br>
    <img style="width: 30%;" src="../../assets/rxjx-4.png" alt="RxJs 4"><br>
    <img style="width: 30%;" src="../../assets/rxjx-5.png" alt="RxJs 5">
  `,
  styles: []
})
export class ReactiveProgrammingComponent implements OnInit {
  durum$!: Observable<Durum>;
  delivery$!: Observable<Product>;

  _order = new Subject<Order>();
  _flatBread = new Subject<'flat bread'>();
  _meat = new Subject<'meat'>();
  _sauce = new Subject<'sauce'>();
  _tomato = new Subject<'tomato'>();
  _cabbage = new Subject<'cabbage'>();

  private breadCount = 0;
  private meatCount = 0;
  private sauceCount = 0;
  private tomatoCount = 0;
  private cabbageCount = 0;
  private customerId = 0;

  ngOnInit() {
    this.durum$ = zip(
      this._flatBread.pipe(map((ing) => `${ing}${++this.breadCount}`), tap(console.log)),
      this._meat.pipe(map((ing) => `${ing}${++this.meatCount}`), tap(console.log)),
      this._sauce.pipe(map((ing) => `${ing}${++this.sauceCount}`), tap(console.log)),
      this._tomato.pipe(map((ing) => `${ing}${++this.tomatoCount}`), tap(console.log)),
      this._cabbage.pipe(map((ing) => `${ing}${++this.cabbageCount}`), tap(console.log))
    ).pipe(
      tap((durum) => console.log('Enjoy!', durum))
    );

    // this.durum$ = combineLatest([
    //   this._flatBread.pipe(map((ing) => `${ing}${++this.breadCount}`), tap(console.log)),
    //   this._meat.pipe(map((ing) => `${ing}${++this.meatCount}`), tap(console.log)),
    //   this._sauce.pipe(map((ing) => `${ing}${++this.sauceCount}`), tap(console.log)),
    //   this._tomato.pipe(map((ing) => `${ing}${++this.tomatoCount}`), tap(console.log)),
    //   this._cabbage.pipe(map((ing) => `${ing}${++this.cabbageCount}`), tap(console.log))
    // ]).pipe(
    //   tap((durum) => console.log('Enjoy!', durum))
    // );

    // until we don't subscribe, the stream does not exist, se have to Place an Order (button),
    // then it'll emit a value
    this.delivery$ = this._order.pipe(
      tap(order => console.log('New Drder: ', order)),
      // Both of them will subscribe the stream under the hood.
      // mergeMap: it will create a queue or requests. New requests will not cancel
      //     the previous requests. It will finish it gradually one by one. It's
      //     useful in Logger - for example we want to send logs to the server and
      //     don't want to miss some. So don't cancel previous.
      // switchMap: it will cancel the previous request and start subscribing
      //     the new one. It's useful within HTTP requests. We obviously want to
      //     resolve the new HTTP request than the old one.
      // mergeMap will subscribe under the hood
      mergeMap(
        ({ amount, customerId }) => this.durum$.pipe(
          take(amount), // please take a number of orders that has been ordered
          // convert it, create an object with product and customerId
          map((durum) => ({ product: durum, customerId }))
        )
      ),
      tap(product => console.log('Delivered Product: ', product))
    );
  }

  dispatchOrder() {
    const amount = Math.floor(Math.random() * 3) + 1;
    ++this.customerId;
    this._order.next({ amount, customerId: this.customerId })
  }
}
