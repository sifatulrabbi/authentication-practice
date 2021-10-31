import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validate(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      const { username, password, ...rest } = user;
      return rest;
    }

    return null;
  }
}
