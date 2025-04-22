import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ReservationService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createReservationDto: CreateReservationDto) {
    return this.reservation.create({
      data: createReservationDto
    })  }

  findAll() {
    return this.reservation.findMany({
      orderBy: { createdAt: 'desc' }
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} reservation`;
  // }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return this.reservation.update({
      where: { id } , data: updateReservationDto
    })
  }

  remove(id: number) {
    return this.reservation.delete({
      where: { id }
    })
  }
}
