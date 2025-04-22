import { IsNumber, IsString } from "class-validator"

export class CreateReservationDto {
    @IsNumber()
    userId:     number
    @IsNumber()
    bookId:     number
}
