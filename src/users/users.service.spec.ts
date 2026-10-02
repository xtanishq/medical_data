import { ConflictException, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  it('creates a user without exposing the password', () => {
    const user = service.create({
      name: 'Tanishq',
      email: 'TANISHQ@example.com',
      password: 'password123',
    });

    expect(user).toMatchObject({
      name: 'Tanishq',
      email: 'tanishq@example.com',
    });
    expect(user).not.toHaveProperty('password');
    expect(user).not.toHaveProperty('passwordHash');
  });

  it('returns all created users', () => {
    service.create({
      name: 'Tanishq',
      email: 'tanishq@example.com',
      password: 'password123',
    });

    expect(service.findAll()).toHaveLength(1);
  });

  it('throws when email already exists', () => {
    const input = {
      name: 'Tanishq',
      email: 'tanishq@example.com',
      password: 'password123',
    };

    service.create(input);

    expect(() => service.create(input)).toThrow(ConflictException);
  });

  it('throws when user does not exist', () => {
    expect(() => service.findOne('missing-user-id')).toThrow(NotFoundException);
  });
});
