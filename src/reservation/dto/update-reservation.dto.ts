import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';
import { IsBoolean, IsNumber } from 'class-validator';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
    @IsNumber()
    userId:     number
    @IsNumber()
    bookId:     number
    @IsBoolean()
    status: boolean
}
