import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateNoticeDto {
  @IsNotEmpty()
  @IsNumber()
  idx: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;
}
