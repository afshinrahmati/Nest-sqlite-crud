import {
  Body,
  Post,
  Controller,
  Get,
  Param,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtos';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';
import { AuthService } from './auth.service';
import { retry } from 'rxjs';

@Controller('auth')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    return this.authService.signup(body.email, body.password);
  }
  @Post('/signin')
  async signup(@Body() body: CreateUserDto) {
    return this.authService.signin(body.email, body.password);
  }

  @Get('?:id')
  async findUser(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @Serialize(UserDto)
  @Get('')
  async findAll(@Query('email') email: string) {
    console.log('HEree');
    return this.userService.findAll(email);
  }
  @Delete('/:id')
  async removeUser(@Param('id') id: number) {
    return this.userService.remove(id);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: number, @Body() body: UpdateUserDto) {
    return this.userService.update(id, body);
  }
}
