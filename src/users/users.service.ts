import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './db/user.entity';

@Injectable()
export class UsersService {
  constructor(private repo: Repository<User>) {}
}
