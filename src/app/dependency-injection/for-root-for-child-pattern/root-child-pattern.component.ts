import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-root-child-pattern',
  template: ` 
    <h1>For Root &amp; For Child pattern</h1>
    <main>
      <router-outlet></router-outlet>
      <button mat-raised-button color="primary" routerLink="/lazy">Lazy Load</button>
      <button mat-raised-button color="primary" routerLink="/">Root Route</button>
    </main><br>
    In old Angular, it was useful when we wanted to share same instance of the
    service though multiple components. Without using this pattern, Injector
    has created a new instance, hence the service <b>wasn't singleton</b>. That's
    was main use case of the forRoot / forChild pattern. Here it this example
    it's the timer functionality which is <b>sharing the same Observable</b>. Without using
    forRoot / forChild it'd create a new instance for each route - so the timer
    has started from the beginning.<br><br>
    In the modern Angular, the use case for this pattern is useful primary for
    configurations. Anyway a workaround for this is with <b>'providedIn'</b> in the @Injectable
    decorator in the service. <b>Try to use it, when it's really, really needed.</b>
    <br><br>In the folder there's structure where's the <b>/polling</b> folder - this is
    for <u>fake server</u> (ideally it should be in external library). <b>HTTP Polling</b> is technique, 
    where the client <i>polls</i> the server requesting new information. The server holds
    the request open until new data is available. Once available, the server responds
    and sends the new information. (<b>Polling EN = Dotazovani</b>).
    <br><br>
    This pattern is only related to the modules, so it make sense that it's useful
    <b><u>only for the lazy loaded modules</u></b> - not for eagerly loaded module. Because
    when the module is lazy loaded, Angular will create its own Injector.
    <br><br>
    Of course, <b>Angular</b> uses it's own forRoot and forChild patterns where it defines
    own provider tokens and services - it's only related to <b>Angular Router</b>
    <pre>
      
      <b>// polling.module.ts</b>
      @NgModule(&#x7b;
        declarations: &lsqb;PollingComponent&rsqb;,
        imports: &lsqb;],
        exports: &lsqb;PollingComponent],
        // providers: &lsqb;PollingService]
      &#125;)
      export class PollingModule &#x7b;
      
          <span style="color: green;">
          // before 'providedIn' was used in Angular. With it, we don't need to use
          // forRoot & forChild pattern anymore - but it's also useful for other features like
          // external configurations and managing InjectionTokens
          // forRoot is just a name-convention, it could have the name of whatever
          </span>
          static withConfig(config?: <b><u>PollingConfig</u></b>): ModuleWithProviders&lt;<b>PollingModule</b>&gt; &#x7b;
            return &#x7b;
              ngModule: <b>PollingModule</b>,
              providers: &lsqb;
                PollingService,
                &#x7b;
                  provide: <b>INTERVAL</b>,
                  useValue: config?.interval || 2000
                &#125;
              &rsqb;
            &#125;
          &#125;
        &#125;
      
      
      <b>// polling.service.ts</b>
      <span style="color: green;">
      // some config stuff for the user of our 'library'
      // ideally have it the separate file
      </span>
      export interface <b><u>PollingConfig</u></b> &#x7b;
        interval: number;
      &#125;
      export const <b>INTERVAL</b> = new InjectionToken&lt;number&gt;('interval');
      
      @Injectable()
      export class PollingService &#x7b;
        // shareReply() shares the latest value from the stream to the new subscriber
        public polling$ = timer(0, this.interval || 1000).pipe(shareReplay());
      
        constructor(@Optional() @Inject(<b>INTERVAL</b>) private interval: number) &#x7b;
        &#125;
      &#125;
      
      
      <b>// lazy.module.ts</b>
      @NgModule(&#x7b;
          declarations: &lsqb;LazyComponent&rsqb;,
          imports: &lsqb;
            CommonModule,
            LazyRoutingModule,
            <span style="color: green;">
            // using forChild pattern we'll provide PollingService at is defined inside
            // the polling.module - which means with INTERVAL InjectionToken also
            // provided (using for external configuration)
            // PollingModule.forChild(&#x7b;
            //   interval: 3000
            // &#125;)
            // This withConfig will have configured value for the interval
            </span>
            PollingModule.<u>withConfig</u>(&#x7b;
              <b>interval</b>: 3000
            &#125;)
          &rsqb;
      &#125;)
      export class LazyModule &#x7b;&#125;
    </pre>
  `,
  styles: [],
})
export class RootChildPatternComponent {}
