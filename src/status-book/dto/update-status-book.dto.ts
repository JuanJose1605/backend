import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusBookDto } from './create-status-book.dto';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class UpdateStatusBookDto extends PartialType(CreateStatusBookDto) {
    @IsString()
        reason: string
        @IsNumber()
        bookId: number
        @IsBoolean()
        status: boolean
}
