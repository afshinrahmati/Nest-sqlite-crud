import { Body, Post, Controller } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    return body;
  }
}
