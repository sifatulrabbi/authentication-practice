import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(): any {
    return { message: 'logged in!' };
  }

  @Get('protected')
  getHello(@Req() req: Request): any {
    return req.user;
  }
}
