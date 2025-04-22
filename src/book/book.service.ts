import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class BookService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createBookDto: CreateBookDto) {
    return this.book.create({
      data: createBookDto
    })
  }

  findAll() {
    return this.book.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} book`;
  // }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  remove(id: string) {
    return this.book.delete({
      where: { id }
    })
  }
}
