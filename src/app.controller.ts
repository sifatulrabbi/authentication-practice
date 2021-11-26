import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/guards/authenticated.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(): any {
    return { message: 'logged in!' };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Req() req: Request): any {
    return req.user;
  }
}
