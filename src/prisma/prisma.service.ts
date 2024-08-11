import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/user_db';

@Injectable()
export class PrismaService {
  public client: PrismaClient;
  // async onModuleInit() {
  //   await this.$connect();
  // }

  constructor() {
    this.client = new PrismaClient();
  }
}
