import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { ServiceB } from './service-B';
import { ServiceA } from './service-A';
import { EmailService } from './email/email.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [ServiceA, ServiceB, EmailService],
})
export class AppModule {}
