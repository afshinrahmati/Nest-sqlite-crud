import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
    // see id email exsit
    const user = await this.userService.findAll(email);

    if (user.length) {
      throw new BadRequestException('Email in use');
    }
    // hash the users password
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    // create a new user save it
    return this.userService.create(email, result);
    // return the user
  }

  async signin(email: string, password: string) {
    const [user] = await this.userService.findAll(email);
    if (!user) {
      throw new NotFoundException('User Not Found');
    }
    const [salt, storeHash] = await user.password.split('.');
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (hash.toString('hex') !== storeHash) {
      throw new BadRequestException('your password nor correct');
    }

    return user;
  }
}
