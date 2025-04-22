import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateStatusBookDto } from './dto/create-status-book.dto';
import { UpdateStatusBookDto } from './dto/update-status-book.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class StatusBookService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
  await this.$connect()}
  
  create(createStatusBookDto: CreateStatusBookDto) {
    return this.statusBook.create({
      data: createStatusBookDto
    })
  }

  findAll() {
    return this.statusBook.findMany({
      orderBy: { createdAt: 'desc'}
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} statusBook`;
  // }

  update(id: string, updateStatusBookDto: UpdateStatusBookDto) {
    return this.statusBook.update({
      where: { id } , data: updateStatusBookDto
    })
  }

  remove(id: string) {
    return this.statusBook.delete({
      where: {id}
    })
  }
}
