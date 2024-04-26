import { Inject } from '@nestjs/common';
import { ServiceA } from './service-A';

export class BaseService {
  @Inject(ServiceA) private readonly serviceA: ServiceA;

  getHello(): string {
    return 'Hello World! Base Service';
  }

  doSomeFuncFromA(): string {
    return this.serviceA.getHello();
  }
}
