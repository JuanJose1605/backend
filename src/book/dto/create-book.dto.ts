import { IsNumber, IsString } from "class-validator"

export class CreateBookDto {
    @IsString()
    title:          string
    @IsNumber()
    publishedYear:  number
    @IsNumber()
    copiesTotal:    number                   
    @IsNumber()
    categoryId:     number
    @IsString()
    publisher:      string
}
