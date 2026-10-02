import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserResponseDto } from '../users/dto/user-response.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { SignupDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  signup(signupDto: SignupDto): UserResponseDto {
    return this.usersService.create(signupDto);
  }

  login(loginDto: LoginDto): LoginResponseDto {
    const user = this.usersService.findByEmail(loginDto.email);

    if (!user || !this.usersService.isPasswordValid(user, loginDto.password)) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return {
      message: 'Login successful',
      user: this.usersService.toResponseDto(user),
    };
  }
}
