import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class LoanService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createLoanDto: CreateLoanDto) {
    return this.loan.create({
      data: createLoanDto
    })
  }

  findAll() {
    return this.loan.findMany({
      orderBy: { createdAt: 'desc' }
    })
  }

  // findOne(id: string) {
  //   return 
  // }

  // update(id: number, updateLoanDto: UpdateLoanDto) {
  //   return `This action updates a #${id} loan`;
  // }

  remove(id: string) {
    return this.loan.delete({
      where: { id }
    })
  }
}
