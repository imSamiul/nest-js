import { Controller } from '@nestjs/common';
import { UsersService } from './providers/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
}
