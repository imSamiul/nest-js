import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public findAll() {
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  public findOneById(id: number) {
    return {
      id,
      firstName: 'John',
      email: 'john@doe.com',
    };
  }
}
