import { Component } from '@angular/core';

@Component({
  selector: 'ng-sandbox-router-providers',
  template: `
    Since <b>Angular 14+</b> It's possible to provide services and tokens for specified route. So we can
    make a sure, that it'll be singleton.
    <pre>
      &#x7b;
        path: 'admin',
        <b>providers:</b> &lsqb;
          &#x7b; provide: UserLoadService, useExisting: MockLoadService &#125;
        &rsqb;
        loadComponent: () => import('./feature/admin/admin.component').then(c => c.AdminComponent)
      &#125;
    </pre>
    It is available for eagerly loaded components or modules. Since the providers
    are now for routes, than the <i>Module Injector</i> was renamed to <b>Environment Injector.</b>
    Here's the schema how is Angular finding the provider through the Injector Hierarchy.
    First of all it's searching it in <i>Node Injector (for components)</i> and then 
    if he cannot find it, it start searching in particular Router Injector etc.
    <img style="width: 80%;" src="../../../assets/router-providers.png">
  `,
  styles: [],
})
export class RouterProvidersComponent {}
