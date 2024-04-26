import { Injectable } from '@nestjs/common';
import Mail from 'nodemailer/lib/mailer';
import * as nodeMailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodeMailer.createTransport({
      service: 'Gmail',
      auth: {},
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = 'http://localhost:3000';

    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const mailOptions: EmailOptions = {
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `
        <h1>가입 인증 메일</h1>
        <p>아래 링크를 클릭하여 가입을 완료해주세요.</p>
        <a href="${url}">가입 인증하기</a>              
            `,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
