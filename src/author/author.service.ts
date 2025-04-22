import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class AuthorService extends PrismaClient  implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createAuthorDto: CreateAuthorDto) {
    return this.author.create({
      data: createAuthorDto
    })
  }

  findAll() {
    return this.author.findMany({
      orderBy: { createdAt: 'desc' }
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} author`;
  // }

  // update(id: number, updateAuthorDto: UpdateAuthorDto) {
  //   return `This action updates a #${id} author`;
  // }

  remove(id: string) {
    return this.author.delete({
      where: { id }
    })
  }
}
