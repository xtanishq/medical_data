import { UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService(new UsersService());
  });

  it('signs up a user without exposing the password', () => {
    const user = authService.signup({
      name: 'Tanishq',
      email: 'tanishq@example.com',
      password: 'password123',
    });

    expect(user).toMatchObject({
      name: 'Tanishq',
      email: 'tanishq@example.com',
    });
    expect(user).not.toHaveProperty('password');
    expect(user).not.toHaveProperty('passwordHash');
  });

  it('logs in with correct credentials', () => {
    authService.signup({
      name: 'Tanishq',
      email: 'tanishq@example.com',
      password: 'password123',
    });

    expect(
      authService.login({
        email: 'tanishq@example.com',
        password: 'password123',
      }),
    ).toMatchObject({
      message: 'Login successful',
      user: {
        email: 'tanishq@example.com',
      },
    });
  });

  it('rejects wrong credentials', () => {
    authService.signup({
      name: 'Tanishq',
      email: 'tanishq@example.com',
      password: 'password123',
    });

    expect(() =>
      authService.login({
        email: 'tanishq@example.com',
        password: 'wrong-password',
      }),
    ).toThrow(UnauthorizedException);
  });
});
