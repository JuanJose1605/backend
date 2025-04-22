import { IsString } from "class-validator";

export class CreateReservationStatusDto {
    @IsString()
    name: string
}
