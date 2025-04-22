import { IsNumber, IsString } from "class-validator";

export class CreateStatusBookDto {
    @IsString()
    reason: string
    @IsNumber()
    bookId: number
}
