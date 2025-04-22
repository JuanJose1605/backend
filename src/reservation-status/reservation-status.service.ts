import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateReservationStatusDto } from './dto/create-reservation-status.dto';
import { UpdateReservationStatusDto } from './dto/update-reservation-status.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ReservationStatusService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createReservationStatusDto: CreateReservationStatusDto) {
    return this.reservationStatus.create({
      data: createReservationStatusDto
    })
  }

  findAll() {
    return this.reservationStatus.findMany({
      orderBy: { createdAt: 'asc'}
    })
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} reservationStatus`;
  // }

  // update(id: number, updateReservationStatusDto: UpdateReservationStatusDto) {
  //   return `This action updates a #${id} reservationStatus`;
  // }

  remove(id: string) {
    return this.reservationStatus.delete({
      where: { id };
    })
  }
}
