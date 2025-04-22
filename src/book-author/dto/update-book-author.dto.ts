import { PartialType } from '@nestjs/mapped-types';
import { CreateBookAuthorDto } from './create-book-author.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateBookAuthorDto extends PartialType(CreateBookAuthorDto) {
    @IsString()
    name: string;
    @IsBoolean()
    status: boolean

}
