import { Component, OnInit } from '@angular/core';
import { Observable, Subject, tap, zip } from 'rxjs';
import { logger } from 'nx/src/utils/logger';

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
    
    <h1>Zip Operator</h1>
  `,
  styles: [],
})
export class ReactiveProgrammingComponent implements OnInit {
  durum$!: Observable<Durum>;

  _flatBread = new Subject<'flat bread'>();
  _meat = new Subject<'meat'>();
  _sauce = new Subject<'sauce'>();
  _tomato = new Subject<'tomato'>();
  _cabbage = new Subject<'cabbage'>();

  ngOnInit() {
    this.durum$ = zip(
      this._flatBread,
      this._meat,
      this._sauce,
      this._tomato,
      this._cabbage
    ).pipe(
      tap((durum) => console.log('Enjoy!', durum))
    );
  }
}
