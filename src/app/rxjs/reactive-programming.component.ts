import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, Subject, tap, zip } from 'rxjs';

type Durum = ['flat bread', 'meat', 'sauce', 'tomato', 'cabbage'];

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
    <button mat-raised-button color="primary" (click)="_flatBread.next('flat bread')">Add Flat Bread</button>
    <button mat-raised-button color="primary" (click)="_meat.next('meat')">Add Meat</button>
    <button mat-raised-button color="primary" (click)="_sauce.next('sauce')">Add Sauce</button>
    <button mat-raised-button color="primary" (click)="_tomato.next('tomato')">Add Tomato</button>
    <button mat-raised-button color="primary" (click)="_cabbage.next('cabbage')">Add Cabbage</button>
    <ng-container *ngIf="durum$ | async as durum">
      <section *ngIf="durum.length > 0">
        <h2>Enjoy!</h2>
        <img style="width: 30%;" src="../../assets/durum.jpg" alt="Durum">
        <h3>Ingredients:</h3>
        <pre>{{ durum | json }}</pre>
      </section>
    </ng-container>
  `,
  styles: []
})
export class ReactiveProgrammingComponent implements OnInit {
  durum$!: Observable<Durum>;

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
  }
}
