import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createUserDto: CreateUserDto) {
    return this.user.create(
      {
        data: createUserDto,
      }
    )
  }

  findAll() {
    return this.user.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })}

  findOne() {
    return this.user.findFirst()
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: string) {
    return this.user.delete({where:{id}})
  }
}
