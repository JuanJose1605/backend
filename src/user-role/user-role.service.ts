import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UserRoleService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createUserRoleDto: CreateUserRoleDto) {
    return this.userRole.create({
      data: { ...createUserRoleDto }
    })
  }

  findAll() {
    return this.userRole.findMany({
      orderBy: { createdAt: 'desc' }
    })
  }

  findOne() {
    return this.userRole.findFirst()
  }

  // update(id: number, updateUserRoleDto: UpdateUserRoleDto) {
  //   return `This action updates a #${id} userRole`;
  // }

  remove(id: string) {
    return this.userRole.delete({
      where: { id }
    })
  }
}
