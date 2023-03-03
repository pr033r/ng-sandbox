import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-app-initializer',
  template: `
    Using <b><u>APP_INITIALIZER</u></b> token is called just right in <b>bootstrapModule(AppModule)</b>.
    Exactly said it's just before AppModule is loaded inside the bootstrapModule method.
    It's useful when we need for example load some config data from the server
    before the app is bootstrapped - therefore all Observers/Promises must be
    resolved. Until it's not, the app basically won't load.<br><br>
    For example we want to fetch from the server API Endpoints for the whole app,
    that's perfect life-example. Initializer.module will be inserted into AppModule.
    So in we'd do something like this:
    <pre>
    <b>// initializer.module.ts</b>
    @NgModule(&#x7b;
      providers: &lsqb;
        &#x7b;
          // return value for APP_INITIALIZER must be function
          provide: <b><u>APP_INITIALIZER</u></b>,
          multi: true, // must be also
          <b>useFactory</b>: (config: <u>ConfigService</u>) => &#x7b;
            console.log('app initialization...');
      
            // If we'd return Observable or Promise, Angular will wait until it will
            // be resolved/completed, then it'll proceed with bootstrapping the module
            // through .bootstrapModule(AppModule) in main.ts. So we have to resolve it
            // via for example pipe(take(1))
            // return interval(1000).pipe(take(1));
            return () => &#x7b;
              // bootstrap process will be blocked until the 'fetch' data will be completed
              config.fetchEndpoints();
    
              // bootstrap will be blocked until we get the very first value from the stream
              return config.api$.pipe((take(1)));
            &#125;
          &#125;,
          deps: &lsqb;<u>ConfigService</u>&rsqb;
        &#125;,
      &rsqb;,
    &#125;)
    export class InitializerModule &#x7b;&#125;
      
      
      
    <b>// config.service.ts</b>
    interface <b><u>Endpoints</u></b> &#x7b;
      api: string;
      licenseCheck: string;
    &#125;

    const MOCK_DATA: <b><u>Endpoints</u></b> = &#x7b;
      api: 'http://localhost:3000/api/',
      licenseCheck: 'http://localhost:3000/identity',
    &#125;;
    
    // Topic: APP_INITIALIZER for Dependency Injection
    @Injectable(&#x7b;
      providedIn: 'root',
    &#125;)
    export class ConfigService &#x7b;
      // BehaviorSubject because it has always some value, by default here 'null'
      private <u>endpoints</u> = new <b>BehaviorSubject</b>&lt;<b><u>Endpoints</u></b> | null&gt;(null);
      readonly <u>api$</u> = this.<u>endpoints</u>.<b>asObservable()</b>.pipe(
        <b>filter</b>((endpoints) => !!endpoints),
        <b>map</b>((endpoints) => endpoints?.api)
      );
    
      get <b style="color: red;">api()</b> &#x7b;
        return this.endpoints.getValue()?.api;
      &#125;

      fetchEndpoints() &#x7b;
        of(MOCK_DATA).<b>subscribe</b>(&#x7b;
          // if it succeeds, call next(...)
          <u>next</u>: (endpoints) => this.<u>endpoints</u>.next(endpoints),
          <u>error</u>: () => this.<u>endpoints</u>.next(&#x7b;api: 'http://fallback', licenseCheck: 'http://fallback'&#125;)
        &#125;);
      &#125;
    &#125;
      
      
    <b>// app.component.ts</b>
    constructor(private <u>http</u>: <b>HttpClient</b>, private <u>config</u>: <b>ConfigService</b>) &#x7b;&#125;
      
    ngOnInit() &#x7b;
      console.log('AppComponent init.');

      // .subscribe() for execute the operator - or use 'async' is even better
      // Old approach without using getter in ConfigService
      // this.config.api$.pipe(
      //   switchMap(url => this.http.get(\`$&#x7b;url&#125;/test\`))
      // ).subscribe();
  
      // Reactive approach which should be followed
      this.http.get(\`$&#x7b;this.config.<b style="color: red;">api</b>&#125;/test\`).subscribe();
    &#125;
    </pre>
  `,
  styles: [],
})
export class AppInitializerComponent {}
