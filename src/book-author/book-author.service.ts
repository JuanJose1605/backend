import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateBookAuthorDto } from './dto/create-book-author.dto';
import { UpdateBookAuthorDto } from './dto/update-book-author.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class BookAuthorService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createBookAuthorDto: CreateBookAuthorDto) {
    return this.bookAuthor.create({
      data: createBookAuthorDto
    })
  }

  findAll() {
    return this.bookAuthor.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} bookAuthor`;
  // }

  update(id: string, updateBookAuthorDto: UpdateBookAuthorDto) {
    return this.bookAuthor.update({
      where: { id } , data: updateBookAuthorDto
    })  }

  remove(id: string) {
    return this.bookAuthor.delete({
      where: { id }
    })
  }
}
