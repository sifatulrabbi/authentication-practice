import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './services/local-strategy.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  exports: [LocalAuthGuard],
})
export class AuthModule {}
