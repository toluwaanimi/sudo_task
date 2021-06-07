import { IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class NoteDTO{
    @IsNotEmpty()
    @IsString()
    title : string

    @IsNotEmpty()
    @IsString()
    text :string

}

export class ParamsDTO{
    @IsMongoId()
    id : string
}