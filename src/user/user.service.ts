import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './create-user.dto';
// import { Prisma, User } from '@prisma/client/user_db';

@Injectable()
export class UserService {
  // constructor(private prisma: PrismaService) {}

  public get(): string {
    return '<strong>Hello User!</strong>';
  }

  public async create(data: CreateUserDto) {
    console.log(data);
    // return this.prismaService.user.create({ data });
  }
}
