import { Component, inject, Inject } from '@angular/core';
import { WINDOW } from './window.token';
import { StateMgmtService } from './state-mgmt.service';

@Component({
  selector: 'ng-sandbox-inject-function',
  template: `
    <b>Use case 1</b> for using <i>inject()</i> - wherever we need to inject some external
    token or service, we can inject it through the inject function
    The 'providedIn' here is for alternative to defining a providing the token
    in the module like providers: &lsqb; &#x7b;provide: WINDOW, useClass: ...&#125; &rsqb;
    <pre>
      export const WINDOW = new InjectionToken&lt;Window&gt;('global Window object', &#x7b;
      providedIn: 'root',
          factory: () => &#x7b;
            // DEPRECATED: as second param you can provide resolution modifiers if you want
            const platform = inject(PLATFORM_ID, InjectFlags.Optional);
            return platform === 'browser' ? window : &#x7b;&#125; as Window;
          &#125;
      &#125;);
    </pre>
    <b>Use case 2</b> for using <i>inject()</i> - is same as the first one, but 
    in the @Injectable annotation. That means that it's useful for the services.
    So inside the service file under @Injectable annotation, we'll use useFactory
    (for example) and then there we need some external dependency.
    <br><br>
    the <b>Use case 1</b> and <b>Use case 2</b> were only two places where we
    could use the inject function. That was under the Angular v13. Since the newer
    Angular has come, we could use it as an alternative for <i>classical</i>
    injecting dependencies inside the components - <b><u>but the old way should be preferred.</u></b>
    It's very useful when we're injecting some external dependency which has its own
    dependencies, hence in place where we're injecting it, we need to provide also
    other dependencies via calling <b>super()</b>.
    <br><br>
    <b>Use case 3 (new)</b> for using <i>inject()</i> - inject deps in a new way,
    that's shorter and you don't need to manually specify the type of injected
    token/service. It's automatically detected. So you cannot make typo that you've
    specified wrong type which is detected in runtime.
    <pre>
      window = inject(WINDOW);
      constructor(<span style="color: green;">/*@Inject(WINDOW) private window: Window*/</span>) &#x7b;
          console.log('Window object: ', this.window);
      &#125;
    </pre>
    <b>Use case 4 (new)</b> for using <i>inject()</i> - inherited deps have not
    to be specified in the child.
    <pre>
      <b>// base-widget.directive.ts</b>
      @Directive( &#x7b;
        selector: '[ngSandboxBaseWidget]',
      })
      export class BaseWidgetDirective  &#x7b;
        @Input() id = '';
        @Input() title = '';
      
        <span style="color: green;">
        // New usage of inject() - It's mostly useful when injected dep has its own
        // deps - hence we won't need to inject it also here in the 'child'
        </span>
        state = <b>inject</b>(StateMgmtService);
        httpClient = <b>inject</b>(HttpClient);
        <span style="color: green;">
        // constructor(
        //   private state: StateMgmtService,
        //   private httpClient: HttpClient
        // )  &#x7b;&#125;
        </span>
      &#125;
      
      <b>// extended-widget.component.ts</b>
      @Component(...)
      export class ExtendedWidgetComponent <b>extends</b> BaseWidgetDirective &#x7b;
        
      <span style="color: green;">
          // New usage of inject() - It's mostly useful when injected dep has its own
          // deps - hence we won't need to inject it also here in the 'child'
      </span>
          constructor(
            private actions: HttpStateService, <b>// new service I want to add in child</b>
          <span style="color: green;">
            // state: StateMgmtService,
            // httpClient: HttpClient
          </span>
          ) &#x7b;
        super();
        <span style="color: green;">
        // super(state, httpClient);
        </span>
      &#125;
    &#125;
    </pre>
    <b>Use case 5 (new)</b> for using <i>inject()</i> - blackbox for state management. 
    That means that externally in some function I'll inject dependencies needed
    for do the state update of the app, call particular method and this function 
    just call somewhere in the component. So I don't need to take care of <i>'what I
      need to inject if I just want to update the state'</i>. This is pros, cons is
    that I really don't know something about the deps, because this function could
    be stored externally.
    <pre>
      function injectState(key: string) &#x7b;
        const store = <b>inject</b>(Store);
        return store.select(key)
      &#125;
      
      // somewhere in the component
      state = injectState('users');
    </pre>
  `,
  styles: [],
})
export class InjectFunctionComponent {
  // New way how to inject dependencies (but the old one should be preferred)
  // Pros: we don't need to specify directly the type 'Window' - it will be
  // automatically detected. And it's shorter syntax.
  // window = inject(WINDOW);
  constructor(@Inject(WINDOW) private window: Window, private state: StateMgmtService) {
    console.log('Window object: ', this.window);
  }
}
