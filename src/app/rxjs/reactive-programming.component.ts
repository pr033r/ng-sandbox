import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-reactive-programming',
  template: `
    We can imagine Observables as a <b>water pipes</b> in the house. So for example
    if we want to drink a water, we have to turn the trigger to get a water from
    the source - .subscribe(). But we also don't need to forget about turn it off
    - unsubscribe(). The whole pipe system could be represented with some source
    of data - of(...), from(...), etc. <br><br>
    Also, when we need to filter the water from source, we have to use some 
    filter - same in RxJS filter(...). If we want to boil the water, also use
    another operator - map(...) to transform all incoming data.
    
    <img style="width: 70%;" src="../../assets/rxjs-1.png">
    <img style="width: 70%;" src="../../assets/rxjs-2.png">
  `,
  styles: [],
})
export class ReactiveProgrammingComponent {}
