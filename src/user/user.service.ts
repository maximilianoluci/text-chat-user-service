import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  getUser(): string {
    return '<strong>Hello User!</strong>';
  }

  createUser(userDto: UserDto): string {
    console.log(userDto);
    return '<strong>User created!</strong>';
  }
}
