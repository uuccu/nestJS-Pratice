import { Inject, Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import * as uuid from 'uuid';
import { UserInfo } from './UserInfo';

@Injectable()
export class UsersService {
  @Inject(EmailService) private emailService: EmailService;
  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  async checkUserExists(email: string) {
    return false; // todo
  }

  async saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    return; // todo
  }

  async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO

    throw new Error('Not implemented');
  }

  async login(email: string, password: string): Promise<string> {
    // TODO

    throw new Error('Not implemented');
  }

  async getUserInfo(userId: string): Promise<UserInfo> {
    // TODO

    throw new Error('Not implemented');
  }
}
