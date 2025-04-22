import { IsString } from "class-validator";

export class CreateBookAuthorDto {
    @IsString()
    name: string;

}
