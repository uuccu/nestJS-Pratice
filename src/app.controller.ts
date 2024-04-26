import { Controller, Get } from '@nestjs/common';
import { ServiceB } from './service-B';

@Controller()
export class AppController {
  constructor(private readonly serviceB: ServiceB) {}
  @Get('/serviceB')
  getHello(): string {
    return this.serviceB.getHello();
  }
}
