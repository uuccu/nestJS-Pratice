import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { ServiceB } from './service-B';
import { ServiceA } from './service-A';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [ServiceA, ServiceB],
})
export class AppModule {}
