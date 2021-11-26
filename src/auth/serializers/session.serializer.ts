import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    /**
     * another use case:
     * done(null, {id: user.id});
     */
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: Error, user: any) => void): any {
    /**
     * another use case:
     * const user = this.usersService.findById(payload.id);
     * done(null, user);
     */
    done(null, payload);
  }
}
