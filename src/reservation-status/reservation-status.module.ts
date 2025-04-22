import { Module } from '@nestjs/common';
import { ReservationStatusService } from './reservation-status.service';
import { ReservationStatusController } from './reservation-status.controller';

@Module({
  controllers: [ReservationStatusController],
  providers: [ReservationStatusService],
})
export class ReservationStatusModule {}
