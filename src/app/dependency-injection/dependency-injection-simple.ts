class UserService {
  sayHi() {
    console.log('Hi!!');
  }
}

class Component {
  constructor(public user: UserService) {
  }
}

// "Angular" DI
class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    // creating instances of the services; key will be ClassName of the service
    this._providers.forEach(service => this._container.set(service, new service()));
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);

    if (!serviceInstance) {
      throw Error('No provider found!');
    }
    return serviceInstance;
  }
}

// Somewhere in application
const injector = new Injector([UserService]);

// Same as we forget to provide service in Angular and trying to inject the
// service somewhere else => No providers found
// const injector = new Injector(); Throws 'No providers found'
const component = new Component(injector.get([UserService]));
component.user.sayHi();
