import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
// import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public get() {
    return this.userService.get();
  }

  @Post()
  async create(@Body() newUser: CreateUserDto) {
    return this.userService.create(newUser);
  }
}
