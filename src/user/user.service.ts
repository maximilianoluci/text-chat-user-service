import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client/user_db';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public get(): string {
    return '<strong>Hello User!</strong>';
  }

  public async create(data: UserDto): Promise<User> {
    return this.prismaService.user.create({ data });
  }
}
