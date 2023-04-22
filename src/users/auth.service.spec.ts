import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { User } from './db/user.entity';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(async () => {
    const fackeUserService = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password }),
    };
    const module = Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fackeUserService,
        },
      ],
    }).compile();

    service = (await module).get(AuthService);
  });
  it('test', async () => {
    expect(service).toBeDefined();
  });
  it('check hash & salt', async () => {
    const user = await service.signup('afshntest@gmail.com', 'afvsa9899');

    expect(user.password).not.toEqual('afvsa9899');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });
});
