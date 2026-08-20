import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-params.dto';

@Injectable()
export class UsersService {
  /**
   * findAll
   */
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
      },
    ];
  }
}
