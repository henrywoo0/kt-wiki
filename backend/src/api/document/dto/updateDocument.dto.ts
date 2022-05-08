import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateDocumentDto {
  @IsNotEmpty()
  @IsNumber()
  idx!: number;

  @IsNotEmpty()
  @IsString()
  text!: string;
}
