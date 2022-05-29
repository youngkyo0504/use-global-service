type Class<T> = new (...args: any[]) => T;

export class ServiceProvider {
  private serviceProvider: Map<string, Object>;

  constructor() {
    this.serviceProvider = new Map<string, Object>();
  }

  private createService<T>(serviceClass: Class<T>): T {
    const serviceInstance = new serviceClass();
    this.serviceProvider.set(serviceClass.name, serviceInstance);
    return serviceInstance;
  }

  use<T>(serviceClass: Class<T>): T {
    const service = this.serviceProvider.get(serviceClass.name);
    if (service === undefined) {
      return this.createService(serviceClass);
    }

    return service as T;
  }
}
