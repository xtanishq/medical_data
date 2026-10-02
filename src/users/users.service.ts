import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto): UserResponseDto {
    const normalizedEmail = this.normalizeEmail(createUserDto.email);
    const existingUser = this.findByEmail(normalizedEmail);

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const user: User = {
      id: crypto.randomUUID(),
      name: createUserDto.name,
      email: normalizedEmail,
      passwordHash: this.hashPassword(createUserDto.password),
      createdAt: new Date(),
    };

    this.users.push(user);

    return this.toResponseDto(user);
  }

  findByEmail(email: string): User | undefined {
    const normalizedEmail = this.normalizeEmail(email);

    return this.users.find((user) => user.email === normalizedEmail);
  }

  isPasswordValid(user: User, password: string): boolean {
    const [salt, storedHash] = user.passwordHash.split(':');

    if (!salt || !storedHash) {
      return false;
    }

    const hashBuffer = scryptSync(password, salt, 64);
    const storedHashBuffer = Buffer.from(storedHash, 'hex');

    if (hashBuffer.length !== storedHashBuffer.length) {
      return false;
    }

    return timingSafeEqual(hashBuffer, storedHashBuffer);
  }

  findAll(): UserResponseDto[] {
    return this.users.map((user) => this.toResponseDto(user));
  }

  findOne(id: string): UserResponseDto {
    const user = this.users.find((currentUser) => currentUser.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.toResponseDto(user);
  }

  toResponseDto(user: User): UserResponseDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt.toISOString(),
    };
  }

  private hashPassword(password: string): string {
    const salt = randomBytes(16).toString('hex');
    const hash = scryptSync(password, salt, 64).toString('hex');

    return `${salt}:${hash}`;
  }

  private normalizeEmail(email: string): string {
    return email.toLowerCase();
  }
}
