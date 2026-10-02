import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): UserResponseDto {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): UserResponseDto[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): UserResponseDto {
    return this.usersService.findOne(id);
  }
}
