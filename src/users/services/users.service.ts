import { Injectable } from '@nestjs/common';
import { IUser } from 'src/types';

@Injectable()
export class UsersService {
  private readonly users: IUser[] = [
    {
      _id: 1,
      name: 'Sifatul',
      username: 'temujin',
      password: 'temujin',
    },
    {
      _id: 2,
      name: 'Rabbi',
      username: 'rabbi',
      password: 'rabbi',
    },
    {
      _id: 1,
      name: 'Hideyoshi',
      username: 'hideyoshi',
      password: 'hideyoshi',
    },
  ];

  async findOne(username: string): Promise<IUser> {
    const user = await this.users.find((user) => user.username === username);

    if (!user) {
      throw 'Cannot find user';
    } else {
      return user;
    }
  }
}
