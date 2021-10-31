import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request): any {
    return req.user;
  }

  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
