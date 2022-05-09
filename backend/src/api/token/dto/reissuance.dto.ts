import { IsNotEmpty } from 'class-validator';

export default class ReissuanceDto {
  @IsNotEmpty()
  refreshToken!: string;
}
