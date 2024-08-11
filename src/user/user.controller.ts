import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public get() {
    return this.userService.get();
  }

  @Post()
  public create(@Body() userDto: UserDto) {
    console.log(userDto);
    return this.userService.create(userDto);
  }
}
